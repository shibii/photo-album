function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.iobserve = void 0;
var iosupported = "IntersectionObserver" in window;
exports.iobserve = function (node, config) {
    if (!iosupported) {
        if (config.fallback)
            config.fallback();
        return;
    }
    var onIntersection = function (entry) {
        node.dispatchEvent(new CustomEvent("intersection", { detail: entry }));
    };
    var timeout = null;
    var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            onIntersection(entries[0]);
            if (config.once)
                return observer.unobserve(node);
            if (config.cooldown) {
                observer.unobserve(node);
                if (timeout)
                    clearTimeout(timeout);
                timeout = setTimeout(function () {
                    observer.observe(node);
                }, config.cooldown);
            }
        }
    }, config.options);
    if (timeout)
        clearTimeout(timeout);
    timeout = setTimeout(function () {
        observer.observe(node);
    }, config.delay ? config.delay : 0);
    return {
        update: function (update) {
            if (timeout)
                clearTimeout(timeout);
            observer.unobserve(node);
            observer.observe(node);
        },
        destroy: function () { return observer.unobserve(node); },
    };
};
});

var iobserve = dist.iobserve;
export { iobserve };
