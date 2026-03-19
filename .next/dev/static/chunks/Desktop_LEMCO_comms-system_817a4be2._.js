(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/LEMCO/comms-system/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDate",
    ()=>formatDate,
    "formatRelativeTime",
    ()=>formatRelativeTime,
    "formatTime",
    ()=>formatTime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    });
}
function formatTime(date) {
    const d = new Date(date);
    return d.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}
function formatRelativeTime(date) {
    const d = new Date(date);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return formatDate(d);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next-themes/dist/index.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$home$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/home.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/check-square.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-client] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function NavItem({ href, icon, label, description, badge, active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors', active ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-shrink-0', active && 'text-primary'),
                children: icon
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('font-medium text-sm', active && 'text-primary'),
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            badge !== undefined && badge > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-full",
                                children: badge
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground truncate block",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = NavItem;
function Sidebar({ stats }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const navItems = [
        {
            href: '/',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$home$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            label: 'Home',
            description: 'Eagle-eye dashboard',
            badge: undefined
        },
        {
            href: '/messages',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            label: 'Messages',
            description: 'Unified communications',
            badge: stats?.unreadMessages
        },
        {
            href: '/tasks',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this),
            label: 'Tasks',
            description: 'Execution lane',
            badge: stats?.openTasks
        },
        {
            href: '/projects',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                lineNumber: 97,
                columnNumber: 13
            }, this),
            label: 'Projects',
            description: 'Portfolio view',
            badge: stats?.activeProjects
        },
        {
            href: '/notifications',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                lineNumber: 104,
                columnNumber: 13
            }, this),
            label: 'Notifications',
            description: 'Activity history',
            badge: undefined
        },
        {
            href: '/reports',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this),
            label: 'Reports',
            description: 'Analytics & exports',
            badge: undefined
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-64 h-screen bg-card border-r border-border flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-lg bg-foreground flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                className: "w-5 h-5 text-background"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-sm",
                                    children: "LEMCO"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Priority OS"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1",
                        children: "Demo Workspace"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground leading-relaxed",
                        children: "Using seeded messages, tasks, and projects for this prototype."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 p-3 space-y-1 overflow-y-auto",
                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        ...item,
                        active: pathname === item.href
                    }, item.href, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-t border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setTheme(theme === 'dark' ? 'light' : 'dark'),
                    className: "flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
                    children: [
                        theme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium",
                            children: theme === 'dark' ? 'Light mode' : 'Dark mode'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "43oQhy4bPh0CJLaxiMwAyIruvus=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c1 = Sidebar;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavItem");
__turbopack_context__.k.register(_c1, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LEMCO/comms-system/components/top-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopNav",
    ()=>TopNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function TopNav() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "h-16 border-b border-border bg-card flex items-center justify-between px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 max-w-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/top-nav.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search messages, tasks, or projects",
                            className: "w-full h-10 pl-10 pr-4 rounded-lg bg-muted border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/top-nav.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/LEMCO/comms-system/components/top-nav.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/top-nav.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-muted-foreground",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(new Date())
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/top-nav.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-full bg-primary flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium text-primary-foreground",
                            children: "MJ"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/top-nav.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/top-nav.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/top-nav.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/LEMCO/comms-system/components/top-nav.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = TopNav;
var _c;
__turbopack_context__.k.register(_c, "TopNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AskButton",
    ()=>AskButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AskButton() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(true),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed bottom-6 right-6 flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600 transition-all z-50', isOpen && 'hidden'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-sm",
                        children: "Ask Priority OS"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed bottom-6 right-6 w-96 bg-card border border-border rounded-2xl shadow-2xl transition-all duration-300 z-50', isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 border-b border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            className: "w-4 h-4 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold text-sm",
                                                children: "Priority OS Assistant"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                                                lineNumber: 39,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-muted-foreground",
                                                children: "AI-powered help"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                                                lineNumber: 40,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: "p-1.5 rounded-lg hover:bg-muted transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-72 p-4 overflow-y-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-muted rounded-lg p-3 max-w-[85%]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "Hi! I can help you understand your priorities, summarize messages, or suggest what to focus on next. What would you like to know?"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: message,
                                    onChange: (e)=>setMessage(e.target.value),
                                    placeholder: "Ask about your priorities...",
                                    className: "flex-1 h-10 px-4 rounded-lg bg-muted border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "h-10 w-10 flex items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AskButton, "3TNMhcVmWKVw/k13Y/+sK8UTd50=");
_c = AskButton;
var _c;
__turbopack_context__.k.register(_c, "AskButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LEMCO/comms-system/components/dashboard-layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardLayout",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/components/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$top$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/components/top-nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$ask$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/components/ask-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const fetcher = (url)=>fetch(url).then((res)=>res.json());
function DashboardLayout({ children }) {
    _s();
    const { data: stats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])('/api/stats', fetcher, {
        refreshInterval: 5000
    });
    const { data: messages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])('/api/messages', fetcher, {
        refreshInterval: 5000
    });
    const { data: tasks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])('/api/tasks', fetcher, {
        refreshInterval: 5000
    });
    const unreadMessages = messages?.filter((m)=>!m.read)?.length || 0;
    const openTasks = tasks?.filter((t)=>t.status !== 'done')?.length || 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                stats: {
                    unreadMessages,
                    openTasks,
                    activeProjects: stats?.total_messages ? 4 : 0
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/dashboard-layout.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$top$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopNav"], {}, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/dashboard-layout.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-y-auto",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/dashboard-layout.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/dashboard-layout.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$ask$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AskButton"], {}, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/dashboard-layout.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/LEMCO/comms-system/components/dashboard-layout.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(DashboardLayout, "pF+ItLO/rtgDHBIxUhz7Pn5MaHo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    ];
});
_c = DashboardLayout;
var _c;
__turbopack_context__.k.register(_c, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const QUOTES = [
    {
        text: "Focus on being productive instead of busy.",
        author: "Tim Ferriss"
    },
    {
        text: "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
        author: "Stephen Covey"
    },
    {
        text: "Action is the foundational key to all success.",
        author: "Pablo Picasso"
    },
    {
        text: "Well begun is half done.",
        author: "Aristotle"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "It's not about having time. It's about making time.",
        author: "Unknown"
    },
    {
        text: "Clarity is the counterbalance of profound thoughts.",
        author: "Luc de Clapiers"
    },
    {
        text: "Do the hard jobs first. The easy jobs will take care of themselves.",
        author: "Dale Carnegie"
    }
];
const WEATHER_ICONS = {
    0: '☀️',
    1: '🌤',
    2: '⛅',
    3: '☁️',
    45: '🌫',
    48: '🌫',
    51: '🌦',
    61: '🌧',
    71: '🌨',
    80: '🌦',
    95: '⛈'
};
const WEATHER_DESCS = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Foggy',
    51: 'Light drizzle',
    61: 'Rain',
    71: 'Snow',
    80: 'Showers',
    95: 'Thunderstorm'
};
const PALETTES = {
    dawn: {
        sky: [
            '#1a1a3e',
            '#3b2a5a',
            '#7b4a6a',
            '#e8805a',
            '#f4b97a'
        ],
        text: '#fff',
        widget: 'rgba(255,255,255,0.15)',
        pill: 'rgba(255,255,255,0.2)',
        quote: 'rgba(255,255,255,0.1)',
        celestialColor: '#fde68a',
        celestialType: 'sun',
        celestialY: 0.82
    },
    morning: {
        sky: [
            '#fde8c8',
            '#f9c47a',
            '#fdda8a',
            '#a8d8f0',
            '#6ab4e8'
        ],
        text: '#1a2a4a',
        widget: 'rgba(255,255,255,0.45)',
        pill: 'rgba(255,255,255,0.6)',
        quote: 'rgba(255,255,255,0.35)',
        celestialColor: '#fcd34d',
        celestialType: 'sun',
        celestialY: 0.25
    },
    midday: {
        sky: [
            '#1e90e8',
            '#3aa8f0',
            '#60bef8',
            '#90d4fb',
            '#c0e8fd'
        ],
        text: '#0a1a3a',
        widget: 'rgba(255,255,255,0.35)',
        pill: 'rgba(255,255,255,0.55)',
        quote: 'rgba(255,255,255,0.25)',
        celestialColor: '#fef9c3',
        celestialType: 'sun',
        celestialY: 0.08
    },
    afternoon: {
        sky: [
            '#2e9ee0',
            '#5ab8f0',
            '#80ccf8',
            '#b0e0fa',
            '#d0eefe'
        ],
        text: '#0a1a3a',
        widget: 'rgba(255,255,255,0.35)',
        pill: 'rgba(255,255,255,0.55)',
        quote: 'rgba(255,255,255,0.25)',
        celestialColor: '#fcd34d',
        celestialType: 'sun',
        celestialY: 0.22
    },
    sunset: {
        sky: [
            '#0a0a2a',
            '#3a1a4a',
            '#8a3050',
            '#e05030',
            '#f4924a',
            '#f9c87a'
        ],
        text: '#fff',
        widget: 'rgba(0,0,0,0.3)',
        pill: 'rgba(255,255,255,0.2)',
        quote: 'rgba(255,255,255,0.1)',
        celestialColor: '#fb923c',
        celestialType: 'sun',
        celestialY: 0.78
    },
    dusk: {
        sky: [
            '#0a0520',
            '#1a0a38',
            '#2e1048',
            '#6a2858',
            '#c05848'
        ],
        text: '#f0d8f0',
        widget: 'rgba(255,255,255,0.1)',
        pill: 'rgba(255,255,255,0.15)',
        quote: 'rgba(255,255,255,0.08)',
        celestialColor: '#e879f9',
        celestialType: 'moon',
        celestialY: 0.65
    },
    night: {
        sky: [
            '#020410',
            '#060820',
            '#0a0c28',
            '#0e1035',
            '#141840'
        ],
        text: '#c8d8f8',
        widget: 'rgba(255,255,255,0.07)',
        pill: 'rgba(255,255,255,0.12)',
        quote: 'rgba(255,255,255,0.06)',
        celestialColor: '#e2e8f0',
        celestialType: 'moon',
        celestialY: 0.18
    }
};
function getTimeOfDay(h) {
    if (h >= 5 && h < 7) return 'dawn';
    if (h >= 7 && h < 11) return 'morning';
    if (h >= 11 && h < 15) return 'midday';
    if (h >= 15 && h < 18) return 'afternoon';
    if (h >= 18 && h < 20) return 'sunset';
    if (h >= 20 && h < 22) return 'dusk';
    return 'night';
}
function drawSky(canvas, tod) {
    const p = PALETTES[tod];
    const W = canvas.width, H = canvas.height;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, W, H);
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    p.sky.forEach((c, i)=>grad.addColorStop(i / (p.sky.length - 1), c));
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    if (tod === 'night' || tod === 'dusk') {
        const count = tod === 'night' ? 80 : 30;
        for(let i = 0; i < count; i++){
            const sx = (Math.sin(i * 137.5) * 0.5 + 0.5) * W;
            const sy = (Math.sin(i * 97.3) * 0.5 + 0.5) * H * 0.7;
            const sr = i % 7 === 0 ? 1.5 : 0.8;
            ctx.fillStyle = `rgba(255,255,255,${0.5 + i % 3 * 0.2})`;
            ctx.beginPath();
            ctx.arc(sx, sy, sr, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    if ([
        'morning',
        'midday',
        'afternoon'
    ].includes(tod)) {
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        const clouds = [
            [
                0.15,
                0.35,
                60,
                22
            ],
            [
                0.35,
                0.2,
                90,
                18
            ],
            [
                0.6,
                0.42,
                70,
                20
            ],
            [
                0.75,
                0.28,
                50,
                16
            ]
        ];
        clouds.forEach(([cx, cy, w, h])=>{
            ctx.beginPath();
            ctx.ellipse(cx * W, cy * H, w, h, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(cx * W - 20, cy * H + 8, w * 0.6, h * 0.7, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(cx * W + 25, cy * H + 6, w * 0.5, h * 0.65, 0, 0, Math.PI * 2);
            ctx.fill();
        });
    }
    const cx = W * 0.82, cy = H * p.celestialY, r = p.celestialType === 'sun' ? 28 : 22;
    if (p.celestialType === 'sun') {
        const glow = ctx.createRadialGradient(cx, cy, r * 0.3, cx, cy, r * 2.5);
        glow.addColorStop(0, 'rgba(255,220,100,0.35)');
        glow.addColorStop(1, 'rgba(255,180,50,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(cx, cy, r * 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = p.celestialColor;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
    } else {
        ctx.fillStyle = p.celestialColor;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = p.sky[1] ?? '#0a0c28';
        ctx.beginPath();
        ctx.arc(cx + r * 0.35, cy - r * 0.1, r * 0.82, 0, Math.PI * 2);
        ctx.fill();
    }
}
const DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
function HeroSection({ city = 'Cape Town', latitude = -33.9249, longitude = 18.4241 }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tod, setTod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('midday');
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [secs, setSecs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dayStr, setDayStr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dateStr, setDateStr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [weather, setWeather] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [wError, setWError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const today = new Date();
    const quote = QUOTES[today.getDate() % QUOTES.length];
    const p = PALETTES[tod];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const tick = {
                "HeroSection.useEffect.tick": ()=>{
                    const now = new Date();
                    const h = now.getHours();
                    const mm = String(now.getMinutes()).padStart(2, '0');
                    const s = String(now.getSeconds()).padStart(2, '0');
                    setTime(`${String(h).padStart(2, '0')}:${mm}`);
                    setSecs(s);
                    setDayStr(DAYS[now.getDay()]);
                    setDateStr(`${DAYS[now.getDay()]}, ${MONTHS[now.getMonth()]} ${now.getDate()}`);
                    setTod(getTimeOfDay(h));
                }
            }["HeroSection.useEffect.tick"];
            tick();
            const id = setInterval(tick, 1000);
            return ({
                "HeroSection.useEffect": ()=>clearInterval(id)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const draw = {
                "HeroSection.useEffect.draw": ()=>{
                    if (!canvasRef.current || !wrapRef.current) return;
                    canvasRef.current.width = wrapRef.current.offsetWidth;
                    canvasRef.current.height = wrapRef.current.offsetHeight;
                    drawSky(canvasRef.current, tod);
                }
            }["HeroSection.useEffect.draw"];
            draw();
            window.addEventListener('resize', draw);
            return ({
                "HeroSection.useEffect": ()=>window.removeEventListener('resize', draw)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        tod
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const fetch_ = {
                "HeroSection.useEffect.fetch_": async ()=>{
                    try {
                        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`);
                        const data = await res.json();
                        const code = data.current_weather.weathercode;
                        const mc = WEATHER_ICONS[code] ? code : Math.floor(code / 10) * 10;
                        setWeather({
                            temp: Math.round(data.current_weather.temperature),
                            windspeed: Math.round(data.current_weather.windspeed),
                            icon: WEATHER_ICONS[mc] ?? '🌡',
                            desc: WEATHER_DESCS[mc] ?? 'Variable'
                        });
                    } catch  {
                        setWError(true);
                    }
                }
            }["HeroSection.useEffect.fetch_"];
            fetch_();
            const id = setInterval(fetch_, 10 * 60 * 1000);
            return ({
                "HeroSection.useEffect": ()=>clearInterval(id)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        latitude,
        longitude
    ]);
    const widgetStyle = {
        background: p.widget,
        backdropFilter: 'blur(12px)',
        border: '0.5px solid rgba(255,255,255,0.18)',
        color: p.text,
        borderRadius: '12px',
        padding: '0.85rem 1rem'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapRef,
        className: "relative rounded-xl overflow-hidden min-h-[220px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0 w-full h-full z-0"
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 p-6 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start",
                style: {
                    color: p.text
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-semibold uppercase tracking-widest mb-4",
                                style: {
                                    opacity: 0.7
                                },
                                children: "Priority Workspace"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold mb-3 max-w-lg leading-snug",
                                children: [
                                    "A calmer place to rank the work that",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "italic font-normal",
                                        style: {
                                            opacity: 0.75
                                        },
                                        children: "matters first."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-relaxed mb-4 max-w-xl",
                                style: {
                                    opacity: 0.8
                                },
                                children: "Mail, WhatsApp, Telegram, and texts land in one view so urgent communication, tasks, and project pressure stay connected without feeling noisy."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold",
                                style: {
                                    background: p.pill,
                                    color: p.text
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-green-400 inline-block"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    dateStr
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 max-w-xl py-2 px-3",
                                style: {
                                    background: p.quote,
                                    borderLeft: '2px solid rgba(255,255,255,0.3)',
                                    borderRadius: '0 8px 8px 0',
                                    color: p.text
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] uppercase tracking-widest mb-1",
                                        style: {
                                            opacity: 0.55
                                        },
                                        children: "Quote of the day"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs italic leading-relaxed",
                                        style: {
                                            opacity: 0.85
                                        },
                                        children: [
                                            '"',
                                            quote.text,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] uppercase tracking-wide mt-1",
                                        style: {
                                            opacity: 0.5
                                        },
                                        children: [
                                            "— ",
                                            quote.author
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2.5 min-w-[165px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: widgetStyle,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] uppercase tracking-widest mb-1",
                                        style: {
                                            opacity: 0.55
                                        },
                                        children: "Local time"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl font-bold leading-none tracking-tight",
                                        children: time || '--:--'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] mt-1",
                                        style: {
                                            opacity: 0.5
                                        },
                                        children: [
                                            dayStr,
                                            " · ",
                                            secs,
                                            "s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: widgetStyle,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] uppercase tracking-widest mb-2",
                                        style: {
                                            opacity: 0.55
                                        },
                                        children: [
                                            "Weather · ",
                                            city
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    wError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs",
                                        style: {
                                            opacity: 0.6
                                        },
                                        children: "Unavailable"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this) : weather ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl",
                                                children: weather.icon
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold leading-none",
                                                        children: [
                                                            weather.temp,
                                                            "°C"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] mt-1",
                                                        style: {
                                                            opacity: 0.7
                                                        },
                                                        children: weather.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] mt-0.5",
                                                        style: {
                                                            opacity: 0.45
                                                        },
                                                        children: [
                                                            "Wind ",
                                                            weather.windspeed,
                                                            " km/h"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs animate-pulse",
                                        style: {
                                            opacity: 0.6
                                        },
                                        children: "Fetching..."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "Jlyc8fMzYglaqIuNR1UYuYL4WRQ=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatCards",
    ()=>StatCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/alert-triangle.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
'use client';
;
;
function StatCards({ urgentComms, urgentTasks, portfolioProgress }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card rounded-xl border border-border p-4 bg-primary/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl font-bold text-foreground",
                                    children: urgentComms
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs font-medium text-muted-foreground mt-1",
                                    children: "Urgent Communications"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: "Need attention now"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 bg-primary/10 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                className: "w-5 h-5 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card rounded-xl border border-border p-4 bg-destructive/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl font-bold text-foreground",
                                    children: urgentTasks
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs font-medium text-muted-foreground mt-1",
                                    children: "Urgent Tasks"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: "Blocking delivery"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 bg-destructive/10 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "w-5 h-5 text-destructive"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card rounded-xl border border-border p-4 bg-amber-500/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl font-bold text-foreground",
                                    children: [
                                        portfolioProgress,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs font-medium text-muted-foreground mt-1",
                                    children: "Portfolio Progress"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: "Across active projects"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 bg-amber-500/10 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                className: "w-5 h-5 text-amber-500"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = StatCards;
var _c;
__turbopack_context__.k.register(_c, "StatCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InboxSnapshot",
    ()=>InboxSnapshot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function ChannelIcon({ channel }) {
    switch(channel){
        case 'email':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                lineNumber: 26,
                columnNumber: 14
            }, this);
        case 'whatsapp':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                lineNumber: 28,
                columnNumber: 14
            }, this);
        case 'telegram':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                lineNumber: 30,
                columnNumber: 14
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                lineNumber: 32,
                columnNumber: 14
            }, this);
    }
}
_c = ChannelIcon;
function InboxSnapshot({ messages }) {
    const priorityMessages = messages.filter((m)=>!m.read).slice(0, 4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-card rounded-xl border border-border p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1",
                                children: "Inbox Snapshot"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-foreground",
                                children: "Priority communications"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/messages",
                        className: "flex items-center gap-1 text-sm text-primary hover:underline",
                        children: [
                            "Open messages",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    priorityMessages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in",
                            style: {
                                animationDelay: `${index * 50}ms`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    message.urgency === 'urgent' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-1.5 w-2 h-2 rounded-full bg-destructive animate-pulse-dot flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1 rounded", message.channel === 'email' && "bg-primary/10 text-primary", message.channel === 'whatsapp' && "bg-emerald-500/10 text-emerald-500", message.channel === 'telegram' && "bg-sky-500/10 text-sky-500"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChannelIcon, {
                                                            channel: message.channel
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-sm text-foreground truncate",
                                                        children: message.sender
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, this),
                                                    message.project && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground bg-muted px-1.5 py-0.5 rounded",
                                                        children: message.project
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground ml-auto flex-shrink-0",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRelativeTime"])(message.created_at)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            message.subject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium text-foreground mb-0.5 truncate",
                                                children: message.subject
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground line-clamp-1",
                                                children: message.body
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, message.id, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)),
                    priorityMessages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8 text-muted-foreground text-sm",
                        children: "No unread messages"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c1 = InboxSnapshot;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChannelIcon");
__turbopack_context__.k.register(_c1, "InboxSnapshot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusQueue",
    ()=>FocusQueue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function formatDueTime(due) {
    const dueDate = new Date(due);
    const now = new Date();
    const diffHours = Math.round((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60));
    if (diffHours < 0) return 'Overdue';
    if (diffHours < 1) return 'Due soon';
    if (diffHours < 24) return `${diffHours}h`;
    return `${Math.round(diffHours / 24)}d`;
}
function FocusQueue({ tasks }) {
    const focusTasks = tasks.filter((t)=>t.status !== 'done').sort((a, b)=>{
        // Prioritize urgent/blocked tasks
        if (a.priority === 'urgent' && b.priority !== 'urgent') return -1;
        if (b.priority === 'urgent' && a.priority !== 'urgent') return 1;
        if (a.status === 'blocked' && b.status !== 'blocked') return -1;
        if (b.status === 'blocked' && a.status !== 'blocked') return 1;
        return 0;
    }).slice(0, 4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-card rounded-xl border border-border p-5 h-fit",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1",
                                children: "Today"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-foreground",
                                children: "Focus queue"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/tasks",
                        className: "flex items-center gap-1 text-sm text-primary hover:underline",
                        children: [
                            "Open tasks",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    focusTasks.map((task, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in",
                            style: {
                                animationDelay: `${index * 50}ms`
                            },
                            children: [
                                task.project && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-1",
                                    children: task.project
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium text-sm text-foreground mb-2",
                                    children: task.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-2 mb-2",
                                    children: [
                                        task.due && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 text-xs px-2 py-0.5 rounded-full", formatDueTime(task.due) === 'Overdue' ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this),
                                                formatDueTime(task.due)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-medium uppercase px-2 py-0.5 rounded-full", task.status === 'blocked' && "bg-destructive/10 text-destructive", task.status === 'in-progress' && "bg-amber-500/10 text-amber-600 dark:text-amber-400", task.status === 'pending' && "bg-muted text-muted-foreground"),
                                            children: task.status
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1.5 bg-muted rounded-full overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-primary rounded-full transition-all duration-500",
                                        style: {
                                            width: `${task.progress}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, task.id, true, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)),
                    focusTasks.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8 text-muted-foreground text-sm",
                        children: "No tasks in queue"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c = FocusQueue;
var _c;
__turbopack_context__.k.register(_c, "FocusQueue");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortfolioGlance",
    ()=>PortfolioGlance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function getStatusConfig(status) {
    switch(status.toLowerCase()){
        case 'at-risk':
        case 'at risk':
            return {
                label: 'At risk',
                className: 'bg-destructive/10 text-destructive'
            };
        case 'on-track':
        case 'on track':
            return {
                label: 'On track',
                className: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
            };
        case 'watch':
            return {
                label: 'Watch',
                className: 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
            };
        default:
            return {
                label: status,
                className: 'bg-muted text-muted-foreground'
            };
    }
}
function PortfolioGlance({ projects }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-card rounded-xl border border-border p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1",
                                children: "Active Projects"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-foreground",
                                children: "Portfolio at a glance"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/projects",
                        className: "flex items-center gap-1 text-sm text-primary hover:underline",
                        children: [
                            "View all",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    projects.map((project, index)=>{
                        const statusConfig = getStatusConfig(project.status);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in",
                            style: {
                                animationDelay: `${index * 50}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-4 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-sm text-foreground",
                                                            children: project.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-medium uppercase px-2 py-0.5 rounded-full", statusConfig.className),
                                                            children: statusConfig.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this),
                                                project.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground line-clamp-1",
                                                    children: project.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 text-xs text-muted-foreground flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        project.open_tasks,
                                                        " open"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this),
                                                project.urgent_items > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-destructive font-medium",
                                                    children: [
                                                        project.urgent_items,
                                                        " urgent"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 h-1.5 bg-muted rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full rounded-full transition-all duration-500", project.status.toLowerCase().includes('risk') ? "bg-destructive" : project.status.toLowerCase() === 'watch' ? "bg-amber-500" : "bg-emerald-500"),
                                                style: {
                                                    width: `${project.progress}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium text-muted-foreground w-10 text-right",
                                            children: [
                                                project.progress,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, project.id, true, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this);
                    }),
                    projects.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8 text-muted-foreground text-sm",
                        children: "No active projects"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = PortfolioGlance;
var _c;
__turbopack_context__.k.register(_c, "PortfolioGlance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LEMCO/comms-system/components/home/agent-notes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentNotes",
    ()=>AgentNotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
'use client';
;
;
function AgentNotes({ urgentMessages, urgentTasks, projects }) {
    const atRiskProjects = projects.filter((p)=>p.status.toLowerCase().includes('risk'));
    const generateSummary = ()=>{
        const parts = [];
        if (urgentMessages > 0) {
            parts.push(`${urgentMessages} urgent message${urgentMessages > 1 ? 's' : ''} need${urgentMessages === 1 ? 's' : ''} attention`);
        }
        if (urgentTasks > 0) {
            parts.push(`${urgentTasks} task${urgentTasks > 1 ? 's are' : ' is'} blocking progress`);
        }
        if (atRiskProjects.length > 0) {
            parts.push(`${atRiskProjects.map((p)=>p.name).join(' and ')} ${atRiskProjects.length > 1 ? 'are' : 'is'} at risk`);
        }
        if (parts.length === 0) {
            return "All clear. No urgent items require immediate attention. Focus on progressing your active tasks.";
        }
        return parts.join('. ') + '. Consider addressing these priorities first.';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-card rounded-xl border border-border p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2 bg-primary/10 rounded-lg flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                        className: "w-4 h-4 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/agent-notes.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/agent-notes.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1",
                            children: "Agent notes"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/agent-notes.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-foreground leading-relaxed",
                            children: generateSummary()
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/agent-notes.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/LEMCO/comms-system/components/home/agent-notes.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/agent-notes.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/agent-notes.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = AgentNotes;
var _c;
__turbopack_context__.k.register(_c, "AgentNotes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LEMCO/comms-system/components/home/home-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeContent",
    ()=>HomeContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$home$2f$hero$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/components/home/hero-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$home$2f$stat$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/components/home/stat-cards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$home$2f$inbox$2d$snapshot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/components/home/inbox-snapshot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$home$2f$focus$2d$queue$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/components/home/focus-queue.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$home$2f$portfolio$2d$glance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/components/home/portfolio-glance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$home$2f$agent$2d$notes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LEMCO/comms-system/components/home/agent-notes.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const fetcher = (url)=>fetch(url).then((res)=>res.json());
function HomeContent() {
    _s();
    const { data: stats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])('/api/stats', fetcher, {
        refreshInterval: 5000
    });
    const { data: messages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])('/api/messages', fetcher, {
        refreshInterval: 5000
    });
    const { data: tasks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])('/api/tasks', fetcher, {
        refreshInterval: 5000
    });
    const { data: projects } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])('/api/projects', fetcher, {
        refreshInterval: 5000
    });
    const urgentMessages = messages?.filter((m)=>m.urgency === 'urgent')?.length || 0;
    const urgentTasks = tasks?.filter((t)=>t.status === 'blocked' || t.priority === 'urgent')?.length || 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$home$2f$hero$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {
                            date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(new Date())
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/home-content.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/home-content.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$home$2f$stat$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCards"], {
                            urgentComms: urgentMessages,
                            urgentTasks: urgentTasks,
                            portfolioProgress: stats?.portfolio_progress || 0
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/home-content.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/home-content.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/home-content.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$home$2f$inbox$2d$snapshot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InboxSnapshot"], {
                                messages: messages || []
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/home-content.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$home$2f$agent$2d$notes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentNotes"], {
                                urgentMessages: urgentMessages,
                                urgentTasks: urgentTasks,
                                projects: projects || []
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/home-content.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/home-content.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$home$2f$focus$2d$queue$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusQueue"], {
                            tasks: tasks || []
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LEMCO/comms-system/components/home/home-content.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/home-content.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/home-content.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$components$2f$home$2f$portfolio$2d$glance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PortfolioGlance"], {
                projects: projects || []
            }, void 0, false, {
                fileName: "[project]/Desktop/LEMCO/comms-system/components/home/home-content.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/LEMCO/comms-system/components/home/home-content.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(HomeContent, "DXwFNJil7jjbEQ4VJybQL5Jd4hU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LEMCO$2f$comms$2d$system$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    ];
});
_c = HomeContent;
var _c;
__turbopack_context__.k.register(_c, "HomeContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_LEMCO_comms-system_817a4be2._.js.map