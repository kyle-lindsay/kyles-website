(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/TitleEffect.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "pageTitle": "TitleEffect-module__okmpVq__pageTitle",
});
}),
"[project]/components/ui/useTitleEffect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TitleEffect",
    ()=>TitleEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$TitleEffect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ui/TitleEffect.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ITERATIONS = 20;
const GAP = 150;
const DELAY = 250;
function TitleEffect({ text }) {
    _s();
    let length = text.length;
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(generateString(length));
    const timers = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TitleEffect.useEffect": ()=>{
            for(let i = 0; i < ITERATIONS; i++){
                const timer = setTimeout({
                    "TitleEffect.useEffect.timer": ()=>{
                        setTitle(playEffect(i, length, text));
                    }
                }["TitleEffect.useEffect.timer"], DELAY + GAP * i + 1);
                timers.push(timer);
            }
            return ({
                "TitleEffect.useEffect": ()=>{
                    timers.forEach(clearTimeout);
                }
            })["TitleEffect.useEffect"];
        }
    }["TitleEffect.useEffect"], [
        text
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$TitleEffect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageTitle,
        children: title
    }, void 0, false, {
        fileName: "[project]/components/ui/useTitleEffect.tsx",
        lineNumber: 30,
        columnNumber: 12
    }, this);
}
_s(TitleEffect, "hMVEEWbe1PgS4lnVL4KlCTdf34w=");
_c = TitleEffect;
function generateString(length) {
    //const chars = ['<', '>', '$', '!', '*', "?", '/', '-', '=', '+', '%', '&', '_', '#', '(', ')', ';', ':'];
    const chars = [
        '#'
    ];
    let string = "";
    for(let i = 0; i < length; i++){
        let index = Math.floor(Math.random() * chars.length);
        let char = chars[index];
        string = string + char;
    }
    return string;
}
function playEffect(index, length, text) {
    let next = "";
    let titleCount = ITERATIONS - index;
    if (titleCount < length + 1) {
        next += text.slice(0, length - titleCount + 1);
        length = titleCount - 1;
    }
    next += generateString(length);
    return next;
}
var _c;
__turbopack_context__.k.register(_c, "TitleEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_ui_2c482f3c._.js.map