(() => {
    "use strict";
    var __webpack_modules__ = {
        375: () => {
            !function webpackUniversalModuleDefinition(root, factory) {
                if ("object" == typeof exports && "object" == typeof module) module.exports = factory(); else if ("function" == typeof define && define.amd) define([], factory); else {
                    var a = factory();
                    for (var i in a) ("object" == typeof exports ? exports : root)[i] = a[i];
                }
            }(window, (function() {
                return modules = [ function(module) {
                    module.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17}');
                }, function(module, exports, __nested_webpack_require_602__) {
                    "use strict";
                    function _typeof(obj) {
                        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                            return typeof obj;
                        } : function _typeof(obj) {
                            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        }, _typeof(obj);
                    }
                    var $ = __nested_webpack_require_602__(2), window = __nested_webpack_require_602__(3), document = window.document, generateMaskSet = __nested_webpack_require_602__(4).generateMaskSet, analyseMask = __nested_webpack_require_602__(4).analyseMask, maskScope = __nested_webpack_require_602__(7);
                    function Inputmask(alias, options, internal) {
                        if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
                        this.el = void 0, this.events = {}, this.maskset = void 0, this.refreshValue = !1, 
                        !0 !== internal && ($.isPlainObject(alias) ? options = alias : (options = options || {}, 
                        alias && (options.alias = alias)), this.opts = $.extend(!0, {}, this.defaults, options), 
                        this.noMasksCache = options && void 0 !== options.definitions, this.userOptions = options || {}, 
                        resolveAlias(this.opts.alias, options, this.opts), this.isRTL = this.opts.numericInput);
                    }
                    function resolveAlias(aliasStr, options, opts) {
                        var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
                        return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, void 0, opts), 
                        $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), 
                        !1);
                    }
                    function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
                        function importOption(option, optionData) {
                            optionData = void 0 !== optionData ? optionData : npt.getAttribute(dataAttribute + "-" + option), 
                            null !== optionData && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), 
                            userOptions[option] = optionData);
                        }
                        if (!0 === opts.importDataAttributes) {
                            var option, dataoptions, optionData, p, attrOptions = npt.getAttribute(dataAttribute);
                            if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(/'/g, '"'), 
                            dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) for (p in optionData = void 0, 
                            dataoptions) if ("alias" === p.toLowerCase()) {
                                optionData = dataoptions[p];
                                break;
                            }
                            for (option in importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts), 
                            opts) {
                                if (dataoptions) for (p in optionData = void 0, dataoptions) if (p.toLowerCase() === option.toLowerCase()) {
                                    optionData = dataoptions[p];
                                    break;
                                }
                                importOption(option, optionData);
                            }
                        }
                        return $.extend(!0, opts, userOptions), "rtl" !== npt.dir && !opts.rightAlign || (npt.style.textAlign = "right"), 
                        "rtl" !== npt.dir && !opts.numericInput || (npt.dir = "ltr", npt.removeAttribute("dir"), 
                        opts.isRTL = !0), Object.keys(userOptions).length;
                    }
                    Inputmask.prototype = {
                        dataAttribute: "data-inputmask",
                        defaults: {
                            _maxTestPos: 500,
                            placeholder: "_",
                            optionalmarker: [ "[", "]" ],
                            quantifiermarker: [ "{", "}" ],
                            groupmarker: [ "(", ")" ],
                            alternatormarker: "|",
                            escapeChar: "\\",
                            mask: null,
                            regex: null,
                            oncomplete: $.noop,
                            onincomplete: $.noop,
                            oncleared: $.noop,
                            repeat: 0,
                            greedy: !1,
                            autoUnmask: !1,
                            removeMaskOnSubmit: !1,
                            clearMaskOnLostFocus: !0,
                            insertMode: !0,
                            insertModeVisual: !0,
                            clearIncomplete: !1,
                            alias: null,
                            onKeyDown: $.noop,
                            onBeforeMask: null,
                            onBeforePaste: function onBeforePaste(pastedValue, opts) {
                                return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
                            },
                            onBeforeWrite: null,
                            onUnMask: null,
                            showMaskOnFocus: !0,
                            showMaskOnHover: !0,
                            onKeyValidation: $.noop,
                            skipOptionalPartCharacter: " ",
                            numericInput: !1,
                            rightAlign: !1,
                            undoOnEscape: !0,
                            radixPoint: "",
                            _radixDance: !1,
                            groupSeparator: "",
                            keepStatic: null,
                            positionCaretOnTab: !0,
                            tabThrough: !1,
                            supportsInputType: [ "text", "tel", "url", "password", "search" ],
                            ignorables: [ 8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                            isComplete: null,
                            preValidation: null,
                            postValidation: null,
                            staticDefinitionSymbol: void 0,
                            jitMasking: !1,
                            nullable: !0,
                            inputEventOnly: !1,
                            noValuePatching: !1,
                            positionCaretOnClick: "lvp",
                            casing: null,
                            inputmode: "text",
                            importDataAttributes: !0,
                            shiftPositions: !0
                        },
                        definitions: {
                            9: {
                                validator: "[0-9１-９]",
                                definitionSymbol: "*"
                            },
                            a: {
                                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                definitionSymbol: "*"
                            },
                            "*": {
                                validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]"
                            }
                        },
                        aliases: {},
                        masksCache: {},
                        mask: function mask(elems) {
                            var that = this;
                            return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), 
                            elems = elems.nodeName ? [ elems ] : elems, $.each(elems, (function(ndx, el) {
                                var scopedOpts = $.extend(!0, {}, that.opts);
                                if (importAttributeOptions(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute)) {
                                    var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                                    void 0 !== maskset && (void 0 !== el.inputmask && (el.inputmask.opts.autoUnmask = !0, 
                                    el.inputmask.remove()), el.inputmask = new Inputmask(void 0, void 0, !0), el.inputmask.opts = scopedOpts, 
                                    el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions), 
                                    el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput, el.inputmask.el = el, 
                                    el.inputmask.maskset = maskset, $.data(el, "_inputmask_opts", scopedOpts), maskScope.call(el.inputmask, {
                                        action: "mask"
                                    }));
                                }
                            })), elems && elems[0] && elems[0].inputmask || this;
                        },
                        option: function option(options, noremask) {
                            return "string" == typeof options ? this.opts[options] : "object" === _typeof(options) ? ($.extend(this.userOptions, options), 
                            this.el && !0 !== noremask && this.mask(this.el), this) : void 0;
                        },
                        unmaskedvalue: function unmaskedvalue(value) {
                            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                            maskScope.call(this, {
                                action: "unmaskedvalue",
                                value
                            });
                        },
                        remove: function remove() {
                            return maskScope.call(this, {
                                action: "remove"
                            });
                        },
                        getemptymask: function getemptymask() {
                            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                            maskScope.call(this, {
                                action: "getemptymask"
                            });
                        },
                        hasMaskedValue: function hasMaskedValue() {
                            return !this.opts.autoUnmask;
                        },
                        isComplete: function isComplete() {
                            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                            maskScope.call(this, {
                                action: "isComplete"
                            });
                        },
                        getmetadata: function getmetadata() {
                            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                            maskScope.call(this, {
                                action: "getmetadata"
                            });
                        },
                        isValid: function isValid(value) {
                            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                            maskScope.call(this, {
                                action: "isValid",
                                value
                            });
                        },
                        format: function format(value, metadata) {
                            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                            maskScope.call(this, {
                                action: "format",
                                value,
                                metadata
                            });
                        },
                        setValue: function setValue(value) {
                            this.el && $(this.el).trigger("setvalue", [ value ]);
                        },
                        analyseMask
                    }, Inputmask.extendDefaults = function(options) {
                        $.extend(!0, Inputmask.prototype.defaults, options);
                    }, Inputmask.extendDefinitions = function(definition) {
                        $.extend(!0, Inputmask.prototype.definitions, definition);
                    }, Inputmask.extendAliases = function(alias) {
                        $.extend(!0, Inputmask.prototype.aliases, alias);
                    }, Inputmask.format = function(value, options, metadata) {
                        return Inputmask(options).format(value, metadata);
                    }, Inputmask.unmask = function(value, options) {
                        return Inputmask(options).unmaskedvalue(value);
                    }, Inputmask.isValid = function(value, options) {
                        return Inputmask(options).isValid(value);
                    }, Inputmask.remove = function(elems) {
                        "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), 
                        elems = elems.nodeName ? [ elems ] : elems, $.each(elems, (function(ndx, el) {
                            el.inputmask && el.inputmask.remove();
                        }));
                    }, Inputmask.setValue = function(elems, value) {
                        "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), 
                        elems = elems.nodeName ? [ elems ] : elems, $.each(elems, (function(ndx, el) {
                            el.inputmask ? el.inputmask.setValue(value) : $(el).trigger("setvalue", [ value ]);
                        }));
                    };
                    var escapeRegexRegex = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
                    Inputmask.escapeRegex = function(str) {
                        return str.replace(escapeRegexRegex, "\\$1");
                    }, Inputmask.dependencyLib = $, window.Inputmask = Inputmask, module.exports = Inputmask;
                }, function(module, exports, __nested_webpack_require_8550__) {
                    "use strict";
                    function _typeof(obj) {
                        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                            return typeof obj;
                        } : function _typeof(obj) {
                            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        }, _typeof(obj);
                    }
                    var window = __nested_webpack_require_8550__(3), document = window.document;
                    function indexOf(list, elem) {
                        for (var i = 0, len = list.length; i < len; i++) if (list[i] === elem) return i;
                        return -1;
                    }
                    function isWindow(obj) {
                        return null != obj && obj === obj.window;
                    }
                    function isArraylike(obj) {
                        var length = "length" in obj && obj.length, ltype = _typeof(obj);
                        return "function" !== ltype && !isWindow(obj) && (!(1 !== obj.nodeType || !length) || "array" === ltype || 0 === length || "number" == typeof length && 0 < length && length - 1 in obj);
                    }
                    function isValidElement(elem) {
                        return elem instanceof Element;
                    }
                    function DependencyLib(elem) {
                        return elem instanceof DependencyLib ? elem : this instanceof DependencyLib ? void (null != elem && elem !== window && (this[0] = elem.nodeName ? elem : void 0 !== elem[0] && elem[0].nodeName ? elem[0] : document.querySelector(elem), 
                        void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new DependencyLib(elem);
                    }
                    DependencyLib.prototype = {
                        on: function on(events, handler) {
                            function addEvent(ev, namespace) {
                                elem.addEventListener ? elem.addEventListener(ev, handler, !1) : elem.attachEvent && elem.attachEvent("on" + ev, handler), 
                                eventRegistry[ev] = eventRegistry[ev] || {}, eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [], 
                                eventRegistry[ev][namespace].push(handler);
                            }
                            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = events.split(" "), endx = 0; endx < _events.length; endx++) {
                                var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                                addEvent(ev, namespace);
                            }
                            return this;
                        },
                        off: function off(events, handler) {
                            var eventRegistry, elem;
                            function removeEvent(ev, namespace, handler) {
                                if (ev in eventRegistry == !0) if (elem.removeEventListener ? elem.removeEventListener(ev, handler, !1) : elem.detachEvent && elem.detachEvent("on" + ev, handler), 
                                "global" === namespace) for (var nmsp in eventRegistry[ev]) eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1); else eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);
                            }
                            function resolveNamespace(ev, namespace) {
                                var hndx, hndL, evts = [];
                                if (0 < ev.length) if (void 0 === handler) for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) evts.push({
                                    ev,
                                    namespace: namespace && 0 < namespace.length ? namespace : "global",
                                    handler: eventRegistry[ev][namespace][hndx]
                                }); else evts.push({
                                    ev,
                                    namespace: namespace && 0 < namespace.length ? namespace : "global",
                                    handler
                                }); else if (0 < namespace.length) for (var evNdx in eventRegistry) for (var nmsp in eventRegistry[evNdx]) if (nmsp === namespace) if (void 0 === handler) for (hndx = 0, 
                                hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) evts.push({
                                    ev: evNdx,
                                    namespace: nmsp,
                                    handler: eventRegistry[evNdx][nmsp][hndx]
                                }); else evts.push({
                                    ev: evNdx,
                                    namespace: nmsp,
                                    handler
                                });
                                return evts;
                            }
                            if (isValidElement(this[0])) {
                                eventRegistry = this[0].eventRegistry, elem = this[0];
                                for (var _events = events.split(" "), endx = 0; endx < _events.length; endx++) for (var nsEvent = _events[endx].split("."), offEvents = resolveNamespace(nsEvent[0], nsEvent[1]), i = 0, offEventsL = offEvents.length; i < offEventsL; i++) removeEvent(offEvents[i].ev, offEvents[i].namespace, offEvents[i].handler);
                            }
                            return this;
                        },
                        trigger: function trigger(events, argument_1) {
                            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = "string" == typeof events ? events.split(" ") : [ events.type ], endx = 0; endx < _events.length; endx++) {
                                var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                                if (void 0 !== document && "global" === namespace) {
                                    var evnt, i, params = {
                                        bubbles: !0,
                                        cancelable: !0,
                                        detail: argument_1
                                    };
                                    if (document.createEvent) {
                                        try {
                                            evnt = new CustomEvent(ev, params);
                                        } catch (e) {
                                            evnt = document.createEvent("CustomEvent"), evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
                                        }
                                        events.type && DependencyLib.extend(evnt, events), elem.dispatchEvent(evnt);
                                    } else evnt = document.createEventObject(), evnt.eventType = ev, evnt.detail = argument_1, 
                                    events.type && DependencyLib.extend(evnt, events), elem.fireEvent("on" + evnt.eventType, evnt);
                                } else if (void 0 !== eventRegistry[ev]) if (events = events.type ? events : DependencyLib.Event(events), 
                                events.detail = arguments.slice(1), "global" === namespace) for (var nmsp in eventRegistry[ev]) for (i = 0; i < eventRegistry[ev][nmsp].length; i++) eventRegistry[ev][nmsp][i].apply(elem, arguments); else for (i = 0; i < eventRegistry[ev][namespace].length; i++) eventRegistry[ev][namespace][i].apply(elem, arguments);
                            }
                            return this;
                        }
                    }, DependencyLib.isFunction = function(obj) {
                        return "function" == typeof obj;
                    }, DependencyLib.noop = function() {}, DependencyLib.isArray = Array.isArray, DependencyLib.inArray = function(elem, arr, i) {
                        return null == arr ? -1 : indexOf(arr, elem, i);
                    }, DependencyLib.valHooks = void 0, DependencyLib.isPlainObject = function(obj) {
                        return "object" === _typeof(obj) && !obj.nodeType && !isWindow(obj) && !(obj.constructor && !Object.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf"));
                    }, DependencyLib.extend = function() {
                        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = !1;
                        for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, 
                        i++), "object" === _typeof(target) || DependencyLib.isFunction(target) || (target = {}), 
                        i === length && (target = this, i--); i < length; i++) if (null != (options = arguments[i])) for (name in options) src = target[name], 
                        copy = options[name], target !== copy && (deep && copy && (DependencyLib.isPlainObject(copy) || (copyIsArray = DependencyLib.isArray(copy))) ? (clone = copyIsArray ? (copyIsArray = !1, 
                        src && DependencyLib.isArray(src) ? src : []) : src && DependencyLib.isPlainObject(src) ? src : {}, 
                        target[name] = DependencyLib.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
                        return target;
                    }, DependencyLib.each = function(obj, callback) {
                        var value, i = 0;
                        if (isArraylike(obj)) for (var length = obj.length; i < length && (value = callback.call(obj[i], i, obj[i]), 
                        !1 !== value); i++) ; else for (i in obj) if (value = callback.call(obj[i], i, obj[i]), 
                        !1 === value) break;
                        return obj;
                    }, DependencyLib.data = function(owner, key, value) {
                        if (void 0 === value) return owner.__data ? owner.__data[key] : null;
                        owner.__data = owner.__data || {}, owner.__data[key] = value;
                    }, "function" == typeof window.CustomEvent ? DependencyLib.Event = window.CustomEvent : (DependencyLib.Event = function(event, params) {
                        params = params || {
                            bubbles: !1,
                            cancelable: !1,
                            detail: void 0
                        };
                        var evt = document.createEvent("CustomEvent");
                        return evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail), 
                        evt;
                    }, DependencyLib.Event.prototype = window.Event.prototype), module.exports = DependencyLib;
                }, function(module, exports, __nested_webpack_require_15164__) {
                    "use strict";
                    var __WEBPACK_AMD_DEFINE_RESULT__;
                    function _typeof(obj) {
                        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                            return typeof obj;
                        } : function _typeof(obj) {
                            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        }, _typeof(obj);
                    }
                    __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                        return "undefined" != typeof window ? window : new (eval("require('jsdom').JSDOM"))("").window;
                    }.call(exports, __nested_webpack_require_15164__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
                }, function(module, exports, __nested_webpack_require_15804__) {
                    "use strict";
                    var $ = __nested_webpack_require_15804__(2);
                    function generateMaskSet(opts, nocache) {
                        var ms;
                        function generateMask(mask, metadata, opts) {
                            var masksetDefinition, maskdefKey, regexMask = !1;
                            if (null !== mask && "" !== mask || (regexMask = null !== opts.regex, mask = regexMask ? (mask = opts.regex, 
                            mask.replace(/^(\^)(.*)(\$)$/, "$2")) : (regexMask = !0, ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), 
                            0 < opts.repeat || "*" === opts.repeat || "+" === opts.repeat) {
                                var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
                                mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1];
                            }
                            return maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask, 
                            !1 !== opts.keepStatic && (maskdefKey = "ks_" + maskdefKey), void 0 === Inputmask.prototype.masksCache[maskdefKey] || !0 === nocache ? (masksetDefinition = {
                                mask,
                                maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                                validPositions: {},
                                _buffer: void 0,
                                buffer: void 0,
                                tests: {},
                                excludes: {},
                                metadata,
                                maskLength: void 0,
                                jitOffset: {}
                            }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, 
                            masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), 
                            masksetDefinition;
                        }
                        if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {
                            if (1 < opts.mask.length) {
                                null === opts.keepStatic && (opts.keepStatic = !0);
                                var altMask = opts.groupmarker[0];
                                return $.each(opts.isRTL ? opts.mask.reverse() : opts.mask, (function(ndx, msk) {
                                    1 < altMask.length && (altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]), 
                                    void 0 === msk.mask || $.isFunction(msk.mask) ? altMask += msk : altMask += msk.mask;
                                })), altMask += opts.groupmarker[1], generateMask(altMask, opts.mask, opts);
                            }
                            opts.mask = opts.mask.pop();
                        }
                        return null === opts.keepStatic && (opts.keepStatic = !1), ms = opts.mask && void 0 !== opts.mask.mask && !$.isFunction(opts.mask.mask) ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts), 
                        ms;
                    }
                    function analyseMask(mask, regexMask, opts) {
                        var match, m, openingToken, currentOpeningToken, alternator, lastMatch, tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, escaped = !1, currentToken = new MaskToken, openenings = [], maskTokens = [], closeRegexGroup = !1;
                        function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                            this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, 
                            this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, 
                            this.quantifier = {
                                min: 1,
                                max: 1
                            };
                        }
                        function insertTestDefinition(mtoken, element, position) {
                            position = void 0 !== position ? position : mtoken.matches.length;
                            var prevMatch = mtoken.matches[position - 1];
                            if (regexMask) 0 === element.indexOf("[") || escaped && /\\d|\\s|\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {
                                fn: new RegExp(element, opts.casing ? "i" : ""),
                                static: !1,
                                optionality: !1,
                                newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element,
                                casing: null,
                                def: element,
                                placeholder: void 0,
                                nativeDef: element
                            }) : (escaped && (element = element[element.length - 1]), $.each(element.split(""), (function(ndx, lmnt) {
                                prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {
                                    fn: /[a-z]/i.test(opts.staticDefinitionSymbol || lmnt) ? new RegExp("[" + (opts.staticDefinitionSymbol || lmnt) + "]", opts.casing ? "i" : "") : null,
                                    static: !0,
                                    optionality: !1,
                                    newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== lmnt && !0 !== prevMatch.static,
                                    casing: null,
                                    def: opts.staticDefinitionSymbol || lmnt,
                                    placeholder: void 0 !== opts.staticDefinitionSymbol ? lmnt : void 0,
                                    nativeDef: (escaped ? "'" : "") + lmnt
                                });
                            }))), escaped = !1; else {
                                var maskdef = (opts.definitions ? opts.definitions[element] : void 0) || Inputmask.prototype.definitions[element];
                                maskdef && !escaped ? mtoken.matches.splice(position++, 0, {
                                    fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function() {
                                        this.test = maskdef.validator;
                                    } : new RegExp("."),
                                    static: maskdef.static || !1,
                                    optionality: !1,
                                    newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
                                    casing: maskdef.casing,
                                    def: maskdef.definitionSymbol || element,
                                    placeholder: maskdef.placeholder,
                                    nativeDef: element,
                                    generated: maskdef.generated
                                }) : (mtoken.matches.splice(position++, 0, {
                                    fn: /[a-z]/i.test(opts.staticDefinitionSymbol || element) ? new RegExp("[" + (opts.staticDefinitionSymbol || element) + "]", opts.casing ? "i" : "") : null,
                                    static: !0,
                                    optionality: !1,
                                    newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element && !0 !== prevMatch.static,
                                    casing: null,
                                    def: opts.staticDefinitionSymbol || element,
                                    placeholder: void 0 !== opts.staticDefinitionSymbol ? element : void 0,
                                    nativeDef: (escaped ? "'" : "") + element
                                }), escaped = !1);
                            }
                        }
                        function verifyGroupMarker(maskToken) {
                            maskToken && maskToken.matches && $.each(maskToken.matches, (function(ndx, token) {
                                var nextToken = maskToken.matches[ndx + 1];
                                (void 0 === nextToken || void 0 === nextToken.matches || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, 
                                regexMask || (insertTestDefinition(token, opts.groupmarker[0], 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker[1]))), 
                                verifyGroupMarker(token);
                            }));
                        }
                        function defaultCase() {
                            if (0 < openenings.length) {
                                if (currentOpeningToken = openenings[openenings.length - 1], insertTestDefinition(currentOpeningToken, m), 
                                currentOpeningToken.isAlternator) {
                                    alternator = openenings.pop();
                                    for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup && (alternator.matches[mndx].isGroup = !1);
                                    0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1], 
                                    currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
                                }
                            } else insertTestDefinition(currentToken, m);
                        }
                        function reverseTokens(maskToken) {
                            function reverseStatic(st) {
                                return st === opts.optionalmarker[0] ? st = opts.optionalmarker[1] : st === opts.optionalmarker[1] ? st = opts.optionalmarker[0] : st === opts.groupmarker[0] ? st = opts.groupmarker[1] : st === opts.groupmarker[1] && (st = opts.groupmarker[0]), 
                                st;
                            }
                            for (var match in maskToken.matches = maskToken.matches.reverse(), maskToken.matches) if (Object.prototype.hasOwnProperty.call(maskToken.matches, match)) {
                                var intMatch = parseInt(match);
                                if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                                    var qt = maskToken.matches[match];
                                    maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);
                                }
                                void 0 !== maskToken.matches[match].matches ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
                            }
                            return maskToken;
                        }
                        function groupify(matches) {
                            var groupToken = new MaskToken(!0);
                            return groupToken.openGroup = !1, groupToken.matches = matches, groupToken;
                        }
                        function closeGroup() {
                            if (openingToken = openenings.pop(), openingToken.openGroup = !1, void 0 !== openingToken) if (0 < openenings.length) {
                                if (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(openingToken), 
                                currentOpeningToken.isAlternator) {
                                    alternator = openenings.pop();
                                    for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1, 
                                    alternator.matches[mndx].alternatorGroup = !1;
                                    0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1], 
                                    currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
                                }
                            } else currentToken.matches.push(openingToken); else defaultCase();
                        }
                        function groupQuantifier(matches) {
                            var lastMatch = matches.pop();
                            return lastMatch.isQuantifier && (lastMatch = groupify([ matches.pop(), lastMatch ])), 
                            lastMatch;
                        }
                        for (regexMask && (opts.optionalmarker[0] = void 0, opts.optionalmarker[1] = void 0); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask); ) {
                            if (m = match[0], regexMask) switch (m.charAt(0)) {
                              case "?":
                                m = "{0,1}";
                                break;

                              case "+":
                              case "*":
                                m = "{" + m + "}";
                                break;

                              case "|":
                                if (0 === openenings.length) {
                                    var altRegexGroup = groupify(currentToken.matches);
                                    altRegexGroup.openGroup = !0, openenings.push(altRegexGroup), currentToken.matches = [], 
                                    closeRegexGroup = !0;
                                }
                                break;
                            }
                            if (escaped) defaultCase(); else switch (m.charAt(0)) {
                              case "(?=":
                                break;

                              case "(?!":
                                break;

                              case "(?<=":
                                break;

                              case "(?<!":
                                break;

                              case opts.escapeChar:
                                escaped = !0, regexMask && defaultCase();
                                break;

                              case opts.optionalmarker[1]:
                              case opts.groupmarker[1]:
                                closeGroup();
                                break;

                              case opts.optionalmarker[0]:
                                openenings.push(new MaskToken(!1, !0));
                                break;

                              case opts.groupmarker[0]:
                                openenings.push(new MaskToken(!0));
                                break;

                              case opts.quantifiermarker[0]:
                                var quantifier = new MaskToken(!1, !1, !0);
                                m = m.replace(/[{}]/g, "");
                                var mqj = m.split("|"), mq = mqj[0].split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                                "*" !== mq0 && "+" !== mq0 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
                                    min: mq0,
                                    max: mq1,
                                    jit: mqj[1]
                                };
                                var matches = 0 < openenings.length ? openenings[openenings.length - 1].matches : currentToken.matches;
                                if (match = matches.pop(), match.isAlternator) {
                                    matches.push(match), matches = match.matches;
                                    var groupToken = new MaskToken(!0), tmpMatch = matches.pop();
                                    matches.push(groupToken), matches = groupToken.matches, match = tmpMatch;
                                }
                                match.isGroup || (match = groupify([ match ])), matches.push(match), matches.push(quantifier);
                                break;

                              case opts.alternatormarker:
                                if (0 < openenings.length) {
                                    currentOpeningToken = openenings[openenings.length - 1];
                                    var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                                    lastMatch = currentOpeningToken.openGroup && (void 0 === subToken.matches || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : groupQuantifier(currentOpeningToken.matches);
                                } else lastMatch = groupQuantifier(currentToken.matches);
                                if (lastMatch.isAlternator) openenings.push(lastMatch); else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), 
                                lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), 
                                openenings.push(alternator), lastMatch.openGroup) {
                                    lastMatch.openGroup = !1;
                                    var alternatorGroup = new MaskToken(!0);
                                    alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup);
                                }
                                break;

                              default:
                                defaultCase();
                            }
                        }
                        for (closeRegexGroup && closeGroup(); 0 < openenings.length; ) openingToken = openenings.pop(), 
                        currentToken.matches.push(openingToken);
                        return 0 < currentToken.matches.length && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)), 
                        (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]), maskTokens;
                    }
                    module.exports = {
                        generateMaskSet,
                        analyseMask
                    };
                }, function(module, exports, __nested_webpack_require_26306__) {
                    "use strict";
                    __nested_webpack_require_26306__(6), __nested_webpack_require_26306__(8), __nested_webpack_require_26306__(9), 
                    __nested_webpack_require_26306__(10), module.exports = __nested_webpack_require_26306__(1);
                }, function(module, exports, __nested_webpack_require_26496__) {
                    "use strict";
                    var Inputmask = __nested_webpack_require_26496__(1);
                    Inputmask.extendDefinitions({
                        A: {
                            validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                            casing: "upper"
                        },
                        "&": {
                            validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                            casing: "upper"
                        },
                        "#": {
                            validator: "[0-9A-Fa-f]",
                            casing: "upper"
                        }
                    });
                    var ipValidatorRegex = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                    function ipValidator(chrs, maskset, pos, strict, opts) {
                        return chrs = -1 < pos - 1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, 
                        -1 < pos - 2 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : "00" + chrs, 
                        ipValidatorRegex.test(chrs);
                    }
                    Inputmask.extendAliases({
                        cssunit: {
                            regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                        },
                        url: {
                            regex: "(https?|ftp)//.*",
                            autoUnmask: !1
                        },
                        ip: {
                            mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
                            definitions: {
                                i: {
                                    validator: ipValidator
                                },
                                j: {
                                    validator: ipValidator
                                },
                                k: {
                                    validator: ipValidator
                                },
                                l: {
                                    validator: ipValidator
                                }
                            },
                            onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                                return maskedValue;
                            },
                            inputmode: "numeric"
                        },
                        email: {
                            mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                            greedy: !1,
                            casing: "lower",
                            onBeforePaste: function onBeforePaste(pastedValue, opts) {
                                return pastedValue = pastedValue.toLowerCase(), pastedValue.replace("mailto:", "");
                            },
                            definitions: {
                                "*": {
                                    validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                                },
                                "-": {
                                    validator: "[0-9A-Za-z-]"
                                }
                            },
                            onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                                return maskedValue;
                            },
                            inputmode: "email"
                        },
                        mac: {
                            mask: "##:##:##:##:##:##"
                        },
                        vin: {
                            mask: "V{13}9{4}",
                            definitions: {
                                V: {
                                    validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                    casing: "upper"
                                }
                            },
                            clearIncomplete: !0,
                            autoUnmask: !0
                        },
                        ssn: {
                            mask: "999-99-9999",
                            postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
                                return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(buffer.join(""));
                            }
                        }
                    }), module.exports = Inputmask;
                }, function(module, exports, __nested_webpack_require_28445__) {
                    "use strict";
                    function _typeof(obj) {
                        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                            return typeof obj;
                        } : function _typeof(obj) {
                            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        }, _typeof(obj);
                    }
                    var $ = __nested_webpack_require_28445__(2), window = __nested_webpack_require_28445__(3), document = window.document, ua = window.navigator && window.navigator.userAgent || "", ie = 0 < ua.indexOf("MSIE ") || 0 < ua.indexOf("Trident/"), mobile = "ontouchstart" in window, iemobile = /iemobile/i.test(ua), iphone = /iphone/i.test(ua) && !iemobile, keyCode = __nested_webpack_require_28445__(0);
                    module.exports = function maskScope(actionObj, maskset, opts) {
                        maskset = maskset || this.maskset, opts = opts || this.opts;
                        var undoValue, $el, maxLength, inputmask = this, el = this.el, isRTL = this.isRTL || (this.isRTL = opts.numericInput), skipKeyPressEvent = !1, skipInputEvent = !1, validationEvent = !1, ignorable = !1, mouseEnter = !1, originalPlaceholder = void 0;
                        function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
                            var greedy = opts.greedy;
                            clearOptionalTail && (opts.greedy = !1), minimalPos = minimalPos || 0;
                            var ndxIntlzr, test, testPos, jitRenderStatic, maskTemplate = [], pos = 0;
                            do {
                                if (!0 === baseOnInput && maskset.validPositions[pos]) testPos = clearOptionalTail && !0 === maskset.validPositions[pos].match.optionality && void 0 === maskset.validPositions[pos + 1] && (!0 === maskset.validPositions[pos].generatedInput || maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && 0 < pos) ? determineTestTemplate(pos, getTests(pos, ndxIntlzr, pos - 1)) : maskset.validPositions[pos], 
                                test = testPos.match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test)); else {
                                    testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), test = testPos.match, ndxIntlzr = testPos.locator.slice();
                                    var jitMasking = !0 !== noJit && (!1 !== opts.jitMasking ? opts.jitMasking : test.jit);
                                    jitRenderStatic = jitRenderStatic && test.static && test.def !== opts.groupSeparator && null === test.fn || maskset.validPositions[pos - 1] && test.static && test.def !== opts.groupSeparator && null === test.fn, 
                                    jitRenderStatic || !1 === jitMasking || void 0 === jitMasking || "number" == typeof jitMasking && isFinite(jitMasking) && pos < jitMasking ? maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test)) : jitRenderStatic = !1;
                                }
                                pos++;
                            } while ((void 0 === maxLength || pos < maxLength) && (!0 !== test.static || "" !== test.def) || pos < minimalPos);
                            return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), !1 === includeMode && void 0 !== maskset.maskLength || (maskset.maskLength = pos - 1), 
                            opts.greedy = greedy, maskTemplate;
                        }
                        function resetMaskSet(soft) {
                            maskset.buffer = void 0, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0);
                        }
                        function getLastValidPosition(closestTo, strict, validPositions) {
                            var before = -1, after = -1, valids = validPositions || maskset.validPositions;
                            for (var posNdx in void 0 === closestTo && (closestTo = -1), valids) {
                                var psNdx = parseInt(posNdx);
                                valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), 
                                closestTo <= psNdx && (after = psNdx));
                            }
                            return -1 === before || before == closestTo ? after : -1 == after ? before : closestTo - before < after - closestTo ? before : after;
                        }
                        function getDecisionTaker(tst) {
                            var decisionTaker = tst.locator[tst.alternation];
                            return "string" == typeof decisionTaker && 0 < decisionTaker.length && (decisionTaker = decisionTaker.split(",")[0]), 
                            void 0 !== decisionTaker ? decisionTaker.toString() : "";
                        }
                        function getLocator(tst, align) {
                            var locator = (null != tst.alternation ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
                            if ("" !== locator) for (;locator.length < align; ) locator += "0";
                            return locator;
                        }
                        function determineTestTemplate(pos, tests) {
                            pos = 0 < pos ? pos - 1 : 0;
                            for (var tstLocator, closest, bestMatch, altTest = getTest(pos), targetLocator = getLocator(altTest), ndx = 0; ndx < tests.length; ndx++) {
                                var tst = tests[ndx];
                                tstLocator = getLocator(tst, targetLocator.length);
                                var distance = Math.abs(tstLocator - targetLocator);
                                (void 0 === closest || "" !== tstLocator && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && "master" === bestMatch.match.newBlockMarker && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) && (closest = distance, 
                                bestMatch = tst);
                            }
                            return bestMatch;
                        }
                        function getTestTemplate(pos, ndxIntlzr, tstPs) {
                            return maskset.validPositions[pos] || determineTestTemplate(pos, getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
                        }
                        function getTest(pos, tests) {
                            return maskset.validPositions[pos] ? maskset.validPositions[pos] : (tests || getTests(pos))[0];
                        }
                        function positionCanMatchDefinition(pos, testDefinition, opts) {
                            for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) {
                                if (tests[tndx].match && (!(tests[tndx].match.nativeDef !== testDefinition.match[opts.shiftPositions ? "def" : "nativeDef"] || opts.shiftPositions && testDefinition.match.static) || tests[tndx].match.nativeDef === testDefinition.match.nativeDef)) {
                                    valid = !0;
                                    break;
                                }
                                if (tests[tndx].match && tests[tndx].match.def === testDefinition.match.nativeDef) {
                                    valid = void 0;
                                    break;
                                }
                            }
                            return !1 === valid && void 0 !== maskset.jitOffset[pos] && (valid = positionCanMatchDefinition(pos + maskset.jitOffset[pos], testDefinition, opts)), 
                            valid;
                        }
                        function getTests(pos, ndxIntlzr, tstPs) {
                            var latestMatch, maskTokens = maskset.maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [ 0 ], matches = [], insertStop = !1, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
                            function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                                function handleMatch(match, loopNdx, quantifierRecurse) {
                                    function isFirstMatch(latestMatch, tokenGroup) {
                                        var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);
                                        return firstMatch || $.each(tokenGroup.matches, (function(ndx, match) {
                                            if (!0 === match.isQuantifier ? firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]) : Object.prototype.hasOwnProperty.call(match, "matches") && (firstMatch = isFirstMatch(latestMatch, match)), 
                                            firstMatch) return !1;
                                        })), firstMatch;
                                    }
                                    function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                                        var bestMatch, indexPos;
                                        if ((maskset.tests[pos] || maskset.validPositions[pos]) && $.each(maskset.tests[pos] || [ maskset.validPositions[pos] ], (function(ndx, lmnt) {
                                            if (lmnt.mloc[alternateNdx]) return bestMatch = lmnt, !1;
                                            var alternation = void 0 !== targetAlternation ? targetAlternation : lmnt.alternation, ndxPos = void 0 !== lmnt.locator[alternation] ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                                            (void 0 === indexPos || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, 
                                            indexPos = ndxPos);
                                        })), bestMatch) {
                                            var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation], locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                                            return locator.slice((void 0 !== targetAlternation ? targetAlternation : bestMatch.alternation) + 1);
                                        }
                                        return void 0 !== targetAlternation ? resolveNdxInitializer(pos, alternateNdx) : void 0;
                                    }
                                    function isSubsetOf(source, target) {
                                        function expand(pattern) {
                                            for (var end, expanded = [], start = -1, i = 0, l = pattern.length; i < l; i++) if ("-" === pattern.charAt(i)) for (end = pattern.charCodeAt(i + 1); ++start < end; ) expanded.push(String.fromCharCode(start)); else start = pattern.charCodeAt(i), 
                                            expanded.push(pattern.charAt(i));
                                            return expanded.join("");
                                        }
                                        return source.match.def === target.match.nativeDef || !(!(opts.regex || source.match.fn instanceof RegExp && target.match.fn instanceof RegExp) || !0 === source.match.static || !0 === target.match.static) && -1 !== expand(target.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g, "")));
                                    }
                                    function staticCanMatchDefinition(source, target) {
                                        return !0 === source.match.static && !0 !== target.match.static && target.match.fn.test(source.match.def, maskset, pos, !1, opts, !1);
                                    }
                                    function setMergeLocators(targetMatch, altMatch) {
                                        var alternationNdx = targetMatch.alternation, shouldMerge = void 0 === altMatch || alternationNdx === altMatch.alternation && -1 === targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]);
                                        if (!shouldMerge && alternationNdx > altMatch.alternation) for (var i = altMatch.alternation; i < alternationNdx; i++) if (targetMatch.locator[i] !== altMatch.locator[i]) {
                                            alternationNdx = i, shouldMerge = !0;
                                            break;
                                        }
                                        if (shouldMerge) {
                                            targetMatch.mloc = targetMatch.mloc || {};
                                            var locNdx = targetMatch.locator[alternationNdx];
                                            if (void 0 !== locNdx) {
                                                if ("string" == typeof locNdx && (locNdx = locNdx.split(",")[0]), void 0 === targetMatch.mloc[locNdx] && (targetMatch.mloc[locNdx] = targetMatch.locator.slice()), 
                                                void 0 !== altMatch) {
                                                    for (var ndx in altMatch.mloc) "string" == typeof ndx && (ndx = ndx.split(",")[0]), 
                                                    void 0 === targetMatch.mloc[ndx] && (targetMatch.mloc[ndx] = altMatch.mloc[ndx]);
                                                    targetMatch.locator[alternationNdx] = Object.keys(targetMatch.mloc).join(",");
                                                }
                                                return !0;
                                            }
                                            targetMatch.alternation = void 0;
                                        }
                                        return !1;
                                    }
                                    if (testPos > opts._maxTestPos && void 0 !== quantifierRecurse) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + maskset.mask;
                                    if (testPos === pos && void 0 === match.matches) return matches.push({
                                        match,
                                        locator: loopNdx.reverse(),
                                        cd: cacheDependency,
                                        mloc: {}
                                    }), !0;
                                    if (void 0 !== match.matches) {
                                        if (match.isGroup && quantifierRecurse !== match) {
                                            if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx, quantifierRecurse), 
                                            match) return !0;
                                        } else if (match.isOptional) {
                                            var optionalToken = match, mtchsNdx = matches.length;
                                            if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse), 
                                            match) {
                                                if ($.each(matches, (function(ndx, mtch) {
                                                    mtchsNdx <= ndx && (mtch.match.optionality = !0);
                                                })), latestMatch = matches[matches.length - 1].match, void 0 !== quantifierRecurse || !isFirstMatch(latestMatch, optionalToken)) return !0;
                                                insertStop = !0, testPos = pos;
                                            }
                                        } else if (match.isAlternator) {
                                            var maltMatches, alternateToken = match, malternateMatches = [], currentMatches = matches.slice(), loopNdxCnt = loopNdx.length, altIndex = 0 < ndxInitializer.length ? ndxInitializer.shift() : -1;
                                            if (-1 === altIndex || "string" == typeof altIndex) {
                                                var amndx, currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [];
                                                if ("string" == typeof altIndex) altIndexArr = altIndex.split(","); else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) altIndexArr.push(amndx.toString());
                                                if (void 0 !== maskset.excludes[pos]) {
                                                    for (var altIndexArrClone = altIndexArr.slice(), i = 0, el = maskset.excludes[pos].length; i < el; i++) {
                                                        var excludeSet = maskset.excludes[pos][i].toString().split(":");
                                                        loopNdx.length == excludeSet[1] && altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]), 1);
                                                    }
                                                    0 === altIndexArr.length && (delete maskset.excludes[pos], altIndexArr = altIndexArrClone);
                                                }
                                                (!0 === opts.keepStatic || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) && (altIndexArr = altIndexArr.slice(0, 1));
                                                for (var unMatchedAlternation = !1, ndx = 0; ndx < altIndexArr.length; ndx++) {
                                                    amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = "string" == typeof altIndex && resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), 
                                                    alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [ amndx ].concat(loopNdx), quantifierRecurse) ? match = !0 : 0 === ndx && (unMatchedAlternation = !0), 
                                                    maltMatches = matches.slice(), testPos = currentPos, matches = [];
                                                    for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                                        var altMatch = maltMatches[ndx1], dropMatch = !1;
                                                        altMatch.match.jit = altMatch.match.jit || unMatchedAlternation, altMatch.alternation = altMatch.alternation || loopNdxCnt, 
                                                        setMergeLocators(altMatch);
                                                        for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                                            var altMatch2 = malternateMatches[ndx2];
                                                            if ("string" != typeof altIndex || void 0 !== altMatch.alternation && -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr)) {
                                                                if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                                                                    dropMatch = !0, setMergeLocators(altMatch2, altMatch);
                                                                    break;
                                                                }
                                                                if (isSubsetOf(altMatch, altMatch2)) {
                                                                    setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                                                                    break;
                                                                }
                                                                if (isSubsetOf(altMatch2, altMatch)) {
                                                                    setMergeLocators(altMatch2, altMatch);
                                                                    break;
                                                                }
                                                                if (staticCanMatchDefinition(altMatch, altMatch2)) {
                                                                    setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                        dropMatch || malternateMatches.push(altMatch);
                                                    }
                                                }
                                                matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = 0 < matches.length, 
                                                match = 0 < malternateMatches.length, ndxInitializer = ndxInitializerClone.slice();
                                            } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [ altIndex ].concat(loopNdx), quantifierRecurse);
                                            if (match) return !0;
                                        } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) for (var qt = match, qndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                                            var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                                            if (match = handleMatch(tokenGroup, [ qndx ].concat(loopNdx), tokenGroup), match) {
                                                if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx >= qt.quantifier.min, 
                                                latestMatch.jit = (qndx || 1) * tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit, 
                                                latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                                                    insertStop = !0, testPos = pos;
                                                    break;
                                                }
                                                return latestMatch.jit && (maskset.jitOffset[pos] = tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch)), 
                                                !0;
                                            }
                                        } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse), 
                                        match) return !0;
                                    } else testPos++;
                                }
                                for (var tndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) if (!0 !== maskToken.matches[tndx].isQuantifier) {
                                    var match = handleMatch(maskToken.matches[tndx], [ tndx ].concat(loopNdx), quantifierRecurse);
                                    if (match && testPos === pos) return match;
                                    if (pos < testPos) break;
                                }
                            }
                            function mergeLocators(pos, tests) {
                                var locator = [];
                                return $.isArray(tests) || (tests = [ tests ]), 0 < tests.length && (void 0 === tests[0].alternation || !0 === opts.keepStatic ? (locator = determineTestTemplate(pos, tests.slice()).locator.slice(), 
                                0 === locator.length && (locator = tests[0].locator.slice())) : $.each(tests, (function(ndx, tst) {
                                    if ("" !== tst.def) if (0 === locator.length) locator = tst.locator.slice(); else for (var i = 0; i < locator.length; i++) tst.locator[i] && -1 === locator[i].toString().indexOf(tst.locator[i]) && (locator[i] += "," + tst.locator[i]);
                                }))), locator;
                            }
                            if (-1 < pos && (void 0 === maxLength || pos < maxLength)) {
                                if (void 0 === ndxIntlzr) {
                                    for (var test, previousPos = pos - 1; void 0 === (test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) && -1 < previousPos; ) previousPos--;
                                    void 0 !== test && -1 < previousPos && (ndxInitializer = mergeLocators(previousPos, test), 
                                    cacheDependency = ndxInitializer.join(""), testPos = previousPos);
                                }
                                if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency) return maskset.tests[pos];
                                for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                                    var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [ mtndx ]);
                                    if (match && testPos === pos || pos < testPos) break;
                                }
                            }
                            return 0 !== matches.length && !insertStop || matches.push({
                                match: {
                                    fn: null,
                                    static: !0,
                                    optionality: !1,
                                    casing: null,
                                    def: "",
                                    placeholder: ""
                                },
                                locator: [],
                                mloc: {},
                                cd: cacheDependency
                            }), void 0 !== ndxIntlzr && maskset.tests[pos] ? $.extend(!0, [], matches) : (maskset.tests[pos] = $.extend(!0, [], matches), 
                            maskset.tests[pos]);
                        }
                        function getBufferTemplate() {
                            return void 0 === maskset._buffer && (maskset._buffer = getMaskTemplate(!1, 1), 
                            void 0 === maskset.buffer && (maskset.buffer = maskset._buffer.slice())), maskset._buffer;
                        }
                        function getBuffer(noCache) {
                            return void 0 !== maskset.buffer && !0 !== noCache || (maskset.buffer = getMaskTemplate(!0, getLastValidPosition(), !0), 
                            void 0 === maskset._buffer && (maskset._buffer = maskset.buffer.slice())), maskset.buffer;
                        }
                        function refreshFromBuffer(start, end, buffer) {
                            var i, p, skipOptionalPartCharacter = opts.skipOptionalPartCharacter, bffr = isRTL ? buffer.slice().reverse() : buffer;
                            if (opts.skipOptionalPartCharacter = "", !0 === start) resetMaskSet(), maskset.tests = {}, 
                            start = 0, end = buffer.length, p = determineNewCaretPosition({
                                begin: 0,
                                end: 0
                            }, !1).begin; else {
                                for (i = start; i < end; i++) delete maskset.validPositions[i];
                                p = start;
                            }
                            var keypress = new $.Event("keypress");
                            for (i = start; i < end; i++) {
                                keypress.which = bffr[i].toString().charCodeAt(0), ignorable = !1;
                                var valResult = EventHandlers.keypressEvent.call(el, keypress, !0, !1, !1, p);
                                !1 !== valResult && (p = valResult.forwardPosition);
                            }
                            opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
                        }
                        function casing(elem, test, pos) {
                            switch (opts.casing || test.casing) {
                              case "upper":
                                elem = elem.toUpperCase();
                                break;

                              case "lower":
                                elem = elem.toLowerCase();
                                break;

                              case "title":
                                var posBefore = maskset.validPositions[pos - 1];
                                elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
                                break;

                              default:
                                if ($.isFunction(opts.casing)) {
                                    var args = Array.prototype.slice.call(arguments);
                                    args.push(maskset.validPositions), elem = opts.casing.apply(this, args);
                                }
                            }
                            return elem;
                        }
                        function checkAlternationMatch(altArr1, altArr2, na) {
                            for (var naNdx, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = void 0 !== na ? na.split(",") : [], i = 0; i < naArr.length; i++) -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
                            for (var alndx = 0; alndx < altArr1.length; alndx++) if (-1 !== $.inArray(altArr1[alndx], altArrC)) {
                                isMatch = !0;
                                break;
                            }
                            return isMatch;
                        }
                        function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) {
                            var lastAlt, alternation, altPos, prevAltPos, i, validPos, decisionPos, nextPos, input, begin, end, validPsClone = $.extend(!0, {}, maskset.validPositions), tstClone = $.extend(!0, {}, maskset.tests), isValidRslt = !1, returnRslt = !1, lAltPos = void 0 !== rAltPos ? rAltPos : getLastValidPosition();
                            if (selection && (begin = selection.begin, end = selection.end, selection.begin > selection.end && (begin = selection.end, 
                            end = selection.begin)), -1 === lAltPos && void 0 === rAltPos) lastAlt = 0, prevAltPos = getTest(lastAlt), 
                            alternation = prevAltPos.alternation; else for (;0 <= lAltPos; lAltPos--) if (altPos = maskset.validPositions[lAltPos], 
                            altPos && void 0 !== altPos.alternation) {
                                if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
                                lastAlt = lAltPos, alternation = maskset.validPositions[lastAlt].alternation, prevAltPos = altPos;
                            }
                            if (void 0 !== alternation) {
                                decisionPos = parseInt(lastAlt), maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || [], 
                                !0 !== maskPos && maskset.excludes[decisionPos].push(getDecisionTaker(prevAltPos) + ":" + prevAltPos.alternation);
                                var validInputs = [], resultPos = -1;
                                for (i = decisionPos; i < getLastValidPosition(void 0, !0) + 1; i++) -1 === resultPos && maskPos <= i && void 0 !== c && (validInputs.push(c), 
                                resultPos = validInputs.length - 1), validPos = maskset.validPositions[i], validPos && !0 !== validPos.generatedInput && (void 0 === selection || i < begin || end <= i) && validInputs.push(validPos.input), 
                                delete maskset.validPositions[i];
                                for (-1 === resultPos && void 0 !== c && (validInputs.push(c), resultPos = validInputs.length - 1); void 0 !== maskset.excludes[decisionPos] && maskset.excludes[decisionPos].length < 10; ) {
                                    for (maskset.tests = {}, resetMaskSet(!0), isValidRslt = !0, i = 0; i < validInputs.length && (nextPos = isValidRslt.caret || getLastValidPosition(void 0, !0) + 1, 
                                    input = validInputs[i], isValidRslt = isValid(nextPos, input, !1, fromIsValid, !0)); i++) i === resultPos && (returnRslt = isValidRslt), 
                                    1 == maskPos && isValidRslt && (returnRslt = {
                                        caretPos: i
                                    });
                                    if (isValidRslt) break;
                                    if (resetMaskSet(), prevAltPos = getTest(decisionPos), maskset.validPositions = $.extend(!0, {}, validPsClone), 
                                    maskset.tests = $.extend(!0, {}, tstClone), !maskset.excludes[decisionPos]) {
                                        returnRslt = alternate(maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                                        break;
                                    }
                                    var decisionTaker = getDecisionTaker(prevAltPos);
                                    if (-1 !== maskset.excludes[decisionPos].indexOf(decisionTaker + ":" + prevAltPos.alternation)) {
                                        returnRslt = alternate(maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                                        break;
                                    }
                                    for (maskset.excludes[decisionPos].push(decisionTaker + ":" + prevAltPos.alternation), 
                                    i = decisionPos; i < getLastValidPosition(void 0, !0) + 1; i++) delete maskset.validPositions[i];
                                }
                            }
                            return returnRslt && !1 === opts.keepStatic || delete maskset.excludes[decisionPos], 
                            returnRslt;
                        }
                        function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly) {
                            function isSelection(posObj) {
                                return isRTL ? 1 < posObj.begin - posObj.end || posObj.begin - posObj.end == 1 : 1 < posObj.end - posObj.begin || posObj.end - posObj.begin == 1;
                            }
                            strict = !0 === strict;
                            var maskPos = pos;
                            function processCommandObject(commandObj) {
                                if (void 0 !== commandObj) {
                                    if (void 0 !== commandObj.remove && ($.isArray(commandObj.remove) || (commandObj.remove = [ commandObj.remove ]), 
                                    $.each(commandObj.remove.sort((function(a, b) {
                                        return b.pos - a.pos;
                                    })), (function(ndx, lmnt) {
                                        revalidateMask({
                                            begin: lmnt,
                                            end: lmnt + 1
                                        });
                                    })), commandObj.remove = void 0), void 0 !== commandObj.insert && ($.isArray(commandObj.insert) || (commandObj.insert = [ commandObj.insert ]), 
                                    $.each(commandObj.insert.sort((function(a, b) {
                                        return a.pos - b.pos;
                                    })), (function(ndx, lmnt) {
                                        "" !== lmnt.c && isValid(lmnt.pos, lmnt.c, void 0 === lmnt.strict || lmnt.strict, void 0 !== lmnt.fromIsValid ? lmnt.fromIsValid : fromIsValid);
                                    })), commandObj.insert = void 0), commandObj.refreshFromBuffer && commandObj.buffer) {
                                        var refresh = commandObj.refreshFromBuffer;
                                        refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, commandObj.buffer), 
                                        commandObj.refreshFromBuffer = void 0;
                                    }
                                    void 0 !== commandObj.rewritePosition && (maskPos = commandObj.rewritePosition, 
                                    commandObj = !0);
                                }
                                return commandObj;
                            }
                            function _isValid(position, c, strict) {
                                var rslt = !1;
                                return $.each(getTests(position), (function(ndx, tst) {
                                    var test = tst.match;
                                    if (getBuffer(!0), rslt = null != test.fn ? test.fn.test(c, maskset, position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
                                        c: getPlaceholder(position, test, !0) || test.def,
                                        pos: position
                                    }, !1 !== rslt) {
                                        var elem = void 0 !== rslt.c ? rslt.c : c, validatedPos = position;
                                        return elem = elem === opts.skipOptionalPartCharacter && !0 === test.static ? getPlaceholder(position, test, !0) || test.def : elem, 
                                        rslt = processCommandObject(rslt), !0 !== rslt && void 0 !== rslt.pos && rslt.pos !== position && (validatedPos = rslt.pos), 
                                        !0 !== rslt && void 0 === rslt.pos && void 0 === rslt.c ? !1 : (!1 === revalidateMask(pos, $.extend({}, tst, {
                                            input: casing(elem, test, validatedPos)
                                        }), fromIsValid, validatedPos) && (rslt = !1), !1);
                                    }
                                })), rslt;
                            }
                            void 0 !== pos.begin && (maskPos = isRTL ? pos.end : pos.begin);
                            var result = !0, positionsClone = $.extend(!0, {}, maskset.validPositions);
                            if (!1 === opts.keepStatic && void 0 !== maskset.excludes[maskPos] && !0 !== fromAlternate && !0 !== fromIsValid) for (var i = maskPos; i < (isRTL ? pos.begin : pos.end); i++) void 0 !== maskset.excludes[i] && (maskset.excludes[i] = void 0, 
                            delete maskset.tests[i]);
                            if ($.isFunction(opts.preValidation) && !0 !== fromIsValid && !0 !== validateOnly && (result = opts.preValidation.call(el, getBuffer(), maskPos, c, isSelection(pos), opts, maskset, pos, strict || fromAlternate), 
                            result = processCommandObject(result)), !0 === result) {
                                if (void 0 === maxLength || maskPos < maxLength) {
                                    if (result = _isValid(maskPos, c, strict), (!strict || !0 === fromIsValid) && !1 === result && !0 !== validateOnly) {
                                        var currentPosValid = maskset.validPositions[maskPos];
                                        if (!currentPosValid || !0 !== currentPosValid.match.static || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
                                            if (opts.insertMode || void 0 === maskset.validPositions[seekNext(maskPos)] || pos.end > maskPos) {
                                                var skip = !1;
                                                if (maskset.jitOffset[maskPos] && void 0 === maskset.validPositions[seekNext(maskPos)] && (result = isValid(maskPos + maskset.jitOffset[maskPos], c, !0), 
                                                !1 !== result && (!0 !== fromAlternate && (result.caret = maskPos), skip = !0)), 
                                                pos.end > maskPos && (maskset.validPositions[maskPos] = void 0), !skip && !isMask(maskPos, opts.keepStatic)) for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) if (result = _isValid(nPos, c, strict), 
                                                !1 !== result) {
                                                    result = trackbackPositions(maskPos, void 0 !== result.pos ? result.pos : nPos) || result, 
                                                    maskPos = nPos;
                                                    break;
                                                }
                                            }
                                        } else result = {
                                            caret: seekNext(maskPos)
                                        };
                                    }
                                } else result = !1;
                                !1 !== result || !opts.keepStatic || !isComplete(getBuffer()) && 0 !== maskPos || strict || !0 === fromAlternate ? isSelection(pos) && maskset.tests[maskPos] && 1 < maskset.tests[maskPos].length && opts.keepStatic && !strict && !0 !== fromAlternate && (result = alternate(!0)) : result = alternate(maskPos, c, strict, fromIsValid, void 0, pos), 
                                !0 === result && (result = {
                                    pos: maskPos
                                });
                            }
                            if ($.isFunction(opts.postValidation) && !0 !== fromIsValid && !0 !== validateOnly) {
                                var postResult = opts.postValidation.call(el, getBuffer(!0), void 0 !== pos.begin ? isRTL ? pos.end : pos.begin : pos, c, result, opts, maskset, strict);
                                void 0 !== postResult && (result = !0 === postResult ? result : postResult);
                            }
                            result && void 0 === result.pos && (result.pos = maskPos), !1 === result || !0 === validateOnly ? (resetMaskSet(!0), 
                            maskset.validPositions = $.extend(!0, {}, positionsClone)) : trackbackPositions(void 0, maskPos, !0);
                            var endResult = processCommandObject(result);
                            return endResult;
                        }
                        function trackbackPositions(originalPos, newPos, fillOnly) {
                            if (void 0 === originalPos) for (originalPos = newPos - 1; 0 < originalPos && !maskset.validPositions[originalPos]; originalPos--) ;
                            for (var ps = originalPos; ps < newPos; ps++) if (void 0 === maskset.validPositions[ps] && !isMask(ps, !0)) {
                                var vp = 0 == ps ? getTest(ps) : maskset.validPositions[ps - 1];
                                if (vp) {
                                    var tests = getTests(ps).slice();
                                    "" === tests[tests.length - 1].match.def && tests.pop();
                                    var np, bestMatch = determineTestTemplate(ps, tests);
                                    if (bestMatch && (!0 !== bestMatch.match.jit || "master" === bestMatch.match.newBlockMarker && (np = maskset.validPositions[ps + 1]) && !0 === np.match.optionalQuantifier) && (bestMatch = $.extend({}, bestMatch, {
                                        input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def
                                    }), bestMatch.generatedInput = !0, revalidateMask(ps, bestMatch, !0), !0 !== fillOnly)) {
                                        var cvpInput = maskset.validPositions[newPos].input;
                                        return maskset.validPositions[newPos] = void 0, isValid(newPos, cvpInput, !0, !0);
                                    }
                                }
                            }
                        }
                        function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
                            function IsEnclosedStatic(pos, valids, selection) {
                                var posMatch = valids[pos];
                                if (void 0 === posMatch || !0 !== posMatch.match.static || !0 === posMatch.match.optionality || void 0 !== valids[0] && void 0 !== valids[0].alternation) return !1;
                                var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && !0 === valids[pos - 1].match.static && valids[pos - 1] : valids[pos - 1], nextMatch = selection.end > pos + 1 ? valids[pos + 1] && !0 === valids[pos + 1].match.static && valids[pos + 1] : valids[pos + 1];
                                return prevMatch && nextMatch;
                            }
                            var offset = 0, begin = void 0 !== pos.begin ? pos.begin : pos, end = void 0 !== pos.end ? pos.end : pos;
                            if (pos.begin > pos.end && (begin = pos.end, end = pos.begin), validatedPos = void 0 !== validatedPos ? validatedPos : begin, 
                            begin !== end || opts.insertMode && void 0 !== maskset.validPositions[validatedPos] && void 0 === fromIsValid || void 0 === validTest) {
                                var i, positionsClone = $.extend(!0, {}, maskset.validPositions), lvp = getLastValidPosition(void 0, !0);
                                for (maskset.p = begin, i = lvp; begin <= i; i--) delete maskset.validPositions[i], 
                                void 0 === validTest && delete maskset.tests[i + 1];
                                var t, canMatch, valid = !0, j = validatedPos, posMatch = j;
                                for (i = j, validTest && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest), 
                                posMatch++, j++, begin < end && i++); i <= lvp; i++) {
                                    if (void 0 !== (t = positionsClone[i]) && !0 !== t.generatedInput && (end <= i || begin <= i && IsEnclosedStatic(i, positionsClone, {
                                        begin,
                                        end
                                    }))) {
                                        for (;"" !== getTest(posMatch).match.def; ) {
                                            if (!1 !== (canMatch = positionCanMatchDefinition(posMatch, t, opts)) || "+" === t.match.def) {
                                                "+" === t.match.def && getBuffer(!0);
                                                var result = isValid(posMatch, t.input, "+" !== t.match.def, "+" !== t.match.def);
                                                if (valid = !1 !== result, j = (result.pos || posMatch) + 1, !valid && canMatch) break;
                                            } else valid = !1;
                                            if (valid) {
                                                void 0 === validTest && t.match.static && i === pos.begin && offset++;
                                                break;
                                            }
                                            if (!valid && posMatch > maskset.maskLength) break;
                                            posMatch++;
                                        }
                                        "" == getTest(posMatch).match.def && (valid = !1), posMatch = j;
                                    }
                                    if (!valid) break;
                                }
                                if (!valid) return maskset.validPositions = $.extend(!0, {}, positionsClone), resetMaskSet(!0), 
                                !1;
                            } else validTest && getTest(validatedPos).match.cd === validTest.match.cd && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest));
                            return resetMaskSet(!0), offset;
                        }
                        function isMask(pos, strict, fuzzy) {
                            var test = getTestTemplate(pos).match;
                            if ("" === test.def && (test = getTest(pos).match), !0 !== test.static) return test.fn;
                            if (!0 === fuzzy && void 0 !== maskset.validPositions[pos] && !0 !== maskset.validPositions[pos].generatedInput) return !0;
                            if (!0 !== strict && -1 < pos) {
                                if (fuzzy) {
                                    var tests = getTests(pos);
                                    return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);
                                }
                                var testTemplate = determineTestTemplate(pos, getTests(pos)), testPlaceHolder = getPlaceholder(pos, testTemplate.match);
                                return testTemplate.match.def !== testPlaceHolder;
                            }
                            return !1;
                        }
                        function seekNext(pos, newBlock, fuzzy) {
                            void 0 === fuzzy && (fuzzy = !0);
                            for (var position = pos + 1; "" !== getTest(position).match.def && (!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position, void 0, !0)) || !0 !== newBlock && !isMask(position, void 0, fuzzy)); ) position++;
                            return position;
                        }
                        function seekPrevious(pos, newBlock) {
                            var tests, position = pos;
                            if (position <= 0) return 0;
                            for (;0 < --position && (!0 === newBlock && !0 !== getTest(position).match.newBlockMarker || !0 !== newBlock && !isMask(position, void 0, !0) && (tests = getTests(position), 
                            tests.length < 2 || 2 === tests.length && "" === tests[1].match.def)); ) ;
                            return position;
                        }
                        function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
                            if (event && $.isFunction(opts.onBeforeWrite)) {
                                var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                                if (result) {
                                    if (result.refreshFromBuffer) {
                                        var refresh = result.refreshFromBuffer;
                                        refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), 
                                        buffer = getBuffer(!0);
                                    }
                                    void 0 !== caretPos && (caretPos = void 0 !== result.caret ? result.caret : caretPos);
                                }
                            }
                            if (void 0 !== input && (input.inputmask._valueSet(buffer.join("")), void 0 === caretPos || void 0 !== event && "blur" === event.type || caret(input, caretPos, void 0, void 0, void 0 !== event && "keydown" === event.type && (event.keyCode === keyCode.DELETE || event.keyCode === keyCode.BACKSPACE)), 
                            !0 === triggerEvents)) {
                                var $input = $(input), nptVal = input.inputmask._valueGet();
                                skipInputEvent = !0, $input.trigger("input"), setTimeout((function() {
                                    nptVal === getBufferTemplate().join("") ? $input.trigger("cleared") : !0 === isComplete(buffer) && $input.trigger("complete");
                                }), 0);
                            }
                        }
                        function getPlaceholder(pos, test, returnPL) {
                            if (test = test || getTest(pos).match, void 0 !== test.placeholder || !0 === returnPL) return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
                            if (!0 !== test.static) return opts.placeholder.charAt(pos % opts.placeholder.length);
                            if (-1 < pos && void 0 === maskset.validPositions[pos]) {
                                var prevTest, tests = getTests(pos), staticAlternations = [];
                                if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) if ("" !== tests[i].match.def && !0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (!0 === tests[i].match.static || void 0 === prevTest || !1 !== tests[i].match.fn.test(prevTest.match.def, maskset, pos, !0, opts)) && (staticAlternations.push(tests[i]), 
                                !0 === tests[i].match.static && (prevTest = tests[i]), 1 < staticAlternations.length && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);
                            }
                            return test.def;
                        }
                        function HandleNativePlaceholder(npt, value) {
                            if (ie) {
                                if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || "" === npt.placeholder)) {
                                    var buffer = getBuffer().slice(), nptValue = npt.inputmask._valueGet();
                                    if (nptValue !== value) {
                                        var lvp = getLastValidPosition();
                                        -1 === lvp && nptValue === getBufferTemplate().join("") ? buffer = [] : -1 !== lvp && clearOptionalTail(buffer), 
                                        writeBuffer(npt, buffer);
                                    }
                                }
                            } else npt.placeholder !== value && (npt.placeholder = value, "" === npt.placeholder && npt.removeAttribute("placeholder"));
                        }
                        function determineNewCaretPosition(selectedCaret, tabbed) {
                            function doRadixFocus(clickPos) {
                                if ("" !== opts.radixPoint && 0 !== opts.digits) {
                                    var vps = maskset.validPositions;
                                    if (void 0 === vps[clickPos] || vps[clickPos].input === getPlaceholder(clickPos)) {
                                        if (clickPos < seekNext(-1)) return !0;
                                        var radixPos = $.inArray(opts.radixPoint, getBuffer());
                                        if (-1 !== radixPos) {
                                            for (var vp in vps) if (vps[vp] && radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;
                                            return !0;
                                        }
                                    }
                                }
                                return !1;
                            }
                            if (tabbed && (isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), 
                            selectedCaret.begin === selectedCaret.end) {
                                switch (opts.positionCaretOnClick) {
                                  case "none":
                                    break;

                                  case "select":
                                    selectedCaret = {
                                        begin: 0,
                                        end: getBuffer().length
                                    };
                                    break;

                                  case "ignore":
                                    selectedCaret.end = selectedCaret.begin = seekNext(getLastValidPosition());
                                    break;

                                  case "radixFocus":
                                    if (doRadixFocus(selectedCaret.begin)) {
                                        var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                                        selectedCaret.end = selectedCaret.begin = opts.numericInput ? seekNext(radixPos) : radixPos;
                                        break;
                                    }

                                  default:
                                    var clickPosition = selectedCaret.begin, lvclickPosition = getLastValidPosition(clickPosition, !0), lastPosition = seekNext(-1 !== lvclickPosition || isMask(0) ? lvclickPosition : 0);
                                    if (clickPosition < lastPosition) selectedCaret.end = selectedCaret.begin = isMask(clickPosition, !0) || isMask(clickPosition - 1, !0) ? clickPosition : seekNext(clickPosition); else {
                                        var lvp = maskset.validPositions[lvclickPosition], tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : void 0, lvp), placeholder = getPlaceholder(lastPosition, tt.match);
                                        if ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask(lastPosition, opts.keepStatic) && tt.match.def === placeholder) {
                                            var newPos = seekNext(lastPosition);
                                            (newPos <= clickPosition || clickPosition === lastPosition) && (lastPosition = newPos);
                                        }
                                        selectedCaret.end = selectedCaret.begin = lastPosition;
                                    }
                                }
                                return selectedCaret;
                            }
                        }
                        var valueBuffer, EventRuler = {
                            on: function on(input, eventName, eventHandler) {
                                var ev = function ev(e) {
                                    e.originalEvent && (e = e.originalEvent || e, arguments[0] = e);
                                    var args, that = this;
                                    if (void 0 === that.inputmask && "FORM" !== this.nodeName) {
                                        var imOpts = $.data(that, "_inputmask_opts");
                                        imOpts ? new Inputmask(imOpts).mask(that) : EventRuler.off(that);
                                    } else {
                                        if ("setvalue" === e.type || "FORM" === this.nodeName || !(that.disabled || that.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === keyCode.TAB))) {
                                            switch (e.type) {
                                              case "input":
                                                if (!0 === skipInputEvent || e.inputType && "insertCompositionText" === e.inputType) return skipInputEvent = !1, 
                                                e.preventDefault();
                                                break;

                                              case "keydown":
                                                skipKeyPressEvent = !1, skipInputEvent = !1;
                                                break;

                                              case "keypress":
                                                if (!0 === skipKeyPressEvent) return e.preventDefault();
                                                skipKeyPressEvent = !0;
                                                break;

                                              case "click":
                                              case "focus":
                                                return validationEvent ? (validationEvent = !1, input.blur(), HandleNativePlaceholder(input, (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).join("")), 
                                                setTimeout((function() {
                                                    input.focus();
                                                }), 3e3)) : (args = arguments, setTimeout((function() {
                                                    eventHandler.apply(that, args);
                                                }), 0)), !1;
                                            }
                                            var returnVal = eventHandler.apply(that, arguments);
                                            return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;
                                        }
                                        e.preventDefault();
                                    }
                                };
                                input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), 
                                -1 !== $.inArray(eventName, [ "submit", "reset" ]) ? null !== input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev);
                            },
                            off: function off(input, event) {
                                var events;
                                input.inputmask && input.inputmask.events && (event ? (events = [], events[event] = input.inputmask.events[event]) : events = input.inputmask.events, 
                                $.each(events, (function(eventName, evArr) {
                                    for (;0 < evArr.length; ) {
                                        var ev = evArr.pop();
                                        -1 !== $.inArray(eventName, [ "submit", "reset" ]) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);
                                    }
                                    delete input.inputmask.events[eventName];
                                })));
                            }
                        }, EventHandlers = {
                            keydownEvent: function keydownEvent(e) {
                                var input = this, $input = $(input), k = e.keyCode, pos = caret(input), kdResult = opts.onKeyDown.call(this, e, getBuffer(), pos, opts);
                                if (void 0 !== kdResult) return kdResult;
                                if (k === keyCode.BACKSPACE || k === keyCode.DELETE || iphone && k === keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === keyCode.X && !("oncut" in input)) e.preventDefault(), 
                                handleRemove(input, k, pos), writeBuffer(input, getBuffer(!0), maskset.p, e, input.inputmask._valueGet() !== getBuffer().join("")); else if (k === keyCode.END || k === keyCode.PAGE_DOWN) {
                                    e.preventDefault();
                                    var caretPos = seekNext(getLastValidPosition());
                                    caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
                                } else k === keyCode.HOME && !e.shiftKey || k === keyCode.PAGE_UP ? (e.preventDefault(), 
                                caret(input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === keyCode.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? (checkVal(input, !0, !1, undoValue.split("")), 
                                $input.trigger("click")) : !0 === opts.tabThrough && k === keyCode.TAB ? (!0 === e.shiftKey ? (!0 === getTest(pos.begin).match.static && (pos.begin = seekNext(pos.begin)), 
                                pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0), 
                                pos.end = seekNext(pos.begin, !0), pos.end < maskset.maskLength && pos.end--), pos.begin < maskset.maskLength && (e.preventDefault(), 
                                caret(input, pos.begin, pos.end))) : e.shiftKey || opts.insertModeVisual && !1 === opts.insertMode && (k === keyCode.RIGHT ? setTimeout((function() {
                                    var caretPos = caret(input);
                                    caret(input, caretPos.begin);
                                }), 0) : k === keyCode.LEFT && setTimeout((function() {
                                    var caretPos_begin = translatePosition(input.inputmask.caretPos.begin);
                                    translatePosition(input.inputmask.caretPos.end);
                                    caret(input, isRTL ? caretPos_begin + (caretPos_begin === maskset.maskLength ? 0 : 1) : caretPos_begin - (0 === caretPos_begin ? 0 : 1));
                                }), 0));
                                ignorable = -1 !== $.inArray(k, opts.ignorables);
                            },
                            keypressEvent: function keypressEvent(e, checkval, writeOut, strict, ndx) {
                                var input = this, $input = $(input), k = e.which || e.charCode || e.keyCode;
                                if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) return k === keyCode.ENTER && undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""), 
                                setTimeout((function() {
                                    $input.trigger("change");
                                }), 0)), skipInputEvent = !0, !0;
                                if (k) {
                                    44 !== k && 46 !== k || 3 !== e.location || "" === opts.radixPoint || (k = opts.radixPoint.charCodeAt(0));
                                    var forwardPosition, pos = checkval ? {
                                        begin: ndx,
                                        end: ndx
                                    } : caret(input), c = String.fromCharCode(k);
                                    maskset.writeOutBuffer = !0;
                                    var valResult = isValid(pos, c, strict);
                                    if (!1 !== valResult && (resetMaskSet(!0), forwardPosition = void 0 !== valResult.caret ? valResult.caret : seekNext(valResult.pos.begin ? valResult.pos.begin : valResult.pos), 
                                    maskset.p = forwardPosition), forwardPosition = opts.numericInput && void 0 === valResult.caret ? seekPrevious(forwardPosition) : forwardPosition, 
                                    !1 !== writeOut && (setTimeout((function() {
                                        opts.onKeyValidation.call(input, k, valResult);
                                    }), 0), maskset.writeOutBuffer && !1 !== valResult)) {
                                        var buffer = getBuffer();
                                        writeBuffer(input, buffer, forwardPosition, e, !0 !== checkval);
                                    }
                                    if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), 
                                    valResult;
                                }
                            },
                            pasteEvent: function pasteEvent(e) {
                                var tempValue, inputValue = this.inputmask._valueGet(!0), caretPos = caret(this);
                                isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
                                var valueBeforeCaret = inputValue.substr(0, caretPos.begin), valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                                if (valueBeforeCaret == (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), 
                                valueAfterCaret == (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""), 
                                window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret; else {
                                    if (!e.clipboardData || !e.clipboardData.getData) return !0;
                                    inputValue = valueBeforeCaret + e.clipboardData.getData("text/plain") + valueAfterCaret;
                                }
                                var pasteValue = inputValue;
                                if ($.isFunction(opts.onBeforePaste)) {
                                    if (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts), !1 === pasteValue) return e.preventDefault();
                                    pasteValue = pasteValue || inputValue;
                                }
                                return checkVal(this, !1, !1, pasteValue.toString().split("")), writeBuffer(this, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join("")), 
                                e.preventDefault();
                            },
                            inputFallBackEvent: function inputFallBackEvent(e) {
                                function ieMobileHandler(input, inputValue, caretPos) {
                                    if (iemobile) {
                                        var inputChar = inputValue.replace(getBuffer().join(""), "");
                                        if (1 === inputChar.length) {
                                            var iv = inputValue.split("");
                                            iv.splice(caretPos.begin, 0, inputChar), inputValue = iv.join("");
                                        }
                                    }
                                    return inputValue;
                                }
                                function analyseChanges(inputValue, buffer, caretPos) {
                                    for (var bl, i, placeholder, frontPart = inputValue.substr(0, caretPos.begin).split(""), backPart = inputValue.substr(caretPos.begin).split(""), frontBufferPart = buffer.substr(0, caretPos.begin).split(""), backBufferPart = buffer.substr(caretPos.begin).split(""), fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length, bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length, action = "", data = []; frontPart.length < fpl; ) frontPart.push("~");
                                    for (;frontBufferPart.length < fpl; ) frontBufferPart.push("~");
                                    for (;backPart.length < bpl; ) backPart.unshift("~");
                                    for (;backBufferPart.length < bpl; ) backBufferPart.unshift("~");
                                    var newBuffer = frontPart.concat(backPart), oldBuffer = frontBufferPart.concat(backBufferPart);
                                    for (i = 0, bl = newBuffer.length; i < bl; i++) switch (placeholder = getPlaceholder(translatePosition(i)), 
                                    action) {
                                      case "insertText":
                                        oldBuffer[i - 1] === newBuffer[i] && caretPos.begin == newBuffer.length - 1 && data.push(newBuffer[i]), 
                                        i = bl;
                                        break;

                                      case "insertReplacementText":
                                        "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                                        break;

                                      case "deleteContentBackward":
                                        "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                                        break;

                                      default:
                                        newBuffer[i] !== oldBuffer[i] && ("~" !== newBuffer[i + 1] && newBuffer[i + 1] !== placeholder && void 0 !== newBuffer[i + 1] || (oldBuffer[i] !== placeholder || "~" !== oldBuffer[i + 1]) && "~" !== oldBuffer[i] ? "~" === oldBuffer[i + 1] && oldBuffer[i] === newBuffer[i + 1] ? (action = "insertText", 
                                        data.push(newBuffer[i]), caretPos.begin--, caretPos.end--) : newBuffer[i] !== placeholder && "~" !== newBuffer[i] && ("~" === newBuffer[i + 1] || oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1]) ? (action = "insertReplacementText", 
                                        data.push(newBuffer[i]), caretPos.begin--) : "~" === newBuffer[i] ? (action = "deleteContentBackward", 
                                        !isMask(translatePosition(i), !0) && oldBuffer[i] !== opts.radixPoint || caretPos.end++) : i = bl : (action = "insertText", 
                                        data.push(newBuffer[i]), caretPos.begin--, caretPos.end--));
                                        break;
                                    }
                                    return {
                                        action,
                                        data,
                                        caret: caretPos
                                    };
                                }
                                var input = this, inputValue = input.inputmask._valueGet(!0), buffer = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join(""), caretPos = caret(input, void 0, void 0, !0);
                                if (buffer !== inputValue) {
                                    inputValue = ieMobileHandler(input, inputValue, caretPos);
                                    var changes = analyseChanges(inputValue, buffer, caretPos);
                                    switch ((input.inputmask.shadowRoot || document).activeElement !== input && input.focus(), 
                                    writeBuffer(input, getBuffer()), caret(input, caretPos.begin, caretPos.end, !0), 
                                    changes.action) {
                                      case "insertText":
                                      case "insertReplacementText":
                                        $.each(changes.data, (function(ndx, entry) {
                                            var keypress = new $.Event("keypress");
                                            keypress.which = entry.charCodeAt(0), ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);
                                        })), setTimeout((function() {
                                            $el.trigger("keyup");
                                        }), 0);
                                        break;

                                      case "deleteContentBackward":
                                        var keydown = new $.Event("keydown");
                                        keydown.keyCode = keyCode.BACKSPACE, EventHandlers.keydownEvent.call(input, keydown);
                                        break;

                                      default:
                                        applyInputValue(input, inputValue);
                                        break;
                                    }
                                    e.preventDefault();
                                }
                            },
                            compositionendEvent: function compositionendEvent(e) {
                                $el.trigger("input");
                            },
                            setValueEvent: function setValueEvent(e, argument_1, argument_2) {
                                var value = e && e.detail ? e.detail[0] : argument_1;
                                void 0 === value && (value = this.inputmask._valueGet(!0)), applyInputValue(this, value), 
                                (e.detail && void 0 !== e.detail[1] || void 0 !== argument_2) && caret(this, e.detail ? e.detail[1] : argument_2);
                            },
                            focusEvent: function focusEvent(e) {
                                var nptValue = this.inputmask._valueGet();
                                opts.showMaskOnFocus && nptValue !== getBuffer().join("") && writeBuffer(this, getBuffer(), seekNext(getLastValidPosition())), 
                                !0 !== opts.positionCaretOnTab || !1 !== mouseEnter || isComplete(getBuffer()) && -1 !== getLastValidPosition() || EventHandlers.clickEvent.apply(this, [ e, !0 ]), 
                                undoValue = getBuffer().join("");
                            },
                            invalidEvent: function invalidEvent(e) {
                                validationEvent = !0;
                            },
                            mouseleaveEvent: function mouseleaveEvent() {
                                mouseEnter = !1, opts.clearMaskOnLostFocus && (this.inputmask.shadowRoot || document).activeElement !== this && HandleNativePlaceholder(this, originalPlaceholder);
                            },
                            clickEvent: function clickEvent(e, tabbed) {
                                if ((this.inputmask.shadowRoot || document).activeElement === this) {
                                    var newCaretPosition = determineNewCaretPosition(caret(this), tabbed);
                                    void 0 !== newCaretPosition && caret(this, newCaretPosition);
                                }
                            },
                            cutEvent: function cutEvent(e) {
                                var pos = caret(this), clipboardData = window.clipboardData || e.clipboardData, clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
                                clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")), 
                                document.execCommand && document.execCommand("copy"), handleRemove(this, keyCode.DELETE, pos), 
                                writeBuffer(this, getBuffer(), maskset.p, e, undoValue !== getBuffer().join(""));
                            },
                            blurEvent: function blurEvent(e) {
                                var $input = $(this);
                                if (this.inputmask) {
                                    HandleNativePlaceholder(this, originalPlaceholder);
                                    var nptValue = this.inputmask._valueGet(), buffer = getBuffer().slice();
                                    "" !== nptValue && (opts.clearMaskOnLostFocus && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)), 
                                    !1 === isComplete(buffer) && (setTimeout((function() {
                                        $input.trigger("incomplete");
                                    }), 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), 
                                    writeBuffer(this, buffer, void 0, e)), undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""), 
                                    $input.trigger("change"));
                                }
                            },
                            mouseenterEvent: function mouseenterEvent() {
                                mouseEnter = !0, (this.inputmask.shadowRoot || document).activeElement !== this && (null == originalPlaceholder && this.placeholder !== originalPlaceholder && (originalPlaceholder = this.placeholder), 
                                opts.showMaskOnHover && HandleNativePlaceholder(this, (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).join("")));
                            },
                            submitEvent: function submitEvent() {
                                undoValue !== getBuffer().join("") && $el.trigger("change"), opts.clearMaskOnLostFocus && -1 === getLastValidPosition() && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""), 
                                opts.clearIncomplete && !1 === isComplete(getBuffer()) && el.inputmask._valueSet(""), 
                                opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0), 
                                setTimeout((function() {
                                    writeBuffer(el, getBuffer());
                                }), 0));
                            },
                            resetEvent: function resetEvent() {
                                el.inputmask.refreshValue = !0, setTimeout((function() {
                                    applyInputValue(el, el.inputmask._valueGet(!0));
                                }), 0);
                            }
                        };
                        function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
                            var inputmask = this || input.inputmask, inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result = void 0;
                            function isTemplateMatch(ndx, charCodes) {
                                for (var targetTemplate = getMaskTemplate(!0, 0).slice(ndx, seekNext(ndx)).join("").replace(/'/g, ""), charCodeNdx = targetTemplate.indexOf(charCodes); 0 < charCodeNdx && " " === targetTemplate[charCodeNdx - 1]; ) charCodeNdx--;
                                var match = 0 === charCodeNdx && !isMask(ndx) && (getTest(ndx).match.nativeDef === charCodes.charAt(0) || !0 === getTest(ndx).match.static && getTest(ndx).match.nativeDef === "'" + charCodes.charAt(0) || " " === getTest(ndx).match.nativeDef && (getTest(ndx + 1).match.nativeDef === charCodes.charAt(0) || !0 === getTest(ndx + 1).match.static && getTest(ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));
                                return !match && 0 < charCodeNdx && (inputmask.caretPos = {
                                    begin: seekNext(charCodeNdx)
                                }), match;
                            }
                            resetMaskSet(), maskset.tests = {}, initialNdx = opts.radixPoint ? determineNewCaretPosition({
                                begin: 0,
                                end: 0
                            }).begin : 0, maskset.p = initialNdx, inputmask.caretPos = {
                                begin: initialNdx
                            };
                            var staticMatches = [], prevCaretPos = inputmask.caretPos;
                            if ($.each(inputValue, (function(ndx, charCode) {
                                if (void 0 !== charCode) if (void 0 === maskset.validPositions[ndx] && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, !0) && !1 === isValid(ndx, inputValue[ndx], !0, void 0, void 0, !0)) maskset.p++; else {
                                    var keypress = new $.Event("_checkval");
                                    keypress.which = charCode.toString().charCodeAt(0), charCodes += charCode;
                                    var lvp = getLastValidPosition(void 0, !0);
                                    isTemplateMatch(initialNdx, charCodes) ? result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, lvp + 1) : (result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, inputmask.caretPos.begin), 
                                    result && (initialNdx = inputmask.caretPos.begin + 1, charCodes = "")), result ? (void 0 !== result.pos && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match.static && void 0 === maskset.validPositions[result.pos].alternation && (staticMatches.push(result.pos), 
                                    isRTL || (result.forwardPosition = result.pos + 1)), writeBuffer(void 0, getBuffer(), result.forwardPosition, keypress, !1), 
                                    inputmask.caretPos = {
                                        begin: result.forwardPosition,
                                        end: result.forwardPosition
                                    }, prevCaretPos = inputmask.caretPos) : inputmask.caretPos = prevCaretPos;
                                }
                            })), 0 < staticMatches.length) {
                                var sndx, validPos, nextValid = seekNext(-1, void 0, !1);
                                if (!isComplete(getBuffer()) && staticMatches.length <= nextValid || isComplete(getBuffer()) && 0 < staticMatches.length && staticMatches.length !== nextValid && 0 === staticMatches[0]) for (var nextSndx = nextValid; void 0 !== (sndx = staticMatches.shift()); ) {
                                    var keypress = new $.Event("_checkval");
                                    if (validPos = maskset.validPositions[sndx], validPos.generatedInput = !0, keypress.which = validPos.input.charCodeAt(0), 
                                    result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, nextSndx), 
                                    result && void 0 !== result.pos && result.pos !== sndx && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match.static) staticMatches.push(result.pos); else if (!result) break;
                                    nextSndx++;
                                } else for (;sndx = staticMatches.pop(); ) validPos = maskset.validPositions[sndx], 
                                validPos && (validPos.generatedInput = !0);
                            }
                            if (writeOut) for (var vndx in writeBuffer(input, getBuffer(), result ? result.forwardPosition : void 0, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type), 
                            maskset.validPositions) !0 !== maskset.validPositions[vndx].match.generated && delete maskset.validPositions[vndx].generatedInput;
                        }
                        function unmaskedvalue(input) {
                            if (input) {
                                if (void 0 === input.inputmask) return input.value;
                                input.inputmask && input.inputmask.refreshValue && applyInputValue(input, input.inputmask._valueGet(!0));
                            }
                            var umValue = [], vps = maskset.validPositions;
                            for (var pndx in vps) vps[pndx] && vps[pndx].match && 1 != vps[pndx].match.static && umValue.push(vps[pndx].input);
                            var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");
                            if ($.isFunction(opts.onUnMask)) {
                                var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                                unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
                            }
                            return unmaskedValue;
                        }
                        function translatePosition(pos) {
                            return !isRTL || "number" != typeof pos || opts.greedy && "" === opts.placeholder || !el || (pos = el.inputmask._valueGet().length - pos), 
                            pos;
                        }
                        function caret(input, begin, end, notranslate, isDelete) {
                            var range;
                            if (void 0 === begin) return "selectionStart" in input && "selectionEnd" in input ? (begin = input.selectionStart, 
                            end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0), 
                            range.commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, 
                            end = range.endOffset)) : document.selection && document.selection.createRange && (range = document.selection.createRange(), 
                            begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length), 
                            end = begin + range.text.length), {
                                begin: notranslate ? begin : translatePosition(begin),
                                end: notranslate ? end : translatePosition(end)
                            };
                            if ($.isArray(begin) && (end = isRTL ? begin[0] : begin[1], begin = isRTL ? begin[1] : begin[0]), 
                            void 0 !== begin.begin && (end = isRTL ? begin.begin : begin.end, begin = isRTL ? begin.end : begin.begin), 
                            "number" == typeof begin) {
                                begin = notranslate ? begin : translatePosition(begin), end = notranslate ? end : translatePosition(end), 
                                end = "number" == typeof end ? end : begin;
                                var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                                if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, input.inputmask.caretPos = {
                                    begin,
                                    end
                                }, opts.insertModeVisual && !1 === opts.insertMode && begin === end && (isDelete || end++), 
                                input === (input.inputmask.shadowRoot || document).activeElement) if ("setSelectionRange" in input) input.setSelectionRange(begin, end); else if (window.getSelection) {
                                    if (range = document.createRange(), void 0 === input.firstChild || null === input.firstChild) {
                                        var textNode = document.createTextNode("");
                                        input.appendChild(textNode);
                                    }
                                    range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), 
                                    range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), 
                                    range.collapse(!0);
                                    var sel = window.getSelection();
                                    sel.removeAllRanges(), sel.addRange(range);
                                } else input.createTextRange && (range = input.createTextRange(), range.collapse(!0), 
                                range.moveEnd("character", end), range.moveStart("character", begin), range.select());
                            }
                        }
                        function determineLastRequiredPosition(returnDefinition) {
                            var pos, testPos, buffer = getMaskTemplate(!0, getLastValidPosition(), !0, !0), bl = buffer.length, lvp = getLastValidPosition(), positions = {}, lvTest = maskset.validPositions[lvp], ndxIntlzr = void 0 !== lvTest ? lvTest.locator.slice() : void 0;
                            for (pos = lvp + 1; pos < buffer.length; pos++) testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), 
                            ndxIntlzr = testPos.locator.slice(), positions[pos] = $.extend(!0, {}, testPos);
                            var lvTestAlt = lvTest && void 0 !== lvTest.alternation ? lvTest.locator[lvTest.alternation] : void 0;
                            for (pos = bl - 1; lvp < pos && (testPos = positions[pos], (testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && 1 != testPos.match.static || !0 === testPos.match.static && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match)); pos--) bl--;
                            return returnDefinition ? {
                                l: bl,
                                def: positions[bl] ? positions[bl].match : void 0
                            } : bl;
                        }
                        function clearOptionalTail(buffer) {
                            buffer.length = 0;
                            for (var lmnt, template = getMaskTemplate(!0, 0, !0, void 0, !0); void 0 !== (lmnt = template.shift()); ) buffer.push(lmnt);
                            return buffer;
                        }
                        function isComplete(buffer) {
                            if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
                            if ("*" !== opts.repeat) {
                                var complete = !1, lrp = determineLastRequiredPosition(!0), aml = seekPrevious(lrp.l);
                                if (void 0 === lrp.def || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                                    complete = !0;
                                    for (var i = 0; i <= aml; i++) {
                                        var test = getTestTemplate(i).match;
                                        if (!0 !== test.static && void 0 === maskset.validPositions[i] && !0 !== test.optionality && !0 !== test.optionalQuantifier || !0 === test.static && buffer[i] !== getPlaceholder(i, test)) {
                                            complete = !1;
                                            break;
                                        }
                                    }
                                }
                                return complete;
                            }
                        }
                        function handleRemove(input, k, pos, strict, fromIsValid) {
                            if ((opts.numericInput || isRTL) && (k === keyCode.BACKSPACE ? k = keyCode.DELETE : k === keyCode.DELETE && (k = keyCode.BACKSPACE), 
                            isRTL)) {
                                var pend = pos.end;
                                pos.end = pos.begin, pos.begin = pend;
                            }
                            var offset;
                            if (k === keyCode.BACKSPACE ? pos.end - pos.begin < 1 && (pos.begin = seekPrevious(pos.begin)) : k === keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0, !0) ? pos.end + 1 : seekNext(pos.end) + 1), 
                            !1 !== (offset = revalidateMask(pos))) {
                                if (!0 !== strict && !1 !== opts.keepStatic || null !== opts.regex && -1 !== getTest(pos.begin).match.def.indexOf("|")) {
                                    var result = alternate(!0);
                                    if (result) {
                                        var newPos = void 0 !== result.caret ? result.caret : result.pos ? seekNext(result.pos.begin ? result.pos.begin : result.pos) : getLastValidPosition(-1, !0);
                                        (k !== keyCode.DELETE || pos.begin > newPos) && pos.begin;
                                    }
                                }
                                !0 !== strict && (maskset.p = k === keyCode.DELETE ? pos.begin + offset : pos.begin);
                            }
                        }
                        function applyInputValue(input, value) {
                            input.inputmask.refreshValue = !1, $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), 
                            value = value.toString().split(""), checkVal(input, !0, !1, value), undoValue = getBuffer().join(""), 
                            (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("") && -1 === getLastValidPosition() && input.inputmask._valueSet("");
                        }
                        function mask(elem) {
                            function isElementTypeSupported(input, opts) {
                                function patchValueProperty(npt) {
                                    var valueGet, valueSet;
                                    function patchValhook(type) {
                                        if ($.valHooks && (void 0 === $.valHooks[type] || !0 !== $.valHooks[type].inputmaskpatch)) {
                                            var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {
                                                return elem.value;
                                            }, valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {
                                                return elem.value = value, elem;
                                            };
                                            $.valHooks[type] = {
                                                get: function get(elem) {
                                                    if (elem.inputmask) {
                                                        if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                                                        var result = valhookGet(elem);
                                                        return -1 !== getLastValidPosition(void 0, void 0, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : "";
                                                    }
                                                    return valhookGet(elem);
                                                },
                                                set: function set(elem, value) {
                                                    var result = valhookSet(elem, value);
                                                    return elem.inputmask && applyInputValue(elem, value), result;
                                                },
                                                inputmaskpatch: !0
                                            };
                                        }
                                    }
                                    function getter() {
                                        return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== opts.nullable ? (this.inputmask.shadowRoot || document.activeElement) === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);
                                    }
                                    function setter(value) {
                                        valueSet.call(this, value), this.inputmask && applyInputValue(this, value);
                                    }
                                    function installNativeValueSetFallback(npt) {
                                        EventRuler.on(npt, "mouseenter", (function() {
                                            var value = this.inputmask._valueGet(!0);
                                            value !== (isRTL ? getBuffer().reverse() : getBuffer()).join("") && applyInputValue(this, value);
                                        }));
                                    }
                                    if (!npt.inputmask.__valueGet) {
                                        if (!0 !== opts.noValuePatching) {
                                            if (Object.getOwnPropertyDescriptor) {
                                                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof("test".__proto__) ? function(object) {
                                                    return object.__proto__;
                                                } : function(object) {
                                                    return object.constructor.prototype;
                                                });
                                                var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : void 0;
                                                valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, 
                                                valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                                                    get: getter,
                                                    set: setter,
                                                    configurable: !0
                                                })) : "input" !== npt.tagName.toLowerCase() && (valueGet = function valueGet() {
                                                    return this.textContent;
                                                }, valueSet = function valueSet(value) {
                                                    this.textContent = value;
                                                }, Object.defineProperty(npt, "value", {
                                                    get: getter,
                                                    set: setter,
                                                    configurable: !0
                                                }));
                                            } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), 
                                            valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), 
                                            npt.__defineSetter__("value", setter));
                                            npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;
                                        }
                                        npt.inputmask._valueGet = function(overruleRTL) {
                                            return isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                                        }, npt.inputmask._valueSet = function(value, overruleRTL) {
                                            valueSet.call(this.el, null == value ? "" : !0 !== overruleRTL && isRTL ? value.split("").reverse().join("") : value);
                                        }, void 0 === valueGet && (valueGet = function valueGet() {
                                            return this.value;
                                        }, valueSet = function valueSet(value) {
                                            this.value = value;
                                        }, patchValhook(npt.type), installNativeValueSetFallback(npt));
                                    }
                                }
                                "textarea" !== input.tagName.toLowerCase() && opts.ignorables.push(keyCode.ENTER);
                                var elementType = input.getAttribute("type"), isSupported = "input" === input.tagName.toLowerCase() && -1 !== $.inArray(elementType, opts.supportsInputType) || input.isContentEditable || "textarea" === input.tagName.toLowerCase();
                                if (!isSupported) if ("input" === input.tagName.toLowerCase()) {
                                    var el = document.createElement("input");
                                    el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;
                                } else isSupported = "partial";
                                return !1 !== isSupported ? patchValueProperty(input) : input.inputmask = void 0, 
                                isSupported;
                            }
                            EventRuler.off(elem);
                            var isSupported = isElementTypeSupported(elem, opts);
                            if (!1 !== isSupported) {
                                el = elem, $el = $(el), originalPlaceholder = el.placeholder, maxLength = void 0 !== el ? el.maxLength : void 0, 
                                -1 === maxLength && (maxLength = void 0), "inputMode" in el && null === el.getAttribute("inputmode") && (el.inputMode = opts.inputmode, 
                                el.setAttribute("inputmode", opts.inputmode)), !0 === isSupported && (opts.showMaskOnFocus = opts.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(el.autocomplete), 
                                iphone && (opts.insertModeVisual = !1), EventRuler.on(el, "submit", EventHandlers.submitEvent), 
                                EventRuler.on(el, "reset", EventHandlers.resetEvent), EventRuler.on(el, "blur", EventHandlers.blurEvent), 
                                EventRuler.on(el, "focus", EventHandlers.focusEvent), EventRuler.on(el, "invalid", EventHandlers.invalidEvent), 
                                EventRuler.on(el, "click", EventHandlers.clickEvent), EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent), 
                                EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent), EventRuler.on(el, "paste", EventHandlers.pasteEvent), 
                                EventRuler.on(el, "cut", EventHandlers.cutEvent), EventRuler.on(el, "complete", opts.oncomplete), 
                                EventRuler.on(el, "incomplete", opts.onincomplete), EventRuler.on(el, "cleared", opts.oncleared), 
                                mobile || !0 === opts.inputEventOnly ? el.removeAttribute("maxLength") : (EventRuler.on(el, "keydown", EventHandlers.keydownEvent), 
                                EventRuler.on(el, "keypress", EventHandlers.keypressEvent)), EventRuler.on(el, "input", EventHandlers.inputFallBackEvent), 
                                EventRuler.on(el, "compositionend", EventHandlers.compositionendEvent)), EventRuler.on(el, "setvalue", EventHandlers.setValueEvent), 
                                undoValue = getBufferTemplate().join("");
                                var activeElement = (el.inputmask.shadowRoot || document).activeElement;
                                if ("" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || activeElement === el) {
                                    applyInputValue(el, el.inputmask._valueGet(!0), opts);
                                    var buffer = getBuffer().slice();
                                    !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(), opts.clearMaskOnLostFocus && activeElement !== el && (-1 === getLastValidPosition() ? buffer = [] : clearOptionalTail(buffer)), 
                                    (!1 === opts.clearMaskOnLostFocus || opts.showMaskOnFocus && activeElement === el || "" !== el.inputmask._valueGet(!0)) && writeBuffer(el, buffer), 
                                    activeElement === el && caret(el, seekNext(getLastValidPosition()));
                                }
                            }
                        }
                        if (void 0 !== actionObj) switch (actionObj.action) {
                          case "isComplete":
                            return el = actionObj.el, isComplete(getBuffer());

                          case "unmaskedvalue":
                            return void 0 !== el && void 0 === actionObj.value || (valueBuffer = actionObj.value, 
                            valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer).split(""), 
                            checkVal.call(this, void 0, !1, !1, valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(inputmask, void 0, getBuffer(), 0, opts)), 
                            unmaskedvalue(el);

                          case "mask":
                            mask(el);
                            break;

                          case "format":
                            return valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value).split(""), 
                            checkVal.call(this, void 0, !0, !1, valueBuffer), actionObj.metadata ? {
                                value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                                metadata: maskScope.call(this, {
                                    action: "getmetadata"
                                }, maskset, opts)
                            } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

                          case "isValid":
                            actionObj.value ? (valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value).split(""), 
                            checkVal.call(this, void 0, !0, !1, valueBuffer)) : actionObj.value = isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");
                            for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; rl < lmib && !isMask(lmib); lmib--) ;
                            return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === (isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""));

                          case "getemptymask":
                            return getBufferTemplate().join("");

                          case "remove":
                            if (el && el.inputmask) {
                                $.data(el, "_inputmask_opts", null), $el = $(el);
                                var valueProperty, cv = opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(opts.autoUnmask);
                                cv !== getBufferTemplate().join("") ? el.inputmask._valueSet(cv, opts.autoUnmask) : el.inputmask._valueSet(""), 
                                EventRuler.off(el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value"), 
                                valueProperty && el.inputmask.__valueGet && Object.defineProperty(el, "value", {
                                    get: el.inputmask.__valueGet,
                                    set: el.inputmask.__valueSet,
                                    configurable: !0
                                })) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet), 
                                el.__defineSetter__("value", el.inputmask.__valueSet)), el.inputmask = void 0;
                            }
                            return el;

                          case "getmetadata":
                            if ($.isArray(maskset.metadata)) {
                                var maskTarget = getMaskTemplate(!0, 0, !1).join("");
                                return $.each(maskset.metadata, (function(ndx, mtdt) {
                                    if (mtdt.mask === maskTarget) return maskTarget = mtdt, !1;
                                })), maskTarget;
                            }
                            return maskset.metadata;
                        }
                    };
                }, function(module, exports, __nested_webpack_require_91695__) {
                    "use strict";
                    function _typeof(obj) {
                        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                            return typeof obj;
                        } : function _typeof(obj) {
                            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        }, _typeof(obj);
                    }
                    var Inputmask = __nested_webpack_require_91695__(1), $ = Inputmask.dependencyLib, keyCode = __nested_webpack_require_91695__(0), formatCode = {
                        d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                        dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                            return pad(Date.prototype.getDate.call(this), 2);
                        } ],
                        ddd: [ "" ],
                        dddd: [ "" ],
                        m: [ "[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                            return Date.prototype.getMonth.call(this) + 1;
                        } ],
                        mm: [ "0[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                            return pad(Date.prototype.getMonth.call(this) + 1, 2);
                        } ],
                        mmm: [ "" ],
                        mmmm: [ "" ],
                        yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                            return pad(Date.prototype.getFullYear.call(this), 2);
                        } ],
                        yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                            return pad(Date.prototype.getFullYear.call(this), 4);
                        } ],
                        h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                        hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                            return pad(Date.prototype.getHours.call(this), 2);
                        } ],
                        hx: [ function(x) {
                            return "[0-9]{".concat(x, "}");
                        }, Date.prototype.setHours, "hours", function(x) {
                            return Date.prototype.getHours;
                        } ],
                        H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                        HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                            return pad(Date.prototype.getHours.call(this), 2);
                        } ],
                        Hx: [ function(x) {
                            return "[0-9]{".concat(x, "}");
                        }, Date.prototype.setHours, "hours", function(x) {
                            return function() {
                                return pad(Date.prototype.getHours.call(this), x);
                            };
                        } ],
                        M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                        MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                            return pad(Date.prototype.getMinutes.call(this), 2);
                        } ],
                        s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                        ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                            return pad(Date.prototype.getSeconds.call(this), 2);
                        } ],
                        l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                            return pad(Date.prototype.getMilliseconds.call(this), 3);
                        } ],
                        L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                            return pad(Date.prototype.getMilliseconds.call(this), 2);
                        } ],
                        t: [ "[ap]" ],
                        tt: [ "[ap]m" ],
                        T: [ "[AP]" ],
                        TT: [ "[AP]M" ],
                        Z: [ "" ],
                        o: [ "" ],
                        S: [ "" ]
                    }, formatAlias = {
                        isoDate: "yyyy-mm-dd",
                        isoTime: "HH:MM:ss",
                        isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                    };
                    function formatcode(match) {
                        var dynMatches = new RegExp("\\d+$").exec(match[0]);
                        if (dynMatches && void 0 !== dynMatches[0]) {
                            var fcode = formatCode[match[0][0] + "x"].slice("");
                            return fcode[0] = fcode[0](dynMatches[0]), fcode[3] = fcode[3](dynMatches[0]), fcode;
                        }
                        if (formatCode[match[0]]) return formatCode[match[0]];
                    }
                    function getTokenizer(opts) {
                        if (!opts.tokenizer) {
                            var tokens = [], dyntokens = [];
                            for (var ndx in formatCode) if (/\.*x$/.test(ndx)) {
                                var dynToken = ndx[0] + "\\d+";
                                -1 === dyntokens.indexOf(dynToken) && dyntokens.push(dynToken);
                            } else -1 === tokens.indexOf(ndx[0]) && tokens.push(ndx[0]);
                            opts.tokenizer = "(" + (0 < dyntokens.length ? dyntokens.join("|") + "|" : "") + tokens.join("+|") + ")+?|.", 
                            opts.tokenizer = new RegExp(opts.tokenizer, "g");
                        }
                        return opts.tokenizer;
                    }
                    function isValidDate(dateParts, currentResult) {
                        return (!isFinite(dateParts.rawday) || "29" == dateParts.day && !isFinite(dateParts.rawyear) || new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day) && currentResult;
                    }
                    function isDateInRange(dateParts, opts) {
                        var result = !0;
                        if (opts.min) {
                            if (dateParts.rawyear) {
                                var rawYear = dateParts.rawyear.replace(/[^0-9]/g, ""), minYear = opts.min.year.substr(0, rawYear.length);
                                result = minYear <= rawYear;
                            }
                            dateParts.year === dateParts.rawyear && opts.min.date.getTime() == opts.min.date.getTime() && (result = opts.min.date.getTime() <= dateParts.date.getTime());
                        }
                        return result && opts.max && opts.max.date.getTime() == opts.max.date.getTime() && (result = opts.max.date.getTime() >= dateParts.date.getTime()), 
                        result;
                    }
                    function parse(format, dateObjValue, opts, raw) {
                        var match, fcode, mask = "";
                        for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format); ) if (void 0 === dateObjValue) if (fcode = formatcode(match)) mask += "(" + fcode[0] + ")"; else switch (match[0]) {
                          case "[":
                            mask += "(";
                            break;

                          case "]":
                            mask += ")?";
                            break;

                          default:
                            mask += Inputmask.escapeRegex(match[0]);
                        } else if (fcode = formatcode(match)) if (!0 !== raw && fcode[3]) {
                            var getFn = fcode[3];
                            mask += getFn.call(dateObjValue.date);
                        } else fcode[2] ? mask += dateObjValue["raw" + fcode[2]] : mask += match[0]; else mask += match[0];
                        return mask;
                    }
                    function pad(val, len) {
                        for (val = String(val), len = len || 2; val.length < len; ) val = "0" + val;
                        return val;
                    }
                    function analyseMask(maskString, format, opts) {
                        var targetProp, match, dateOperation, dateObj = {
                            date: new Date(1, 0, 1)
                        }, mask = maskString;
                        function extendProperty(value) {
                            var correctedValue = value.replace(/[^0-9]/g, "0");
                            return correctedValue;
                        }
                        function setValue(dateObj, value, opts) {
                            dateObj[targetProp] = extendProperty(value), dateObj["raw" + targetProp] = value, 
                            void 0 !== dateOperation && dateOperation.call(dateObj.date, "month" == targetProp ? parseInt(dateObj[targetProp]) - 1 : dateObj[targetProp]);
                        }
                        if ("string" == typeof mask) {
                            for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format); ) {
                                var value = mask.slice(0, match[0].length);
                                formatCode.hasOwnProperty(match[0]) && (targetProp = formatCode[match[0]][2], dateOperation = formatCode[match[0]][1], 
                                setValue(dateObj, value, opts)), mask = mask.slice(value.length);
                            }
                            return dateObj;
                        }
                        if (mask && "object" === _typeof(mask) && mask.hasOwnProperty("date")) return mask;
                    }
                    function importDate(dateObj, opts) {
                        var match, date = "";
                        for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(opts.inputFormat); ) "d" === match[0].charAt(0) ? date += pad(dateObj.getDate(), match[0].length) : "m" === match[0].charAt(0) ? date += pad(dateObj.getMonth() + 1, match[0].length) : "yyyy" === match[0] ? date += dateObj.getFullYear().toString() : "y" === match[0].charAt(0) && (date += pad(dateObj.getYear(), match[0].length));
                        return date;
                    }
                    function getTokenMatch(pos, opts) {
                        var targetMatch, match, calcPos = 0;
                        for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(opts.inputFormat); ) if (calcPos += match[0].length, 
                        pos <= calcPos) {
                            targetMatch = match, match = getTokenizer(opts).exec(opts.inputFormat);
                            break;
                        }
                        return {
                            nextMatch: match,
                            targetMatch
                        };
                    }
                    Inputmask.extendAliases({
                        datetime: {
                            mask: function mask(opts) {
                                return opts.numericInput = !1, formatCode.S = opts.i18n.ordinalSuffix.join("|"), 
                                opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat, opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat, 
                                opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat, 
                                opts.placeholder = "" !== opts.placeholder ? opts.placeholder : opts.inputFormat.replace(/[[\]]/, ""), 
                                opts.regex = parse(opts.inputFormat, void 0, opts), opts.min = analyseMask(opts.min, opts.inputFormat, opts), 
                                opts.max = analyseMask(opts.max, opts.inputFormat, opts), null;
                            },
                            placeholder: "",
                            inputFormat: "isoDateTime",
                            displayFormat: void 0,
                            outputFormat: void 0,
                            min: null,
                            max: null,
                            skipOptionalPartCharacter: "",
                            i18n: {
                                dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                                monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                                ordinalSuffix: [ "st", "nd", "rd", "th" ]
                            },
                            preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                                if (strict) return !0;
                                if (isNaN(c) && buffer[pos] !== c) {
                                    var tokenMatch = getTokenMatch(pos, opts);
                                    if (tokenMatch.nextMatch && tokenMatch.nextMatch[0] === c && 1 < tokenMatch.targetMatch[0].length) {
                                        var validator = formatCode[tokenMatch.targetMatch[0]][0];
                                        if (new RegExp(validator).test("0" + buffer[pos - 1])) return buffer[pos] = buffer[pos - 1], 
                                        buffer[pos - 1] = "0", {
                                            fuzzy: !0,
                                            buffer,
                                            refreshFromBuffer: {
                                                start: pos - 1,
                                                end: pos + 1
                                            },
                                            pos: pos + 1
                                        };
                                    }
                                }
                                return !0;
                            },
                            postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
                                if (strict) return !0;
                                var tokenMatch;
                                if (!1 === currentResult) {
                                    if (tokenMatch = getTokenMatch(pos + 1, opts), tokenMatch.targetMatch && tokenMatch.targetMatch.index === pos && 1 < tokenMatch.targetMatch[0].length && void 0 !== formatCode[tokenMatch.targetMatch[0]]) {
                                        var validator = formatCode[tokenMatch.targetMatch[0]][0];
                                        if (new RegExp(validator).test("0" + c)) return {
                                            insert: [ {
                                                pos,
                                                c: "0"
                                            }, {
                                                pos: pos + 1,
                                                c
                                            } ],
                                            pos: pos + 1
                                        };
                                    }
                                    return currentResult;
                                }
                                if (currentResult.fuzzy && (buffer = currentResult.buffer, pos = currentResult.pos), 
                                tokenMatch = getTokenMatch(pos, opts), tokenMatch.targetMatch && tokenMatch.targetMatch[0] && void 0 !== formatCode[tokenMatch.targetMatch[0]]) {
                                    validator = formatCode[tokenMatch.targetMatch[0]][0];
                                    var part = buffer.slice(tokenMatch.targetMatch.index, tokenMatch.targetMatch.index + tokenMatch.targetMatch[0].length);
                                    !1 === new RegExp(validator).test(part.join("")) && 2 === tokenMatch.targetMatch[0].length && maskset.validPositions[tokenMatch.targetMatch.index] && maskset.validPositions[tokenMatch.targetMatch.index + 1] && (maskset.validPositions[tokenMatch.targetMatch.index + 1].input = "0");
                                }
                                var result = currentResult, dateParts = analyseMask(buffer.join(""), opts.inputFormat, opts);
                                return result && dateParts.date.getTime() == dateParts.date.getTime() && (result = isValidDate(dateParts, result), 
                                result = result && isDateInRange(dateParts, opts)), pos && result && currentResult.pos !== pos ? {
                                    buffer: parse(opts.inputFormat, dateParts, opts).split(""),
                                    refreshFromBuffer: {
                                        start: pos,
                                        end: currentResult.pos
                                    }
                                } : result;
                            },
                            onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
                                e.ctrlKey && e.keyCode === keyCode.RIGHT && (this.inputmask._valueSet(importDate(new Date, opts)), 
                                $(this).trigger("setvalue"));
                            },
                            onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                                return unmaskedValue ? parse(opts.outputFormat, analyseMask(maskedValue, opts.inputFormat, opts), opts, !0) : unmaskedValue;
                            },
                            casing: function casing(elem, test, pos, validPositions) {
                                return 0 == test.nativeDef.indexOf("[ap]") ? elem.toLowerCase() : 0 == test.nativeDef.indexOf("[AP]") ? elem.toUpperCase() : elem;
                            },
                            onBeforeMask: function onBeforeMask(initialValue, opts) {
                                return "[object Date]" === Object.prototype.toString.call(initialValue) && (initialValue = importDate(initialValue, opts)), 
                                initialValue;
                            },
                            insertMode: !1,
                            shiftPositions: !1,
                            keepStatic: !1,
                            inputmode: "numeric"
                        }
                    }), module.exports = Inputmask;
                }, function(module, exports, __nested_webpack_require_102135__) {
                    "use strict";
                    var Inputmask = __nested_webpack_require_102135__(1), $ = Inputmask.dependencyLib, keyCode = __nested_webpack_require_102135__(0);
                    function autoEscape(txt, opts) {
                        for (var escapedTxt = "", i = 0; i < txt.length; i++) Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker[0] === txt.charAt(i) || opts.optionalmarker[1] === txt.charAt(i) || opts.quantifiermarker[0] === txt.charAt(i) || opts.quantifiermarker[1] === txt.charAt(i) || opts.groupmarker[0] === txt.charAt(i) || opts.groupmarker[1] === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);
                        return escapedTxt;
                    }
                    function alignDigits(buffer, digits, opts, force) {
                        if (0 < digits && (!opts.digitsOptional || force)) {
                            var radixPosition = $.inArray(opts.radixPoint, buffer);
                            -1 === radixPosition && (buffer.push(opts.radixPoint), radixPosition = buffer.length - 1);
                            for (var i = 1; i <= digits; i++) isFinite(buffer[radixPosition + i]) || (buffer[radixPosition + i] = "0");
                        }
                        return buffer;
                    }
                    function findValidator(symbol, maskset) {
                        var posNdx = 0;
                        if ("+" === symbol) {
                            for (posNdx in maskset.validPositions) ;
                            posNdx = parseInt(posNdx);
                        }
                        for (var tstNdx in maskset.tests) if (tstNdx = parseInt(tstNdx), posNdx <= tstNdx) for (var ndx = 0, ndxl = maskset.tests[tstNdx].length; ndx < ndxl; ndx++) if ((void 0 === maskset.validPositions[tstNdx] || "-" === symbol) && maskset.tests[tstNdx][ndx].match.def === symbol) return tstNdx + (void 0 !== maskset.validPositions[tstNdx] && "-" !== symbol ? 1 : 0);
                        return posNdx;
                    }
                    function findValid(symbol, maskset) {
                        var ret = -1;
                        return $.each(maskset.validPositions, (function(ndx, tst) {
                            if (tst && tst.match.def === symbol) return ret = parseInt(ndx), !1;
                        })), ret;
                    }
                    function parseMinMaxOptions(opts) {
                        void 0 === opts.parseMinMaxOptions && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                        "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), 
                        opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), 
                        null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                        "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), 
                        opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), 
                        opts.parseMinMaxOptions = "done");
                    }
                    function genMask(opts) {
                        opts.repeat = 0, opts.groupSeparator === opts.radixPoint && opts.digits && "0" !== opts.digits && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), 
                        " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = void 0), 1 < opts.placeholder.length && (opts.placeholder = opts.placeholder.charAt(0)), 
                        "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && (opts.positionCaretOnClick = "lvp");
                        var decimalDef = "0", radixPointDef = opts.radixPoint;
                        !0 === opts.numericInput && void 0 === opts.__financeInput ? (decimalDef = "1", 
                        opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, 
                        opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts._radixDance = !1, 
                        radixPointDef = "," === opts.radixPoint ? "?" : "!", "" !== opts.radixPoint && void 0 === opts.definitions[radixPointDef] && (opts.definitions[radixPointDef] = {}, 
                        opts.definitions[radixPointDef].validator = "[" + opts.radixPoint + "]", opts.definitions[radixPointDef].placeholder = opts.radixPoint, 
                        opts.definitions[radixPointDef].static = !0, opts.definitions[radixPointDef].generated = !0)) : (opts.__financeInput = !1, 
                        opts.numericInput = !0);
                        var altMask, mask = "[+]";
                        if (mask += autoEscape(opts.prefix, opts), "" !== opts.groupSeparator ? (void 0 === opts.definitions[opts.groupSeparator] && (opts.definitions[opts.groupSeparator] = {}, 
                        opts.definitions[opts.groupSeparator].validator = "[" + opts.groupSeparator + "]", 
                        opts.definitions[opts.groupSeparator].placeholder = opts.groupSeparator, opts.definitions[opts.groupSeparator].static = !0, 
                        opts.definitions[opts.groupSeparator].generated = !0), mask += opts._mask(opts)) : mask += "9{+}", 
                        void 0 !== opts.digits && 0 !== opts.digits) {
                            var dq = opts.digits.toString().split(",");
                            isFinite(dq[0]) && dq[1] && isFinite(dq[1]) ? mask += radixPointDef + decimalDef + "{" + opts.digits + "}" : (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && (opts.digitsOptional ? (altMask = mask + radixPointDef + decimalDef + "{0," + opts.digits + "}", 
                            opts.keepStatic = !0) : mask += radixPointDef + decimalDef + "{" + opts.digits + "}");
                        }
                        return mask += autoEscape(opts.suffix, opts), mask += "[-]", altMask && (mask = [ altMask + autoEscape(opts.suffix, opts) + "[-]", mask ]), 
                        opts.greedy = !1, parseMinMaxOptions(opts), mask;
                    }
                    function hanndleRadixDance(pos, c, radixPos, maskset, opts) {
                        return opts._radixDance && opts.numericInput && c !== opts.negationSymbol.back && pos <= radixPos && (0 < radixPos || c == opts.radixPoint) && (void 0 === maskset.validPositions[pos - 1] || maskset.validPositions[pos - 1].input !== opts.negationSymbol.back) && (pos -= 1), 
                        pos;
                    }
                    function decimalValidator(chrs, maskset, pos, strict, opts) {
                        var radixPos = maskset.buffer ? maskset.buffer.indexOf(opts.radixPoint) : -1, result = -1 !== radixPos && new RegExp("[0-9１-９]").test(chrs);
                        return opts._radixDance && result && null == maskset.validPositions[radixPos] ? {
                            insert: {
                                pos: radixPos === pos ? radixPos + 1 : radixPos,
                                c: opts.radixPoint
                            },
                            pos
                        } : result;
                    }
                    function checkForLeadingZeroes(buffer, opts) {
                        var numberMatches = new RegExp("(^" + ("" !== opts.negationSymbol.front ? Inputmask.escapeRegex(opts.negationSymbol.front) + "?" : "") + Inputmask.escapeRegex(opts.prefix) + ")(.*)(" + Inputmask.escapeRegex(opts.suffix) + ("" != opts.negationSymbol.back ? Inputmask.escapeRegex(opts.negationSymbol.back) + "?" : "") + "$)").exec(buffer.slice().reverse().join("")), number = numberMatches ? numberMatches[2] : "", leadingzeroes = !1;
                        return number && (number = number.split(opts.radixPoint.charAt(0))[0], leadingzeroes = new RegExp("^[0" + opts.groupSeparator + "]*").exec(number)), 
                        !(!leadingzeroes || !(1 < leadingzeroes[0].length || 0 < leadingzeroes[0].length && leadingzeroes[0].length < number.length)) && leadingzeroes;
                    }
                    Inputmask.extendAliases({
                        numeric: {
                            mask: genMask,
                            _mask: function _mask(opts) {
                                return "(" + opts.groupSeparator + "999){+|1}";
                            },
                            digits: "*",
                            digitsOptional: !0,
                            enforceDigitsOnBlur: !1,
                            radixPoint: ".",
                            positionCaretOnClick: "radixFocus",
                            _radixDance: !0,
                            groupSeparator: "",
                            allowMinus: !0,
                            negationSymbol: {
                                front: "-",
                                back: ""
                            },
                            prefix: "",
                            suffix: "",
                            min: null,
                            max: null,
                            step: 1,
                            unmaskAsNumber: !1,
                            roundingFN: Math.round,
                            inputmode: "numeric",
                            shortcuts: {
                                k: "000",
                                m: "000000"
                            },
                            placeholder: "0",
                            greedy: !1,
                            rightAlign: !0,
                            insertMode: !0,
                            autoUnmask: !1,
                            skipOptionalPartCharacter: "",
                            definitions: {
                                0: {
                                    validator: decimalValidator
                                },
                                1: {
                                    validator: decimalValidator,
                                    definitionSymbol: "9"
                                },
                                "+": {
                                    validator: function validator(chrs, maskset, pos, strict, opts) {
                                        return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front);
                                    }
                                },
                                "-": {
                                    validator: function validator(chrs, maskset, pos, strict, opts) {
                                        return opts.allowMinus && chrs === opts.negationSymbol.back;
                                    }
                                }
                            },
                            preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                                if (!1 !== opts.__financeInput && c === opts.radixPoint) return !1;
                                var pattern;
                                if (pattern = opts.shortcuts && opts.shortcuts[c]) {
                                    if (1 < pattern.length) for (var inserts = [], i = 0; i < pattern.length; i++) inserts.push({
                                        pos: pos + i,
                                        c: pattern[i],
                                        strict: !1
                                    });
                                    return {
                                        insert: inserts
                                    };
                                }
                                var radixPos = $.inArray(opts.radixPoint, buffer), initPos = pos;
                                if (pos = hanndleRadixDance(pos, c, radixPos, maskset, opts), "-" === c || c === opts.negationSymbol.front) {
                                    if (!0 !== opts.allowMinus) return !1;
                                    var isNegative = !1, front = findValid("+", maskset), back = findValid("-", maskset);
                                    return -1 !== front && (isNegative = [ front, back ]), !1 !== isNegative ? {
                                        remove: isNegative,
                                        caret: initPos
                                    } : {
                                        insert: [ {
                                            pos: findValidator("+", maskset),
                                            c: opts.negationSymbol.front,
                                            fromIsValid: !0
                                        }, {
                                            pos: findValidator("-", maskset),
                                            c: opts.negationSymbol.back,
                                            fromIsValid: void 0
                                        } ],
                                        caret: initPos + opts.negationSymbol.back.length
                                    };
                                }
                                if (strict) return !0;
                                if (-1 !== radixPos && !0 === opts._radixDance && !1 === isSelection && c === opts.radixPoint && void 0 !== opts.digits && (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && radixPos !== pos) return {
                                    caret: opts._radixDance && pos === radixPos - 1 ? radixPos + 1 : radixPos
                                };
                                if (!1 === opts.__financeInput) if (isSelection) {
                                    if (opts.digitsOptional) return {
                                        rewritePosition: caretPos.end
                                    };
                                    if (!opts.digitsOptional) {
                                        if (caretPos.begin > radixPos && caretPos.end <= radixPos) return c === opts.radixPoint ? {
                                            insert: {
                                                pos: radixPos + 1,
                                                c: "0",
                                                fromIsValid: !0
                                            },
                                            rewritePosition: radixPos
                                        } : {
                                            rewritePosition: radixPos + 1
                                        };
                                        if (caretPos.begin < radixPos) return {
                                            rewritePosition: caretPos.begin - 1
                                        };
                                    }
                                } else if (!opts.showMaskOnHover && !opts.showMaskOnFocus && !opts.digitsOptional && 0 < opts.digits && "" === this.inputmask.__valueGet.call(this)) return {
                                    rewritePosition: radixPos
                                };
                                return {
                                    rewritePosition: pos
                                };
                            },
                            postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
                                if (!1 === currentResult) return currentResult;
                                if (strict) return !0;
                                if (null !== opts.min || null !== opts.max) {
                                    var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                                        unmaskAsNumber: !0
                                    }));
                                    if (null !== opts.min && unmasked < opts.min && (unmasked.toString().length >= opts.min.toString().length || unmasked < 0)) return !1;
                                    if (null !== opts.max && unmasked > opts.max) return !1;
                                }
                                return currentResult;
                            },
                            onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                                if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;
                                var processValue = maskedValue.replace(opts.prefix, "");
                                return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                                "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), 
                                opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".")), 
                                processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-"), 
                                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), 
                                Number(processValue)) : processValue;
                            },
                            isComplete: function isComplete(buffer, opts) {
                                var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
                                return maskedValue = maskedValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-"), 
                                maskedValue = maskedValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), 
                                maskedValue = maskedValue.replace(opts.prefix, ""), maskedValue = maskedValue.replace(opts.suffix, ""), 
                                maskedValue = maskedValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator) + "([0-9]{3})", "g"), "$1"), 
                                "," === opts.radixPoint && (maskedValue = maskedValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".")), 
                                isFinite(maskedValue);
                            },
                            onBeforeMask: function onBeforeMask(initialValue, opts) {
                                var radixPoint = opts.radixPoint || ",";
                                isFinite(opts.digits) && (opts.digits = parseInt(opts.digits)), "number" != typeof initialValue && "number" !== opts.inputType || "" === radixPoint || (initialValue = initialValue.toString().replace(".", radixPoint));
                                var valueParts = initialValue.split(radixPoint), integerPart = valueParts[0].replace(/[^\-0-9]/g, ""), decimalPart = 1 < valueParts.length ? valueParts[1].replace(/[^0-9]/g, "") : "", forceDigits = 1 < valueParts.length;
                                initialValue = integerPart + ("" !== decimalPart ? radixPoint + decimalPart : decimalPart);
                                var digits = 0;
                                if ("" !== radixPoint && (digits = opts.digitsOptional ? opts.digits < decimalPart.length ? opts.digits : decimalPart.length : opts.digits, 
                                "" !== decimalPart || !opts.digitsOptional)) {
                                    var digitsFactor = Math.pow(10, digits || 1);
                                    initialValue = initialValue.replace(Inputmask.escapeRegex(radixPoint), "."), isFinite(initialValue) && (initialValue = (opts.roundingFN(parseFloat(initialValue) * digitsFactor) / digitsFactor).toFixed(digits)), 
                                    initialValue = initialValue.toString().replace(".", radixPoint);
                                }
                                if (0 === opts.digits && -1 !== initialValue.indexOf(radixPoint) && (initialValue = initialValue.substring(0, initialValue.indexOf(radixPoint))), 
                                null !== opts.min || null !== opts.max) {
                                    var numberValue = initialValue.toString().replace(radixPoint, ".");
                                    null !== opts.min && numberValue < opts.min ? initialValue = opts.min.toString().replace(".", radixPoint) : null !== opts.max && numberValue > opts.max && (initialValue = opts.max.toString().replace(".", radixPoint));
                                }
                                return alignDigits(initialValue.toString().split(""), digits, opts, forceDigits).join("");
                            },
                            onBeforeWrite: function onBeforeWrite(e, buffer, caretPos, opts) {
                                function stripBuffer(buffer, stripRadix) {
                                    if (!1 !== opts.__financeInput || stripRadix) {
                                        var position = $.inArray(opts.radixPoint, buffer);
                                        -1 !== position && buffer.splice(position, 1);
                                    }
                                    if ("" !== opts.groupSeparator) for (;-1 !== (position = buffer.indexOf(opts.groupSeparator)); ) buffer.splice(position, 1);
                                    return buffer;
                                }
                                var result, leadingzeroes = checkForLeadingZeroes(buffer, opts);
                                if (leadingzeroes) {
                                    var buf = buffer.slice().reverse(), caretNdx = buf.join("").indexOf(leadingzeroes[0]);
                                    buf.splice(caretNdx, leadingzeroes[0].length);
                                    var newCaretPos = buf.length - caretNdx;
                                    stripBuffer(buf), result = {
                                        refreshFromBuffer: !0,
                                        buffer: buf.reverse(),
                                        caret: caretPos < newCaretPos ? caretPos : newCaretPos
                                    };
                                }
                                if (e) switch (e.type) {
                                  case "blur":
                                  case "checkval":
                                    if (null !== opts.min) {
                                        var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                                            unmaskAsNumber: !0
                                        }));
                                        if (null !== opts.min && unmasked < opts.min) return {
                                            refreshFromBuffer: !0,
                                            buffer: alignDigits(opts.min.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                                        };
                                    }
                                    if (buffer[buffer.length - 1] === opts.negationSymbol.front) {
                                        var nmbrMtchs = new RegExp("(^" + ("" != opts.negationSymbol.front ? Inputmask.escapeRegex(opts.negationSymbol.front) + "?" : "") + Inputmask.escapeRegex(opts.prefix) + ")(.*)(" + Inputmask.escapeRegex(opts.suffix) + ("" != opts.negationSymbol.back ? Inputmask.escapeRegex(opts.negationSymbol.back) + "?" : "") + "$)").exec(stripBuffer(buffer.slice(), !0).reverse().join("")), number = nmbrMtchs ? nmbrMtchs[2] : "";
                                        0 == number && (result = {
                                            refreshFromBuffer: !0,
                                            buffer: [ 0 ]
                                        });
                                    } else "" !== opts.radixPoint && buffer[0] === opts.radixPoint && (result && result.buffer ? result.buffer.shift() : (buffer.shift(), 
                                    result = {
                                        refreshFromBuffer: !0,
                                        buffer: stripBuffer(buffer)
                                    }));
                                    if (opts.enforceDigitsOnBlur) {
                                        result = result || {};
                                        var bffr = result && result.buffer || buffer.slice().reverse();
                                        result.refreshFromBuffer = !0, result.buffer = alignDigits(bffr, opts.digits, opts, !0).reverse();
                                    }
                                }
                                return result;
                            },
                            onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
                                var bffr, $input = $(this);
                                if (e.ctrlKey) switch (e.keyCode) {
                                  case keyCode.UP:
                                    return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), 
                                    $input.trigger("setvalue"), !1;

                                  case keyCode.DOWN:
                                    return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), 
                                    $input.trigger("setvalue"), !1;
                                }
                                if (!e.shiftKey && (e.keyCode === keyCode.DELETE || e.keyCode === keyCode.BACKSPACE || e.keyCode === keyCode.BACKSPACE_SAFARI) && caretPos.begin !== buffer.length) {
                                    if (buffer[e.keyCode === keyCode.DELETE ? caretPos.begin - 1 : caretPos.end] === opts.negationSymbol.front) return bffr = buffer.slice().reverse(), 
                                    "" !== opts.negationSymbol.front && bffr.shift(), "" !== opts.negationSymbol.back && bffr.pop(), 
                                    $input.trigger("setvalue", [ bffr.join(""), caretPos.begin ]), !1;
                                    if (!0 === opts._radixDance) {
                                        var radixPos = $.inArray(opts.radixPoint, buffer);
                                        if (opts.digitsOptional) {
                                            if (0 === radixPos) return bffr = buffer.slice().reverse(), bffr.pop(), $input.trigger("setvalue", [ bffr.join(""), caretPos.begin >= bffr.length ? bffr.length : caretPos.begin ]), 
                                            !1;
                                        } else if (-1 !== radixPos && (caretPos.begin < radixPos || caretPos.end < radixPos || e.keyCode === keyCode.DELETE && caretPos.begin === radixPos)) return caretPos.begin !== caretPos.end || e.keyCode !== keyCode.BACKSPACE && e.keyCode !== keyCode.BACKSPACE_SAFARI || caretPos.begin++, 
                                        bffr = buffer.slice().reverse(), bffr.splice(bffr.length - caretPos.begin, caretPos.begin - caretPos.end + 1), 
                                        bffr = alignDigits(bffr, opts.digits, opts).join(""), $input.trigger("setvalue", [ bffr, caretPos.begin >= bffr.length ? radixPos + 1 : caretPos.begin ]), 
                                        !1;
                                    }
                                }
                            }
                        },
                        currency: {
                            prefix: "",
                            groupSeparator: ",",
                            alias: "numeric",
                            digits: 2,
                            digitsOptional: !1
                        },
                        decimal: {
                            alias: "numeric"
                        },
                        integer: {
                            alias: "numeric",
                            digits: 0
                        },
                        percentage: {
                            alias: "numeric",
                            min: 0,
                            max: 100,
                            suffix: " %",
                            digits: 0,
                            allowMinus: !1
                        },
                        indianns: {
                            alias: "numeric",
                            _mask: function _mask(opts) {
                                return "(" + opts.groupSeparator + "99){*|1}(" + opts.groupSeparator + "999){1|1}";
                            },
                            groupSeparator: ",",
                            radixPoint: ".",
                            placeholder: "0",
                            digits: 2,
                            digitsOptional: !1
                        }
                    }), module.exports = Inputmask;
                }, function(module, exports, __nested_webpack_require_118106__) {
                    "use strict";
                    var _inputmask = _interopRequireDefault(__nested_webpack_require_118106__(1));
                    function _typeof(obj) {
                        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                            return typeof obj;
                        } : function _typeof(obj) {
                            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        }, _typeof(obj);
                    }
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                    }
                    function _possibleConstructorReturn(self, call) {
                        return !call || "object" !== _typeof(call) && "function" != typeof call ? _assertThisInitialized(self) : call;
                    }
                    function _assertThisInitialized(self) {
                        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return self;
                    }
                    function _inherits(subClass, superClass) {
                        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
                        subClass.prototype = Object.create(superClass && superClass.prototype, {
                            constructor: {
                                value: subClass,
                                writable: !0,
                                configurable: !0
                            }
                        }), superClass && _setPrototypeOf(subClass, superClass);
                    }
                    function _wrapNativeSuper(Class) {
                        var _cache = "function" == typeof Map ? new Map : void 0;
                        return _wrapNativeSuper = function _wrapNativeSuper(Class) {
                            if (null === Class || !_isNativeFunction(Class)) return Class;
                            if ("function" != typeof Class) throw new TypeError("Super expression must either be null or a function");
                            if ("undefined" != typeof _cache) {
                                if (_cache.has(Class)) return _cache.get(Class);
                                _cache.set(Class, Wrapper);
                            }
                            function Wrapper() {
                                return _construct(Class, arguments, _getPrototypeOf(this).constructor);
                            }
                            return Wrapper.prototype = Object.create(Class.prototype, {
                                constructor: {
                                    value: Wrapper,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), _setPrototypeOf(Wrapper, Class);
                        }, _wrapNativeSuper(Class);
                    }
                    function isNativeReflectConstruct() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), 
                            !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    function _construct(Parent, args, Class) {
                        return _construct = isNativeReflectConstruct() ? Reflect.construct : function _construct(Parent, args, Class) {
                            var a = [ null ];
                            a.push.apply(a, args);
                            var Constructor = Function.bind.apply(Parent, a), instance = new Constructor;
                            return Class && _setPrototypeOf(instance, Class.prototype), instance;
                        }, _construct.apply(null, arguments);
                    }
                    function _isNativeFunction(fn) {
                        return -1 !== Function.toString.call(fn).indexOf("[native code]");
                    }
                    function _setPrototypeOf(o, p) {
                        return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                            return o.__proto__ = p, o;
                        }, _setPrototypeOf(o, p);
                    }
                    function _getPrototypeOf(o) {
                        return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                            return o.__proto__ || Object.getPrototypeOf(o);
                        }, _getPrototypeOf(o);
                    }
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : {
                            default: obj
                        };
                    }
                    if (document.head.createShadowRoot || document.head.attachShadow) {
                        var InputmaskElement = function(_HTMLElement) {
                            function InputmaskElement() {
                                var _this;
                                _classCallCheck(this, InputmaskElement), _this = _possibleConstructorReturn(this, _getPrototypeOf(InputmaskElement).call(this));
                                var attributeNames = _this.getAttributeNames(), shadow = _this.attachShadow({
                                    mode: "closed"
                                }), input = document.createElement("input");
                                for (var attr in input.type = "text", shadow.appendChild(input), attributeNames) Object.prototype.hasOwnProperty.call(attributeNames, attr) && input.setAttribute("data-inputmask-" + attributeNames[attr], _this.getAttribute(attributeNames[attr]));
                                return (new _inputmask.default).mask(input), input.inputmask.shadowRoot = shadow, 
                                _this;
                            }
                            return _inherits(InputmaskElement, _HTMLElement), InputmaskElement;
                        }(_wrapNativeSuper(HTMLElement));
                        customElements.define("input-mask", InputmaskElement);
                    }
                } ], installedModules = {}, __nested_webpack_require_123226__.m = modules, __nested_webpack_require_123226__.c = installedModules, 
                __nested_webpack_require_123226__.d = function(exports, name, getter) {
                    __nested_webpack_require_123226__.o(exports, name) || Object.defineProperty(exports, name, {
                        enumerable: !0,
                        get: getter
                    });
                }, __nested_webpack_require_123226__.r = function(exports) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(exports, "__esModule", {
                        value: !0
                    });
                }, __nested_webpack_require_123226__.t = function(value, mode) {
                    if (1 & mode && (value = __nested_webpack_require_123226__(value)), 8 & mode) return value;
                    if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                    var ns = Object.create(null);
                    if (__nested_webpack_require_123226__.r(ns), Object.defineProperty(ns, "default", {
                        enumerable: !0,
                        value
                    }), 2 & mode && "string" != typeof value) for (var key in value) __nested_webpack_require_123226__.d(ns, key, function(key) {
                        return value[key];
                    }.bind(null, key));
                    return ns;
                }, __nested_webpack_require_123226__.n = function(module) {
                    var getter = module && module.__esModule ? function getDefault() {
                        return module.default;
                    } : function getModuleExports() {
                        return module;
                    };
                    return __nested_webpack_require_123226__.d(getter, "a", getter), getter;
                }, __nested_webpack_require_123226__.o = function(object, property) {
                    return Object.prototype.hasOwnProperty.call(object, property);
                }, __nested_webpack_require_123226__.p = "", __nested_webpack_require_123226__(__nested_webpack_require_123226__.s = 5);
                function __nested_webpack_require_123226__(moduleId) {
                    if (installedModules[moduleId]) return installedModules[moduleId].exports;
                    var module = installedModules[moduleId] = {
                        i: moduleId,
                        l: !1,
                        exports: {}
                    };
                    return modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_123226__), 
                    module.l = !0, module.exports;
                }
                var modules, installedModules;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    function mediaAdaptive() {
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if (place === "first") {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== void 0) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if (this.type === "min") Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return -1;
                    if (a.place === "last" || b.place === "first") return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return 1;
                        if (a.place === "last" || b.place === "first") return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
    }
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    var inputmask_min = __webpack_require__(375);
    function spoller() {
        const spollersArray = document.querySelectorAll("[data-spollers]");
        if (spollersArray.length > 0) {
            const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                return !item.dataset.spollers.split(",")[0];
            }));
            if (spollersRegular.length) initSpollers(spollersRegular);
            let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
            if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                mdQueriesItem.matchMedia.addEventListener("change", (function() {
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            }));
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach((spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add("_spoller-init");
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove("_spoller-init");
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                }));
            }
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                if (spollerTitles.length) {
                    spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                    spollerTitles.forEach((spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    }));
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.closest("[data-spoller]")) {
                    const spollerTitle = el.closest("[data-spoller]");
                    const spollersBlock = spollerTitle.closest("[data-spollers]");
                    const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll("._slide").length) {
                        if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                        spollerTitle.classList.toggle("_spoller-active");
                        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                    }
                    e.preventDefault();
                }
            }
            function hideSpollersBody(spollersBlock) {
                const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                    spollerActiveTitle.classList.remove("_spoller-active");
                    _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                }
            }
            const spollersClose = document.querySelectorAll("[data-spoller-close]");
            if (spollersClose.length) document.addEventListener("click", (function(e) {
                const el = e.target;
                if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                    const spollersBlock = spollerClose.closest("[data-spollers]");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    spollerClose.classList.remove("_spoller-active");
                    _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                }));
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
    }
    function burger() {
        const burgerBtn = document.querySelector("#burger-btn");
        const burger = document.querySelector("#burger");
        if (burger) burgerBtn.addEventListener("click", (e => {
            e.stopPropagation();
            if (burger.classList.contains("_open")) burgerClose(); else {
                burgerBtn.classList.add("_active");
                burger.classList.add("_open");
                document.body.classList.add("body-hidden");
                burger.addEventListener("click", (e => e.stopPropagation()));
                document.body.addEventListener("click", burgerClose);
            }
        }));
    }
    function burgerClose() {
        const burger = document.querySelector("#burger");
        const burgerBtn = document.querySelector("#burger-btn");
        burgerBtn.classList.remove("_active");
        burger.classList.remove("_open");
        document.body.classList.remove("body-hidden");
        document.body.removeEventListener("click", burgerClose);
    }
    function ssr_window_esm_isObject(obj) {
        return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
    }
    function extend(target, src) {
        if (target === void 0) target = {};
        if (src === void 0) src = {};
        Object.keys(src).forEach((key => {
            if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
        }));
    }
    const ssrDocument = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector() {
            return null;
        },
        querySelectorAll() {
            return [];
        },
        getElementById() {
            return null;
        },
        createEvent() {
            return {
                initEvent() {}
            };
        },
        createElement() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName() {
                    return [];
                }
            };
        },
        createElementNS() {
            return {};
        },
        importNode() {
            return null;
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function ssr_window_esm_getDocument() {
        const doc = typeof document !== "undefined" ? document : {};
        extend(doc, ssrDocument);
        return doc;
    }
    const ssrWindow = {
        document: ssrDocument,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function CustomEvent() {
            return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle() {
            return {
                getPropertyValue() {
                    return "";
                }
            };
        },
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia() {
            return {};
        },
        requestAnimationFrame(callback) {
            if (typeof setTimeout === "undefined") {
                callback();
                return null;
            }
            return setTimeout(callback, 0);
        },
        cancelAnimationFrame(id) {
            if (typeof setTimeout === "undefined") return;
            clearTimeout(id);
        }
    };
    function ssr_window_esm_getWindow() {
        const win = typeof window !== "undefined" ? window : {};
        extend(win, ssrWindow);
        return win;
    }
    function utils_classesToTokens(classes) {
        if (classes === void 0) classes = "";
        return classes.trim().split(" ").filter((c => !!c.trim()));
    }
    function deleteProps(obj) {
        const object = obj;
        Object.keys(object).forEach((key => {
            try {
                object[key] = null;
            } catch (e) {}
            try {
                delete object[key];
            } catch (e) {}
        }));
    }
    function utils_nextTick(callback, delay) {
        if (delay === void 0) delay = 0;
        return setTimeout(callback, delay);
    }
    function utils_now() {
        return Date.now();
    }
    function utils_getComputedStyle(el) {
        const window = ssr_window_esm_getWindow();
        let style;
        if (window.getComputedStyle) style = window.getComputedStyle(el, null);
        if (!style && el.currentStyle) style = el.currentStyle;
        if (!style) style = el.style;
        return style;
    }
    function utils_getTranslate(el, axis) {
        if (axis === void 0) axis = "x";
        const window = ssr_window_esm_getWindow();
        let matrix;
        let curTransform;
        let transformMatrix;
        const curStyle = utils_getComputedStyle(el);
        if (window.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform;
            if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
            transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
        } else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
            matrix = transformMatrix.toString().split(",");
        }
        if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
        if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
        return curTransform || 0;
    }
    function utils_isObject(o) {
        return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
    }
    function isNode(node) {
        if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
        return node && (node.nodeType === 1 || node.nodeType === 11);
    }
    function utils_extend() {
        const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
        const noExtend = [ "__proto__", "constructor", "prototype" ];
        for (let i = 1; i < arguments.length; i += 1) {
            const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
            if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                    const nextKey = keysArray[nextIndex];
                    const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                        to[nextKey] = {};
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                    } else to[nextKey] = nextSource[nextKey];
                }
            }
        }
        return to;
    }
    function utils_setCSSProperty(el, varName, varValue) {
        el.style.setProperty(varName, varValue);
    }
    function animateCSSModeScroll(_ref) {
        let {swiper, targetPosition, side} = _ref;
        const window = ssr_window_esm_getWindow();
        const startPosition = -swiper.translate;
        let startTime = null;
        let time;
        const duration = swiper.params.speed;
        swiper.wrapperEl.style.scrollSnapType = "none";
        window.cancelAnimationFrame(swiper.cssModeFrameID);
        const dir = targetPosition > startPosition ? "next" : "prev";
        const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
        const animate = () => {
            time = (new Date).getTime();
            if (startTime === null) startTime = time;
            const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
            const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
            let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
            if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
            swiper.wrapperEl.scrollTo({
                [side]: currentPosition
            });
            if (isOutOfBound(currentPosition, targetPosition)) {
                swiper.wrapperEl.style.overflow = "hidden";
                swiper.wrapperEl.style.scrollSnapType = "";
                setTimeout((() => {
                    swiper.wrapperEl.style.overflow = "";
                    swiper.wrapperEl.scrollTo({
                        [side]: currentPosition
                    });
                }));
                window.cancelAnimationFrame(swiper.cssModeFrameID);
                return;
            }
            swiper.cssModeFrameID = window.requestAnimationFrame(animate);
        };
        animate();
    }
    function utils_getSlideTransformEl(slideEl) {
        return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
    }
    function utils_elementChildren(element, selector) {
        if (selector === void 0) selector = "";
        const children = [ ...element.children ];
        if (element instanceof HTMLSlotElement) children.push(...element.assignedElements());
        if (!selector) return children;
        return children.filter((el => el.matches(selector)));
    }
    function elementIsChildOf(el, parent) {
        const isChild = parent.contains(el);
        if (!isChild && parent instanceof HTMLSlotElement) {
            const children = [ ...parent.assignedElements() ];
            return children.includes(el);
        }
        return isChild;
    }
    function showWarning(text) {
        try {
            console.warn(text);
            return;
        } catch (err) {}
    }
    function utils_createElement(tag, classes) {
        if (classes === void 0) classes = [];
        const el = document.createElement(tag);
        el.classList.add(...Array.isArray(classes) ? classes : utils_classesToTokens(classes));
        return el;
    }
    function utils_elementOffset(el) {
        const window = getWindow();
        const document = getDocument();
        const box = el.getBoundingClientRect();
        const body = document.body;
        const clientTop = el.clientTop || body.clientTop || 0;
        const clientLeft = el.clientLeft || body.clientLeft || 0;
        const scrollTop = el === window ? window.scrollY : el.scrollTop;
        const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
            top: box.top + scrollTop - clientTop,
            left: box.left + scrollLeft - clientLeft
        };
    }
    function elementPrevAll(el, selector) {
        const prevEls = [];
        while (el.previousElementSibling) {
            const prev = el.previousElementSibling;
            if (selector) {
                if (prev.matches(selector)) prevEls.push(prev);
            } else prevEls.push(prev);
            el = prev;
        }
        return prevEls;
    }
    function elementNextAll(el, selector) {
        const nextEls = [];
        while (el.nextElementSibling) {
            const next = el.nextElementSibling;
            if (selector) {
                if (next.matches(selector)) nextEls.push(next);
            } else nextEls.push(next);
            el = next;
        }
        return nextEls;
    }
    function elementStyle(el, prop) {
        const window = ssr_window_esm_getWindow();
        return window.getComputedStyle(el, null).getPropertyValue(prop);
    }
    function utils_elementIndex(el) {
        let child = el;
        let i;
        if (child) {
            i = 0;
            while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
            return i;
        }
        return;
    }
    function utils_elementParents(el, selector) {
        const parents = [];
        let parent = el.parentElement;
        while (parent) {
            if (selector) {
                if (parent.matches(selector)) parents.push(parent);
            } else parents.push(parent);
            parent = parent.parentElement;
        }
        return parents;
    }
    function utils_elementTransitionEnd(el, callback) {
        function fireCallBack(e) {
            if (e.target !== el) return;
            callback.call(el, e);
            el.removeEventListener("transitionend", fireCallBack);
        }
        if (callback) el.addEventListener("transitionend", fireCallBack);
    }
    function elementOuterSize(el, size, includeMargins) {
        const window = ssr_window_esm_getWindow();
        if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
        return el.offsetWidth;
    }
    function utils_makeElementsArray(el) {
        return (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
    }
    function utils_getRotateFix(swiper) {
        return v => {
            if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) return v + .001;
            return v;
        };
    }
    let support;
    function calcSupport() {
        const window = ssr_window_esm_getWindow();
        const document = ssr_window_esm_getDocument();
        return {
            smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
            touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
        };
    }
    function getSupport() {
        if (!support) support = calcSupport();
        return support;
    }
    let deviceCached;
    function calcDevice(_temp) {
        let {userAgent} = _temp === void 0 ? {} : _temp;
        const support = getSupport();
        const window = ssr_window_esm_getWindow();
        const platform = window.navigator.platform;
        const ua = userAgent || window.navigator.userAgent;
        const device = {
            ios: false,
            android: false
        };
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
        let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        const windows = platform === "Win32";
        let macos = platform === "MacIntel";
        const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
        if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
            ipad = ua.match(/(Version)\/([\d.]+)/);
            if (!ipad) ipad = [ 0, 1, "13_0_0" ];
            macos = false;
        }
        if (android && !windows) {
            device.os = "android";
            device.android = true;
        }
        if (ipad || iphone || ipod) {
            device.os = "ios";
            device.ios = true;
        }
        return device;
    }
    function getDevice(overrides) {
        if (overrides === void 0) overrides = {};
        if (!deviceCached) deviceCached = calcDevice(overrides);
        return deviceCached;
    }
    let browser;
    function calcBrowser() {
        const window = ssr_window_esm_getWindow();
        const device = getDevice();
        let needPerspectiveFix = false;
        function isSafari() {
            const ua = window.navigator.userAgent.toLowerCase();
            return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
        }
        if (isSafari()) {
            const ua = String(window.navigator.userAgent);
            if (ua.includes("Version/")) {
                const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                needPerspectiveFix = major < 16 || major === 16 && minor < 2;
            }
        }
        const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
        const isSafariBrowser = isSafari();
        const need3dFix = isSafariBrowser || isWebView && device.ios;
        return {
            isSafari: needPerspectiveFix || isSafariBrowser,
            needPerspectiveFix,
            need3dFix,
            isWebView
        };
    }
    function getBrowser() {
        if (!browser) browser = calcBrowser();
        return browser;
    }
    function Resize(_ref) {
        let {swiper, on, emit} = _ref;
        const window = ssr_window_esm_getWindow();
        let observer = null;
        let animationFrame = null;
        const resizeHandler = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            emit("beforeResize");
            emit("resize");
        };
        const createObserver = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            observer = new ResizeObserver((entries => {
                animationFrame = window.requestAnimationFrame((() => {
                    const {width, height} = swiper;
                    let newWidth = width;
                    let newHeight = height;
                    entries.forEach((_ref2 => {
                        let {contentBoxSize, contentRect, target} = _ref2;
                        if (target && target !== swiper.el) return;
                        newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                        newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                    }));
                    if (newWidth !== width || newHeight !== height) resizeHandler();
                }));
            }));
            observer.observe(swiper.el);
        };
        const removeObserver = () => {
            if (animationFrame) window.cancelAnimationFrame(animationFrame);
            if (observer && observer.unobserve && swiper.el) {
                observer.unobserve(swiper.el);
                observer = null;
            }
        };
        const orientationChangeHandler = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            emit("orientationchange");
        };
        on("init", (() => {
            if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                createObserver();
                return;
            }
            window.addEventListener("resize", resizeHandler);
            window.addEventListener("orientationchange", orientationChangeHandler);
        }));
        on("destroy", (() => {
            removeObserver();
            window.removeEventListener("resize", resizeHandler);
            window.removeEventListener("orientationchange", orientationChangeHandler);
        }));
    }
    function Observer(_ref) {
        let {swiper, extendParams, on, emit} = _ref;
        const observers = [];
        const window = ssr_window_esm_getWindow();
        const attach = function(target, options) {
            if (options === void 0) options = {};
            const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            const observer = new ObserverFunc((mutations => {
                if (swiper.__preventObserver__) return;
                if (mutations.length === 1) {
                    emit("observerUpdate", mutations[0]);
                    return;
                }
                const observerUpdate = function observerUpdate() {
                    emit("observerUpdate", mutations[0]);
                };
                if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
            }));
            observer.observe(target, {
                attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
                characterData: typeof options.characterData === "undefined" ? true : options.characterData
            });
            observers.push(observer);
        };
        const init = () => {
            if (!swiper.params.observer) return;
            if (swiper.params.observeParents) {
                const containerParents = utils_elementParents(swiper.hostEl);
                for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
            }
            attach(swiper.hostEl, {
                childList: swiper.params.observeSlideChildren
            });
            attach(swiper.wrapperEl, {
                attributes: false
            });
        };
        const destroy = () => {
            observers.forEach((observer => {
                observer.disconnect();
            }));
            observers.splice(0, observers.length);
        };
        extendParams({
            observer: false,
            observeParents: false,
            observeSlideChildren: false
        });
        on("init", init);
        on("destroy", destroy);
    }
    var eventsEmitter = {
        on(events, handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== "function") return self;
            const method = priority ? "unshift" : "push";
            events.split(" ").forEach((event => {
                if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                self.eventsListeners[event][method](handler);
            }));
            return self;
        },
        once(events, handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== "function") return self;
            function onceHandler() {
                self.off(events, onceHandler);
                if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                handler.apply(self, args);
            }
            onceHandler.__emitterProxy = handler;
            return self.on(events, onceHandler, priority);
        },
        onAny(handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== "function") return self;
            const method = priority ? "unshift" : "push";
            if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
            return self;
        },
        offAny(handler) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsAnyListeners) return self;
            const index = self.eventsAnyListeners.indexOf(handler);
            if (index >= 0) self.eventsAnyListeners.splice(index, 1);
            return self;
        },
        off(events, handler) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsListeners) return self;
            events.split(" ").forEach((event => {
                if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                    if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                }));
            }));
            return self;
        },
        emit() {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsListeners) return self;
            let events;
            let data;
            let context;
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
            if (typeof args[0] === "string" || Array.isArray(args[0])) {
                events = args[0];
                data = args.slice(1, args.length);
                context = self;
            } else {
                events = args[0].events;
                data = args[0].data;
                context = args[0].context || self;
            }
            data.unshift(context);
            const eventsArray = Array.isArray(events) ? events : events.split(" ");
            eventsArray.forEach((event => {
                if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                    eventHandler.apply(context, [ event, ...data ]);
                }));
                if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                    eventHandler.apply(context, data);
                }));
            }));
            return self;
        }
    };
    function updateSize() {
        const swiper = this;
        let width;
        let height;
        const el = swiper.el;
        if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
        if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
        if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
        width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
        height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
        if (Number.isNaN(width)) width = 0;
        if (Number.isNaN(height)) height = 0;
        Object.assign(swiper, {
            width,
            height,
            size: swiper.isHorizontal() ? width : height
        });
    }
    function updateSlides() {
        const swiper = this;
        function getDirectionPropertyValue(node, label) {
            return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
        }
        const params = swiper.params;
        const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
        const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
        const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
        let snapGrid = [];
        const slidesGrid = [];
        const slidesSizesGrid = [];
        let offsetBefore = params.slidesOffsetBefore;
        if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
        let offsetAfter = params.slidesOffsetAfter;
        if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
        const previousSnapGridLength = swiper.snapGrid.length;
        const previousSlidesGridLength = swiper.slidesGrid.length;
        let spaceBetween = params.spaceBetween;
        let slidePosition = -offsetBefore;
        let prevSlideSize = 0;
        let index = 0;
        if (typeof swiperSize === "undefined") return;
        if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
        swiper.virtualSize = -spaceBetween;
        slides.forEach((slideEl => {
            if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
            slideEl.style.marginBottom = "";
            slideEl.style.marginTop = "";
        }));
        if (params.centeredSlides && params.cssMode) {
            utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
            utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
        }
        const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
        if (gridEnabled) swiper.grid.initSlides(slides); else if (swiper.grid) swiper.grid.unsetSlides();
        let slideSize;
        const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
        for (let i = 0; i < slidesLength; i += 1) {
            slideSize = 0;
            let slide;
            if (slides[i]) slide = slides[i];
            if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
            if (slides[i] && elementStyle(slide, "display") === "none") continue;
            if (params.slidesPerView === "auto") {
                if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
                const slideStyles = getComputedStyle(slide);
                const currentTransform = slide.style.transform;
                const currentWebKitTransform = slide.style.webkitTransform;
                if (currentTransform) slide.style.transform = "none";
                if (currentWebKitTransform) slide.style.webkitTransform = "none";
                if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                    const width = getDirectionPropertyValue(slideStyles, "width");
                    const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                    const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                    const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                    const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                    const boxSizing = slideStyles.getPropertyValue("box-sizing");
                    if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                        const {clientWidth, offsetWidth} = slide;
                        slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                    }
                }
                if (currentTransform) slide.style.transform = currentTransform;
                if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                if (params.roundLengths) slideSize = Math.floor(slideSize);
            } else {
                slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                if (params.roundLengths) slideSize = Math.floor(slideSize);
                if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
            }
            if (slides[i]) slides[i].swiperSlideSize = slideSize;
            slidesSizesGrid.push(slideSize);
            if (params.centeredSlides) {
                slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
            } else {
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
                slidePosition = slidePosition + slideSize + spaceBetween;
            }
            swiper.virtualSize += slideSize + spaceBetween;
            prevSlideSize = slideSize;
            index += 1;
        }
        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
        if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
        if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
        if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
        if (!params.centeredSlides) {
            const newSlidesGrid = [];
            for (let i = 0; i < snapGrid.length; i += 1) {
                let slidesGridItem = snapGrid[i];
                if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
            }
            snapGrid = newSlidesGrid;
            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
        }
        if (isVirtual && params.loop) {
            const size = slidesSizesGrid[0] + spaceBetween;
            if (params.slidesPerGroup > 1) {
                const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                const groupSize = size * params.slidesPerGroup;
                for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
            }
            for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                swiper.virtualSize += size;
            }
        }
        if (snapGrid.length === 0) snapGrid = [ 0 ];
        if (spaceBetween !== 0) {
            const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
            slides.filter(((_, slideIndex) => {
                if (!params.cssMode || params.loop) return true;
                if (slideIndex === slides.length - 1) return false;
                return true;
            })).forEach((slideEl => {
                slideEl.style[key] = `${spaceBetween}px`;
            }));
        }
        if (params.centeredSlides && params.centeredSlidesBounds) {
            let allSlidesSize = 0;
            slidesSizesGrid.forEach((slideSizeValue => {
                allSlidesSize += slideSizeValue + (spaceBetween || 0);
            }));
            allSlidesSize -= spaceBetween;
            const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
            snapGrid = snapGrid.map((snap => {
                if (snap <= 0) return -offsetBefore;
                if (snap > maxSnap) return maxSnap + offsetAfter;
                return snap;
            }));
        }
        if (params.centerInsufficientSlides) {
            let allSlidesSize = 0;
            slidesSizesGrid.forEach((slideSizeValue => {
                allSlidesSize += slideSizeValue + (spaceBetween || 0);
            }));
            allSlidesSize -= spaceBetween;
            const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
            if (allSlidesSize + offsetSize < swiperSize) {
                const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
                snapGrid.forEach(((snap, snapIndex) => {
                    snapGrid[snapIndex] = snap - allSlidesOffset;
                }));
                slidesGrid.forEach(((snap, snapIndex) => {
                    slidesGrid[snapIndex] = snap + allSlidesOffset;
                }));
            }
        }
        Object.assign(swiper, {
            slides,
            snapGrid,
            slidesGrid,
            slidesSizesGrid
        });
        if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
            utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
            utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
            const addToSnapGrid = -swiper.snapGrid[0];
            const addToSlidesGrid = -swiper.slidesGrid[0];
            swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
            swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
        }
        if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
        if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow) swiper.checkOverflow();
            swiper.emit("snapGridLengthChange");
        }
        if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
        if (params.watchSlidesProgress) swiper.updateSlidesOffset();
        swiper.emit("slidesUpdated");
        if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
            const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
            const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
            if (slidesLength <= params.maxBackfaceHiddenSlides) {
                if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
            } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
        }
    }
    function updateAutoHeight(speed) {
        const swiper = this;
        const activeSlides = [];
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let newHeight = 0;
        let i;
        if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
        const getSlideByIndex = index => {
            if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
            return swiper.slides[index];
        };
        if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
            activeSlides.push(slide);
        })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
        } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
        for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
            const height = activeSlides[i].offsetHeight;
            newHeight = height > newHeight ? height : newHeight;
        }
        if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
    }
    function updateSlidesOffset() {
        const swiper = this;
        const slides = swiper.slides;
        const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
        for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
    }
    const toggleSlideClasses$1 = (slideEl, condition, className) => {
        if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className); else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
    };
    function updateSlidesProgress(translate) {
        if (translate === void 0) translate = this && this.translate || 0;
        const swiper = this;
        const params = swiper.params;
        const {slides, rtlTranslate: rtl, snapGrid} = swiper;
        if (slides.length === 0) return;
        if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
        let offsetCenter = -translate;
        if (rtl) offsetCenter = translate;
        swiper.visibleSlidesIndexes = [];
        swiper.visibleSlides = [];
        let spaceBetween = params.spaceBetween;
        if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
        for (let i = 0; i < slides.length; i += 1) {
            const slide = slides[i];
            let slideOffset = slide.swiperSlideOffset;
            if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
            const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
            const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
            const slideBefore = -(offsetCenter - slideOffset);
            const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
            const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
            const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
            if (isVisible) {
                swiper.visibleSlides.push(slide);
                swiper.visibleSlidesIndexes.push(i);
            }
            toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
            toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
            slide.progress = rtl ? -slideProgress : slideProgress;
            slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
        }
    }
    function updateProgress(translate) {
        const swiper = this;
        if (typeof translate === "undefined") {
            const multiplier = swiper.rtlTranslate ? -1 : 1;
            translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
        }
        const params = swiper.params;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        let {progress, isBeginning, isEnd, progressLoop} = swiper;
        const wasBeginning = isBeginning;
        const wasEnd = isEnd;
        if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
        } else {
            progress = (translate - swiper.minTranslate()) / translatesDiff;
            const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
            const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
            isBeginning = isBeginningRounded || progress <= 0;
            isEnd = isEndRounded || progress >= 1;
            if (isBeginningRounded) progress = 0;
            if (isEndRounded) progress = 1;
        }
        if (params.loop) {
            const firstSlideIndex = swiper.getSlideIndexByData(0);
            const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
            const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
            const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
            const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
            const translateAbs = Math.abs(translate);
            if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
            if (progressLoop > 1) progressLoop -= 1;
        }
        Object.assign(swiper, {
            progress,
            progressLoop,
            isBeginning,
            isEnd
        });
        if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
        if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
        if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
        if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
        swiper.emit("progress", progress);
    }
    const toggleSlideClasses = (slideEl, condition, className) => {
        if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className); else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
    };
    function updateSlidesClasses() {
        const swiper = this;
        const {slides, params, slidesEl, activeIndex} = swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
        const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
        let activeSlide;
        let prevSlide;
        let nextSlide;
        if (isVirtual) if (params.loop) {
            let slideIndex = activeIndex - swiper.virtual.slidesBefore;
            if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
            if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
            activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
        } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else if (gridEnabled) {
            activeSlide = slides.filter((slideEl => slideEl.column === activeIndex))[0];
            nextSlide = slides.filter((slideEl => slideEl.column === activeIndex + 1))[0];
            prevSlide = slides.filter((slideEl => slideEl.column === activeIndex - 1))[0];
        } else activeSlide = slides[activeIndex];
        if (activeSlide) if (!gridEnabled) {
            nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            if (params.loop && !nextSlide) nextSlide = slides[0];
            prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
        }
        slides.forEach((slideEl => {
            toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
            toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
            toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
        }));
        swiper.emitSlidesClasses();
    }
    const processLazyPreloader = (swiper, imageEl) => {
        if (!swiper || swiper.destroyed || !swiper.params) return;
        const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
        const slideEl = imageEl.closest(slideSelector());
        if (slideEl) {
            let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`); else requestAnimationFrame((() => {
                if (slideEl.shadowRoot) {
                    lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                    if (lazyEl) lazyEl.remove();
                }
            }));
            if (lazyEl) lazyEl.remove();
        }
    };
    const unlazy = (swiper, index) => {
        if (!swiper.slides[index]) return;
        const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
        if (imageEl) imageEl.removeAttribute("loading");
    };
    const preload = swiper => {
        if (!swiper || swiper.destroyed || !swiper.params) return;
        let amount = swiper.params.lazyPreloadPrevNext;
        const len = swiper.slides.length;
        if (!len || !amount || amount < 0) return;
        amount = Math.min(amount, len);
        const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
        const activeIndex = swiper.activeIndex;
        if (swiper.params.grid && swiper.params.grid.rows > 1) {
            const activeColumn = activeIndex;
            const preloadColumns = [ activeColumn - amount ];
            preloadColumns.push(...Array.from({
                length: amount
            }).map(((_, i) => activeColumn + slidesPerView + i)));
            swiper.slides.forEach(((slideEl, i) => {
                if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
            }));
            return;
        }
        const slideIndexLastInView = activeIndex + slidesPerView - 1;
        if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
            const realIndex = (i % len + len) % len;
            if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
        } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
    };
    function getActiveIndexByTranslate(swiper) {
        const {slidesGrid, params} = swiper;
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        let activeIndex;
        for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
        } else if (translate >= slidesGrid[i]) activeIndex = i;
        if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
        return activeIndex;
    }
    function updateActiveIndex(newActiveIndex) {
        const swiper = this;
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
        let activeIndex = newActiveIndex;
        let snapIndex;
        const getVirtualRealIndex = aIndex => {
            let realIndex = aIndex - swiper.virtual.slidesBefore;
            if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
            if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
            return realIndex;
        };
        if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
        if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
            const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
            snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
        }
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
        if (activeIndex === previousIndex && !swiper.params.loop) {
            if (snapIndex !== previousSnapIndex) {
                swiper.snapIndex = snapIndex;
                swiper.emit("snapIndexChange");
            }
            return;
        }
        if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
            swiper.realIndex = getVirtualRealIndex(activeIndex);
            return;
        }
        const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
        let realIndex;
        if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (gridEnabled) {
            const firstSlideInColumn = swiper.slides.filter((slideEl => slideEl.column === activeIndex))[0];
            let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
            if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
            realIndex = Math.floor(activeSlideIndex / params.grid.rows);
        } else if (swiper.slides[activeIndex]) {
            const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
            if (slideIndex) realIndex = parseInt(slideIndex, 10); else realIndex = activeIndex;
        } else realIndex = activeIndex;
        Object.assign(swiper, {
            previousSnapIndex,
            snapIndex,
            previousRealIndex,
            realIndex,
            previousIndex,
            activeIndex
        });
        if (swiper.initialized) preload(swiper);
        swiper.emit("activeIndexChange");
        swiper.emit("snapIndexChange");
        if (swiper.initialized || swiper.params.runCallbacksOnInit) {
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            swiper.emit("slideChange");
        }
    }
    function updateClickedSlide(el, path) {
        const swiper = this;
        const params = swiper.params;
        let slide = el.closest(`.${params.slideClass}, swiper-slide`);
        if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [ ...path.slice(path.indexOf(el) + 1, path.length) ].forEach((pathEl => {
            if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
        }));
        let slideFound = false;
        let slideIndex;
        if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
        }
        if (slide && slideFound) {
            swiper.clickedSlide = slide;
            if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
        } else {
            swiper.clickedSlide = void 0;
            swiper.clickedIndex = void 0;
            return;
        }
        if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
    }
    var update = {
        updateSize,
        updateSlides,
        updateAutoHeight,
        updateSlidesOffset,
        updateSlidesProgress,
        updateProgress,
        updateSlidesClasses,
        updateActiveIndex,
        updateClickedSlide
    };
    function getSwiperTranslate(axis) {
        if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
        const swiper = this;
        const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
        if (params.virtualTranslate) return rtl ? -translate : translate;
        if (params.cssMode) return translate;
        let currentTranslate = utils_getTranslate(wrapperEl, axis);
        currentTranslate += swiper.cssOverflowAdjustment();
        if (rtl) currentTranslate = -currentTranslate;
        return currentTranslate || 0;
    }
    function setTranslate(translate, byController) {
        const swiper = this;
        const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
        let x = 0;
        let y = 0;
        const z = 0;
        if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
        if (params.roundLengths) {
            x = Math.floor(x);
            y = Math.floor(y);
        }
        swiper.previousTranslate = swiper.translate;
        swiper.translate = swiper.isHorizontal() ? x : y;
        if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
            if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
            wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        }
        let newProgress;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
        if (newProgress !== progress) swiper.updateProgress(translate);
        swiper.emit("setTranslate", swiper.translate, byController);
    }
    function minTranslate() {
        return -this.snapGrid[0];
    }
    function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
    }
    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
        if (translate === void 0) translate = 0;
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        if (translateBounds === void 0) translateBounds = true;
        const swiper = this;
        const {params, wrapperEl} = swiper;
        if (swiper.animating && params.preventInteractionOnTransition) return false;
        const minTranslate = swiper.minTranslate();
        const maxTranslate = swiper.maxTranslate();
        let newTranslate;
        if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
        swiper.updateProgress(newTranslate);
        if (params.cssMode) {
            const isH = swiper.isHorizontal();
            if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                if (!swiper.support.smoothScroll) {
                    animateCSSModeScroll({
                        swiper,
                        targetPosition: -newTranslate,
                        side: isH ? "left" : "top"
                    });
                    return true;
                }
                wrapperEl.scrollTo({
                    [isH ? "left" : "top"]: -newTranslate,
                    behavior: "smooth"
                });
            }
            return true;
        }
        if (speed === 0) {
            swiper.setTransition(0);
            swiper.setTranslate(newTranslate);
            if (runCallbacks) {
                swiper.emit("beforeTransitionStart", speed, internal);
                swiper.emit("transitionEnd");
            }
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(newTranslate);
            if (runCallbacks) {
                swiper.emit("beforeTransitionStart", speed, internal);
                swiper.emit("transitionStart");
            }
            if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.onTranslateToWrapperTransitionEnd = null;
                    delete swiper.onTranslateToWrapperTransitionEnd;
                    swiper.animating = false;
                    if (runCallbacks) swiper.emit("transitionEnd");
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            }
        }
        return true;
    }
    var translate = {
        getTranslate: getSwiperTranslate,
        setTranslate,
        minTranslate,
        maxTranslate,
        translateTo
    };
    function setTransition(duration, byController) {
        const swiper = this;
        if (!swiper.params.cssMode) {
            swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
            swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
        }
        swiper.emit("setTransition", duration, byController);
    }
    function transitionEmit(_ref) {
        let {swiper, runCallbacks, direction, step} = _ref;
        const {activeIndex, previousIndex} = swiper;
        let dir = direction;
        if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
        swiper.emit(`transition${step}`);
        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === "reset") {
                swiper.emit(`slideResetTransition${step}`);
                return;
            }
            swiper.emit(`slideChangeTransition${step}`);
            if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
        }
    }
    function transitionStart(runCallbacks, direction) {
        if (runCallbacks === void 0) runCallbacks = true;
        const swiper = this;
        const {params} = swiper;
        if (params.cssMode) return;
        if (params.autoHeight) swiper.updateAutoHeight();
        transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: "Start"
        });
    }
    function transitionEnd(runCallbacks, direction) {
        if (runCallbacks === void 0) runCallbacks = true;
        const swiper = this;
        const {params} = swiper;
        swiper.animating = false;
        if (params.cssMode) return;
        swiper.setTransition(0);
        transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: "End"
        });
    }
    var transition = {
        setTransition,
        transitionStart,
        transitionEnd
    };
    function slideTo(index, speed, runCallbacks, internal, initial) {
        if (index === void 0) index = 0;
        if (runCallbacks === void 0) runCallbacks = true;
        if (typeof index === "string") index = parseInt(index, 10);
        const swiper = this;
        let slideIndex = index;
        if (slideIndex < 0) slideIndex = 0;
        const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
        if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) return false;
        if (typeof speed === "undefined") speed = swiper.params.speed;
        const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
        let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
        const translate = -snapGrid[snapIndex];
        if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
            const normalizedTranslate = -Math.floor(translate * 100);
            const normalizedGrid = Math.floor(slidesGrid[i] * 100);
            const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
            if (typeof slidesGrid[i + 1] !== "undefined") {
                if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
            } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
        }
        if (swiper.initialized && slideIndex !== activeIndex) {
            if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
            if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
        }
        if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
        swiper.updateProgress(translate);
        let direction;
        if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        const isInitialVirtual = isVirtual && initial;
        if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
            swiper.updateActiveIndex(slideIndex);
            if (params.autoHeight) swiper.updateAutoHeight();
            swiper.updateSlidesClasses();
            if (params.effect !== "slide") swiper.setTranslate(translate);
            if (direction !== "reset") {
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
            }
            return false;
        }
        if (params.cssMode) {
            const isH = swiper.isHorizontal();
            const t = rtl ? translate : -translate;
            if (speed === 0) {
                if (isVirtual) {
                    swiper.wrapperEl.style.scrollSnapType = "none";
                    swiper._immediateVirtual = true;
                }
                if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                    swiper._cssModeVirtualInitialSet = true;
                    requestAnimationFrame((() => {
                        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    }));
                } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                if (isVirtual) requestAnimationFrame((() => {
                    swiper.wrapperEl.style.scrollSnapType = "";
                    swiper._immediateVirtual = false;
                }));
            } else {
                if (!swiper.support.smoothScroll) {
                    animateCSSModeScroll({
                        swiper,
                        targetPosition: t,
                        side: isH ? "left" : "top"
                    });
                    return true;
                }
                wrapperEl.scrollTo({
                    [isH ? "left" : "top"]: t,
                    behavior: "smooth"
                });
            }
            return true;
        }
        swiper.setTransition(speed);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.onSlideToWrapperTransitionEnd = null;
                delete swiper.onSlideToWrapperTransitionEnd;
                swiper.transitionEnd(runCallbacks, direction);
            };
            swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        }
        return true;
    }
    function slideToLoop(index, speed, runCallbacks, internal) {
        if (index === void 0) index = 0;
        if (runCallbacks === void 0) runCallbacks = true;
        if (typeof index === "string") {
            const indexAsNumber = parseInt(index, 10);
            index = indexAsNumber;
        }
        const swiper = this;
        if (swiper.destroyed) return;
        if (typeof speed === "undefined") speed = swiper.params.speed;
        const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
        let newIndex = index;
        if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else {
            let targetSlideIndex;
            if (gridEnabled) {
                const slideIndex = newIndex * swiper.params.grid.rows;
                targetSlideIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
            } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
            const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
            const {centeredSlides} = swiper.params;
            let slidesPerView = swiper.params.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
            }
            let needLoopFix = cols - targetSlideIndex < slidesPerView;
            if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
            if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) needLoopFix = false;
            if (needLoopFix) {
                const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                swiper.loopFix({
                    direction,
                    slideTo: true,
                    activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                    slideRealIndex: direction === "next" ? swiper.realIndex : void 0
                });
            }
            if (gridEnabled) {
                const slideIndex = newIndex * swiper.params.grid.rows;
                newIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
            } else newIndex = swiper.getSlideIndexByData(newIndex);
        }
        requestAnimationFrame((() => {
            swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }));
        return swiper;
    }
    function slideNext(speed, runCallbacks, internal) {
        if (runCallbacks === void 0) runCallbacks = true;
        const swiper = this;
        const {enabled, params, animating} = swiper;
        if (!enabled || swiper.destroyed) return swiper;
        if (typeof speed === "undefined") speed = swiper.params.speed;
        let perGroup = params.slidesPerGroup;
        if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
        const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        if (params.loop) {
            if (animating && !isVirtual && params.loopPreventsSliding) return false;
            swiper.loopFix({
                direction: "next"
            });
            swiper._clientLeft = swiper.wrapperEl.clientLeft;
            if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                requestAnimationFrame((() => {
                    swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                }));
                return true;
            }
        }
        if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
        return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }
    function slidePrev(speed, runCallbacks, internal) {
        if (runCallbacks === void 0) runCallbacks = true;
        const swiper = this;
        const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
        if (!enabled || swiper.destroyed) return swiper;
        if (typeof speed === "undefined") speed = swiper.params.speed;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        if (params.loop) {
            if (animating && !isVirtual && params.loopPreventsSliding) return false;
            swiper.loopFix({
                direction: "prev"
            });
            swiper._clientLeft = swiper.wrapperEl.clientLeft;
        }
        const translate = rtlTranslate ? swiper.translate : -swiper.translate;
        function normalize(val) {
            if (val < 0) return -Math.floor(Math.abs(val));
            return Math.floor(val);
        }
        const normalizedTranslate = normalize(translate);
        const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
        let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
        if (typeof prevSnap === "undefined" && params.cssMode) {
            let prevSnapIndex;
            snapGrid.forEach(((snap, snapIndex) => {
                if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
            }));
            if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
        }
        let prevIndex = 0;
        if (typeof prevSnap !== "undefined") {
            prevIndex = slidesGrid.indexOf(prevSnap);
            if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                prevIndex = Math.max(prevIndex, 0);
            }
        }
        if (params.rewind && swiper.isBeginning) {
            const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
            return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
        } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
            requestAnimationFrame((() => {
                swiper.slideTo(prevIndex, speed, runCallbacks, internal);
            }));
            return true;
        }
        return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }
    function slideReset(speed, runCallbacks, internal) {
        if (runCallbacks === void 0) runCallbacks = true;
        const swiper = this;
        if (swiper.destroyed) return;
        if (typeof speed === "undefined") speed = swiper.params.speed;
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }
    function slideToClosest(speed, runCallbacks, internal, threshold) {
        if (runCallbacks === void 0) runCallbacks = true;
        if (threshold === void 0) threshold = .5;
        const swiper = this;
        if (swiper.destroyed) return;
        if (typeof speed === "undefined") speed = swiper.params.speed;
        let index = swiper.activeIndex;
        const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
        const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        if (translate >= swiper.snapGrid[snapIndex]) {
            const currentSnap = swiper.snapGrid[snapIndex];
            const nextSnap = swiper.snapGrid[snapIndex + 1];
            if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
        } else {
            const prevSnap = swiper.snapGrid[snapIndex - 1];
            const currentSnap = swiper.snapGrid[snapIndex];
            if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
        }
        index = Math.max(index, 0);
        index = Math.min(index, swiper.slidesGrid.length - 1);
        return swiper.slideTo(index, speed, runCallbacks, internal);
    }
    function slideToClickedSlide() {
        const swiper = this;
        if (swiper.destroyed) return;
        const {params, slidesEl} = swiper;
        const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
        let slideToIndex = swiper.clickedIndex;
        let realIndex;
        const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
        if (params.loop) {
            if (swiper.animating) return;
            realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
            if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix();
                slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                utils_nextTick((() => {
                    swiper.slideTo(slideToIndex);
                }));
            } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                swiper.loopFix();
                slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                utils_nextTick((() => {
                    swiper.slideTo(slideToIndex);
                }));
            } else swiper.slideTo(slideToIndex);
        } else swiper.slideTo(slideToIndex);
    }
    var slide = {
        slideTo,
        slideToLoop,
        slideNext,
        slidePrev,
        slideReset,
        slideToClosest,
        slideToClickedSlide
    };
    function loopCreate(slideRealIndex) {
        const swiper = this;
        const {params, slidesEl} = swiper;
        if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
        const initSlides = () => {
            const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            slides.forEach(((el, index) => {
                el.setAttribute("data-swiper-slide-index", index);
            }));
        };
        const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
        const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
        const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
        const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
        const addBlankSlides = amountOfSlides => {
            for (let i = 0; i < amountOfSlides; i += 1) {
                const slideEl = swiper.isElement ? utils_createElement("swiper-slide", [ params.slideBlankClass ]) : utils_createElement("div", [ params.slideClass, params.slideBlankClass ]);
                swiper.slidesEl.append(slideEl);
            }
        };
        if (shouldFillGroup) {
            if (params.loopAddBlankSlides) {
                const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                addBlankSlides(slidesToAdd);
                swiper.recalcSlides();
                swiper.updateSlides();
            } else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
            initSlides();
        } else if (shouldFillGrid) {
            if (params.loopAddBlankSlides) {
                const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                addBlankSlides(slidesToAdd);
                swiper.recalcSlides();
                swiper.updateSlides();
            } else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
            initSlides();
        } else initSlides();
        swiper.loopFix({
            slideRealIndex,
            direction: params.centeredSlides ? void 0 : "next"
        });
    }
    function loopFix(_temp) {
        let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
        const swiper = this;
        if (!swiper.params.loop) return;
        swiper.emit("beforeLoopFix");
        const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
        const {centeredSlides} = params;
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;
        if (swiper.virtual && params.virtual.enabled) {
            if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
            return;
        }
        let slidesPerView = params.slidesPerView;
        if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
            slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
            if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
        }
        const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
        let loopedSlides = slidesPerGroup;
        if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
        loopedSlides += params.loopAdditionalSlides;
        swiper.loopedSlides = loopedSlides;
        const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
        if (slides.length < slidesPerView + loopedSlides) showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"); else if (gridEnabled && params.grid.fill === "row") showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
        const prependSlidesIndexes = [];
        const appendSlidesIndexes = [];
        let activeIndex = swiper.activeIndex;
        if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
        const isNext = direction === "next" || !direction;
        const isPrev = direction === "prev" || !direction;
        let slidesPrepended = 0;
        let slidesAppended = 0;
        const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
        const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
        const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
        if (activeColIndexWithShift < loopedSlides) {
            slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
            for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
                const index = i - Math.floor(i / cols) * cols;
                if (gridEnabled) {
                    const colIndexToPrepend = cols - index - 1;
                    for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                } else prependSlidesIndexes.push(cols - index - 1);
            }
        } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
            slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
            for (let i = 0; i < slidesAppended; i += 1) {
                const index = i - Math.floor(i / cols) * cols;
                if (gridEnabled) slides.forEach(((slide, slideIndex) => {
                    if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                })); else appendSlidesIndexes.push(index);
            }
        }
        swiper.__preventObserver__ = true;
        requestAnimationFrame((() => {
            swiper.__preventObserver__ = false;
        }));
        if (isPrev) prependSlidesIndexes.forEach((index => {
            slides[index].swiperLoopMoveDOM = true;
            slidesEl.prepend(slides[index]);
            slides[index].swiperLoopMoveDOM = false;
        }));
        if (isNext) appendSlidesIndexes.forEach((index => {
            slides[index].swiperLoopMoveDOM = true;
            slidesEl.append(slides[index]);
            slides[index].swiperLoopMoveDOM = false;
        }));
        swiper.recalcSlides();
        if (params.slidesPerView === "auto") swiper.updateSlides(); else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach(((slide, slideIndex) => {
            swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
        }));
        if (params.watchSlidesProgress) swiper.updateSlidesOffset();
        if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
            if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else if (setTranslate) {
                const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                swiper.touchEventsData.currentTranslate = swiper.translate;
            }
        } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
            const currentSlideTranslate = swiper.slidesGrid[activeIndex];
            const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
            const diff = newSlideTranslate - currentSlideTranslate;
            if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                if (setTranslate) {
                    swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                    swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                }
            }
        } else {
            const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
            swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        if (swiper.controller && swiper.controller.control && !byController) {
            const loopParams = {
                slideRealIndex,
                direction,
                setTranslate,
                activeSlideIndex,
                byController: true
            };
            if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                if (!c.destroyed && c.params.loop) c.loopFix({
                    ...loopParams,
                    slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                ...loopParams,
                slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
            });
        }
        swiper.emit("loopFix");
    }
    function loopDestroy() {
        const swiper = this;
        const {params, slidesEl} = swiper;
        if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
        swiper.recalcSlides();
        const newSlidesOrder = [];
        swiper.slides.forEach((slideEl => {
            const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
            newSlidesOrder[index] = slideEl;
        }));
        swiper.slides.forEach((slideEl => {
            slideEl.removeAttribute("data-swiper-slide-index");
        }));
        newSlidesOrder.forEach((slideEl => {
            slidesEl.append(slideEl);
        }));
        swiper.recalcSlides();
        swiper.slideTo(swiper.realIndex, 0);
    }
    var loop = {
        loopCreate,
        loopFix,
        loopDestroy
    };
    function setGrabCursor(moving) {
        const swiper = this;
        if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
        const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
        if (swiper.isElement) swiper.__preventObserver__ = true;
        el.style.cursor = "move";
        el.style.cursor = moving ? "grabbing" : "grab";
        if (swiper.isElement) requestAnimationFrame((() => {
            swiper.__preventObserver__ = false;
        }));
    }
    function unsetGrabCursor() {
        const swiper = this;
        if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
        if (swiper.isElement) swiper.__preventObserver__ = true;
        swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
        if (swiper.isElement) requestAnimationFrame((() => {
            swiper.__preventObserver__ = false;
        }));
    }
    var grabCursor = {
        setGrabCursor,
        unsetGrabCursor
    };
    function closestElement(selector, base) {
        if (base === void 0) base = this;
        function __closestFrom(el) {
            if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
            if (el.assignedSlot) el = el.assignedSlot;
            const found = el.closest(selector);
            if (!found && !el.getRootNode) return null;
            return found || __closestFrom(el.getRootNode().host);
        }
        return __closestFrom(base);
    }
    function preventEdgeSwipe(swiper, event, startX) {
        const window = ssr_window_esm_getWindow();
        const {params} = swiper;
        const edgeSwipeDetection = params.edgeSwipeDetection;
        const edgeSwipeThreshold = params.edgeSwipeThreshold;
        if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
            if (edgeSwipeDetection === "prevent") {
                event.preventDefault();
                return true;
            }
            return false;
        }
        return true;
    }
    function onTouchStart(event) {
        const swiper = this;
        const document = ssr_window_esm_getDocument();
        let e = event;
        if (e.originalEvent) e = e.originalEvent;
        const data = swiper.touchEventsData;
        if (e.type === "pointerdown") {
            if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
            data.pointerId = e.pointerId;
        } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
        if (e.type === "touchstart") {
            preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
            return;
        }
        const {params, touches, enabled} = swiper;
        if (!enabled) return;
        if (!params.simulateTouch && e.pointerType === "mouse") return;
        if (swiper.animating && params.preventInteractionOnTransition) return;
        if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
        let targetEl = e.target;
        if (params.touchEventsTarget === "wrapper") if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
        if ("which" in e && e.which === 3) return;
        if ("button" in e && e.button > 0) return;
        if (data.isTouched && data.isMoved) return;
        const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
        const eventPath = e.composedPath ? e.composedPath() : e.path;
        if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
        const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
        const isTargetShadow = !!(e.target && e.target.shadowRoot);
        if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
            swiper.allowClick = true;
            return;
        }
        if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
        touches.currentX = e.pageX;
        touches.currentY = e.pageY;
        const startX = touches.currentX;
        const startY = touches.currentY;
        if (!preventEdgeSwipe(swiper, e, startX)) return;
        Object.assign(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: void 0,
            startMoving: void 0
        });
        touches.startX = startX;
        touches.startY = startY;
        data.touchStartTime = utils_now();
        swiper.allowClick = true;
        swiper.updateSize();
        swiper.swipeDirection = void 0;
        if (params.threshold > 0) data.allowThresholdMove = false;
        let preventDefault = true;
        if (targetEl.matches(data.focusableElements)) {
            preventDefault = false;
            if (targetEl.nodeName === "SELECT") data.isTouched = false;
        }
        if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === "mouse" || e.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) document.activeElement.blur();
        const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
        swiper.emit("touchStart", e);
    }
    function onTouchMove(event) {
        const document = ssr_window_esm_getDocument();
        const swiper = this;
        const data = swiper.touchEventsData;
        const {params, touches, rtlTranslate: rtl, enabled} = swiper;
        if (!enabled) return;
        if (!params.simulateTouch && event.pointerType === "mouse") return;
        let e = event;
        if (e.originalEvent) e = e.originalEvent;
        if (e.type === "pointermove") {
            if (data.touchId !== null) return;
            const id = e.pointerId;
            if (id !== data.pointerId) return;
        }
        let targetTouch;
        if (e.type === "touchmove") {
            targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
            if (!targetTouch || targetTouch.identifier !== data.touchId) return;
        } else targetTouch = e;
        if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
            return;
        }
        const pageX = targetTouch.pageX;
        const pageY = targetTouch.pageY;
        if (e.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
        }
        if (!swiper.allowTouchMove) {
            if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
            if (data.isTouched) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY
                });
                data.touchStartTime = utils_now();
            }
            return;
        }
        if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
        if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== "mouse") document.activeElement.blur();
        if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
        if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
        touches.previousX = touches.currentX;
        touches.previousY = touches.currentY;
        touches.currentX = pageX;
        touches.currentY = pageY;
        const diffX = touches.currentX - touches.startX;
        const diffY = touches.currentY - touches.startY;
        if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
        if (typeof data.isScrolling === "undefined") {
            let touchAngle;
            if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
            }
        }
        if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
        if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
        if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
            data.isTouched = false;
            return;
        }
        if (!data.startMoving) return;
        swiper.allowClick = false;
        if (!params.cssMode && e.cancelable) e.preventDefault();
        if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
        let diff = swiper.isHorizontal() ? diffX : diffY;
        let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
        if (params.oneWayMovement) {
            diff = Math.abs(diff) * (rtl ? 1 : -1);
            touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
        }
        touches.diff = diff;
        diff *= params.touchRatio;
        if (rtl) {
            diff = -diff;
            touchesDiff = -touchesDiff;
        }
        const prevTouchesDirection = swiper.touchesDirection;
        swiper.swipeDirection = diff > 0 ? "prev" : "next";
        swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
        const isLoop = swiper.params.loop && !params.cssMode;
        const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
        if (!data.isMoved) {
            if (isLoop && allowLoopFix) swiper.loopFix({
                direction: swiper.swipeDirection
            });
            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);
            if (swiper.animating) {
                const evt = new window.CustomEvent("transitionend", {
                    bubbles: true,
                    cancelable: true,
                    detail: {
                        bySwiperTouchMove: true
                    }
                });
                swiper.wrapperEl.dispatchEvent(evt);
            }
            data.allowMomentumBounce = false;
            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
            swiper.emit("sliderFirstMove", e);
        }
        let loopFixed;
        (new Date).getTime();
        if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY,
                startTranslate: data.currentTranslate
            });
            data.loopSwapReset = true;
            data.startTranslate = data.currentTranslate;
            return;
        }
        swiper.emit("sliderMove", e);
        data.isMoved = true;
        data.currentTranslate = diff + data.startTranslate;
        let disableParentSwiper = true;
        let resistanceRatio = params.resistanceRatio;
        if (params.touchReleaseOnEdges) resistanceRatio = 0;
        if (diff > 0) {
            if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) swiper.loopFix({
                direction: "prev",
                setTranslate: true,
                activeSlideIndex: 0
            });
            if (data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            }
        } else if (diff < 0) {
            if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) swiper.loopFix({
                direction: "next",
                setTranslate: true,
                activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
            });
            if (data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
        }
        if (disableParentSwiper) e.preventedByNestedSwiper = true;
        if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
        if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
        if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
        if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        } else {
            data.currentTranslate = data.startTranslate;
            return;
        }
        if (!params.followFinger || params.cssMode) return;
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
        swiper.updateProgress(data.currentTranslate);
        swiper.setTranslate(data.currentTranslate);
    }
    function onTouchEnd(event) {
        const swiper = this;
        const data = swiper.touchEventsData;
        let e = event;
        if (e.originalEvent) e = e.originalEvent;
        let targetTouch;
        const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
        if (!isTouchEvent) {
            if (data.touchId !== null) return;
            if (e.pointerId !== data.pointerId) return;
            targetTouch = e;
        } else {
            targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
            if (!targetTouch || targetTouch.identifier !== data.touchId) return;
        }
        if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(e.type)) {
            const proceed = [ "pointercancel", "contextmenu" ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
            if (!proceed) return;
        }
        data.pointerId = null;
        data.touchId = null;
        const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
        if (!enabled) return;
        if (!params.simulateTouch && e.pointerType === "mouse") return;
        if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
        data.allowTouchCallbacks = false;
        if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
        const touchEndTime = utils_now();
        const timeDiff = touchEndTime - data.touchStartTime;
        if (swiper.allowClick) {
            const pathTree = e.path || e.composedPath && e.composedPath();
            swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
            swiper.emit("tap click", e);
            if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
        }
        data.lastClickTime = utils_now();
        utils_nextTick((() => {
            if (!swiper.destroyed) swiper.allowClick = true;
        }));
        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        let currentPos;
        if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
        if (params.cssMode) return;
        if (params.freeMode && params.freeMode.enabled) {
            swiper.freeMode.onTouchEnd({
                currentPos
            });
            return;
        }
        const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
        let stopIndex = 0;
        let groupSize = swiper.slidesSizesGrid[0];
        for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
            const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (typeof slidesGrid[i + increment] !== "undefined") {
                if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                    stopIndex = i;
                    groupSize = slidesGrid[i + increment] - slidesGrid[i];
                }
            } else if (swipeToLast || currentPos >= slidesGrid[i]) {
                stopIndex = i;
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
            }
        }
        let rewindFirstIndex = null;
        let rewindLastIndex = null;
        if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
        const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
        const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (timeDiff > params.longSwipesMs) {
            if (!params.longSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
            if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
        } else {
            if (!params.shortSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
            if (!isNavButtonTarget) {
                if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
            } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
        }
    }
    function onResize() {
        const swiper = this;
        const {params, el} = swiper;
        if (el && el.offsetWidth === 0) return;
        if (params.breakpoints) swiper.setBreakpoint();
        const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        swiper.allowSlideNext = true;
        swiper.allowSlidePrev = true;
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateSlidesClasses();
        const isVirtualLoop = isVirtual && params.loop;
        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
            clearTimeout(swiper.autoplay.resizeTimeout);
            swiper.autoplay.resizeTimeout = setTimeout((() => {
                if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
            }), 500);
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
    }
    function onClick(e) {
        const swiper = this;
        if (!swiper.enabled) return;
        if (!swiper.allowClick) {
            if (swiper.params.preventClicks) e.preventDefault();
            if (swiper.params.preventClicksPropagation && swiper.animating) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }
    }
    function onScroll() {
        const swiper = this;
        const {wrapperEl, rtlTranslate, enabled} = swiper;
        if (!enabled) return;
        swiper.previousTranslate = swiper.translate;
        if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
        if (swiper.translate === 0) swiper.translate = 0;
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        let newProgress;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
        if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
        swiper.emit("setTranslate", swiper.translate, false);
    }
    function onLoad(e) {
        const swiper = this;
        processLazyPreloader(swiper, e.target);
        if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
        swiper.update();
    }
    function onDocumentTouchStart() {
        const swiper = this;
        if (swiper.documentTouchHandlerProceeded) return;
        swiper.documentTouchHandlerProceeded = true;
        if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
    }
    const events = (swiper, method) => {
        const document = ssr_window_esm_getDocument();
        const {params, el, wrapperEl, device} = swiper;
        const capture = !!params.nested;
        const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
        const swiperMethod = method;
        if (!el || typeof el === "string") return;
        document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
            passive: false,
            capture
        });
        el[domMethod]("touchstart", swiper.onTouchStart, {
            passive: false
        });
        el[domMethod]("pointerdown", swiper.onTouchStart, {
            passive: false
        });
        document[domMethod]("touchmove", swiper.onTouchMove, {
            passive: false,
            capture
        });
        document[domMethod]("pointermove", swiper.onTouchMove, {
            passive: false,
            capture
        });
        document[domMethod]("touchend", swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]("pointerup", swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]("pointercancel", swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]("touchcancel", swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]("pointerout", swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]("pointerleave", swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]("contextmenu", swiper.onTouchEnd, {
            passive: true
        });
        if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
        if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
        if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        el[domMethod]("load", swiper.onLoad, {
            capture: true
        });
    };
    function attachEvents() {
        const swiper = this;
        const {params} = swiper;
        swiper.onTouchStart = onTouchStart.bind(swiper);
        swiper.onTouchMove = onTouchMove.bind(swiper);
        swiper.onTouchEnd = onTouchEnd.bind(swiper);
        swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
        if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
        swiper.onClick = onClick.bind(swiper);
        swiper.onLoad = onLoad.bind(swiper);
        events(swiper, "on");
    }
    function detachEvents() {
        const swiper = this;
        events(swiper, "off");
    }
    var events$1 = {
        attachEvents,
        detachEvents
    };
    const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
    function setBreakpoint() {
        const swiper = this;
        const {realIndex, initialized, params, el} = swiper;
        const breakpoints = params.breakpoints;
        if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
        const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
        if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
        const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
        const breakpointParams = breakpointOnlyParams || swiper.originalParams;
        const wasMultiRow = isGridEnabled(swiper, params);
        const isMultiRow = isGridEnabled(swiper, breakpointParams);
        const wasGrabCursor = swiper.params.grabCursor;
        const isGrabCursor = breakpointParams.grabCursor;
        const wasEnabled = params.enabled;
        if (wasMultiRow && !isMultiRow) {
            el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
            swiper.emitContainerClasses();
        } else if (!wasMultiRow && isMultiRow) {
            el.classList.add(`${params.containerModifierClass}grid`);
            if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
            swiper.emitContainerClasses();
        }
        if (wasGrabCursor && !isGrabCursor) swiper.unsetGrabCursor(); else if (!wasGrabCursor && isGrabCursor) swiper.setGrabCursor();
        [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
            if (typeof breakpointParams[prop] === "undefined") return;
            const wasModuleEnabled = params[prop] && params[prop].enabled;
            const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
            if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
            if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
        }));
        const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
        const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
        const wasLoop = params.loop;
        if (directionChanged && initialized) swiper.changeDirection();
        utils_extend(swiper.params, breakpointParams);
        const isEnabled = swiper.params.enabled;
        const hasLoop = swiper.params.loop;
        Object.assign(swiper, {
            allowTouchMove: swiper.params.allowTouchMove,
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev
        });
        if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
        swiper.currentBreakpoint = breakpoint;
        swiper.emit("_beforeBreakpoint", breakpointParams);
        if (initialized) if (needsReLoop) {
            swiper.loopDestroy();
            swiper.loopCreate(realIndex);
            swiper.updateSlides();
        } else if (!wasLoop && hasLoop) {
            swiper.loopCreate(realIndex);
            swiper.updateSlides();
        } else if (wasLoop && !hasLoop) swiper.loopDestroy();
        swiper.emit("breakpoint", breakpointParams);
    }
    function getBreakpoint(breakpoints, base, containerEl) {
        if (base === void 0) base = "window";
        if (!breakpoints || base === "container" && !containerEl) return;
        let breakpoint = false;
        const window = ssr_window_esm_getWindow();
        const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
        const points = Object.keys(breakpoints).map((point => {
            if (typeof point === "string" && point.indexOf("@") === 0) {
                const minRatio = parseFloat(point.substr(1));
                const value = currentHeight * minRatio;
                return {
                    value,
                    point
                };
            }
            return {
                value: point,
                point
            };
        }));
        points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
        for (let i = 0; i < points.length; i += 1) {
            const {point, value} = points[i];
            if (base === "window") {
                if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
            } else if (value <= containerEl.clientWidth) breakpoint = point;
        }
        return breakpoint || "max";
    }
    var breakpoints = {
        setBreakpoint,
        getBreakpoint
    };
    function prepareClasses(entries, prefix) {
        const resultClasses = [];
        entries.forEach((item => {
            if (typeof item === "object") Object.keys(item).forEach((classNames => {
                if (item[classNames]) resultClasses.push(prefix + classNames);
            })); else if (typeof item === "string") resultClasses.push(prefix + item);
        }));
        return resultClasses;
    }
    function addClasses() {
        const swiper = this;
        const {classNames, params, rtl, el, device} = swiper;
        const suffixes = prepareClasses([ "initialized", params.direction, {
            "free-mode": swiper.params.freeMode && params.freeMode.enabled
        }, {
            autoheight: params.autoHeight
        }, {
            rtl
        }, {
            grid: params.grid && params.grid.rows > 1
        }, {
            "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
        }, {
            android: device.android
        }, {
            ios: device.ios
        }, {
            "css-mode": params.cssMode
        }, {
            centered: params.cssMode && params.centeredSlides
        }, {
            "watch-progress": params.watchSlidesProgress
        } ], params.containerModifierClass);
        classNames.push(...suffixes);
        el.classList.add(...classNames);
        swiper.emitContainerClasses();
    }
    function removeClasses() {
        const swiper = this;
        const {el, classNames} = swiper;
        if (!el || typeof el === "string") return;
        el.classList.remove(...classNames);
        swiper.emitContainerClasses();
    }
    var classes = {
        addClasses,
        removeClasses
    };
    function checkOverflow() {
        const swiper = this;
        const {isLocked: wasLocked, params} = swiper;
        const {slidesOffsetBefore} = params;
        if (slidesOffsetBefore) {
            const lastSlideIndex = swiper.slides.length - 1;
            const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
            swiper.isLocked = swiper.size > lastSlideRightEdge;
        } else swiper.isLocked = swiper.snapGrid.length === 1;
        if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
        if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
        if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
        if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
    var checkOverflow$1 = {
        checkOverflow
    };
    var defaults = {
        init: true,
        direction: "horizontal",
        oneWayMovement: false,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: false,
        updateOnWindowResize: true,
        resizeObserver: true,
        nested: false,
        createElements: false,
        eventsPrefix: "swiper",
        enabled: true,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: false,
        userAgent: null,
        url: null,
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        autoHeight: false,
        setWrapperSize: false,
        virtualTranslate: false,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: false,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        watchOverflow: true,
        roundLengths: false,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 5,
        touchMoveStopPropagation: false,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        uniqueNavElements: true,
        resistance: true,
        resistanceRatio: .85,
        watchSlidesProgress: false,
        grabCursor: false,
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        loop: false,
        loopAddBlankSlides: true,
        loopAdditionalSlides: 0,
        loopPreventsSliding: true,
        rewind: false,
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        noSwiping: true,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: true,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: true,
        _emitClasses: false
    };
    function moduleExtendParams(params, allModulesParams) {
        return function extendParams(obj) {
            if (obj === void 0) obj = {};
            const moduleParamName = Object.keys(obj)[0];
            const moduleParams = obj[moduleParamName];
            if (typeof moduleParams !== "object" || moduleParams === null) {
                utils_extend(allModulesParams, obj);
                return;
            }
            if (params[moduleParamName] === true) params[moduleParamName] = {
                enabled: true
            };
            if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
            if ([ "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
            if (!(moduleParamName in params && "enabled" in moduleParams)) {
                utils_extend(allModulesParams, obj);
                return;
            }
            if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
            if (!params[moduleParamName]) params[moduleParamName] = {
                enabled: false
            };
            utils_extend(allModulesParams, obj);
        };
    }
    const prototypes = {
        eventsEmitter,
        update,
        translate,
        transition,
        slide,
        loop,
        grabCursor,
        events: events$1,
        breakpoints,
        checkOverflow: checkOverflow$1,
        classes
    };
    const extendedDefaults = {};
    class Swiper {
        constructor() {
            let el;
            let params;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
            if (!params) params = {};
            params = utils_extend({}, params);
            if (el && !params.el) params.el = el;
            const document = ssr_window_esm_getDocument();
            if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                const swipers = [];
                document.querySelectorAll(params.el).forEach((containerEl => {
                    const newParams = utils_extend({}, params, {
                        el: containerEl
                    });
                    swipers.push(new Swiper(newParams));
                }));
                return swipers;
            }
            const swiper = this;
            swiper.__swiper__ = true;
            swiper.support = getSupport();
            swiper.device = getDevice({
                userAgent: params.userAgent
            });
            swiper.browser = getBrowser();
            swiper.eventsListeners = {};
            swiper.eventsAnyListeners = [];
            swiper.modules = [ ...swiper.__modules__ ];
            if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
            const allModulesParams = {};
            swiper.modules.forEach((mod => {
                mod({
                    params,
                    swiper,
                    extendParams: moduleExtendParams(params, allModulesParams),
                    on: swiper.on.bind(swiper),
                    once: swiper.once.bind(swiper),
                    off: swiper.off.bind(swiper),
                    emit: swiper.emit.bind(swiper)
                });
            }));
            const swiperParams = utils_extend({}, defaults, allModulesParams);
            swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
            swiper.originalParams = utils_extend({}, swiper.params);
            swiper.passedParams = utils_extend({}, params);
            if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                swiper.on(eventName, swiper.params.on[eventName]);
            }));
            if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
            Object.assign(swiper, {
                enabled: swiper.params.enabled,
                el,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal() {
                    return swiper.params.direction === "horizontal";
                },
                isVertical() {
                    return swiper.params.direction === "vertical";
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: true,
                isEnd: false,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: false,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                },
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: swiper.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null
                },
                allowClick: true,
                allowTouchMove: swiper.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            });
            swiper.emit("_swiper");
            if (swiper.params.init) swiper.init();
            return swiper;
        }
        getDirectionLabel(property) {
            if (this.isHorizontal()) return property;
            return {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
            }[property];
        }
        getSlideIndex(slideEl) {
            const {slidesEl, params} = this;
            const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            const firstSlideIndex = utils_elementIndex(slides[0]);
            return utils_elementIndex(slideEl) - firstSlideIndex;
        }
        getSlideIndexByData(index) {
            return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
        }
        recalcSlides() {
            const swiper = this;
            const {slidesEl, params} = swiper;
            swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
        }
        enable() {
            const swiper = this;
            if (swiper.enabled) return;
            swiper.enabled = true;
            if (swiper.params.grabCursor) swiper.setGrabCursor();
            swiper.emit("enable");
        }
        disable() {
            const swiper = this;
            if (!swiper.enabled) return;
            swiper.enabled = false;
            if (swiper.params.grabCursor) swiper.unsetGrabCursor();
            swiper.emit("disable");
        }
        setProgress(progress, speed) {
            const swiper = this;
            progress = Math.min(Math.max(progress, 0), 1);
            const min = swiper.minTranslate();
            const max = swiper.maxTranslate();
            const current = (max - min) * progress + min;
            swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        emitContainerClasses() {
            const swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
            swiper.emit("_containerClasses", cls.join(" "));
        }
        getSlideClasses(slideEl) {
            const swiper = this;
            if (swiper.destroyed) return "";
            return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
        }
        emitSlidesClasses() {
            const swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            const updates = [];
            swiper.slides.forEach((slideEl => {
                const classNames = swiper.getSlideClasses(slideEl);
                updates.push({
                    slideEl,
                    classNames
                });
                swiper.emit("_slideClass", slideEl, classNames);
            }));
            swiper.emit("_slideClasses", updates);
        }
        slidesPerViewDynamic(view, exact) {
            if (view === void 0) view = "current";
            if (exact === void 0) exact = false;
            const swiper = this;
            const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
            let spv = 1;
            if (typeof params.slidesPerView === "number") return params.slidesPerView;
            if (params.centeredSlides) {
                let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
                let breakLoop;
                for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                    slideSize += Math.ceil(slides[i].swiperSlideSize);
                    spv += 1;
                    if (slideSize > swiperSize) breakLoop = true;
                }
                for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                    slideSize += slides[i].swiperSlideSize;
                    spv += 1;
                    if (slideSize > swiperSize) breakLoop = true;
                }
            } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                if (slideInView) spv += 1;
            } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                if (slideInView) spv += 1;
            }
            return spv;
        }
        update() {
            const swiper = this;
            if (!swiper || swiper.destroyed) return;
            const {snapGrid, params} = swiper;
            if (params.breakpoints) swiper.setBreakpoint();
            [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                if (imageEl.complete) processLazyPreloader(swiper, imageEl);
            }));
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            function setTranslate() {
                const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            let translated;
            if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                setTranslate();
                if (params.autoHeight) swiper.updateAutoHeight();
            } else {
                if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                    const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                    translated = swiper.slideTo(slides.length - 1, 0, false, true);
                } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                if (!translated) setTranslate();
            }
            if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
            swiper.emit("update");
        }
        changeDirection(newDirection, needUpdate) {
            if (needUpdate === void 0) needUpdate = true;
            const swiper = this;
            const currentDirection = swiper.params.direction;
            if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
            if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
            swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
            swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
            swiper.emitContainerClasses();
            swiper.params.direction = newDirection;
            swiper.slides.forEach((slideEl => {
                if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
            }));
            swiper.emit("changeDirection");
            if (needUpdate) swiper.update();
            return swiper;
        }
        changeLanguageDirection(direction) {
            const swiper = this;
            if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
            swiper.rtl = direction === "rtl";
            swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
            if (swiper.rtl) {
                swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                swiper.el.dir = "rtl";
            } else {
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                swiper.el.dir = "ltr";
            }
            swiper.update();
        }
        mount(element) {
            const swiper = this;
            if (swiper.mounted) return true;
            let el = element || swiper.params.el;
            if (typeof el === "string") el = document.querySelector(el);
            if (!el) return false;
            el.swiper = swiper;
            if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
            const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
            const getWrapper = () => {
                if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                    const res = el.shadowRoot.querySelector(getWrapperSelector());
                    return res;
                }
                return utils_elementChildren(el, getWrapperSelector())[0];
            };
            let wrapperEl = getWrapper();
            if (!wrapperEl && swiper.params.createElements) {
                wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                el.append(wrapperEl);
                utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                    wrapperEl.append(slideEl);
                }));
            }
            Object.assign(swiper, {
                el,
                wrapperEl,
                slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                hostEl: swiper.isElement ? el.parentNode.host : el,
                mounted: true,
                rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
            });
            return true;
        }
        init(el) {
            const swiper = this;
            if (swiper.initialized) return swiper;
            const mounted = swiper.mount(el);
            if (mounted === false) return swiper;
            swiper.emit("beforeInit");
            if (swiper.params.breakpoints) swiper.setBreakpoint();
            swiper.addClasses();
            swiper.updateSize();
            swiper.updateSlides();
            if (swiper.params.watchOverflow) swiper.checkOverflow();
            if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
            if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
            if (swiper.params.loop) swiper.loopCreate();
            swiper.attachEvents();
            const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
            if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
            lazyElements.forEach((imageEl => {
                if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                    processLazyPreloader(swiper, e.target);
                }));
            }));
            preload(swiper);
            swiper.initialized = true;
            preload(swiper);
            swiper.emit("init");
            swiper.emit("afterInit");
            return swiper;
        }
        destroy(deleteInstance, cleanStyles) {
            if (deleteInstance === void 0) deleteInstance = true;
            if (cleanStyles === void 0) cleanStyles = true;
            const swiper = this;
            const {params, el, wrapperEl, slides} = swiper;
            if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
            swiper.emit("beforeDestroy");
            swiper.initialized = false;
            swiper.detachEvents();
            if (params.loop) swiper.loopDestroy();
            if (cleanStyles) {
                swiper.removeClasses();
                if (el && typeof el !== "string") el.removeAttribute("style");
                if (wrapperEl) wrapperEl.removeAttribute("style");
                if (slides && slides.length) slides.forEach((slideEl => {
                    slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                    slideEl.removeAttribute("style");
                    slideEl.removeAttribute("data-swiper-slide-index");
                }));
            }
            swiper.emit("destroy");
            Object.keys(swiper.eventsListeners).forEach((eventName => {
                swiper.off(eventName);
            }));
            if (deleteInstance !== false) {
                if (swiper.el && typeof swiper.el !== "string") swiper.el.swiper = null;
                deleteProps(swiper);
            }
            swiper.destroyed = true;
            return null;
        }
        static extendDefaults(newDefaults) {
            utils_extend(extendedDefaults, newDefaults);
        }
        static get extendedDefaults() {
            return extendedDefaults;
        }
        static get defaults() {
            return defaults;
        }
        static installModule(mod) {
            if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
            const modules = Swiper.prototype.__modules__;
            if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
        }
        static use(module) {
            if (Array.isArray(module)) {
                module.forEach((m => Swiper.installModule(m)));
                return Swiper;
            }
            Swiper.installModule(module);
            return Swiper;
        }
    }
    Object.keys(prototypes).forEach((prototypeGroup => {
        Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        }));
    }));
    Swiper.use([ Resize, Observer ]);
    function Virtual(_ref) {
        let {swiper, extendParams, on, emit} = _ref;
        extendParams({
            virtual: {
                enabled: false,
                slides: [],
                cache: true,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: true,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        });
        let cssModeTimeout;
        const document = getDocument();
        swiper.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        };
        const tempDOM = document.createElement("div");
        function renderSlide(slide, index) {
            const params = swiper.params.virtual;
            if (params.cache && swiper.virtual.cache[index]) return swiper.virtual.cache[index];
            let slideEl;
            if (params.renderSlide) {
                slideEl = params.renderSlide.call(swiper, slide, index);
                if (typeof slideEl === "string") {
                    tempDOM.innerHTML = slideEl;
                    slideEl = tempDOM.children[0];
                }
            } else if (swiper.isElement) slideEl = createElement("swiper-slide"); else slideEl = createElement("div", swiper.params.slideClass);
            slideEl.setAttribute("data-swiper-slide-index", index);
            if (!params.renderSlide) slideEl.innerHTML = slide;
            if (params.cache) swiper.virtual.cache[index] = slideEl;
            return slideEl;
        }
        function update(force, beforeInit) {
            const {slidesPerView, slidesPerGroup, centeredSlides, loop: isLoop, initialSlide} = swiper.params;
            if (beforeInit && !isLoop && initialSlide > 0) return;
            const {addSlidesBefore, addSlidesAfter} = swiper.params.virtual;
            const {from: previousFrom, to: previousTo, slides, slidesGrid: previousSlidesGrid, offset: previousOffset} = swiper.virtual;
            if (!swiper.params.cssMode) swiper.updateActiveIndex();
            const activeIndex = swiper.activeIndex || 0;
            let offsetProp;
            if (swiper.rtlTranslate) offsetProp = "right"; else offsetProp = swiper.isHorizontal() ? "left" : "top";
            let slidesAfter;
            let slidesBefore;
            if (centeredSlides) {
                slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
                slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
            } else {
                slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
                slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
            }
            let from = activeIndex - slidesBefore;
            let to = activeIndex + slidesAfter;
            if (!isLoop) {
                from = Math.max(from, 0);
                to = Math.min(to, slides.length - 1);
            }
            let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
            if (isLoop && activeIndex >= slidesBefore) {
                from -= slidesBefore;
                if (!centeredSlides) offset += swiper.slidesGrid[0];
            } else if (isLoop && activeIndex < slidesBefore) {
                from = -slidesBefore;
                if (centeredSlides) offset += swiper.slidesGrid[0];
            }
            Object.assign(swiper.virtual, {
                from,
                to,
                offset,
                slidesGrid: swiper.slidesGrid,
                slidesBefore,
                slidesAfter
            });
            function onRendered() {
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                emit("virtualUpdate");
            }
            if (previousFrom === from && previousTo === to && !force) {
                if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) swiper.slides.forEach((slideEl => {
                    slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
                }));
                swiper.updateProgress();
                emit("virtualUpdate");
                return;
            }
            if (swiper.params.virtual.renderExternal) {
                swiper.params.virtual.renderExternal.call(swiper, {
                    offset,
                    from,
                    to,
                    slides: function getSlides() {
                        const slidesToRender = [];
                        for (let i = from; i <= to; i += 1) slidesToRender.push(slides[i]);
                        return slidesToRender;
                    }()
                });
                if (swiper.params.virtual.renderExternalUpdate) onRendered(); else emit("virtualUpdate");
                return;
            }
            const prependIndexes = [];
            const appendIndexes = [];
            const getSlideIndex = index => {
                let slideIndex = index;
                if (index < 0) slideIndex = slides.length + index; else if (slideIndex >= slides.length) slideIndex -= slides.length;
                return slideIndex;
            };
            if (force) swiper.slides.filter((el => el.matches(`.${swiper.params.slideClass}, swiper-slide`))).forEach((slideEl => {
                slideEl.remove();
            })); else for (let i = previousFrom; i <= previousTo; i += 1) if (i < from || i > to) {
                const slideIndex = getSlideIndex(i);
                swiper.slides.filter((el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`))).forEach((slideEl => {
                    slideEl.remove();
                }));
            }
            const loopFrom = isLoop ? -slides.length : 0;
            const loopTo = isLoop ? slides.length * 2 : slides.length;
            for (let i = loopFrom; i < loopTo; i += 1) if (i >= from && i <= to) {
                const slideIndex = getSlideIndex(i);
                if (typeof previousTo === "undefined" || force) appendIndexes.push(slideIndex); else {
                    if (i > previousTo) appendIndexes.push(slideIndex);
                    if (i < previousFrom) prependIndexes.push(slideIndex);
                }
            }
            appendIndexes.forEach((index => {
                swiper.slidesEl.append(renderSlide(slides[index], index));
            }));
            if (isLoop) for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
                const index = prependIndexes[i];
                swiper.slidesEl.prepend(renderSlide(slides[index], index));
            } else {
                prependIndexes.sort(((a, b) => b - a));
                prependIndexes.forEach((index => {
                    swiper.slidesEl.prepend(renderSlide(slides[index], index));
                }));
            }
            elementChildren(swiper.slidesEl, ".swiper-slide, swiper-slide").forEach((slideEl => {
                slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
            }));
            onRendered();
        }
        function appendSlide(slides) {
            if (typeof slides === "object" && "length" in slides) {
                for (let i = 0; i < slides.length; i += 1) if (slides[i]) swiper.virtual.slides.push(slides[i]);
            } else swiper.virtual.slides.push(slides);
            update(true);
        }
        function prependSlide(slides) {
            const activeIndex = swiper.activeIndex;
            let newActiveIndex = activeIndex + 1;
            let numberOfNewSlides = 1;
            if (Array.isArray(slides)) {
                for (let i = 0; i < slides.length; i += 1) if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
                newActiveIndex = activeIndex + slides.length;
                numberOfNewSlides = slides.length;
            } else swiper.virtual.slides.unshift(slides);
            if (swiper.params.virtual.cache) {
                const cache = swiper.virtual.cache;
                const newCache = {};
                Object.keys(cache).forEach((cachedIndex => {
                    const cachedEl = cache[cachedIndex];
                    const cachedElIndex = cachedEl.getAttribute("data-swiper-slide-index");
                    if (cachedElIndex) cachedEl.setAttribute("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
                    newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
                }));
                swiper.virtual.cache = newCache;
            }
            update(true);
            swiper.slideTo(newActiveIndex, 0);
        }
        function removeSlide(slidesIndexes) {
            if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
            let activeIndex = swiper.activeIndex;
            if (Array.isArray(slidesIndexes)) for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
                if (swiper.params.virtual.cache) {
                    delete swiper.virtual.cache[slidesIndexes[i]];
                    Object.keys(swiper.virtual.cache).forEach((key => {
                        if (key > slidesIndexes) {
                            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
                            swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
                            delete swiper.virtual.cache[key];
                        }
                    }));
                }
                swiper.virtual.slides.splice(slidesIndexes[i], 1);
                if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
                activeIndex = Math.max(activeIndex, 0);
            } else {
                if (swiper.params.virtual.cache) {
                    delete swiper.virtual.cache[slidesIndexes];
                    Object.keys(swiper.virtual.cache).forEach((key => {
                        if (key > slidesIndexes) {
                            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
                            swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
                            delete swiper.virtual.cache[key];
                        }
                    }));
                }
                swiper.virtual.slides.splice(slidesIndexes, 1);
                if (slidesIndexes < activeIndex) activeIndex -= 1;
                activeIndex = Math.max(activeIndex, 0);
            }
            update(true);
            swiper.slideTo(activeIndex, 0);
        }
        function removeAllSlides() {
            swiper.virtual.slides = [];
            if (swiper.params.virtual.cache) swiper.virtual.cache = {};
            update(true);
            swiper.slideTo(0, 0);
        }
        on("beforeInit", (() => {
            if (!swiper.params.virtual.enabled) return;
            let domSlidesAssigned;
            if (typeof swiper.passedParams.virtual.slides === "undefined") {
                const slides = [ ...swiper.slidesEl.children ].filter((el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)));
                if (slides && slides.length) {
                    swiper.virtual.slides = [ ...slides ];
                    domSlidesAssigned = true;
                    slides.forEach(((slideEl, slideIndex) => {
                        slideEl.setAttribute("data-swiper-slide-index", slideIndex);
                        swiper.virtual.cache[slideIndex] = slideEl;
                        slideEl.remove();
                    }));
                }
            }
            if (!domSlidesAssigned) swiper.virtual.slides = swiper.params.virtual.slides;
            swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
            swiper.params.watchSlidesProgress = true;
            swiper.originalParams.watchSlidesProgress = true;
            update(false, true);
        }));
        on("setTranslate", (() => {
            if (!swiper.params.virtual.enabled) return;
            if (swiper.params.cssMode && !swiper._immediateVirtual) {
                clearTimeout(cssModeTimeout);
                cssModeTimeout = setTimeout((() => {
                    update();
                }), 100);
            } else update();
        }));
        on("init update resize", (() => {
            if (!swiper.params.virtual.enabled) return;
            if (swiper.params.cssMode) setCSSProperty(swiper.wrapperEl, "--swiper-virtual-size", `${swiper.virtualSize}px`);
        }));
        Object.assign(swiper.virtual, {
            appendSlide,
            prependSlide,
            removeSlide,
            removeAllSlides,
            update
        });
    }
    function Keyboard(_ref) {
        let {swiper, extendParams, on, emit} = _ref;
        const document = getDocument();
        const window = getWindow();
        swiper.keyboard = {
            enabled: false
        };
        extendParams({
            keyboard: {
                enabled: false,
                onlyInViewport: true,
                pageUpDown: true
            }
        });
        function handle(event) {
            if (!swiper.enabled) return;
            const {rtlTranslate: rtl} = swiper;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            const kc = e.keyCode || e.charCode;
            const pageUpDown = swiper.params.keyboard.pageUpDown;
            const isPageUp = pageUpDown && kc === 33;
            const isPageDown = pageUpDown && kc === 34;
            const isArrowLeft = kc === 37;
            const isArrowRight = kc === 39;
            const isArrowUp = kc === 38;
            const isArrowDown = kc === 40;
            if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
            if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === "input" || document.activeElement.nodeName.toLowerCase() === "textarea")) return;
            if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
                let inView = false;
                if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) return;
                const el = swiper.el;
                const swiperWidth = el.clientWidth;
                const swiperHeight = el.clientHeight;
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;
                const swiperOffset = elementOffset(el);
                if (rtl) swiperOffset.left -= el.scrollLeft;
                const swiperCoord = [ [ swiperOffset.left, swiperOffset.top ], [ swiperOffset.left + swiperWidth, swiperOffset.top ], [ swiperOffset.left, swiperOffset.top + swiperHeight ], [ swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight ] ];
                for (let i = 0; i < swiperCoord.length; i += 1) {
                    const point = swiperCoord[i];
                    if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                        if (point[0] === 0 && point[1] === 0) continue;
                        inView = true;
                    }
                }
                if (!inView) return;
            }
            if (swiper.isHorizontal()) {
                if (isPageUp || isPageDown || isArrowLeft || isArrowRight) if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
                if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
            } else {
                if (isPageUp || isPageDown || isArrowUp || isArrowDown) if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                if (isPageDown || isArrowDown) swiper.slideNext();
                if (isPageUp || isArrowUp) swiper.slidePrev();
            }
            emit("keyPress", kc);
            return;
        }
        function enable() {
            if (swiper.keyboard.enabled) return;
            document.addEventListener("keydown", handle);
            swiper.keyboard.enabled = true;
        }
        function disable() {
            if (!swiper.keyboard.enabled) return;
            document.removeEventListener("keydown", handle);
            swiper.keyboard.enabled = false;
        }
        on("init", (() => {
            if (swiper.params.keyboard.enabled) enable();
        }));
        on("destroy", (() => {
            if (swiper.keyboard.enabled) disable();
        }));
        Object.assign(swiper.keyboard, {
            enable,
            disable
        });
    }
    function Mousewheel(_ref) {
        let {swiper, extendParams, on, emit} = _ref;
        const window = getWindow();
        extendParams({
            mousewheel: {
                enabled: false,
                releaseOnEdges: false,
                invert: false,
                forceToAxis: false,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null,
                noMousewheelClass: "swiper-no-mousewheel"
            }
        });
        swiper.mousewheel = {
            enabled: false
        };
        let timeout;
        let lastScrollTime = now();
        let lastEventBeforeSnap;
        const recentWheelEvents = [];
        function normalize(e) {
            const PIXEL_STEP = 10;
            const LINE_HEIGHT = 40;
            const PAGE_HEIGHT = 800;
            let sX = 0;
            let sY = 0;
            let pX = 0;
            let pY = 0;
            if ("detail" in e) sY = e.detail;
            if ("wheelDelta" in e) sY = -e.wheelDelta / 120;
            if ("wheelDeltaY" in e) sY = -e.wheelDeltaY / 120;
            if ("wheelDeltaX" in e) sX = -e.wheelDeltaX / 120;
            if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
                sX = sY;
                sY = 0;
            }
            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;
            if ("deltaY" in e) pY = e.deltaY;
            if ("deltaX" in e) pX = e.deltaX;
            if (e.shiftKey && !pX) {
                pX = pY;
                pY = 0;
            }
            if ((pX || pY) && e.deltaMode) if (e.deltaMode === 1) {
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
            } else {
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
            }
            if (pX && !sX) sX = pX < 1 ? -1 : 1;
            if (pY && !sY) sY = pY < 1 ? -1 : 1;
            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY
            };
        }
        function handleMouseEnter() {
            if (!swiper.enabled) return;
            swiper.mouseEntered = true;
        }
        function handleMouseLeave() {
            if (!swiper.enabled) return;
            swiper.mouseEntered = false;
        }
        function animateSlider(newEvent) {
            if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) return false;
            if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) return false;
            if (newEvent.delta >= 6 && now() - lastScrollTime < 60) return true;
            if (newEvent.direction < 0) {
                if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                    swiper.slideNext();
                    emit("scroll", newEvent.raw);
                }
            } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                swiper.slidePrev();
                emit("scroll", newEvent.raw);
            }
            lastScrollTime = (new window.Date).getTime();
            return false;
        }
        function releaseScroll(newEvent) {
            const params = swiper.params.mousewheel;
            if (newEvent.direction < 0) {
                if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) return true;
            } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) return true;
            return false;
        }
        function handle(event) {
            let e = event;
            let disableParentSwiper = true;
            if (!swiper.enabled) return;
            if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
            const params = swiper.params.mousewheel;
            if (swiper.params.cssMode) e.preventDefault();
            let targetEl = swiper.el;
            if (swiper.params.mousewheel.eventsTarget !== "container") targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
            const targetElContainsTarget = targetEl && targetEl.contains(e.target);
            if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
            if (e.originalEvent) e = e.originalEvent;
            let delta = 0;
            const rtlFactor = swiper.rtlTranslate ? -1 : 1;
            const data = normalize(e);
            if (params.forceToAxis) if (swiper.isHorizontal()) if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor; else return true; else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY; else return true; else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
            if (delta === 0) return true;
            if (params.invert) delta = -delta;
            let positions = swiper.getTranslate() + delta * params.sensitivity;
            if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
            if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
            disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
            if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
            if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
                const newEvent = {
                    time: now(),
                    delta: Math.abs(delta),
                    direction: Math.sign(delta),
                    raw: event
                };
                if (recentWheelEvents.length >= 2) recentWheelEvents.shift();
                const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
                recentWheelEvents.push(newEvent);
                if (prevEvent) {
                    if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
                } else animateSlider(newEvent);
                if (releaseScroll(newEvent)) return true;
            } else {
                const newEvent = {
                    time: now(),
                    delta: Math.abs(delta),
                    direction: Math.sign(delta)
                };
                const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
                if (!ignoreWheelEvents) {
                    lastEventBeforeSnap = void 0;
                    let position = swiper.getTranslate() + delta * params.sensitivity;
                    const wasBeginning = swiper.isBeginning;
                    const wasEnd = swiper.isEnd;
                    if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                    if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                    swiper.setTransition(0);
                    swiper.setTranslate(position);
                    swiper.updateProgress();
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                    if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
                    if (swiper.params.loop) swiper.loopFix({
                        direction: newEvent.direction < 0 ? "next" : "prev",
                        byMousewheel: true
                    });
                    if (swiper.params.freeMode.sticky) {
                        clearTimeout(timeout);
                        timeout = void 0;
                        if (recentWheelEvents.length >= 15) recentWheelEvents.shift();
                        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
                        const firstEvent = recentWheelEvents[0];
                        recentWheelEvents.push(newEvent);
                        if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) recentWheelEvents.splice(0); else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                            const snapToThreshold = delta > 0 ? .8 : .2;
                            lastEventBeforeSnap = newEvent;
                            recentWheelEvents.splice(0);
                            timeout = nextTick((() => {
                                if (swiper.destroyed || !swiper.params) return;
                                swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
                            }), 0);
                        }
                        if (!timeout) timeout = nextTick((() => {
                            if (swiper.destroyed || !swiper.params) return;
                            const snapToThreshold = .5;
                            lastEventBeforeSnap = newEvent;
                            recentWheelEvents.splice(0);
                            swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
                        }), 500);
                    }
                    if (!ignoreWheelEvents) emit("scroll", e);
                    if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
                    if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) return true;
                }
            }
            if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
            return false;
        }
        function events(method) {
            let targetEl = swiper.el;
            if (swiper.params.mousewheel.eventsTarget !== "container") targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
            targetEl[method]("mouseenter", handleMouseEnter);
            targetEl[method]("mouseleave", handleMouseLeave);
            targetEl[method]("wheel", handle);
        }
        function enable() {
            if (swiper.params.cssMode) {
                swiper.wrapperEl.removeEventListener("wheel", handle);
                return true;
            }
            if (swiper.mousewheel.enabled) return false;
            events("addEventListener");
            swiper.mousewheel.enabled = true;
            return true;
        }
        function disable() {
            if (swiper.params.cssMode) {
                swiper.wrapperEl.addEventListener(event, handle);
                return true;
            }
            if (!swiper.mousewheel.enabled) return false;
            events("removeEventListener");
            swiper.mousewheel.enabled = false;
            return true;
        }
        on("init", (() => {
            if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) disable();
            if (swiper.params.mousewheel.enabled) enable();
        }));
        on("destroy", (() => {
            if (swiper.params.cssMode) enable();
            if (swiper.mousewheel.enabled) disable();
        }));
        Object.assign(swiper.mousewheel, {
            enable,
            disable
        });
    }
    function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
        if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
            if (!params[key] && params.auto === true) {
                let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                if (!element) {
                    element = utils_createElement("div", checkProps[key]);
                    element.className = checkProps[key];
                    swiper.el.append(element);
                }
                params[key] = element;
                originalParams[key] = element;
            }
        }));
        return params;
    }
    function Navigation(_ref) {
        let {swiper, extendParams, on, emit} = _ref;
        extendParams({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: false,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        });
        swiper.navigation = {
            nextEl: null,
            prevEl: null
        };
        function getEl(el) {
            let res;
            if (el && typeof el === "string" && swiper.isElement) {
                res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
                if (res) return res;
            }
            if (el) {
                if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el); else if (res && res.length === 1) res = res[0];
            }
            if (el && !res) return el;
            return res;
        }
        function toggleEl(el, disabled) {
            const params = swiper.params.navigation;
            el = makeElementsArray(el);
            el.forEach((subEl => {
                if (subEl) {
                    subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                    if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                }
            }));
        }
        function update() {
            const {nextEl, prevEl} = swiper.navigation;
            if (swiper.params.loop) {
                toggleEl(prevEl, false);
                toggleEl(nextEl, false);
                return;
            }
            toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
            toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
        }
        function onPrevClick(e) {
            e.preventDefault();
            if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
            swiper.slidePrev();
            emit("navigationPrev");
        }
        function onNextClick(e) {
            e.preventDefault();
            if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
            swiper.slideNext();
            emit("navigationNext");
        }
        function init() {
            const params = swiper.params.navigation;
            swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            });
            if (!(params.nextEl || params.prevEl)) return;
            let nextEl = getEl(params.nextEl);
            let prevEl = getEl(params.prevEl);
            Object.assign(swiper.navigation, {
                nextEl,
                prevEl
            });
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            const initButton = (el, dir) => {
                if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
            };
            nextEl.forEach((el => initButton(el, "next")));
            prevEl.forEach((el => initButton(el, "prev")));
        }
        function destroy() {
            let {nextEl, prevEl} = swiper.navigation;
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            const destroyButton = (el, dir) => {
                el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
            };
            nextEl.forEach((el => destroyButton(el, "next")));
            prevEl.forEach((el => destroyButton(el, "prev")));
        }
        on("init", (() => {
            if (swiper.params.navigation.enabled === false) disable(); else {
                init();
                update();
            }
        }));
        on("toEdge fromEdge lock unlock", (() => {
            update();
        }));
        on("destroy", (() => {
            destroy();
        }));
        on("enable disable", (() => {
            let {nextEl, prevEl} = swiper.navigation;
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            if (swiper.enabled) {
                update();
                return;
            }
            [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.add(swiper.params.navigation.lockClass)));
        }));
        on("click", ((_s, e) => {
            let {nextEl, prevEl} = swiper.navigation;
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            const targetEl = e.target;
            let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
            if (swiper.isElement && !targetIsButton) {
                const path = e.path || e.composedPath && e.composedPath();
                if (path) targetIsButton = path.find((pathEl => nextEl.includes(pathEl) || prevEl.includes(pathEl)));
            }
            if (swiper.params.navigation.hideOnClick && !targetIsButton) {
                if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                let isHidden;
                if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
            }
        }));
        const enable = () => {
            swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
            init();
            update();
        };
        const disable = () => {
            swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
            destroy();
        };
        Object.assign(swiper.navigation, {
            enable,
            disable,
            update,
            init,
            destroy
        });
    }
    function classes_to_selector_classesToSelector(classes) {
        if (classes === void 0) classes = "";
        return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
    }
    function Pagination(_ref) {
        let {swiper, extendParams, on, emit} = _ref;
        const pfx = "swiper-pagination";
        extendParams({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: false,
                hideOnClick: false,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: false,
                type: "bullets",
                dynamicBullets: false,
                dynamicMainBullets: 1,
                formatFractionCurrent: number => number,
                formatFractionTotal: number => number,
                bulletClass: `${pfx}-bullet`,
                bulletActiveClass: `${pfx}-bullet-active`,
                modifierClass: `${pfx}-`,
                currentClass: `${pfx}-current`,
                totalClass: `${pfx}-total`,
                hiddenClass: `${pfx}-hidden`,
                progressbarFillClass: `${pfx}-progressbar-fill`,
                progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                clickableClass: `${pfx}-clickable`,
                lockClass: `${pfx}-lock`,
                horizontalClass: `${pfx}-horizontal`,
                verticalClass: `${pfx}-vertical`,
                paginationDisabledClass: `${pfx}-disabled`
            }
        });
        swiper.pagination = {
            el: null,
            bullets: []
        };
        let bulletSize;
        let dynamicBulletIndex = 0;
        function isPaginationDisabled() {
            return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
        }
        function setSideBullets(bulletEl, position) {
            const {bulletActiveClass} = swiper.params.pagination;
            if (!bulletEl) return;
            bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
            if (bulletEl) {
                bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
            }
        }
        function getMoveDirection(prevIndex, nextIndex, length) {
            prevIndex %= length;
            nextIndex %= length;
            if (nextIndex === prevIndex + 1) return "next"; else if (nextIndex === prevIndex - 1) return "previous";
            return;
        }
        function onBulletClick(e) {
            const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
            if (!bulletEl) return;
            e.preventDefault();
            const index = utils_elementIndex(bulletEl) * swiper.params.slidesPerGroup;
            if (swiper.params.loop) {
                if (swiper.realIndex === index) return;
                const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
                if (moveDirection === "next") swiper.slideNext(); else if (moveDirection === "previous") swiper.slidePrev(); else swiper.slideToLoop(index);
            } else swiper.slideTo(index);
        }
        function update() {
            const rtl = swiper.rtl;
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            let el = swiper.pagination.el;
            el = utils_makeElementsArray(el);
            let current;
            let previousIndex;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.loop) {
                previousIndex = swiper.previousRealIndex || 0;
                current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
            } else if (typeof swiper.snapIndex !== "undefined") {
                current = swiper.snapIndex;
                previousIndex = swiper.previousSnapIndex;
            } else {
                previousIndex = swiper.previousIndex || 0;
                current = swiper.activeIndex || 0;
            }
            if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                const bullets = swiper.pagination.bullets;
                let firstIndex;
                let lastIndex;
                let midIndex;
                if (params.dynamicBullets) {
                    bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                    el.forEach((subEl => {
                        subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                    }));
                    if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                        dynamicBulletIndex += current - (previousIndex || 0);
                        if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                    }
                    firstIndex = Math.max(current - dynamicBulletIndex, 0);
                    lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                    midIndex = (lastIndex + firstIndex) / 2;
                }
                bullets.forEach((bulletEl => {
                    const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                    bulletEl.classList.remove(...classesToRemove);
                }));
                if (el.length > 1) bullets.forEach((bullet => {
                    const bulletIndex = utils_elementIndex(bullet);
                    if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" ")); else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                    if (params.dynamicBullets) {
                        if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                        if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                        if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                    }
                })); else {
                    const bullet = bullets[current];
                    if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                    if (swiper.isElement) bullets.forEach(((bulletEl, bulletIndex) => {
                        bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                    }));
                    if (params.dynamicBullets) {
                        const firstDisplayedBullet = bullets[firstIndex];
                        const lastDisplayedBullet = bullets[lastIndex];
                        for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                        setSideBullets(firstDisplayedBullet, "prev");
                        setSideBullets(lastDisplayedBullet, "next");
                    }
                }
                if (params.dynamicBullets) {
                    const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                    const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                    const offsetProp = rtl ? "right" : "left";
                    bullets.forEach((bullet => {
                        bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                    }));
                }
            }
            el.forEach(((subEl, subElIndex) => {
                if (params.type === "fraction") {
                    subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                        fractionEl.textContent = params.formatFractionCurrent(current + 1);
                    }));
                    subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                        totalEl.textContent = params.formatFractionTotal(total);
                    }));
                }
                if (params.type === "progressbar") {
                    let progressbarDirection;
                    if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                    const scale = (current + 1) / total;
                    let scaleX = 1;
                    let scaleY = 1;
                    if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                    subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                        progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                        progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                    }));
                }
                if (params.type === "custom" && params.renderCustom) {
                    subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                    if (subElIndex === 0) emit("paginationRender", subEl);
                } else {
                    if (subElIndex === 0) emit("paginationRender", subEl);
                    emit("paginationUpdate", subEl);
                }
                if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
            }));
        }
        function render() {
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
            let el = swiper.pagination.el;
            el = utils_makeElementsArray(el);
            let paginationHTML = "";
            if (params.type === "bullets") {
                let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
            }
            if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
            if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
            swiper.pagination.bullets = [];
            el.forEach((subEl => {
                if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
            }));
            if (params.type !== "custom") emit("paginationRender", el[0]);
        }
        function init() {
            swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                el: "swiper-pagination"
            });
            const params = swiper.params.pagination;
            if (!params.el) return;
            let el;
            if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
            if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
            if (!el) el = params.el;
            if (!el || el.length === 0) return;
            if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                el = [ ...swiper.el.querySelectorAll(params.el) ];
                if (el.length > 1) el = el.filter((subEl => {
                    if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                    return true;
                }))[0];
            }
            if (Array.isArray(el) && el.length === 1) el = el[0];
            Object.assign(swiper.pagination, {
                el
            });
            el = utils_makeElementsArray(el);
            el.forEach((subEl => {
                if (params.type === "bullets" && params.clickable) subEl.classList.add(...(params.clickableClass || "").split(" "));
                subEl.classList.add(params.modifierClass + params.type);
                subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (params.type === "bullets" && params.dynamicBullets) {
                    subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                    dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                }
                if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                if (params.clickable) subEl.addEventListener("click", onBulletClick);
                if (!swiper.enabled) subEl.classList.add(params.lockClass);
            }));
        }
        function destroy() {
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            let el = swiper.pagination.el;
            if (el) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.classList.remove(params.hiddenClass);
                    subEl.classList.remove(params.modifierClass + params.type);
                    subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.clickable) {
                        subEl.classList.remove(...(params.clickableClass || "").split(" "));
                        subEl.removeEventListener("click", onBulletClick);
                    }
                }));
            }
            if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
        }
        on("changeDirection", (() => {
            if (!swiper.pagination || !swiper.pagination.el) return;
            const params = swiper.params.pagination;
            let {el} = swiper.pagination;
            el = utils_makeElementsArray(el);
            el.forEach((subEl => {
                subEl.classList.remove(params.horizontalClass, params.verticalClass);
                subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            }));
        }));
        on("init", (() => {
            if (swiper.params.pagination.enabled === false) disable(); else {
                init();
                render();
                update();
            }
        }));
        on("activeIndexChange", (() => {
            if (typeof swiper.snapIndex === "undefined") update();
        }));
        on("snapIndexChange", (() => {
            update();
        }));
        on("snapGridLengthChange", (() => {
            render();
            update();
        }));
        on("destroy", (() => {
            destroy();
        }));
        on("enable disable", (() => {
            let {el} = swiper.pagination;
            if (el) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
            }
        }));
        on("lock unlock", (() => {
            update();
        }));
        on("click", ((_s, e) => {
            const targetEl = e.target;
            const el = utils_makeElementsArray(swiper.pagination.el);
            if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
            }
        }));
        const enable = () => {
            swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
            let {el} = swiper.pagination;
            if (el) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
            }
            init();
            render();
            update();
        };
        const disable = () => {
            swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
            let {el} = swiper.pagination;
            if (el) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
            }
            destroy();
        };
        Object.assign(swiper.pagination, {
            enable,
            disable,
            render,
            update,
            init,
            destroy
        });
    }
    function Scrollbar(_ref) {
        let {swiper, extendParams, on, emit} = _ref;
        const document = getDocument();
        let isTouched = false;
        let timeout = null;
        let dragTimeout = null;
        let dragStartPos;
        let dragSize;
        let trackSize;
        let divider;
        extendParams({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: false,
                draggable: false,
                snapOnRelease: true,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: `swiper-scrollbar-horizontal`,
                verticalClass: `swiper-scrollbar-vertical`
            }
        });
        swiper.scrollbar = {
            el: null,
            dragEl: null
        };
        function setTranslate() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            const {scrollbar, rtlTranslate: rtl} = swiper;
            const {dragEl, el} = scrollbar;
            const params = swiper.params.scrollbar;
            const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
            let newSize = dragSize;
            let newPos = (trackSize - dragSize) * progress;
            if (rtl) {
                newPos = -newPos;
                if (newPos > 0) {
                    newSize = dragSize - newPos;
                    newPos = 0;
                } else if (-newPos + dragSize > trackSize) newSize = trackSize + newPos;
            } else if (newPos < 0) {
                newSize = dragSize + newPos;
                newPos = 0;
            } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos;
            if (swiper.isHorizontal()) {
                dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
                dragEl.style.width = `${newSize}px`;
            } else {
                dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
                dragEl.style.height = `${newSize}px`;
            }
            if (params.hide) {
                clearTimeout(timeout);
                el.style.opacity = 1;
                timeout = setTimeout((() => {
                    el.style.opacity = 0;
                    el.style.transitionDuration = "400ms";
                }), 1e3);
            }
        }
        function setTransition(duration) {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
        }
        function updateSize() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            const {scrollbar} = swiper;
            const {dragEl, el} = scrollbar;
            dragEl.style.width = "";
            dragEl.style.height = "";
            trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
            divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
            if (swiper.params.scrollbar.dragSize === "auto") dragSize = trackSize * divider; else dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
            if (swiper.isHorizontal()) dragEl.style.width = `${dragSize}px`; else dragEl.style.height = `${dragSize}px`;
            if (divider >= 1) el.style.display = "none"; else el.style.display = "";
            if (swiper.params.scrollbar.hide) el.style.opacity = 0;
            if (swiper.params.watchOverflow && swiper.enabled) scrollbar.el.classList[swiper.isLocked ? "add" : "remove"](swiper.params.scrollbar.lockClass);
        }
        function getPointerPosition(e) {
            return swiper.isHorizontal() ? e.clientX : e.clientY;
        }
        function setDragPosition(e) {
            const {scrollbar, rtlTranslate: rtl} = swiper;
            const {el} = scrollbar;
            let positionRatio;
            positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
            positionRatio = Math.max(Math.min(positionRatio, 1), 0);
            if (rtl) positionRatio = 1 - positionRatio;
            const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
            swiper.updateProgress(position);
            swiper.setTranslate(position);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        function onDragStart(e) {
            const params = swiper.params.scrollbar;
            const {scrollbar, wrapperEl} = swiper;
            const {el, dragEl} = scrollbar;
            isTouched = true;
            dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
            e.preventDefault();
            e.stopPropagation();
            wrapperEl.style.transitionDuration = "100ms";
            dragEl.style.transitionDuration = "100ms";
            setDragPosition(e);
            clearTimeout(dragTimeout);
            el.style.transitionDuration = "0ms";
            if (params.hide) el.style.opacity = 1;
            if (swiper.params.cssMode) swiper.wrapperEl.style["scroll-snap-type"] = "none";
            emit("scrollbarDragStart", e);
        }
        function onDragMove(e) {
            const {scrollbar, wrapperEl} = swiper;
            const {el, dragEl} = scrollbar;
            if (!isTouched) return;
            if (e.preventDefault && e.cancelable) e.preventDefault(); else e.returnValue = false;
            setDragPosition(e);
            wrapperEl.style.transitionDuration = "0ms";
            el.style.transitionDuration = "0ms";
            dragEl.style.transitionDuration = "0ms";
            emit("scrollbarDragMove", e);
        }
        function onDragEnd(e) {
            const params = swiper.params.scrollbar;
            const {scrollbar, wrapperEl} = swiper;
            const {el} = scrollbar;
            if (!isTouched) return;
            isTouched = false;
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style["scroll-snap-type"] = "";
                wrapperEl.style.transitionDuration = "";
            }
            if (params.hide) {
                clearTimeout(dragTimeout);
                dragTimeout = nextTick((() => {
                    el.style.opacity = 0;
                    el.style.transitionDuration = "400ms";
                }), 1e3);
            }
            emit("scrollbarDragEnd", e);
            if (params.snapOnRelease) swiper.slideToClosest();
        }
        function events(method) {
            const {scrollbar, params} = swiper;
            const el = scrollbar.el;
            if (!el) return;
            const target = el;
            const activeListener = params.passiveListeners ? {
                passive: false,
                capture: false
            } : false;
            const passiveListener = params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            if (!target) return;
            const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
            target[eventMethod]("pointerdown", onDragStart, activeListener);
            document[eventMethod]("pointermove", onDragMove, activeListener);
            document[eventMethod]("pointerup", onDragEnd, passiveListener);
        }
        function enableDraggable() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            events("on");
        }
        function disableDraggable() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            events("off");
        }
        function init() {
            const {scrollbar, el: swiperEl} = swiper;
            swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const params = swiper.params.scrollbar;
            if (!params.el) return;
            let el;
            if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
            if (!el && typeof params.el === "string") {
                el = document.querySelectorAll(params.el);
                if (!el.length) return;
            } else if (!el) el = params.el;
            if (swiper.params.uniqueNavElements && typeof params.el === "string" && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) el = swiperEl.querySelector(params.el);
            if (el.length > 0) el = el[0];
            el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            let dragEl;
            if (el) {
                dragEl = el.querySelector(classesToSelector(swiper.params.scrollbar.dragClass));
                if (!dragEl) {
                    dragEl = createElement("div", swiper.params.scrollbar.dragClass);
                    el.append(dragEl);
                }
            }
            Object.assign(scrollbar, {
                el,
                dragEl
            });
            if (params.draggable) enableDraggable();
            if (el) el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
        }
        function destroy() {
            const params = swiper.params.scrollbar;
            const el = swiper.scrollbar.el;
            if (el) el.classList.remove(...classesToTokens(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
            disableDraggable();
        }
        on("changeDirection", (() => {
            if (!swiper.scrollbar || !swiper.scrollbar.el) return;
            const params = swiper.params.scrollbar;
            let {el} = swiper.scrollbar;
            el = makeElementsArray(el);
            el.forEach((subEl => {
                subEl.classList.remove(params.horizontalClass, params.verticalClass);
                subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            }));
        }));
        on("init", (() => {
            if (swiper.params.scrollbar.enabled === false) disable(); else {
                init();
                updateSize();
                setTranslate();
            }
        }));
        on("update resize observerUpdate lock unlock changeDirection", (() => {
            updateSize();
        }));
        on("setTranslate", (() => {
            setTranslate();
        }));
        on("setTransition", ((_s, duration) => {
            setTransition(duration);
        }));
        on("enable disable", (() => {
            const {el} = swiper.scrollbar;
            if (el) el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
        }));
        on("destroy", (() => {
            destroy();
        }));
        const enable = () => {
            swiper.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
            if (swiper.scrollbar.el) swiper.scrollbar.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
            init();
            updateSize();
            setTranslate();
        };
        const disable = () => {
            swiper.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
            if (swiper.scrollbar.el) swiper.scrollbar.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
            destroy();
        };
        Object.assign(swiper.scrollbar, {
            enable,
            disable,
            updateSize,
            setTranslate,
            init,
            destroy
        });
    }
    function Parallax(_ref) {
        let {swiper, extendParams, on} = _ref;
        extendParams({
            parallax: {
                enabled: false
            }
        });
        const elementsSelector = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]";
        const setTransform = (el, progress) => {
            const {rtl} = swiper;
            const rtlFactor = rtl ? -1 : 1;
            const p = el.getAttribute("data-swiper-parallax") || "0";
            let x = el.getAttribute("data-swiper-parallax-x");
            let y = el.getAttribute("data-swiper-parallax-y");
            const scale = el.getAttribute("data-swiper-parallax-scale");
            const opacity = el.getAttribute("data-swiper-parallax-opacity");
            const rotate = el.getAttribute("data-swiper-parallax-rotate");
            if (x || y) {
                x = x || "0";
                y = y || "0";
            } else if (swiper.isHorizontal()) {
                x = p;
                y = "0";
            } else {
                y = p;
                x = "0";
            }
            if (x.indexOf("%") >= 0) x = `${parseInt(x, 10) * progress * rtlFactor}%`; else x = `${x * progress * rtlFactor}px`;
            if (y.indexOf("%") >= 0) y = `${parseInt(y, 10) * progress}%`; else y = `${y * progress}px`;
            if (typeof opacity !== "undefined" && opacity !== null) {
                const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
                el.style.opacity = currentOpacity;
            }
            let transform = `translate3d(${x}, ${y}, 0px)`;
            if (typeof scale !== "undefined" && scale !== null) {
                const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
                transform += ` scale(${currentScale})`;
            }
            if (rotate && typeof rotate !== "undefined" && rotate !== null) {
                const currentRotate = rotate * progress * -1;
                transform += ` rotate(${currentRotate}deg)`;
            }
            el.style.transform = transform;
        };
        const setTranslate = () => {
            const {el, slides, progress, snapGrid, isElement} = swiper;
            const elements = elementChildren(el, elementsSelector);
            if (swiper.isElement) elements.push(...elementChildren(swiper.hostEl, elementsSelector));
            elements.forEach((subEl => {
                setTransform(subEl, progress);
            }));
            slides.forEach(((slideEl, slideIndex) => {
                let slideProgress = slideEl.progress;
                if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== "auto") slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
                slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach((subEl => {
                    setTransform(subEl, slideProgress);
                }));
            }));
        };
        const setTransition = function(duration) {
            if (duration === void 0) duration = swiper.params.speed;
            const {el, hostEl} = swiper;
            const elements = [ ...el.querySelectorAll(elementsSelector) ];
            if (swiper.isElement) elements.push(...hostEl.querySelectorAll(elementsSelector));
            elements.forEach((parallaxEl => {
                let parallaxDuration = parseInt(parallaxEl.getAttribute("data-swiper-parallax-duration"), 10) || duration;
                if (duration === 0) parallaxDuration = 0;
                parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
            }));
        };
        on("beforeInit", (() => {
            if (!swiper.params.parallax.enabled) return;
            swiper.params.watchSlidesProgress = true;
            swiper.originalParams.watchSlidesProgress = true;
        }));
        on("init", (() => {
            if (!swiper.params.parallax.enabled) return;
            setTranslate();
        }));
        on("setTranslate", (() => {
            if (!swiper.params.parallax.enabled) return;
            setTranslate();
        }));
        on("setTransition", ((_swiper, duration) => {
            if (!swiper.params.parallax.enabled) return;
            setTransition(duration);
        }));
    }
    function Zoom(_ref) {
        let {swiper, extendParams, on, emit} = _ref;
        const window = getWindow();
        extendParams({
            zoom: {
                enabled: false,
                limitToOriginalSize: false,
                maxRatio: 3,
                minRatio: 1,
                toggle: true,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        });
        swiper.zoom = {
            enabled: false
        };
        let currentScale = 1;
        let isScaling = false;
        let fakeGestureTouched;
        let fakeGestureMoved;
        const evCache = [];
        const gesture = {
            originX: 0,
            originY: 0,
            slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            imageEl: void 0,
            imageWrapEl: void 0,
            maxRatio: 3
        };
        const image = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
        };
        const velocity = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
        };
        let scale = 1;
        Object.defineProperty(swiper.zoom, "scale", {
            get() {
                return scale;
            },
            set(value) {
                if (scale !== value) {
                    const imageEl = gesture.imageEl;
                    const slideEl = gesture.slideEl;
                    emit("zoomChange", value, imageEl, slideEl);
                }
                scale = value;
            }
        });
        function getDistanceBetweenTouches() {
            if (evCache.length < 2) return 1;
            const x1 = evCache[0].pageX;
            const y1 = evCache[0].pageY;
            const x2 = evCache[1].pageX;
            const y2 = evCache[1].pageY;
            const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
            return distance;
        }
        function getMaxRatio() {
            const params = swiper.params.zoom;
            const maxRatio = gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
            if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
                const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
                return Math.min(imageMaxRatio, maxRatio);
            }
            return maxRatio;
        }
        function getScaleOrigin() {
            if (evCache.length < 2) return {
                x: null,
                y: null
            };
            const box = gesture.imageEl.getBoundingClientRect();
            return [ (evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale ];
        }
        function getSlideSelector() {
            return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
        }
        function eventWithinSlide(e) {
            const slideSelector = getSlideSelector();
            if (e.target.matches(slideSelector)) return true;
            if (swiper.slides.filter((slideEl => slideEl.contains(e.target))).length > 0) return true;
            return false;
        }
        function eventWithinZoomContainer(e) {
            const selector = `.${swiper.params.zoom.containerClass}`;
            if (e.target.matches(selector)) return true;
            if ([ ...swiper.hostEl.querySelectorAll(selector) ].filter((containerEl => containerEl.contains(e.target))).length > 0) return true;
            return false;
        }
        function onGestureStart(e) {
            if (e.pointerType === "mouse") evCache.splice(0, evCache.length);
            if (!eventWithinSlide(e)) return;
            const params = swiper.params.zoom;
            fakeGestureTouched = false;
            fakeGestureMoved = false;
            evCache.push(e);
            if (evCache.length < 2) return;
            fakeGestureTouched = true;
            gesture.scaleStart = getDistanceBetweenTouches();
            if (!gesture.slideEl) {
                gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
                if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
                let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
                if (imageEl) imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
                gesture.imageEl = imageEl;
                if (imageEl) gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0]; else gesture.imageWrapEl = void 0;
                if (!gesture.imageWrapEl) {
                    gesture.imageEl = void 0;
                    return;
                }
                gesture.maxRatio = getMaxRatio();
            }
            if (gesture.imageEl) {
                const [originX, originY] = getScaleOrigin();
                gesture.originX = originX;
                gesture.originY = originY;
                gesture.imageEl.style.transitionDuration = "0ms";
            }
            isScaling = true;
        }
        function onGestureChange(e) {
            if (!eventWithinSlide(e)) return;
            const params = swiper.params.zoom;
            const zoom = swiper.zoom;
            const pointerIndex = evCache.findIndex((cachedEv => cachedEv.pointerId === e.pointerId));
            if (pointerIndex >= 0) evCache[pointerIndex] = e;
            if (evCache.length < 2) return;
            fakeGestureMoved = true;
            gesture.scaleMove = getDistanceBetweenTouches();
            if (!gesture.imageEl) return;
            zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
            if (zoom.scale > gesture.maxRatio) zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** .5;
            if (zoom.scale < params.minRatio) zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** .5;
            gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
        }
        function onGestureEnd(e) {
            if (!eventWithinSlide(e)) return;
            if (e.pointerType === "mouse" && e.type === "pointerout") return;
            const params = swiper.params.zoom;
            const zoom = swiper.zoom;
            const pointerIndex = evCache.findIndex((cachedEv => cachedEv.pointerId === e.pointerId));
            if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
            if (!fakeGestureTouched || !fakeGestureMoved) return;
            fakeGestureTouched = false;
            fakeGestureMoved = false;
            if (!gesture.imageEl) return;
            zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
            gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
            gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
            currentScale = zoom.scale;
            isScaling = false;
            if (zoom.scale > 1 && gesture.slideEl) gesture.slideEl.classList.add(`${params.zoomedSlideClass}`); else if (zoom.scale <= 1 && gesture.slideEl) gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
            if (zoom.scale === 1) {
                gesture.originX = 0;
                gesture.originY = 0;
                gesture.slideEl = void 0;
            }
        }
        let allowTouchMoveTimeout;
        function allowTouchMove() {
            swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
        }
        function preventTouchMove() {
            clearTimeout(allowTouchMoveTimeout);
            swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
            allowTouchMoveTimeout = setTimeout((() => {
                if (swiper.destroyed) return;
                allowTouchMove();
            }));
        }
        function onTouchStart(e) {
            const device = swiper.device;
            if (!gesture.imageEl) return;
            if (image.isTouched) return;
            if (device.android && e.cancelable) e.preventDefault();
            image.isTouched = true;
            const event = evCache.length > 0 ? evCache[0] : e;
            image.touchesStart.x = event.pageX;
            image.touchesStart.y = event.pageY;
        }
        function onTouchMove(e) {
            if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
            const zoom = swiper.zoom;
            if (!gesture.imageEl) return;
            if (!image.isTouched || !gesture.slideEl) return;
            if (!image.isMoved) {
                image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
                image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
                image.startX = getTranslate(gesture.imageWrapEl, "x") || 0;
                image.startY = getTranslate(gesture.imageWrapEl, "y") || 0;
                gesture.slideWidth = gesture.slideEl.offsetWidth;
                gesture.slideHeight = gesture.slideEl.offsetHeight;
                gesture.imageWrapEl.style.transitionDuration = "0ms";
            }
            const scaledWidth = image.width * zoom.scale;
            const scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
            image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
            const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
            if (touchesDiff > 5) swiper.allowClick = false;
            if (!image.isMoved && !isScaling) {
                if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                    image.isTouched = false;
                    allowTouchMove();
                    return;
                }
                if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                    image.isTouched = false;
                    allowTouchMove();
                    return;
                }
            }
            if (e.cancelable) e.preventDefault();
            e.stopPropagation();
            preventTouchMove();
            image.isMoved = true;
            const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
            const {originX, originY} = gesture;
            image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
            image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
            if (image.currentX < image.minX) image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** .8;
            if (image.currentX > image.maxX) image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** .8;
            if (image.currentY < image.minY) image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** .8;
            if (image.currentY > image.maxY) image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** .8;
            if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
            if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
            if (!velocity.prevTime) velocity.prevTime = Date.now();
            velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
            velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
            if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
            if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
            velocity.prevPositionX = image.touchesCurrent.x;
            velocity.prevPositionY = image.touchesCurrent.y;
            velocity.prevTime = Date.now();
            gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
        }
        function onTouchEnd() {
            const zoom = swiper.zoom;
            if (!gesture.imageEl) return;
            if (!image.isTouched || !image.isMoved) {
                image.isTouched = false;
                image.isMoved = false;
                return;
            }
            image.isTouched = false;
            image.isMoved = false;
            let momentumDurationX = 300;
            let momentumDurationY = 300;
            const momentumDistanceX = velocity.x * momentumDurationX;
            const newPositionX = image.currentX + momentumDistanceX;
            const momentumDistanceY = velocity.y * momentumDurationY;
            const newPositionY = image.currentY + momentumDistanceY;
            if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
            if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
            const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
            image.currentX = newPositionX;
            image.currentY = newPositionY;
            const scaledWidth = image.width * zoom.scale;
            const scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
            image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
            gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
            gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
        }
        function onTransitionEnd() {
            const zoom = swiper.zoom;
            if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
                if (gesture.imageEl) gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
                if (gesture.imageWrapEl) gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
                gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
                zoom.scale = 1;
                currentScale = 1;
                gesture.slideEl = void 0;
                gesture.imageEl = void 0;
                gesture.imageWrapEl = void 0;
                gesture.originX = 0;
                gesture.originY = 0;
            }
        }
        function zoomIn(e) {
            const zoom = swiper.zoom;
            const params = swiper.params.zoom;
            if (!gesture.slideEl) {
                if (e && e.target) gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
                if (!gesture.slideEl) if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0]; else gesture.slideEl = swiper.slides[swiper.activeIndex];
                let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
                if (imageEl) imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
                gesture.imageEl = imageEl;
                if (imageEl) gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0]; else gesture.imageWrapEl = void 0;
            }
            if (!gesture.imageEl || !gesture.imageWrapEl) return;
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style.overflow = "hidden";
                swiper.wrapperEl.style.touchAction = "none";
            }
            gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
            let touchX;
            let touchY;
            let offsetX;
            let offsetY;
            let diffX;
            let diffY;
            let translateX;
            let translateY;
            let imageWidth;
            let imageHeight;
            let scaledWidth;
            let scaledHeight;
            let translateMinX;
            let translateMinY;
            let translateMaxX;
            let translateMaxY;
            let slideWidth;
            let slideHeight;
            if (typeof image.touchesStart.x === "undefined" && e) {
                touchX = e.pageX;
                touchY = e.pageY;
            } else {
                touchX = image.touchesStart.x;
                touchY = image.touchesStart.y;
            }
            const forceZoomRatio = typeof e === "number" ? e : null;
            if (currentScale === 1 && forceZoomRatio) {
                touchX = void 0;
                touchY = void 0;
                image.touchesStart.x = void 0;
                image.touchesStart.y = void 0;
            }
            const maxRatio = getMaxRatio();
            zoom.scale = forceZoomRatio || maxRatio;
            currentScale = forceZoomRatio || maxRatio;
            if (e && !(currentScale === 1 && forceZoomRatio)) {
                slideWidth = gesture.slideEl.offsetWidth;
                slideHeight = gesture.slideEl.offsetHeight;
                offsetX = elementOffset(gesture.slideEl).left + window.scrollX;
                offsetY = elementOffset(gesture.slideEl).top + window.scrollY;
                diffX = offsetX + slideWidth / 2 - touchX;
                diffY = offsetY + slideHeight / 2 - touchY;
                imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
                imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
                scaledWidth = imageWidth * zoom.scale;
                scaledHeight = imageHeight * zoom.scale;
                translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
                translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
                translateMaxX = -translateMinX;
                translateMaxY = -translateMinY;
                translateX = diffX * zoom.scale;
                translateY = diffY * zoom.scale;
                if (translateX < translateMinX) translateX = translateMinX;
                if (translateX > translateMaxX) translateX = translateMaxX;
                if (translateY < translateMinY) translateY = translateMinY;
                if (translateY > translateMaxY) translateY = translateMaxY;
            } else {
                translateX = 0;
                translateY = 0;
            }
            if (forceZoomRatio && zoom.scale === 1) {
                gesture.originX = 0;
                gesture.originY = 0;
            }
            gesture.imageWrapEl.style.transitionDuration = "300ms";
            gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
            gesture.imageEl.style.transitionDuration = "300ms";
            gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
        }
        function zoomOut() {
            const zoom = swiper.zoom;
            const params = swiper.params.zoom;
            if (!gesture.slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0]; else gesture.slideEl = swiper.slides[swiper.activeIndex];
                let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
                if (imageEl) imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
                gesture.imageEl = imageEl;
                if (imageEl) gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0]; else gesture.imageWrapEl = void 0;
            }
            if (!gesture.imageEl || !gesture.imageWrapEl) return;
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style.overflow = "";
                swiper.wrapperEl.style.touchAction = "";
            }
            zoom.scale = 1;
            currentScale = 1;
            image.touchesStart.x = void 0;
            image.touchesStart.y = void 0;
            gesture.imageWrapEl.style.transitionDuration = "300ms";
            gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
            gesture.imageEl.style.transitionDuration = "300ms";
            gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
            gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
            gesture.slideEl = void 0;
            gesture.originX = 0;
            gesture.originY = 0;
        }
        function zoomToggle(e) {
            const zoom = swiper.zoom;
            if (zoom.scale && zoom.scale !== 1) zoomOut(); else zoomIn(e);
        }
        function getListeners() {
            const passiveListener = swiper.params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            const activeListenerWithCapture = swiper.params.passiveListeners ? {
                passive: false,
                capture: true
            } : true;
            return {
                passiveListener,
                activeListenerWithCapture
            };
        }
        function enable() {
            const zoom = swiper.zoom;
            if (zoom.enabled) return;
            zoom.enabled = true;
            const {passiveListener, activeListenerWithCapture} = getListeners();
            swiper.wrapperEl.addEventListener("pointerdown", onGestureStart, passiveListener);
            swiper.wrapperEl.addEventListener("pointermove", onGestureChange, activeListenerWithCapture);
            [ "pointerup", "pointercancel", "pointerout" ].forEach((eventName => {
                swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
            }));
            swiper.wrapperEl.addEventListener("pointermove", onTouchMove, activeListenerWithCapture);
        }
        function disable() {
            const zoom = swiper.zoom;
            if (!zoom.enabled) return;
            zoom.enabled = false;
            const {passiveListener, activeListenerWithCapture} = getListeners();
            swiper.wrapperEl.removeEventListener("pointerdown", onGestureStart, passiveListener);
            swiper.wrapperEl.removeEventListener("pointermove", onGestureChange, activeListenerWithCapture);
            [ "pointerup", "pointercancel", "pointerout" ].forEach((eventName => {
                swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
            }));
            swiper.wrapperEl.removeEventListener("pointermove", onTouchMove, activeListenerWithCapture);
        }
        on("init", (() => {
            if (swiper.params.zoom.enabled) enable();
        }));
        on("destroy", (() => {
            disable();
        }));
        on("touchStart", ((_s, e) => {
            if (!swiper.zoom.enabled) return;
            onTouchStart(e);
        }));
        on("touchEnd", ((_s, e) => {
            if (!swiper.zoom.enabled) return;
            onTouchEnd();
        }));
        on("doubleTap", ((_s, e) => {
            if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) zoomToggle(e);
        }));
        on("transitionEnd", (() => {
            if (swiper.zoom.enabled && swiper.params.zoom.enabled) onTransitionEnd();
        }));
        on("slideChange", (() => {
            if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) onTransitionEnd();
        }));
        Object.assign(swiper.zoom, {
            enable,
            disable,
            in: zoomIn,
            out: zoomOut,
            toggle: zoomToggle
        });
    }
    function Controller(_ref) {
        let {swiper, extendParams, on} = _ref;
        extendParams({
            controller: {
                control: void 0,
                inverse: false,
                by: "slide"
            }
        });
        swiper.controller = {
            control: void 0
        };
        function LinearSpline(x, y) {
            const binarySearch = function search() {
                let maxIndex;
                let minIndex;
                let guess;
                return (array, val) => {
                    minIndex = -1;
                    maxIndex = array.length;
                    while (maxIndex - minIndex > 1) {
                        guess = maxIndex + minIndex >> 1;
                        if (array[guess] <= val) minIndex = guess; else maxIndex = guess;
                    }
                    return maxIndex;
                };
            }();
            this.x = x;
            this.y = y;
            this.lastIndex = x.length - 1;
            let i1;
            let i3;
            this.interpolate = function interpolate(x2) {
                if (!x2) return 0;
                i3 = binarySearch(this.x, x2);
                i1 = i3 - 1;
                return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
            };
            return this;
        }
        function getInterpolateFunction(c) {
            swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
        }
        function setTranslate(_t, byController) {
            const controlled = swiper.controller.control;
            let multiplier;
            let controlledTranslate;
            const Swiper = swiper.constructor;
            function setControlledTranslate(c) {
                if (c.destroyed) return;
                const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
                if (swiper.params.controller.by === "slide") {
                    getInterpolateFunction(c);
                    controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                }
                if (!controlledTranslate || swiper.params.controller.by === "container") {
                    multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                    if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) multiplier = 1;
                    controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
                }
                if (swiper.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
                c.updateProgress(controlledTranslate);
                c.setTranslate(controlledTranslate, swiper);
                c.updateActiveIndex();
                c.updateSlidesClasses();
            }
            if (Array.isArray(controlled)) {
                for (let i = 0; i < controlled.length; i += 1) if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTranslate(controlled[i]);
            } else if (controlled instanceof Swiper && byController !== controlled) setControlledTranslate(controlled);
        }
        function setTransition(duration, byController) {
            const Swiper = swiper.constructor;
            const controlled = swiper.controller.control;
            let i;
            function setControlledTransition(c) {
                if (c.destroyed) return;
                c.setTransition(duration, swiper);
                if (duration !== 0) {
                    c.transitionStart();
                    if (c.params.autoHeight) nextTick((() => {
                        c.updateAutoHeight();
                    }));
                    elementTransitionEnd(c.wrapperEl, (() => {
                        if (!controlled) return;
                        c.transitionEnd();
                    }));
                }
            }
            if (Array.isArray(controlled)) {
                for (i = 0; i < controlled.length; i += 1) if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTransition(controlled[i]);
            } else if (controlled instanceof Swiper && byController !== controlled) setControlledTransition(controlled);
        }
        function removeSpline() {
            if (!swiper.controller.control) return;
            if (swiper.controller.spline) {
                swiper.controller.spline = void 0;
                delete swiper.controller.spline;
            }
        }
        on("beforeInit", (() => {
            if (typeof window !== "undefined" && (typeof swiper.params.controller.control === "string" || swiper.params.controller.control instanceof HTMLElement)) {
                const controlElements = typeof swiper.params.controller.control === "string" ? [ ...document.querySelectorAll(swiper.params.controller.control) ] : [ swiper.params.controller.control ];
                controlElements.forEach((controlElement => {
                    if (!swiper.controller.control) swiper.controller.control = [];
                    if (controlElement && controlElement.swiper) swiper.controller.control.push(controlElement.swiper); else if (controlElement) {
                        const eventName = `${swiper.params.eventsPrefix}init`;
                        const onControllerSwiper = e => {
                            swiper.controller.control.push(e.detail[0]);
                            swiper.update();
                            controlElement.removeEventListener(eventName, onControllerSwiper);
                        };
                        controlElement.addEventListener(eventName, onControllerSwiper);
                    }
                }));
                return;
            }
            swiper.controller.control = swiper.params.controller.control;
        }));
        on("update", (() => {
            removeSpline();
        }));
        on("resize", (() => {
            removeSpline();
        }));
        on("observerUpdate", (() => {
            removeSpline();
        }));
        on("setTranslate", ((_s, translate, byController) => {
            if (!swiper.controller.control || swiper.controller.control.destroyed) return;
            swiper.controller.setTranslate(translate, byController);
        }));
        on("setTransition", ((_s, duration, byController) => {
            if (!swiper.controller.control || swiper.controller.control.destroyed) return;
            swiper.controller.setTransition(duration, byController);
        }));
        Object.assign(swiper.controller, {
            setTranslate,
            setTransition
        });
    }
    function A11y(_ref) {
        let {swiper, extendParams, on} = _ref;
        extendParams({
            a11y: {
                enabled: true,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                containerRole: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null,
                scrollOnFocus: true
            }
        });
        swiper.a11y = {
            clicked: false
        };
        let liveRegion = null;
        let preventFocusHandler;
        let focusTargetSlideEl;
        let visibilityChangedTimestamp = (new Date).getTime();
        function notify(message) {
            const notification = liveRegion;
            if (notification.length === 0) return;
            notification.innerHTML = "";
            notification.innerHTML = message;
        }
        function getRandomNumber(size) {
            if (size === void 0) size = 16;
            const randomChar = () => Math.round(16 * Math.random()).toString(16);
            return "x".repeat(size).replace(/x/g, randomChar);
        }
        function makeElFocusable(el) {
            el = makeElementsArray(el);
            el.forEach((subEl => {
                subEl.setAttribute("tabIndex", "0");
            }));
        }
        function makeElNotFocusable(el) {
            el = makeElementsArray(el);
            el.forEach((subEl => {
                subEl.setAttribute("tabIndex", "-1");
            }));
        }
        function addElRole(el, role) {
            el = makeElementsArray(el);
            el.forEach((subEl => {
                subEl.setAttribute("role", role);
            }));
        }
        function addElRoleDescription(el, description) {
            el = makeElementsArray(el);
            el.forEach((subEl => {
                subEl.setAttribute("aria-roledescription", description);
            }));
        }
        function addElControls(el, controls) {
            el = makeElementsArray(el);
            el.forEach((subEl => {
                subEl.setAttribute("aria-controls", controls);
            }));
        }
        function addElLabel(el, label) {
            el = makeElementsArray(el);
            el.forEach((subEl => {
                subEl.setAttribute("aria-label", label);
            }));
        }
        function addElId(el, id) {
            el = makeElementsArray(el);
            el.forEach((subEl => {
                subEl.setAttribute("id", id);
            }));
        }
        function addElLive(el, live) {
            el = makeElementsArray(el);
            el.forEach((subEl => {
                subEl.setAttribute("aria-live", live);
            }));
        }
        function disableEl(el) {
            el = makeElementsArray(el);
            el.forEach((subEl => {
                subEl.setAttribute("aria-disabled", true);
            }));
        }
        function enableEl(el) {
            el = makeElementsArray(el);
            el.forEach((subEl => {
                subEl.setAttribute("aria-disabled", false);
            }));
        }
        function onEnterOrSpaceKey(e) {
            if (e.keyCode !== 13 && e.keyCode !== 32) return;
            const params = swiper.params.a11y;
            const targetEl = e.target;
            if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
            if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
                const prevEls = makeElementsArray(swiper.navigation.prevEl);
                const nextEls = makeElementsArray(swiper.navigation.nextEl);
                if (nextEls.includes(targetEl)) {
                    if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
                    if (swiper.isEnd) notify(params.lastSlideMessage); else notify(params.nextSlideMessage);
                }
                if (prevEls.includes(targetEl)) {
                    if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
                    if (swiper.isBeginning) notify(params.firstSlideMessage); else notify(params.prevSlideMessage);
                }
            }
            if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) targetEl.click();
        }
        function updateNavigation() {
            if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
            const {nextEl, prevEl} = swiper.navigation;
            if (prevEl) if (swiper.isBeginning) {
                disableEl(prevEl);
                makeElNotFocusable(prevEl);
            } else {
                enableEl(prevEl);
                makeElFocusable(prevEl);
            }
            if (nextEl) if (swiper.isEnd) {
                disableEl(nextEl);
                makeElNotFocusable(nextEl);
            } else {
                enableEl(nextEl);
                makeElFocusable(nextEl);
            }
        }
        function hasPagination() {
            return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
        }
        function hasClickablePagination() {
            return hasPagination() && swiper.params.pagination.clickable;
        }
        function updatePagination() {
            const params = swiper.params.a11y;
            if (!hasPagination()) return;
            swiper.pagination.bullets.forEach((bulletEl => {
                if (swiper.params.pagination.clickable) {
                    makeElFocusable(bulletEl);
                    if (!swiper.params.pagination.renderBullet) {
                        addElRole(bulletEl, "button");
                        addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
                    }
                }
                if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) bulletEl.setAttribute("aria-current", "true"); else bulletEl.removeAttribute("aria-current");
            }));
        }
        const initNavEl = (el, wrapperId, message) => {
            makeElFocusable(el);
            if (el.tagName !== "BUTTON") {
                addElRole(el, "button");
                el.addEventListener("keydown", onEnterOrSpaceKey);
            }
            addElLabel(el, message);
            addElControls(el, wrapperId);
        };
        const handlePointerDown = e => {
            if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) preventFocusHandler = true;
            swiper.a11y.clicked = true;
        };
        const handlePointerUp = () => {
            preventFocusHandler = false;
            requestAnimationFrame((() => {
                requestAnimationFrame((() => {
                    if (!swiper.destroyed) swiper.a11y.clicked = false;
                }));
            }));
        };
        const onVisibilityChange = e => {
            visibilityChangedTimestamp = (new Date).getTime();
        };
        const handleFocus = e => {
            if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
            if ((new Date).getTime() - visibilityChangedTimestamp < 100) return;
            const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
            if (!slideEl || !swiper.slides.includes(slideEl)) return;
            focusTargetSlideEl = slideEl;
            const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
            const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
            if (isActive || isVisible) return;
            if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
            if (swiper.isHorizontal()) swiper.el.scrollLeft = 0; else swiper.el.scrollTop = 0;
            requestAnimationFrame((() => {
                if (preventFocusHandler) return;
                if (swiper.params.loop) swiper.slideToLoop(parseInt(slideEl.getAttribute("data-swiper-slide-index")), 0); else swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
                preventFocusHandler = false;
            }));
        };
        const initSlides = () => {
            const params = swiper.params.a11y;
            if (params.itemRoleDescriptionMessage) addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
            if (params.slideRole) addElRole(swiper.slides, params.slideRole);
            const slidesLength = swiper.slides.length;
            if (params.slideLabelMessage) swiper.slides.forEach(((slideEl, index) => {
                const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
                const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
                addElLabel(slideEl, ariaLabelMessage);
            }));
        };
        const init = () => {
            const params = swiper.params.a11y;
            swiper.el.append(liveRegion);
            const containerEl = swiper.el;
            if (params.containerRoleDescriptionMessage) addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
            if (params.containerMessage) addElLabel(containerEl, params.containerMessage);
            if (params.containerRole) addElRole(containerEl, params.containerRole);
            const wrapperEl = swiper.wrapperEl;
            const wrapperId = params.id || wrapperEl.getAttribute("id") || `swiper-wrapper-${getRandomNumber(16)}`;
            const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
            addElId(wrapperEl, wrapperId);
            addElLive(wrapperEl, live);
            initSlides();
            let {nextEl, prevEl} = swiper.navigation ? swiper.navigation : {};
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            if (nextEl) nextEl.forEach((el => initNavEl(el, wrapperId, params.nextSlideMessage)));
            if (prevEl) prevEl.forEach((el => initNavEl(el, wrapperId, params.prevSlideMessage)));
            if (hasClickablePagination()) {
                const paginationEl = makeElementsArray(swiper.pagination.el);
                paginationEl.forEach((el => {
                    el.addEventListener("keydown", onEnterOrSpaceKey);
                }));
            }
            const document = getDocument();
            document.addEventListener("visibilitychange", onVisibilityChange);
            swiper.el.addEventListener("focus", handleFocus, true);
            swiper.el.addEventListener("focus", handleFocus, true);
            swiper.el.addEventListener("pointerdown", handlePointerDown, true);
            swiper.el.addEventListener("pointerup", handlePointerUp, true);
        };
        function destroy() {
            if (liveRegion) liveRegion.remove();
            let {nextEl, prevEl} = swiper.navigation ? swiper.navigation : {};
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            if (nextEl) nextEl.forEach((el => el.removeEventListener("keydown", onEnterOrSpaceKey)));
            if (prevEl) prevEl.forEach((el => el.removeEventListener("keydown", onEnterOrSpaceKey)));
            if (hasClickablePagination()) {
                const paginationEl = makeElementsArray(swiper.pagination.el);
                paginationEl.forEach((el => {
                    el.removeEventListener("keydown", onEnterOrSpaceKey);
                }));
            }
            const document = getDocument();
            document.removeEventListener("visibilitychange", onVisibilityChange);
            if (swiper.el && typeof swiper.el !== "string") {
                swiper.el.removeEventListener("focus", handleFocus, true);
                swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
                swiper.el.removeEventListener("pointerup", handlePointerUp, true);
            }
        }
        on("beforeInit", (() => {
            liveRegion = createElement("span", swiper.params.a11y.notificationClass);
            liveRegion.setAttribute("aria-live", "assertive");
            liveRegion.setAttribute("aria-atomic", "true");
        }));
        on("afterInit", (() => {
            if (!swiper.params.a11y.enabled) return;
            init();
        }));
        on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
            if (!swiper.params.a11y.enabled) return;
            initSlides();
        }));
        on("fromEdge toEdge afterInit lock unlock", (() => {
            if (!swiper.params.a11y.enabled) return;
            updateNavigation();
        }));
        on("paginationUpdate", (() => {
            if (!swiper.params.a11y.enabled) return;
            updatePagination();
        }));
        on("destroy", (() => {
            if (!swiper.params.a11y.enabled) return;
            destroy();
        }));
    }
    function History(_ref) {
        let {swiper, extendParams, on} = _ref;
        extendParams({
            history: {
                enabled: false,
                root: "",
                replaceState: false,
                key: "slides",
                keepQuery: false
            }
        });
        let initialized = false;
        let paths = {};
        const slugify = text => text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
        const getPathValues = urlOverride => {
            const window = getWindow();
            let location;
            if (urlOverride) location = new URL(urlOverride); else location = window.location;
            const pathArray = location.pathname.slice(1).split("/").filter((part => part !== ""));
            const total = pathArray.length;
            const key = pathArray[total - 2];
            const value = pathArray[total - 1];
            return {
                key,
                value
            };
        };
        const setHistory = (key, index) => {
            const window = getWindow();
            if (!initialized || !swiper.params.history.enabled) return;
            let location;
            if (swiper.params.url) location = new URL(swiper.params.url); else location = window.location;
            const slide = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
            let value = slugify(slide.getAttribute("data-history"));
            if (swiper.params.history.root.length > 0) {
                let root = swiper.params.history.root;
                if (root[root.length - 1] === "/") root = root.slice(0, root.length - 1);
                value = `${root}/${key ? `${key}/` : ""}${value}`;
            } else if (!location.pathname.includes(key)) value = `${key ? `${key}/` : ""}${value}`;
            if (swiper.params.history.keepQuery) value += location.search;
            const currentState = window.history.state;
            if (currentState && currentState.value === value) return;
            if (swiper.params.history.replaceState) window.history.replaceState({
                value
            }, null, value); else window.history.pushState({
                value
            }, null, value);
        };
        const scrollToSlide = (speed, value, runCallbacks) => {
            if (value) for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                const slide = swiper.slides[i];
                const slideHistory = slugify(slide.getAttribute("data-history"));
                if (slideHistory === value) {
                    const index = swiper.getSlideIndex(slide);
                    swiper.slideTo(index, speed, runCallbacks);
                }
            } else swiper.slideTo(0, speed, runCallbacks);
        };
        const setHistoryPopState = () => {
            paths = getPathValues(swiper.params.url);
            scrollToSlide(swiper.params.speed, paths.value, false);
        };
        const init = () => {
            const window = getWindow();
            if (!swiper.params.history) return;
            if (!window.history || !window.history.pushState) {
                swiper.params.history.enabled = false;
                swiper.params.hashNavigation.enabled = true;
                return;
            }
            initialized = true;
            paths = getPathValues(swiper.params.url);
            if (!paths.key && !paths.value) {
                if (!swiper.params.history.replaceState) window.addEventListener("popstate", setHistoryPopState);
                return;
            }
            scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
            if (!swiper.params.history.replaceState) window.addEventListener("popstate", setHistoryPopState);
        };
        const destroy = () => {
            const window = getWindow();
            if (!swiper.params.history.replaceState) window.removeEventListener("popstate", setHistoryPopState);
        };
        on("init", (() => {
            if (swiper.params.history.enabled) init();
        }));
        on("destroy", (() => {
            if (swiper.params.history.enabled) destroy();
        }));
        on("transitionEnd _freeModeNoMomentumRelease", (() => {
            if (initialized) setHistory(swiper.params.history.key, swiper.activeIndex);
        }));
        on("slideChange", (() => {
            if (initialized && swiper.params.cssMode) setHistory(swiper.params.history.key, swiper.activeIndex);
        }));
    }
    function HashNavigation(_ref) {
        let {swiper, extendParams, emit, on} = _ref;
        let initialized = false;
        const document = getDocument();
        const window = getWindow();
        extendParams({
            hashNavigation: {
                enabled: false,
                replaceState: false,
                watchState: false,
                getSlideIndex(_s, hash) {
                    if (swiper.virtual && swiper.params.virtual.enabled) {
                        const slideWithHash = swiper.slides.filter((slideEl => slideEl.getAttribute("data-hash") === hash))[0];
                        if (!slideWithHash) return 0;
                        const index = parseInt(slideWithHash.getAttribute("data-swiper-slide-index"), 10);
                        return index;
                    }
                    return swiper.getSlideIndex(elementChildren(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
                }
            }
        });
        const onHashChange = () => {
            emit("hashChange");
            const newHash = document.location.hash.replace("#", "");
            const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
            const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") : "";
            if (newHash !== activeSlideHash) {
                const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
                if (typeof newIndex === "undefined" || Number.isNaN(newIndex)) return;
                swiper.slideTo(newIndex);
            }
        };
        const setHash = () => {
            if (!initialized || !swiper.params.hashNavigation.enabled) return;
            const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
            const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") || activeSlideEl.getAttribute("data-history") : "";
            if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
                window.history.replaceState(null, null, `#${activeSlideHash}` || "");
                emit("hashSet");
            } else {
                document.location.hash = activeSlideHash || "";
                emit("hashSet");
            }
        };
        const init = () => {
            if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
            initialized = true;
            const hash = document.location.hash.replace("#", "");
            if (hash) {
                const speed = 0;
                const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
                swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
            }
            if (swiper.params.hashNavigation.watchState) window.addEventListener("hashchange", onHashChange);
        };
        const destroy = () => {
            if (swiper.params.hashNavigation.watchState) window.removeEventListener("hashchange", onHashChange);
        };
        on("init", (() => {
            if (swiper.params.hashNavigation.enabled) init();
        }));
        on("destroy", (() => {
            if (swiper.params.hashNavigation.enabled) destroy();
        }));
        on("transitionEnd _freeModeNoMomentumRelease", (() => {
            if (initialized) setHash();
        }));
        on("slideChange", (() => {
            if (initialized && swiper.params.cssMode) setHash();
        }));
    }
    function Autoplay(_ref) {
        let {swiper, extendParams, on, emit, params} = _ref;
        swiper.autoplay = {
            running: false,
            paused: false,
            timeLeft: 0
        };
        extendParams({
            autoplay: {
                enabled: false,
                delay: 3e3,
                waitForTransition: true,
                disableOnInteraction: false,
                stopOnLastSlide: false,
                reverseDirection: false,
                pauseOnMouseEnter: false
            }
        });
        let timeout;
        let raf;
        let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
        let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
        let autoplayTimeLeft;
        let autoplayStartTime = (new Date).getTime();
        let wasPaused;
        let isTouched;
        let pausedByTouch;
        let touchStartTimeout;
        let slideChanged;
        let pausedByInteraction;
        let pausedByPointerEnter;
        function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
            if (e.target !== swiper.wrapperEl) return;
            swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
            if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) return;
            resume();
        }
        const calcTimeLeft = () => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            if (swiper.autoplay.paused) wasPaused = true; else if (wasPaused) {
                autoplayDelayCurrent = autoplayTimeLeft;
                wasPaused = false;
            }
            const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (new Date).getTime();
            swiper.autoplay.timeLeft = timeLeft;
            emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
            raf = requestAnimationFrame((() => {
                calcTimeLeft();
            }));
        };
        const getSlideDelay = () => {
            let activeSlideEl;
            if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.filter((slideEl => slideEl.classList.contains("swiper-slide-active")))[0]; else activeSlideEl = swiper.slides[swiper.activeIndex];
            if (!activeSlideEl) return;
            const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
            return currentSlideDelay;
        };
        const run = delayForce => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            cancelAnimationFrame(raf);
            calcTimeLeft();
            let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
            autoplayDelayTotal = swiper.params.autoplay.delay;
            autoplayDelayCurrent = swiper.params.autoplay.delay;
            const currentSlideDelay = getSlideDelay();
            if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
                delay = currentSlideDelay;
                autoplayDelayTotal = currentSlideDelay;
                autoplayDelayCurrent = currentSlideDelay;
            }
            autoplayTimeLeft = delay;
            const speed = swiper.params.speed;
            const proceed = () => {
                if (!swiper || swiper.destroyed) return;
                if (swiper.params.autoplay.reverseDirection) {
                    if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                        swiper.slidePrev(speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                        emit("autoplay");
                    }
                } else if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                    swiper.slideNext(speed, true, true);
                    emit("autoplay");
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(0, speed, true, true);
                    emit("autoplay");
                }
                if (swiper.params.cssMode) {
                    autoplayStartTime = (new Date).getTime();
                    requestAnimationFrame((() => {
                        run();
                    }));
                }
            };
            if (delay > 0) {
                clearTimeout(timeout);
                timeout = setTimeout((() => {
                    proceed();
                }), delay);
            } else requestAnimationFrame((() => {
                proceed();
            }));
            return delay;
        };
        const start = () => {
            autoplayStartTime = (new Date).getTime();
            swiper.autoplay.running = true;
            run();
            emit("autoplayStart");
        };
        const stop = () => {
            swiper.autoplay.running = false;
            clearTimeout(timeout);
            cancelAnimationFrame(raf);
            emit("autoplayStop");
        };
        const pause = (internal, reset) => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            clearTimeout(timeout);
            if (!internal) pausedByInteraction = true;
            const proceed = () => {
                emit("autoplayPause");
                if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd); else resume();
            };
            swiper.autoplay.paused = true;
            if (reset) {
                if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
                slideChanged = false;
                proceed();
                return;
            }
            const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
            autoplayTimeLeft = delay - ((new Date).getTime() - autoplayStartTime);
            if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
            if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
            proceed();
        };
        const resume = () => {
            if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
            autoplayStartTime = (new Date).getTime();
            if (pausedByInteraction) {
                pausedByInteraction = false;
                run(autoplayTimeLeft);
            } else run();
            swiper.autoplay.paused = false;
            emit("autoplayResume");
        };
        const onVisibilityChange = () => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            const document = ssr_window_esm_getDocument();
            if (document.visibilityState === "hidden") {
                pausedByInteraction = true;
                pause(true);
            }
            if (document.visibilityState === "visible") resume();
        };
        const onPointerEnter = e => {
            if (e.pointerType !== "mouse") return;
            pausedByInteraction = true;
            pausedByPointerEnter = true;
            if (swiper.animating || swiper.autoplay.paused) return;
            pause(true);
        };
        const onPointerLeave = e => {
            if (e.pointerType !== "mouse") return;
            pausedByPointerEnter = false;
            if (swiper.autoplay.paused) resume();
        };
        const attachMouseEvents = () => {
            if (swiper.params.autoplay.pauseOnMouseEnter) {
                swiper.el.addEventListener("pointerenter", onPointerEnter);
                swiper.el.addEventListener("pointerleave", onPointerLeave);
            }
        };
        const detachMouseEvents = () => {
            if (swiper.el && typeof swiper.el !== "string") {
                swiper.el.removeEventListener("pointerenter", onPointerEnter);
                swiper.el.removeEventListener("pointerleave", onPointerLeave);
            }
        };
        const attachDocumentEvents = () => {
            const document = ssr_window_esm_getDocument();
            document.addEventListener("visibilitychange", onVisibilityChange);
        };
        const detachDocumentEvents = () => {
            const document = ssr_window_esm_getDocument();
            document.removeEventListener("visibilitychange", onVisibilityChange);
        };
        on("init", (() => {
            if (swiper.params.autoplay.enabled) {
                attachMouseEvents();
                attachDocumentEvents();
                start();
            }
        }));
        on("destroy", (() => {
            detachMouseEvents();
            detachDocumentEvents();
            if (swiper.autoplay.running) stop();
        }));
        on("_freeModeStaticRelease", (() => {
            if (pausedByTouch || pausedByInteraction) resume();
        }));
        on("_freeModeNoMomentumRelease", (() => {
            if (!swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
        }));
        on("beforeTransitionStart", ((_s, speed, internal) => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
        }));
        on("sliderFirstMove", (() => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            if (swiper.params.autoplay.disableOnInteraction) {
                stop();
                return;
            }
            isTouched = true;
            pausedByTouch = false;
            pausedByInteraction = false;
            touchStartTimeout = setTimeout((() => {
                pausedByInteraction = true;
                pausedByTouch = true;
                pause(true);
            }), 200);
        }));
        on("touchEnd", (() => {
            if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
            clearTimeout(touchStartTimeout);
            clearTimeout(timeout);
            if (swiper.params.autoplay.disableOnInteraction) {
                pausedByTouch = false;
                isTouched = false;
                return;
            }
            if (pausedByTouch && swiper.params.cssMode) resume();
            pausedByTouch = false;
            isTouched = false;
        }));
        on("slideChange", (() => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            slideChanged = true;
        }));
        Object.assign(swiper.autoplay, {
            start,
            stop,
            pause,
            resume
        });
    }
    function Thumb(_ref) {
        let {swiper, extendParams, on} = _ref;
        extendParams({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: true,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let initialized = false;
        let swiperCreated = false;
        swiper.thumbs = {
            swiper: null
        };
        function onThumbClick() {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            const clickedIndex = thumbsSwiper.clickedIndex;
            const clickedSlide = thumbsSwiper.clickedSlide;
            if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
            if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
            let slideToIndex;
            if (thumbsSwiper.params.loop) slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10); else slideToIndex = clickedIndex;
            if (swiper.params.loop) swiper.slideToLoop(slideToIndex); else swiper.slideTo(slideToIndex);
        }
        function init() {
            const {thumbs: thumbsParams} = swiper.params;
            if (initialized) return false;
            initialized = true;
            const SwiperClass = swiper.constructor;
            if (thumbsParams.swiper instanceof SwiperClass) {
                swiper.thumbs.swiper = thumbsParams.swiper;
                Object.assign(swiper.thumbs.swiper.originalParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                Object.assign(swiper.thumbs.swiper.params, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                swiper.thumbs.swiper.update();
            } else if (isObject(thumbsParams.swiper)) {
                const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
                Object.assign(thumbsSwiperParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
                swiperCreated = true;
            }
            swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
            swiper.thumbs.swiper.on("tap", onThumbClick);
            return true;
        }
        function update(initial) {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
            let thumbsToActivate = 1;
            const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
            if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
            if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
            thumbsToActivate = Math.floor(thumbsToActivate);
            thumbsSwiper.slides.forEach((slideEl => slideEl.classList.remove(thumbActiveClass)));
            if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for (let i = 0; i < thumbsToActivate; i += 1) elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach((slideEl => {
                slideEl.classList.add(thumbActiveClass);
            })); else for (let i = 0; i < thumbsToActivate; i += 1) if (thumbsSwiper.slides[swiper.realIndex + i]) thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
            const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
            const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
            if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                const currentThumbsIndex = thumbsSwiper.activeIndex;
                let newThumbsIndex;
                let direction;
                if (thumbsSwiper.params.loop) {
                    const newThumbsSlide = thumbsSwiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") === `${swiper.realIndex}`))[0];
                    newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
                    direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
                } else {
                    newThumbsIndex = swiper.realIndex;
                    direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
                }
                if (useOffset) newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
                if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                    if (thumbsSwiper.params.centeredSlides) if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1; else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1; else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
                    thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
                }
            }
        }
        on("beforeInit", (() => {
            const {thumbs} = swiper.params;
            if (!thumbs || !thumbs.swiper) return;
            if (typeof thumbs.swiper === "string" || thumbs.swiper instanceof HTMLElement) {
                const document = getDocument();
                const getThumbsElementAndInit = () => {
                    const thumbsElement = typeof thumbs.swiper === "string" ? document.querySelector(thumbs.swiper) : thumbs.swiper;
                    if (thumbsElement && thumbsElement.swiper) {
                        thumbs.swiper = thumbsElement.swiper;
                        init();
                        update(true);
                    } else if (thumbsElement) {
                        const eventName = `${swiper.params.eventsPrefix}init`;
                        const onThumbsSwiper = e => {
                            thumbs.swiper = e.detail[0];
                            thumbsElement.removeEventListener(eventName, onThumbsSwiper);
                            init();
                            update(true);
                            thumbs.swiper.update();
                            swiper.update();
                        };
                        thumbsElement.addEventListener(eventName, onThumbsSwiper);
                    }
                    return thumbsElement;
                };
                const watchForThumbsToAppear = () => {
                    if (swiper.destroyed) return;
                    const thumbsElement = getThumbsElementAndInit();
                    if (!thumbsElement) requestAnimationFrame(watchForThumbsToAppear);
                };
                requestAnimationFrame(watchForThumbsToAppear);
            } else {
                init();
                update(true);
            }
        }));
        on("slideChange update resize observerUpdate", (() => {
            update();
        }));
        on("setTransition", ((_s, duration) => {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            thumbsSwiper.setTransition(duration);
        }));
        on("beforeDestroy", (() => {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            if (swiperCreated) thumbsSwiper.destroy();
        }));
        Object.assign(swiper.thumbs, {
            init,
            update
        });
    }
    function freeMode(_ref) {
        let {swiper, extendParams, emit, once} = _ref;
        extendParams({
            freeMode: {
                enabled: false,
                momentum: true,
                momentumRatio: 1,
                momentumBounce: true,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: false,
                minimumVelocity: .02
            }
        });
        function onTouchStart() {
            if (swiper.params.cssMode) return;
            const translate = swiper.getTranslate();
            swiper.setTranslate(translate);
            swiper.setTransition(0);
            swiper.touchEventsData.velocities.length = 0;
            swiper.freeMode.onTouchEnd({
                currentPos: swiper.rtl ? swiper.translate : -swiper.translate
            });
        }
        function onTouchMove() {
            if (swiper.params.cssMode) return;
            const {touchEventsData: data, touches} = swiper;
            if (data.velocities.length === 0) data.velocities.push({
                position: touches[swiper.isHorizontal() ? "startX" : "startY"],
                time: data.touchStartTime
            });
            data.velocities.push({
                position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
                time: now()
            });
        }
        function onTouchEnd(_ref2) {
            let {currentPos} = _ref2;
            if (swiper.params.cssMode) return;
            const {params, wrapperEl, rtlTranslate: rtl, snapGrid, touchEventsData: data} = swiper;
            const touchEndTime = now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (currentPos < -swiper.minTranslate()) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (currentPos > -swiper.maxTranslate()) {
                if (swiper.slides.length < snapGrid.length) swiper.slideTo(snapGrid.length - 1); else swiper.slideTo(swiper.slides.length - 1);
                return;
            }
            if (params.freeMode.momentum) {
                if (data.velocities.length > 1) {
                    const lastMoveEvent = data.velocities.pop();
                    const velocityEvent = data.velocities.pop();
                    const distance = lastMoveEvent.position - velocityEvent.position;
                    const time = lastMoveEvent.time - velocityEvent.time;
                    swiper.velocity = distance / time;
                    swiper.velocity /= 2;
                    if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) swiper.velocity = 0;
                    if (time > 150 || now() - lastMoveEvent.time > 300) swiper.velocity = 0;
                } else swiper.velocity = 0;
                swiper.velocity *= params.freeMode.momentumVelocityRatio;
                data.velocities.length = 0;
                let momentumDuration = 1e3 * params.freeMode.momentumRatio;
                const momentumDistance = swiper.velocity * momentumDuration;
                let newPosition = swiper.translate + momentumDistance;
                if (rtl) newPosition = -newPosition;
                let doBounce = false;
                let afterBouncePosition;
                const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
                let needsLoopFix;
                if (newPosition < swiper.maxTranslate()) {
                    if (params.freeMode.momentumBounce) {
                        if (newPosition + swiper.maxTranslate() < -bounceAmount) newPosition = swiper.maxTranslate() - bounceAmount;
                        afterBouncePosition = swiper.maxTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else newPosition = swiper.maxTranslate();
                    if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (newPosition > swiper.minTranslate()) {
                    if (params.freeMode.momentumBounce) {
                        if (newPosition - swiper.minTranslate() > bounceAmount) newPosition = swiper.minTranslate() + bounceAmount;
                        afterBouncePosition = swiper.minTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else newPosition = swiper.minTranslate();
                    if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (params.freeMode.sticky) {
                    let nextSlide;
                    for (let j = 0; j < snapGrid.length; j += 1) if (snapGrid[j] > -newPosition) {
                        nextSlide = j;
                        break;
                    }
                    if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") newPosition = snapGrid[nextSlide]; else newPosition = snapGrid[nextSlide - 1];
                    newPosition = -newPosition;
                }
                if (needsLoopFix) once("transitionEnd", (() => {
                    swiper.loopFix();
                }));
                if (swiper.velocity !== 0) {
                    if (rtl) momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity); else momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                    if (params.freeMode.sticky) {
                        const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                        const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                        if (moveDistance < currentSlideSize) momentumDuration = params.speed; else if (moveDistance < 2 * currentSlideSize) momentumDuration = params.speed * 1.5; else momentumDuration = params.speed * 2.5;
                    }
                } else if (params.freeMode.sticky) {
                    swiper.slideToClosest();
                    return;
                }
                if (params.freeMode.momentumBounce && doBounce) {
                    swiper.updateProgress(afterBouncePosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    swiper.animating = true;
                    elementTransitionEnd(wrapperEl, (() => {
                        if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                        emit("momentumBounce");
                        swiper.setTransition(params.speed);
                        setTimeout((() => {
                            swiper.setTranslate(afterBouncePosition);
                            elementTransitionEnd(wrapperEl, (() => {
                                if (!swiper || swiper.destroyed) return;
                                swiper.transitionEnd();
                            }));
                        }), 0);
                    }));
                } else if (swiper.velocity) {
                    emit("_freeModeNoMomentumRelease");
                    swiper.updateProgress(newPosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    if (!swiper.animating) {
                        swiper.animating = true;
                        elementTransitionEnd(wrapperEl, (() => {
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        }));
                    }
                } else swiper.updateProgress(newPosition);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
            } else if (params.freeMode) emit("_freeModeNoMomentumRelease");
            if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
                emit("_freeModeStaticRelease");
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
        }
        Object.assign(swiper, {
            freeMode: {
                onTouchStart,
                onTouchMove,
                onTouchEnd
            }
        });
    }
    function effect_target_effectTarget(effectParams, slideEl) {
        const transformEl = getSlideTransformEl(slideEl);
        if (transformEl !== slideEl) {
            transformEl.style.backfaceVisibility = "hidden";
            transformEl.style["-webkit-backface-visibility"] = "hidden";
        }
        return transformEl;
    }
    function effect_virtual_transition_end_effectVirtualTransitionEnd(_ref) {
        let {swiper, duration, transformElements, allSlides} = _ref;
        const {activeIndex} = swiper;
        const getSlide = el => {
            if (!el.parentElement) {
                const slide = swiper.slides.filter((slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode))[0];
                return slide;
            }
            return el.parentElement;
        };
        if (swiper.params.virtualTranslate && duration !== 0) {
            let eventTriggered = false;
            let transitionEndTarget;
            if (allSlides) transitionEndTarget = transformElements; else transitionEndTarget = transformElements.filter((transformEl => {
                const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
                return swiper.getSlideIndex(el) === activeIndex;
            }));
            transitionEndTarget.forEach((el => {
                elementTransitionEnd(el, (() => {
                    if (eventTriggered) return;
                    if (!swiper || swiper.destroyed) return;
                    eventTriggered = true;
                    swiper.animating = false;
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }));
            }));
        }
    }
    function EffectFade(_ref) {
        let {swiper, extendParams, on} = _ref;
        extendParams({
            fadeEffect: {
                crossFade: false
            }
        });
        const setTranslate = () => {
            const {slides} = swiper;
            const params = swiper.params.fadeEffect;
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = swiper.slides[i];
                const offset = slideEl.swiperSlideOffset;
                let tx = -offset;
                if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                let ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                }
                const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.opacity = slideOpacity;
                targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map((slideEl => getSlideTransformEl(slideEl)));
            transformElements.forEach((el => {
                el.style.transitionDuration = `${duration}ms`;
            }));
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformElements,
                allSlides: true
            });
        };
        effectInit({
            effect: "fade",
            swiper,
            on,
            setTranslate,
            setTransition,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
        });
    }
    function EffectCube(_ref) {
        let {swiper, extendParams, on} = _ref;
        extendParams({
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: .94
            }
        });
        const createSlideShadows = (slideEl, progress, isHorizontal) => {
            let shadowBefore = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
            let shadowAfter = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
            if (!shadowBefore) {
                shadowBefore = createElement("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "left" : "top"}`.split(" "));
                slideEl.append(shadowBefore);
            }
            if (!shadowAfter) {
                shadowAfter = createElement("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}`.split(" "));
                slideEl.append(shadowAfter);
            }
            if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
            if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
        };
        const recreateShadows = () => {
            const isHorizontal = swiper.isHorizontal();
            swiper.slides.forEach((slideEl => {
                const progress = Math.max(Math.min(slideEl.progress, 1), -1);
                createSlideShadows(slideEl, progress, isHorizontal);
            }));
        };
        const setTranslate = () => {
            const {el, wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize, browser} = swiper;
            const r = getRotateFix(swiper);
            const params = swiper.params.cubeEffect;
            const isHorizontal = swiper.isHorizontal();
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let wrapperRotate = 0;
            let cubeShadowEl;
            if (params.shadow) if (isHorizontal) {
                cubeShadowEl = swiper.wrapperEl.querySelector(".swiper-cube-shadow");
                if (!cubeShadowEl) {
                    cubeShadowEl = createElement("div", "swiper-cube-shadow");
                    swiper.wrapperEl.append(cubeShadowEl);
                }
                cubeShadowEl.style.height = `${swiperWidth}px`;
            } else {
                cubeShadowEl = el.querySelector(".swiper-cube-shadow");
                if (!cubeShadowEl) {
                    cubeShadowEl = createElement("div", "swiper-cube-shadow");
                    el.append(cubeShadowEl);
                }
            }
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = slides[i];
                let slideIndex = i;
                if (isVirtual) slideIndex = parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10);
                let slideAngle = slideIndex * 90;
                let round = Math.floor(slideAngle / 360);
                if (rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                }
                const progress = Math.max(Math.min(slideEl.progress, 1), -1);
                let tx = 0;
                let ty = 0;
                let tz = 0;
                if (slideIndex % 4 === 0) {
                    tx = -round * 4 * swiperSize;
                    tz = 0;
                } else if ((slideIndex - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * swiperSize;
                } else if ((slideIndex - 2) % 4 === 0) {
                    tx = swiperSize + round * 4 * swiperSize;
                    tz = swiperSize;
                } else if ((slideIndex - 3) % 4 === 0) {
                    tx = -swiperSize;
                    tz = 3 * swiperSize + swiperSize * 4 * round;
                }
                if (rtl) tx = -tx;
                if (!isHorizontal) {
                    ty = tx;
                    tx = 0;
                }
                const transform = `rotateX(${r(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
                if (progress <= 1 && progress > -1) {
                    wrapperRotate = slideIndex * 90 + progress * 90;
                    if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                }
                slideEl.style.transform = transform;
                if (params.slideShadows) createSlideShadows(slideEl, progress, isHorizontal);
            }
            wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
            wrapperEl.style["-webkit-transform-origin"] = `50% 50% -${swiperSize / 2}px`;
            if (params.shadow) if (isHorizontal) cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`; else {
                const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                const scale1 = params.shadowScale;
                const scale2 = params.shadowScale / multiplier;
                const offset = params.shadowOffset;
                cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
            }
            const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
            wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;
            wrapperEl.style.setProperty("--swiper-cube-translate-z", `${zFactor}px`);
        };
        const setTransition = duration => {
            const {el, slides} = swiper;
            slides.forEach((slideEl => {
                slideEl.style.transitionDuration = `${duration}ms`;
                slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((subEl => {
                    subEl.style.transitionDuration = `${duration}ms`;
                }));
            }));
            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                const shadowEl = el.querySelector(".swiper-cube-shadow");
                if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
            }
        };
        effectInit({
            effect: "cube",
            swiper,
            on,
            setTranslate,
            setTransition,
            recreateShadows,
            getEffectParams: () => swiper.params.cubeEffect,
            perspective: () => true,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
            })
        });
    }
    function create_shadow_createShadow(suffix, slideEl, side) {
        const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}${suffix ? ` swiper-slide-shadow-${suffix}` : ""}`;
        const shadowContainer = getSlideTransformEl(slideEl);
        let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(" ").join(".")}`);
        if (!shadowEl) {
            shadowEl = createElement("div", shadowClass.split(" "));
            shadowContainer.append(shadowEl);
        }
        return shadowEl;
    }
    function EffectFlip(_ref) {
        let {swiper, extendParams, on} = _ref;
        extendParams({
            flipEffect: {
                slideShadows: true,
                limitRotation: true
            }
        });
        const createSlideShadows = (slideEl, progress) => {
            let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
            let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
            if (!shadowBefore) shadowBefore = createShadow("flip", slideEl, swiper.isHorizontal() ? "left" : "top");
            if (!shadowAfter) shadowAfter = createShadow("flip", slideEl, swiper.isHorizontal() ? "right" : "bottom");
            if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
            if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
        };
        const recreateShadows = () => {
            swiper.params.flipEffect;
            swiper.slides.forEach((slideEl => {
                let progress = slideEl.progress;
                if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min(slideEl.progress, 1), -1);
                createSlideShadows(slideEl, progress);
            }));
        };
        const setTranslate = () => {
            const {slides, rtlTranslate: rtl} = swiper;
            const params = swiper.params.flipEffect;
            const rotateFix = getRotateFix(swiper);
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = slides[i];
                let progress = slideEl.progress;
                if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min(slideEl.progress, 1), -1);
                const offset = slideEl.swiperSlideOffset;
                const rotate = -180 * progress;
                let rotateY = rotate;
                let rotateX = 0;
                let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                let ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                    rotateX = -rotateY;
                    rotateY = 0;
                } else if (rtl) rotateY = -rotateY;
                slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                if (params.slideShadows) createSlideShadows(slideEl, progress);
                const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.transform = transform;
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map((slideEl => getSlideTransformEl(slideEl)));
            transformElements.forEach((el => {
                el.style.transitionDuration = `${duration}ms`;
                el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl => {
                    shadowEl.style.transitionDuration = `${duration}ms`;
                }));
            }));
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformElements
            });
        };
        effectInit({
            effect: "flip",
            swiper,
            on,
            setTranslate,
            setTransition,
            recreateShadows,
            getEffectParams: () => swiper.params.flipEffect,
            perspective: () => true,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
        });
    }
    function EffectCoverflow(_ref) {
        let {swiper, extendParams, on} = _ref;
        extendParams({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: true
            }
        });
        const setTranslate = () => {
            const {width: swiperWidth, height: swiperHeight, slides, slidesSizesGrid} = swiper;
            const params = swiper.params.coverflowEffect;
            const isHorizontal = swiper.isHorizontal();
            const transform = swiper.translate;
            const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
            const rotate = isHorizontal ? params.rotate : -params.rotate;
            const translate = params.depth;
            const r = getRotateFix(swiper);
            for (let i = 0, length = slides.length; i < length; i += 1) {
                const slideEl = slides[i];
                const slideSize = slidesSizesGrid[i];
                const slideOffset = slideEl.swiperSlideOffset;
                const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
                const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
                let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                let translateZ = -translate * Math.abs(offsetMultiplier);
                let stretch = params.stretch;
                if (typeof stretch === "string" && stretch.indexOf("%") !== -1) stretch = parseFloat(params.stretch) / 100 * slideSize;
                let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
                let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
                let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
                if (Math.abs(translateX) < .001) translateX = 0;
                if (Math.abs(translateY) < .001) translateY = 0;
                if (Math.abs(translateZ) < .001) translateZ = 0;
                if (Math.abs(rotateY) < .001) rotateY = 0;
                if (Math.abs(rotateX) < .001) rotateX = 0;
                if (Math.abs(scale) < .001) scale = 0;
                const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.transform = slideTransform;
                slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                if (params.slideShadows) {
                    let shadowBeforeEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
                    let shadowAfterEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
                    if (!shadowBeforeEl) shadowBeforeEl = createShadow("coverflow", slideEl, isHorizontal ? "left" : "top");
                    if (!shadowAfterEl) shadowAfterEl = createShadow("coverflow", slideEl, isHorizontal ? "right" : "bottom");
                    if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                    if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                }
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map((slideEl => getSlideTransformEl(slideEl)));
            transformElements.forEach((el => {
                el.style.transitionDuration = `${duration}ms`;
                el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl => {
                    shadowEl.style.transitionDuration = `${duration}ms`;
                }));
            }));
        };
        effectInit({
            effect: "coverflow",
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => true,
            overwriteParams: () => ({
                watchSlidesProgress: true
            })
        });
    }
    function EffectCreative(_ref) {
        let {swiper, extendParams, on} = _ref;
        extendParams({
            creativeEffect: {
                limitProgress: 1,
                shadowPerProgress: false,
                progressMultiplier: 1,
                perspective: true,
                prev: {
                    translate: [ 0, 0, 0 ],
                    rotate: [ 0, 0, 0 ],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [ 0, 0, 0 ],
                    rotate: [ 0, 0, 0 ],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const getTranslateValue = value => {
            if (typeof value === "string") return value;
            return `${value}px`;
        };
        const setTranslate = () => {
            const {slides, wrapperEl, slidesSizesGrid} = swiper;
            const params = swiper.params.creativeEffect;
            const {progressMultiplier: multiplier} = params;
            const isCenteredSlides = swiper.params.centeredSlides;
            const rotateFix = getRotateFix(swiper);
            if (isCenteredSlides) {
                const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
                wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
            }
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = slides[i];
                const slideProgress = slideEl.progress;
                const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
                let originalProgress = progress;
                if (!isCenteredSlides) originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
                const offset = slideEl.swiperSlideOffset;
                const t = [ swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0 ];
                const r = [ 0, 0, 0 ];
                let custom = false;
                if (!swiper.isHorizontal()) {
                    t[1] = t[0];
                    t[0] = 0;
                }
                let data = {
                    translate: [ 0, 0, 0 ],
                    rotate: [ 0, 0, 0 ],
                    scale: 1,
                    opacity: 1
                };
                if (progress < 0) {
                    data = params.next;
                    custom = true;
                } else if (progress > 0) {
                    data = params.prev;
                    custom = true;
                }
                t.forEach(((value, index) => {
                    t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
                }));
                r.forEach(((value, index) => {
                    let val = data.rotate[index] * Math.abs(progress * multiplier);
                    r[index] = val;
                }));
                slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                const translateString = t.join(", ");
                const rotateString = `rotateX(${rotateFix(r[0])}deg) rotateY(${rotateFix(r[1])}deg) rotateZ(${rotateFix(r[2])}deg)`;
                const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
                const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
                const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
                if (custom && data.shadow || !custom) {
                    let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
                    if (!shadowEl && data.shadow) shadowEl = createShadow("creative", slideEl);
                    if (shadowEl) {
                        const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                        shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                    }
                }
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.transform = transform;
                targetEl.style.opacity = opacityString;
                if (data.origin) targetEl.style.transformOrigin = data.origin;
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map((slideEl => getSlideTransformEl(slideEl)));
            transformElements.forEach((el => {
                el.style.transitionDuration = `${duration}ms`;
                el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl => {
                    shadowEl.style.transitionDuration = `${duration}ms`;
                }));
            }));
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformElements,
                allSlides: true
            });
        };
        effectInit({
            effect: "creative",
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => swiper.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
        });
    }
    function EffectCards(_ref) {
        let {swiper, extendParams, on} = _ref;
        extendParams({
            cardsEffect: {
                slideShadows: true,
                rotate: true,
                perSlideRotate: 2,
                perSlideOffset: 8
            }
        });
        const setTranslate = () => {
            const {slides, activeIndex, rtlTranslate: rtl} = swiper;
            const params = swiper.params.cardsEffect;
            const {startTranslate, isTouched} = swiper.touchEventsData;
            const currentTranslate = rtl ? -swiper.translate : swiper.translate;
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = slides[i];
                const slideProgress = slideEl.progress;
                const progress = Math.min(Math.max(slideProgress, -4), 4);
                let offset = slideEl.swiperSlideOffset;
                if (swiper.params.centeredSlides && !swiper.params.cssMode) swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
                if (swiper.params.centeredSlides && swiper.params.cssMode) offset -= slides[0].swiperSlideOffset;
                let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                let tY = 0;
                const tZ = -100 * Math.abs(progress);
                let scale = 1;
                let rotate = -params.perSlideRotate * progress;
                let tXAdd = params.perSlideOffset - Math.abs(progress) * .75;
                const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
                const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
                const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
                if (isSwipeToNext || isSwipeToPrev) {
                    const subProgress = (1 - Math.abs((Math.abs(progress) - .5) / .5)) ** .5;
                    rotate += -28 * progress * subProgress;
                    scale += -.5 * subProgress;
                    tXAdd += 96 * subProgress;
                    tY = `${-25 * subProgress * Math.abs(progress)}%`;
                }
                if (progress < 0) tX = `calc(${tX}px ${rtl ? "-" : "+"} (${tXAdd * Math.abs(progress)}%))`; else if (progress > 0) tX = `calc(${tX}px ${rtl ? "-" : "+"} (-${tXAdd * Math.abs(progress)}%))`; else tX = `${tX}px`;
                if (!swiper.isHorizontal()) {
                    const prevY = tY;
                    tY = tX;
                    tX = prevY;
                }
                const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
                const transform = `\n        translate3d(${tX}, ${tY}, ${tZ}px)\n        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)\n        scale(${scaleString})\n      `;
                if (params.slideShadows) {
                    let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
                    if (!shadowEl) shadowEl = createShadow("cards", slideEl);
                    if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - .5) / .5, 0), 1);
                }
                slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.transform = transform;
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map((slideEl => getSlideTransformEl(slideEl)));
            transformElements.forEach((el => {
                el.style.transitionDuration = `${duration}ms`;
                el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl => {
                    shadowEl.style.transitionDuration = `${duration}ms`;
                }));
            }));
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformElements
            });
        };
        effectInit({
            effect: "cards",
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => true,
            overwriteParams: () => ({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
        });
    }
    function slider() {
        const negativeSlider = document.querySelector(".negative__slider");
        if (negativeSlider && window.matchMedia("(max-width:744px)").matches) {
            new Swiper(negativeSlider, {
                speed: 700,
                modules: [ Autoplay, Pagination ],
                spaceBetween: 16,
                slidesPerView: "auto",
                pagination: {
                    el: ".negative__pagination",
                    clickable: true
                },
                autoplay: {
                    delay: 4e3
                }
            });
        }
        const tariffsSliders = document.querySelectorAll(".tariffs__slider");
        if (tariffsSliders.length && window.matchMedia("(max-width:1199px)").matches) tariffsSliders.forEach((slider => {
            new Swiper(slider, {
                speed: 700,
                modules: [ Autoplay, Pagination ],
                spaceBetween: 8,
                slidesPerView: "auto",
                pagination: {
                    el: slider.closest(".tab").querySelector(".tariffs__pagination"),
                    clickable: true
                },
                autoplay: {
                    delay: 4e3
                },
                breakpoints: {
                    561: {
                        spaceBetween: 24
                    }
                }
            });
        }));
    }
    function negativeScroll() {
        const slides = document.querySelectorAll(".negative__slider .swiper-slide");
        if (slides.length) {
            const mainContent = document.querySelector(".negative__contnet");
            const options = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            const callback = function(entries, observer) {
                entries.forEach((e => {
                    if (e.isIntersecting) {
                        const content = e.target.querySelector(".negative__slider-content").textContent;
                        mainContent.textContent = content;
                    }
                }));
            };
            const observer = new IntersectionObserver(callback, options);
            slides.forEach((s => {
                observer.observe(s);
            }));
        }
    }
    function tab() {
        const buttonsTab = document.querySelectorAll("[data-tab-btn]");
        const tabs = document.querySelectorAll(".tab");
        if (buttonsTab.length) buttonsTab.forEach((btn => {
            btn.addEventListener("click", (e => {
                e.preventDefault();
                const parent = btn.closest(".tab-container");
                const tabId = btn.dataset.tabBtn;
                const currentButtons = parent.querySelectorAll("[data-tab-btn]");
                const currentTab = parent.querySelector(`.tab[data-tab="${tabId}"]`);
                currentButtons.forEach((b => b.classList.remove("_active")));
                tabs.forEach((t => t.classList.remove("_open")));
                currentTab.classList.add("_open");
                btn.classList.add("_active");
            }));
        }));
    }
    function anchors_anchors() {
        document.querySelectorAll(".anchor").forEach((link => {
            link.addEventListener("click", (function(e) {
                e.preventDefault();
                if (document.querySelector("#burger").classList.contains("_open")) burgerClose();
                let href = this.getAttribute("href").substring(1);
                const scrollTarget = document.getElementById(href);
                if (scrollTarget) {
                    const offsetPosition = scrollTarget.getBoundingClientRect().top - document.querySelector(".header").clientHeight;
                    window.scrollBy({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }));
        }));
    }
    var __defProp = Object.defineProperty;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
    var __publicField = (obj, key, value) => {
        __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
        return value;
    };
    const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const INTEGER_REGEXP = /^-?[0-9]\d*$/;
    const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    const STRONG_PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isEmpty = value => {
        let newVal = value;
        if (typeof value === "string") newVal = value.trim();
        return !newVal;
    };
    const isEmail = value => EMAIL_REGEXP.test(value);
    const isLengthMoreThanMax = (value, len) => value.length > len;
    const isLengthLessThanMin = (value, len) => value.length < len;
    const isNumber = value => {
        if (typeof value !== "string") return false;
        return !isNaN(+value) && !isNaN(parseFloat(value));
    };
    const isInteger = value => INTEGER_REGEXP.test(value);
    const isPassword = value => PASSWORD_REGEXP.test(value);
    const isStrongPassword = value => STRONG_PASSWORD_REGEXP.test(value);
    const isNumberMoreThanMax = (value, len) => value > len;
    const isNumberLessThanMin = (value, len) => value < len;
    const isInvalidOrEmptyString = value => typeof value !== "string" || value === "";
    var Rules = (Rules2 => {
        Rules2["Required"] = "required";
        Rules2["Email"] = "email";
        Rules2["MinLength"] = "minLength";
        Rules2["MaxLength"] = "maxLength";
        Rules2["Password"] = "password";
        Rules2["Number"] = "number";
        Rules2["Integer"] = "integer";
        Rules2["MaxNumber"] = "maxNumber";
        Rules2["MinNumber"] = "minNumber";
        Rules2["StrongPassword"] = "strongPassword";
        Rules2["CustomRegexp"] = "customRegexp";
        Rules2["MinFilesCount"] = "minFilesCount";
        Rules2["MaxFilesCount"] = "maxFilesCount";
        Rules2["Files"] = "files";
        return Rules2;
    })(Rules || {});
    var GroupRules = (GroupRules2 => {
        GroupRules2["Required"] = "required";
        return GroupRules2;
    })(GroupRules || {});
    var CustomStyleTagIds = (CustomStyleTagIds2 => {
        CustomStyleTagIds2["Label"] = "label";
        CustomStyleTagIds2["LabelArrow"] = "labelArrow";
        return CustomStyleTagIds2;
    })(CustomStyleTagIds || {});
    const defaultDictionary = [ {
        key: Rules.Required,
        dict: {
            en: "The field is required"
        }
    }, {
        key: Rules.Email,
        dict: {
            en: "Email has invalid format"
        }
    }, {
        key: Rules.MaxLength,
        dict: {
            en: "The field must contain a maximum of :value characters"
        }
    }, {
        key: Rules.MinLength,
        dict: {
            en: "The field must contain a minimum of :value characters"
        }
    }, {
        key: Rules.Password,
        dict: {
            en: "Password must contain minimum eight characters, at least one letter and one number"
        }
    }, {
        key: Rules.StrongPassword,
        dict: {
            en: "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        }
    }, {
        key: Rules.Number,
        dict: {
            en: "Value should be a number"
        }
    }, {
        key: Rules.MaxNumber,
        dict: {
            en: "Number should be less or equal than :value"
        }
    }, {
        key: Rules.MinNumber,
        dict: {
            en: "Number should be more or equal than :value"
        }
    }, {
        key: Rules.MinFilesCount,
        dict: {
            en: "Files count should be more or equal than :value"
        }
    }, {
        key: Rules.MaxFilesCount,
        dict: {
            en: "Files count should be less or equal than :value"
        }
    }, {
        key: Rules.Files,
        dict: {
            en: "Uploaded files have one or several invalid properties (extension/size/type etc)."
        }
    } ];
    const DEFAULT_ERROR_FIELD_MESSAGE = "Value is incorrect";
    const isPromise = val => typeof val === "object" && val !== null && "then" in val && typeof val.then === "function";
    const getNodeParents = el => {
        let elem = el;
        const els = [];
        while (elem) {
            els.unshift(elem);
            elem = elem.parentNode;
        }
        return els;
    };
    const getClosestParent = (groups, parents) => {
        const reversedParents = [ ...parents ].reverse();
        for (let i = 0, len = reversedParents.length; i < len; ++i) {
            const parent = reversedParents[i];
            for (const key in groups) {
                const group = groups[key];
                if (group.groupElem === parent) return [ key, group ];
            }
        }
        return null;
    };
    const getClassList = classList => {
        if (Array.isArray(classList)) return classList.filter((cls => cls.length > 0));
        if (typeof classList === "string" && classList.trim()) return [ ...classList.split(" ").filter((cls => cls.length > 0)) ];
        return [];
    };
    const isElement = element => element instanceof Element || element instanceof HTMLDocument;
    const errorLabelCss = `.just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}`;
    const TOOLTIP_ARROW_HEIGHT = 5;
    const defaultGlobalConfig = {
        errorFieldStyle: {
            color: "#b81111",
            border: "1px solid #B81111"
        },
        errorFieldCssClass: "just-validate-error-field",
        successFieldCssClass: "just-validate-success-field",
        errorLabelStyle: {
            color: "#b81111"
        },
        errorLabelCssClass: "just-validate-error-label",
        successLabelCssClass: "just-validate-success-label",
        focusInvalidField: true,
        lockForm: true,
        testingMode: false,
        validateBeforeSubmitting: false,
        submitFormAutomatically: false
    };
    class JustValidate {
        constructor(form, globalConfig, dictLocale) {
            __publicField(this, "form", null);
            __publicField(this, "fields", {});
            __publicField(this, "groupFields", {});
            __publicField(this, "errors", {});
            __publicField(this, "isValid", false);
            __publicField(this, "isSubmitted", false);
            __publicField(this, "globalConfig", defaultGlobalConfig);
            __publicField(this, "errorLabels", {});
            __publicField(this, "successLabels", {});
            __publicField(this, "eventListeners", []);
            __publicField(this, "dictLocale", defaultDictionary);
            __publicField(this, "currentLocale", "en");
            __publicField(this, "customStyleTags", {});
            __publicField(this, "onSuccessCallback");
            __publicField(this, "onFailCallback");
            __publicField(this, "onValidateCallback");
            __publicField(this, "tooltips", []);
            __publicField(this, "lastScrollPosition");
            __publicField(this, "isScrollTick");
            __publicField(this, "fieldIds", new Map);
            __publicField(this, "getKeyByFieldSelector", (field => this.fieldIds.get(field)));
            __publicField(this, "getFieldSelectorByKey", (key => {
                for (const [fieldSelector, k] of this.fieldIds) if (key === k) return fieldSelector;
                return;
            }));
            __publicField(this, "getCompatibleFields", (() => {
                const fields = {};
                Object.keys(this.fields).forEach((key => {
                    let newKey = key;
                    const fieldSelector = this.getFieldSelectorByKey(key);
                    if (typeof fieldSelector === "string") newKey = fieldSelector;
                    fields[newKey] = {
                        ...this.fields[key]
                    };
                }));
                return fields;
            }));
            __publicField(this, "setKeyByFieldSelector", (field => {
                if (this.fieldIds.has(field)) return this.fieldIds.get(field);
                const key = String(this.fieldIds.size + 1);
                this.fieldIds.set(field, key);
                return key;
            }));
            __publicField(this, "refreshAllTooltips", (() => {
                this.tooltips.forEach((item => {
                    item.refresh();
                }));
            }));
            __publicField(this, "handleDocumentScroll", (() => {
                this.lastScrollPosition = window.scrollY;
                if (!this.isScrollTick) {
                    window.requestAnimationFrame((() => {
                        this.refreshAllTooltips();
                        this.isScrollTick = false;
                    }));
                    this.isScrollTick = true;
                }
            }));
            __publicField(this, "formSubmitHandler", (ev => {
                ev.preventDefault();
                this.isSubmitted = true;
                this.validateHandler(ev);
            }));
            __publicField(this, "handleFieldChange", (target => {
                let foundKey;
                for (const key in this.fields) {
                    const field = this.fields[key];
                    if (field.elem === target) {
                        foundKey = key;
                        break;
                    }
                }
                if (!foundKey) return;
                this.fields[foundKey].touched = true;
                this.validateField(foundKey, true);
            }));
            __publicField(this, "handleGroupChange", (target => {
                let foundKey;
                for (const key in this.groupFields) {
                    const group = this.groupFields[key];
                    if (group.elems.find((elem => elem === target))) {
                        foundKey = key;
                        break;
                    }
                }
                if (!foundKey) return;
                this.groupFields[foundKey].touched = true;
                this.validateGroup(foundKey, true);
            }));
            __publicField(this, "handlerChange", (ev => {
                if (!ev.target) return;
                this.handleFieldChange(ev.target);
                this.handleGroupChange(ev.target);
                this.renderErrors();
            }));
            this.initialize(form, globalConfig, dictLocale);
        }
        initialize(form, globalConfig, dictLocale) {
            this.form = null;
            this.errors = {};
            this.isValid = false;
            this.isSubmitted = false;
            this.globalConfig = defaultGlobalConfig;
            this.errorLabels = {};
            this.successLabels = {};
            this.eventListeners = [];
            this.customStyleTags = {};
            this.tooltips = [];
            this.currentLocale = "en";
            if (typeof form === "string") {
                const elem = document.querySelector(form);
                if (!elem) throw Error(`Form with ${form} selector not found! Please check the form selector`);
                this.setForm(elem);
            } else if (form instanceof HTMLFormElement) this.setForm(form); else throw Error(`Form selector is not valid. Please specify a string selector or a DOM element.`);
            this.globalConfig = {
                ...defaultGlobalConfig,
                ...globalConfig
            };
            if (dictLocale) this.dictLocale = [ ...dictLocale, ...defaultDictionary ];
            if (this.isTooltip()) {
                const styleTag = document.createElement("style");
                styleTag.textContent = errorLabelCss;
                this.customStyleTags[CustomStyleTagIds.Label] = document.head.appendChild(styleTag);
                this.addListener("scroll", document, this.handleDocumentScroll);
            }
        }
        getLocalisedString(rule, ruleValue, customMsg) {
            var _a;
            const search = customMsg != null ? customMsg : rule;
            let localisedStr = (_a = this.dictLocale.find((item => item.key === search))) == null ? void 0 : _a.dict[this.currentLocale];
            if (!localisedStr) if (customMsg) localisedStr = customMsg;
            if (localisedStr && ruleValue !== void 0) switch (rule) {
              case Rules.MaxLength:
              case Rules.MinLength:
              case Rules.MaxNumber:
              case Rules.MinNumber:
              case Rules.MinFilesCount:
              case Rules.MaxFilesCount:
                localisedStr = localisedStr.replace(":value", String(ruleValue));
            }
            return localisedStr || customMsg || DEFAULT_ERROR_FIELD_MESSAGE;
        }
        getFieldErrorMessage(fieldRule, elem) {
            const msg = typeof fieldRule.errorMessage === "function" ? fieldRule.errorMessage(this.getElemValue(elem), this.fields) : fieldRule.errorMessage;
            return this.getLocalisedString(fieldRule.rule, fieldRule.value, msg);
        }
        getFieldSuccessMessage(successMessage, elem) {
            const msg = typeof successMessage === "function" ? successMessage(this.getElemValue(elem), this.fields) : successMessage;
            return this.getLocalisedString(void 0, void 0, msg);
        }
        getGroupErrorMessage(groupRule) {
            return this.getLocalisedString(groupRule.rule, void 0, groupRule.errorMessage);
        }
        getGroupSuccessMessage(groupRule) {
            if (!groupRule.successMessage) return;
            return this.getLocalisedString(void 0, void 0, groupRule.successMessage);
        }
        setFieldInvalid(key, fieldRule) {
            this.fields[key].isValid = false;
            this.fields[key].errorMessage = this.getFieldErrorMessage(fieldRule, this.fields[key].elem);
        }
        setFieldValid(key, successMessage) {
            this.fields[key].isValid = true;
            if (successMessage !== void 0) this.fields[key].successMessage = this.getFieldSuccessMessage(successMessage, this.fields[key].elem);
        }
        setGroupInvalid(key, groupRule) {
            this.groupFields[key].isValid = false;
            this.groupFields[key].errorMessage = this.getGroupErrorMessage(groupRule);
        }
        setGroupValid(key, groupRule) {
            this.groupFields[key].isValid = true;
            this.groupFields[key].successMessage = this.getGroupSuccessMessage(groupRule);
        }
        getElemValue(elem) {
            switch (elem.type) {
              case "checkbox":
                return elem.checked;

              case "file":
                return elem.files;

              default:
                return elem.value;
            }
        }
        validateGroupRule(key, elems, groupRule) {
            switch (groupRule.rule) {
              case GroupRules.Required:
                if (elems.every((elem => !elem.checked))) this.setGroupInvalid(key, groupRule); else this.setGroupValid(key, groupRule);
            }
        }
        validateFieldRule(key, elem, fieldRule, afterInputChanged = false) {
            const ruleValue = fieldRule.value;
            const elemValue = this.getElemValue(elem);
            if (fieldRule.plugin) {
                const result = fieldRule.plugin(elemValue, this.getCompatibleFields());
                if (!result) this.setFieldInvalid(key, fieldRule);
                return;
            }
            switch (fieldRule.rule) {
              case Rules.Required:
                if (isEmpty(elemValue)) this.setFieldInvalid(key, fieldRule);
                break;

              case Rules.Email:
                if (isInvalidOrEmptyString(elemValue)) break;
                if (!isEmail(elemValue)) this.setFieldInvalid(key, fieldRule);
                break;

              case Rules.MaxLength:
                if (ruleValue === void 0) {
                    console.error(`Value for ${fieldRule.rule} rule for [${key}] field is not defined. The field will be always invalid.`);
                    this.setFieldInvalid(key, fieldRule);
                    break;
                }
                if (typeof ruleValue !== "number") {
                    console.error(`Value for ${fieldRule.rule} rule for [${key}] should be a number. The field will be always invalid.`);
                    this.setFieldInvalid(key, fieldRule);
                    break;
                }
                if (isInvalidOrEmptyString(elemValue)) break;
                if (isLengthMoreThanMax(elemValue, ruleValue)) this.setFieldInvalid(key, fieldRule);
                break;

              case Rules.MinLength:
                if (ruleValue === void 0) {
                    console.error(`Value for ${fieldRule.rule} rule for [${key}] field is not defined. The field will be always invalid.`);
                    this.setFieldInvalid(key, fieldRule);
                    break;
                }
                if (typeof ruleValue !== "number") {
                    console.error(`Value for ${fieldRule.rule} rule for [${key}] should be a number. The field will be always invalid.`);
                    this.setFieldInvalid(key, fieldRule);
                    break;
                }
                if (isInvalidOrEmptyString(elemValue)) break;
                if (isLengthLessThanMin(elemValue, ruleValue)) this.setFieldInvalid(key, fieldRule);
                break;

              case Rules.Password:
                if (isInvalidOrEmptyString(elemValue)) break;
                if (!isPassword(elemValue)) this.setFieldInvalid(key, fieldRule);
                break;

              case Rules.StrongPassword:
                if (isInvalidOrEmptyString(elemValue)) break;
                if (!isStrongPassword(elemValue)) this.setFieldInvalid(key, fieldRule);
                break;

              case Rules.Number:
                if (isInvalidOrEmptyString(elemValue)) break;
                if (!isNumber(elemValue)) this.setFieldInvalid(key, fieldRule);
                break;

              case Rules.Integer:
                if (isInvalidOrEmptyString(elemValue)) break;
                if (!isInteger(elemValue)) this.setFieldInvalid(key, fieldRule);
                break;

              case Rules.MaxNumber:
                {
                    if (ruleValue === void 0) {
                        console.error(`Value for ${fieldRule.rule} rule for [${key}] field is not defined. The field will be always invalid.`);
                        this.setFieldInvalid(key, fieldRule);
                        break;
                    }
                    if (typeof ruleValue !== "number") {
                        console.error(`Value for ${fieldRule.rule} rule for [${key}] field should be a number. The field will be always invalid.`);
                        this.setFieldInvalid(key, fieldRule);
                        break;
                    }
                    if (isInvalidOrEmptyString(elemValue)) break;
                    const num = +elemValue;
                    if (Number.isNaN(num) || isNumberMoreThanMax(num, ruleValue)) this.setFieldInvalid(key, fieldRule);
                    break;
                }

              case Rules.MinNumber:
                {
                    if (ruleValue === void 0) {
                        console.error(`Value for ${fieldRule.rule} rule for [${key}] field is not defined. The field will be always invalid.`);
                        this.setFieldInvalid(key, fieldRule);
                        break;
                    }
                    if (typeof ruleValue !== "number") {
                        console.error(`Value for ${fieldRule.rule} rule for [${key}] field should be a number. The field will be always invalid.`);
                        this.setFieldInvalid(key, fieldRule);
                        break;
                    }
                    if (isInvalidOrEmptyString(elemValue)) break;
                    const num = +elemValue;
                    if (Number.isNaN(num) || isNumberLessThanMin(num, ruleValue)) this.setFieldInvalid(key, fieldRule);
                    break;
                }

              case Rules.CustomRegexp:
                {
                    if (ruleValue === void 0) {
                        console.error(`Value for ${fieldRule.rule} rule for [${key}] field is not defined. This field will be always invalid.`);
                        this.setFieldInvalid(key, fieldRule);
                        return;
                    }
                    let regexp;
                    try {
                        regexp = new RegExp(ruleValue);
                    } catch (e) {
                        console.error(`Value for ${fieldRule.rule} rule for [${key}] should be a valid regexp. This field will be always invalid.`);
                        this.setFieldInvalid(key, fieldRule);
                        break;
                    }
                    const str = String(elemValue);
                    if (str !== "" && !regexp.test(str)) this.setFieldInvalid(key, fieldRule);
                    break;
                }

              case Rules.MinFilesCount:
                if (ruleValue === void 0) {
                    console.error(`Value for ${fieldRule.rule} rule for [${key}] field is not defined. This field will be always invalid.`);
                    this.setFieldInvalid(key, fieldRule);
                    break;
                }
                if (typeof ruleValue !== "number") {
                    console.error(`Value for ${fieldRule.rule} rule for [${key}] field should be a number. The field will be always invalid.`);
                    this.setFieldInvalid(key, fieldRule);
                    break;
                }
                if (Number.isFinite(elemValue == null ? void 0 : elemValue.length) && elemValue.length < ruleValue) {
                    this.setFieldInvalid(key, fieldRule);
                    break;
                }
                break;

              case Rules.MaxFilesCount:
                if (ruleValue === void 0) {
                    console.error(`Value for ${fieldRule.rule} rule for [${key}] field is not defined. This field will be always invalid.`);
                    this.setFieldInvalid(key, fieldRule);
                    break;
                }
                if (typeof ruleValue !== "number") {
                    console.error(`Value for ${fieldRule.rule} rule for [${key}] field should be a number. The field will be always invalid.`);
                    this.setFieldInvalid(key, fieldRule);
                    break;
                }
                if (Number.isFinite(elemValue == null ? void 0 : elemValue.length) && elemValue.length > ruleValue) {
                    this.setFieldInvalid(key, fieldRule);
                    break;
                }
                break;

              case Rules.Files:
                {
                    if (ruleValue === void 0) {
                        console.error(`Value for ${fieldRule.rule} rule for [${key}] field is not defined. This field will be always invalid.`);
                        this.setFieldInvalid(key, fieldRule);
                        return;
                    }
                    if (typeof ruleValue !== "object") {
                        console.error(`Value for ${fieldRule.rule} rule for [${key}] field should be an object. This field will be always invalid.`);
                        this.setFieldInvalid(key, fieldRule);
                        return;
                    }
                    const filesConfig = ruleValue.files;
                    if (typeof filesConfig !== "object") {
                        console.error(`Value for ${fieldRule.rule} rule for [${key}] field should be an object with files array. This field will be always invalid.`);
                        this.setFieldInvalid(key, fieldRule);
                        return;
                    }
                    const isFilePropsInvalid = (file, fileConfig) => {
                        const minSizeInvalid = Number.isFinite(fileConfig.minSize) && file.size < fileConfig.minSize;
                        const maxSizeInvalid = Number.isFinite(fileConfig.maxSize) && file.size > fileConfig.maxSize;
                        const nameInvalid = Array.isArray(fileConfig.names) && !fileConfig.names.includes(file.name);
                        const extInvalid = Array.isArray(fileConfig.extensions) && !fileConfig.extensions.includes(file.name.split(".")[file.name.split(".").length - 1]);
                        const typeInvalid = Array.isArray(fileConfig.types) && !fileConfig.types.includes(file.type);
                        return minSizeInvalid || maxSizeInvalid || nameInvalid || extInvalid || typeInvalid;
                    };
                    if (typeof elemValue === "object" && elemValue !== null) for (let fileIdx = 0, len = elemValue.length; fileIdx < len; ++fileIdx) {
                        const file = elemValue.item(fileIdx);
                        if (!file) {
                            this.setFieldInvalid(key, fieldRule);
                            break;
                        }
                        const filesInvalid = isFilePropsInvalid(file, filesConfig);
                        if (filesInvalid) {
                            this.setFieldInvalid(key, fieldRule);
                            break;
                        }
                    }
                    break;
                }

              default:
                {
                    if (typeof fieldRule.validator !== "function") {
                        console.error(`Validator for custom rule for [${key}] field should be a function. This field will be always invalid.`);
                        this.setFieldInvalid(key, fieldRule);
                        return;
                    }
                    const result = fieldRule.validator(elemValue, this.getCompatibleFields());
                    if (typeof result !== "boolean" && typeof result !== "function") console.error(`Validator return value for [${key}] field should be boolean or function. It will be cast to boolean.`);
                    if (typeof result === "function") if (afterInputChanged) this.fields[key].asyncCheckPending = true; else {
                        this.fields[key].asyncCheckPending = false;
                        const promise = result();
                        if (!isPromise(promise)) {
                            console.error(`Validator function for custom rule for [${key}] field should return a Promise. This field will be always invalid.`);
                            this.setFieldInvalid(key, fieldRule);
                            return;
                        }
                        return promise.then((resp => {
                            if (!resp) this.setFieldInvalid(key, fieldRule);
                        })).catch((() => {
                            this.setFieldInvalid(key, fieldRule);
                        }));
                    }
                    if (!result) this.setFieldInvalid(key, fieldRule);
                }
            }
        }
        isFormValid() {
            let isValid = true;
            for (let i = 0, len = Object.values(this.fields).length; i < len; ++i) {
                const item = Object.values(this.fields)[i];
                if (item.isValid === void 0) {
                    isValid = void 0;
                    break;
                }
                if (item.isValid === false) {
                    isValid = false;
                    break;
                }
            }
            for (let i = 0, len = Object.values(this.groupFields).length; i < len; ++i) {
                const item = Object.values(this.groupFields)[i];
                if (item.isValid === void 0) {
                    isValid = void 0;
                    break;
                }
                if (item.isValid === false) {
                    isValid = false;
                    break;
                }
            }
            return isValid;
        }
        validateField(key, afterInputChanged = false) {
            var _a;
            const field = this.fields[key];
            field.isValid = true;
            const promises = [];
            [ ...field.rules ].reverse().forEach((rule => {
                const res = this.validateFieldRule(key, field.elem, rule, afterInputChanged);
                if (isPromise(res)) promises.push(res);
            }));
            if (field.isValid) this.setFieldValid(key, (_a = field.config) == null ? void 0 : _a.successMessage);
            return Promise.allSettled(promises).finally((() => {
                var _a2;
                if (afterInputChanged) (_a2 = this.onValidateCallback) == null ? void 0 : _a2.call(this, {
                    isValid: this.isFormValid(),
                    isSubmitted: this.isSubmitted,
                    fields: this.getCompatibleFields(),
                    groups: {
                        ...this.groupFields
                    }
                });
            }));
        }
        revalidateField(fieldSelector) {
            if (typeof fieldSelector !== "string" && !isElement(fieldSelector)) throw Error(`Field selector is not valid. Please specify a string selector or a valid DOM element.`);
            const key = this.getKeyByFieldSelector(fieldSelector);
            if (!key || !this.fields[key]) {
                console.error(`Field not found. Check the field selector.`);
                return Promise.reject();
            }
            return new Promise((resolve => {
                this.validateField(key, true).finally((() => {
                    this.clearFieldStyle(key);
                    this.clearFieldLabel(key);
                    this.renderFieldError(key, true);
                    resolve(!!this.fields[key].isValid);
                }));
            }));
        }
        revalidateGroup(groupSelector) {
            if (typeof groupSelector !== "string" && !isElement(groupSelector)) throw Error(`Group selector is not valid. Please specify a string selector or a valid DOM element.`);
            const key = this.getKeyByFieldSelector(groupSelector);
            if (!key || !this.groupFields[key]) {
                console.error(`Group not found. Check the group selector.`);
                return Promise.reject();
            }
            return new Promise((resolve => {
                this.validateGroup(key).finally((() => {
                    this.clearFieldLabel(key);
                    this.renderGroupError(key, true);
                    resolve(!!this.groupFields[key].isValid);
                }));
            }));
        }
        validateGroup(key, afterInputChanged = false) {
            const group = this.groupFields[key];
            const promises = [];
            [ ...group.rules ].reverse().forEach((rule => {
                const res = this.validateGroupRule(key, group.elems, rule);
                if (isPromise(res)) promises.push(res);
            }));
            return Promise.allSettled(promises).finally((() => {
                var _a;
                if (afterInputChanged) (_a = this.onValidateCallback) == null ? void 0 : _a.call(this, {
                    isValid: this.isFormValid(),
                    isSubmitted: this.isSubmitted,
                    fields: this.getCompatibleFields(),
                    groups: {
                        ...this.groupFields
                    }
                });
            }));
        }
        focusInvalidField() {
            for (const key in this.fields) {
                const field = this.fields[key];
                if (!field.isValid) {
                    setTimeout((() => field.elem.focus()), 0);
                    break;
                }
            }
        }
        afterSubmitValidation(forceRevalidation = false) {
            this.renderErrors(forceRevalidation);
            if (this.globalConfig.focusInvalidField) this.focusInvalidField();
        }
        validate(forceRevalidation = false) {
            return new Promise((resolve => {
                const promises = [];
                Object.keys(this.fields).forEach((key => {
                    const promise = this.validateField(key);
                    if (isPromise(promise)) promises.push(promise);
                }));
                Object.keys(this.groupFields).forEach((key => {
                    const promise = this.validateGroup(key);
                    if (isPromise(promise)) promises.push(promise);
                }));
                Promise.allSettled(promises).then((() => {
                    var _a;
                    this.afterSubmitValidation(forceRevalidation);
                    (_a = this.onValidateCallback) == null ? void 0 : _a.call(this, {
                        isValid: this.isFormValid(),
                        isSubmitted: this.isSubmitted,
                        fields: this.getCompatibleFields(),
                        groups: {
                            ...this.groupFields
                        }
                    });
                    resolve(!!promises.length);
                }));
            }));
        }
        revalidate() {
            return new Promise((resolve => {
                this.validateHandler(void 0, true).finally((() => {
                    if (this.globalConfig.focusInvalidField) this.focusInvalidField();
                    resolve(this.isValid);
                }));
            }));
        }
        validateHandler(ev, forceRevalidation = false) {
            if (this.globalConfig.lockForm) this.lockForm();
            return this.validate(forceRevalidation).finally((() => {
                var _a, _b, _c;
                if (this.globalConfig.lockForm) this.unlockForm();
                if (this.isValid) {
                    (_a = this.onSuccessCallback) == null ? void 0 : _a.call(this, ev);
                    if (this.globalConfig.submitFormAutomatically) (_b = ev == null ? void 0 : ev.currentTarget) == null ? void 0 : _b.submit();
                } else (_c = this.onFailCallback) == null ? void 0 : _c.call(this, this.getCompatibleFields(), this.groupFields);
            }));
        }
        setForm(form) {
            this.form = form;
            this.form.setAttribute("novalidate", "novalidate");
            this.removeListener("submit", this.form, this.formSubmitHandler);
            this.addListener("submit", this.form, this.formSubmitHandler);
        }
        addListener(type, elem, handler) {
            elem.addEventListener(type, handler);
            this.eventListeners.push({
                type,
                elem,
                func: handler
            });
        }
        removeListener(type, elem, handler) {
            elem.removeEventListener(type, handler);
            this.eventListeners = this.eventListeners.filter((item => item.type !== type || item.elem !== elem));
        }
        addField(fieldSelector, rules, config) {
            if (typeof fieldSelector !== "string" && !isElement(fieldSelector)) throw Error(`Field selector is not valid. Please specify a string selector or a valid DOM element.`);
            let elem;
            if (typeof fieldSelector === "string") elem = this.form.querySelector(fieldSelector); else elem = fieldSelector;
            if (!elem) throw Error(`Field doesn't exist in the DOM! Please check the field selector.`);
            if (!Array.isArray(rules) || !rules.length) throw Error(`Rules argument should be an array and should contain at least 1 element.`);
            rules.forEach((item => {
                if (!("rule" in item || "validator" in item || "plugin" in item)) throw Error(`Rules argument must contain at least one rule or validator property.`);
                if (!item.validator && !item.plugin && (!item.rule || !Object.values(Rules).includes(item.rule))) throw Error(`Rule should be one of these types: ${Object.values(Rules).join(", ")}. Provided value: ${item.rule}`);
            }));
            const key = this.setKeyByFieldSelector(fieldSelector);
            this.fields[key] = {
                elem,
                rules,
                isValid: void 0,
                touched: false,
                config
            };
            this.setListeners(elem);
            if (this.isSubmitted || this.globalConfig.validateBeforeSubmitting) this.validateField(key);
            return this;
        }
        removeField(fieldSelector) {
            if (typeof fieldSelector !== "string" && !isElement(fieldSelector)) throw Error(`Field selector is not valid. Please specify a string selector or a valid DOM element.`);
            const key = this.getKeyByFieldSelector(fieldSelector);
            if (!key || !this.fields[key]) {
                console.error(`Field not found. Check the field selector.`);
                return this;
            }
            const type = this.getListenerType(this.fields[key].elem.type);
            this.removeListener(type, this.fields[key].elem, this.handlerChange);
            this.clearErrors();
            delete this.fields[key];
            return this;
        }
        removeGroup(group) {
            if (typeof group !== "string") throw Error(`Group selector is not valid. Please specify a string selector.`);
            const key = this.getKeyByFieldSelector(group);
            if (!key || !this.groupFields[key]) {
                console.error(`Group not found. Check the group selector.`);
                return this;
            }
            this.groupFields[key].elems.forEach((elem => {
                const type = this.getListenerType(elem.type);
                this.removeListener(type, elem, this.handlerChange);
            }));
            this.clearErrors();
            delete this.groupFields[key];
            return this;
        }
        addRequiredGroup(groupField, errorMessage, config, successMessage) {
            if (typeof groupField !== "string" && !isElement(groupField)) throw Error(`Group selector is not valid. Please specify a string selector or a valid DOM element.`);
            let elem;
            if (typeof groupField === "string") elem = this.form.querySelector(groupField); else elem = groupField;
            if (!elem) throw Error(`Group selector not found! Please check the group selector.`);
            const inputs = elem.querySelectorAll("input");
            const childrenInputs = Array.from(inputs).filter((input => {
                const parent = getClosestParent(this.groupFields, getNodeParents(input));
                if (!parent) return true;
                return parent[1].elems.find((elem2 => elem2 !== input));
            }));
            const key = this.setKeyByFieldSelector(groupField);
            this.groupFields[key] = {
                rules: [ {
                    rule: GroupRules.Required,
                    errorMessage,
                    successMessage
                } ],
                groupElem: elem,
                elems: childrenInputs,
                touched: false,
                isValid: void 0,
                config
            };
            inputs.forEach((input => {
                this.setListeners(input);
            }));
            return this;
        }
        getListenerType(type) {
            switch (type) {
              case "checkbox":
              case "select-one":
              case "file":
              case "radio":
                return "change";

              default:
                return "input";
            }
        }
        setListeners(elem) {
            const type = this.getListenerType(elem.type);
            this.removeListener(type, elem, this.handlerChange);
            this.addListener(type, elem, this.handlerChange);
        }
        clearFieldLabel(key) {
            var _a, _b;
            (_a = this.errorLabels[key]) == null ? void 0 : _a.remove();
            (_b = this.successLabels[key]) == null ? void 0 : _b.remove();
        }
        clearFieldStyle(key) {
            var _a, _b, _c, _d;
            const field = this.fields[key];
            const errorStyle = ((_a = field.config) == null ? void 0 : _a.errorFieldStyle) || this.globalConfig.errorFieldStyle;
            Object.keys(errorStyle).forEach((key2 => {
                field.elem.style[key2] = "";
            }));
            const successStyle = ((_b = field.config) == null ? void 0 : _b.successFieldStyle) || this.globalConfig.successFieldStyle || {};
            Object.keys(successStyle).forEach((key2 => {
                field.elem.style[key2] = "";
            }));
            field.elem.classList.remove(...getClassList(((_c = field.config) == null ? void 0 : _c.errorFieldCssClass) || this.globalConfig.errorFieldCssClass), ...getClassList(((_d = field.config) == null ? void 0 : _d.successFieldCssClass) || this.globalConfig.successFieldCssClass));
        }
        clearErrors() {
            var _a, _b;
            Object.keys(this.errorLabels).forEach((key => this.errorLabels[key].remove()));
            Object.keys(this.successLabels).forEach((key => this.successLabels[key].remove()));
            for (const key in this.fields) this.clearFieldStyle(key);
            for (const key in this.groupFields) {
                const group = this.groupFields[key];
                const errorStyle = ((_a = group.config) == null ? void 0 : _a.errorFieldStyle) || this.globalConfig.errorFieldStyle;
                Object.keys(errorStyle).forEach((key2 => {
                    group.elems.forEach((elem => {
                        var _a2;
                        elem.style[key2] = "";
                        elem.classList.remove(...getClassList(((_a2 = group.config) == null ? void 0 : _a2.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
                    }));
                }));
                const successStyle = ((_b = group.config) == null ? void 0 : _b.successFieldStyle) || this.globalConfig.successFieldStyle || {};
                Object.keys(successStyle).forEach((key2 => {
                    group.elems.forEach((elem => {
                        var _a2;
                        elem.style[key2] = "";
                        elem.classList.remove(...getClassList(((_a2 = group.config) == null ? void 0 : _a2.successFieldCssClass) || this.globalConfig.successFieldCssClass));
                    }));
                }));
            }
            this.tooltips = [];
        }
        isTooltip() {
            return !!this.globalConfig.tooltip;
        }
        lockForm() {
            const elems = this.form.querySelectorAll("input, textarea, button, select");
            for (let i = 0, len = elems.length; i < len; ++i) {
                elems[i].setAttribute("data-just-validate-fallback-disabled", elems[i].disabled ? "true" : "false");
                elems[i].setAttribute("disabled", "disabled");
                elems[i].style.pointerEvents = "none";
                elems[i].style.webkitFilter = "grayscale(100%)";
                elems[i].style.filter = "grayscale(100%)";
            }
        }
        unlockForm() {
            const elems = this.form.querySelectorAll("input, textarea, button, select");
            for (let i = 0, len = elems.length; i < len; ++i) {
                if (elems[i].getAttribute("data-just-validate-fallback-disabled") !== "true") elems[i].removeAttribute("disabled");
                elems[i].style.pointerEvents = "";
                elems[i].style.webkitFilter = "";
                elems[i].style.filter = "";
            }
        }
        renderTooltip(elem, errorLabel, position) {
            var _a;
            const {top, left, width, height} = elem.getBoundingClientRect();
            const errorLabelRect = errorLabel.getBoundingClientRect();
            const pos = position || ((_a = this.globalConfig.tooltip) == null ? void 0 : _a.position);
            switch (pos) {
              case "left":
                errorLabel.style.top = `${top + height / 2 - errorLabelRect.height / 2}px`;
                errorLabel.style.left = `${left - errorLabelRect.width - TOOLTIP_ARROW_HEIGHT}px`;
                break;

              case "top":
                errorLabel.style.top = `${top - errorLabelRect.height - TOOLTIP_ARROW_HEIGHT}px`;
                errorLabel.style.left = `${left + width / 2 - errorLabelRect.width / 2}px`;
                break;

              case "right":
                errorLabel.style.top = `${top + height / 2 - errorLabelRect.height / 2}px`;
                errorLabel.style.left = `${left + width + TOOLTIP_ARROW_HEIGHT}px`;
                break;

              case "bottom":
                errorLabel.style.top = `${top + height + TOOLTIP_ARROW_HEIGHT}px`;
                errorLabel.style.left = `${left + width / 2 - errorLabelRect.width / 2}px`;
                break;
            }
            errorLabel.dataset.direction = pos;
            const refresh = () => {
                this.renderTooltip(elem, errorLabel, position);
            };
            return {
                refresh
            };
        }
        createErrorLabelElem(key, errorMessage, config) {
            const errorLabel = document.createElement("div");
            errorLabel.innerHTML = errorMessage;
            const customErrorLabelStyle = this.isTooltip() ? config == null ? void 0 : config.errorLabelStyle : (config == null ? void 0 : config.errorLabelStyle) || this.globalConfig.errorLabelStyle;
            Object.assign(errorLabel.style, customErrorLabelStyle);
            errorLabel.classList.add(...getClassList((config == null ? void 0 : config.errorLabelCssClass) || this.globalConfig.errorLabelCssClass), "just-validate-error-label");
            if (this.isTooltip()) errorLabel.dataset.tooltip = "true";
            if (this.globalConfig.testingMode) errorLabel.dataset.testId = `error-label-${key}`;
            this.errorLabels[key] = errorLabel;
            return errorLabel;
        }
        createSuccessLabelElem(key, successMessage, config) {
            if (successMessage === void 0) return null;
            const successLabel = document.createElement("div");
            successLabel.innerHTML = successMessage;
            const customSuccessLabelStyle = (config == null ? void 0 : config.successLabelStyle) || this.globalConfig.successLabelStyle;
            Object.assign(successLabel.style, customSuccessLabelStyle);
            successLabel.classList.add(...getClassList((config == null ? void 0 : config.successLabelCssClass) || this.globalConfig.successLabelCssClass), "just-validate-success-label");
            if (this.globalConfig.testingMode) successLabel.dataset.testId = `success-label-${key}`;
            this.successLabels[key] = successLabel;
            return successLabel;
        }
        renderErrorsContainer(label, errorsContainer) {
            const container = errorsContainer || this.globalConfig.errorsContainer;
            if (typeof container === "string") {
                const elem = this.form.querySelector(container);
                if (elem) {
                    elem.appendChild(label);
                    return true;
                } else console.error(`Error container with ${container} selector not found. Errors will be rendered as usual`);
            }
            if (container instanceof Element) {
                container.appendChild(label);
                return true;
            }
            if (container !== void 0) console.error(`Error container not found. It should be a string or existing Element. Errors will be rendered as usual`);
            return false;
        }
        renderGroupLabel(elem, label, errorsContainer, isSuccess) {
            if (!isSuccess) {
                const renderedInErrorsContainer = this.renderErrorsContainer(label, errorsContainer);
                if (renderedInErrorsContainer) return;
            }
            elem.appendChild(label);
        }
        renderFieldLabel(elem, label, errorsContainer, isSuccess) {
            var _a, _b, _c, _d, _e, _f, _g;
            if (!isSuccess) {
                const renderedInErrorsContainer = this.renderErrorsContainer(label, errorsContainer);
                if (renderedInErrorsContainer) return;
            }
            if (elem.type === "checkbox" || elem.type === "radio") {
                const labelElem = document.querySelector(`label[for="${elem.getAttribute("id")}"]`);
                if (((_b = (_a = elem.parentElement) == null ? void 0 : _a.tagName) == null ? void 0 : _b.toLowerCase()) === "label") (_d = (_c = elem.parentElement) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.appendChild(label); else if (labelElem) (_e = labelElem.parentElement) == null ? void 0 : _e.appendChild(label); else (_f = elem.parentElement) == null ? void 0 : _f.appendChild(label);
            } else (_g = elem.parentElement) == null ? void 0 : _g.appendChild(label);
        }
        showLabels(fields, isError) {
            Object.keys(fields).forEach(((fieldName, i) => {
                const error = fields[fieldName];
                const key = this.getKeyByFieldSelector(fieldName);
                if (!key || !this.fields[key]) {
                    console.error(`Field not found. Check the field selector.`);
                    return;
                }
                const field = this.fields[key];
                field.isValid = !isError;
                this.clearFieldStyle(key);
                this.clearFieldLabel(key);
                this.renderFieldError(key, false, error);
                if (i === 0 && this.globalConfig.focusInvalidField) setTimeout((() => field.elem.focus()), 0);
            }));
        }
        showErrors(fields) {
            if (typeof fields !== "object") throw Error("[showErrors]: Errors should be an object with key: value format");
            this.showLabels(fields, true);
        }
        showSuccessLabels(fields) {
            if (typeof fields !== "object") throw Error("[showSuccessLabels]: Labels should be an object with key: value format");
            this.showLabels(fields, false);
        }
        renderFieldError(key, forced = false, message) {
            var _a, _b, _c, _d, _e, _f;
            const field = this.fields[key];
            if (field.isValid === false) this.isValid = false;
            if (field.isValid === void 0 || !forced && !this.isSubmitted && !field.touched && message === void 0) return;
            if (field.isValid) {
                if (!field.asyncCheckPending) {
                    const successLabel = this.createSuccessLabelElem(key, message !== void 0 ? message : field.successMessage, field.config);
                    if (successLabel) this.renderFieldLabel(field.elem, successLabel, (_a = field.config) == null ? void 0 : _a.errorsContainer, true);
                    field.elem.classList.add(...getClassList(((_b = field.config) == null ? void 0 : _b.successFieldCssClass) || this.globalConfig.successFieldCssClass));
                }
                return;
            }
            field.elem.classList.add(...getClassList(((_c = field.config) == null ? void 0 : _c.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
            const errorLabel = this.createErrorLabelElem(key, message !== void 0 ? message : field.errorMessage, field.config);
            this.renderFieldLabel(field.elem, errorLabel, (_d = field.config) == null ? void 0 : _d.errorsContainer);
            if (this.isTooltip()) this.tooltips.push(this.renderTooltip(field.elem, errorLabel, (_f = (_e = field.config) == null ? void 0 : _e.tooltip) == null ? void 0 : _f.position));
        }
        renderGroupError(key, force = true) {
            var _a, _b, _c, _d;
            const group = this.groupFields[key];
            if (group.isValid === false) this.isValid = false;
            if (group.isValid === void 0 || !force && !this.isSubmitted && !group.touched) return;
            if (group.isValid) {
                group.elems.forEach((elem => {
                    var _a2, _b2;
                    Object.assign(elem.style, ((_a2 = group.config) == null ? void 0 : _a2.successFieldStyle) || this.globalConfig.successFieldStyle);
                    elem.classList.add(...getClassList(((_b2 = group.config) == null ? void 0 : _b2.successFieldCssClass) || this.globalConfig.successFieldCssClass));
                }));
                const successLabel = this.createSuccessLabelElem(key, group.successMessage, group.config);
                if (successLabel) this.renderGroupLabel(group.groupElem, successLabel, (_a = group.config) == null ? void 0 : _a.errorsContainer, true);
                return;
            }
            this.isValid = false;
            group.elems.forEach((elem => {
                var _a2, _b2;
                Object.assign(elem.style, ((_a2 = group.config) == null ? void 0 : _a2.errorFieldStyle) || this.globalConfig.errorFieldStyle);
                elem.classList.add(...getClassList(((_b2 = group.config) == null ? void 0 : _b2.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
            }));
            const errorLabel = this.createErrorLabelElem(key, group.errorMessage, group.config);
            this.renderGroupLabel(group.groupElem, errorLabel, (_b = group.config) == null ? void 0 : _b.errorsContainer);
            if (this.isTooltip()) this.tooltips.push(this.renderTooltip(group.groupElem, errorLabel, (_d = (_c = group.config) == null ? void 0 : _c.tooltip) == null ? void 0 : _d.position));
        }
        renderErrors(forceRevalidation = false) {
            if (!this.isSubmitted && !forceRevalidation && !this.globalConfig.validateBeforeSubmitting) return;
            this.clearErrors();
            this.isValid = true;
            for (const key in this.groupFields) this.renderGroupError(key);
            for (const key in this.fields) this.renderFieldError(key);
        }
        destroy() {
            this.eventListeners.forEach((event => {
                this.removeListener(event.type, event.elem, event.func);
            }));
            Object.keys(this.customStyleTags).forEach((key => {
                this.customStyleTags[key].remove();
            }));
            this.clearErrors();
            if (this.globalConfig.lockForm) this.unlockForm();
        }
        refresh() {
            this.destroy();
            if (!this.form) console.error("Cannot initialize the library! Form is not defined"); else {
                this.initialize(this.form, this.globalConfig);
                Object.keys(this.fields).forEach((key => {
                    const fieldSelector = this.getFieldSelectorByKey(key);
                    if (fieldSelector) this.addField(fieldSelector, [ ...this.fields[key].rules ], this.fields[key].config);
                }));
            }
        }
        setCurrentLocale(locale) {
            if (typeof locale !== "string" && locale !== void 0) {
                console.error("Current locale should be a string");
                return;
            }
            this.currentLocale = locale;
            if (this.isSubmitted) this.validate();
        }
        onSuccess(callback) {
            this.onSuccessCallback = callback;
            return this;
        }
        onFail(callback) {
            this.onFailCallback = callback;
            return this;
        }
        onValidate(callback) {
            this.onValidateCallback = callback;
            return this;
        }
    }
    function validate() {
        if (document.querySelector(".connection__form")) {
            const validator = new JustValidate(".connection__form");
            validator.addField("#name", [ {
                rule: "required"
            }, {
                rule: "minLength",
                value: 3
            }, {
                rule: "maxLength",
                value: 15
            } ]).addField("#name-company", [ {
                rule: "required"
            }, {
                rule: "minLength",
                value: 3
            } ]).addField("#tel", [ {
                rule: "required"
            } ]).addField("#mail", [ {
                rule: "required"
            }, {
                rule: "email"
            } ]).addField("#address", [ {
                rule: "required"
            }, {
                rule: "minLength",
                value: 3
            } ]);
        }
    }
    function mask() {
        const inputs = document.querySelectorAll('input[type="tel"]');
        const im = new Inputmask("+7 (999) 999-99-99");
        if (inputs.length) im.mask(inputs);
    }
    isWebp();
    spoller();
    burger();
    slider();
    negativeScroll();
    tab();
    anchors_anchors();
    validate();
    mask();
})();