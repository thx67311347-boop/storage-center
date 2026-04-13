(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/ui/Icon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
var LazyImage = (_ref)=>{
    _s();
    var { src, alt, width, height, className = '', onClick } = _ref;
    var [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LazyImage.useEffect": ()=>{
            var observer = new IntersectionObserver({
                "LazyImage.useEffect": (_ref2)=>{
                    var [entry] = _ref2;
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.unobserve(entry.target);
                    }
                }
            }["LazyImage.useEffect"], {
                threshold: 0.1
            });
            var imgElement = document.getElementById("lazy-img-".concat(src));
            if (imgElement) {
                observer.observe(imgElement);
            }
            return ({
                "LazyImage.useEffect": ()=>{
                    if (imgElement) {
                        observer.unobserve(imgElement);
                    }
                }
            })["LazyImage.useEffect"];
        }
    }["LazyImage.useEffect"], [
        src
    ]);
    var handleImageLoad = ()=>{
        setIsLoaded(true);
    };
    if (onClick) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: onClick,
            className: "inline-flex items-center justify-center ".concat(className),
            "aria-label": alt
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            id: "lazy-img-".concat(src),
            className: "relative",
            style: {
                width: "".concat(width, "px"),
                height: "".concat(height, "px")
            }
        }, !isLoaded && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded animate-pulse"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: width * 0.6,
            height: width * 0.6,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "text-gray-400"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
            points: "7 10 12 15 17 10"
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
            x1: "12",
            y1: "15",
            x2: "12",
            y2: "3"
        }))), isInView && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("img", {
            src: src,
            alt: alt,
            width: width,
            height: height,
            style: {
                objectFit: 'contain',
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out'
            },
            onLoad: handleImageLoad,
            loading: "lazy"
        })));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "inline-flex items-center justify-center ".concat(className)
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: "lazy-img-".concat(src),
        className: "relative",
        style: {
            width: "".concat(width, "px"),
            height: "".concat(height, "px")
        }
    }, !isLoaded && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded animate-pulse"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: width * 0.6,
        height: width * 0.6,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "text-gray-400"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "7 10 12 15 17 10"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "3"
    }))), isInView && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("img", {
        src: src,
        alt: alt,
        width: width,
        height: height,
        style: {
            objectFit: 'contain',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
        },
        onLoad: handleImageLoad,
        loading: "lazy"
    })));
};
_s(LazyImage, "JXGhjBzyBE0L/30oatjOfg+AHnE=");
_c = LazyImage;
var Icon = (_ref3)=>{
    var { name, className = '', size = 24, color, onClick } = _ref3;
    var getIconPath = (iconName)=>{
        switch(iconName){
            case 'folder':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M10.5 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.5L10.5 3z"
                });
            case 'file':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z"
                });
            case 'image':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                });
            case 'video':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                });
            case 'audio':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M12 3v18M5 12h14"
                });
            case 'pdf':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z"
                });
            case 'document':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z"
                });
            case 'sheet':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z"
                });
            case 'zip':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M21 15v4c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-4"
                });
            case 'clock':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                });
            case 'share':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
                });
            case 'trash':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                });
            case 'settings':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58z"
                });
            case 'search':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                });
            case 'close':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                });
            case 'download':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                });
            case 'upload':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M19 13h-4v6h-2v-6H5l7-7 7 7zM5 11v2h14v-2H5z"
                });
            case 'edit':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                });
            case 'restore':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M12 3v10h8l-4 4-4-4h8V3z"
                });
            case 'bell':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                });
            case 'user':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                });
            case 'logout':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5z"
                });
            case 'plus':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                });
            case 'filter':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M3 6v2h18V6H3zm3 7h12v-2H6v2zm0 4h12v-2H6v2z"
                });
            case 'sort':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                });
            default:
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                    d: "M20 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h5l2 2h7c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2z"
                });
        }
    };
    var iconStyles = _objectSpread(_objectSpread({}, size ? {
        width: "".concat(size, "px"),
        height: "".concat(size, "px")
    } : {}), color ? {
        color
    } : {});
    if (name === 'folder') {
        var folderImagePath = "/folder-icon.png";
        var iconElement = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("img", {
            src: folderImagePath,
            alt: "folder",
            width: size,
            height: size,
            className: className,
            style: {
                objectFit: 'contain'
            }
        });
        if (onClick) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
                onClick: onClick,
                className: "inline-flex items-center justify-center ".concat(className)
            }, iconElement);
        }
        return iconElement;
    }
    if (name === 'image') {
        var imageImagePath = "/image-icon.png";
        var _iconElement = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("img", {
            src: imageImagePath,
            alt: "image",
            width: size,
            height: size,
            className: className,
            style: {
                objectFit: 'contain'
            }
        });
        if (onClick) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
                onClick: onClick,
                className: "inline-flex items-center justify-center ".concat(className)
            }, _iconElement);
        }
        return _iconElement;
    }
    if (name === 'document') {
        var documentImagePath = "/document-icon.png";
        var _iconElement2 = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("img", {
            src: documentImagePath,
            alt: "document",
            width: size,
            height: size,
            className: className,
            style: {
                objectFit: 'contain'
            }
        });
        if (onClick) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
                onClick: onClick,
                className: "inline-flex items-center justify-center ".concat(className)
            }, _iconElement2);
        }
        return _iconElement2;
    }
    if (name === 'video') {
        var videoImagePath = "/video-icon.jpg";
        var _iconElement3 = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("img", {
            src: videoImagePath,
            alt: "video",
            width: size,
            height: size,
            className: className,
            style: {
                objectFit: 'contain'
            }
        });
        if (onClick) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
                onClick: onClick,
                className: "inline-flex items-center justify-center ".concat(className)
            }, _iconElement3);
        }
        return _iconElement3;
    }
    if (name === 'audio') {
        var audioImagePath = "/audio-icon.webp";
        var _iconElement4 = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("img", {
            src: audioImagePath,
            alt: "audio",
            width: size,
            height: size,
            className: className,
            style: {
                objectFit: 'contain'
            }
        });
        if (onClick) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
                onClick: onClick,
                className: "inline-flex items-center justify-center ".concat(className)
            }, _iconElement4);
        }
        return _iconElement4;
    }
    if (onClick) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: onClick,
            className: "inline-flex items-center justify-center ".concat(className),
            style: iconStyles,
            "aria-label": name
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, getIconPath(name)));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "inline-flex items-center justify-center ".concat(className),
        style: iconStyles
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, getIconPath(name)));
};
_c1 = Icon;
const __TURBOPACK__default__export__ = Icon;
var _c, _c1;
__turbopack_context__.k.register(_c, "LazyImage");
__turbopack_context__.k.register(_c1, "Icon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Icon.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Navbar(_ref) {
    _s();
    var { onSearch, onClearSearch, searchQuery, onLogout, onOpenUserManual } = _ref;
    var [localSearchQuery, setLocalSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchQuery);
    var [showHelpMenu, setShowHelpMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var handleSearchSubmit = (e)=>{
        e.preventDefault();
        onSearch(localSearchQuery);
    };
    var handleClearSearch = ()=>{
        setLocalSearchQuery('');
        onClearSearch();
    };
    var handleLogout = ()=>{
        onLogout();
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("nav", {
        className: "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-16 flex items-center px-4 md:px-6 shadow-sm"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center justify-between w-full max-w-7xl mx-auto"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center gap-3"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-blue-600 rounded-lg p-2"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "folder",
        size: 24,
        color: "white"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h1", {
        className: "text-lg md:text-xl font-bold text-gray-900 dark:text-white"
    }, "Storage Center")), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center gap-3 md:gap-5"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "relative flex-1 max-w-md md:max-w-lg"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        onSubmit: handleSearchSubmit
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "relative"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        type: "text",
        placeholder: "\u641C\u7D22\u6587\u4EF6...",
        value: localSearchQuery,
        onChange: (e)=>setLocalSearchQuery(e.target.value),
        className: "w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all duration-300"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        type: "submit",
        className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",
        "aria-label": "\u641C\u7D22"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "search",
        size: 18
    })), localSearchQuery && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        type: "button",
        onClick: handleClearSearch,
        className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",
        "aria-label": "\u6E05\u9664\u641C\u7D22"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "close",
        size: 18
    }))))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        className: "p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 relative"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "bell",
        size: 20,
        className: "text-gray-600 dark:text-gray-400"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "relative"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>setShowHelpMenu(!showHelpMenu),
        className: "p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "help",
        size: 20,
        className: "text-gray-600 dark:text-gray-400"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-sm font-medium text-gray-700 dark:text-gray-300 hidden md:inline"
    }, "\u5E2E\u52A9\u4E2D\u5FC3")), showHelpMenu && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "p-2"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>{
            if (onOpenUserManual) {
                onOpenUserManual();
            }
            setShowHelpMenu(false);
        },
        className: "w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-left transition-colors"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "file",
        size: 16,
        className: "text-blue-600 dark:text-blue-400"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "text-sm font-medium text-gray-900 dark:text-white"
    }, "\u7528\u6237\u8BF4\u660E\u4E66"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "text-xs text-gray-500 dark:text-gray-400"
    }, "\u67E5\u770B\u5B8C\u6574\u4F7F\u7528\u6307\u5357")))))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center gap-3"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium shadow-md"
    }, "U"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: handleLogout,
        className: "ml-2 md:ml-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 text-sm md:text-base shadow-sm transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
    }, "\u767B\u51FA")))));
}
_s(Navbar, "lqdk/QplyoQEZNy+2yKoe9vjOpM=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/layout/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Icon.tsx [app-client] (ecmascript)");
'use client';
;
;
function Sidebar(_ref) {
    var { selectedSection, onSectionSelect, onSettingsClick, usedStorage, totalStorage } = _ref;
    var storagePercentage = usedStorage / totalStorage * 100;
    var sections = [
        {
            id: 'all',
            name: '主页',
            icon: 'folder'
        },
        {
            id: 'recent',
            name: '最近文件',
            icon: 'clock'
        },
        {
            id: 'images',
            name: '图片',
            icon: 'image'
        },
        {
            id: 'documents',
            name: '文档',
            icon: 'document'
        },
        {
            id: 'videos',
            name: '视频',
            icon: 'video'
        },
        {
            id: 'audio',
            name: '音频',
            icon: 'audio'
        },
        {
            id: 'shared',
            name: '共享文件',
            icon: 'share'
        },
        {
            id: 'trash',
            name: '回收站',
            icon: 'trash'
        }
    ];
    var renderIcon = (icon)=>{
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: icon,
            size: 20
        });
    };
    var settings = ()=>{
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: "settings",
            size: 20
        });
    };
    var formatFileSize = (size)=>{
        if (size < 1024) return "".concat(size, " B");
        if (size < 1024 * 1024) return "".concat((size / 1024).toFixed(2), " KB");
        if (size < 1024 * 1024 * 1024) return "".concat((size / (1024 * 1024)).toFixed(2), " MB");
        return "".concat((size / (1024 * 1024 * 1024)).toFixed(2), " GB");
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("aside", {
        className: "bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-full flex flex-col md:w-72 w-20 shadow-sm"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "p-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h2", {
        className: "text-lg font-semibold text-gray-900 dark:text-white mb-6 md:block hidden text-center"
    }, "\u5B58\u50A8\u4E2D\u5FC3"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "space-y-2"
    }, sections.map((section)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            key: section.id,
            onClick: ()=>onSectionSelect(section.id),
            className: "w-full flex items-center justify-center md:justify-start gap-3 px-4 py-3 rounded-lg transition-all duration-300 ".concat(selectedSection === section.id ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium shadow-sm' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:-translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900'),
            title: section.name
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: "text-xl"
        }, renderIcon(section.icon)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: "md:inline hidden"
        }, section.name))))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "mt-auto p-4 border-t border-gray-200 dark:border-gray-800"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "space-y-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "md:block hidden"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex justify-between text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, "\u5DF2\u7528\u5B58\u50A8"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-blue-600 dark:text-blue-400"
    }, formatFileSize(usedStorage), " / ", formatFileSize(totalStorage))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-full bg-gray-200 dark:bg-gray-700 rounded-lg h-2.5 overflow-hidden"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-lg transition-all duration-500 ease-in-out",
        style: {
            width: "".concat(Math.min(storagePercentage, 100), "%")
        }
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "mt-1 text-xs text-gray-500 dark:text-gray-400 text-right"
    }, Math.round(storagePercentage), "% \u5DF2\u4F7F\u7528")), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: onSettingsClick,
        className: "w-full flex items-center justify-center md:justify-start gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900",
        title: "\u8BBE\u7F6E"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-xl"
    }, settings()), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "md:inline hidden"
    }, "\u8BBE\u7F6E")))));
}
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/layout/MobileLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Icon.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function MobileLayout(_ref) {
    _s();
    var { children, selectedSection, onSectionSelect, onSettingsClick, usedStorage, totalStorage, onSearch, onClearSearch, searchQuery, onLogout, onOpenUserManual, breadcrumb, onBreadcrumbClick, isMobile, onFloatingButtonClick } = _ref;
    var [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var mobileSections = [
        {
            id: 'all',
            name: '首页',
            icon: 'folder'
        },
        {
            id: 'recent',
            name: '最近',
            icon: 'clock'
        },
        {
            id: 'shared',
            name: '共享',
            icon: 'share'
        },
        {
            id: 'trash',
            name: '回收站',
            icon: 'trash'
        }
    ];
    if (!isMobile) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "flex h-screen bg-gray-50 dark:bg-gray-950"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            selectedSection: selectedSection,
            onSectionSelect: onSectionSelect,
            onSettingsClick: onSettingsClick,
            usedStorage: usedStorage,
            totalStorage: totalStorage
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "flex-1 flex flex-col overflow-hidden"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onSearch: onSearch,
            onClearSearch: onClearSearch,
            searchQuery: searchQuery,
            onLogout: onLogout,
            onOpenUserManual: onOpenUserManual
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("main", {
            className: "flex-1 overflow-y-auto p-4 md:p-6"
        }, children)));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex flex-col h-screen bg-gray-50 dark:bg-gray-950"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-14 flex items-center px-4 shadow-sm"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center justify-between w-full"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center gap-3"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-blue-600 rounded-lg p-1.5"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "folder",
        size: 20,
        color: "white"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h1", {
        className: "text-base font-bold text-gray-900 dark:text-white"
    }, "Storage Center")), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center gap-3"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        className: "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "bell",
        size: 18,
        className: "text-gray-600 dark:text-gray-400"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        className: "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "help",
        size: 18,
        className: "text-gray-600 dark:text-gray-400"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium shadow-sm"
    }, "U")))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-3"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "relative"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        type: "text",
        placeholder: "\u641C\u7D22\u6587\u4EF6...",
        value: searchQuery,
        onChange: (e)=>onSearch(e.target.value),
        className: "w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "search",
        size: 16,
        className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
    }), searchQuery && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: onClearSearch,
        className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "close",
        size: 16
    })))), breadcrumb && onBreadcrumbClick && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-3"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center gap-2 overflow-x-auto pb-1"
    }, breadcrumb.map((item, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
            key: item.id || 'root'
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: ()=>onBreadcrumbClick(index),
            className: "text-sm whitespace-nowrap ".concat(index === breadcrumb.length - 1 ? 'font-semibold text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400')
        }, item.name), index < breadcrumb.length - 1 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: "sort",
            size: 14,
            className: "text-gray-400 flex-shrink-0 transform rotate-90"
        }))))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("main", {
        className: "flex-1 overflow-y-auto p-4"
    }, children), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-2 px-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex justify-around items-center"
    }, mobileSections.map((section)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            key: section.id,
            onClick: ()=>onSectionSelect(section.id),
            className: "flex flex-col items-center gap-1 py-2 px-4 transition-all duration-300 ".concat(selectedSection === section.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400')
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: section.icon,
            size: 22
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: "text-xs font-medium"
        }, section.name))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: onSettingsClick,
        className: "flex flex-col items-center gap-1 py-2 px-4 transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "settings",
        size: 22
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-xs font-medium"
    }, "\u8BBE\u7F6E")))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: onFloatingButtonClick || (()=>{
            var _document$getElementB;
            return (_document$getElementB = document.getElementById('file-upload-input')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.click();
        }),
        className: "fixed right-6 bottom-24 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "plus",
        size: 24
    })));
}
_s(MobileLayout, "7pDpjxpt81vLgIcSls7O8aGkvA4=");
_c = MobileLayout;
var _c;
__turbopack_context__.k.register(_c, "MobileLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/files/VirtualFileList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VirtualFileList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Icon.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function VirtualFileList(_ref) {
    _s();
    var { files, onFileClick, onFileDelete, onFileDownload, onFileRename, onFileRestore, onFileShare, onMultiFileShare, onMultiFileDelete, selectedFiles, onSelectFile, isTrash } = _ref;
    var [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('name');
    var [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('asc');
    var [renamingFileId, setRenamingFileId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    var [renameInputValue, setRenameInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    var [showDeleteConfirm, setShowDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var [fileToDelete, setFileToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    var [showMultiDeleteConfirm, setShowMultiDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var sortedFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VirtualFileList.useMemo[sortedFiles]": ()=>{
            return [
                ...files
            ].sort({
                "VirtualFileList.useMemo[sortedFiles]": (a, b)=>{
                    var comparison = 0;
                    switch(sortBy){
                        case 'name':
                            comparison = a.name.localeCompare(b.name);
                            break;
                        case 'size':
                            comparison = a.size - b.size;
                            break;
                        case 'date':
                            comparison = a.lastModified - b.lastModified;
                            break;
                        default:
                            comparison = 0;
                    }
                    return sortOrder === 'asc' ? comparison : -comparison;
                }
            }["VirtualFileList.useMemo[sortedFiles]"]);
        }
    }["VirtualFileList.useMemo[sortedFiles]"], [
        files,
        sortBy,
        sortOrder
    ]);
    var handleSort = (field)=>{
        if (sortBy === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(field);
            setSortOrder('asc');
        }
    };
    var formatFileSize = (size)=>{
        if (size < 1024) return "".concat(size, " B");
        if (size < 1024 * 1024) return "".concat((size / 1024).toFixed(2), " KB");
        return "".concat((size / (1024 * 1024)).toFixed(2), " MB");
    };
    var handleRenameStart = (e, file)=>{
        e.stopPropagation();
        setRenamingFileId(file.id);
        setRenameInputValue(file.name);
    };
    var handleRenameCancel = ()=>{
        setRenamingFileId(null);
        setRenameInputValue('');
    };
    var handleRenameConfirm = (fileId, newName)=>{
        if (newName.trim()) {
            onFileRename(fileId, newName.trim());
        }
        setRenamingFileId(null);
        setRenameInputValue('');
    };
    var handleRenameKeyDown = (e, fileId)=>{
        if (e.key === 'Enter') {
            handleRenameConfirm(fileId, renameInputValue);
        } else if (e.key === 'Escape') {
            handleRenameCancel();
        }
    };
    var FileItemComponent = (_ref2)=>{
        var { index, style } = _ref2;
        var file = sortedFiles[index];
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            style: style,
            className: "grid grid-cols-12 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 ".concat(selectedFiles.has(file.id) ? 'bg-blue-50 dark:bg-blue-900/20' : ''),
            onClick: (e)=>{
                var isCtrlPressed = e.ctrlKey || e.metaKey;
                if (isCtrlPressed) {
                    onSelectFile(file.id, true);
                } else if (selectedFiles.size > 0) {
                    // 如果已经有选择的文件，点击其他文件会切换选择
                    onSelectFile(file.id, false);
                } else {
                    onFileClick(file);
                }
            }
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "col-span-1 flex items-center justify-start -ml-2"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
            type: "checkbox",
            checked: selectedFiles.has(file.id),
            onChange: (e)=>{
                e.stopPropagation();
                onSelectFile(file.id, true);
            },
            onClick: (e)=>{
                e.stopPropagation();
            },
            className: "h-4 w-4 text-blue-600 rounded cursor-pointer"
        })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "col-span-5 flex items-center gap-4"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "text-2xl"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: file && (file.type === 'folder' || file.isFolder) ? 'folder' : file && file.type && file.type.startsWith('image/') ? 'image' : file && file.type && file.type.startsWith('video/') ? 'video' : file && file.type && file.type.startsWith('audio/') ? 'audio' : file && file.type && file.type.includes('pdf') ? 'pdf' : file && file.type && (file.type.includes('word') || file.type.includes('document')) ? 'document' : file && file.type && (file.type.includes('excel') || file.type.includes('sheet')) ? 'sheet' : file && file.type && (file.type.includes('zip') || file.type.includes('compressed')) ? 'zip' : 'file',
            size: 24,
            className: "text-gray-600 dark:text-gray-400"
        })), renamingFileId === file.id ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "flex items-center gap-3 flex-1"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
            type: "text",
            value: renameInputValue,
            onChange: (e)=>setRenameInputValue(e.target.value),
            onKeyDown: (e)=>handleRenameKeyDown(e, file.id),
            className: "flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300",
            autoFocus: true
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: ()=>handleRenameConfirm(file.id, renameInputValue),
            className: "px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm"
        }, "\u786E\u8BA4"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: handleRenameCancel,
            className: "px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-sm"
        }, "\u53D6\u6D88")) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "flex items-center gap-3 flex-1"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: "text-gray-900 dark:text-white font-medium flex-1"
        }, file.name), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: (e)=>handleRenameStart(e, file),
            className: "p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900",
            "aria-label": "\u91CD\u547D\u540D"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: "edit",
            size: 16,
            className: "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        })))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "col-span-2 flex items-center text-sm text-gray-600 dark:text-gray-400"
        }, file && (file.type === 'folder' || file.isFolder) ? '-' : formatFileSize((file === null || file === void 0 ? void 0 : file.size) || 0)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "col-span-3 flex items-center text-sm text-gray-600 dark:text-gray-400"
        }, new Date((file === null || file === void 0 ? void 0 : file.lastModified) || 0).toLocaleString()), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "col-span-1 flex items-center justify-end gap-3"
        }, !isTrash && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: (e)=>{
                e.stopPropagation();
                if (file) {
                    onFileShare(file);
                }
            },
            className: "p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900",
            "aria-label": "\u5206\u4EAB\u6587\u4EF6"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: "share",
            size: 18,
            className: "text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        })), isTrash ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: (e)=>{
                e.stopPropagation();
                if (file && file.id) {
                    onFileRestore(file.id);
                }
            },
            className: "p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/20 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900",
            "aria-label": "\u6062\u590D\u6587\u4EF6"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: "restore",
            size: 18,
            className: "text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
        })) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: (e)=>{
                e.stopPropagation();
                if (file) {
                    onFileDownload(file);
                }
            },
            className: "p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900",
            "aria-label": "\u4E0B\u8F7D\u6587\u4EF6"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: "download",
            size: 18,
            className: "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: (e)=>{
                e.stopPropagation();
                if (file && file.id) {
                    setFileToDelete({
                        id: file.id,
                        name: file.name,
                        isFromTrash: isTrash
                    });
                    setShowDeleteConfirm(true);
                }
            },
            className: "p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:bg-red-50 dark:hover:bg-red-900/20 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900",
            "aria-label": "\u5220\u9664\u6587\u4EF6"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: "trash",
            size: 18,
            className: "text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors"
        }))));
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-full",
        suppressHydrationWarning: true
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm"
    }, selectedFiles.size > 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "grid grid-cols-12 px-6 py-3 border-b border-gray-200 dark:border-gray-800 bg-blue-50 dark:bg-blue-900/20"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "col-span-9 flex items-center gap-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-sm font-medium text-gray-700 dark:text-gray-300"
    }, "\u5DF2\u9009\u62E9 ", selectedFiles.size, " \u4E2A\u6587\u4EF6"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>{
            var selectedFilesList = files.filter((file)=>selectedFiles.has(file.id));
            onMultiFileShare(selectedFilesList);
        },
        className: "flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "share",
        size: 14,
        color: "white"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, "\u5206\u4EAB\u6240\u9009\u6587\u4EF6")), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>{
            setShowMultiDeleteConfirm(true);
        },
        className: "flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 text-sm"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "trash",
        size: 14,
        color: "white"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, "\u5220\u9664\u6240\u9009\u6587\u4EF6"))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "col-span-3 text-right"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>{
            // 清除所有选择
            selectedFiles.forEach((fileId)=>onSelectFile(fileId, true));
        },
        className: "text-sm text-blue-600 dark:text-blue-400 hover:underline"
    }, "\u6E05\u9664\u9009\u62E9"))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "grid grid-cols-12 px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "col-span-1 flex items-center justify-start -ml-2"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        type: "checkbox",
        checked: selectedFiles.size === files.length && files.length > 0,
        onChange: (e)=>{
            e.stopPropagation();
            if (e.target.checked) {
                files.forEach((file)=>{
                    if (!selectedFiles.has(file.id)) {
                        onSelectFile(file.id, true);
                    }
                });
            } else {
                selectedFiles.forEach((fileId)=>onSelectFile(fileId, true));
            }
        },
        onClick: (e)=>{
            e.stopPropagation();
        },
        className: "h-4 w-4 text-blue-600 rounded cursor-pointer"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "col-span-5"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>handleSort('name'),
        className: "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, "\u540D\u79F0"), sortBy === 'name' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "sort",
        size: 16,
        className: "transition-transform duration-300 ".concat(sortOrder === 'asc' ? 'transform rotate-180' : '')
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "col-span-2"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>handleSort('size'),
        className: "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, "\u5927\u5C0F"), sortBy === 'size' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "sort",
        size: 16,
        className: "transition-transform duration-300 ".concat(sortOrder === 'asc' ? 'transform rotate-180' : '')
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "col-span-3"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>handleSort('date'),
        className: "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, "\u4FEE\u6539\u65E5\u671F"), sortBy === 'date' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "sort",
        size: 16,
        className: "transition-transform duration-300 ".concat(sortOrder === 'asc' ? 'transform rotate-180' : '')
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "col-span-1 text-right"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-sm font-medium text-gray-700 dark:text-gray-300"
    }, "\u64CD\u4F5C"))), sortedFiles.length > 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "divide-y divide-gray-200 dark:divide-gray-800 max-h-[600px] overflow-y-auto"
    }, sortedFiles.map((file, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(FileItemComponent, {
            key: file.id,
            index: index,
            style: {}
        }))) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "p-12 text-center"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "text-6xl mb-4"
    }, "\uD83D\uDCC1"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h3", {
        className: "text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
    }, "\u6682\u65E0\u6587\u4EF6"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-gray-500 dark:text-gray-400"
    }, "\u4E0A\u4F20\u6587\u4EF6\u6216\u521B\u5EFA\u6587\u4EF6\u5939\u5F00\u59CB\u4F7F\u7528")), showDeleteConfirm && fileToDelete && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full mx-4 border border-red-200 dark:border-red-900/50"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "p-6"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center mb-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "text-red-600 dark:text-red-400"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "9",
        y1: "9",
        x2: "15",
        y2: "15"
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h3", {
        className: "text-lg font-medium text-gray-900 dark:text-white"
    }, "\u786E\u8BA4\u5220\u9664"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-sm text-gray-500 dark:text-gray-400"
    }, fileToDelete.isFromTrash ? '此操作将永久删除文件，无法恢复' : '此操作将把文件移至回收站'))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-6"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-sm text-gray-700 dark:text-gray-300"
    }, "\u60A8\u786E\u5B9A\u8981", fileToDelete.isFromTrash ? '永久删除' : '删除', "\u6587\u4EF6", /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "font-medium text-red-600 dark:text-red-400"
    }, " ", fileToDelete.name), "\u5417\uFF1F")), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex gap-4 justify-end"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>{
            setShowDeleteConfirm(false);
            setFileToDelete(null);
        },
        className: "px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    }, "\u53D6\u6D88"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>{
            if (fileToDelete) {
                onFileDelete(fileToDelete.id, fileToDelete.isFromTrash);
                setShowDeleteConfirm(false);
                setFileToDelete(null);
            }
        },
        className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
    }, fileToDelete.isFromTrash ? '确认永久删除' : '确认删除'))))), showMultiDeleteConfirm && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full mx-4 border border-red-200 dark:border-red-900/50"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "p-6"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center mb-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "text-red-600 dark:text-red-400"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "9",
        y1: "9",
        x2: "15",
        y2: "15"
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h3", {
        className: "text-lg font-medium text-gray-900 dark:text-white"
    }, "\u786E\u8BA4\u6279\u91CF\u5220\u9664"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-sm text-gray-500 dark:text-gray-400"
    }, isTrash ? '此操作将永久删除所选文件，无法恢复' : '此操作将把所选文件移至回收站'))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-6"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-sm text-gray-700 dark:text-gray-300 mb-2"
    }, "\u60A8\u786E\u5B9A\u8981", isTrash ? '永久删除' : '删除', "\u4EE5\u4E0B ", selectedFiles.size, " \u4E2A\u6587\u4EF6\u5417\uFF1F"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "max-h-32 overflow-y-auto bg-white dark:bg-gray-800 rounded p-2 border border-gray-200 dark:border-gray-700"
    }, Array.from(selectedFiles).map((fileId)=>{
        var file = files.find((f)=>f.id === fileId);
        return file ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            key: fileId,
            className: "text-sm text-gray-600 dark:text-gray-400 py-1"
        }, "\u2022 ", file.name) : null;
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex gap-4 justify-end"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>{
            setShowMultiDeleteConfirm(false);
        },
        className: "px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    }, "\u53D6\u6D88"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>{
            var fileIds = Array.from(selectedFiles);
            onMultiFileDelete(fileIds, isTrash);
            // 清除选择
            selectedFiles.forEach((fileId)=>onSelectFile(fileId, true));
            setShowMultiDeleteConfirm(false);
        },
        className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
    }, isTrash ? '确认永久删除' : '确认删除')))))));
}
_s(VirtualFileList, "0T8i6XdOUNJsXSk90dacyGzDy5E=");
_c = VirtualFileList;
var _c;
__turbopack_context__.k.register(_c, "VirtualFileList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/files/MobileFileList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileFileList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Icon.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function MobileFileList(_ref) {
    _s();
    var { files, onFileClick, onFileDelete, onFileDownload, onFileRename, onFileRestore, onFileShare, onMultiFileShare, onMultiFileDelete, selectedFiles, onSelectFile, isTrash, selectedSection, breadcrumb, onBreadcrumbClick } = _ref;
    var [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('date');
    var [showDeleteConfirm, setShowDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var [fileToDelete, setFileToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    var [showMultiDeleteConfirm, setShowMultiDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var sortedFiles = [
        ...files
    ].sort((a, b)=>{
        var comparison = 0;
        switch(sortBy){
            case 'name':
                comparison = a.name.localeCompare(b.name);
                break;
            case 'date':
                comparison = b.lastModified - a.lastModified;
                break;
            default:
                comparison = 0;
        }
        return comparison;
    });
    var formatFileSize = (size)=>{
        if (size < 1024) return "".concat(size, " B");
        if (size < 1024 * 1024) return "".concat((size / 1024).toFixed(1), " KB");
        return "".concat((size / (1024 * 1024)).toFixed(1), " MB");
    };
    var formatDate = (date)=>{
        var d = new Date(date);
        var now = new Date();
        var diff = now.getTime() - d.getTime();
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        if (days === 0) {
            return '今天';
        } else if (days === 1) {
            return '昨天';
        } else if (days < 7) {
            return "".concat(days, "\u5929\u524D");
        } else {
            return d.toLocaleDateString();
        }
    };
    var getFileIcon = (file)=>{
        var _file$type, _file$type2, _file$type3, _file$type4, _file$type5, _file$type6, _file$type7, _file$type8, _file$type9, _file$type10;
        if (file.type === 'folder' || file.isFolder) return 'folder';
        if ((_file$type = file.type) !== null && _file$type !== void 0 && _file$type.startsWith('image/')) return 'image';
        if ((_file$type2 = file.type) !== null && _file$type2 !== void 0 && _file$type2.startsWith('video/')) return 'video';
        if ((_file$type3 = file.type) !== null && _file$type3 !== void 0 && _file$type3.startsWith('audio/')) return 'audio';
        if ((_file$type4 = file.type) !== null && _file$type4 !== void 0 && _file$type4.includes('pdf')) return 'pdf';
        if ((_file$type5 = file.type) !== null && _file$type5 !== void 0 && _file$type5.includes('word') || (_file$type6 = file.type) !== null && _file$type6 !== void 0 && _file$type6.includes('document')) return 'document';
        if ((_file$type7 = file.type) !== null && _file$type7 !== void 0 && _file$type7.includes('excel') || (_file$type8 = file.type) !== null && _file$type8 !== void 0 && _file$type8.includes('sheet')) return 'sheet';
        if ((_file$type9 = file.type) !== null && _file$type9 !== void 0 && _file$type9.includes('zip') || (_file$type10 = file.type) !== null && _file$type10 !== void 0 && _file$type10.includes('compressed')) return 'zip';
        return 'file';
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-full",
        suppressHydrationWarning: true
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "text-lg font-semibold text-gray-900 dark:text-white"
    }, isTrash ? '回收站' : selectedSection === 'recent' ? '最近文件' : breadcrumb[breadcrumb.length - 1].name), selectedFiles.size > 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center gap-2"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-sm text-gray-600 dark:text-gray-400"
    }, "\u5DF2\u9009\u62E9 ", selectedFiles.size, " \u4E2A"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>{
            var selectedFilesList = files.filter((file)=>selectedFiles.has(file.id));
            onMultiFileShare(selectedFilesList);
        },
        className: "p-1.5 bg-blue-600 text-white rounded-lg"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "share",
        size: 16,
        color: "white"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>setShowMultiDeleteConfirm(true),
        className: "p-1.5 bg-red-600 text-white rounded-lg"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "trash",
        size: 16,
        color: "white"
    })))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center justify-between mb-4 p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-sm font-medium text-gray-700 dark:text-gray-300"
    }, "\u6392\u5E8F\u65B9\u5F0F"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex gap-2"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>setSortBy('name'),
        className: "px-3 py-1.5 text-sm rounded-lg ".concat(sortBy === 'name' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300')
    }, "\u540D\u79F0"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>setSortBy('date'),
        className: "px-3 py-1.5 text-sm rounded-lg ".concat(sortBy === 'date' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300')
    }, "\u65F6\u95F4"))), sortedFiles.length > 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "grid grid-cols-2 gap-3"
    }, sortedFiles.map((file)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            key: file.id,
            className: "bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-md ".concat(selectedFiles.has(file.id) ? 'ring-2 ring-blue-500' : ''),
            onClick: (e)=>{
                var isCtrlPressed = e.ctrlKey || e.metaKey;
                if (isCtrlPressed) {
                    onSelectFile(file.id, true);
                } else if (selectedFiles.size > 0) {
                    onSelectFile(file.id, false);
                } else {
                    onFileClick(file);
                }
            }
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "h-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: getFileIcon(file),
            size: 48,
            className: "text-gray-500 dark:text-gray-400"
        })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "p-3"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h3", {
            className: "text-sm font-medium text-gray-900 dark:text-white truncate mb-1"
        }, file.name), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "flex items-center justify-between text-xs text-gray-500 dark:text-gray-400"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, file.type === 'folder' || file.isFolder ? '文件夹' : formatFileSize(file.size)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, formatDate(file.lastModified)))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "p-2 border-t border-gray-200 dark:border-gray-800 flex justify-end gap-2"
        }, !isTrash && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: (e)=>{
                e.stopPropagation();
                onFileShare(file);
            },
            className: "p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: "share",
            size: 16,
            className: "text-gray-600 dark:text-gray-400"
        })), isTrash ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: (e)=>{
                e.stopPropagation();
                onFileRestore(file.id);
            },
            className: "p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: "restore",
            size: 16,
            className: "text-gray-600 dark:text-gray-400"
        })) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: (e)=>{
                e.stopPropagation();
                onFileDownload(file);
            },
            className: "p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: "download",
            size: 16,
            className: "text-gray-600 dark:text-gray-400"
        })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: (e)=>{
                e.stopPropagation();
                setFileToDelete({
                    id: file.id,
                    name: file.name,
                    isFromTrash: isTrash
                });
                setShowDeleteConfirm(true);
            },
            className: "p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: "trash",
            size: 16,
            className: "text-gray-600 dark:text-gray-400"
        })))))) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-gray-900 rounded-lg shadow-sm"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "text-6xl mb-4"
    }, "\uD83D\uDCC1"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h3", {
        className: "text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
    }, "\u6682\u65E0\u6587\u4EF6"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-gray-500 dark:text-gray-400"
    }, "\u4E0A\u4F20\u6587\u4EF6\u6216\u521B\u5EFA\u6587\u4EF6\u5939\u5F00\u59CB\u4F7F\u7528")), showDeleteConfirm && fileToDelete && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full mx-4 border border-red-200 dark:border-red-900/50"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "p-6"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center mb-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "trash",
        size: 24,
        className: "text-red-600 dark:text-red-400"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h3", {
        className: "text-lg font-medium text-gray-900 dark:text-white"
    }, "\u786E\u8BA4\u5220\u9664"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-sm text-gray-500 dark:text-gray-400"
    }, fileToDelete.isFromTrash ? '此操作将永久删除文件，无法恢复' : '此操作将把文件移至回收站'))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-6"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-sm text-gray-700 dark:text-gray-300"
    }, "\u60A8\u786E\u5B9A\u8981", fileToDelete.isFromTrash ? '永久删除' : '删除', "\u6587\u4EF6", /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "font-medium text-red-600 dark:text-red-400"
    }, " ", fileToDelete.name), "\u5417\uFF1F")), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex gap-4 justify-end"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>{
            setShowDeleteConfirm(false);
            setFileToDelete(null);
        },
        className: "px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    }, "\u53D6\u6D88"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>{
            if (fileToDelete) {
                onFileDelete(fileToDelete.id, fileToDelete.isFromTrash);
                setShowDeleteConfirm(false);
                setFileToDelete(null);
            }
        },
        className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
    }, fileToDelete.isFromTrash ? '确认永久删除' : '确认删除'))))), showMultiDeleteConfirm && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full mx-4 border border-red-200 dark:border-red-900/50"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "p-6"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center mb-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "trash",
        size: 24,
        className: "text-red-600 dark:text-red-400"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h3", {
        className: "text-lg font-medium text-gray-900 dark:text-white"
    }, "\u786E\u8BA4\u6279\u91CF\u5220\u9664"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-sm text-gray-500 dark:text-gray-400"
    }, isTrash ? '此操作将永久删除所选文件，无法恢复' : '此操作将把所选文件移至回收站'))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-6"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-sm text-gray-700 dark:text-gray-300 mb-2"
    }, "\u60A8\u786E\u5B9A\u8981", isTrash ? '永久删除' : '删除', "\u4EE5\u4E0B ", selectedFiles.size, " \u4E2A\u6587\u4EF6\u5417\uFF1F"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "max-h-32 overflow-y-auto bg-white dark:bg-gray-800 rounded p-2 border border-gray-200 dark:border-gray-700"
    }, Array.from(selectedFiles).map((fileId)=>{
        var file = files.find((f)=>f.id === fileId);
        return file ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            key: fileId,
            className: "text-sm text-gray-600 dark:text-gray-400 py-1"
        }, "\u2022 ", file.name) : null;
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex gap-4 justify-end"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>{
            setShowMultiDeleteConfirm(false);
        },
        className: "px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    }, "\u53D6\u6D88"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>{
            var fileIds = Array.from(selectedFiles);
            onMultiFileDelete(fileIds, isTrash);
            selectedFiles.forEach((fileId)=>onSelectFile(fileId, true));
            setShowMultiDeleteConfirm(false);
        },
        className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
    }, isTrash ? '确认永久删除' : '确认删除'))))));
}
_s(MobileFileList, "c1PXEPP7eyCXrmUL7VKmpRa9D4Y=");
_c = MobileFileList;
var _c;
__turbopack_context__.k.register(_c, "MobileFileList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/files/FilePreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilePreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Icon.tsx [app-client] (ecmascript)");
'use client';
;
;
function FilePreview(_ref) {
    var _file$type11, _file$type12, _file$type13;
    var { file, onClose, onDownload } = _ref;
    var getFileIcon = (file)=>{
        var _file$type, _file$type2, _file$type3, _file$type4, _file$type5, _file$type6, _file$type7, _file$type8, _file$type9, _file$type10;
        if (file.type === 'folder' || file.isFolder) return 'folder';
        if ((_file$type = file.type) !== null && _file$type !== void 0 && _file$type.startsWith('image/')) return 'image';
        if ((_file$type2 = file.type) !== null && _file$type2 !== void 0 && _file$type2.startsWith('video/')) return 'video';
        if ((_file$type3 = file.type) !== null && _file$type3 !== void 0 && _file$type3.startsWith('audio/')) return 'audio';
        if ((_file$type4 = file.type) !== null && _file$type4 !== void 0 && _file$type4.includes('pdf')) return 'pdf';
        if ((_file$type5 = file.type) !== null && _file$type5 !== void 0 && _file$type5.includes('word') || (_file$type6 = file.type) !== null && _file$type6 !== void 0 && _file$type6.includes('document')) return 'document';
        if ((_file$type7 = file.type) !== null && _file$type7 !== void 0 && _file$type7.includes('excel') || (_file$type8 = file.type) !== null && _file$type8 !== void 0 && _file$type8.includes('sheet')) return 'sheet';
        if ((_file$type9 = file.type) !== null && _file$type9 !== void 0 && _file$type9.includes('zip') || (_file$type10 = file.type) !== null && _file$type10 !== void 0 && _file$type10.includes('compressed')) return 'zip';
        return 'file';
    };
    var formatFileSize = (size)=>{
        if (size < 1024) return "".concat(size, " B");
        if (size < 1024 * 1024) return "".concat((size / 1024).toFixed(1), " KB");
        return "".concat((size / (1024 * 1024)).toFixed(1), " MB");
    };
    var formatDate = (date)=>{
        var d = new Date(date);
        return d.toLocaleString();
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] flex flex-col"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center gap-3"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: getFileIcon(file),
        size: 24
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h3", {
        className: "text-lg font-medium text-gray-900 dark:text-white truncate"
    }, file.name)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center gap-2"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: onDownload,
        className: "px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "download",
        size: 16,
        color: "white"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "ml-1"
    }, "\u4E0B\u8F7D")), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: onClose,
        className: "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "close",
        size: 20
    })))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex-1 overflow-auto p-4"
    }, (_file$type11 = file.type) !== null && _file$type11 !== void 0 && _file$type11.startsWith('image/') && file.url ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center justify-center"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("img", {
        src: file.url,
        alt: file.name,
        className: "max-w-full max-h-[60vh] object-contain"
    })) : (_file$type12 = file.type) !== null && _file$type12 !== void 0 && _file$type12.startsWith('video/') && file.url ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center justify-center"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("video", {
        src: file.url,
        controls: true,
        className: "max-w-full max-h-[60vh]"
    })) : (_file$type13 = file.type) !== null && _file$type13 !== void 0 && _file$type13.startsWith('audio/') && file.url ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center justify-center"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("audio", {
        src: file.url,
        controls: true,
        className: "w-full"
    })) : file.url ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex flex-col items-center justify-center h-64 text-center"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: getFileIcon(file),
        size: 64,
        className: "mb-4 text-gray-400"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-gray-500 dark:text-gray-400"
    }, "\u65E0\u6CD5\u76F4\u63A5\u9884\u89C8\u6B64\u6587\u4EF6\u7C7B\u578B"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-gray-400 dark:text-gray-500 mt-2"
    }, "\u8BF7\u4E0B\u8F7D\u540E\u67E5\u770B")) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex flex-col items-center justify-center h-64 text-center"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "file",
        size: 64,
        className: "mb-4 text-gray-400"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-gray-500 dark:text-gray-400"
    }, "\u6587\u4EF6\u65E0\u5185\u5BB9\u6216URL\u65E0\u6548"))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "grid grid-cols-2 gap-4 text-sm"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-gray-500 dark:text-gray-400 mb-1"
    }, "\u6587\u4EF6\u7C7B\u578B"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-gray-900 dark:text-white"
    }, file.type || '未知')), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-gray-500 dark:text-gray-400 mb-1"
    }, "\u6587\u4EF6\u5927\u5C0F"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-gray-900 dark:text-white"
    }, formatFileSize(file.size))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-gray-500 dark:text-gray-400 mb-1"
    }, "\u521B\u5EFA\u65F6\u95F4"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-gray-900 dark:text-white"
    }, formatDate(file.lastModified))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-gray-500 dark:text-gray-400 mb-1"
    }, "\u4FEE\u6539\u65F6\u95F4"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-gray-900 dark:text-white"
    }, formatDate(file.lastModified)))))));
}
_c = FilePreview;
var _c;
__turbopack_context__.k.register(_c, "FilePreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/modals/CreateFolderModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateFolderModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
;
function CreateFolderModal(_ref) {
    _s();
    var isOpen = _ref.isOpen, onClose = _ref.onClose, onCreate = _ref.onCreate;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), _useState2 = _slicedToArray(_useState, 2), folderName = _useState2[0], setFolderName = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), _useState4 = _slicedToArray(_useState3, 2), error = _useState4[0], setError = _useState4[1];
    var handleSubmit = function handleSubmit(e) {
        e.preventDefault();
        if (!folderName.trim()) {
            setError('文件夹名称不能为空');
            return;
        }
        onCreate(folderName.trim());
        setFolderName('');
        setError('');
        onClose();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-white dark:bg-gray-900 rounded-lg w-full max-w-md overflow-hidden"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h2", {
        className: "text-lg font-semibold text-gray-900 dark:text-white"
    }, "\u521B\u5EFA\u65B0\u6587\u4EF6\u5939"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: onClose,
        className: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    })))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        onSubmit: handleSubmit,
        className: "p-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "mb-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("label", {
        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
    }, "\u6587\u4EF6\u5939\u540D\u79F0"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        type: "text",
        value: folderName,
        onChange: function onChange(e) {
            return setFolderName(e.target.value);
        },
        className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white",
        placeholder: "\u8F93\u5165\u6587\u4EF6\u5939\u540D\u79F0"
    }), error && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "mt-1 text-sm text-red-600 dark:text-red-400"
    }, error)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex justify-end gap-3"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        type: "button",
        onClick: onClose,
        className: "px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    }, "\u53D6\u6D88"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        type: "submit",
        className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    }, "\u521B\u5EFA")))));
}
_s(CreateFolderModal, "9QOGiomQKSM9Bp07erX4fx4Ws/I=");
_c = CreateFolderModal;
var _c;
__turbopack_context__.k.register(_c, "CreateFolderModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/files/ShareModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShareModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n) {
        return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(void 0);
        });
    };
}
;
function ShareModal(_ref) {
    _s();
    var { isOpen, onClose, file, files } = _ref;
    var [shareLink, setShareLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    var [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShareModal.useEffect": ()=>{
            if (files && files.length > 0) {
                // 多文件分享
                var fileNames = files.map({
                    "ShareModal.useEffect.fileNames": (f)=>f.name
                }["ShareModal.useEffect.fileNames"]).join(', ');
                var link = window.location.origin;
                setShareLink(link);
                setMessage("\u6211\u5206\u4EAB\u4E86".concat(files.length, "\u4E2A\u6587\u4EF6: ").concat(fileNames));
            } else if (file) {
                // 单个文件分享
                var _link = file.url || window.location.origin + '/file/' + file.id;
                setShareLink(_link);
                setMessage("\u6211\u5206\u4EAB\u4E86\u4E00\u4E2A\u6587\u4EF6: ".concat(file.name));
            }
        }
    }["ShareModal.useEffect"], [
        file,
        files
    ]);
    var handleShare = (platform)=>{
        var shareUrl = '';
        var isMultiFile = files && files.length > 0;
        switch(platform){
            case 'wechat':
                // 微信分享需要特殊处理，这里使用二维码或链接
                var title = isMultiFile ? "\u5206\u4EAB\u4E86".concat(files.length, "\u4E2A\u6587\u4EF6") : (file === null || file === void 0 ? void 0 : file.name) || '分享文件';
                shareUrl = "https://wx.qq.com/share?url=".concat(encodeURIComponent(shareLink), "&title=").concat(encodeURIComponent(title));
                break;
            case 'whatsapp':
                shareUrl = "https://wa.me/?text=".concat(encodeURIComponent("".concat(message, " ").concat(shareLink)));
                break;
            case 'email':
                var emailSubject = isMultiFile ? "\u5206\u4EAB\u4E86".concat(files.length, "\u4E2A\u6587\u4EF6") : '分享文件';
                shareUrl = "mailto:?subject=".concat(encodeURIComponent(emailSubject), "&body=").concat(encodeURIComponent("".concat(message, " ").concat(shareLink)));
                break;
            default:
                break;
        }
        if (shareUrl) {
            window.open(shareUrl, '_blank');
        }
    };
    var copyToClipboard = /*#__PURE__*/ function() {
        var _ref2 = _asyncToGenerator(function*() {
            try {
                yield navigator.clipboard.writeText(shareLink);
                alert('链接已复制到剪贴板');
            } catch (err) {
                console.error('复制失败:', err);
                alert('复制失败，请手动复制');
            }
        });
        return function copyToClipboard() {
            return _ref2.apply(this, arguments);
        };
    }();
    if (!isOpen) return null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full mx-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "p-6"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h3", {
        className: "text-lg font-medium text-gray-900 dark:text-white"
    }, "\u5206\u4EAB\u6587\u4EF6"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: onClose,
        className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    })))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "mb-6"
    }, files && files.length > 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center mb-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "text-blue-600 dark:text-blue-400"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "14 2 14 8 20 8"
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h4", {
        className: "font-medium text-gray-900 dark:text-white"
    }, files.length, "\u4E2A\u6587\u4EF6"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-sm text-gray-500 dark:text-gray-400"
    }, files.map((f)=>f.name).join(', ')))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "mb-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h5", {
        className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    }, "\u6587\u4EF6\u5217\u8868"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3"
    }, files.map((f, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            key: index,
            className: "flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: "text-sm text-gray-900 dark:text-white"
        }, f.name), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: "text-sm text-gray-500 dark:text-gray-400"
        }, f.size ? "".concat((f.size / 1024).toFixed(2), " KB") : '未知大小')))))) : file ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center mb-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "text-blue-600 dark:text-blue-400"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "14 2 14 8 20 8"
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h4", {
        className: "font-medium text-gray-900 dark:text-white"
    }, file.name), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-sm text-gray-500 dark:text-gray-400"
    }, file.size ? "".concat((file.size / 1024).toFixed(2), " KB") : '未知大小')))) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "mb-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("label", {
        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    }, "\u5206\u4EAB\u94FE\u63A5"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        type: "text",
        value: shareLink,
        readOnly: true,
        className: "flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-l-lg dark:bg-gray-800 dark:text-white"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: copyToClipboard,
        className: "bg-blue-600 text-white px-3 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
    }, "\u590D\u5236"))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "mb-6"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("label", {
        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    }, "\u5206\u4EAB\u6D88\u606F"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("textarea", {
        value: message,
        onChange: (e)=>setMessage(e.target.value),
        className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white",
        rows: 3
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "grid grid-cols-3 gap-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>handleShare('wechat'),
        className: "flex flex-col items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-2"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "text-green-600 dark:text-green-400"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
        x: "2",
        y: "9",
        width: "4",
        height: "12"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "4",
        cy: "4",
        r: "2"
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-sm font-medium text-gray-700 dark:text-gray-300"
    }, "\u5FAE\u4FE1")), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>handleShare('whatsapp'),
        className: "flex flex-col items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-2"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "text-green-600 dark:text-green-400"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-sm font-medium text-gray-700 dark:text-gray-300"
    }, "WhatsApp")), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>handleShare('email'),
        className: "flex flex-col items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "text-blue-600 dark:text-blue-400"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "22,6 12,13 2,6"
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-sm font-medium text-gray-700 dark:text-gray-300"
    }, "\u90AE\u4EF6")))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "mt-6 flex justify-end"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: onClose,
        className: "px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    }, "\u53D6\u6D88")))));
}
_s(ShareModal, "sLbr2FIGrgW5jYBtDtb7Lnw3lDU=");
_c = ShareModal;
var _c;
__turbopack_context__.k.register(_c, "ShareModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/modals/UserManualModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserManualModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n) {
        return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(void 0);
        });
    };
}
;
function UserManualModal(_ref) {
    _s();
    var { isOpen, onClose } = _ref;
    var [manualContent, setManualContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    var [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserManualModal.useEffect": ()=>{
            if (isOpen) {
                loadUserManual();
            }
        }
    }["UserManualModal.useEffect"], [
        isOpen
    ]);
    var loadUserManual = /*#__PURE__*/ function() {
        var _ref2 = _asyncToGenerator(function*() {
            try {
                setIsLoading(true);
                var response = yield fetch('/user_manual.txt');
                if (response.ok) {
                    var content = yield response.text();
                    setManualContent(content);
                } else {
                    setManualContent('无法加载用户说明书');
                }
            } catch (error) {
                console.error('Error loading user manual:', error);
                setManualContent('加载用户说明书时出错');
            } finally{
                setIsLoading(false);
            }
        });
        return function loadUserManual() {
            return _ref2.apply(this, arguments);
        };
    }();
    if (!isOpen) return null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[80vh] flex flex-col"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h2", {
        className: "text-xl font-bold text-gray-900 dark:text-white"
    }, "Storage Center \u7528\u6237\u8BF4\u660E\u4E66"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-sm text-gray-500 dark:text-gray-400 mt-1"
    }, "\u7248\u672C 1.0 \xB7 \u66F4\u65B0\u65E5\u671F\uFF1A2026\u5E744\u670810\u65E5")), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: onClose,
        className: "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "text-gray-600 dark:text-gray-400"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    })))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex-1 overflow-y-auto p-6"
    }, isLoading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center justify-center h-48"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "text-center"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-gray-600 dark:text-gray-400"
    }, "\u6B63\u5728\u52A0\u8F7D\u7528\u6237\u8BF4\u660E\u4E66..."))) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("pre", {
        className: "font-mono text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
    }, manualContent)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center justify-between p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "text-sm text-gray-500 dark:text-gray-400"
    }, "\u672C\u6587\u6863\u4E3A\u7CFB\u7EDF\u5F3A\u5236\u5C55\u793A\u5185\u5BB9\uFF0C\u4E0D\u53EF\u5220\u9664\u3001\u4E0D\u53EF\u7F16\u8F91\u3001\u4E0D\u53EF\u9690\u85CF"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: onClose,
        className: "px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
    }, "\u5173\u95ED"))));
}
_s(UserManualModal, "8EO5gpLhwDziLBqwGpbBhWchBwM=");
_c = UserManualModal;
var _c;
__turbopack_context__.k.register(_c, "UserManualModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/layout/Breadcrumb.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Breadcrumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Icon.tsx [app-client] (ecmascript)");
;
;
function Breadcrumb(_ref) {
    var { items, onItemClick } = _ref;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center gap-2 overflow-x-auto pb-2"
    }, items.map((item, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
            key: item.id || 'root'
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: ()=>onItemClick(index),
            className: "text-sm ".concat(index === items.length - 1 ? 'font-semibold text-gray-900 dark:text-white' : 'text-blue-600 dark:text-blue-400 hover:underline')
        }, item.name), index < items.length - 1 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: "sort",
            size: 16,
            className: "text-gray-400 flex-shrink-0 transform rotate-90"
        }))));
}
_c = Breadcrumb;
var _c;
__turbopack_context__.k.register(_c, "Breadcrumb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ChunkFileUploader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChunkFileUploader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Icon.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n) {
        return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(void 0);
        });
    };
}
;
;
// 分块大小：5MB
var CHUNK_SIZE = 5 * 1024 * 1024;
// 分块上传函数
var uploadFileInChunks = /*#__PURE__*/ function() {
    var _ref = _asyncToGenerator(function*(file) {
        return new Promise((resolve, reject)=>{
            // 模拟分块上传过程
            // 在实际应用中，这里应该调用后端API进行分块上传
            setTimeout(()=>{
                // 创建文件对象URL用于本地预览
                var fileUrl = URL.createObjectURL(file);
                resolve(fileUrl);
            }, 1000);
        });
    });
    return function uploadFileInChunks(_x) {
        return _ref.apply(this, arguments);
    };
}();
function ChunkFileUploader(_ref2) {
    _s();
    var { onFilesUploaded } = _ref2;
    var fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    var [uploadingFileName, setUploadingFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    var handleFileSelect = /*#__PURE__*/ function() {
        var _ref3 = _asyncToGenerator(function*(e) {
            if (e.target.files && e.target.files.length > 0) {
                var files = Array.from(e.target.files);
                yield processFiles(files);
            }
        });
        return function handleFileSelect(_x2) {
            return _ref3.apply(this, arguments);
        };
    }();
    var handleClick = ()=>{
        var _fileInputRef$current;
        (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 || _fileInputRef$current.click();
    };
    var handleDragOver = (e)=>{
        e.preventDefault();
        setIsDragging(true);
    };
    var handleDragLeave = (e)=>{
        e.preventDefault();
        setIsDragging(false);
    };
    var handleDrop = /*#__PURE__*/ function() {
        var _ref4 = _asyncToGenerator(function*(e) {
            e.preventDefault();
            setIsDragging(false);
            if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                var files = Array.from(e.dataTransfer.files);
                yield processFiles(files);
            }
        });
        return function handleDrop(_x3) {
            return _ref4.apply(this, arguments);
        };
    }();
    var processFiles = /*#__PURE__*/ function() {
        var _ref5 = _asyncToGenerator(function*(files) {
            setIsUploading(true);
            setUploadProgress(0);
            try {
                for(var i = 0; i < files.length; i++){
                    var file = files[i];
                    setUploadingFileName(file.name);
                    // 模拟上传进度
                    for(var progress = 0; progress <= 100; progress += 10){
                        setUploadProgress(progress);
                        yield new Promise((resolve)=>setTimeout(resolve, 100));
                    }
                    // 执行分块上传
                    yield uploadFileInChunks(file);
                }
                // 上传完成后调用回调
                onFilesUploaded(files);
            } catch (error) {
                console.error('Error uploading files:', error);
                alert('文件上传失败，请重试。');
            } finally{
                setIsUploading(false);
                setUploadProgress(0);
                setUploadingFileName('');
            }
        });
        return function processFiles(_x4) {
            return _ref5.apply(this, arguments);
        };
    }();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "inline-block relative"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        ref: fileInputRef,
        type: "file",
        multiple: true,
        className: "hidden",
        onChange: handleFileSelect,
        "data-testid": "file-input"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: handleClick,
        disabled: isUploading,
        className: "flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 transition-all duration-300 text-sm md:text-base ".concat(isDragging ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-500 dark:border-blue-400 text-blue-700 dark:text-blue-300 border-2 border-dashed' : isUploading ? 'bg-gray-200 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed' : 'bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700', "\n          rounded-md")
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "upload",
        size: 16
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "md:inline hidden"
    }, "\u4E0A\u4F20"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "hidden md:inline"
    }, "\u4E0A\u4F20\u6587\u4EF6"))), isUploading && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 p-3 rounded-md shadow-lg border border-gray-200 dark:border-gray-800 z-10"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex flex-col gap-2"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex justify-between items-center"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-sm font-medium text-gray-700 dark:text-gray-300"
    }, uploadingFileName), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-sm text-gray-500 dark:text-gray-400"
    }, uploadProgress, "%")), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-blue-600 h-2.5 rounded-full transition-all duration-300",
        style: {
            width: "".concat(uploadProgress, "%")
        }
    })))));
}
_s(ChunkFileUploader, "/Z0evYYks0HqLEuefi3j271f51w=");
_c = ChunkFileUploader;
var _c;
__turbopack_context__.k.register(_c, "ChunkFileUploader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/files/FileActions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ChunkFileUploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ChunkFileUploader.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function FileActions(_ref) {
    _s();
    var { onOpenCreateFolderModal, onFilesUploaded, currentFolderName, isUploadingToMega = false } = _ref;
    var [isCreatingFolder, setIsCreatingFolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var handleCreateFolderClick = ()=>{
        setIsCreatingFolder(true);
        setTimeout(()=>{
            setIsCreatingFolder(false);
            onOpenCreateFolderModal();
        }, 300);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center justify-between flex-wrap gap-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h2", {
        className: "text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
    }, currentFolderName), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center gap-3"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: handleCreateFolderClick,
        disabled: isCreatingFolder,
        className: "flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow text-sm md:text-base disabled:opacity-70 disabled:cursor-not-allowed"
    }, isCreatingFolder ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: "animate-spin -ml-1 mr-2 h-5 w-5 text-white",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        className: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "4"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        className: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    })) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: "plus",
        size: 18,
        color: "white"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "md:inline hidden"
    }, "\u65B0\u5EFA"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "hidden md:inline"
    }, isCreatingFolder ? '打开中...' : '新建文件夹')), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ChunkFileUploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onFilesUploaded: onFilesUploaded
    }), isUploadingToMega && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center gap-2 px-3 py-1.5 bg-purple-600 text-white rounded-lg text-sm"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        className: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "4"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        className: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, "\u4E0A\u4F20\u5230Mega\u4E2D..."))));
}
_s(FileActions, "dGiJzNsphUnQ1sBCZ6Aa/c4hYNw=");
_c = FileActions;
var _c;
__turbopack_context__.k.register(_c, "FileActions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/DownloadProgress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DownloadProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function DownloadProgress(_ref) {
    var { isDownloading, progress, fileName } = _ref;
    if (!isDownloading) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 z-50 min-w-[300px]"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex flex-col gap-2"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex justify-between items-center"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-sm font-medium text-gray-700 dark:text-gray-300"
    }, "\u4E0B\u8F7D\u4E2D: ", fileName), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-sm text-gray-500 dark:text-gray-400"
    }, progress, "%")), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-blue-600 h-2.5 rounded-full transition-all duration-300",
        style: {
            width: "".concat(progress, "%")
        }
    }))));
}
_c = DownloadProgress;
var _c;
__turbopack_context__.k.register(_c, "DownloadProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/UploadProgress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function UploadProgress(_ref) {
    _s();
    var { isUploading, progress, fileName, onCancelUpload, onRetryUpload, remainingTime, isTimeout, error, status } = _ref;
    var [showError, setShowError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // 只在上传中或有错误/超时状态时显示
    if (!isUploading && !error && !isTimeout) {
        return null;
    }
    var isErrorState = error || isTimeout;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 z-50 min-w-[400px] max-w-[80vw]"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex flex-col gap-3"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex justify-between items-center"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center gap-2"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-8 h-8 flex items-center justify-center rounded-full ".concat(isErrorState ? 'bg-red-100 dark:bg-red-900' : 'bg-purple-100 dark:bg-purple-900')
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: isErrorState ? "text-red-600 dark:text-red-400" : "text-purple-600 dark:text-purple-400"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "7 10 12 15 17 10"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "3"
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h3", {
        className: "text-sm font-medium text-gray-700 dark:text-gray-300"
    }, isTimeout ? '上传超时' : error ? '上传失败' : '上传中'), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-xs text-gray-500 dark:text-gray-400 truncate"
    }, fileName))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex gap-2"
    }, isErrorState && onRetryUpload && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: onRetryUpload,
        className: "px-3 py-1.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg text-sm hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
    }, "\u91CD\u8BD5"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: onCancelUpload,
        className: "px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    }, isErrorState ? '关闭' : '取消'))), error && showError && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded-lg"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "12"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "12",
        y1: "16",
        x2: "12.01",
        y2: "16"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, error)), isTimeout && showError && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 p-2 rounded-lg"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "12 6 12 12 16 14"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, "\u4E0A\u4F20\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u540E\u91CD\u8BD5")), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-full"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex justify-between items-center mb-1"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-xs text-gray-500 dark:text-gray-400"
    }, "\u8FDB\u5EA6"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex items-center gap-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-xs font-medium text-gray-700 dark:text-gray-300"
    }, progress, "%"), !isErrorState && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-xs text-gray-500 dark:text-gray-400"
    }, "\u5269\u4F59: ", remainingTime))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "h-2.5 rounded-full transition-all duration-300 ease-in-out ".concat(isErrorState ? 'bg-red-500' : 'bg-purple-600'),
        style: {
            width: "".concat(progress, "%"),
            backgroundImage: isErrorState ? 'linear-gradient(90deg, #ef4444, #f87171)' : 'linear-gradient(90deg, #8b5cf6, #a78bfa)'
        }
    }, !isErrorState && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "w-full h-full bg-white/20 animate-pulse"
    })))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex justify-between items-center text-xs text-gray-500 dark:text-gray-400"
    }, isErrorState ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, "\u4E0A\u4F20\u5931\u8D25\uFF0C\u53EF\u70B9\u51FB\u91CD\u8BD5\u6309\u94AE\u91CD\u65B0\u4E0A\u4F20") : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, "\u6B63\u5728\u5904\u7406\u60A8\u7684\u6587\u4EF6\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85"), !isErrorState && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, "\u82E5\u4E0A\u4F20\u65F6\u95F4\u8FC7\u957F\uFF0C\u53EF\u5C1D\u8BD5\u53D6\u6D88\u540E\u91CD\u65B0\u4E0A\u4F20"))));
}
_s(UploadProgress, "ndJHyh9GuLOGb4l8hEf/uUXuWbw=");
_c = UploadProgress;
var _c;
__turbopack_context__.k.register(_c, "UploadProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/UploadTaskList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadTaskList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function UploadTaskList(_ref) {
    var { tasks, onRetryTask, onCloseTask, onToggleVisibility, isVisible } = _ref;
    if (!isVisible) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: onToggleVisibility,
            className: "fixed bottom-4 left-4 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-40",
            title: "\u67E5\u770B\u4E0A\u4F20\u4EFB\u52A1"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
            points: "7 10 12 15 17 10"
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
            x1: "12",
            y1: "15",
            x2: "12",
            y2: "3"
        })), tasks.length > 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
        }, tasks.length));
    }
    var formatFileSize = (bytes)=>{
        if (bytes === 0) return '0 B';
        var k = 1024;
        var sizes = [
            'B',
            'KB',
            'MB',
            'GB'
        ];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };
    var formatTime = (timestamp)=>{
        var date = new Date(timestamp);
        return date.toLocaleString();
    };
    var getStatusIcon = (status)=>{
        switch(status){
            case 'success':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "text-green-500"
                }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
                    points: "20 6 9 17 4 12"
                }));
            case 'error':
            case 'timeout':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "text-red-500"
                }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
                    x1: "12",
                    y1: "8",
                    x2: "12",
                    y2: "12"
                }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
                    x1: "12",
                    y1: "16",
                    x2: "12.01",
                    y2: "16"
                }));
            case 'uploading':
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "text-blue-500 animate-spin"
                }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
                    x1: "12",
                    y1: "2",
                    x2: "12",
                    y2: "6"
                }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
                    x1: "12",
                    y1: "18",
                    x2: "12",
                    y2: "22"
                }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
                    x1: "4.93",
                    y1: "4.93",
                    x2: "7.76",
                    y2: "7.76"
                }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
                    x1: "16.24",
                    y1: "16.24",
                    x2: "19.07",
                    y2: "19.07"
                }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
                    x1: "2",
                    y1: "12",
                    x2: "6",
                    y2: "12"
                }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
                    x1: "18",
                    y1: "12",
                    x2: "22",
                    y2: "12"
                }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
                    x1: "4.93",
                    y1: "19.07",
                    x2: "7.76",
                    y2: "16.24"
                }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
                    x1: "16.24",
                    y1: "7.76",
                    x2: "19.07",
                    y2: "4.93"
                }));
            default:
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "text-gray-500"
                }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
                    x1: "12",
                    y1: "8",
                    x2: "12",
                    y2: "12"
                }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
                    x1: "12",
                    y1: "16",
                    x2: "12.01",
                    y2: "16"
                }));
        }
    };
    var getStatusText = (status)=>{
        switch(status){
            case 'success':
                return '上传成功';
            case 'error':
                return '上传失败';
            case 'timeout':
                return '上传超时';
            case 'uploading':
                return '上传中';
            case 'pending':
                return '等待上传';
            default:
                return '未知状态';
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "fixed bottom-4 left-4 z-40"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: onToggleVisibility,
        className: "absolute bottom-0 left-0 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-10",
        title: "\u5173\u95ED\u4E0A\u4F20\u4EFB\u52A1\u5217\u8868"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 p-4 w-80 max-h-96 overflow-y-auto mb-16"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "flex justify-between items-center mb-4"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h3", {
        className: "text-sm font-medium text-gray-700 dark:text-gray-300"
    }, "\u4E0A\u4F20\u4EFB\u52A1\u5386\u53F2"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "text-xs text-gray-500 dark:text-gray-400"
    }, tasks.length, " \u4E2A\u4EFB\u52A1")), tasks.length === 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "text-center py-8 text-gray-500 dark:text-gray-400"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "mx-auto mb-2 opacity-30"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "7 10 12 15 17 10"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "3"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: "text-sm"
    }, "\u6682\u65E0\u4E0A\u4F20\u4EFB\u52A1")) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "space-y-3"
    }, tasks.map((task)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            key: task.id,
            className: "border border-gray-200 dark:border-gray-800 rounded-lg p-3"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "flex justify-between items-start mb-2"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "flex items-center gap-2"
        }, getStatusIcon(task.status), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "flex-1 min-w-0"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
            className: "text-sm font-medium text-gray-700 dark:text-gray-300 truncate"
        }, task.fileName), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-1"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, formatFileSize(task.fileSize)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, "\u2022"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", null, formatTime(task.startTime)), task.isMegaFile && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: "px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded"
        }, "MEGA")))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: ()=>onCloseTask(task.id),
            className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
        })))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-2"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "h-1.5 rounded-full transition-all duration-300 ease-in-out ".concat(task.status === 'success' ? 'bg-green-500' : task.status === 'error' || task.status === 'timeout' ? 'bg-red-500' : 'bg-purple-600'),
            style: {
                width: "".concat(task.progress, "%")
            }
        })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "flex justify-between items-center text-xs"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: "font-medium ".concat(task.status === 'success' ? 'text-green-500' : task.status === 'error' || task.status === 'timeout' ? 'text-red-500' : 'text-blue-500')
        }, getStatusText(task.status)), task.errorMessage && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: "text-red-500 truncate max-w-xs"
        }, task.errorMessage)), (task.status === 'error' || task.status === 'timeout') && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "mt-2 flex justify-end"
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
            onClick: ()=>onRetryTask(task),
            className: "px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-xs hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
        }, "\u91CD\u8BD5")))))));
}
_c = UploadTaskList;
var _c;
__turbopack_context__.k.register(_c, "UploadTaskList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/files/FileManagerReducer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fileManagerReducer",
    ()=>fileManagerReducer,
    "initialState",
    ()=>initialState
]);
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var initialState = {
    files: [],
    selectedFile: null,
    selectedSection: 'all',
    isCreateFolderModalOpen: false,
    isShareModalOpen: false,
    isUserManualModalOpen: false,
    selectedFileForShare: null,
    selectedFiles: new Set(),
    selectedFilesForShare: [],
    usedStorage: 0,
    // 初始化为0，将从实际存储使用情况获取
    totalStorage: 5 * 1024 * 1024 * 1024,
    // 5GB 存储限制
    currentFolder: null,
    breadcrumb: [
        {
            id: null,
            name: '主页'
        }
    ],
    searchQuery: '',
    isSearching: false,
    isMobile: false
};
var fileManagerReducer = (state, action)=>{
    switch(action.type){
        case 'SET_FILES':
            return _objectSpread(_objectSpread({}, state), {}, {
                files: action.payload
            });
        case 'SET_SELECTED_FILE':
            return _objectSpread(_objectSpread({}, state), {}, {
                selectedFile: action.payload
            });
        case 'SET_SELECTED_SECTION':
            return _objectSpread(_objectSpread({}, state), {}, {
                selectedSection: action.payload
            });
        case 'SET_CREATE_FOLDER_MODAL':
            return _objectSpread(_objectSpread({}, state), {}, {
                isCreateFolderModalOpen: action.payload
            });
        case 'SET_SHARE_MODAL':
            return _objectSpread(_objectSpread({}, state), {}, {
                isShareModalOpen: action.payload
            });
        case 'SET_USER_MANUAL_MODAL':
            return _objectSpread(_objectSpread({}, state), {}, {
                isUserManualModalOpen: action.payload
            });
        case 'SET_SELECTED_FILE_FOR_SHARE':
            return _objectSpread(_objectSpread({}, state), {}, {
                selectedFileForShare: action.payload
            });
        case 'SET_SELECTED_FILES':
            return _objectSpread(_objectSpread({}, state), {}, {
                selectedFiles: action.payload
            });
        case 'SET_SELECTED_FILES_FOR_SHARE':
            return _objectSpread(_objectSpread({}, state), {}, {
                selectedFilesForShare: action.payload
            });
        case 'SET_USED_STORAGE':
            return _objectSpread(_objectSpread({}, state), {}, {
                usedStorage: Math.max(0, action.payload)
            });
        case 'SET_CURRENT_FOLDER':
            return _objectSpread(_objectSpread({}, state), {}, {
                currentFolder: action.payload
            });
        case 'SET_BREADCRUMB':
            return _objectSpread(_objectSpread({}, state), {}, {
                breadcrumb: action.payload
            });
        case 'SET_SEARCH_QUERY':
            return _objectSpread(_objectSpread({}, state), {}, {
                searchQuery: action.payload
            });
        case 'SET_IS_SEARCHING':
            return _objectSpread(_objectSpread({}, state), {}, {
                isSearching: action.payload
            });
        case 'SET_IS_MOBILE':
            return _objectSpread(_objectSpread({}, state), {}, {
                isMobile: action.payload
            });
        case 'ADD_FILES':
            return _objectSpread(_objectSpread({}, state), {}, {
                files: [
                    ...state.files,
                    ...action.payload
                ]
            });
        case 'DELETE_FILE':
            return _objectSpread(_objectSpread({}, state), {}, {
                files: state.files.map((file)=>file.id === action.payload ? _objectSpread(_objectSpread({}, file), {}, {
                        isDeleted: true,
                        deletedAt: Date.now()
                    }) : file)
            });
        case 'RENAME_FILE':
            return _objectSpread(_objectSpread({}, state), {}, {
                files: state.files.map((file)=>file.id === action.payload.id ? _objectSpread(_objectSpread({}, file), {}, {
                        name: action.payload.name,
                        lastModified: Date.now()
                    }) : file)
            });
        case 'RESTORE_FILE':
            return _objectSpread(_objectSpread({}, state), {}, {
                files: state.files.map((file)=>file.id === action.payload ? _objectSpread(_objectSpread({}, file), {}, {
                        isDeleted: false,
                        deletedAt: null
                    }) : file)
            });
        case 'ADD_FOLDER':
            return _objectSpread(_objectSpread({}, state), {}, {
                files: [
                    ...state.files,
                    action.payload
                ]
            });
        default:
            return state;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/useFileStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cleanupStorageCenterData",
    ()=>cleanupStorageCenterData,
    "deleteFileData",
    ()=>deleteFileData,
    "getCurrentUser",
    ()=>getCurrentUser,
    "getDefaultFiles",
    ()=>getDefaultFiles,
    "getFileDataStorageKey",
    ()=>getFileDataStorageKey,
    "getStorageUsage",
    ()=>getStorageUsage,
    "getUserStorageKey",
    ()=>getUserStorageKey,
    "loadFileData",
    ()=>loadFileData,
    "loadFilesFromStorage",
    ()=>loadFilesFromStorage,
    "saveFileData",
    ()=>saveFileData,
    "saveFilesToStorage",
    ()=>saveFilesToStorage,
    "useFileStorage",
    ()=>useFileStorage
]);
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var getCurrentUser = ()=>{
    return localStorage.getItem('currentUser') || 'anonymous';
};
var getUserStorageKey = ()=>{
    var currentUser = getCurrentUser();
    return "storageCenterFiles_".concat(currentUser);
};
var getFileDataStorageKey = (fileId)=>{
    var currentUser = getCurrentUser();
    return "storageCenterFileData_".concat(currentUser, "_").concat(fileId);
};
var getStorageUsage = ()=>{
    var totalSize = 0;
    var storageCenterSize = 0;
    var storageCenterKeys = [];
    try {
        // 存储总容量设置为5GB
        var total = 5 * 1024 * 1024 * 1024;
        // 计算当前使用情况
        for(var key in localStorage){
            if (localStorage.hasOwnProperty(key)) {
                var value = localStorage[key];
                var itemSize = new Blob([
                    value
                ]).size;
                totalSize += itemSize;
                if (key.startsWith('storageCenterFiles_') || key.startsWith('storageCenterFileData_')) {
                    storageCenterSize += itemSize;
                    storageCenterKeys.push({
                        key,
                        size: itemSize
                    });
                }
            }
        }
        return {
            total,
            used: totalSize,
            storageCenterUsed: storageCenterSize,
            storageCenterKeys
        };
    } catch (error) {
        console.error('Error calculating storage usage:', error);
        return {
            total: 5 * 1024 * 1024,
            used: 0,
            storageCenterUsed: 0,
            storageCenterKeys: []
        };
    }
};
var cleanupStorageCenterData = ()=>{
    try {
        var keysToRemove = [];
        for(var key in localStorage){
            if (localStorage.hasOwnProperty(key) && (key.startsWith('storageCenterFiles_') || key.startsWith('storageCenterFileData_'))) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach((key)=>{
            localStorage.removeItem(key);
        });
        console.log("Cleaned up ".concat(keysToRemove.length, " Storage Center keys"));
    } catch (error) {
        console.error('Error cleaning up storage center data:', error);
    }
};
var saveFilesToStorage = (files)=>{
    try {
        var storageKey = getUserStorageKey();
        var filesJson = JSON.stringify(files);
        // 检查数据大小是否可能超出存储限制（5GB）
        var dataSize = new Blob([
            filesJson
        ]).size;
        if (dataSize > 5 * 1024 * 1024 * 1024) {
            console.warn('File metadata exceeds storage limit, some data may be lost');
            return false;
        }
        // 检查当前存储使用情况
        var storageUsage = getStorageUsage();
        var availableStorage = storageUsage.total - storageUsage.used;
        if (dataSize > availableStorage) {
            console.warn('Not enough storage space available for file metadata');
            return false;
        }
        localStorage.setItem(storageKey, filesJson);
        return true;
    } catch (error) {
        console.error('Error saving files to storage:', error);
        return false;
    }
};
var loadFilesFromStorage = ()=>{
    try {
        var storageKey = getUserStorageKey();
        var storedFiles = localStorage.getItem(storageKey);
        if (storedFiles) {
            var files = JSON.parse(storedFiles);
            // 确保所有文件的url都是字符串或undefined
            return files.map((file)=>_objectSpread(_objectSpread({}, file), {}, {
                    url: file.url ? String(file.url) : undefined
                }));
        } else {
            // 使用默认数据作为回退（每个用户独立的默认文件）
            return getDefaultFiles();
        }
    } catch (error) {
        console.error('Error loading files from storage:', error);
        // 使用默认数据作为回退（每个用户独立的默认文件）
        return getDefaultFiles();
    }
};
var saveFileData = (fileId, fileData)=>{
    try {
        var storageKey = getFileDataStorageKey(fileId);
        // 直接尝试保存，让浏览器自然处理配额限制
        localStorage.setItem(storageKey, fileData);
        return true;
    } catch (error) {
        console.error('Error saving file data to storage:', error);
        // 检查是否是配额超出错误
        if (error instanceof DOMException && (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED')) {
            console.warn('localStorage quota exceeded, file may be too large');
        }
        return false;
    }
};
var loadFileData = (fileId)=>{
    try {
        var storageKey = getFileDataStorageKey(fileId);
        return localStorage.getItem(storageKey);
    } catch (error) {
        console.error('Error loading file data from storage:', error);
        return null;
    }
};
var deleteFileData = (fileId)=>{
    try {
        var storageKey = getFileDataStorageKey(fileId);
        localStorage.removeItem(storageKey);
    } catch (error) {
        console.error('Error deleting file data from storage:', error);
    }
};
var getDefaultFiles = ()=>{
    var currentUser = getCurrentUser();
    return [
        {
            id: '1',
            name: '文档',
            type: 'folder',
            size: 0,
            lastModified: Date.now(),
            isFolder: true,
            parentId: null,
            userId: currentUser
        },
        {
            id: '2',
            name: '图片',
            type: 'folder',
            size: 0,
            lastModified: Date.now() - 86400000,
            isFolder: true,
            parentId: null,
            userId: currentUser
        },
        {
            id: '3',
            name: '视频',
            type: 'folder',
            size: 0,
            lastModified: Date.now() - 172800000,
            isFolder: true,
            parentId: null,
            userId: currentUser
        },
        {
            id: '4',
            name: "\u6B22\u8FCE_".concat(currentUser, ".md"),
            type: 'text/markdown',
            size: 1024,
            lastModified: Date.now() - 259200000,
            url: '#',
            parentId: null,
            userId: currentUser
        }
    ];
};
var useFileStorage = ()=>{
    return {
        getCurrentUser,
        getUserStorageKey,
        saveFilesToStorage,
        loadFilesFromStorage,
        saveFileData,
        loadFileData,
        deleteFileData,
        getDefaultFiles,
        getStorageUsage,
        cleanupStorageCenterData
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
var supabaseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_URL;
var supabaseAnonKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// 定义模拟 supabase 实例的类型
// 检查环境变量是否存在且有效
var supabaseInstance;
if (supabaseUrl && supabaseAnonKey && (supabaseUrl.startsWith('http://') || supabaseUrl.startsWith('https://'))) {
    supabaseInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
} else {
    // 当 Supabase 配置无效时，返回一个模拟的客户端
    supabaseInstance = {
        from: ()=>({
                select: ()=>Promise.resolve({
                        data: [],
                        error: null
                    }),
                insert: (data)=>({
                        select: ()=>({
                                single: ()=>Promise.resolve({
                                        data: _objectSpread(_objectSpread({}, data), {}, {
                                            id: Date.now().toString()
                                        }),
                                        error: null
                                    })
                            })
                    }),
                delete: ()=>({
                        eq: ()=>Promise.resolve({
                                error: null
                            })
                    }),
                update: (data)=>({
                        eq: ()=>Promise.resolve({
                                error: null
                            })
                    }),
                eq: ()=>({
                        delete: ()=>Promise.resolve({
                                error: null
                            })
                    })
            }),
        storage: {
            from: ()=>({
                    upload: ()=>Promise.resolve({
                            data: null,
                            error: null
                        }),
                    getPublicUrl: ()=>Promise.resolve({
                            data: {
                                publicUrl: '#'
                            },
                            error: null
                        }),
                    remove: ()=>Promise.resolve({
                            error: null
                        })
                })
        }
    };
}
var supabase = supabaseInstance;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/useFileOperations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFileOperations",
    ()=>useFileOperations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useFileStorage.ts [app-client] (ecmascript)");
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n) {
        return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(void 0);
        });
    };
}
;
;
var useFileOperations = ()=>{
    // 分块上传文件
    var uploadFileInChunks = /*#__PURE__*/ function() {
        var _ref = _asyncToGenerator(function*(file, abortController) {
            var fileId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
            // 直接读取整个文件，避免循环闭包问题
            var fileData = yield new Promise((resolve, reject)=>{
                // 检查是否已取消
                if (abortController !== null && abortController !== void 0 && abortController.signal.aborted) {
                    reject(new Error('上传已取消'));
                    return;
                }
                var reader = new FileReader();
                reader.onload = (e)=>{
                    var _e$target;
                    if (abortController !== null && abortController !== void 0 && abortController.signal.aborted) {
                        reject(new Error('上传已取消'));
                        return;
                    }
                    if ((_e$target = e.target) !== null && _e$target !== void 0 && _e$target.result) {
                        resolve(e.target.result);
                    } else {
                        reject(new Error('文件读取失败'));
                    }
                };
                reader.onerror = ()=>reject(new Error('文件读取失败'));
                reader.readAsDataURL(file);
            });
            return {
                fileId,
                fileData
            };
        });
        return function uploadFileInChunks(_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();
    // 处理文件上传
    var handleFilesUploaded = /*#__PURE__*/ function() {
        var _ref2 = _asyncToGenerator(function*(uploadedFiles, currentFolder, files, updateFiles, updateUsedStorage, abortController) {
            try {
                var currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                var validFiles = uploadedFiles;
                // 处理所有文件上传
                var filePromises = validFiles.map(/*#__PURE__*/ function() {
                    var _ref3 = _asyncToGenerator(function*(file) {
                        try {
                            // 检查是否已取消
                            if (abortController !== null && abortController !== void 0 && abortController.signal.aborted) {
                                throw new Error('上传已取消');
                            }
                            // 创建FormData对象
                            var formData = new FormData();
                            formData.append('file', file);
                            // 调用本地存储API上传文件
                            var response = yield fetch('/api/upload', {
                                method: 'POST',
                                body: formData,
                                signal: abortController === null || abortController === void 0 ? void 0 : abortController.signal
                            });
                            if (!response.ok) {
                                var errorText = yield response.text();
                                throw new Error("\u4E0A\u4F20\u5931\u8D25: ".concat(errorText));
                            }
                            var result = yield response.json();
                            if (!result.success) {
                                throw new Error(result.error || '上传失败');
                            }
                            // 创建文件对象
                            var newFile = {
                                id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
                                name: file.name,
                                type: file.type,
                                size: file.size,
                                lastModified: file.lastModified,
                                url: result.link,
                                // 使用API返回的文件URL
                                parentId: currentFolder,
                                isFolder: false,
                                isMegaFile: false,
                                // 标记为本地存储文件
                                userId: currentUser
                            };
                            return newFile;
                        } catch (error) {
                            console.error("Error uploading file ".concat(file.name, ":"), error);
                            var errorMessage = error instanceof Error ? error.message : '未知错误';
                            alert("\u6587\u4EF6 \"".concat(file.name, "\" \u4E0A\u4F20\u5931\u8D25: ").concat(errorMessage));
                            return null;
                        }
                    });
                    return function(_x9) {
                        return _ref3.apply(this, arguments);
                    };
                }());
                // 等待所有文件处理完成
                var fileResults = yield Promise.all(filePromises);
                var successfulFiles = fileResults.filter((file)=>file !== null);
                var totalUploadedSize = successfulFiles.reduce((sum, file)=>sum + file.size, 0);
                if (successfulFiles.length > 0) {
                    var updatedFiles = [
                        ...files,
                        ...successfulFiles
                    ];
                    // 保存文件列表
                    var saveSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveFilesToStorage"])(updatedFiles);
                    if (saveSuccess) {
                        updateFiles(updatedFiles);
                        updateUsedStorage(totalUploadedSize);
                        // 显示成功提示
                        alert("\u6210\u529F\u4E0A\u4F20 ".concat(successfulFiles.length, " \u4E2A\u6587\u4EF6\uFF01"));
                    } else {
                        // 显示存储警告
                        alert("\u90E8\u5206\u6587\u4EF6\u5DF2\u4E0A\u4F20\uFF0C\u4F46\u6587\u4EF6\u5217\u8868\u5B58\u50A8\u5931\u8D25\uFF0C\u53EF\u80FD\u4F1A\u4E22\u5931\u6587\u4EF6\u4FE1\u606F\u3002\u5EFA\u8BAE\u6E05\u7406\u5B58\u50A8\u7A7A\u95F4\u540E\u91CD\u8BD5\u3002");
                    }
                } else {
                    alert('没有文件上传成功，请检查存储空间是否足够。');
                }
            } catch (error) {
                console.error('Error uploading files:', error);
                var errorMessage = error instanceof Error ? error.message : '未知错误';
                alert("\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25: ".concat(errorMessage, "\n\u8BF7\u68C0\u67E5\u5B58\u50A8\u7A7A\u95F4\u662F\u5426\u8DB3\u591F\uFF0C\u6216\u5C1D\u8BD5\u4E0A\u4F20\u8F83\u5C0F\u7684\u6587\u4EF6\u3002"));
            }
        });
        return function handleFilesUploaded(_x3, _x4, _x5, _x6, _x7, _x8) {
            return _ref2.apply(this, arguments);
        };
    }();
    // 清理文件URL对象，避免内存泄漏
    var cleanupFileUrls = (files)=>{
    // 暂时禁用这个功能，避免出现错误
    // try {
    //   files.forEach(file => {
    //     if (file && file.url) {
    //       const urlStr = String(file.url);
    //       // 使用更安全的方式检查，避免使用startsWith方法
    //       if (urlStr && urlStr.length > 5 && urlStr.substring(0, 5) === 'blob:') {
    //         try {
    //           URL.revokeObjectURL(urlStr);
    //         } catch (error) {
    //           console.error('Error revoking object URL:', error);
    //         }
    //       }
    //     }
    //   });
    // } catch (error) {
    //   console.error('Error in cleanupFileUrls:', error);
    // }
    };
    // 处理文件删除
    var handleFileDelete = /*#__PURE__*/ function() {
        var _ref4 = _asyncToGenerator(function*(fileId, isFromTrash, files, updateFiles, updateUsedStorage) {
            var fileToDelete = files.find((file)=>file.id === fileId);
            if (fileToDelete && !fileToDelete.isFolder) {
                // 确保存储使用量不为负数
                var currentStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorageUsage"])();
                var newUsedStorage = Math.max(0, currentStorage.used - fileToDelete.size);
                updateUsedStorage(-fileToDelete.size);
                // 清理文件URL对象，避免内存泄漏
                if (fileToDelete.url) {
                    var urlStr = String(fileToDelete.url);
                    // 使用更安全的方式检查，避免使用startsWith方法
                    if (urlStr && urlStr.length > 5 && urlStr.substring(0, 5) === 'blob:') {
                        try {
                            URL.revokeObjectURL(urlStr);
                        } catch (error) {
                            console.error('Error revoking object URL:', error);
                        }
                    }
                    // 如果是本地存储文件，从服务器删除
                    if (urlStr && urlStr.startsWith('/uploads/')) {
                        var fileName = urlStr.replace('/uploads/', '');
                        try {
                            var response = yield fetch("/api/delete?file=".concat(encodeURIComponent(fileName)), {
                                method: 'DELETE'
                            });
                            if (!response.ok) {
                                console.error('Failed to delete file from server:', (yield response.text()));
                            } else {
                                console.log('File deleted from server:', fileName);
                            }
                        } catch (error) {
                            console.error('Error deleting file from server:', error);
                        }
                    }
                }
                // 从localStorage中删除文件数据
                if (isFromTrash) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteFileData"])(fileId);
                }
            }
            try {
                // 检查fileId是否为标准UUID格式，避免数据库操作错误
                var uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                if (uuidRegex.test(fileId)) {
                    if (isFromTrash) {
                        // 在回收站中，彻底删除文件
                        // 从数据库中删除文件
                        var { error: dbError } = yield __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('files').delete().eq('id', fileId);
                        if (dbError) {
                            console.error('Error deleting file from database:', dbError);
                        }
                    } else {
                        // 在主页中，标记为已删除
                        var { error: _dbError } = yield __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('files').update({
                            isDeleted: true,
                            deletedAt: Date.now()
                        }).eq('id', fileId);
                        if (_dbError) {
                            console.error('Error updating file status in database:', _dbError);
                        }
                    }
                }
            } catch (error) {
                console.error('Error deleting file:', error);
            // 数据库错误不影响本地操作，只在控制台记录
            }
            var updatedFiles;
            if (isFromTrash) {
                // 在回收站中，从列表中移除
                updatedFiles = files.filter((file)=>file.id !== fileId);
            } else {
                // 在主页中，标记为已删除
                updatedFiles = files.map((file)=>{
                    if (file.id === fileId) {
                        return _objectSpread(_objectSpread({}, file), {}, {
                            isDeleted: true,
                            deletedAt: Date.now()
                        });
                    }
                    return file;
                });
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveFilesToStorage"])(updatedFiles);
            updateFiles(updatedFiles);
        });
        return function handleFileDelete(_x10, _x11, _x12, _x13, _x14) {
            return _ref4.apply(this, arguments);
        };
    }();
    // 处理多文件删除
    var handleMultiFileDelete = /*#__PURE__*/ function() {
        var _ref5 = _asyncToGenerator(function*(fileIds, isFromTrash, files, updateFiles, updateUsedStorage) {
            // 计算需要释放的存储空间
            var totalSizeToRelease = 0;
            fileIds.forEach((fileId)=>{
                var fileToDelete = files.find((file)=>file.id === fileId);
                if (fileToDelete && !fileToDelete.isFolder) {
                    totalSizeToRelease += fileToDelete.size;
                    // 清理文件URL对象，避免内存泄漏
                    if (fileToDelete.url) {
                        var urlStr = String(fileToDelete.url);
                        // 使用更安全的方式检查，避免使用startsWith方法
                        if (urlStr && urlStr.length > 5 && urlStr.substring(0, 5) === 'blob:') {
                            try {
                                URL.revokeObjectURL(urlStr);
                            } catch (error) {
                                console.error('Error revoking object URL:', error);
                            }
                        }
                    }
                    // 从localStorage中删除文件数据
                    if (isFromTrash) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteFileData"])(fileId);
                    }
                }
            });
            if (totalSizeToRelease > 0) {
                updateUsedStorage(-totalSizeToRelease);
            }
            try {
                // 检查fileId是否为标准UUID格式，避免数据库操作错误
                var uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                if (isFromTrash) {
                    // 在回收站中，彻底删除多个文件 - 使用循环逐个删除
                    for (var fileId of fileIds){
                        if (uuidRegex.test(fileId)) {
                            var { error: dbError } = yield __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('files').delete().eq('id', fileId);
                            if (dbError) {
                                console.error('Error deleting file from database:', fileId, dbError);
                            }
                        }
                    }
                } else {
                    // 在主页中，标记多个文件为已删除 - 使用循环逐个更新
                    for (var _fileId2 of fileIds){
                        if (uuidRegex.test(_fileId2)) {
                            var { error: _dbError2 } = yield __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('files').update({
                                isDeleted: true,
                                deletedAt: Date.now()
                            }).eq('id', _fileId2);
                            if (_dbError2) {
                                console.error('Error updating file status in database:', _fileId2, _dbError2);
                            }
                        }
                    }
                }
            } catch (error) {
                console.error('Error deleting multiple files:', error);
            // 数据库错误不影响本地操作，只在控制台记录
            }
            var updatedFiles;
            if (isFromTrash) {
                // 在回收站中，从列表中移除
                updatedFiles = files.filter((file)=>!fileIds.includes(file.id));
            } else {
                // 在主页中，标记为已删除
                updatedFiles = files.map((file)=>{
                    if (fileIds.includes(file.id)) {
                        return _objectSpread(_objectSpread({}, file), {}, {
                            isDeleted: true,
                            deletedAt: Date.now()
                        });
                    }
                    return file;
                });
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveFilesToStorage"])(updatedFiles);
            updateFiles(updatedFiles);
        });
        return function handleMultiFileDelete(_x15, _x16, _x17, _x18, _x19) {
            return _ref5.apply(this, arguments);
        };
    }();
    // 处理文件重命名
    var handleFileRename = /*#__PURE__*/ function() {
        var _ref6 = _asyncToGenerator(function*(fileId, newName, files, updateFiles) {
            try {
                // 检查fileId是否为标准UUID格式，避免数据库操作错误
                var uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                if (uuidRegex.test(fileId)) {
                    // 更新数据库中的文件名称
                    var { error: dbError } = yield __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('files').update({
                        name: newName,
                        lastModified: Date.now()
                    }).eq('id', fileId);
                    if (dbError) {
                        console.error('Error renaming file in database:', dbError);
                    }
                }
            } catch (error) {
                console.error('Error renaming file:', error);
            // 数据库错误不影响本地操作，只在控制台记录
            }
            var updatedFiles = files.map((file)=>{
                if (file.id === fileId) {
                    return _objectSpread(_objectSpread({}, file), {}, {
                        name: newName,
                        lastModified: Date.now()
                    });
                }
                return file;
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveFilesToStorage"])(updatedFiles);
            updateFiles(updatedFiles);
        });
        return function handleFileRename(_x20, _x21, _x22, _x23) {
            return _ref6.apply(this, arguments);
        };
    }();
    // 处理文件恢复
    var handleFileRestore = /*#__PURE__*/ function() {
        var _ref7 = _asyncToGenerator(function*(fileId, files, updateFiles, updateUsedStorage) {
            var fileToRestore = files.find((file)=>file.id === fileId);
            if (fileToRestore && !fileToRestore.isFolder) {
                updateUsedStorage(fileToRestore.size);
            }
            try {
                // 检查fileId是否为标准UUID格式，避免数据库操作错误
                var uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                if (uuidRegex.test(fileId)) {
                    // 更新数据库中的文件状态，标记为未删除
                    var { error: dbError } = yield __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('files').update({
                        isDeleted: false,
                        deletedAt: null
                    }).eq('id', fileId);
                    if (dbError) {
                        console.error('Error updating file status in database:', dbError);
                    }
                }
            } catch (error) {
                console.error('Error restoring file:', error);
            // 数据库错误不影响本地操作，只在控制台记录
            }
            var updatedFiles = files.map((file)=>{
                if (file.id === fileId) {
                    return _objectSpread(_objectSpread({}, file), {}, {
                        isDeleted: false,
                        deletedAt: null
                    });
                }
                return file;
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveFilesToStorage"])(updatedFiles);
            updateFiles(updatedFiles);
        });
        return function handleFileRestore(_x24, _x25, _x26, _x27) {
            return _ref7.apply(this, arguments);
        };
    }();
    // 处理文件下载
    var handleFileDownload = /*#__PURE__*/ function() {
        var _ref8 = _asyncToGenerator(function*(file) {
            if (file.url) {
                try {
                    // 强制下载所有文件
                    var response = yield fetch(file.url);
                    var blob = yield response.blob();
                    var url = URL.createObjectURL(blob);
                    var link = document.createElement('a');
                    link.href = url;
                    link.download = file.name;
                    link.click();
                    URL.revokeObjectURL(url);
                } catch (error) {
                    console.error('Error downloading file:', error);
                    var errorMessage = error instanceof Error ? error.message : '未知错误';
                    alert("\u6587\u4EF6\u4E0B\u8F7D\u5931\u8D25: ".concat(errorMessage));
                    // 回退到原始方法
                    try {
                        var _link = document.createElement('a');
                        _link.href = file.url;
                        _link.download = file.name;
                        _link.click();
                    } catch (fallbackError) {
                        console.error('Error with fallback download:', fallbackError);
                    }
                }
            }
        });
        return function handleFileDownload(_x28) {
            return _ref8.apply(this, arguments);
        };
    }();
    // 处理创建文件夹
    var handleCreateFolder = /*#__PURE__*/ function() {
        var _ref9 = _asyncToGenerator(function*(folderName, currentFolder, files, updateFiles) {
            try {
                var currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                // 将文件夹信息保存到数据库
                var { data: dbData, error: dbError } = yield __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('files').insert({
                    name: folderName,
                    type: 'folder',
                    size: 0,
                    lastModified: Date.now(),
                    parentId: currentFolder,
                    isFolder: true,
                    userId: currentUser
                }).select('*').single();
                if (dbError) {
                    console.error('Error creating folder:', dbError);
                    // 使用本地处理作为回退
                    var newFolder = {
                        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
                        name: folderName,
                        type: 'folder',
                        size: 0,
                        lastModified: Date.now(),
                        isFolder: true,
                        parentId: currentFolder,
                        userId: currentUser
                    };
                    var updatedFiles = [
                        ...files,
                        newFolder
                    ];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveFilesToStorage"])(updatedFiles);
                    updateFiles(updatedFiles);
                } else {
                    var _updatedFiles = [
                        ...files,
                        dbData
                    ];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveFilesToStorage"])(_updatedFiles);
                    updateFiles(_updatedFiles);
                }
            } catch (error) {
                console.error('Error creating folder:', error);
                var errorMessage = error instanceof Error ? error.message : '未知错误';
                alert("\u6587\u4EF6\u5939\u521B\u5EFA\u5931\u8D25: ".concat(errorMessage, "\n\u6B63\u5728\u5C1D\u8BD5\u672C\u5730\u521B\u5EFA..."));
                // 使用本地处理作为回退
                try {
                    var _currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                    var _newFolder = {
                        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
                        name: folderName,
                        type: 'folder',
                        size: 0,
                        lastModified: Date.now(),
                        isFolder: true,
                        parentId: currentFolder,
                        userId: _currentUser
                    };
                    var _updatedFiles2 = [
                        ...files,
                        _newFolder
                    ];
                    var saveSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveFilesToStorage"])(_updatedFiles2);
                    if (saveSuccess) {
                        updateFiles(_updatedFiles2);
                        alert('文件夹已在本地创建成功！');
                    } else {
                        alert('本地创建文件夹失败，可能是存储空间不足。');
                    }
                } catch (fallbackError) {
                    console.error('Error with fallback folder creation:', fallbackError);
                    alert('本地创建文件夹也失败了，请检查存储空间是否足够。');
                }
            }
        });
        return function handleCreateFolder(_x29, _x30, _x31, _x32) {
            return _ref9.apply(this, arguments);
        };
    }();
    return {
        handleFilesUploaded,
        handleFileDelete,
        handleMultiFileDelete,
        handleFileRename,
        handleFileRestore,
        handleFileDownload,
        handleCreateFolder,
        cleanupFileUrls
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/files/FileManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$MobileLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/MobileLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$files$2f$VirtualFileList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/files/VirtualFileList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$files$2f$MobileFileList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/files/MobileFileList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$files$2f$FilePreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/files/FilePreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$modals$2f$CreateFolderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/modals/CreateFolderModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$files$2f$ShareModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/files/ShareModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$modals$2f$UserManualModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/modals/UserManualModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Breadcrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Breadcrumb.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$files$2f$FileActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/files/FileActions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$DownloadProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/DownloadProgress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$UploadProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/UploadProgress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$UploadTaskList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/UploadTaskList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$files$2f$FileManagerReducer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/files/FileManagerReducer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useFileStorage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileOperations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useFileOperations.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n) {
        return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(void 0);
        });
    };
}
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function FileManager() {
    _s();
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    var [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$files$2f$FileManagerReducer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileManagerReducer"], __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$files$2f$FileManagerReducer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialState"]);
    // 下载进度状态
    var [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var [downloadProgress, setDownloadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    var [downloadingFileName, setDownloadingFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // 上传任务类型定义
    // 上传进度状态
    var [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    var [uploadingFileName, setUploadingFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    var [uploadStartTime, setUploadStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    var [uploadError, setUploadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    var [isUploadTimeout, setIsUploadTimeout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var [uploadAbortController, setUploadAbortController] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 上传任务列表
    var [uploadTasks, setUploadTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    var [currentUploadTask, setCurrentUploadTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    var [showUploadTasks, setShowUploadTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 初始化自定义hooks
    var { loadFilesFromStorage, saveFilesToStorage, getStorageUsage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFileStorage"])();
    var { handleFilesUploaded, handleFileDelete, handleMultiFileDelete, handleFileRename, handleFileRestore, handleFileDownload, handleCreateFolder, cleanupFileUrls } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileOperations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFileOperations"])();
    var [isUploadingToMega, setIsUploadingToMega] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 解构状态
    var { files, selectedFile, selectedSection, isCreateFolderModalOpen, isShareModalOpen, isUserManualModalOpen, selectedFileForShare, selectedFiles, selectedFilesForShare, usedStorage, totalStorage, currentFolder, breadcrumb, searchQuery, isSearching, isMobile } = state;
    // 组件卸载时清理文件URL对象，避免内存泄漏（暂时禁用）
    // useEffect(() => {
    //   return () => {
    //     cleanupFileUrls(files);
    //   };
    // }, [files, cleanupFileUrls]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileManager.useEffect": ()=>{
            var checkMobile = {
                "FileManager.useEffect.checkMobile": ()=>{
                    dispatch({
                        type: 'SET_IS_MOBILE',
                        payload: window.innerWidth < 768
                    });
                }
            }["FileManager.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "FileManager.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["FileManager.useEffect"];
        }
    }["FileManager.useEffect"], []);
    // 初始化存储使用量
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileManager.useEffect": ()=>{
            var updateStorageUsage = {
                "FileManager.useEffect.updateStorageUsage": ()=>{
                    var storageUsage = getStorageUsage();
                    dispatch({
                        type: 'SET_USED_STORAGE',
                        payload: storageUsage.storageCenterUsed
                    });
                }
            }["FileManager.useEffect.updateStorageUsage"];
            updateStorageUsage();
            // 监听存储变化，以便在其他标签页修改存储时更新
            window.addEventListener('storage', updateStorageUsage);
            return ({
                "FileManager.useEffect": ()=>window.removeEventListener('storage', updateStorageUsage)
            })["FileManager.useEffect"];
        }
    }["FileManager.useEffect"], [
        getStorageUsage
    ]);
    // 获取当前登录用户
    var getCurrentUser = ()=>{
        return localStorage.getItem('currentUser') || 'anonymous';
    };
    // 获取用户专属的 localStorage 键
    var getUserStorageKey = ()=>{
        var currentUser = getCurrentUser();
        return "storageCenterFiles_".concat(currentUser);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileManager.useEffect": ()=>{
            // 检查登录状态
            var checkLoginStatus = {
                "FileManager.useEffect.checkLoginStatus": ()=>{
                    // 模拟登录状态检查
                    var isUserLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
                    if (!isUserLoggedIn) {
                        router.push('/login');
                    } else {
                        var loadedFiles = loadFilesFromStorage();
                        dispatch({
                            type: 'SET_FILES',
                            payload: loadedFiles
                        });
                    }
                }
            }["FileManager.useEffect.checkLoginStatus"];
            checkLoginStatus();
        }
    }["FileManager.useEffect"], [
        router
    ]);
    var handleFilesUploadedWrapper = /*#__PURE__*/ function() {
        var _ref = _asyncToGenerator(function*(uploadedFiles) {
            // 所有文件都使用本地存储API上传
            yield handleFilesUploaded(uploadedFiles, currentFolder, files, (updatedFiles)=>dispatch({
                    type: 'SET_FILES',
                    payload: updatedFiles
                }), (size)=>dispatch({
                    type: 'SET_USED_STORAGE',
                    payload: usedStorage + size
                }), uploadAbortController || undefined);
            // 清理上传状态
            setIsUploading(false);
            setUploadProgress(0);
            setUploadingFileName('');
            setUploadStartTime(null);
            setUploadAbortController(null);
        });
        return function handleFilesUploadedWrapper(_x) {
            return _ref.apply(this, arguments);
        };
    }();
    var handleFileClick = (file)=>{
        if (file.isFolder) {
            // 处理文件夹点击，实现文件夹导航
            dispatch({
                type: 'SET_CURRENT_FOLDER',
                payload: file.id
            });
            dispatch({
                type: 'SET_BREADCRUMB',
                payload: [
                    ...breadcrumb,
                    {
                        id: file.id,
                        name: file.name
                    }
                ]
            });
        } else {
            dispatch({
                type: 'SET_SELECTED_FILE',
                payload: file
            });
        }
    };
    var handleClosePreview = ()=>{
        dispatch({
            type: 'SET_SELECTED_FILE',
            payload: null
        });
    };
    var handleDownloadFile = /*#__PURE__*/ function() {
        var _ref2 = _asyncToGenerator(function*() {
            if (!selectedFile) return;
            if (selectedFile.url && selectedFile.url !== '#' && selectedFile.url !== '') {
                try {
                    // 设置下载状态
                    setIsDownloading(true);
                    setDownloadProgress(0);
                    setDownloadingFileName(selectedFile.name);
                    // 检查是否是本地存储文件
                    if (selectedFile.url && selectedFile.url.startsWith('/uploads/')) {
                        // 使用本地存储API下载
                        var fileName = selectedFile.url.replace('/uploads/', '');
                        var downloadUrl = "/api/download?file=".concat(encodeURIComponent(fileName), "&name=").concat(encodeURIComponent(selectedFile.name));
                        // 使用XMLHttpRequest来监控下载进度
                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', downloadUrl, true);
                        xhr.responseType = 'blob';
                        xhr.onprogress = (e)=>{
                            if (e.lengthComputable) {
                                var percentComplete = Math.round(e.loaded / e.total * 100);
                                setDownloadProgress(percentComplete);
                            }
                        };
                        xhr.onload = ()=>{
                            if (xhr.status === 200) {
                                var blob = xhr.response;
                                var url = URL.createObjectURL(blob);
                                var link = document.createElement('a');
                                link.href = url;
                                link.download = selectedFile.name;
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                                URL.revokeObjectURL(url);
                            }
                            // 重置下载状态
                            setTimeout(()=>{
                                setIsDownloading(false);
                                setDownloadProgress(0);
                                setDownloadingFileName('');
                            }, 1000);
                        };
                        xhr.onerror = ()=>{
                            // 重置下载状态
                            setIsDownloading(false);
                            setDownloadProgress(0);
                            setDownloadingFileName('');
                            alert('文件下载失败，请重试。');
                        };
                        xhr.send();
                    } else {
                        // 直接下载（适用于其他类型的URL）
                        var link = document.createElement('a');
                        link.href = selectedFile.url || '#';
                        link.download = selectedFile.name;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        // 重置下载状态
                        setTimeout(()=>{
                            setIsDownloading(false);
                            setDownloadProgress(0);
                            setDownloadingFileName('');
                        }, 1000);
                    }
                } catch (error) {
                    console.error('Error downloading file:', error);
                    setIsDownloading(false);
                    setDownloadProgress(0);
                    setDownloadingFileName('');
                    alert('文件下载失败，请重试。');
                }
            } else {
                alert('此文件无法下载，请重新上传文件后再试。');
            }
        });
        return function handleDownloadFile() {
            return _ref2.apply(this, arguments);
        };
    }();
    var handleFileDeleteWrapper = /*#__PURE__*/ function() {
        var _ref3 = _asyncToGenerator(function*(fileId) {
            var isFromTrash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            yield handleFileDelete(fileId, isFromTrash, files, (updatedFiles)=>dispatch({
                    type: 'SET_FILES',
                    payload: updatedFiles
                }), (size)=>dispatch({
                    type: 'SET_USED_STORAGE',
                    payload: usedStorage + size
                }));
        });
        return function handleFileDeleteWrapper(_x2) {
            return _ref3.apply(this, arguments);
        };
    }();
    var handleMultiFileDeleteWrapper = /*#__PURE__*/ function() {
        var _ref4 = _asyncToGenerator(function*(fileIds) {
            var isFromTrash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            yield handleMultiFileDelete(fileIds, isFromTrash, files, (updatedFiles)=>dispatch({
                    type: 'SET_FILES',
                    payload: updatedFiles
                }), (size)=>dispatch({
                    type: 'SET_USED_STORAGE',
                    payload: usedStorage + size
                }));
        });
        return function handleMultiFileDeleteWrapper(_x3) {
            return _ref4.apply(this, arguments);
        };
    }();
    var handleFileRenameWrapper = /*#__PURE__*/ function() {
        var _ref5 = _asyncToGenerator(function*(fileId, newName) {
            yield handleFileRename(fileId, newName, files, (updatedFiles)=>dispatch({
                    type: 'SET_FILES',
                    payload: updatedFiles
                }));
        });
        return function handleFileRenameWrapper(_x4, _x5) {
            return _ref5.apply(this, arguments);
        };
    }();
    var handleFileRestoreWrapper = /*#__PURE__*/ function() {
        var _ref6 = _asyncToGenerator(function*(fileId) {
            yield handleFileRestore(fileId, files, (updatedFiles)=>dispatch({
                    type: 'SET_FILES',
                    payload: updatedFiles
                }), (size)=>dispatch({
                    type: 'SET_USED_STORAGE',
                    payload: usedStorage + size
                }));
        });
        return function handleFileRestoreWrapper(_x6) {
            return _ref6.apply(this, arguments);
        };
    }();
    var handleCreateFolderWrapper = /*#__PURE__*/ function() {
        var _ref7 = _asyncToGenerator(function*(folderName) {
            yield handleCreateFolder(folderName, currentFolder, files, (updatedFiles)=>dispatch({
                    type: 'SET_FILES',
                    payload: updatedFiles
                }));
        });
        return function handleCreateFolderWrapper(_x7) {
            return _ref7.apply(this, arguments);
        };
    }();
    var handleBreadcrumbClick = (index)=>{
        var newBreadcrumb = breadcrumb.slice(0, index + 1);
        dispatch({
            type: 'SET_BREADCRUMB',
            payload: newBreadcrumb
        });
        dispatch({
            type: 'SET_CURRENT_FOLDER',
            payload: newBreadcrumb[index].id
        });
    };
    var handleSearch = (query)=>{
        dispatch({
            type: 'SET_SEARCH_QUERY',
            payload: query
        });
        dispatch({
            type: 'SET_IS_SEARCHING',
            payload: true
        });
    };
    var handleClearSearch = ()=>{
        dispatch({
            type: 'SET_SEARCH_QUERY',
            payload: ''
        });
        dispatch({
            type: 'SET_IS_SEARCHING',
            payload: false
        });
    };
    var handleLogout = ()=>{
        // 清除登录状态
        localStorage.removeItem('isLoggedIn');
        // 重定向到登录页面
        router.push('/login');
    };
    // 取消上传
    var handleCancelUpload = ()=>{
        if (uploadAbortController) {
            uploadAbortController.abort();
            setUploadAbortController(null);
        }
        // 更新当前任务状态
        if (currentUploadTask) {
            updateUploadTask(currentUploadTask.id, {
                status: 'error',
                errorMessage: '上传已取消',
                endTime: Date.now()
            });
        }
        setIsUploading(false);
        setIsUploadingToMega(false);
        setUploadProgress(0);
        setUploadingFileName('');
        setUploadStartTime(null);
        setUploadError(null);
        setIsUploadTimeout(false);
    };
    // 计算预估剩余时间
    var calculateRemainingTime = ()=>{
        if (!uploadStartTime || uploadProgress === 0) return '计算中...';
        var elapsedTime = (Date.now() - uploadStartTime) / 1000; // 秒
        var progressRatio = uploadProgress / 100;
        if (progressRatio === 0) return '计算中...';
        var totalTime = elapsedTime / progressRatio;
        var remainingTime = totalTime - elapsedTime;
        if (remainingTime < 0) return '完成中...';
        if (remainingTime < 60) {
            return "".concat(Math.ceil(remainingTime), "\u79D2");
        } else if (remainingTime < 3600) {
            var minutes = Math.floor(remainingTime / 60);
            var seconds = Math.floor(remainingTime % 60);
            return "".concat(minutes, "\u5206").concat(seconds, "\u79D2");
        } else {
            var hours = Math.floor(remainingTime / 3600);
            var _minutes = Math.floor(remainingTime % 3600 / 60);
            return "".concat(hours, "\u5C0F\u65F6").concat(_minutes, "\u5206");
        }
    };
    // 创建新的上传任务
    var createUploadTask = (file, isMegaFile)=>{
        return {
            id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
            fileName: file.name,
            fileSize: file.size,
            progress: 0,
            status: 'pending',
            errorMessage: null,
            startTime: Date.now(),
            endTime: null,
            isMegaFile
        };
    };
    // 更新上传任务状态
    var updateUploadTask = (taskId, updates)=>{
        setUploadTasks((prevTasks)=>prevTasks.map((task)=>task.id === taskId ? _objectSpread(_objectSpread({}, task), updates) : task));
    };
    // 处理单个Mega文件上传
    var handleMegaFileUpload = /*#__PURE__*/ function() {
        var _ref8 = _asyncToGenerator(function*(file) {
            var task = createUploadTask(file, true);
            setCurrentUploadTask(task);
            setUploadTasks((prev)=>[
                    task,
                    ...prev
                ]);
            setIsUploading(true);
            setUploadingFileName(file.name);
            setUploadProgress(0);
            setUploadStartTime(Date.now());
            setUploadError(null);
            setIsUploadTimeout(false);
            // 创建AbortController用于取消上传
            var abortController = new AbortController();
            setUploadAbortController(abortController);
            // 添加上传超时检测（30秒无进度更新）
            var lastProgressTime = Date.now();
            var timeoutCheckInterval = setInterval(()=>{
                if (Date.now() - lastProgressTime > 30000) {
                    // 30秒
                    setIsUploadTimeout(true);
                    updateUploadTask(task.id, {
                        status: 'timeout',
                        errorMessage: '上传超时，请检查网络连接',
                        endTime: Date.now()
                    });
                    handleCancelUpload();
                    clearInterval(timeoutCheckInterval);
                }
            }, 5000);
            try {
                updateUploadTask(task.id, {
                    status: 'uploading'
                });
                var uploadResult = yield uploadFile(file, (progress)=>{
                    var currentProgress = Math.round(progress * 100);
                    setUploadProgress(currentProgress);
                    updateUploadTask(task.id, {
                        progress: currentProgress
                    });
                    lastProgressTime = Date.now(); // 更新最后进度时间
                }, abortController);
                clearInterval(timeoutCheckInterval);
                if (uploadResult && uploadResult.success) {
                    // 创建Mega文件项
                    var newFile = {
                        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        url: uploadResult.link || '#',
                        parentId: currentFolder,
                        isFolder: false,
                        isDeleted: false,
                        lastModified: Date.now(),
                        isMegaFile: true
                    };
                    // 更新文件列表
                    var updatedFiles = [
                        ...files,
                        newFile
                    ];
                    dispatch({
                        type: 'SET_FILES',
                        payload: updatedFiles
                    });
                    // 保存到localStorage
                    var storageKey = getUserStorageKey();
                    localStorage.setItem(storageKey, JSON.stringify(updatedFiles));
                    // 更新存储使用量
                    dispatch({
                        type: 'SET_USED_STORAGE',
                        payload: usedStorage + file.size
                    });
                    // 更新任务状态为成功
                    updateUploadTask(task.id, {
                        status: 'success',
                        progress: 100,
                        endTime: Date.now()
                    });
                }
            } catch (error) {
                console.error('Mega upload failed:', error);
                var errorMessage = error instanceof Error ? error.message : '上传失败，请重试';
                setUploadError(errorMessage);
                updateUploadTask(task.id, {
                    status: 'error',
                    errorMessage,
                    endTime: Date.now()
                });
            } finally{
                clearInterval(timeoutCheckInterval);
            }
        });
        return function handleMegaFileUpload(_x8) {
            return _ref8.apply(this, arguments);
        };
    }();
    var handleSettingsClick = ()=>{
        // 处理设置按钮点击，导航到设置页面
        router.push('/settings');
    };
    // 重试上传任务
    var handleRetryUpload = (task)=>{
        // 这里需要重新创建File对象，实际应用中可能需要从原始文件源获取
        // 这里简化处理，仅作为示例
        var mockFile = new File([
            ''
        ], task.fileName, {
            type: task.fileName.split('.').pop() || ''
        });
        Object.defineProperty(mockFile, 'size', {
            value: task.fileSize
        });
        handleMegaFileUpload(mockFile);
    };
    // 关闭上传任务
    var handleCloseTask = (taskId)=>{
        setUploadTasks((prevTasks)=>prevTasks.filter((task)=>task.id !== taskId));
    };
    // 处理文件分享
    var handleFileShare = (file)=>{
        dispatch({
            type: 'SET_SELECTED_FILE_FOR_SHARE',
            payload: file
        });
        dispatch({
            type: 'SET_SHARE_MODAL',
            payload: true
        });
    };
    // 处理多文件分享
    var handleMultiFileShare = (files)=>{
        dispatch({
            type: 'SET_SELECTED_FILES_FOR_SHARE',
            payload: files
        });
        dispatch({
            type: 'SET_SHARE_MODAL',
            payload: true
        });
    };
    // 处理文件选择
    var handleSelectFile = (fileId, isCtrlPressed)=>{
        if (isCtrlPressed) {
            // Ctrl键按下，切换文件选择状态
            var newSet = new Set(selectedFiles);
            if (newSet.has(fileId)) {
                newSet.delete(fileId);
            } else {
                newSet.add(fileId);
            }
            dispatch({
                type: 'SET_SELECTED_FILES',
                payload: newSet
            });
        } else {
            // 没有按下Ctrl键，替换选择
            dispatch({
                type: 'SET_SELECTED_FILES',
                payload: new Set([
                    fileId
                ])
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileManager.useEffect": ()=>{
            // 快捷键监听
            var handleKeyDown = {
                "FileManager.useEffect.handleKeyDown": (e)=>{
                    // Ctrl+Shift+S 触发分享功能
                    if (e.ctrlKey && e.shiftKey && e.key === 'S') {
                        e.preventDefault();
                        if (selectedFile) {
                            handleFileShare(selectedFile);
                        }
                    }
                }
            }["FileManager.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "FileManager.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["FileManager.useEffect"];
        }
    }["FileManager.useEffect"], [
        selectedFile
    ]);
    var getCurrentFiles = ()=>{
        var filteredFiles = files;
        // 根据 selectedSection 过滤文件
        switch(selectedSection){
            case 'all':
                // 显示所有未删除的文件
                filteredFiles = filteredFiles.filter((file)=>!file.isDeleted && file.parentId === currentFolder);
                break;
            case 'recent':
                // 按修改日期排序，显示最近的文件
                filteredFiles = filteredFiles.filter((file)=>!file.isDeleted && file.parentId === currentFolder);
                filteredFiles = filteredFiles.sort((a, b)=>b.lastModified - a.lastModified);
                break;
            case 'images':
                // 显示图片文件
                filteredFiles = filteredFiles.filter((file)=>!file.isDeleted && !file.isFolder && file.type && file.type.startsWith('image/') && file.parentId === currentFolder);
                break;
            case 'documents':
                // 显示文档文件
                filteredFiles = filteredFiles.filter((file)=>!file.isDeleted && !file.isFolder && file.type && (file.type.includes('document') || file.type.includes('text') || file.type.includes('pdf')) && file.parentId === currentFolder);
                break;
            case 'videos':
                // 显示视频文件
                filteredFiles = filteredFiles.filter((file)=>!file.isDeleted && !file.isFolder && file.type && file.type.startsWith('video/') && file.parentId === currentFolder);
                break;
            case 'audio':
                // 显示音频文件
                filteredFiles = filteredFiles.filter((file)=>!file.isDeleted && !file.isFolder && file.type && file.type.startsWith('audio/') && file.parentId === currentFolder);
                break;
            case 'shared':
                // 显示共享文件（这里只是模拟，实际需要根据共享状态过滤）
                filteredFiles = filteredFiles.filter((file)=>!file.isDeleted && !file.isFolder && file.parentId === currentFolder);
                break;
            case 'trash':
                // 显示回收站文件
                filteredFiles = filteredFiles.filter((file)=>file.isDeleted);
                break;
            default:
                // 显示所有未删除的文件
                filteredFiles = filteredFiles.filter((file)=>!file.isDeleted && file.parentId === currentFolder);
                break;
        }
        if (isSearching && searchQuery && selectedSection !== 'trash') {
            var queryLower = searchQuery.toLowerCase();
            filteredFiles = filteredFiles.filter((file)=>{
                return file.name.toLowerCase().includes(queryLower) || file.type && file.type.toLowerCase().includes(queryLower);
            });
        }
        return filteredFiles;
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$MobileLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        selectedSection: selectedSection,
        onSectionSelect: (section)=>dispatch({
                type: 'SET_SELECTED_SECTION',
                payload: section
            }),
        onSettingsClick: handleSettingsClick,
        usedStorage: usedStorage,
        totalStorage: totalStorage,
        onSearch: handleSearch,
        onClearSearch: handleClearSearch,
        searchQuery: searchQuery,
        onLogout: handleLogout,
        onOpenUserManual: ()=>dispatch({
                type: 'SET_USER_MANUAL_MODAL',
                payload: true
            }),
        breadcrumb: breadcrumb,
        onBreadcrumbClick: handleBreadcrumbClick,
        isMobile: isMobile,
        onFloatingButtonClick: ()=>dispatch({
                type: 'SET_CREATE_FOLDER_MODAL',
                payload: true
            })
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "space-y-6"
    }, !isMobile && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 md:p-6"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Breadcrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        items: breadcrumb,
        onItemClick: handleBreadcrumbClick
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$files$2f$FileActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onOpenCreateFolderModal: ()=>dispatch({
                type: 'SET_CREATE_FOLDER_MODAL',
                payload: true
            }),
        onFilesUploaded: handleFilesUploadedWrapper,
        currentFolderName: breadcrumb[breadcrumb.length - 1].name,
        isUploadingToMega: isUploadingToMega
    }))), isMobile ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$files$2f$MobileFileList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        files: getCurrentFiles(),
        onFileClick: handleFileClick,
        onFileDelete: handleFileDeleteWrapper,
        onFileDownload: handleFileDownload,
        onFileRename: handleFileRenameWrapper,
        onFileRestore: handleFileRestoreWrapper,
        onFileShare: handleFileShare,
        onMultiFileShare: handleMultiFileShare,
        onMultiFileDelete: handleMultiFileDeleteWrapper,
        selectedFiles: selectedFiles,
        onSelectFile: handleSelectFile,
        isTrash: selectedSection === 'trash',
        selectedSection: selectedSection,
        breadcrumb: breadcrumb,
        onBreadcrumbClick: handleBreadcrumbClick
    }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$files$2f$VirtualFileList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        files: getCurrentFiles(),
        onFileClick: handleFileClick,
        onFileDelete: handleFileDeleteWrapper,
        onFileDownload: handleFileDownload,
        onFileRename: handleFileRenameWrapper,
        onFileRestore: handleFileRestoreWrapper,
        onFileShare: handleFileShare,
        onMultiFileShare: handleMultiFileShare,
        onMultiFileDelete: handleMultiFileDeleteWrapper,
        selectedFiles: selectedFiles,
        onSelectFile: handleSelectFile,
        isTrash: selectedSection === 'trash'
    })))), selectedFile && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$files$2f$FilePreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        file: selectedFile,
        onClose: ()=>dispatch({
                type: 'SET_SELECTED_FILE',
                payload: null
            }),
        onDownload: handleDownloadFile
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$modals$2f$CreateFolderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isOpen: isCreateFolderModalOpen,
        onClose: ()=>dispatch({
                type: 'SET_CREATE_FOLDER_MODAL',
                payload: false
            }),
        onCreate: handleCreateFolderWrapper
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$files$2f$ShareModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isOpen: isShareModalOpen,
        onClose: ()=>dispatch({
                type: 'SET_SHARE_MODAL',
                payload: false
            }),
        file: selectedFileForShare,
        files: selectedFilesForShare
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$modals$2f$UserManualModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isOpen: isUserManualModalOpen,
        onClose: ()=>dispatch({
                type: 'SET_USER_MANUAL_MODAL',
                payload: false
            })
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$DownloadProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isDownloading: isDownloading,
        progress: downloadProgress,
        fileName: downloadingFileName
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$UploadProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isUploading: isUploading,
        progress: uploadProgress,
        fileName: uploadingFileName,
        onCancelUpload: handleCancelUpload,
        onRetryUpload: ()=>currentUploadTask && handleMegaFileUpload(new File([], currentUploadTask.fileName)),
        remainingTime: calculateRemainingTime(),
        isTimeout: isUploadTimeout,
        error: uploadError,
        status: isUploadTimeout ? 'timeout' : uploadError ? 'error' : 'uploading'
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$UploadTaskList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tasks: uploadTasks,
        onRetryTask: handleRetryUpload,
        onCloseTask: handleCloseTask,
        onToggleVisibility: ()=>setShowUploadTasks(!showUploadTasks),
        isVisible: showUploadTasks
    }));
}
_s(FileManager, "pDrQR/V5MbEqXGi57Csf0wU/7Gw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFileStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useFileOperations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFileOperations"]
    ];
});
_c = FileManager;
var _c;
__turbopack_context__.k.register(_c, "FileManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$files$2f$FileManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/files/FileManager.tsx [app-client] (ecmascript)");
'use client';
;
;
function Home() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$files$2f$FileManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0jdff-c._.js.map