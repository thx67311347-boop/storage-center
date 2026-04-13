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
"[project]/app/api/mega/upload/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$megajs$2f$dist$2f$main$2e$node$2d$es$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/megajs/dist/main.node-es.mjs [app-route] (ecmascript)");
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
// 全局缓存 Storage 实例，避免每次请求都重新登录
var cachedStorage = null;
function getMegaStorage() {
    return _getMegaStorage.apply(this, arguments);
}
function _getMegaStorage() {
    _getMegaStorage = _asyncToGenerator(function*() {
        if (!cachedStorage) {
            console.log('🔐 正在登录 MEGA...');
            // 使用邮箱密码登录
            var email = process.env.MEGA_EMAIL || '';
            var password = process.env.MEGA_PASSWORD || '';
            console.log('环境变量状态:');
            console.log('MEGA_EMAIL:', email ? '已设置' : '未设置');
            console.log('MEGA_PASSWORD:', password ? '已设置' : '未设置');
            if (email && password) {
                console.log('使用邮箱密码登录...');
                cachedStorage = yield new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$megajs$2f$dist$2f$main$2e$node$2d$es$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Storage"]({
                    email: email,
                    password: password
                }).ready;
            } else {
                throw new Error('MEGA credentials not configured');
            }
            console.log('✅ MEGA 登录成功');
        }
        return cachedStorage;
    });
    return _getMegaStorage.apply(this, arguments);
}
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
            var storage = yield getMegaStorage();
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0bdbjot._.js.map