(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/useTitleEffect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TitleEffect",
    ()=>TitleEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ITERATIONS = 20;
const GAP = 250;
function TitleEffect({ text }) {
    _s();
    let length = text.length;
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0");
    const timers = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TitleEffect.useEffect": ()=>{
            for(let i = 0; i < 100; i++){
                const timer = setTimeout({
                    "TitleEffect.useEffect.timer": ()=>{
                        setTitle(i.toString());
                    }
                }["TitleEffect.useEffect.timer"], GAP * i + 1);
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
        children: title
    }, void 0, false, {
        fileName: "[project]/components/ui/useTitleEffect.tsx",
        lineNumber: 61,
        columnNumber: 12
    }, this);
} // function generateString(length : number) : string {
 //   const chars = ['<', '>', '$', '!', '*', "?", '/', '-', '=', '+', '%', '&'];
 //   let string: string = "";
 //   for(let i=0; i<length; i++) {
 //     let index = Math.floor((Math.random() * chars.length)) + 1;
 //     let char = chars[index];
 //     string = string + char;
 //   }
 //   return string;
 // }
 // function playEffect(index: number, length: number, text: string) {
 //   let next: string = "";
 //   if (ITERATIONS - index <= length) {
 //     next += text.slice(0, ITERATIONS - index);
 //     length -= ITERATIONS - index;
 //   }
 //     next += generateString(length);
 //   return next;
 // }
_s(TitleEffect, "mxZVvb1vaSXEi0ex7TNNiTSjqi0=");
_c = TitleEffect;
var _c;
__turbopack_context__.k.register(_c, "TitleEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_ui_useTitleEffect_tsx_079bf24c._.js.map