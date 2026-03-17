(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/titleEffect.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "titleEffect",
    ()=>titleEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function titleEffect(initial, updated, delay) {
    _s();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "titleEffect.useEffect": ()=>{
            const timer = setTimeout({
                "titleEffect.useEffect.timer": ()=>{
                    setText(updated);
                }
            }["titleEffect.useEffect.timer"], delay);
            return ({
                "titleEffect.useEffect": ()=>clearTimeout(timer)
            })["titleEffect.useEffect"];
        }
    }["titleEffect.useEffect"], [
        updated,
        delay
    ]);
    return text;
}
_s(titleEffect, "jjFE8US+/ztVdq2ZLmAhSUAVq2Y=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/useTitleEffect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TitleEffect",
    ()=>TitleEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$titleEffect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/titleEffect.ts [app-client] (ecmascript)");
"use client";
;
;
function TitleEffect({ initial, updated, delay }) {
    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$titleEffect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["titleEffect"])(initial, updated, delay);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        children: title
    }, void 0, false, {
        fileName: "[project]/components/ui/useTitleEffect.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c = TitleEffect;
var _c;
__turbopack_context__.k.register(_c, "TitleEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d96eb112._.js.map