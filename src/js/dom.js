// IE6-10 不支持
// Safari5/Chrome8/Firefox3.6/Opera11.5 及以上版本支持
var supportClassList = (function () {
    var div = document.createElement('div');
    div.className = 'a';
    return !!div.classList;
})();
var hasClassFunc, addClassFunc, removeClassFunc, toggleClassFunc, replaceClassFunc;
function check(el, cls) {
    if (el.nodeType !== 1 || typeof cls !== 'string') {
        return false;
    }
    return true;
}

if (supportClassList) {
    hasClassFunc = function (el, cls) {
        if (check(el, cls)) return el.classList.contains(cls);
        else return false;
    };
    addClassFunc = function (el, cls) {
        var i = 0,
            c;
        if (check(el, cls)) {
            cls = cls.split(' ');
            while ((c = cls[i++])) {
                el.classList.add(c);
            }
        }
    };
    removeClassFunc = function (el, cls) {
        var i = 0,
            c;
        if (check(el, cls)) {
            cls = cls.split(' ');
            while ((c = cls[i++])) {
                el.classList.remove(c);
            }
        }
    };
    toggleClassFunc = function (el, cls) {
        if (check(el, cls)) {
            el.classList.toggle(cls);
        }
    };
} else {
    hasClassFunc = function (el, cls) {
        if (check(el, cls)) return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') != -1;
        else return false;
    };
    addClassFunc = function (el, cls) {
        if (check(el, cls) && !hasClassFunc(el, cls)) {
            el.className += (el.className ? ' ' : '') + cls;
        }
    };

    removeClassFunc = function (el, cls) {
        if (check(el, cls)) {
            el.className = el.className.replace(RegExp('\\b' + cls + '\\b', 'g'), '');
        }
    };
    toggleClassFunc = function (el, cls) {
        hasClassFunc(el, cls) ? removeClassFunc(el, cls) : addClassFunc(el, cls);
    };
}

replaceClassFunc = function (el, oldCls, newCls) {
    removeClassFunc(el, oldCls);
    addClassFunc(el, newCls);
};

export const hasClass = hasClassFunc;
export const addClass = addClassFunc;
export const removeClass = removeClassFunc;
export const toggleClass = toggleClassFunc;
export const replaceClass = replaceClassFunc;
