module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[project]/app/lib/mega-storage.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMegaStorage",
    ()=>getMegaStorage,
    "resetMegaSession",
    ()=>resetMegaSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$megajs$2f$dist$2f$main$2e$node$2d$es$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/megajs/dist/main.node-es.mjs [app-route] (ecmascript)");
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
// 全局变量（注意：在 Next.js 开发环境下，热重载可能导致模块重新执行，建议使用 globalThis 持久化）
var globalForMega = globalThis;
if (!globalForMega.mega) {
    globalForMega.mega = {
        storage: null,
        sid: null,
        lastCheck: 0
    };
}
var state = globalForMega.mega;
// 会话有效性检查的超时时间（毫秒），避免每次请求都调用 account 接口
var CHECK_INTERVAL = 5 * 60 * 1000; // 5分钟检查一次
function isSessionValid(_x) {
    return _isSessionValid.apply(this, arguments);
}
function _isSessionValid() {
    _isSessionValid = _asyncToGenerator(function*(storage) {
        if (!storage || !storage.sid) return false;
        // 避免过于频繁检查
        if (Date.now() - state.lastCheck < CHECK_INTERVAL) return true;
        try {
            // 轻量级请求：获取账户信息（或任意需要认证的API）
            yield storage.getAccountInfo();
            state.lastCheck = Date.now();
            return true;
        } catch (err) {
            var _err$message;
            // 常见失效错误：-9 (ESID)，-2 (ENOENT) 等
            if (err.code === -9 || (_err$message = err.message) !== null && _err$message !== void 0 && _err$message.includes('sid')) {
                console.warn('会话已失效，需要重新登录');
                return false;
            }
            // 其他错误可能是临时网络问题，仍视为有效（避免频繁重登）
            console.warn('会话检查出现非致命错误', err.message);
            return true;
        }
    });
    return _isSessionValid.apply(this, arguments);
}
function getMegaStorage() {
    return _getMegaStorage.apply(this, arguments);
}
// 可选：提供一个强制重置会话的方法（用于处理密码变更等情况）
function _getMegaStorage() {
    _getMegaStorage = _asyncToGenerator(function*() {
        // 1. 尝试复用现有会话
        if (state.storage && (yield isSessionValid(state.storage))) {
            console.log('✅ 复用有效 MEGA 会话');
            return state.storage;
        }
        // 2. 如果有 sid 但 storage 对象丢失，尝试用 sid 重建
        if (state.sid) {
            try {
                console.log('🔑 尝试使用存储的 SID 重建会话...');
                // @ts-ignore - sid is a valid property for megajs storage initialization
                var _storage = yield new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$megajs$2f$dist$2f$main$2e$node$2d$es$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Storage"]({
                    sid: state.sid,
                    keepalive: true
                }).ready;
                // 验证重建后的会话是否有效
                yield _storage.getAccountInfo();
                state.storage = _storage;
                state.lastCheck = Date.now();
                console.log('✅ SID 重建成功');
                return _storage;
            } catch (err) {
                console.warn('SID 重建失败，将使用密码登录', err.message);
                state.sid = null;
                state.storage = null;
            }
        }
        // 3. 使用邮箱密码重新登录
        console.log('🔐 使用密码登录 MEGA 以获取新会话...');
        var email = process.env.MEGA_EMAIL;
        var password = process.env.MEGA_PASSWORD;
        if (!email || !password) {
            throw new Error('MEGA_EMAIL or MEGA_PASSWORD environment variables are not set');
        }
        var storage = yield new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$megajs$2f$dist$2f$main$2e$node$2d$es$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Storage"]({
            email: email,
            password: password,
            keepalive: true,
            autologin: true // 自动处理 token 刷新
        }).ready;
        // 保存 sid 和 storage
        state.storage = storage;
        state.sid = storage.sid;
        state.lastCheck = Date.now();
        console.log("\u2705 \u767B\u5F55\u6210\u529F\uFF0CSID \u524D\u7F00: ".concat(storage.sid.substring(0, 10), "..."));
        return storage;
    });
    return _getMegaStorage.apply(this, arguments);
}
function resetMegaSession() {
    state.storage = null;
    state.sid = null;
    state.lastCheck = 0;
}
}),
"[project]/app/api/mega/upload/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$mega$2d$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/mega-storage.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/stream [external] (stream, cjs)");
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
function POST(_x) {
    return _POST.apply(this, arguments);
}
function _POST() {
    _POST = _asyncToGenerator(function*(request) {
        try {
            // 1. 解析表单数据
            var formData = yield request.formData();
            var file = formData.get('file');
            if (!file) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: '未提供文件'
                }, {
                    status: 400
                });
            }
            console.log("\uD83D\uDCC1 \u6536\u5230\u6587\u4EF6: ".concat(file.name, ", \u5927\u5C0F: ").concat(file.size, " \u5B57\u8282"));
            // 2. 获取 MEGA 存储实例
            var storage = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$mega$2d$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMegaStorage"])();
            // 3. 创建上传流
            console.log('⬆️ 开始上传到 MEGA...');
            var upload = storage.upload({
                name: file.name,
                size: file.size
            });
            // 4. 获取 Web Stream 并转换为 Node Stream
            var webStream = file.stream();
            var nodeStream = __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["Readable"].fromWeb(webStream);
            // 5. 使用管道对接，自动处理背压
            nodeStream.pipe(upload);
            // 6. 等待上传完成
            var result = yield upload.complete;
            console.log('✅ 上传成功，文件ID:', result.fileId);
            // 7. 生成分享链接
            var shareLink = "https://mega.nz/file/".concat(result.fileId, "#").concat(result.key.toString('base64url'));
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                link: shareLink,
                fileId: result.fileId
            });
        } catch (error) {
            // 详细日志
            console.error('❌ MEGA 上传失败');
            console.error('错误消息:', error.message);
            console.error('错误代码:', error.code);
            console.error('完整堆栈:', error.stack);
            console.error('完整错误对象:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
            // 特殊处理认证错误
            if (error.code === 'EMFAREQUIRED') {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'MFA认证需要，请在MEGA网页版登录并获取会话密钥',
                    code: error.code
                }, {
                    status: 401
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: error.message || 'Upload failed',
                code: error.code
            }, {
                status: 500
            });
        }
    });
    return _POST.apply(this, arguments);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0b1526k._.js.map