/**
 * @license Angular 2.0.0-rc.4
 * (c) 2010-2016 Google, Inc. https://angular.io/
 * License: MIT
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Subject'), require('rxjs/observable/PromiseObservable'), require('rxjs/operator/toPromise'), require('rxjs/Observable')) :
        typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/Subject', 'rxjs/observable/PromiseObservable', 'rxjs/operator/toPromise', 'rxjs/Observable'], factory) :
            (factory((global.ng = global.ng || {}, global.ng.common = global.ng.common || {}), global.ng.core, global.Rx, global.Rx, global.Rx.Observable.prototype, global.Rx));
}(this, function (exports, _angular_core, rxjs_Subject, rxjs_observable_PromiseObservable, rxjs_operator_toPromise, rxjs_Observable) {
    'use strict';
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var globalScope;
    if (typeof window === 'undefined') {
        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
            globalScope = self;
        }
        else {
            globalScope = global;
        }
    }
    else {
        globalScope = window;
    }
    // Need to declare a new variable for global here since TypeScript
    // exports the original value of the symbol.
    var global$1 = globalScope;
    function getTypeNameForDebugging(type) {
        if (type['name']) {
            return type['name'];
        }
        return typeof type;
    }
    var Date = global$1.Date;
    // TODO: remove calls to assert in production environment
    // Note: Can't just export this and import in in other files
    // as `assert` is a reserved keyword in Dart
    global$1.assert = function assert(condition) {
        // TODO: to be fixed properly via #2830, noop for now
    };
    function isPresent(obj) {
        return obj !== undefined && obj !== null;
    }
    function isBlank(obj) {
        return obj === undefined || obj === null;
    }
    function isNumber(obj) {
        return typeof obj === 'number';
    }
    function isString(obj) {
        return typeof obj === 'string';
    }
    function isFunction(obj) {
        return typeof obj === 'function';
    }
    function isStringMap(obj) {
        return typeof obj === 'object' && obj !== null;
    }
    function isPromise(obj) {
        return obj instanceof global$1.Promise;
    }
    function isArray(obj) {
        return Array.isArray(obj);
    }
    function isDate(obj) {
        return obj instanceof Date && !isNaN(obj.valueOf());
    }
    function noop() { }
    function stringify(token) {
        if (typeof token === 'string') {
            return token;
        }
        if (token === undefined || token === null) {
            return '' + token;
        }
        if (token.name) {
            return token.name;
        }
        if (token.overriddenName) {
            return token.overriddenName;
        }
        var res = token.toString();
        var newLineIndex = res.indexOf('\n');
        return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
    }
    var StringWrapper = (function () {
        function StringWrapper() {
        }
        StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
        StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
        StringWrapper.split = function (s, regExp) { return s.split(regExp); };
        StringWrapper.equals = function (s, s2) { return s === s2; };
        StringWrapper.stripLeft = function (s, charVal) {
            if (s && s.length) {
                var pos = 0;
                for (var i = 0; i < s.length; i++) {
                    if (s[i] != charVal)
                        break;
                    pos++;
                }
                s = s.substring(pos);
            }
            return s;
        };
        StringWrapper.stripRight = function (s, charVal) {
            if (s && s.length) {
                var pos = s.length;
                for (var i = s.length - 1; i >= 0; i--) {
                    if (s[i] != charVal)
                        break;
                    pos--;
                }
                s = s.substring(0, pos);
            }
            return s;
        };
        StringWrapper.replace = function (s, from, replace) {
            return s.replace(from, replace);
        };
        StringWrapper.replaceAll = function (s, from, replace) {
            return s.replace(from, replace);
        };
        StringWrapper.slice = function (s, from, to) {
            if (from === void 0) { from = 0; }
            if (to === void 0) { to = null; }
            return s.slice(from, to === null ? undefined : to);
        };
        StringWrapper.replaceAllMapped = function (s, from, cb) {
            return s.replace(from, function () {
                var matches = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    matches[_i - 0] = arguments[_i];
                }
                // Remove offset & string from the result array
                matches.splice(-2, 2);
                // The callback receives match, p1, ..., pn
                return cb(matches);
            });
        };
        StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
        StringWrapper.compare = function (a, b) {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        };
        return StringWrapper;
    }());
    var NumberParseError = (function (_super) {
        __extends(NumberParseError, _super);
        function NumberParseError(message) {
            _super.call(this);
            this.message = message;
        }
        NumberParseError.prototype.toString = function () { return this.message; };
        return NumberParseError;
    }(Error));
    var NumberWrapper = (function () {
        function NumberWrapper() {
        }
        NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
        NumberWrapper.equal = function (a, b) { return a === b; };
        NumberWrapper.parseIntAutoRadix = function (text) {
            var result = parseInt(text);
            if (isNaN(result)) {
                throw new NumberParseError('Invalid integer literal when parsing ' + text);
            }
            return result;
        };
        NumberWrapper.parseInt = function (text, radix) {
            if (radix == 10) {
                if (/^(\-|\+)?[0-9]+$/.test(text)) {
                    return parseInt(text, radix);
                }
            }
            else if (radix == 16) {
                if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
                    return parseInt(text, radix);
                }
            }
            else {
                var result = parseInt(text, radix);
                if (!isNaN(result)) {
                    return result;
                }
            }
            throw new NumberParseError('Invalid integer literal when parsing ' + text + ' in base ' + radix);
        };
        // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
        NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
        Object.defineProperty(NumberWrapper, "NaN", {
            get: function () { return NaN; },
            enumerable: true,
            configurable: true
        });
        NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
        NumberWrapper.isNaN = function (value) { return isNaN(value); };
        NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
        return NumberWrapper;
    }());
    var RegExpWrapper = (function () {
        function RegExpWrapper() {
        }
        RegExpWrapper.create = function (regExpStr, flags) {
            if (flags === void 0) { flags = ''; }
            flags = flags.replace(/g/g, '');
            return new global$1.RegExp(regExpStr, flags + 'g');
        };
        RegExpWrapper.firstMatch = function (regExp, input) {
            // Reset multimatch regex state
            regExp.lastIndex = 0;
            return regExp.exec(input);
        };
        RegExpWrapper.test = function (regExp, input) {
            regExp.lastIndex = 0;
            return regExp.test(input);
        };
        RegExpWrapper.matcher = function (regExp, input) {
            // Reset regex state for the case
            // someone did not loop over all matches
            // last time.
            regExp.lastIndex = 0;
            return { re: regExp, input: input };
        };
        RegExpWrapper.replaceAll = function (regExp, input, replace) {
            var c = regExp.exec(input);
            var res = '';
            regExp.lastIndex = 0;
            var prev = 0;
            while (c) {
                res += input.substring(prev, c.index);
                res += replace(c);
                prev = c.index + c[0].length;
                regExp.lastIndex = prev;
                c = regExp.exec(input);
            }
            res += input.substring(prev);
            return res;
        };
        return RegExpWrapper;
    }());
    // JS has NaN !== NaN
    function looseIdentical(a, b) {
        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
    }
    function normalizeBlank(obj) {
        return isBlank(obj) ? null : obj;
    }
    function normalizeBool(obj) {
        return isBlank(obj) ? false : obj;
    }
    function isJsObject(o) {
        return o !== null && (typeof o === 'function' || typeof o === 'object');
    }
    // Can't be all uppercase as our transpiler would think it is a special directive...
    var Json = (function () {
        function Json() {
        }
        Json.parse = function (s) { return global$1.JSON.parse(s); };
        Json.stringify = function (data) {
            // Dart doesn't take 3 arguments
            return global$1.JSON.stringify(data, null, 2);
        };
        return Json;
    }());
    var DateWrapper = (function () {
        function DateWrapper() {
        }
        DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
            if (month === void 0) { month = 1; }
            if (day === void 0) { day = 1; }
            if (hour === void 0) { hour = 0; }
            if (minutes === void 0) { minutes = 0; }
            if (seconds === void 0) { seconds = 0; }
            if (milliseconds === void 0) { milliseconds = 0; }
            return new Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
        };
        DateWrapper.fromISOString = function (str) { return new Date(str); };
        DateWrapper.fromMillis = function (ms) { return new Date(ms); };
        DateWrapper.toMillis = function (date) { return date.getTime(); };
        DateWrapper.now = function () { return new Date(); };
        DateWrapper.toJson = function (date) { return date.toJSON(); };
        return DateWrapper;
    }());
    var _symbolIterator = null;
    function getSymbolIterator() {
        if (isBlank(_symbolIterator)) {
            if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
                _symbolIterator = Symbol.iterator;
            }
            else {
                // es6-shim specific logic
                var keys = Object.getOwnPropertyNames(Map.prototype);
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (key !== 'entries' && key !== 'size' &&
                        Map.prototype[key] === Map.prototype['entries']) {
                        _symbolIterator = key;
                    }
                }
            }
        }
        return _symbolIterator;
    }
    function isPrimitive(obj) {
        return !isJsObject(obj);
    }
    function hasConstructor(value, type) {
        return value.constructor === type;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var PromiseCompleter = (function () {
        function PromiseCompleter() {
            var _this = this;
            this.promise = new Promise(function (res, rej) {
                _this.resolve = res;
                _this.reject = rej;
            });
        }
        return PromiseCompleter;
    }());
    var PromiseWrapper = (function () {
        function PromiseWrapper() {
        }
        PromiseWrapper.resolve = function (obj) { return Promise.resolve(obj); };
        PromiseWrapper.reject = function (obj, _) { return Promise.reject(obj); };
        // Note: We can't rename this method into `catch`, as this is not a valid
        // method name in Dart.
        PromiseWrapper.catchError = function (promise, onError) {
            return promise.catch(onError);
        };
        PromiseWrapper.all = function (promises) {
            if (promises.length == 0)
                return Promise.resolve([]);
            return Promise.all(promises);
        };
        PromiseWrapper.then = function (promise, success, rejection) {
            return promise.then(success, rejection);
        };
        PromiseWrapper.wrap = function (computation) {
            return new Promise(function (res, rej) {
                try {
                    res(computation());
                }
                catch (e) {
                    rej(e);
                }
            });
        };
        PromiseWrapper.scheduleMicrotask = function (computation) {
            PromiseWrapper.then(PromiseWrapper.resolve(null), computation, function (_) { });
        };
        PromiseWrapper.completer = function () { return new PromiseCompleter(); };
        return PromiseWrapper;
    }());
    var ObservableWrapper = (function () {
        function ObservableWrapper() {
        }
        // TODO(vsavkin): when we use rxnext, try inferring the generic type from the first arg
        ObservableWrapper.subscribe = function (emitter, onNext, onError, onComplete) {
            if (onComplete === void 0) { onComplete = function () { }; }
            onError = (typeof onError === 'function') && onError || noop;
            onComplete = (typeof onComplete === 'function') && onComplete || noop;
            return emitter.subscribe({ next: onNext, error: onError, complete: onComplete });
        };
        ObservableWrapper.isObservable = function (obs) { return !!obs.subscribe; };
        /**
         * Returns whether `obs` has any subscribers listening to events.
         */
        ObservableWrapper.hasSubscribers = function (obs) { return obs.observers.length > 0; };
        ObservableWrapper.dispose = function (subscription) { subscription.unsubscribe(); };
        /**
         * @deprecated - use callEmit() instead
         */
        ObservableWrapper.callNext = function (emitter, value) { emitter.emit(value); };
        ObservableWrapper.callEmit = function (emitter, value) { emitter.emit(value); };
        ObservableWrapper.callError = function (emitter, error) { emitter.error(error); };
        ObservableWrapper.callComplete = function (emitter) { emitter.complete(); };
        ObservableWrapper.fromPromise = function (promise) {
            return rxjs_observable_PromiseObservable.PromiseObservable.create(promise);
        };
        ObservableWrapper.toPromise = function (obj) { return rxjs_operator_toPromise.toPromise.call(obj); };
        return ObservableWrapper;
    }());
    /**
     * Use by directives and components to emit custom Events.
     *
     * ### Examples
     *
     * In the following example, `Zippy` alternatively emits `open` and `close` events when its
     * title gets clicked:
     *
     * ```
     * @Component({
     *   selector: 'zippy',
     *   template: `
     *   <div class="zippy">
     *     <div (click)="toggle()">Toggle</div>
     *     <div [hidden]="!visible">
     *       <ng-content></ng-content>
     *     </div>
     *  </div>`})
     * export class Zippy {
     *   visible: boolean = true;
     *   @Output() open: EventEmitter<any> = new EventEmitter();
     *   @Output() close: EventEmitter<any> = new EventEmitter();
     *
     *   toggle() {
     *     this.visible = !this.visible;
     *     if (this.visible) {
     *       this.open.emit(null);
     *     } else {
     *       this.close.emit(null);
     *     }
     *   }
     * }
     * ```
     *
     * The events payload can be accessed by the parameter `$event` on the components output event
     * handler:
     *
     * ```
     * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
     * ```
     *
     * Uses Rx.Observable but provides an adapter to make it work as specified here:
     * https://github.com/jhusain/observable-spec
     *
     * Once a reference implementation of the spec is available, switch to it.
     * @stable
     */
    var EventEmitter$1 = (function (_super) {
        __extends(EventEmitter$1, _super);
        /**
         * Creates an instance of [EventEmitter], which depending on [isAsync],
         * delivers events synchronously or asynchronously.
         */
        function EventEmitter$1(isAsync) {
            if (isAsync === void 0) { isAsync = false; }
            _super.call(this);
            this.__isAsync = isAsync;
        }
        EventEmitter$1.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
        /**
         * @deprecated - use .emit(value) instead
         */
        EventEmitter$1.prototype.next = function (value) { _super.prototype.next.call(this, value); };
        EventEmitter$1.prototype.subscribe = function (generatorOrNext, error, complete) {
            var schedulerFn;
            var errorFn = function (err) { return null; };
            var completeFn = function () { return null; };
            if (generatorOrNext && typeof generatorOrNext === 'object') {
                schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
                    setTimeout(function () { return generatorOrNext.next(value); });
                } : function (value /** TODO #9100 */) { generatorOrNext.next(value); };
                if (generatorOrNext.error) {
                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
                        function (err) { generatorOrNext.error(err); };
                }
                if (generatorOrNext.complete) {
                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
                        function () { generatorOrNext.complete(); };
                }
            }
            else {
                schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
                    setTimeout(function () { return generatorOrNext(value); });
                } : function (value /** TODO #9100 */) { generatorOrNext(value); };
                if (error) {
                    errorFn =
                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
                }
                if (complete) {
                    completeFn =
                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
                }
            }
            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
        };
        return EventEmitter$1;
    }(rxjs_Subject.Subject));
    var Map$1 = global$1.Map;
    var Set$1 = global$1.Set;
    // Safari and Internet Explorer do not support the iterable parameter to the
    // Map constructor.  We work around that by manually adding the items.
    var createMapFromPairs = (function () {
        try {
            if (new Map$1([[1, 2]]).size === 1) {
                return function createMapFromPairs(pairs) { return new Map$1(pairs); };
            }
        }
        catch (e) {
        }
        return function createMapAndPopulateFromPairs(pairs) {
            var map = new Map$1();
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                map.set(pair[0], pair[1]);
            }
            return map;
        };
    })();
    var createMapFromMap = (function () {
        try {
            if (new Map$1(new Map$1())) {
                return function createMapFromMap(m) { return new Map$1(m); };
            }
        }
        catch (e) {
        }
        return function createMapAndPopulateFromMap(m) {
            var map = new Map$1();
            m.forEach(function (v, k) { map.set(k, v); });
            return map;
        };
    })();
    var _clearValues = (function () {
        if ((new Map$1()).keys().next) {
            return function _clearValues(m) {
                var keyIterator = m.keys();
                var k;
                while (!((k = keyIterator.next()).done)) {
                    m.set(k.value, null);
                }
            };
        }
        else {
            return function _clearValuesWithForeEach(m) {
                m.forEach(function (v, k) { m.set(k, null); });
            };
        }
    })();
    // Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
    // TODO(mlaval): remove the work around once we have a working polyfill of Array.from
    var _arrayFromMap = (function () {
        try {
            if ((new Map$1()).values().next) {
                return function createArrayFromMap(m, getValues) {
                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
                };
            }
        }
        catch (e) {
        }
        return function createArrayFromMapWithForeach(m, getValues) {
            var res = ListWrapper.createFixedSize(m.size), i = 0;
            m.forEach(function (v, k) {
                res[i] = getValues ? v : k;
                i++;
            });
            return res;
        };
    })();
    var MapWrapper = (function () {
        function MapWrapper() {
        }
        MapWrapper.clone = function (m) { return createMapFromMap(m); };
        MapWrapper.createFromStringMap = function (stringMap) {
            var result = new Map$1();
            for (var prop in stringMap) {
                result.set(prop, stringMap[prop]);
            }
            return result;
        };
        MapWrapper.toStringMap = function (m) {
            var r = {};
            m.forEach(function (v, k) { return r[k] = v; });
            return r;
        };
        MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
        MapWrapper.clearValues = function (m) { _clearValues(m); };
        MapWrapper.iterable = function (m) { return m; };
        MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
        MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
        return MapWrapper;
    }());
    /**
     * Wraps Javascript Objects
     */
    var StringMapWrapper = (function () {
        function StringMapWrapper() {
        }
        StringMapWrapper.create = function () {
            // Note: We are not using Object.create(null) here due to
            // performance!
            // http://jsperf.com/ng2-object-create-null
            return {};
        };
        StringMapWrapper.contains = function (map, key) {
            return map.hasOwnProperty(key);
        };
        StringMapWrapper.get = function (map, key) {
            return map.hasOwnProperty(key) ? map[key] : undefined;
        };
        StringMapWrapper.set = function (map, key, value) { map[key] = value; };
        StringMapWrapper.keys = function (map) { return Object.keys(map); };
        StringMapWrapper.values = function (map) {
            return Object.keys(map).reduce(function (r, a) {
                r.push(map[a]);
                return r;
            }, []);
        };
        StringMapWrapper.isEmpty = function (map) {
            for (var prop in map) {
                return false;
            }
            return true;
        };
        StringMapWrapper.delete = function (map, key) { delete map[key]; };
        StringMapWrapper.forEach = function (map, callback) {
            for (var prop in map) {
                if (map.hasOwnProperty(prop)) {
                    callback(map[prop], prop);
                }
            }
        };
        StringMapWrapper.merge = function (m1, m2) {
            var m = {};
            for (var attr in m1) {
                if (m1.hasOwnProperty(attr)) {
                    m[attr] = m1[attr];
                }
            }
            for (var attr in m2) {
                if (m2.hasOwnProperty(attr)) {
                    m[attr] = m2[attr];
                }
            }
            return m;
        };
        StringMapWrapper.equals = function (m1, m2) {
            var k1 = Object.keys(m1);
            var k2 = Object.keys(m2);
            if (k1.length != k2.length) {
                return false;
            }
            var key;
            for (var i = 0; i < k1.length; i++) {
                key = k1[i];
                if (m1[key] !== m2[key]) {
                    return false;
                }
            }
            return true;
        };
        return StringMapWrapper;
    }());
    var ListWrapper = (function () {
        function ListWrapper() {
        }
        // JS has no way to express a statically fixed size list, but dart does so we
        // keep both methods.
        ListWrapper.createFixedSize = function (size) { return new Array(size); };
        ListWrapper.createGrowableSize = function (size) { return new Array(size); };
        ListWrapper.clone = function (array) { return array.slice(0); };
        ListWrapper.forEachWithIndex = function (array, fn) {
            for (var i = 0; i < array.length; i++) {
                fn(array[i], i);
            }
        };
        ListWrapper.first = function (array) {
            if (!array)
                return null;
            return array[0];
        };
        ListWrapper.last = function (array) {
            if (!array || array.length == 0)
                return null;
            return array[array.length - 1];
        };
        ListWrapper.indexOf = function (array, value, startIndex) {
            if (startIndex === void 0) { startIndex = 0; }
            return array.indexOf(value, startIndex);
        };
        ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
        ListWrapper.reversed = function (array) {
            var a = ListWrapper.clone(array);
            return a.reverse();
        };
        ListWrapper.concat = function (a, b) { return a.concat(b); };
        ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
        ListWrapper.removeAt = function (list, index) {
            var res = list[index];
            list.splice(index, 1);
            return res;
        };
        ListWrapper.removeAll = function (list, items) {
            for (var i = 0; i < items.length; ++i) {
                var index = list.indexOf(items[i]);
                list.splice(index, 1);
            }
        };
        ListWrapper.remove = function (list, el) {
            var index = list.indexOf(el);
            if (index > -1) {
                list.splice(index, 1);
                return true;
            }
            return false;
        };
        ListWrapper.clear = function (list) { list.length = 0; };
        ListWrapper.isEmpty = function (list) { return list.length == 0; };
        ListWrapper.fill = function (list, value, start, end) {
            if (start === void 0) { start = 0; }
            if (end === void 0) { end = null; }
            list.fill(value, start, end === null ? list.length : end);
        };
        ListWrapper.equals = function (a, b) {
            if (a.length != b.length)
                return false;
            for (var i = 0; i < a.length; ++i) {
                if (a[i] !== b[i])
                    return false;
            }
            return true;
        };
        ListWrapper.slice = function (l, from, to) {
            if (from === void 0) { from = 0; }
            if (to === void 0) { to = null; }
            return l.slice(from, to === null ? undefined : to);
        };
        ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
        ListWrapper.sort = function (l, compareFn) {
            if (isPresent(compareFn)) {
                l.sort(compareFn);
            }
            else {
                l.sort();
            }
        };
        ListWrapper.toString = function (l) { return l.toString(); };
        ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
        ListWrapper.maximum = function (list, predicate) {
            if (list.length == 0) {
                return null;
            }
            var solution = null;
            var maxValue = -Infinity;
            for (var index = 0; index < list.length; index++) {
                var candidate = list[index];
                if (isBlank(candidate)) {
                    continue;
                }
                var candidateValue = predicate(candidate);
                if (candidateValue > maxValue) {
                    solution = candidate;
                    maxValue = candidateValue;
                }
            }
            return solution;
        };
        ListWrapper.flatten = function (list) {
            var target = [];
            _flattenArray(list, target);
            return target;
        };
        ListWrapper.addAll = function (list, source) {
            for (var i = 0; i < source.length; i++) {
                list.push(source[i]);
            }
        };
        return ListWrapper;
    }());
    function _flattenArray(source, target) {
        if (isPresent(source)) {
            for (var i = 0; i < source.length; i++) {
                var item = source[i];
                if (isArray(item)) {
                    _flattenArray(item, target);
                }
                else {
                    target.push(item);
                }
            }
        }
        return target;
    }
    function isListLikeIterable(obj) {
        if (!isJsObject(obj))
            return false;
        return isArray(obj) ||
            (!(obj instanceof Map$1) &&
                getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
    }
    // Safari and Internet Explorer do not support the iterable parameter to the
    // Set constructor.  We work around that by manually adding the items.
    var createSetFromList = (function () {
        var test = new Set$1([1, 2, 3]);
        if (test.size === 3) {
            return function createSetFromList(lst) { return new Set$1(lst); };
        }
        else {
            return function createSetAndPopulateFromList(lst) {
                var res = new Set$1(lst);
                if (res.size !== lst.length) {
                    for (var i = 0; i < lst.length; i++) {
                        res.add(lst[i]);
                    }
                }
                return res;
            };
        }
    })();
    /**
     * @stable
     */
    var BaseException = (function (_super) {
        __extends(BaseException, _super);
        function BaseException(message) {
            if (message === void 0) { message = '--'; }
            _super.call(this, message);
            this.message = message;
            this.stack = (new Error(message)).stack;
        }
        BaseException.prototype.toString = function () { return this.message; };
        return BaseException;
    }(Error));
    function unimplemented() {
        throw new BaseException('unimplemented');
    }
    var InvalidPipeArgumentException = (function (_super) {
        __extends(InvalidPipeArgumentException, _super);
        function InvalidPipeArgumentException(type, value) {
            _super.call(this, "Invalid argument '" + value + "' for pipe '" + stringify(type) + "'");
        }
        return InvalidPipeArgumentException;
    }(BaseException));
    var ObservableStrategy = (function () {
        function ObservableStrategy() {
        }
        ObservableStrategy.prototype.createSubscription = function (async, updateLatestValue) {
            return ObservableWrapper.subscribe(async, updateLatestValue, function (e) { throw e; });
        };
        ObservableStrategy.prototype.dispose = function (subscription) { ObservableWrapper.dispose(subscription); };
        ObservableStrategy.prototype.onDestroy = function (subscription) { ObservableWrapper.dispose(subscription); };
        return ObservableStrategy;
    }());
    var PromiseStrategy = (function () {
        function PromiseStrategy() {
        }
        PromiseStrategy.prototype.createSubscription = function (async, updateLatestValue) {
            return async.then(updateLatestValue, function (e) { throw e; });
        };
        PromiseStrategy.prototype.dispose = function (subscription) { };
        PromiseStrategy.prototype.onDestroy = function (subscription) { };
        return PromiseStrategy;
    }());
    var _promiseStrategy = new PromiseStrategy();
    var _observableStrategy = new ObservableStrategy();
    var AsyncPipe = (function () {
        function AsyncPipe(_ref) {
            /** @internal */
            this._latestValue = null;
            /** @internal */
            this._latestReturnedValue = null;
            /** @internal */
            this._subscription = null;
            /** @internal */
            this._obj = null;
            this._strategy = null;
            this._ref = _ref;
        }
        AsyncPipe.prototype.ngOnDestroy = function () {
            if (isPresent(this._subscription)) {
                this._dispose();
            }
        };
        AsyncPipe.prototype.transform = function (obj) {
            if (isBlank(this._obj)) {
                if (isPresent(obj)) {
                    this._subscribe(obj);
                }
                this._latestReturnedValue = this._latestValue;
                return this._latestValue;
            }
            if (obj !== this._obj) {
                this._dispose();
                return this.transform(obj);
            }
            if (this._latestValue === this._latestReturnedValue) {
                return this._latestReturnedValue;
            }
            else {
                this._latestReturnedValue = this._latestValue;
                return _angular_core.WrappedValue.wrap(this._latestValue);
            }
        };
        /** @internal */
        AsyncPipe.prototype._subscribe = function (obj) {
            var _this = this;
            this._obj = obj;
            this._strategy = this._selectStrategy(obj);
            this._subscription = this._strategy.createSubscription(obj, function (value) { return _this._updateLatestValue(obj, value); });
        };
        /** @internal */
        AsyncPipe.prototype._selectStrategy = function (obj) {
            if (isPromise(obj)) {
                return _promiseStrategy;
            }
            else if (ObservableWrapper.isObservable(obj)) {
                return _observableStrategy;
            }
            else {
                throw new InvalidPipeArgumentException(AsyncPipe, obj);
            }
        };
        /** @internal */
        AsyncPipe.prototype._dispose = function () {
            this._strategy.dispose(this._subscription);
            this._latestValue = null;
            this._latestReturnedValue = null;
            this._subscription = null;
            this._obj = null;
        };
        /** @internal */
        AsyncPipe.prototype._updateLatestValue = function (async, value) {
            if (async === this._obj) {
                this._latestValue = value;
                this._ref.markForCheck();
            }
        };
        return AsyncPipe;
    }());
    /** @nocollapse */
    AsyncPipe.decorators = [
        { type: _angular_core.Pipe, args: [{ name: 'async', pure: false },] },
    ];
    /** @nocollapse */
    AsyncPipe.ctorParameters = [
        { type: _angular_core.ChangeDetectorRef, },
    ];
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var NumberFormatStyle;
    (function (NumberFormatStyle) {
        NumberFormatStyle[NumberFormatStyle["Decimal"] = 0] = "Decimal";
        NumberFormatStyle[NumberFormatStyle["Percent"] = 1] = "Percent";
        NumberFormatStyle[NumberFormatStyle["Currency"] = 2] = "Currency";
    })(NumberFormatStyle || (NumberFormatStyle = {}));
    var NumberFormatter = (function () {
        function NumberFormatter() {
        }
        NumberFormatter.format = function (num, locale, style, _a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.minimumIntegerDigits, minimumIntegerDigits = _c === void 0 ? 1 : _c, _d = _b.minimumFractionDigits, minimumFractionDigits = _d === void 0 ? 0 : _d, _e = _b.maximumFractionDigits, maximumFractionDigits = _e === void 0 ? 3 : _e, currency = _b.currency, _f = _b.currencyAsSymbol, currencyAsSymbol = _f === void 0 ? false : _f;
            var intlOptions = {
                minimumIntegerDigits: minimumIntegerDigits,
                minimumFractionDigits: minimumFractionDigits,
                maximumFractionDigits: maximumFractionDigits
            };
            intlOptions.style = NumberFormatStyle[style].toLowerCase();
            if (style == NumberFormatStyle.Currency) {
                intlOptions.currency = currency;
                intlOptions.currencyDisplay = currencyAsSymbol ? 'symbol' : 'code';
            }
            return new Intl.NumberFormat(locale, intlOptions).format(num);
        };
        return NumberFormatter;
    }());
    var DATE_FORMATS_SPLIT = /((?:[^yMLdHhmsaZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|Z|G+|w+))(.*)/;
    var PATTERN_ALIASES = {
        yMMMdjms: datePartGetterFactory(combine([
            digitCondition('year', 1),
            nameCondition('month', 3),
            digitCondition('day', 1),
            digitCondition('hour', 1),
            digitCondition('minute', 1),
            digitCondition('second', 1),
        ])),
        yMdjm: datePartGetterFactory(combine([
            digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1),
            digitCondition('hour', 1), digitCondition('minute', 1)
        ])),
        yMMMMEEEEd: datePartGetterFactory(combine([
            digitCondition('year', 1), nameCondition('month', 4), nameCondition('weekday', 4),
            digitCondition('day', 1)
        ])),
        yMMMMd: datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 4), digitCondition('day', 1)])),
        yMMMd: datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 3), digitCondition('day', 1)])),
        yMd: datePartGetterFactory(combine([digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1)])),
        jms: datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('second', 1), digitCondition('minute', 1)])),
        jm: datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('minute', 1)]))
    };
    var DATE_FORMATS = {
        yyyy: datePartGetterFactory(digitCondition('year', 4)),
        yy: datePartGetterFactory(digitCondition('year', 2)),
        y: datePartGetterFactory(digitCondition('year', 1)),
        MMMM: datePartGetterFactory(nameCondition('month', 4)),
        MMM: datePartGetterFactory(nameCondition('month', 3)),
        MM: datePartGetterFactory(digitCondition('month', 2)),
        M: datePartGetterFactory(digitCondition('month', 1)),
        LLLL: datePartGetterFactory(nameCondition('month', 4)),
        dd: datePartGetterFactory(digitCondition('day', 2)),
        d: datePartGetterFactory(digitCondition('day', 1)),
        HH: hourExtracter(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), false))),
        H: hourExtracter(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), false))),
        hh: hourExtracter(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), true))),
        h: hourExtracter(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
        jj: datePartGetterFactory(digitCondition('hour', 2)),
        j: datePartGetterFactory(digitCondition('hour', 1)),
        mm: digitModifier(datePartGetterFactory(digitCondition('minute', 2))),
        m: datePartGetterFactory(digitCondition('minute', 1)),
        ss: digitModifier(datePartGetterFactory(digitCondition('second', 2))),
        s: datePartGetterFactory(digitCondition('second', 1)),
        // while ISO 8601 requires fractions to be prefixed with `.` or `,`
        // we can be just safely rely on using `sss` since we currently don't support single or two digit
        // fractions
        sss: datePartGetterFactory(digitCondition('second', 3)),
        EEEE: datePartGetterFactory(nameCondition('weekday', 4)),
        EEE: datePartGetterFactory(nameCondition('weekday', 3)),
        EE: datePartGetterFactory(nameCondition('weekday', 2)),
        E: datePartGetterFactory(nameCondition('weekday', 1)),
        a: hourClockExtracter(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
        Z: datePartGetterFactory({ timeZoneName: 'long' }),
        z: datePartGetterFactory({ timeZoneName: 'short' }),
        ww: datePartGetterFactory({}),
        // first Thursday of the year. not support ?
        w: datePartGetterFactory({}),
        // of the year not support ?
        G: datePartGetterFactory(nameCondition('era', 1)),
        GG: datePartGetterFactory(nameCondition('era', 2)),
        GGG: datePartGetterFactory(nameCondition('era', 3)),
        GGGG: datePartGetterFactory(nameCondition('era', 4))
    };
    function digitModifier(inner) {
        return function (date, locale) {
            var result = inner(date, locale);
            return result.length == 1 ? '0' + result : result;
        };
    }
    function hourClockExtracter(inner) {
        return function (date, locale) {
            var result = inner(date, locale);
            return result.split(' ')[1];
        };
    }
    function hourExtracter(inner) {
        return function (date, locale) {
            var result = inner(date, locale);
            return result.split(' ')[0];
        };
    }
    function hour12Modify(options, value) {
        options.hour12 = value;
        return options;
    }
    function digitCondition(prop, len) {
        var result = {};
        result[prop] = len == 2 ? '2-digit' : 'numeric';
        return result;
    }
    function nameCondition(prop, len) {
        var result = {};
        result[prop] = len < 4 ? 'short' : 'long';
        return result;
    }
    function combine(options) {
        var result = {};
        options.forEach(function (option) { Object.assign(result, option); });
        return result;
    }
    function datePartGetterFactory(ret) {
        return function (date, locale) {
            return new Intl.DateTimeFormat(locale, ret).format(date);
        };
    }
    var datePartsFormatterCache = new Map();
    function dateFormatter(format, date, locale) {
        var text = '';
        var match;
        var fn;
        var parts = [];
        if (PATTERN_ALIASES[format]) {
            return PATTERN_ALIASES[format](date, locale);
        }
        if (datePartsFormatterCache.has(format)) {
            parts = datePartsFormatterCache.get(format);
        }
        else {
            var matchs = DATE_FORMATS_SPLIT.exec(format);
            while (format) {
                match = DATE_FORMATS_SPLIT.exec(format);
                if (match) {
                    parts = concat(parts, match, 1);
                    format = parts.pop();
                }
                else {
                    parts.push(format);
                    format = null;
                }
            }
            datePartsFormatterCache.set(format, parts);
        }
        parts.forEach(function (part) {
            fn = DATE_FORMATS[part];
            text += fn ? fn(date, locale) :
                part === '\'\'' ? '\'' : part.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
        });
        return text;
    }
    var slice = [].slice;
    function concat(array1 /** TODO #9100 */, array2 /** TODO #9100 */, index /** TODO #9100 */) {
        return array1.concat(slice.call(array2, index));
    }
    var DateFormatter = (function () {
        function DateFormatter() {
        }
        DateFormatter.format = function (date, locale, pattern) {
            return dateFormatter(pattern, date, locale);
        };
        return DateFormatter;
    }());
    // TODO: move to a global configurable location along with other i18n components.
    var defaultLocale = 'en-US';
    var DatePipe = (function () {
        function DatePipe() {
        }
        DatePipe.prototype.transform = function (value, pattern) {
            if (pattern === void 0) { pattern = 'mediumDate'; }
            if (isBlank(value))
                return null;
            if (!this.supports(value)) {
                throw new InvalidPipeArgumentException(DatePipe, value);
            }
            if (NumberWrapper.isNumeric(value)) {
                value = DateWrapper.fromMillis(NumberWrapper.parseInt(value, 10));
            }
            else if (isString(value)) {
                value = DateWrapper.fromISOString(value);
            }
            if (StringMapWrapper.contains(DatePipe._ALIASES, pattern)) {
                pattern = StringMapWrapper.get(DatePipe._ALIASES, pattern);
            }
            return DateFormatter.format(value, defaultLocale, pattern);
        };
        DatePipe.prototype.supports = function (obj) {
            if (isDate(obj) || NumberWrapper.isNumeric(obj)) {
                return true;
            }
            if (isString(obj) && isDate(DateWrapper.fromISOString(obj))) {
                return true;
            }
            return false;
        };
        return DatePipe;
    }());
    /** @internal */
    DatePipe._ALIASES = {
        'medium': 'yMMMdjms',
        'short': 'yMdjm',
        'fullDate': 'yMMMMEEEEd',
        'longDate': 'yMMMMd',
        'mediumDate': 'yMMMd',
        'shortDate': 'yMd',
        'mediumTime': 'jms',
        'shortTime': 'jm'
    };
    /** @nocollapse */
    DatePipe.decorators = [
        { type: _angular_core.Pipe, args: [{ name: 'date', pure: true },] },
    ];
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @experimental
     */
    var NgLocalization = (function () {
        function NgLocalization() {
        }
        return NgLocalization;
    }());
    /**
     * Returns the plural category for a given value.
     * - "=value" when the case exists,
     * - the plural category otherwise
     *
     * @internal
     */
    function getPluralCategory(value, cases, ngLocalization) {
        var nbCase = "=" + value;
        return cases.indexOf(nbCase) > -1 ? nbCase : ngLocalization.getPluralCategory(value);
    }
    var _INTERPOLATION_REGEXP = /#/g;
    var I18nPluralPipe = (function () {
        function I18nPluralPipe(_localization) {
            this._localization = _localization;
        }
        I18nPluralPipe.prototype.transform = function (value, pluralMap) {
            if (isBlank(value))
                return '';
            if (!isStringMap(pluralMap)) {
                throw new InvalidPipeArgumentException(I18nPluralPipe, pluralMap);
            }
            var key = getPluralCategory(value, Object.getOwnPropertyNames(pluralMap), this._localization);
            return StringWrapper.replaceAll(pluralMap[key], _INTERPOLATION_REGEXP, value.toString());
        };
        return I18nPluralPipe;
    }());
    /** @nocollapse */
    I18nPluralPipe.decorators = [
        { type: _angular_core.Pipe, args: [{ name: 'i18nPlural', pure: true },] },
    ];
    /** @nocollapse */
    I18nPluralPipe.ctorParameters = [
        { type: NgLocalization, },
    ];
    var I18nSelectPipe = (function () {
        function I18nSelectPipe() {
        }
        I18nSelectPipe.prototype.transform = function (value, mapping) {
            if (isBlank(value))
                return '';
            if (!isStringMap(mapping)) {
                throw new InvalidPipeArgumentException(I18nSelectPipe, mapping);
            }
            return mapping.hasOwnProperty(value) ? mapping[value] : '';
        };
        return I18nSelectPipe;
    }());
    /** @nocollapse */
    I18nSelectPipe.decorators = [
        { type: _angular_core.Pipe, args: [{ name: 'i18nSelect', pure: true },] },
    ];
    var JsonPipe = (function () {
        function JsonPipe() {
        }
        JsonPipe.prototype.transform = function (value) { return Json.stringify(value); };
        return JsonPipe;
    }());
    /** @nocollapse */
    JsonPipe.decorators = [
        { type: _angular_core.Pipe, args: [{ name: 'json', pure: false },] },
    ];
    var LowerCasePipe = (function () {
        function LowerCasePipe() {
        }
        LowerCasePipe.prototype.transform = function (value) {
            if (isBlank(value))
                return value;
            if (!isString(value)) {
                throw new InvalidPipeArgumentException(LowerCasePipe, value);
            }
            return value.toLowerCase();
        };
        return LowerCasePipe;
    }());
    /** @nocollapse */
    LowerCasePipe.decorators = [
        { type: _angular_core.Pipe, args: [{ name: 'lowercase' },] },
    ];
    var defaultLocale$1 = 'en-US';
    var _NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(\-(\d+))?)?$/g;
    /**
     * Internal function to format numbers used by Decimal, Percent and Date pipes.
     */
    function formatNumber(pipe, value, style, digits, currency, currencyAsSymbol) {
        if (currency === void 0) { currency = null; }
        if (currencyAsSymbol === void 0) { currencyAsSymbol = false; }
        if (isBlank(value))
            return null;
        if (!isNumber(value)) {
            throw new InvalidPipeArgumentException(pipe, value);
        }
        var minInt = 1, minFraction = 0, maxFraction = 3;
        if (isPresent(digits)) {
            var parts = RegExpWrapper.firstMatch(_NUMBER_FORMAT_REGEXP, digits);
            if (isBlank(parts)) {
                throw new BaseException(digits + " is not a valid digit info for number pipes");
            }
            if (isPresent(parts[1])) {
                minInt = NumberWrapper.parseIntAutoRadix(parts[1]);
            }
            if (isPresent(parts[3])) {
                minFraction = NumberWrapper.parseIntAutoRadix(parts[3]);
            }
            if (isPresent(parts[5])) {
                maxFraction = NumberWrapper.parseIntAutoRadix(parts[5]);
            }
        }
        return NumberFormatter.format(value, defaultLocale$1, style, {
            minimumIntegerDigits: minInt,
            minimumFractionDigits: minFraction,
            maximumFractionDigits: maxFraction,
            currency: currency,
            currencyAsSymbol: currencyAsSymbol
        });
    }
    var DecimalPipe = (function () {
        function DecimalPipe() {
        }
        DecimalPipe.prototype.transform = function (value, digits) {
            if (digits === void 0) { digits = null; }
            return formatNumber(DecimalPipe, value, NumberFormatStyle.Decimal, digits);
        };
        return DecimalPipe;
    }());
    /** @nocollapse */
    DecimalPipe.decorators = [
        { type: _angular_core.Pipe, args: [{ name: 'number' },] },
    ];
    var PercentPipe = (function () {
        function PercentPipe() {
        }
        PercentPipe.prototype.transform = function (value, digits) {
            if (digits === void 0) { digits = null; }
            return formatNumber(PercentPipe, value, NumberFormatStyle.Percent, digits);
        };
        return PercentPipe;
    }());
    /** @nocollapse */
    PercentPipe.decorators = [
        { type: _angular_core.Pipe, args: [{ name: 'percent' },] },
    ];
    var CurrencyPipe = (function () {
        function CurrencyPipe() {
        }
        CurrencyPipe.prototype.transform = function (value, currencyCode, symbolDisplay, digits) {
            if (currencyCode === void 0) { currencyCode = 'USD'; }
            if (symbolDisplay === void 0) { symbolDisplay = false; }
            if (digits === void 0) { digits = null; }
            return formatNumber(CurrencyPipe, value, NumberFormatStyle.Currency, digits, currencyCode, symbolDisplay);
        };
        return CurrencyPipe;
    }());
    /** @nocollapse */
    CurrencyPipe.decorators = [
        { type: _angular_core.Pipe, args: [{ name: 'currency' },] },
    ];
    var ReplacePipe = (function () {
        function ReplacePipe() {
        }
        ReplacePipe.prototype.transform = function (value, pattern, replacement) {
            if (isBlank(value)) {
                return value;
            }
            if (!this._supportedInput(value)) {
                throw new InvalidPipeArgumentException(ReplacePipe, value);
            }
            var input = value.toString();
            if (!this._supportedPattern(pattern)) {
                throw new InvalidPipeArgumentException(ReplacePipe, pattern);
            }
            if (!this._supportedReplacement(replacement)) {
                throw new InvalidPipeArgumentException(ReplacePipe, replacement);
            }
            if (isFunction(replacement)) {
                var rgxPattern = isString(pattern) ? RegExpWrapper.create(pattern) : pattern;
                return StringWrapper.replaceAllMapped(input, rgxPattern, replacement);
            }
            if (pattern instanceof RegExp) {
                // use the replaceAll variant
                return StringWrapper.replaceAll(input, pattern, replacement);
            }
            return StringWrapper.replace(input, pattern, replacement);
        };
        ReplacePipe.prototype._supportedInput = function (input) { return isString(input) || isNumber(input); };
        ReplacePipe.prototype._supportedPattern = function (pattern) {
            return isString(pattern) || pattern instanceof RegExp;
        };
        ReplacePipe.prototype._supportedReplacement = function (replacement) {
            return isString(replacement) || isFunction(replacement);
        };
        return ReplacePipe;
    }());
    /** @nocollapse */
    ReplacePipe.decorators = [
        { type: _angular_core.Pipe, args: [{ name: 'replace' },] },
    ];
    var SlicePipe = (function () {
        function SlicePipe() {
        }
        SlicePipe.prototype.transform = function (value, start, end) {
            if (end === void 0) { end = null; }
            if (isBlank(value))
                return value;
            if (!this.supports(value)) {
                throw new InvalidPipeArgumentException(SlicePipe, value);
            }
            if (isString(value)) {
                return StringWrapper.slice(value, start, end);
            }
            return ListWrapper.slice(value, start, end);
        };
        SlicePipe.prototype.supports = function (obj) { return isString(obj) || isArray(obj); };
        return SlicePipe;
    }());
    /** @nocollapse */
    SlicePipe.decorators = [
        { type: _angular_core.Pipe, args: [{ name: 'slice', pure: false },] },
    ];
    var UpperCasePipe = (function () {
        function UpperCasePipe() {
        }
        UpperCasePipe.prototype.transform = function (value) {
            if (isBlank(value))
                return value;
            if (!isString(value)) {
                throw new InvalidPipeArgumentException(UpperCasePipe, value);
            }
            return value.toUpperCase();
        };
        return UpperCasePipe;
    }());
    /** @nocollapse */
    UpperCasePipe.decorators = [
        { type: _angular_core.Pipe, args: [{ name: 'uppercase' },] },
    ];
    /**
     * A collection of Angular core pipes that are likely to be used in each and every
     * application.
     *
     * This collection can be used to quickly enumerate all the built-in pipes in the `pipes`
     * property of the `@Component` decorator.
     *
     * @experimental Contains i18n pipes which are experimental
     */
    var COMMON_PIPES = [
        AsyncPipe,
        UpperCasePipe,
        LowerCasePipe,
        JsonPipe,
        SlicePipe,
        DecimalPipe,
        PercentPipe,
        CurrencyPipe,
        DatePipe,
        ReplacePipe,
        I18nPluralPipe,
        I18nSelectPipe,
    ];
    var NgClass = (function () {
        function NgClass(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
            this._iterableDiffers = _iterableDiffers;
            this._keyValueDiffers = _keyValueDiffers;
            this._ngEl = _ngEl;
            this._renderer = _renderer;
            this._initialClasses = [];
        }
        Object.defineProperty(NgClass.prototype, "initialClasses", {
            set: function (v) {
                this._applyInitialClasses(true);
                this._initialClasses = isPresent(v) && isString(v) ? v.split(' ') : [];
                this._applyInitialClasses(false);
                this._applyClasses(this._rawClass, false);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgClass.prototype, "rawClass", {
            set: function (v) {
                this._cleanupClasses(this._rawClass);
                if (isString(v)) {
                    v = v.split(' ');
                }
                this._rawClass = v;
                this._iterableDiffer = null;
                this._keyValueDiffer = null;
                if (isPresent(v)) {
                    if (isListLikeIterable(v)) {
                        this._iterableDiffer = this._iterableDiffers.find(v).create(null);
                    }
                    else {
                        this._keyValueDiffer = this._keyValueDiffers.find(v).create(null);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        NgClass.prototype.ngDoCheck = function () {
            if (isPresent(this._iterableDiffer)) {
                var changes = this._iterableDiffer.diff(this._rawClass);
                if (isPresent(changes)) {
                    this._applyIterableChanges(changes);
                }
            }
            if (isPresent(this._keyValueDiffer)) {
                var changes = this._keyValueDiffer.diff(this._rawClass);
                if (isPresent(changes)) {
                    this._applyKeyValueChanges(changes);
                }
            }
        };
        NgClass.prototype.ngOnDestroy = function () { this._cleanupClasses(this._rawClass); };
        NgClass.prototype._cleanupClasses = function (rawClassVal) {
            this._applyClasses(rawClassVal, true);
            this._applyInitialClasses(false);
        };
        NgClass.prototype._applyKeyValueChanges = function (changes) {
            var _this = this;
            changes.forEachAddedItem(function (record) { _this._toggleClass(record.key, record.currentValue); });
            changes.forEachChangedItem(function (record) { _this._toggleClass(record.key, record.currentValue); });
            changes.forEachRemovedItem(function (record) {
                if (record.previousValue) {
                    _this._toggleClass(record.key, false);
                }
            });
        };
        NgClass.prototype._applyIterableChanges = function (changes) {
            var _this = this;
            changes.forEachAddedItem(function (record) { _this._toggleClass(record.item, true); });
            changes.forEachRemovedItem(function (record) { _this._toggleClass(record.item, false); });
        };
        NgClass.prototype._applyInitialClasses = function (isCleanup) {
            var _this = this;
            this._initialClasses.forEach(function (className) { return _this._toggleClass(className, !isCleanup); });
        };
        NgClass.prototype._applyClasses = function (rawClassVal, isCleanup) {
            var _this = this;
            if (isPresent(rawClassVal)) {
                if (isArray(rawClassVal)) {
                    rawClassVal.forEach(function (className) { return _this._toggleClass(className, !isCleanup); });
                }
                else if (rawClassVal instanceof Set) {
                    rawClassVal.forEach(function (className) { return _this._toggleClass(className, !isCleanup); });
                }
                else {
                    StringMapWrapper.forEach(rawClassVal, function (expVal, className) {
                        if (isPresent(expVal))
                            _this._toggleClass(className, !isCleanup);
                    });
                }
            }
        };
        NgClass.prototype._toggleClass = function (className, enabled) {
            className = className.trim();
            if (className.length > 0) {
                if (className.indexOf(' ') > -1) {
                    var classes = className.split(/\s+/g);
                    for (var i = 0, len = classes.length; i < len; i++) {
                        this._renderer.setElementClass(this._ngEl.nativeElement, classes[i], enabled);
                    }
                }
                else {
                    this._renderer.setElementClass(this._ngEl.nativeElement, className, enabled);
                }
            }
        };
        return NgClass;
    }());
    /** @nocollapse */
    NgClass.decorators = [
        { type: _angular_core.Directive, args: [{ selector: '[ngClass]', inputs: ['rawClass: ngClass', 'initialClasses: class'] },] },
    ];
    /** @nocollapse */
    NgClass.ctorParameters = [
        { type: _angular_core.IterableDiffers, },
        { type: _angular_core.KeyValueDiffers, },
        { type: _angular_core.ElementRef, },
        { type: _angular_core.Renderer, },
    ];
    var NgForRow = (function () {
        function NgForRow($implicit, index, count) {
            this.$implicit = $implicit;
            this.index = index;
            this.count = count;
        }
        Object.defineProperty(NgForRow.prototype, "first", {
            get: function () { return this.index === 0; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForRow.prototype, "last", {
            get: function () { return this.index === this.count - 1; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForRow.prototype, "even", {
            get: function () { return this.index % 2 === 0; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForRow.prototype, "odd", {
            get: function () { return !this.even; },
            enumerable: true,
            configurable: true
        });
        return NgForRow;
    }());
    var NgFor = (function () {
        function NgFor(_viewContainer, _templateRef, _iterableDiffers, _cdr) {
            this._viewContainer = _viewContainer;
            this._templateRef = _templateRef;
            this._iterableDiffers = _iterableDiffers;
            this._cdr = _cdr;
        }
        Object.defineProperty(NgFor.prototype, "ngForOf", {
            set: function (value) {
                this._ngForOf = value;
                if (isBlank(this._differ) && isPresent(value)) {
                    try {
                        this._differ = this._iterableDiffers.find(value).create(this._cdr, this._ngForTrackBy);
                    }
                    catch (e) {
                        throw new BaseException("Cannot find a differ supporting object '" + value + "' of type '" + getTypeNameForDebugging(value) + "'. NgFor only supports binding to Iterables such as Arrays.");
                    }
                }
     /**
 * @license Angular 2.0.0-rc.4
 * (c) 2010-2016 Google, Inc. https://angular.io/
 * License: MIT
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/Subject'), require('rxjs/observable/PromiseObservable'), require('rxjs/operator/toPromise'), require('rxjs/Observable')) :
        typeof define === 'function' && define.amd ? define(['exports', 'rxjs/Subject', 'rxjs/observable/PromiseObservable', 'rxjs/operator/toPromise', 'rxjs/Observable'], factory) :
            (factory((global.ng = global.ng || {}, global.ng.core = global.ng.core || {}), global.Rx, global.Rx, global.Rx.Observable.prototype, global.Rx));
}(this, function (exports, rxjs_Subject, rxjs_observable_PromiseObservable, rxjs_operator_toPromise, rxjs_Observable) {
    'use strict';
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var globalScope;
    if (typeof window === 'undefined') {
        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
            globalScope = self;
        }
        else {
            globalScope = global;
        }
    }
    else {
        globalScope = window;
    }
    function scheduleMicroTask(fn) {
        Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
    }
    var IS_DART = false;
    // Need to declare a new variable for global here since TypeScript
    // exports the original value of the symbol.
    var global$1 = globalScope;
    /**
     * Runtime representation a type that a Component or other object is instances of.
     *
     * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
     * the `MyCustomComponent` constructor function.
     *
     * @stable
     */
    var Type = Function;
    function getTypeNameForDebugging(type) {
        if (type['name']) {
            return type['name'];
        }
        return typeof type;
    }
    var Math = global$1.Math;
    // TODO: remove calls to assert in production environment
    // Note: Can't just export this and import in in other files
    // as `assert` is a reserved keyword in Dart
    global$1.assert = function assert(condition) {
        // TODO: to be fixed properly via #2830, noop for now
    };
    function isPresent(obj) {
        return obj !== undefined && obj !== null;
    }
    function isBlank(obj) {
        return obj === undefined || obj === null;
    }
    function isString(obj) {
        return typeof obj === 'string';
    }
    function isFunction(obj) {
        return typeof obj === 'function';
    }
    function isType(obj) {
        return isFunction(obj);
    }
    function isPromise(obj) {
        return obj instanceof global$1.Promise;
    }
    function isArray(obj) {
        return Array.isArray(obj);
    }
    function noop() { }
    function stringify(token) {
        if (typeof token === 'string') {
            return token;
        }
        if (token === undefined || token === null) {
            return '' + token;
        }
        if (token.name) {
            return token.name;
        }
        if (token.overriddenName) {
            return token.overriddenName;
        }
        var res = token.toString();
        var newLineIndex = res.indexOf('\n');
        return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
    }
    var StringWrapper = (function () {
        function StringWrapper() {
        }
        StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
        StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
        StringWrapper.split = function (s, regExp) { return s.split(regExp); };
        StringWrapper.equals = function (s, s2) { return s === s2; };
        StringWrapper.stripLeft = function (s, charVal) {
            if (s && s.length) {
                var pos = 0;
                for (var i = 0; i < s.length; i++) {
                    if (s[i] != charVal)
                        break;
                    pos++;
                }
                s = s.substring(pos);
            }
            return s;
        };
        StringWrapper.stripRight = function (s, charVal) {
            if (s && s.length) {
                var pos = s.length;
                for (var i = s.length - 1; i >= 0; i--) {
                    if (s[i] != charVal)
                        break;
                    pos--;
                }
                s = s.substring(0, pos);
            }
            return s;
        };
        StringWrapper.replace = function (s, from, replace) {
            return s.replace(from, replace);
        };
        StringWrapper.replaceAll = function (s, from, replace) {
            return s.replace(from, replace);
        };
        StringWrapper.slice = function (s, from, to) {
            if (from === void 0) { from = 0; }
            if (to === void 0) { to = null; }
            return s.slice(from, to === null ? undefined : to);
        };
        StringWrapper.replaceAllMapped = function (s, from, cb) {
            return s.replace(from, function () {
                var matches = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    matches[_i - 0] = arguments[_i];
                }
                // Remove offset & string from the result array
                matches.splice(-2, 2);
                // The callback receives match, p1, ..., pn
                return cb(matches);
            });
        };
        StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
        StringWrapper.compare = function (a, b) {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        };
        return StringWrapper;
    }());
    var NumberParseError = (function (_super) {
        __extends(NumberParseError, _super);
        function NumberParseError(message) {
            _super.call(this);
            this.message = message;
        }
        NumberParseError.prototype.toString = function () { return this.message; };
        return NumberParseError;
    }(Error));
    var NumberWrapper = (function () {
        function NumberWrapper() {
        }
        NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
        NumberWrapper.equal = function (a, b) { return a === b; };
        NumberWrapper.parseIntAutoRadix = function (text) {
            var result = parseInt(text);
            if (isNaN(result)) {
                throw new NumberParseError('Invalid integer literal when parsing ' + text);
            }
            return result;
        };
        NumberWrapper.parseInt = function (text, radix) {
            if (radix == 10) {
                if (/^(\-|\+)?[0-9]+$/.test(text)) {
                    return parseInt(text, radix);
                }
            }
            else if (radix == 16) {
                if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
                    return parseInt(text, radix);
                }
            }
            else {
                var result = parseInt(text, radix);
                if (!isNaN(result)) {
                    return result;
                }
            }
            throw new NumberParseError('Invalid integer literal when parsing ' + text + ' in base ' + radix);
        };
        // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
        NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
        Object.defineProperty(NumberWrapper, "NaN", {
            get: function () { return NaN; },
            enumerable: true,
            configurable: true
        });
        NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
        NumberWrapper.isNaN = function (value) { return isNaN(value); };
        NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
        return NumberWrapper;
    }());
    // JS has NaN !== NaN
    function looseIdentical(a, b) {
        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
    }
    // JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    function getMapKey(value) {
        return value;
    }
    function normalizeBool(obj) {
        return isBlank(obj) ? false : obj;
    }
    function isJsObject(o) {
        return o !== null && (typeof o === 'function' || typeof o === 'object');
    }
    function print(obj) {
        console.log(obj);
    }
    function warn(obj) {
        console.warn(obj);
    }
    var _symbolIterator = null;
    function getSymbolIterator() {
        if (isBlank(_symbolIterator)) {
            if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
                _symbolIterator = Symbol.iterator;
            }
            else {
                // es6-shim specific logic
                var keys = Object.getOwnPropertyNames(Map.prototype);
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (key !== 'entries' && key !== 'size' &&
                        Map.prototype[key] === Map.prototype['entries']) {
                        _symbolIterator = key;
                    }
                }
            }
        }
        return _symbolIterator;
    }
    function isPrimitive(obj) {
        return !isJsObject(obj);
    }
    /**
     * Allows to refer to references which are not yet defined.
     *
     * For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
     * DI is declared,
     * but not yet defined. It is also used when the `token` which we use when creating a query is not
     * yet defined.
     *
     * ### Example
     * {@example core/di/ts/forward_ref/forward_ref.ts region='forward_ref'}
     * @experimental
     */
    function forwardRef(forwardRefFn) {
        forwardRefFn.__forward_ref__ = forwardRef;
        forwardRefFn.toString = function () { return stringify(this()); };
        return forwardRefFn;
    }
    /**
     * Lazily retrieves the reference value from a forwardRef.
     *
     * Acts as the identity function when given a non-forward-ref value.
     *
     * ### Example ([live demo](http://plnkr.co/edit/GU72mJrk1fiodChcmiDR?p=preview))
     *
     * ```typescript
     * var ref = forwardRef(() => "refValue");
     * expect(resolveForwardRef(ref)).toEqual("refValue");
     * expect(resolveForwardRef("regularValue")).toEqual("regularValue");
     * ```
     *
     * See: {@link forwardRef}
     * @experimental
     */
    function resolveForwardRef(type) {
        if (isFunction(type) && type.hasOwnProperty('__forward_ref__') &&
            type.__forward_ref__ === forwardRef) {
            return type();
        }
        else {
            return type;
        }
    }
    /**
     * A parameter metadata that specifies a dependency.
     *
     * ### Example ([live demo](http://plnkr.co/edit/6uHYJK?p=preview))
     *
     * ```typescript
     * class Engine {}
     *
     * @Injectable()
     * class Car {
     *   engine;
     *   constructor(@Inject("MyEngine") engine:Engine) {
     *     this.engine = engine;
     *   }
     * }
     *
     * var injector = Injector.resolveAndCreate([
     *  {provide: "MyEngine", useClass: Engine},
     *  Car
     * ]);
     *
     * expect(injector.get(Car).engine instanceof Engine).toBe(true);
     * ```
     *
     * When `@Inject()` is not present, {@link Injector} will use the type annotation of the parameter.
     *
     * ### Example
     *
     * ```typescript
     * class Engine {}
     *
     * @Injectable()
     * class Car {
     *   constructor(public engine: Engine) {} //same as constructor(@Inject(Engine) engine:Engine)
     * }
     *
     * var injector = Injector.resolveAndCreate([Engine, Car]);
     * expect(injector.get(Car).engine instanceof Engine).toBe(true);
     * ```
     * @ts2dart_const
     * @stable
     */
    var InjectMetadata = (function () {
        function InjectMetadata(token) {
            this.token = token;
        }
        InjectMetadata.prototype.toString = function () { return "@Inject(" + stringify(this.token) + ")"; };
        return InjectMetadata;
    }());
    /**
     * A parameter metadata that marks a dependency as optional. {@link Injector} provides `null` if
     * the dependency is not found.
     *
     * ### Example ([live demo](http://plnkr.co/edit/AsryOm?p=preview))
     *
     * ```typescript
     * class Engine {}
     *
     * @Injectable()
     * class Car {
     *   engine;
     *   constructor(@Optional() engine:Engine) {
     *     this.engine = engine;
     *   }
     * }
     *
     * var injector = Injector.resolveAndCreate([Car]);
     * expect(injector.get(Car).engine).toBeNull();
     * ```
     * @ts2dart_const
     * @stable
     */
    var OptionalMetadata = (function () {
        function OptionalMetadata() {
        }
        OptionalMetadata.prototype.toString = function () { return "@Optional()"; };
        return OptionalMetadata;
    }());
    /**
     * `DependencyMetadata` is used by the framework to extend DI.
     * This is internal to Angular and should not be used directly.
     * @ts2dart_const
     * @stable
     */
    var DependencyMetadata = (function () {
        function DependencyMetadata() {
        }
        Object.defineProperty(DependencyMetadata.prototype, "token", {
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        return DependencyMetadata;
    }());
    /**
     * A marker metadata that marks a class as available to {@link Injector} for creation.
     *
     * ### Example ([live demo](http://plnkr.co/edit/Wk4DMQ?p=preview))
     *
     * ```typescript
     * @Injectable()
     * class UsefulService {}
     *
     * @Injectable()
     * class NeedsService {
     *   constructor(public service:UsefulService) {}
     * }
     *
     * var injector = Injector.resolveAndCreate([NeedsService, UsefulService]);
     * expect(injector.get(NeedsService).service instanceof UsefulService).toBe(true);
     * ```
     * {@link Injector} will throw {@link NoAnnotationError} when trying to instantiate a class that
     * does not have `@Injectable` marker, as shown in the example below.
     *
     * ```typescript
     * class UsefulService {}
     *
     * class NeedsService {
     *   constructor(public service:UsefulService) {}
     * }
     *
     * var injector = Injector.resolveAndCreate([NeedsService, UsefulService]);
     * expect(() => injector.get(NeedsService)).toThrowError();
     * ```
     * @ts2dart_const
     * @stable
     */
    var InjectableMetadata = (function () {
        function InjectableMetadata() {
        }
        return InjectableMetadata;
    }());
    /**
     * Specifies that an {@link Injector} should retrieve a dependency only from itself.
     *
     * ### Example ([live demo](http://plnkr.co/edit/NeagAg?p=preview))
     *
     * ```typescript
     * class Dependency {
     * }
     *
     * @Injectable()
     * class NeedsDependency {
     *   dependency;
     *   constructor(@Self() dependency:Dependency) {
     *     this.dependency = dependency;
     *   }
     * }
     *
     * var inj = Injector.resolveAndCreate([Dependency, NeedsDependency]);
     * var nd = inj.get(NeedsDependency);
     *
     * expect(nd.dependency instanceof Dependency).toBe(true);
     *
     * var inj = Injector.resolveAndCreate([Dependency]);
     * var child = inj.resolveAndCreateChild([NeedsDependency]);
     * expect(() => child.get(NeedsDependency)).toThrowError();
     * ```
     * @ts2dart_const
     * @stable
     */
    var SelfMetadata = (function () {
        function SelfMetadata() {
        }
        SelfMetadata.prototype.toString = function () { return "@Self()"; };
        return SelfMetadata;
    }());
    /**
     * Specifies that the dependency resolution should start from the parent injector.
     *
     * ### Example ([live demo](http://plnkr.co/edit/Wchdzb?p=preview))
     *
     * ```typescript
     * class Dependency {
     * }
     *
     * @Injectable()
     * class NeedsDependency {
     *   dependency;
     *   constructor(@SkipSelf() dependency:Dependency) {
     *     this.dependency = dependency;
     *   }
     * }
     *
     * var parent = Injector.resolveAndCreate([Dependency]);
     * var child = parent.resolveAndCreateChild([NeedsDependency]);
     * expect(child.get(NeedsDependency).dependency instanceof Depedency).toBe(true);
     *
     * var inj = Injector.resolveAndCreate([Dependency, NeedsDependency]);
     * expect(() => inj.get(NeedsDependency)).toThrowError();
     * ```
     * @ts2dart_const
     * @stable
     */
    var SkipSelfMetadata = (function () {
        function SkipSelfMetadata() {
        }
        SkipSelfMetadata.prototype.toString = function () { return "@SkipSelf()"; };
        return SkipSelfMetadata;
    }());
    /**
     * Specifies that an injector should retrieve a dependency from any injector until reaching the
     * closest host.
     *
     * In Angular, a component element is automatically declared as a host for all the injectors in
     * its view.
     *
     * ### Example ([live demo](http://plnkr.co/edit/GX79pV?p=preview))
     *
     * In the following example `App` contains `ParentCmp`, which contains `ChildDirective`.
     * So `ParentCmp` is the host of `ChildDirective`.
     *
     * `ChildDirective` depends on two services: `HostService` and `OtherService`.
     * `HostService` is defined at `ParentCmp`, and `OtherService` is defined at `App`.
     *
     *```typescript
     * class OtherService {}
     * class HostService {}
     *
     * @Directive({
     *   selector: 'child-directive'
     * })
     * class ChildDirective {
     *   constructor(@Optional() @Host() os:OtherService, @Optional() @Host() hs:HostService){
     *     console.log("os is null", os);
     *     console.log("hs is NOT null", hs);
     *   }
     * }
     *
     * @Component({
     *   selector: 'parent-cmp',
     *   providers: [HostService],
     *   template: `
     *     Dir: <child-directive></child-directive>
     *   `,
     *   directives: [ChildDirective]
     * })
     * class ParentCmp {
     * }
     *
     * @Component({
     *   selector: 'app',
     *   providers: [OtherService],
     *   template: `
     *     Parent: <parent-cmp></parent-cmp>
     *   `,
     *   directives: [ParentCmp]
     * })
     * class App {
     * }
     *
     * bootstrap(App);
     *```
     * @ts2dart_const
     * @stable
     */
    var HostMetadata = (function () {
        function HostMetadata() {
        }
        HostMetadata.prototype.toString = function () { return "@Host()"; };
        return HostMetadata;
    }());
    /**
     * Specifies that a constant attribute value should be injected.
     *
     * The directive can inject constant string literals of host element attributes.
     *
     * ### Example
     *
     * Suppose we have an `<input>` element and want to know its `type`.
     *
     * ```html
     * <input type="text">
     * ```
     *
     * A decorator can inject string literal `text` like so:
     *
     * {@example core/ts/metadata/metadata.ts region='attributeMetadata'}
     * @ts2dart_const
     * @stable
     */
    var AttributeMetadata = (function (_super) {
        __extends(AttributeMetadata, _super);
        function AttributeMetadata(attributeName) {
            _super.call(this);
            this.attributeName = attributeName;
        }
        Object.defineProperty(AttributeMetadata.prototype, "token", {
            get: function () {
                // Normally one would default a token to a type of an injected value but here
                // the type of a variable is "string" and we can't use primitive type as a return value
                // so we use instance of Attribute instead. This doesn't matter much in practice as arguments
                // with @Attribute annotation are injected by ElementInjector that doesn't take tokens into
                // account.
                return this;
            },
            enumerable: true,
            configurable: true
        });
        AttributeMetadata.prototype.toString = function () { return "@Attribute(" + stringify(this.attributeName) + ")"; };
        return AttributeMetadata;
    }(DependencyMetadata));
    /**
     * Declares an injectable parameter to be a live list of directives or variable
     * bindings from the content children of a directive.
     *
     * ### Example ([live demo](http://plnkr.co/edit/lY9m8HLy7z06vDoUaSN2?p=preview))
     *
     * Assume that `<tabs>` component would like to get a list its children `<pane>`
     * components as shown in this example:
     *
     * ```html
     * <tabs>
     *   <pane title="Overview">...</pane>
     *   <pane *ngFor="let o of objects" [title]="o.title">{{o.text}}</pane>
     * </tabs>
     * ```
     *
     * The preferred solution is to query for `Pane` directives using this decorator.
     *
     * ```javascript
     * @Component({
     *   selector: 'pane',
     *   inputs: ['title']
     * })
     * class Pane {
     *   title:string;
     * }
     *
     * @Component({
     *  selector: 'tabs',
     *  template: `
     *    <ul>
     *      <li *ngFor="let pane of panes">{{pane.title}}</li>
     *    </ul>
     *    <ng-content></ng-content>
     *  `
     * })
     * class Tabs {
     *   panes: QueryList<Pane>;
     *   constructor(@Query(Pane) panes:QueryList<Pane>) {
      *    this.panes = panes;
      *  }
     * }
     * ```
     *
     * A query can look for variable bindings by passing in a string with desired binding symbol.
     *
     * ### Example ([live demo](http://plnkr.co/edit/sT2j25cH1dURAyBRCKx1?p=preview))
     * ```html
     * <seeker>
     *   <div #findme>...</div>
     * </seeker>
     *
     * @Component({ selector: 'seeker' })
     * class Seeker {
     *   constructor(@Query('findme') elList: QueryList<ElementRef>) {...}
     * }
     * ```
     *
     * In this case the object that is injected depend on the type of the variable
     * binding. It can be an ElementRef, a directive or a component.
     *
     * Passing in a comma separated list of variable bindings will query for all of them.
     *
     * ```html
     * <seeker>
     *   <div #find-me>...</div>
     *   <div #find-me-too>...</div>
     * </seeker>
     *
     *  @Component({
     *   selector: 'seeker'
     * })
     * class Seeker {
     *   constructor(@Query('findMe, findMeToo') elList: QueryList<ElementRef>) {...}
     * }
     * ```
     *
     * Configure whether query looks for direct children or all descendants
     * of the querying element, by using the `descendants` parameter.
     * It is set to `false` by default.
     *
     * ### Example ([live demo](http://plnkr.co/edit/wtGeB977bv7qvA5FTYl9?p=preview))
     * ```html
     * <container #first>
     *   <item>a</item>
     *   <item>b</item>
     *   <container #second>
     *     <item>c</item>
     *   </container>
     * </container>
     * ```
     *
     * When querying for items, the first container will see only `a` and `b` by default,
     * but with `Query(TextDirective, {descendants: true})` it will see `c` too.
     *
     * The queried directives are kept in a depth-first pre-order with respect to their
     * positions in the DOM.
     *
     * Query does not look deep into any subcomponent views.
     *
     * Query is updated as part of the change-detection cycle. Since change detection
     * happens after construction of a directive, QueryList will always be empty when observed in the
     * constructor.
     *
     * The injected object is an unmodifiable live list.
     * See {@link QueryList} for more details.
     * @ts2dart_const
     * @deprecated
     */
    var QueryMetadata = (function (_super) {
        __extends(QueryMetadata, _super);
        function QueryMetadata(_selector, _a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.descendants, descendants = _c === void 0 ? false : _c, _d = _b.first, first = _d === void 0 ? false : _d, _e = _b.read, read = _e === void 0 ? null : _e;
            _super.call(this);
            this._selector = _selector;
            this.descendants = descendants;
            this.first = first;
            this.read = read;
        }
        Object.defineProperty(QueryMetadata.prototype, "isViewQuery", {
            /**
             * always `false` to differentiate it with {@link ViewQueryMetadata}.
             */
            get: function () { return false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(QueryMetadata.prototype, "selector", {
            /**
             * what this is querying for.
             */
            get: function () { return resolveForwardRef(this._selector); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(QueryMetadata.prototype, "isVarBindingQuery", {
            /**
             * whether this is querying for a variable binding or a directive.
             */
            get: function () { return isString(this.selector); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(QueryMetadata.prototype, "varBindings", {
            /**
             * returns a list of variable bindings this is querying for.
             * Only applicable if this is a variable bindings query.
             */
            get: function () { return StringWrapper.split(this.selector, /\s*,\s*/g); },
            enumerable: true,
            configurable: true
        });
        QueryMetadata.prototype.toString = function () { return "@Query(" + stringify(this.selector) + ")"; };
        return QueryMetadata;
    }(DependencyMetadata));
    // TODO: add an example after ContentChildren and ViewChildren are in master
    /**
     * Configures a content query.
     *
     * Content queries are set before the `ngAfterContentInit` callback is called.
     *
     * ### Example
     *
     * ```
     * @Directive({
     *   selector: 'someDir'
     * })
     * class SomeDir {
     *   @ContentChildren(ChildDirective) contentChildren: QueryList<ChildDirective>;
     *
     *   ngAfterContentInit() {
     *     // contentChildren is set
     *   }
     * }
     * ```
     * @ts2dart_const
     * @stable
     */
    var ContentChildrenMetadata = (function (_super) {
        __extends(ContentChildrenMetadata, _super);
        function ContentChildrenMetadata(_selector, _a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.descendants, descendants = _c === void 0 ? false : _c, _d = _b.read, read = _d === void 0 ? null : _d;
            _super.call(this, _selector, { descendants: descendants, read: read });
        }
        return ContentChildrenMetadata;
    }(QueryMetadata));
    // TODO: add an example after ContentChild and ViewChild are in master
    /**
     * Configures a content query.
     *
     * Content queries are set before the `ngAfterContentInit` callback is called.
     *
     * ### Example
     *
     * ```
     * @Directive({
     *   selector: 'someDir'
     * })
     * class SomeDir {
     *   @ContentChild(ChildDirective) contentChild;
     *
     *   ngAfterContentInit() {
     *     // contentChild is set
     *   }
     * }
     * ```
     * @ts2dart_const
     * @stable
     */
    var ContentChildMetadata = (function (_super) {
        __extends(ContentChildMetadata, _super);
        function ContentChildMetadata(_selector, _a) {
            var _b = (_a === void 0 ? {} : _a).read, read = _b === void 0 ? null : _b;
            _super.call(this, _selector, { descendants: true, first: true, read: read });
        }
        return ContentChildMetadata;
    }(QueryMetadata));
    /**
     * Similar to {@link QueryMetadata}, but querying the component view, instead of
     * the content children.
     *
     * ### Example ([live demo](http://plnkr.co/edit/eNsFHDf7YjyM6IzKxM1j?p=preview))
     *
     * ```javascript
     * @Component({
     *   ...,
     *   template: `
     *     <item> a </item>
     *     <item> b </item>
     *     <item> c </item>
     *   `
     * })
     * class MyComponent {
     *   shown: boolean;
     *
     *   constructor(private @ViewQuery(Item) items:QueryList<Item>) {
     *     items.changes.subscribe(() => console.log(items.length));
     *   }
     * }
     * ```
     *
     * Supports the same querying parameters as {@link QueryMetadata}, except
     * `descendants`. This always queries the whole view.
     *
     * As `shown` is flipped between true and false, items will contain zero of one
     * items.
     *
     * Specifies that a {@link QueryList} should be injected.
     *
     * The injected object is an iterable and observable live list.
     * See {@link QueryList} for more details.
     * @ts2dart_const
     * @deprecated
     */
    var ViewQueryMetadata = (function (_super) {
        __extends(ViewQueryMetadata, _super);
        function ViewQueryMetadata(_selector, _a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.descendants, descendants = _c === void 0 ? false : _c, _d = _b.first, first = _d === void 0 ? false : _d, _e = _b.read, read = _e === void 0 ? null : _e;
            _super.call(this, _selector, { descendants: descendants, first: first, read: read });
        }
        Object.defineProperty(ViewQueryMetadata.prototype, "isViewQuery", {
            /**
             * always `true` to differentiate it with {@link QueryMetadata}.
             */
            get: function () { return true; },
            enumerable: true,
            configurable: true
        });
        ViewQueryMetadata.prototype.toString = function () { return "@ViewQuery(" + stringify(this.selector) + ")"; };
        return ViewQueryMetadata;
    }(QueryMetadata));
    /**
     * Declares a list of child element references.
     *
     * Angular automatically updates the list when the DOM is updated.
     *
     * `ViewChildren` takes an argument to select elements.
     *
     * - If the argument is a type, directives or components with the type will be bound.
     *
     * - If the argument is a string, the string is interpreted as a list of comma-separated selectors.
     * For each selector, an element containing the matching template variable (e.g. `#child`) will be
     * bound.
     *
     * View children are set before the `ngAfterViewInit` callback is called.
     *
     * ### Example
     *
     * With type selector:
     *
     * ```
     * @Component({
     *   selector: 'child-cmp',
     *   template: '<p>child</p>'
     * })
     * class ChildCmp {
     *   doSomething() {}
     * }
     *
     * @Component({
     *   selector: 'some-cmp',
     *   template: `
     *     <child-cmp></child-cmp>
     *     <child-cmp></child-cmp>
     *     <child-cmp></child-cmp>
     *   `,
     *   directives: [ChildCmp]
     * })
     * class SomeCmp {
     *   @ViewChildren(ChildCmp) children:QueryList<ChildCmp>;
     *
     *   ngAfterViewInit() {
     *     // children are set
     *     this.children.toArray().forEach((child)=>child.doSomething());
     *   }
     * }
     * ```
     *
     * With string selector:
     *
     * ```
     * @Component({
     *   selector: 'child-cmp',
     *   template: '<p>child</p>'
     * })
     * class ChildCmp {
     *   doSomething() {}
     * }
     *
     * @Component({
     *   selector: 'some-cmp',
     *   template: `
     *     <child-cmp #child1></child-cmp>
     *     <child-cmp #child2></child-cmp>
     *     <child-cmp #child3></child-cmp>
     *   `,
     *   directives: [ChildCmp]
     * })
     * class SomeCmp {
     *   @ViewChildren('child1,child2,child3') children:QueryList<ChildCmp>;
     *
     *   ngAfterViewInit() {
     *     // children are set
     *     this.children.toArray().forEach((child)=>child.doSomething());
     *   }
     * }
     * ```
     * @ts2dart_const
     * @stable
     */
    var ViewChildrenMetadata = (function (_super) {
        __extends(ViewChildrenMetadata, _super);
        function ViewChildrenMetadata(_selector, _a) {
            var _b = (_a === void 0 ? {} : _a).read, read = _b === void 0 ? null : _b;
            _super.call(this, _selector, { descendants: true, read: read });
        }
        return ViewChildrenMetadata;
    }(ViewQueryMetadata));
    /**
     *
     * Declares a reference of child element.
     *
     * `ViewChildren` takes an argument to select elements.
     *
     * - If the argument is a type, a directive or a component with the type will be bound.
     *
     If the argument is a string, the string is interpreted as a selector. An element containing the
     matching template variable (e.g. `#child`) will be bound.
     *
     * In either case, `@ViewChild()` assigns the first (looking from above) element if there are
     multiple matches.
     *
     * View child is set before the `ngAfterViewInit` callback is called.
     *
     * ### Example
     *
     * With type selector:
     *
     * ```
     * @Component({
     *   selector: 'child-cmp',
     *   template: '<p>child</p>'
     * })
     * class ChildCmp {
     *   doSomething() {}
     * }
     *
     * @Component({
     *   selector: 'some-cmp',
     *   template: '<child-cmp></child-cmp>',
     *   directives: [ChildCmp]
     * })
     * class SomeCmp {
     *   @ViewChild(ChildCmp) child:ChildCmp;
     *
     *   ngAfterViewInit() {
     *     // child is set
     *     this.child.doSomething();
     *   }
     * }
     * ```
     *
     * With string selector:
     *
     * ```
     * @Component({
     *   selector: 'child-cmp',
     *   template: '<p>child</p>'
     * })
     * class ChildCmp {
     *   doSomething() {}
     * }
     *
     * @Component({
     *   selector: 'some-cmp',
     *   template: '<child-cmp #child></child-cmp>',
     *   directives: [ChildCmp]
     * })
     * class SomeCmp {
     *   @ViewChild('child') child:ChildCmp;
     *
     *   ngAfterViewInit() {
     *     // child is set
     *     this.child.doSomething();
     *   }
     * }
     * ```
     * @ts2dart_const
     * @stable
     */
    var ViewChildMetadata = (function (_super) {
        __extends(ViewChildMetadata, _super);
        function ViewChildMetadata(_selector, _a) {
            var _b = (_a === void 0 ? {} : _a).read, read = _b === void 0 ? null : _b;
            _super.call(this, _selector, { descendants: true, first: true, read: read });
        }
        return ViewChildMetadata;
    }(ViewQueryMetadata));
    /**
     * Describes within the change detector which strategy will be used the next time change
     * detection is triggered.
     * @stable
     */
    exports.ChangeDetectionStrategy;
    (function (ChangeDetectionStrategy) {
        /**
         * `OnPush` means that the change detector's mode will be set to `CheckOnce` during hydration.
         */
        ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 0] = "OnPush";
        /**
         * `Default` means that the change detector's mode will be set to `CheckAlways` during hydration.
         */
        ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 1] = "Default";
    })(exports.ChangeDetectionStrategy || (exports.ChangeDetectionStrategy = {}));
    /**
     * Describes the status of the detector.
     */
    var ChangeDetectorStatus;
    (function (ChangeDetectorStatus) {
        /**
         * `CheckedOnce` means that after calling detectChanges the mode of the change detector
         * will become `Checked`.
         */
        ChangeDetectorStatus[ChangeDetectorStatus["CheckOnce"] = 0] = "CheckOnce";
        /**
         * `Checked` means that the change detector should be skipped until its mode changes to
         * `CheckOnce`.
         */
        ChangeDetectorStatus[ChangeDetectorStatus["Checked"] = 1] = "Checked";
        /**
         * `CheckAlways` means that after calling detectChanges the mode of the change detector
         * will remain `CheckAlways`.
         */
        ChangeDetectorStatus[ChangeDetectorStatus["CheckAlways"] = 2] = "CheckAlways";
        /**
         * `Detached` means that the change detector sub tree is not a part of the main tree and
         * should be skipped.
         */
        ChangeDetectorStatus[ChangeDetectorStatus["Detached"] = 3] = "Detached";
        /**
         * `Errored` means that the change detector encountered an error checking a binding
         * or calling a directive lifecycle method and is now in an inconsistent state. Change
         * detectors in this state will no longer detect changes.
         */
        ChangeDetectorStatus[ChangeDetectorStatus["Errored"] = 4] = "Errored";
        /**
         * `Destroyed` means that the change detector is destroyed.
         */
        ChangeDetectorStatus[ChangeDetectorStatus["Destroyed"] = 5] = "Destroyed";
    })(ChangeDetectorStatus || (ChangeDetectorStatus = {}));
    /**
     * List of possible {@link ChangeDetectionStrategy} values.
     */
    var CHANGE_DETECTION_STRATEGY_VALUES = [
        exports.ChangeDetectionStrategy.OnPush,
        exports.ChangeDetectionStrategy.Default,
    ];
    function isDefaultChangeDetectionStrategy(changeDetectionStrategy) {
        return isBlank(changeDetectionStrategy) ||
            changeDetectionStrategy === exports.ChangeDetectionStrategy.Default;
    }
    /**
     * Directives allow you to attach behavior to elements in the DOM.
     *
     * {@link DirectiveMetadata}s with an embedded view are called {@link ComponentMetadata}s.
     *
     * A directive consists of a single directive annotation and a controller class. When the
     * directive's `selector` matches
     * elements in the DOM, the following steps occur:
     *
     * 1. For each directive, the `ElementInjector` attempts to resolve the directive's constructor
     * arguments.
     * 2. Angular instantiates directives for each matched element using `ElementInjector` in a
     * depth-first order,
     *    as declared in the HTML.
     *
     * ## Understanding How Injection Works
     *
     * There are three stages of injection resolution.
     * - *Pre-existing Injectors*:
     *   - The terminal {@link Injector} cannot resolve dependencies. It either throws an error or, if
     * the dependency was
     *     specified as `@Optional`, returns `null`.
     *   - The platform injector resolves browser singleton resources, such as: cookies, title,
     * location, and others.
     * - *Component Injectors*: Each component instance has its own {@link Injector}, and they follow
     * the same parent-child hierarchy
     *     as the component instances in the DOM.
     * - *Element Injectors*: Each component instance has a Shadow DOM. Within the Shadow DOM each
     * element has an `ElementInjector`
     *     which follow the same parent-child hierarchy as the DOM elements themselves.
     *
     * When a template is instantiated, it also must instantiate the corresponding directives in a
     * depth-first order. The
     * current `ElementInjector` resolves the constructor dependencies for each directive.
     *
     * Angular then resolves dependencies as follows, according to the order in which they appear in the
     * {@link ViewMetadata}:
     *
     * 1. Dependencies on the current element
     * 2. Dependencies on element injectors and their parents until it encounters a Shadow DOM boundary
     * 3. Dependencies on component injectors and their parents until it encounters the root component
     * 4. Dependencies on pre-existing injectors
     *
     *
     * The `ElementInjector` can inject other directives, element-specific special objects, or it can
     * delegate to the parent
     * injector.
     *
     * To inject other directives, declare the constructor parameter as:
     * - `directive:DirectiveType`: a directive on the current element only
     * - `@Host() directive:DirectiveType`: any directive that matches the type between the current
     * element and the
     *    Shadow DOM root.
     * - `@Query(DirectiveType) query:QueryList<DirectiveType>`: A live collection of direct child
     * directives.
     * - `@QueryDescendants(DirectiveType) query:QueryList<DirectiveType>`: A live collection of any
     * child directives.
     *
     * To inject element-specific special objects, declare the constructor parameter as:
     * - `element: ElementRef` to obtain a reference to logical element in the view.
     * - `viewContainer: ViewContainerRef` to control child template instantiation, for
     * {@link DirectiveMetadata} directives only
     * - `bindingPropagation: BindingPropagation` to control change detection in a more granular way.
     *
     * ### Example
     *
     * The following example demonstrates how dependency injection resolves constructor arguments in
     * practice.
     *
     *
     * Assume this HTML template:
     *
     * ```
     * <div dependency="1">
     *   <div dependency="2">
     *     <div dependency="3" my-directive>
     *       <div dependency="4">
     *         <div dependency="5"></div>
     *       </div>
     *       <div dependency="6"></div>
     *     </div>
     *   </div>
     * </div>
     * ```
     *
     * With the following `dependency` decorator and `SomeService` injectable class.
     *
     * ```
     * @Injectable()
     * class SomeService {
     * }
     *
     * @Directive({
     *   selector: '[dependency]',
     *   inputs: [
     *     'id: dependency'
     *   ]
     * })
     * class Dependency {
     *   id:string;
     * }
     * ```
     *
     * Let's step through the different ways in which `MyDirective` could be declared...
     *
     *
     * ### No injection
     *
     * Here the constructor is declared with no arguments, therefore nothing is injected into
     * `MyDirective`.
     *
     * ```
     * @Directive({ selector: '[my-directive]' })
     * class MyDirective {
     *   constructor() {
     *   }
     * }
     * ```
     *
     * This directive would be instantiated with no dependencies.
     *
     *
     * ### Component-level injection
     *
     * Directives can inject any injectable instance from the closest component injector or any of its
     * parents.
     *
     * Here, the constructor declares a parameter, `someService`, and injects the `SomeService` type
     * from the parent
     * component's injector.
     * ```
     * @Directive({ selector: '[my-directive]' })
     * class MyDirective {
     *   constructor(someService: SomeService) {
     *   }
     * }
     * ```
     *
     * This directive would be instantiated with a dependency on `SomeService`.
     *
     *
     * ### Injecting a directive from the current element
     *
     * Directives can inject other directives declared on the current element.
     *
     * ```
     * @Directive({ selector: '[my-directive]' })
     * class MyDirective {
     *   constructor(dependency: Dependency) {
     *     expect(dependency.id).toEqual(3);
     *   }
     * }
     * ```
     * This directive would be instantiated with `Dependency` declared at the same element, in this case
     * `dependency="3"`.
     *
     * ### Injecting a directive from any ancestor elements
     *
     * Directives can inject other directives declared on any ancestor element (in the current Shadow
     * DOM), i.e. on the current element, the
     * parent element, or its parents.
     * ```
     * @Directive({ selector: '[my-directive]' })
     * class MyDirective {
     *   constructor(@Host() dependency: Dependency) {
     *     expect(dependency.id).toEqual(2);
     *   }
     * }
     * ```
     *
     * `@Host` checks the current element, the parent, as well as its parents recursively. If
     * `dependency="2"` didn't
     * exist on the direct parent, this injection would
     * have returned
     * `dependency="1"`.
     *
     *
     * ### Injecting a live collection of direct child directives
     *
     *
     * A directive can also query for other child directives. Since parent directives are instantiated
     * before child directives, a directive can't simply inject the list of child directives. Instead,
     * the directive injects a {@link QueryList}, which updates its contents as children are added,
     * removed, or moved by a directive that uses a {@link ViewContainerRef} such as a `ngFor`, an
     * `ngIf`, or an `ngSwitch`.
     *
     * ```
     * @Directive({ selector: '[my-directive]' })
     * class MyDirective {
     *   constructor(@Query(Dependency) dependencies:QueryList<Dependency>) {
     *   }
     * }
     * ```
     *
     * This directive would be instantiated with a {@link QueryList} which contains `Dependency` 4 and
     * `Dependency` 6. Here, `Dependency` 5 would not be included, because it is not a direct child.
     *
     * ### Injecting a live collection of descendant directives
     *
     * By passing the descendant flag to `@Query` above, we can include the children of the child
     * elements.
     *
     * ```
     * @Directive({ selector: '[my-directive]' })
     * class MyDirective {
     *   constructor(@Query(Dependency, {descendants: true}) dependencies:QueryList<Dependency>) {
     *   }
     * }
     * ```
     *
     * This directive would be instantiated with a Query which would contain `Dependency` 4, 5 and 6.
     *
     * ### Optional injection
     *
     * The normal behavior of directives is to return an error when a specified dependency cannot be
     * resolved. If you
     * would like to inject `null` on unresolved dependency instead, you can annotate that dependency
     * with `@Optional()`.
     * This explicitly permits the author of a template to treat some of the surrounding directives as
     * optional.
     *
     * ```
     * @Directive({ selector: '[my-directive]' })
     * class MyDirective {
     *   constructor(@Optional() dependency:Dependency) {
     *   }
     * }
     * ```
     *
     * This directive would be instantiated with a `Dependency` directive found on the current element.
     * If none can be
     * found, the injector supplies `null` instead of throwing an error.
     *
     * ### Example
     *
     * Here we use a decorator directive to simply define basic tool-tip behavior.
     *
     * ```
     * @Directive({
     *   selector: '[tooltip]',
     *   inputs: [
     *     'text: tooltip'
     *   ],
     *   host: {
     *     '(mouseenter)': 'onMouseEnter()',
     *     '(mouseleave)': 'onMouseLeave()'
     *   }
     * })
     * class Tooltip{
     *   text:string;
     *   overlay:Overlay; // NOT YET IMPLEMENTED
     *   overlayManager:OverlayManager; // NOT YET IMPLEMENTED
     *
     *   constructor(overlayManager:OverlayManager) {
     *     this.overlay = overlay;
     *   }
     *
     *   onMouseEnter() {
     *     // exact signature to be determined
     *     this.overlay = this.overlayManager.open(text, ...);
     *   }
     *
     *   onMouseLeave() {
     *     this.overlay.close();
     *     this.overlay = null;
     *   }
     * }
     * ```
     * In our HTML template, we can then add this behavior to a `<div>` or any other element with the
     * `tooltip` selector,
     * like so:
     *
     * ```
     * <div tooltip="some text here"></div>
     * ```
     *
     * Directives can also control the instantiation, destruction, and positioning of inline template
     * elements:
     *
     * A directive uses a {@link ViewContainerRef} to instantiate, insert, move, and destroy views at
     * runtime.
     * The {@link ViewContainerRef} is created as a result of `<template>` element, and represents a
     * location in the current view
     * where these actions are performed.
     *
     * Views are always created as children of the current {@link ViewMetadata}, and as siblings of the
     * `<template>` element. Thus a
     * directive in a child view cannot inject the directive that created it.
     *
     * Since directives that create views via ViewContainers are common in Angular, and using the full
     * `<template>` element syntax is wordy, Angular
     * also supports a shorthand notation: `<li *foo="bar">` and `<li template="foo: bar">` are
     * equivalent.
     *
     * Thus,
     *
     * ```
     * <ul>
     *   <li *foo="bar" title="text"></li>
     * </ul>
     * ```
     *
     * Expands in use to:
     *
     * ```
     * <ul>
     *   <template [foo]="bar">
     *     <li title="text"></li>
     *   </template>
     * </ul>
     * ```
     *
     * Notice that although the shorthand places `*foo="bar"` within the `<li>` element, the binding for
     * the directive
     * controller is correctly instantiated on the `<template>` element rather than the `<li>` element.
     *
     * ## Lifecycle hooks
     *
     * When the directive class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
     * are called by the change detection at defined points in time during the life of the directive.
     *
     * ### Example
     *
     * Let's suppose we want to implement the `unless` behavior, to conditionally include a template.
     *
     * Here is a simple directive that triggers on an `unless` selector:
     *
     * ```
     * @Directive({
     *   selector: '[unless]',
     *   inputs: ['unless']
     * })
     * export class Unless {
     *   viewContainer: ViewContainerRef;
     *   templateRef: TemplateRef;
     *   prevCondition: boolean;
     *
     *   constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef) {
     *     this.viewContainer = viewContainer;
     *     this.templateRef = templateRef;
     *     this.prevCondition = null;
     *   }
     *
     *   set unless(newCondition) {
     *     if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
     *       this.prevCondition = true;
     *       this.viewContainer.clear();
     *     } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
     *       this.prevCondition = false;
     *       this.viewContainer.create(this.templateRef);
     *     }
     *   }
     * }
     * ```
     *
     * We can then use this `unless` selector in a template:
     * ```
     * <ul>
     *   <li *unless="expr"></li>
     * </ul>
     * ```
     *
     * Once the directive instantiates the child view, the shorthand notation for the template expands
     * and the result is:
     *
     * ```
     * <ul>
     *   <template [unless]="exp">
     *     <li></li>
     *   </template>
     *   <li></li>
     * </ul>
     * ```
     *
     * Note also that although the `<li></li>` template still exists inside the `<template></template>`,
     * the instantiated
     * view occurs on the second `<li></li>` which is a sibling to the `<template>` element.
     * @ts2dart_const
     * @stable
     */
    var DirectiveMetadata = (function (_super) {
        __extends(DirectiveMetadata, _super);
        function DirectiveMetadata(_a) {
            var _b = _a === void 0 ? {} : _a, selector = _b.selector, inputs = _b.inputs, outputs = _b.outputs, properties = _b.properties, events = _b.events, host = _b.host, providers = _b.providers, exportAs = _b.exportAs, queries = _b.queries;
            _super.call(this);
            this.selector = selector;
            this._inputs = inputs;
            this._properties = properties;
            this._outputs = outputs;
            this._events = events;
            this.host = host;
            this.exportAs = exportAs;
            this.queries = queries;
            this._providers = providers;
        }
        Object.defineProperty(DirectiveMetadata.prototype, "inputs", {
            /**
             * Enumerates the set of data-bound input properties for a directive
             *
             * Angular automatically updates input properties during change detection.
             *
             * The `inputs` property defines a set of `directiveProperty` to `bindingProperty`
             * configuration:
             *
             * - `directiveProperty` specifies the component property where the value is written.
             * - `bindingProperty` specifies the DOM property where the value is read from.
             *
             * When `bindingProperty` is not provided, it is assumed to be equal to `directiveProperty`.
             *
             * ### Example ([live demo](http://plnkr.co/edit/ivhfXY?p=preview))
             *
             * The following example creates a component with two data-bound properties.
             *
             * ```typescript
             * @Component({
             *   selector: 'bank-account',
             *   inputs: ['bankName', 'id: account-id'],
             *   template: `
             *     Bank Name: {{bankName}}
             *     Account Id: {{id}}
             *   `
             * })
             * class BankAccount {
             *   bankName: string;
             *   id: string;
             *
             *   // this property is not bound, and won't be automatically updated by Angular
             *   normalizedBankName: string;
             * }
             *
             * @Component({
             *   selector: 'app',
             *   template: `
             *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
             *   `,
             *   directives: [BankAccount]
             * })
             * class App {}
             *
             * bootstrap(App);
             * ```
             *
             */
            get: function () {
                return isPresent(this._properties) && this._properties.length > 0 ? this._properties :
                    this._inputs;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DirectiveMetadata.prototype, "properties", {
            /**
             * Use `inputs` instead
             *
             * @deprecated
             */
            get: function () { return this.inputs; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DirectiveMetadata.prototype, "outputs", {
            /**
             * Enumerates the set of event-bound output properties.
             *
             * When an output property emits an event, an event handler attached to that event
             * the template is invoked.
             *
             * The `outputs` property defines a set of `directiveProperty` to `bindingProperty`
             * configuration:
             *
             * - `directiveProperty` specifies the component property that emits events.
             * - `bindingProperty` specifies the DOM property the event handler is attached to.
             *
             * ### Example ([live demo](http://plnkr.co/edit/d5CNq7?p=preview))
             *
             * ```typescript
             * @Directive({
             *   selector: 'interval-dir',
             *   outputs: ['everySecond', 'five5Secs: everyFiveSeconds']
             * })
             * class IntervalDir {
             *   everySecond = new EventEmitter();
             *   five5Secs = new EventEmitter();
             *
             *   constructor() {
             *     setInterval(() => this.everySecond.emit("event"), 1000);
             *     setInterval(() => this.five5Secs.emit("event"), 5000);
             *   }
             * }
             *
             * @Component({
             *   selector: 'app',
             *   template: `
             *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
             *     </interval-dir>
             *   `,
             *   directives: [IntervalDir]
             * })
             * class App {
             *   everySecond() { console.log('second'); }
             *   everyFiveSeconds() { console.log('five seconds'); }
             * }
             * bootstrap(App);
             * ```
             *
             */
            get: function () {
                return isPresent(this._events) && this._events.length > 0 ? this._events : this._outputs;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DirectiveMetadata.prototype, "events", {
            /**
             * Use `outputs` instead
             *
             * @deprecated
             */
            get: function () { return this.outputs; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DirectiveMetadata.prototype, "providers", {
            /**
             * Defines the set of injectable objects that are visible to a Directive and its light DOM
             * children.
             *
             * ## Simple Example
             *
             * Here is an example of a class that can be injected:
             *
             * ```
             * class Greeter {
             *    greet(name:string) {
             *      return 'Hello ' + name + '!';
             *    }
             * }
             *
             * @Directive({
             *   selector: 'greet',
             *   providers: [
             *     Greeter
             *   ]
             * })
             * class HelloWorld {
             *   greeter:Greeter;
             *
             *   constructor(greeter:Greeter) {
             *     this.greeter = greeter;
             *   }
             * }
             * ```
             */
            get: function () { return this._providers; },
            enumerable: true,
            configurable: true
        });
        return DirectiveMetadata;
    }(InjectableMetadata));
    /**
     * Declare reusable UI building blocks for an application.
     *
     * Each Angular component requires a single `@Component` annotation. The
     * `@Component`
     * annotation specifies when a component is instantiated, and which properties and hostListeners it
     * binds to.
     *
     * When a component is instantiated, Angular
     * - creates a shadow DOM for the component.
     * - loads the selected template into the shadow DOM.
     * - creates all the injectable objects configured with `providers` and `viewProviders`.
     *
     * All template expressions and statements are then evaluated against the component instance.
     *
     * For details on the `@View` annotation, see {@link ViewMetadata}.
     *
     * ## Lifecycle hooks
     *
     * When the component class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
     * are called by the change detection at defined points in time during the life of the component.
     *
     * ### Example
     *
     * {@example core/ts/metadata/metadata.ts region='component'}
     * @ts2dart_const
     * @stable
     */
    var ComponentMetadata = (function (_super) {
        __extends(ComponentMetadata, _super);
        function ComponentMetadata(_a) {
            var _b = _a === void 0 ? {} : _a, selector = _b.selector, inputs = _b.inputs, outputs = _b.outputs, properties = _b.properties, events = _b.events, host = _b.host, exportAs = _b.exportAs, moduleId = _b.moduleId, providers = _b.providers, viewProviders = _b.viewProviders, _c = _b.changeDetection, changeDetection = _c === void 0 ? exports.ChangeDetectionStrategy.Default : _c, queries = _b.queries, templateUrl = _b.templateUrl, template = _b.template, styleUrls = _b.styleUrls, styles = _b.styles, animations = _b.animations, directives = _b.directives, pipes = _b.pipes, encapsulation = _b.encapsulation, interpolation = _b.interpolation, precompile = _b.precompile;
            _super.call(this, {
                selector: selector,
                inputs: inputs,
                outputs: outputs,
                properties: properties,
                events: events,
                host: host,
                exportAs: exportAs,
                providers: providers,
                queries: queries
            });
            this.changeDetection = changeDetection;
            this._viewProviders = viewProviders;
            this.templateUrl = templateUrl;
            this.template = template;
            this.styleUrls = styleUrls;
            this.styles = styles;
            this.directives = directives;
            this.pipes = pipes;
            this.encapsulation = encapsulation;
            this.moduleId = moduleId;
            this.animations = animations;
            this.interpolation = interpolation;
            this.precompile = precompile;
        }
        Object.defineProperty(ComponentMetadata.prototype, "viewProviders", {
            /**
             * Defines the set of injectable objects that are visible to its view DOM children.
             *
             * ## Simple Example
             *
             * Here is an example of a class that can be injected:
             *
             * ```
             * class Greeter {
             *    greet(name:string) {
             *      return 'Hello ' + name + '!';
             *    }
             * }
             *
             * @Directive({
             *   selector: 'needs-greeter'
             * })
             * class NeedsGreeter {
             *   greeter:Greeter;
             *
             *   constructor(greeter:Greeter) {
             *     this.greeter = greeter;
             *   }
             * }
             *
             * @Component({
             *   selector: 'greet',
             *   viewProviders: [
             *     Greeter
             *   ],
             *   template: `<needs-greeter></needs-greeter>`,
             *   directives: [NeedsGreeter]
             * })
             * class HelloWorld {
             * }
             *
             * ```
             */
            get: function () { return this._viewProviders; },
            enumerable: true,
            configurable: true
        });
        return ComponentMetadata;
    }(DirectiveMetadata));
    /**
     * Declare reusable pipe function.
     *
     * A "pure" pipe is only re-evaluated when either the input or any of the arguments change.
     *
     * When not specified, pipes default to being pure.
     *
     * ### Example
     *
     * {@example core/ts/metadata/metadata.ts region='pipe'}
     * @ts2dart_const
     * @stable
     */
    var PipeMetadata = (function (_super) {
        __extends(PipeMetadata, _super);
        function PipeMetadata(_a) {
            var name = _a.name, pure = _a.pure;
            _super.call(this);
            this.name = name;
            this._pure = pure;
        }
        Object.defineProperty(PipeMetadata.prototype, "pure", {
            get: function () { return isPresent(this._pure) ? this._pure : true; },
            enumerable: true,
            configurable: true
        });
        return PipeMetadata;
    }(InjectableMetadata));
    /**
     * Declares a data-bound input property.
     *
     * Angular automatically updates data-bound properties during change detection.
     *
     * `InputMetadata` takes an optional parameter that specifies the name
     * used when instantiating a component in the template. When not provided,
     * the name of the decorated property is used.
     *
     * ### Example
     *
     * The following example creates a component with two input properties.
     *
     * ```typescript
     * @Component({
     *   selector: 'bank-account',
     *   template: `
     *     Bank Name: {{bankName}}
     *     Account Id: {{id}}
     *   `
     * })
     * class BankAccount {
     *   @Input() bankName: string;
     *   @Input('account-id') id: string;
     *
     *   // this property is not bound, and won't be automatically updated by Angular
     *   normalizedBankName: string;
     * }
     *
     * @Component({
     *   selector: 'app',
     *   template: `
     *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
     *   `,
     *   directives: [BankAccount]
     * })
     * class App {}
     *
     * bootstrap(App);
     * ```
     * @ts2dart_const
     * @stable
     */
    var InputMetadata = (function () {
        function InputMetadata(
            /**
             * Name used when instantiating a component in the template.
             */
            bindingPropertyName) {
            this.bindingPropertyName = bindingPropertyName;
        }
        return InputMetadata;
    }());
    /**
     * Declares an event-bound output property.
     *
     * When an output property emits an event, an event handler attached to that event
     * the template is invoke/**
  @license
                                 Apache License
                         Version 2.0, January 2004
                      http://www.apache.org/licenses/

 TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

 1. Definitions.

    "License" shall mean the terms and conditions for use, reproduction,
    and distribution as defined by Sections 1 through 9 of this document.

    "Licensor" shall mean the copyright owner or entity authorized by
    the copyright owner that is granting the License.

    "Legal Entity" shall mean the union of the acting entity and all
    other entities that control, are controlled by, or are under common
    control with that entity. For the purposes of this definition,
    "control" means (i) the power, direct or indirect, to cause the
    direction or management of such entity, whether by contract or
    otherwise, or (ii) ownership of fifty percent (50%) or more of the
    outstanding shares, or (iii) beneficial ownership of such entity.

    "You" (or "Your") shall mean an individual or Legal Entity
    exercising permissions granted by this License.

    "Source" form shall mean the preferred form for making modifications,
    including but not limited to software source code, documentation
    source, and configuration files.

    "Object" form shall mean any form resulting from mechanical
    transformation or translation of a Source form, including but
    not limited to compiled object code, generated documentation,
    and conversions to other media types.

    "Work" shall mean the work of authorship, whether in Source or
    Object form, made available under the License, as indicated by a
    copyright notice that is included in or attached to the work
    (an example is provided in the Appendix below).

    "Derivative Works" shall mean any work, whether in Source or Object
    form, that is based on (or derived from) the Work and for which the
    editorial revisions, annotations, elaborations, or other modifications
    represent, as a whole, an original work of authorship. For the purposes
    of this License, Derivative Works shall not include works that remain
    separable from, or merely link (or bind by name) to the interfaces of,
    the Work and Derivative Works thereof.

    "Contribution" shall mean any work of authorship, including
    the original version of the Work and any modifications or additions
    to that Work or Derivative Works thereof, that is intentionally
    submitted to Licensor for inclusion in the Work by the copyright owner
    or by an individual or Legal Entity authorized to submit on behalf of
    the copyright owner. For the purposes of this definition, "submitted"
    means any form of electronic, verbal, or written communication sent
    to the Licensor or its representatives, including but not limited to
    communication on electronic mailing lists, source code control systems,
    and issue tracking systems that are managed by, or on behalf of, the
    Licensor for the purpose of discussing and improving the Work, but
    excluding communication that is conspicuously marked or otherwise
    designated in writing by the copyright owner as "Not a Contribution."

    "Contributor" shall mean Licensor and any individual or Legal Entity
    on behalf of whom a Contribution has been received by Licensor and
    subsequently incorporated within the Work.

 2. Grant of Copyright License. Subject to the terms and conditions of
    this License, each Contributor hereby grants to You a perpetual,
    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
    copyright license to reproduce, prepare Derivative Works of,
    publicly display, publicly perform, sublicense, and distribute the
    Work and such Derivative Works in Source or Object form.

 3. Grant of Patent License. Subject to the terms and conditions of
    this License, each Contributor hereby grants to You a perpetual,
    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
    (except as stated in this section) patent license to make, have made,
    use, offer to sell, sell, import, and otherwise transfer the Work,
    where such license applies only to those patent claims licensable
    by such Contributor that are necessarily infringed by their
    Contribution(s) alone or by combination of their Contribution(s)
    with the Work to which such Contribution(s) was submitted. If You
    institute patent litigation against any entity (including a
    cross-claim or counterclaim in a lawsuit) alleging that the Work
    or a Contribution incorporated within the Work constitutes direct
    or contributory patent infringement, then any patent licenses
    granted to You under this License for that Work shall terminate
    as of the date such litigation is filed.

 4. Redistribution. You may reproduce and distribute copies of the
    Work or Derivative Works thereof in any medium, with or without
    modifications, and in Source or Object form, provided that You
    meet the following conditions:

    (a) You must give any other recipients of the Work or
        Derivative Works a copy of this License; and

    (b) You must cause any modified files to carry prominent notices
        stating that You changed the files; and

    (c) You must retain, in the Source form of any Derivative Works
        that You distribute, all copyright, patent, trademark, and
        attribution notices from the Source form of the Work,
        excluding those notices that do not pertain to any part of
        the Derivative Works; and

    (d) If the Work includes a "NOTICE" text file as part of its
        distribution, then any Derivative Works that You distribute must
        include a readable copy of the attribution notices contained
        within such NOTICE file, excluding those notices that do not
        pertain to any part of the Derivative Works, in at least one
        of the following places: within a NOTICE text file distributed
        as part of the Derivative Works; within the Source form or
        documentation, if provided along with the Derivative Works; or,
        within a display generated by the Derivative Works, if and
        wherever such third-party notices normally appear. The contents
        of the NOTICE file are for informational purposes only and
        do not modify the License. You may add Your own attribution
        notices within Derivative Works that You distribute, alongside
        or as an addendum to the NOTICE text from the Work, provided
        that such additional attribution notices cannot be construed
        as modifying the License.

    You may add Your own copyright statement to Your modifications and
    may provide additional or different license terms and conditions
    for use, reproduction, or distribution of Your modifications, or
    for any such Derivative Works as a whole, provided Your use,
    reproduction, and distribution of the Work otherwise complies with
    the conditions stated in this License.

 5. Submission of Contributions. Unless You explicitly state otherwise,
    any Contribution intentionally submitted for inclusion in the Work
    by You to the Licensor shall be under the terms and conditions of
    this License, without any additional terms or conditions.
    Notwithstanding the above, nothing herein shall supersede or modify
    the terms of any separate license agreement you may have executed
    with Licensor regarding such Contributions.

 6. Trademarks. This License does not grant permission to use the trade
    names, trademarks, service marks, or product names of the Licensor,
    except as required for reasonable and customary use in describing the
    origin of the Work and reproducing the content of the NOTICE file.

 7. Disclaimer of Warranty. Unless required by applicable law or
    agreed to in writing, Licensor provides the Work (and each
    Contributor provides its Contributions) on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
    implied, including, without limitation, any warranties or conditions
    of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
    PARTICULAR PURPOSE. You are solely responsible for determining the
    appropriateness of using or redistributing the Work and assume any
    risks associated with Your exercise of permissions under this License.

 8. Limitation of Liability. In no event and under no legal theory,
    whether in tort (including negligence), contract, or otherwise,
    unless required by applicable law (such as deliberate and grossly
    negligent acts) or agreed to in writing, shall any Contributor be
    liable to You for damages, including any direct, indirect, special,
    incidental, or consequential damages of any character arising as a
    result of this License or out of the use or inability to use the
    Work (including but not limited to damages for loss of goodwill,
    work stoppage, computer failure or malfunction, or any and all
    other commercial damages or losses), even if such Contributor
    has been advised of the possibility of such damages.

 9. Accepting Warranty or Additional Liability. While redistributing
    the Work or Derivative Works thereof, You may choose to offer,
    and charge a fee for, acceptance of support, warranty, indemnity,
    or other liability obligations and/or rights consistent with this
    License. However, in accepting such obligations, You may act only
    on Your own behalf and on Your sole responsibility, not on behalf
    of any other Contributor, and only if You agree to indemnify,
    defend, and hold each Contributor harmless for any liability
    incurred by, or claims asserted against, such Contributor by reason
    of your accepting any such warranty or additional liability.

 END OF TERMS AND CONDITIONS

 APPENDIX: How to apply the Apache License to your work.

    To apply the Apache License to your work, attach the following
    boilerplate notice, with the fields enclosed by brackets "[]"
    replaced with your own identifying information. (Don't include
    the brackets!)  The text should be enclosed in the appropriate
    comment syntax for the file format. We also recommend that a
    file or class name and description of purpose be included on the
    same "printed page" as the copyright notice for easier
    identification within third-party archives.

 Copyright 2015-2016 Netflix, Inc., Microsoft Corp. and contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Rx = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = require('./Subject');
/**
 * @class AsyncSubject<T>
 */
var AsyncSubject = (function (_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        _super.apply(this, arguments);
        this.value = null;
        this.hasNext = false;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype._next = function (value) {
        this.value = value;
        this.hasNext = true;
    };
    AsyncSubject.prototype._complete = function () {
        var index = -1;
        var observers = this.observers;
        var len = observers.length;
        // optimization to block our SubjectSubscriptions from
        // splicing themselves out of the observers list one by one.
        this.isUnsubscribed = true;
        if (this.hasNext) {
            while (++index < len) {
                var o = observers[index];
                o.next(this.value);
                o.complete();
            }
        }
        else {
            while (++index < len) {
                observers[index].complete();
            }
        }
        this.isUnsubscribed = false;
        this.unsubscribe();
    };
    return AsyncSubject;
}(Subject_1.Subject));
exports.AsyncSubject = AsyncSubject;

},{"./Subject":11}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = require('./Subject');
var throwError_1 = require('./util/throwError');
var ObjectUnsubscribedError_1 = require('./util/ObjectUnsubscribedError');
/**
 * @class BehaviorSubject<T>
 */
var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        _super.call(this);
        this._value = _value;
    }
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasErrored) {
            throwError_1.throwError(this.errorValue);
        }
        else if (this.isUnsubscribed) {
            throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
        }
        else {
            return this._value;
        }
    };
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.isUnsubscribed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype._next = function (value) {
        _super.prototype._next.call(this, this._value = value);
    };
    BehaviorSubject.prototype._error = function (err) {
        this.hasErrored = true;
        _super.prototype._error.call(this, this.errorValue = err);
    };
    return BehaviorSubject;
}(Subject_1.Subject));
exports.BehaviorSubject = BehaviorSubject;

},{"./Subject":11,"./util/ObjectUnsubscribedError":259,"./util/throwError":273}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = require('./Subscriber');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var InnerSubscriber = (function (_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        _super.call(this);
        this.parent = parent;
        this.outerValue = outerValue;
        this.outerIndex = outerIndex;
        this.index = 0;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber_1.Subscriber));
exports.InnerSubscriber = InnerSubscriber;

},{"./Subscriber":13}],4:[function(require,module,exports){
"use strict";
var Observable_1 = require('./Observable');
/**
 * Represents a push-based event or value that an {@link Observable} can emit.
 * This class is particularly useful for operators that manage notifications,
 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
 * others. Besides wrapping the actual delivered value, it also annotates it
 * with metadata of, for instance, what type of push message it is (`next`,
 * `error`, or `complete`).
 *
 * @see {@link materialize}
 * @see {@link dematerialize}
 * @see {@link observeOn}
 *
 * @class Notification<T>
 */
var Notification = (function () {
    function Notification(kind, value, exception) {
        this.kind = kind;
        this.value = value;
        this.exception = exception;
        this.hasValue = kind === 'N';
    }
    /**
     * Delivers to the given `observer` the value wrapped by this Notification.
     * @param {Observer} observer
     * @return
     */
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.exception);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    /**
     * Given some {@link Observer} callbacks, deliver the value represented by the
     * current Notification to the correctly corresponding callback.
     * @param {function(value: T): void} next An Observer `next` callback.
     * @param {function(err: any): void} [error] An Observer `error` callback.
     * @param {function(): void} [complete] An Observer `complete` callback.
     * @return {any}
     */
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.exception);
            case 'C':
                return complete && complete();
        }
    };
    /**
     * Takes an Observer or its individual callback functions, and calls `observe`
     * or `do` methods accordingly.
     * @param {Observer|function(value: T): void} nextOrObserver An Observer or
     * the `next` callback.
     * @param {function(err: any): void} [error] An Observer `error` callback.
     * @param {function(): void} [complete] An Observer `complete` callback.
     * @return {any}
     */
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    /**
     * Returns a simple Observable that just delivers the notification represented
     * by this Notification instance.
     * @return {any}
     */
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return Observable_1.Observable.of(this.value);
            case 'E':
                return Observable_1.Observable.throw(this.exception);
            case 'C':
                return Observable_1.Observable.empty();
        }
    };
    /**
     * A shortcut to create a Notification instance of the type `next` from a
     * given value.
     * @param {T} value The `next` value.
     * @return {Notification<T>} The "next" Notification representing the
     * argument.
     */
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return this.undefinedValueNotification;
    };
    /**
     * A shortcut to create a Notification instance of the type `error` from a
     * given error.
     * @param {any} [err] The `error` exception.
     * @return {Notification<T>} The "error" Notification representing the
     * argument.
     */
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    /**
     * A shortcut to create a Notification instance of the type `complete`.
     * @return {Notification<any>} The valueless "complete" Notification.
     */
    Notification.createComplete = function () {
        return this.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());
exports.Notification = Notification;

},{"./Observable":5}],5:[function(require,module,exports){
"use strict";
var root_1 = require('./util/root');
var observable_1 = require('./symbol/observable');
var toSubscriber_1 = require('./util/toSubscriber');
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is  called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    /**
     * Registers handlers for handling emitted values, error and completions from the observable, and
     *  executes the observable's subscriber function, which will take action to set up the underlying data stream
     * @method subscribe
     * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
     * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled
     * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
     * @return {ISubscription} a subscription reference to the registered handlers
     */
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        sink.add(operator ? operator.call(sink, this) : this._subscribe(sink));
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            var subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` imple will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.$$observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;

},{"./symbol/observable":251,"./util/root":271,"./util/toSubscriber":274}],6:[function(require,module,exports){
"use strict";
exports.empty = {
    isUnsubscribed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};

},{}],7:[function(require,module,exports){
"use strict";
var Subscriber_1 = require('./Subscriber');
var Operator = (function () {
    function Operator() {
    }
    Operator.prototype.call = function (subscriber, source) {
        return source._subscribe(new Subscriber_1.Subscriber(subscriber));
    };
    return Operator;
}());
exports.Operator = Operator;

},{"./Subscriber":13}],8:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = require('./Subscriber');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var OuterSubscriber = (function (_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        _super.apply(this, arguments);
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber_1.Subscriber));
exports.OuterSubscriber = OuterSubscriber;

},{"./Subscriber":13}],9:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = require('./Subject');
var queue_1 = require('./scheduler/queue');
var observeOn_1 = require('./operator/observeOn');
/**
 * @class ReplaySubject<T>
 */
var ReplaySubject = (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        _super.call(this);
        this.events = [];
        this.scheduler = scheduler;
        this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = windowTime < 1 ? 1 : windowTime;
    }
    ReplaySubject.prototype._next = function (value) {
        var now = this._getNow();
        this.events.push(new ReplayEvent(now, value));
        this._trimBufferThenGetEvents(now);
        _super.prototype._next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var events = this._trimBufferThenGetEvents(this._getNow());
        var scheduler = this.scheduler;
        if (scheduler) {
            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
        }
        var index = -1;
        var len = events.length;
        while (++index < len && !subscriber.isUnsubscribed) {
            subscriber.next(events[index].value);
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function (now) {
        var bufferSize = this.bufferSize;
        var _windowTime = this._windowTime;
        var events = this.events;
        var eventsCount = events.length;
        var spliceCount = 0;
        // Trim events that fall out of the time window.
        // Start at the front of the list. Break early once
        // we encounter an event that falls within the window.
        while (spliceCount < eventsCount) {
            if ((now - events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount += 1;
        }
        if (eventsCount > bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - bufferSize);
        }
        if (spliceCount > 0) {
            events.splice(0, spliceCount);
        }
        return events;
    };
    return ReplaySubject;
}(Subject_1.Subject));
exports.ReplaySubject = ReplaySubject;
var ReplayEvent = (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());

},{"./Subject":11,"./operator/observeOn":198,"./scheduler/queue":249}],10:[function(require,module,exports){
"use strict";
/* tslint:disable:no-unused-variable */
// Subject imported before Observable to bypass circular dependency issue since
// Subject extends Observable and Observable references Subject in it's
// definition
var Subject_1 = require('./Subject');
exports.Subject = Subject_1.Subject;
/* tslint:enable:no-unused-variable */
var Observable_1 = require('./Observable');
exports.Observable = Observable_1.Observable;
// statics
/* tslint:disable:no-use-before-declare */
require('./add/observable/bindCallback');
require('./add/observable/bindNodeCallback');
require('./add/observable/combineLatest');
require('./add/observable/concat');
require('./add/observable/defer');
require('./add/observable/empty');
require('./add/observable/forkJoin');
require('./add/observable/from');
require('./add/observable/fromEvent');
require('./add/observable/fromEventPattern');
require('./add/observable/fromPromise');
require('./add/observable/interval');
require('./add/observable/merge');
require('./add/observable/race');
require('./add/observable/never');
require('./add/observable/of');
require('./add/observable/range');
require('./add/observable/throw');
require('./add/observable/timer');
require('./add/observable/zip');
//operators
require('./add/operator/buffer');
require('./add/operator/bufferCount');
require('./add/operator/bufferTime');
require('./add/operator/bufferToggle');
require('./add/operator/bufferWhen');
require('./add/operator/cache');
require('./add/operator/catch');
require('./add/operator/combineAll');
require('./add/operator/combineLatest');
require('./add/operator/concat');
require('./add/operator/concatAll');
require('./add/operator/concatMap');
require('./add/operator/concatMapTo');
require('./add/operator/count');
require('./add/operator/dematerialize');
require('./add/operator/debounce');
require('./add/operator/debounceTime');
require('./add/operator/defaultIfEmpty');
require('./add/operator/delay');
require('./add/operator/delayWhen');
require('./add/operator/distinctUntilChanged');
require('./add/operator/do');
require('./add/operator/expand');
require('./add/operator/filter');
require('./add/operator/finally');
require('./add/operator/first');
require('./add/operator/groupBy');
require('./add/operator/ignoreElements');
require('./add/operator/audit');
require('./add/operator/auditTime');
require('./add/operator/last');
require('./add/operator/let');
require('./add/operator/every');
require('./add/operator/map');
require('./add/operator/mapTo');
require('./add/operator/materialize');
require('./add/operator/merge');
require('./add/operator/mergeAll');
require('./add/operator/mergeMap');
require('./add/operator/mergeMapTo');
require('./add/operator/multicast');
require('./add/operator/observeOn');
require('./add/operator/partition');
require('./add/operator/pluck');
require('./add/operator/publish');
require('./add/operator/publishBehavior');
require('./add/operator/publishReplay');
require('./add/operator/publishLast');
require('./add/operator/race');
require('./add/operator/reduce');
require('./add/operator/repeat');
require('./add/operator/retry');
require('./add/operator/retryWhen');
require('./add/operator/sample');
require('./add/operator/sampleTime');
require('./add/operator/scan');
require('./add/operator/share');
require('./add/operator/single');
require('./add/operator/skip');
require('./add/operator/skipUntil');
require('./add/operator/skipWhile');
require('./add/operator/startWith');
require('./add/operator/subscribeOn');
require('./add/operator/switch');
require('./add/operator/switchMap');
require('./add/operator/switchMapTo');
require('./add/operator/take');
require('./add/operator/takeLast');
require('./add/operator/takeUntil');
require('./add/operator/takeWhile');
require('./add/operator/throttle');
require('./add/operator/throttleTime');
require('./add/operator/timeout');
require('./add/operator/timeoutWith');
require('./add/operator/toArray');
require('./add/operator/toPromise');
require('./add/operator/window');
require('./add/operator/windowCount');
require('./add/operator/windowTime');
require('./add/operator/windowToggle');
require('./add/operator/windowWhen');
require('./add/operator/withLatestFrom');
require('./add/operator/zip');
require('./add/operator/zipAll');
/* tslint:disable:no-unused-variable */
var Operator_1 = require('./Operator');
exports.Operator = Operator_1.Operator;
var Subscription_1 = require('./Subscription');
exports.Subscription = Subscription_1.Subscription;
var Subscriber_1 = require('./Subscriber');
exports.Subscriber = Subscriber_1.Subscriber;
var AsyncSubject_1 = require('./AsyncSubject');
exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
var ReplaySubject_1 = require('./ReplaySubject');
exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
var BehaviorSubject_1 = require('./BehaviorSubject');
exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
var ConnectableObservable_1 = require('./observable/ConnectableObservable');
exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
var Notification_1 = require('./Notification');
exports.Notification = Notification_1.Notification;
var EmptyError_1 = require('./util/EmptyError');
exports.EmptyError = EmptyError_1.EmptyError;
var ArgumentOutOfRangeError_1 = require('./util/ArgumentOutOfRangeError');
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
var ObjectUnsubscribedError_1 = require('./util/ObjectUnsubscribedError');
exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
var UnsubscriptionError_1 = require('./util/UnsubscriptionError');
exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
var asap_1 = require('./scheduler/asap');
var async_1 = require('./scheduler/async');
var queue_1 = require('./scheduler/queue');
var rxSubscriber_1 = require('./symbol/rxSubscriber');
var observable_1 = require('./symbol/observable');
var iterator_1 = require('./symbol/iterator');
/* tslint:enable:no-unused-variable */
/**
 * @typedef {Object} Rx.Scheduler
 * @property {Scheduler} queue Schedules on a queue in the current event frame
 * (trampoline scheduler). Use this for iteration operations.
 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
 * fastest transport mechanism available, either Node.js' `process.nextTick()`
 * or Web Worker MessageChannel or setTimeout or others. Use this for
 * asynchronous conversions.
 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
 * time-based operations.
 */
var Scheduler = {
    asap: asap_1.asap,
    async: async_1.async,
    queue: queue_1.queue
};
exports.Scheduler = Scheduler;
/**
 * @typedef {Object} Rx.Symbol
 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
 * an object that has all of the traits of an Rx Subscriber, including the
 * ability to add and remove subscriptions to the subscription chain and
 * guarantees involving event triggering (can't "next" after unsubscription,
 * etc).
 * @property {Symbol|string} observable A symbol to use as a property name to
 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
 * to retrieve an iterator from an object.
 */
var Symbol = {
    rxSubscriber: rxSubscriber_1.$$rxSubscriber,
    observable: observable_1.$$observable,
    iterator: iterator_1.$$iterator
};
exports.Symbol = Symbol;

},{"./AsyncSubject":1,"./BehaviorSubject":2,"./Notification":4,"./Observable":5,"./Operator":7,"./ReplaySubject":9,"./Subject":11,"./Subscriber":13,"./Subscription":14,"./add/observable/bindCallback":15,"./add/observable/bindNodeCallback":16,"./add/observable/combineLatest":17,"./add/observable/concat":18,"./add/observable/defer":19,"./add/observable/empty":20,"./add/observable/forkJoin":21,"./add/observable/from":22,"./add/observable/fromEvent":23,"./add/observable/fromEventPattern":24,"./add/observable/fromPromise":25,"./add/observable/interval":26,"./add/observable/merge":27,"./add/observable/never":28,"./add/observable/of":29,"./add/observable/race":30,"./add/observable/range":31,"./add/observable/throw":32,"./add/observable/timer":33,"./add/observable/zip":34,"./add/operator/audit":35,"./add/operator/auditTime":36,"./add/operator/buffer":37,"./add/operator/bufferCount":38,"./add/operator/bufferTime":39,"./add/operator/bufferToggle":40,"./add/operator/bufferWhen":41,"./add/operator/cache":42,"./add/operator/catch":43,"./add/operator/combineAll":44,"./add/operator/combineLatest":45,"./add/operator/concat":46,"./add/operator/concatAll":47,"./add/operator/concatMap":48,"./add/operator/concatMapTo":49,"./add/operator/count":50,"./add/operator/debounce":51,"./add/operator/debounceTime":52,"./add/operator/defaultIfEmpty":53,"./add/operator/delay":54,"./add/operator/delayWhen":55,"./add/operator/dematerialize":56,"./add/operator/distinctUntilChanged":57,"./add/operator/do":58,"./add/operator/every":59,"./add/operator/expand":60,"./add/operator/filter":61,"./add/operator/finally":62,"./add/operator/first":63,"./add/operator/groupBy":64,"./add/operator/ignoreElements":65,"./add/operator/last":66,"./add/operator/let":67,"./add/operator/map":68,"./add/operator/mapTo":69,"./add/operator/materialize":70,"./add/operator/merge":71,"./add/operator/mergeAll":72,"./add/operator/mergeMap":73,"./add/operator/mergeMapTo":74,"./add/operator/multicast":75,"./add/operator/observeOn":76,"./add/operator/partition":77,"./add/operator/pluck":78,"./add/operator/publish":79,"./add/operator/publishBehavior":80,"./add/operator/publishLast":81,"./add/operator/publishReplay":82,"./add/operator/race":83,"./add/operator/reduce":84,"./add/operator/repeat":85,"./add/operator/retry":86,"./add/operator/retryWhen":87,"./add/operator/sample":88,"./add/operator/sampleTime":89,"./add/operator/scan":90,"./add/operator/share":91,"./add/operator/single":92,"./add/operator/skip":93,"./add/operator/skipUntil":94,"./add/operator/skipWhile":95,"./add/operator/startWith":96,"./add/operator/subscribeOn":97,"./add/operator/switch":98,"./add/operator/switchMap":99,"./add/operator/switchMapTo":100,"./add/operator/take":101,"./add/operator/takeLast":102,"./add/operator/takeUntil":103,"./add/operator/takeWhile":104,"./add/operator/throttle":105,"./add/operator/throttleTime":106,"./add/operator/timeout":107,"./add/operator/timeoutWith":108,"./add/operator/toArray":109,"./add/operator/toPromise":110,"./add/operator/window":111,"./add/operator/windowCount":112,"./add/operator/windowTime":113,"./add/operator/windowToggle":114,"./add/operator/windowWhen":115,"./add/operator/withLatestFrom":116,"./add/operator/zip":117,"./add/operator/zipAll":118,"./observable/ConnectableObservable":123,"./scheduler/asap":247,"./scheduler/async":248,"./scheduler/queue":249,"./symbol/iterator":250,"./symbol/observable":251,"./symbol/rxSubscriber":252,"./util/ArgumentOutOfRangeError":253,"./util/EmptyError":254,"./util/ObjectUnsubscribedError":259,"./util/UnsubscriptionError":260}],11:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('./Observable');
var Subscriber_1 = require('./Subscriber');
var Subscription_1 = require('./Subscription');
var SubjectSubscription_1 = require('./SubjectSubscription');
var rxSubscriber_1 = require('./symbol/rxSubscriber');
var throwError_1 = require('./util/throwError');
var ObjectUnsubscribedError_1 = require('./util/ObjectUnsubscribedError');
/**
 * @class Subject<T>
 */
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject(destination, source) {
        _super.call(this);
        this.destination = destination;
        this.source = source;
        this.observers = [];
        this.isUnsubscribed = false;
        this.isStopped = false;
        this.hasErrored = false;
        this.dispatching = false;
        this.hasCompleted = false;
        this.source = source;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new Subject(this.destination || this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.add = function (subscription) {
        return Subscription_1.Subscription.prototype.add.call(this, subscription);
    };
    Subject.prototype.remove = function (subscription) {
        Subscription_1.Subscription.prototype.remove.call(this, subscription);
    };
    Subject.prototype.unsubscribe = function () {
        Subscription_1.Subscription.prototype.unsubscribe.call(this);
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.source) {
            return this.source.subscribe(subscriber);
        }
        else {
            if (subscriber.isUnsubscribed) {
                return;
            }
            else if (this.hasErrored) {
                return subscriber.error(this.errorValue);
            }
            else if (this.hasCompleted) {
                return subscriber.complete();
            }
            this.throwIfUnsubscribed();
            var subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
            this.observers.push(subscriber);
            return subscription;
        }
    };
    Subject.prototype._unsubscribe = function () {
        this.source = null;
        this.isStopped = true;
        this.observers = null;
        this.destination = null;
    };
    Subject.prototype.next = function (value) {
        this.throwIfUnsubscribed();
        if (this.isStopped) {
            return;
        }
        this.dispatching = true;
        this._next(value);
        this.dispatching = false;
        if (this.hasErrored) {
            this._error(this.errorValue);
        }
        else if (this.hasCompleted) {
            this._complete();
        }
    };
    Subject.prototype.error = function (err) {
        this.throwIfUnsubscribed();
        if (this.isStopped) {
            return;
        }
        this.isStopped = true;
        this.hasErrored = true;
        this.errorValue = err;
        if (this.dispatching) {
            return;
        }
        this._error(err);
    };
    Subject.prototype.complete = function () {
        this.throwIfUnsubscribed();
        if (this.isStopped) {
            return;
        }
        this.isStopped = true;
        this.hasCompleted = true;
        if (this.dispatching) {
            return;
        }
        this._complete();
    };
    Subject.prototype.asObservable = function () {
        var observable = new SubjectObservable(this);
        return observable;
    };
    Subject.prototype._next = function (value) {
        if (this.destination) {
            this.destination.next(value);
        }
        else {
            this._finalNext(value);
        }
    };
    Subject.prototype._finalNext = function (value) {
        var index = -1;
        var observers = this.observers.slice(0);
        var len = observers.length;
        while (++index < len) {
            observers[index].next(value);
        }
    };
    Subject.prototype._error = function (err) {
        if (this.destination) {
            this.destination.error(err);
        }
        else {
            this._finalError(err);
        }
    };
    Subject.prototype._finalError = function (err) {
        var index = -1;
        var observers = this.observers;
        // optimization to block our SubjectSubscriptions from
        // splicing themselves out of the observers list one by one.
        this.observers = null;
        this.isUnsubscribed = true;
        if (observers) {
            var len = observers.length;
            while (++index < len) {
                observers[index].error(err);
            }
        }
        this.isUnsubscribed = false;
        this.unsubscribe();
    };
    Subject.prototype._complete = function () {
        if (this.destination) {
            this.destination.complete();
        }
        else {
            this._finalComplete();
        }
    };
    Subject.prototype._finalComplete = function () {
        var index = -1;
        var observers = this.observers;
        // optimization to block our SubjectSubscriptions from
        // splicing themselves out of the observers list one by one.
        this.observers = null;
        this.isUnsubscribed = true;
        if (observers) {
            var len = observers.length;
            while (++index < len) {
                observers[index].complete();
            }
        }
        this.isUnsubscribed = false;
        this.unsubscribe();
    };
    Subject.prototype.throwIfUnsubscribed = function () {
        if (this.isUnsubscribed) {
            throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
        }
    };
    Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
        return new Subscriber_1.Subscriber(this);
    };
    Subject.create = function (destination, source) {
        return new Subject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubjectObservable = (function (_super) {
    __extends(SubjectObservable, _super);
    function SubjectObservable(source) {
        _super.call(this);
        this.source = source;
    }
    return SubjectObservable;
}(Observable_1.Observable));

},{"./Observable":5,"./SubjectSubscription":12,"./Subscriber":13,"./Subscription":14,"./symbol/rxSubscriber":252,"./util/ObjectUnsubscribedError":259,"./util/throwError":273}],12:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = require('./Subscription');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, observer) {
        _super.call(this);
        this.subject = subject;
        this.observer = observer;
        this.isUnsubscribed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.isUnsubscribed) {
            return;
        }
        this.isUnsubscribed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isUnsubscribed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.observer);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;

},{"./Subscription":14}],13:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = require('./util/isFunction');
var Subscription_1 = require('./Subscription');
var rxSubscriber_1 = require('./symbol/rxSubscriber');
var Observer_1 = require('./Observer');
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.isUnsubscribed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parent, observerOrNext, error, complete) {
        _super.call(this);
        this._parent = _parent;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            context = observerOrNext;
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (isFunction_1.isFunction(context.unsubscribe)) {
                this.add(context.unsubscribe.bind(context));
            }
            context.unsubscribe = this.unsubscribe.bind(this);
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parent = this._parent;
            if (!_parent.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parent, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parent = this._parent;
            if (this._error) {
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parent, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parent.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parent.syncErrorValue = err;
                _parent.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _parent = this._parent;
            if (this._complete) {
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._complete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parent, this._complete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parent = this._parent;
        this._context = null;
        this._parent = null;
        _parent.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));

},{"./Observer":6,"./Subscription":14,"./symbol/rxSubscriber":252,"./util/isFunction":264}],14:[function(require,module,exports){
"use strict";
var isArray_1 = require('./util/isArray');
var isObject_1 = require('./util/isObject');
var isFunction_1 = require('./util/isFunction');
var tryCatch_1 = require('./util/tryCatch');
var errorObject_1 = require('./util/errorObject');
var UnsubscriptionError_1 = require('./util/UnsubscriptionError');
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.isUnsubscribed = false;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.isUnsubscribed) {
            return;
        }
        this.isUnsubscribed = true;
        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this._subscriptions = null;
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                (errors = errors || []).push(errorObject_1.errorObject.e);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(err.errors);
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `isUnsubscribed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === this) || (teardown === Subscription.EMPTY)) {
            return;
        }
        var sub = teardown;
        switch (typeof teardown) {
            case 'function':
                sub = new Subscription(teardown);
            case 'object':
                if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
 /**
 * @license Angular 2.0.0-rc.4
 * (c) 2010-2016 Google, Inc. https://angular.io/
 * License: MIT
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('rxjs/Subject'), require('rxjs/observable/PromiseObservable'), require('rxjs/operator/toPromise'), require('rxjs/Observable')) :
        typeof define === 'function' && define.amd ? define(['exports', '@angular/common', '@angular/core', 'rxjs/Subject', 'rxjs/observable/PromiseObservable', 'rxjs/operator/toPromise', 'rxjs/Observable'], factory) :
            (factory((global.ng = global.ng || {}, global.ng.platformBrowser = global.ng.platformBrowser || {}), global.ng.common, global.ng.core, global.Rx, global.Rx, global.Rx.Observable.prototype, global.Rx));
}(this, function (exports, _angular_common, _angular_core, rxjs_Subject, rxjs_observable_PromiseObservable, rxjs_operator_toPromise, rxjs_Observable) {
    'use strict';
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var globalScope;
    if (typeof window === 'undefined') {
        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
            globalScope = self;
        }
        else {
            globalScope = global;
        }
    }
    else {
        globalScope = window;
    }
    // Need to declare a new variable for global here since TypeScript
    // exports the original value of the symbol.
    var global$1 = globalScope;
    var Date = global$1.Date;
    // TODO: remove calls to assert in production environment
    // Note: Can't just export this and import in in other files
    // as `assert` is a reserved keyword in Dart
    global$1.assert = function assert(condition) {
        // TODO: to be fixed properly via #2830, noop for now
    };
    function isPresent(obj) {
        return obj !== undefined && obj !== null;
    }
    function isBlank(obj) {
        return obj === undefined || obj === null;
    }
    function isNumber(obj) {
        return typeof obj === 'number';
    }
    function isString(obj) {
        return typeof obj === 'string';
    }
    function isFunction(obj) {
        return typeof obj === 'function';
    }
    function isArray(obj) {
        return Array.isArray(obj);
    }
    function noop() { }
    function stringify(token) {
        if (typeof token === 'string') {
            return token;
        }
        if (token === undefined || token === null) {
            return '' + token;
        }
        if (token.name) {
            return token.name;
        }
        if (token.overriddenName) {
            return token.overriddenName;
        }
        var res = token.toString();
        var newLineIndex = res.indexOf('\n');
        return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
    }
    // serialize / deserialize enum exist only for consistency with dart API
    // enums in typescript don't need to be serialized
    function serializeEnum(val) {
        return val;
    }
    var StringWrapper = (function () {
        function StringWrapper() {
        }
        StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
        StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
        StringWrapper.split = function (s, regExp) { return s.split(regExp); };
        StringWrapper.equals = function (s, s2) { return s === s2; };
        StringWrapper.stripLeft = function (s, charVal) {
            if (s && s.length) {
                var pos = 0;
                for (var i = 0; i < s.length; i++) {
                    if (s[i] != charVal)
                        break;
                    pos++;
                }
                s = s.substring(pos);
            }
            return s;
        };
        StringWrapper.stripRight = function (s, charVal) {
            if (s && s.length) {
                var pos = s.length;
                for (var i = s.length - 1; i >= 0; i--) {
                    if (s[i] != charVal)
                        break;
                    pos--;
                }
                s = s.substring(0, pos);
            }
            return s;
        };
        StringWrapper.replace = function (s, from, replace) {
            return s.replace(from, replace);
        };
        StringWrapper.replaceAll = function (s, from, replace) {
            return s.replace(from, replace);
        };
        StringWrapper.slice = function (s, from, to) {
            if (from === void 0) { from = 0; }
            if (to === void 0) { to = null; }
            return s.slice(from, to === null ? undefined : to);
        };
        StringWrapper.replaceAllMapped = function (s, from, cb) {
            return s.replace(from, function () {
                var matches = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    matches[_i - 0] = arguments[_i];
                }
                // Remove offset & string from the result array
                matches.splice(-2, 2);
                // The callback receives match, p1, ..., pn
                return cb(matches);
            });
        };
        StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
        StringWrapper.compare = function (a, b) {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        };
        return StringWrapper;
    }());
    var NumberParseError = (function (_super) {
        __extends(NumberParseError, _super);
        function NumberParseError(message) {
            _super.call(this);
            this.message = message;
        }
        NumberParseError.prototype.toString = function () { return this.message; };
        return NumberParseError;
    }(Error));
    var NumberWrapper = (function () {
        function NumberWrapper() {
        }
        NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
        NumberWrapper.equal = function (a, b) { return a === b; };
        NumberWrapper.parseIntAutoRadix = function (text) {
            var result = parseInt(text);
            if (isNaN(result)) {
                throw new NumberParseError('Invalid integer literal when parsing ' + text);
            }
            return result;
        };
        NumberWrapper.parseInt = function (text, radix) {
            if (radix == 10) {
                if (/^(\-|\+)?[0-9]+$/.test(text)) {
                    return parseInt(text, radix);
                }
            }
            else if (radix == 16) {
                if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
                    return parseInt(text, radix);
                }
            }
            else {
                var result = parseInt(text, radix);
                if (!isNaN(result)) {
                    return result;
                }
            }
            throw new NumberParseError('Invalid integer literal when parsing ' + text + ' in base ' + radix);
        };
        // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
        NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
        Object.defineProperty(NumberWrapper, "NaN", {
            get: function () { return NaN; },
            enumerable: true,
            configurable: true
        });
        NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
        NumberWrapper.isNaN = function (value) { return isNaN(value); };
        NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
        return NumberWrapper;
    }());
    var RegExpWrapper = (function () {
        function RegExpWrapper() {
        }
        RegExpWrapper.create = function (regExpStr, flags) {
            if (flags === void 0) { flags = ''; }
            flags = flags.replace(/g/g, '');
            return new global$1.RegExp(regExpStr, flags + 'g');
        };
        RegExpWrapper.firstMatch = function (regExp, input) {
            // Reset multimatch regex state
            regExp.lastIndex = 0;
            return regExp.exec(input);
        };
        RegExpWrapper.test = function (regExp, input) {
            regExp.lastIndex = 0;
            return regExp.test(input);
        };
        RegExpWrapper.matcher = function (regExp, input) {
            // Reset regex state for the case
            // someone did not loop over all matches
            // last time.
            regExp.lastIndex = 0;
            return { re: regExp, input: input };
        };
        RegExpWrapper.replaceAll = function (regExp, input, replace) {
            var c = regExp.exec(input);
            var res = '';
            regExp.lastIndex = 0;
            var prev = 0;
            while (c) {
                res += input.substring(prev, c.index);
                res += replace(c);
                prev = c.index + c[0].length;
                regExp.lastIndex = prev;
                c = regExp.exec(input);
            }
            res += input.substring(prev);
            return res;
        };
        return RegExpWrapper;
    }());
    var FunctionWrapper = (function () {
        function FunctionWrapper() {
        }
        FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
        FunctionWrapper.bind = function (fn, scope) { return fn.bind(scope); };
        return FunctionWrapper;
    }());
    function print(obj) {
        console.log(obj);
    }
    // Can't be all uppercase as our transpiler would think it is a special directive...
    var Json = (function () {
        function Json() {
        }
        Json.parse = function (s) { return global$1.JSON.parse(s); };
        Json.stringify = function (data) {
            // Dart doesn't take 3 arguments
            return global$1.JSON.stringify(data, null, 2);
        };
        return Json;
    }());
    var DateWrapper = (function () {
        function DateWrapper() {
        }
        DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
            if (month === void 0) { month = 1; }
            if (day === void 0) { day = 1; }
            if (hour === void 0) { hour = 0; }
            if (minutes === void 0) { minutes = 0; }
            if (seconds === void 0) { seconds = 0; }
            if (milliseconds === void 0) { milliseconds = 0; }
            return new Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
        };
        DateWrapper.fromISOString = function (str) { return new Date(str); };
        DateWrapper.fromMillis = function (ms) { return new Date(ms); };
        DateWrapper.toMillis = function (date) { return date.getTime(); };
        DateWrapper.now = function () { return new Date(); };
        DateWrapper.toJson = function (date) { return date.toJSON(); };
        return DateWrapper;
    }());
    function setValueOnPath(global, path, value) {
        var parts = path.split('.');
        var obj = global;
        while (parts.length > 1) {
            var name = parts.shift();
            if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
                obj = obj[name];
            }
            else {
                obj = obj[name] = {};
            }
        }
        if (obj === undefined || obj === null) {
            obj = {};
        }
        obj[parts.shift()] = value;
    }
    var _DOM = null;
    function getDOM() {
        return _DOM;
    }
    function setRootDomAdapter(adapter) {
        if (isBlank(_DOM)) {
            _DOM = adapter;
        }
    }
    /* tslint:disable:requireParameterType */
    /**
     * Provides DOM operations in an environment-agnostic way.
     */
    var DomAdapter = (function () {
        function DomAdapter() {
            this.xhrType = null;
        }
        /** @deprecated */
        DomAdapter.prototype.getXHR = function () { return this.xhrType; };
        Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
            /**
             * Maps attribute names to their corresponding property names for cases
             * where attribute name doesn't match property name.
             */
            get: function () { return this._attrToPropMap; },
            set: function (value) { this._attrToPropMap = value; },
            enumerable: true,
            configurable: true
        });
        ;
        ;
        return DomAdapter;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function supportsState() {
        return !!window.history.pushState;
    }
    var BrowserPlatformLocation = (function (_super) {
        __extends(BrowserPlatformLocation, _super);
        function BrowserPlatformLocation() {
            _super.call(this);
            this._init();
        }
        // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
        /** @internal */
        BrowserPlatformLocation.prototype._init = function () {
            this._location = getDOM().getLocation();
            this._history = getDOM().getHistory();
        };
        Object.defineProperty(BrowserPlatformLocation.prototype, "location", {
            /** @internal */
            get: function () { return this._location; },
            enumerable: true,
            configurable: true
        });
        BrowserPlatformLocation.prototype.getBaseHrefFromDOM = function () { return getDOM().getBaseHref(); };
        BrowserPlatformLocation.prototype.onPopState = function (fn) {
            getDOM().getGlobalEventTarget('window').addEventListener('popstate', fn, false);
        };
        BrowserPlatformLocation.prototype.onHashChange = function (fn) {
            getDOM().getGlobalEventTarget('window').addEventListener('hashchange', fn, false);
        };
        Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
            get: function () { return this._location.pathname; },
            set: function (newPath) { this._location.pathname = newPath; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
            get: function () { return this._location.search; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
            get: function () { return this._location.hash; },
            enumerable: true,
            configurable: true
        });
        BrowserPlatformLocation.prototype.pushState = function (state, title, url) {
            if (supportsState()) {
                this._history.pushState(state, title, url);
            }
            else {
                this._location.hash = url;
            }
        };
        BrowserPlatformLocation.prototype.replaceState = function (state, title, url) {
            if (supportsState()) {
                this._history.replaceState(state, title, url);
            }
            else {
                this._location.hash = url;
            }
        };
        BrowserPlatformLocation.prototype.forward = function () { this._history.forward(); };
        BrowserPlatformLocation.prototype.back = function () { this._history.back(); };
        return BrowserPlatformLocation;
    }(_angular_common.PlatformLocation));
    /** @nocollapse */
    BrowserPlatformLocation.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    BrowserPlatformLocation.ctorParameters = [];
    /**
     * A service that can be used to get and set the title of a current HTML document.
     *
     * Since an Angular 2 application can't be bootstrapped on the entire HTML document (`<html>` tag)
     * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
     * (representing the `<title>` tag). Instead, this service can be used to set and get the current
     * title value.
     *
     * @experimental
     */
    var Title = (function () {
        function Title() {
        }
        /**
         * Get the title of the current HTML document.
         * @returns {string}
         */
        Title.prototype.getTitle = function () { return getDOM().getTitle(); };
        /**
         * Set the title of the current HTML document.
         * @param newTitle
         */
        Title.prototype.setTitle = function (newTitle) { getDOM().setTitle(newTitle); };
        return Title;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * JS version of browser APIs. This library can only run in the browser.
     */
    var win = typeof window !== 'undefined' && window || {};
    var ChangeDetectionPerfRecord = (function () {
        function ChangeDetectionPerfRecord(msPerTick, numTicks) {
            this.msPerTick = msPerTick;
            this.numTicks = numTicks;
        }
        return ChangeDetectionPerfRecord;
    }());
    /**
     * Entry point for all Angular debug tools. This object corresponds to the `ng`
     * global variable accessible in the dev console.
     */
    var AngularTools = (function () {
        function AngularTools(ref) {
            this.profiler = new AngularProfiler(ref);
        }
        return AngularTools;
    }());
    /**
     * Entry point for all Angular profiling-related debug tools. This object
     * corresponds to the `ng.profiler` in the dev console.
     */
    var AngularProfiler = (function () {
        function AngularProfiler(ref) {
            this.appRef = ref.injector.get(_angular_core.ApplicationRef);
        }
        /**
         * Exercises change detection in a loop and then prints the average amount of
         * time in milliseconds how long a single round of change detection takes for
         * the current state of the UI. It runs a minimum of 5 rounds for a minimum
         * of 500 milliseconds.
         *
         * Optionally, a user may pass a `config` parameter containing a map of
         * options. Supported options are:
         *
         * `record` (boolean) - causes the profiler to record a CPU profile while
         * it exercises the change detector. Example:
         *
         * ```
         * ng.profiler.timeChangeDetection({record: true})
         * ```
         */
        AngularProfiler.prototype.timeChangeDetection = function (config) {
            var record = isPresent(config) && config['record'];
            var profileName = 'Change Detection';
            // Profiler is not available in Android browsers, nor in IE 9 without dev tools opened
            var isProfilerAvailable = isPresent(win.console.profile);
            if (record && isProfilerAvailable) {
                win.console.profile(profileName);
            }
            var start = getDOM().performanceNow();
            var numTicks = 0;
            while (numTicks < 5 || (getDOM().performanceNow() - start) < 500) {
                this.appRef.tick();
                numTicks++;
            }
            var end = getDOM().performanceNow();
            if (record && isProfilerAvailable) {
                // need to cast to <any> because type checker thinks there's no argument
                // while in fact there is:
                //
                // https://developer.mozilla.org/en-US/docs/Web/API/Console/profileEnd
                win.console.profileEnd(profileName);
            }
            var msPerTick = (end - start) / numTicks;
            win.console.log("ran " + numTicks + " change detection cycles");
            win.console.log(NumberWrapper.toFixed(msPerTick, 2) + " ms per check");
            return new ChangeDetectionPerfRecord(msPerTick, numTicks);
        };
        return AngularProfiler;
    }());
    var context = global$1;
    /**
     * Enabled Angular 2 debug tools that are accessible via your browser's
     * developer console.
     *
     * Usage:
     *
     * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
     * 1. Type `ng.` (usually the console will show auto-complete suggestion)
     * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
     *    then hit Enter.
     *
     * @experimental All debugging apis are currently experimental.
     */
    function enableDebugTools(ref) {
        context.ng = new AngularTools(ref);
        return ref;
    }
    /**
     * Disables Angular 2 tools.
     *
     * @experimental All debugging apis are currently experimental.
     */
    function disableDebugTools() {
        delete context.ng;
    }
    /**
     * Predicates for use with {@link DebugElement}'s query functions.
     *
     * @experimental All debugging apis are currently experimental.
     */
    var By = (function () {
        function By() {
        }
        /**
         * Match all elements.
         *
         * ## Example
         *
         * {@example platform/dom/debug/ts/by/by.ts region='by_all'}
         */
        By.all = function () { return function (debugElement) { return true; }; };
        /**
         * Match elements by the given CSS selector.
         *
         * ## Example
         *
         * {@example platform/dom/debug/ts/by/by.ts region='by_css'}
         */
        By.css = function (selector) {
            return function (debugElement) {
                return isPresent(debugElement.nativeElement) ?
                    getDOM().elementMatches(debugElement.nativeElement, selector) :
                    false;
            };
        };
        /**
         * Match elements that have the given directive present.
         *
         * ## Example
         *
         * {@example platform/dom/debug/ts/by/by.ts region='by_directive'}
         */
        By.directive = function (type) {
            return function (debugElement) { return debugElement.providerTokens.indexOf(type) !== -1; };
        };
        return By;
    }());
    /**
     * A DI Token representing the main rendering context. In a browser this is the DOM Document.
     *
     * Note: Document might not be available in the Application Context when Application and Rendering
     * Contexts are not the same (e.g. when running the application into a Web Worker).
     *
     * @stable
     */
    var DOCUMENT = new _angular_core.OpaqueToken('DocumentToken');
    var Map$1 = global$1.Map;
    var Set$1 = global$1.Set;
    // Safari and Internet Explorer do not support the iterable parameter to the
    // Map constructor.  We work around that by manually adding the items.
    var createMapFromPairs = (function () {
        try {
            if (new Map$1([[1, 2]]).size === 1) {
                return function createMapFromPairs(pairs) { return new Map$1(pairs); };
            }
        }
        catch (e) {
        }
        return function createMapAndPopulateFromPairs(pairs) {
            var map = new Map$1();
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                map.set(pair[0], pair[1]);
            }
            return map;
        };
    })();
    var createMapFromMap = (function () {
        try {
            if (new Map$1(new Map$1())) {
                return function createMapFromMap(m) { return new Map$1(m); };
            }
        }
        catch (e) {
        }
        return function createMapAndPopulateFromMap(m) {
            var map = new Map$1();
            m.forEach(function (v, k) { map.set(k, v); });
            return map;
        };
    })();
    var _clearValues = (function () {
        if ((new Map$1()).keys().next) {
            return function _clearValues(m) {
                var keyIterator = m.keys();
                var k;
                while (!((k = keyIterator.next()).done)) {
                    m.set(k.value, null);
                }
            };
        }
        else {
            return function _clearValuesWithForeEach(m) {
                m.forEach(function (v, k) { m.set(k, null); });
            };
        }
    })();
    // Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
    // TODO(mlaval): remove the work around once we have a working polyfill of Array.from
    var _arrayFromMap = (function () {
        try {
            if ((new Map$1()).values().next) {
                return function createArrayFromMap(m, getValues) {
                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
                };
            }
        }
        catch (e) {
        }
        return function createArrayFromMapWithForeach(m, getValues) {
            var res = ListWrapper.createFixedSize(m.size), i = 0;
            m.forEach(function (v, k) {
                res[i] = getValues ? v : k;
                i++;
            });
            return res;
        };
    })();
    /**
     * Wraps Javascript Objects
     */
    var StringMapWrapper = (function () {
        function StringMapWrapper() {
        }
        StringMapWrapper.create = function () {
            // Note: We are not using Object.create(null) here due to
            // performance!
            // http://jsperf.com/ng2-object-create-null
            return {};
        };
        StringMapWrapper.contains = function (map, key) {
            return map.hasOwnProperty(key);
        };
        StringMapWrapper.get = function (map, key) {
            return map.hasOwnProperty(key) ? map[key] : undefined;
        };
        StringMapWrapper.set = function (map, key, value) { map[key] = value; };
        StringMapWrapper.keys = function (map) { return Object.keys(map); };
        StringMapWrapper.values = function (map) {
            return Object.keys(map).reduce(function (r, a) {
                r.push(map[a]);
                return r;
            }, []);
        };
        StringMapWrapper.isEmpty = function (map) {
            for (var prop in map) {
                return false;
            }
            return true;
        };
        StringMapWrapper.delete = function (map, key) { delete map[key]; };
        StringMapWrapper.forEach = function (map, callback) {
            for (var prop in map) {
                if (map.hasOwnProperty(prop)) {
                    callback(map[prop], prop);
                }
            }
        };
        StringMapWrapper.merge = function (m1, m2) {
            var m = {};
            for (var attr in m1) {
                if (m1.hasOwnProperty(attr)) {
                    m[attr] = m1[attr];
                }
            }
            for (var attr in m2) {
                if (m2.hasOwnProperty(attr)) {
                    m[attr] = m2[attr];
                }
            }
            return m;
        };
        StringMapWrapper.equals = function (m1, m2) {
            var k1 = Object.keys(m1);
            var k2 = Object.keys(m2);
            if (k1.length != k2.length) {
                return false;
            }
            var key;
            for (var i = 0; i < k1.length; i++) {
                key = k1[i];
                if (m1[key] !== m2[key]) {
                    return false;
                }
            }
            return true;
        };
        return StringMapWrapper;
    }());
    var ListWrapper = (function () {
        function ListWrapper() {
        }
        // JS has no way to express a statically fixed size list, but dart does so we
        // keep both methods.
        ListWrapper.createFixedSize = function (size) { return new Array(size); };
        ListWrapper.createGrowableSize = function (size) { return new Array(size); };
        ListWrapper.clone = function (array) { return array.slice(0); };
        ListWrapper.forEachWithIndex = function (array, fn) {
            for (var i = 0; i < array.length; i++) {
                fn(array[i], i);
            }
        };
        ListWrapper.first = function (array) {
            if (!array)
                return null;
            return array[0];
        };
        ListWrapper.last = function (array) {
            if (!array || array.length == 0)
                return null;
            return array[array.length - 1];
        };
        ListWrapper.indexOf = function (array, value, startIndex) {
            if (startIndex === void 0) { startIndex = 0; }
            return array.indexOf(value, startIndex);
        };
        ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
        ListWrapper.reversed = function (array) {
            var a = ListWrapper.clone(array);
            return a.reverse();
        };
        ListWrapper.concat = function (a, b) { return a.concat(b); };
        ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
        ListWrapper.removeAt = function (list, index) {
            var res = list[index];
            list.splice(index, 1);
            return res;
        };
        ListWrapper.removeAll = function (list, items) {
            for (var i = 0; i < items.length; ++i) {
                var index = list.indexOf(items[i]);
                list.splice(index, 1);
            }
        };
        ListWrapper.remove = function (list, el) {
            var index = list.indexOf(el);
            if (index > -1) {
                list.splice(index, 1);
                return true;
            }
            return false;
        };
        ListWrapper.clear = function (list) { list.length = 0; };
        ListWrapper.isEmpty = function (list) { return list.length == 0; };
        ListWrapper.fill = function (list, value, start, end) {
            if (start === void 0) { start = 0; }
            if (end === void 0) { end = null; }
            list.fill(value, start, end === null ? list.length : end);
        };
        ListWrapper.equals = function (a, b) {
            if (a.length != b.length)
                return false;
            for (var i = 0; i < a.length; ++i) {
                if (a[i] !== b[i])
                    return false;
            }
            return true;
        };
        ListWrapper.slice = function (l, from, to) {
            if (from === void 0) { from = 0; }
            if (to === void 0) { to = null; }
            return l.slice(from, to === null ? undefined : to);
        };
        ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
        ListWrapper.sort = function (l, compareFn) {
            if (isPresent(compareFn)) {
                l.sort(compareFn);
            }
            else {
                l.sort();
            }
        };
        ListWrapper.toString = function (l) { return l.toString(); };
        ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
        ListWrapper.maximum = function (list, predicate) {
            if (list.length == 0) {
                return null;
            }
            var solution = null;
            var maxValue = -Infinity;
            for (var index = 0; index < list.length; index++) {
                var candidate = list[index];
                if (isBlank(candidate)) {
                    continue;
                }
                var candidateValue = predicate(candidate);
                if (candidateValue > maxValue) {
                    solution = candidate;
                    maxValue = candidateValue;
                }
            }
            return solution;
        };
        ListWrapper.flatten = function (list) {
            var target = [];
            _flattenArray(list, target);
            return target;
        };
        ListWrapper.addAll = function (list, source) {
            for (var i = 0; i < source.length; i++) {
                list.push(source[i]);
            }
        };
        return ListWrapper;
    }());
    function _flattenArray(source, target) {
        if (isPresent(source)) {
            for (var i = 0; i < source.length; i++) {
                var item = source[i];
                if (isArray(item)) {
                    _flattenArray(item, target);
                }
                else {
                    target.push(item);
                }
            }
        }
        return target;
    }
    // Safari and Internet Explorer do not support the iterable parameter to the
    // Set constructor.  We work around that by manually adding the items.
    var createSetFromList = (function () {
        var test = new Set$1([1, 2, 3]);
        if (test.size === 3) {
            return function createSetFromList(lst) { return new Set$1(lst); };
        }
        else {
            return function createSetAndPopulateFromList(lst) {
                var res = new Set$1(lst);
                if (res.size !== lst.length) {
                    for (var i = 0; i < lst.length; i++) {
                        res.add(lst[i]);
                    }
                }
                return res;
            };
        }
    })();
    var SetWrapper = (function () {
        function SetWrapper() {
        }
        SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
        SetWrapper.has = function (s, key) { return s.has(key); };
        SetWrapper.delete = function (m, k) { m.delete(k); };
        return SetWrapper;
    }());
    /**
     * @stable
     */
    var BaseException$1 = (function (_super) {
        __extends(BaseException$1, _super);
        function BaseException$1(message) {
            if (message === void 0) { message = '--'; }
            _super.call(this, message);
            this.message = message;
            this.stack = (new Error(message)).stack;
        }
        BaseException$1.prototype.toString = function () { return this.message; };
        return BaseException$1;
    }(Error));
    /**
     * @stable
     */
    var EVENT_MANAGER_PLUGINS = new _angular_core.OpaqueToken('EventManagerPlugins');
    var EventManager = (function () {
        function EventManager(plugins, _zone) {
            var _this = this;
            this._zone = _zone;
            plugins.forEach(function (p) { return p.manager = _this; });
            this._plugins = ListWrapper.reversed(plugins);
        }
        EventManager.prototype.addEventListener = function (element, eventName, handler) {
            var plugin = this._findPluginFor(eventName);
            return plugin.addEventListener(element, eventName, handler);
        };
        EventManager.prototype.addGlobalEventListener = function (target, eventName, handler) {
            var plugin = this._findPluginFor(eventName);
            return plugin.addGlobalEventListener(target, eventName, handler);
        };
        EventManager.prototype.getZone = function () { return this._zone; };
        /** @internal */
        EventManager.prototype._findPluginFor = function (eventName) {
            var plugins = this._plugins;
            for (var i = 0; i < plugins.length; i++) {
                var plugin = plugins[i];
                if (plugin.supports(eventName)) {
                    return plugin;
                }
            }
            throw new BaseException$1("No event manager plugin found for event " + eventName);
        };
        return EventManager;
    }());
    /** @nocollapse */
    EventManager.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    EventManager.ctorParameters = [
        { type: Array, decorators: [{ type: _angular_core.Inject, args: [EVENT_MANAGER_PLUGINS,] },] },
        { type: _angular_core.NgZone, },
    ];
    var EventManagerPlugin = (function () {
        function EventManagerPlugin() {
        }
        // That is equivalent to having supporting $event.target
        EventManagerPlugin.prototype.supports = function (eventName) { return false; };
        EventManagerPlugin.prototype.addEventListener = function (element, eventName, handler) {
            throw 'not implemented';
        };
        EventManagerPlugin.prototype.addGlobalEventListener = function (element, eventName, handler) {
            throw 'not implemented';
        };
        return EventManagerPlugin;
    }());
    var _eventNames = {
        // pan
        'pan': true,
        'panstart': true,
        'panmove': true,
        'panend': true,
        'pancancel': true,
        'panleft': true,
        'panright': true,
        'panup': true,
        'pandown': true,
        // pinch
        'pinch': true,
        'pinchstart': true,
        'pinchmove': true,
        'pinchend': true,
        'pinchcancel': true,
        'pinchin': true,
        'pinchout': true,
        // press
        'press': true,
        'pressup': true,
        // rotate
        'rotate': true,
        'rotatestart': true,
        'rotatemove': true,
        'rotateend': true,
        'rotatecancel': true,
        // swipe
        'swipe': true,
        'swipeleft': true,
        'swiperight': true,
        'swipeup': true,
        'swipedown': true,
        // tap
        'tap': true,
    };
    var HammerGesturesPluginCommon = (function (_super) {
        __extends(HammerGesturesPluginCommon, _super);
        function HammerGesturesPluginCommon() {
            _super.call(this);
        }
        HammerGesturesPluginCommon.prototype.supports = function (eventName) {
            eventName = eventName.toLowerCase();
            return StringMapWrapper.contains(_eventNames, eventName);
        };
        return HammerGesturesPluginCommon;
    }(EventManagerPlugin));
    /**
     * A DI token that you can use to provide{@link HammerGestureConfig} to Angular. Use it to configure
     * Hammer gestures.
     *
     * @experimental
     */
    var HAMMER_GESTURE_CONFIG = new _angular_core.OpaqueToken('HammerGestureConfig');
    var HammerGestureConfig = (function () {
        function HammerGestureConfig() {
            this.events = [];
            this.overrides = {};
        }
        HammerGestureConfig.prototype.buildHammer = function (element) {
            var mc = new Hammer(element);
            mc.get('pinch').set({ enable: true });
            mc.get('rotate').set({ enable: true });
            for (var eventName in this.overrides) {
                mc.get(eventName).set(this.overrides[eventName]);
            }
            return mc;
        };
        return HammerGestureConfig;
    }());
    /** @nocollapse */
    HammerGestureConfig.decorators = [
        { type: _angular_core.Injectable },
    ];
    var HammerGesturesPlugin = (function (_super) {
        __extends(HammerGesturesPlugin, _super);
        function HammerGesturesPlugin(_config) {
            _super.call(this);
            this._config = _config;
        }
        HammerGesturesPlugin.prototype.supports = function (eventName) {
            if (!_super.prototype.supports.call(this, eventName) && !this.isCustomEvent(eventName))
                return false;
            if (!isPresent(window['Hammer'])) {
                throw new BaseException$1("Hammer.js is not loaded, can not bind " + eventName + " event");
            }
            return true;
        };
        HammerGesturesPlugin.prototype.addEventListener = function (element, eventName, handler) {
            var _this = this;
            var zone = this.manager.getZone();
            eventName = eventName.toLowerCase();
            return zone.runOutsideAngular(function () {
                // Creating the manager bind events, must be done outside of angular
                var mc = _this._config.buildHammer(element);
                var callback = function (eventObj /** TODO #???? */) {
                    zone.runGuarded(function () { handler(eventObj); });
                };
                mc.on(eventName, callback);
                return function () { mc.off(eventName, callback); };
            });
        };
        HammerGesturesPlugin.prototype.isCustomEvent = function (eventName) { return this._config.events.indexOf(eventName) > -1; };
        return HammerGesturesPlugin;
    }(HammerGesturesPluginCommon));
    /** @nocollapse */
    HammerGesturesPlugin.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    HammerGesturesPlugin.ctorParameters = [
        { type: HammerGestureConfig, decorators: [{ type: _angular_core.Inject, args: [HAMMER_GESTURE_CONFIG,] },] },
    ];
    var wtfInit = _angular_core.__core_private__.wtfInit;
    var VIEW_ENCAPSULATION_VALUES = _angular_core.__core_private__.VIEW_ENCAPSULATION_VALUES;
    var DebugDomRootRenderer = _angular_core.__core_private__.DebugDomRootRenderer;
    /**
     * @experimental bogus marker to pass the ts-api-guardian's check - this api should be public so
     * this line will go away when that happens
     */
    var SecurityContext = _angular_core.__core_private__.SecurityContext;
    var SanitizationService = _angular_core.__core_private__.SanitizationService;
    var NoOpAnimationDriver = _angular_core.__core_private__.NoOpAnimationDriver;
    var AnimationDriver = _angular_core.__core_private__.AnimationDriver;
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * This regular expression matches a subset of URLs that will not cause script
     * execution if used in URL context within a HTML document. Specifically, this
     * regular expression matches if (comment from here on and regex copied from
     * Soy's EscapingConventions):
     * (1) Either a protocol in a whitelist (http, https, mailto or ftp).
     * (2) or no protocol.  A protocol must be followed by a colon. The below
     *     allows that by allowing colons only after one of the characters [/?#].
     *     A colon after a hash (#) must be in the fragment.
     *     Otherwise, a colon after a (?) must be in a query.
     *     Otherwise, a colon after a single solidus (/) must be in a path.
     *     Otherwise, a colon after a double solidus (//) must be in the authority
     *     (before port).
     *
     * The pattern disallows &, used in HTML entity declarations before
     * one of the characters in [/?#]. This disallows HTML entities used in the
     * protocol name, which should never happen, e.g. "h&#116;tp" for "http".
     * It also disallows HTML entities in the first path part of a relative path,
     * e.g. "foo&lt;bar/baz".  Our existing escaping functions should not produce
     * that. More importantly, it disallows masking of a colon,
     * e.g. "javascript&#58;...".
     *
     * This regular expression was taken from the Closure sanitization library.
     */
    var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
    /** A pattern that matches safe data URLs. Only matches image, video and audio types. */
    var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
    function sanitizeUrl(url) {
        url = String(url);
        if (url.match(SAFE_URL_PATTERN) || url.match(DATA_URL_PATTERN))
            return url;
        if (_angular_core.isDevMode()) {
            getDOM().log("WARNING: sanitizing unsafe URL value " + url + " (see http://g.co/ng/security#xss)");
        }
        return 'unsafe:' + url;
    }
    function sanitizeSrcset(srcset) {
        srcset = String(srcset);
        return srcset.split(',').map(function (srcset) { return sanitizeUrl(srcset.trim()); }).join(', ');
    }
    /** A <body> element that can be safely used to parse untrusted HTML. Lazily initialized below. */
    var inertElement = null;
    /** Lazily initialized to make sure the DOM adapter gets set before use. */
    var DOM = null;
    /** Returns an HTML element that is guaranteed to not execute code when creating elements in it. */
    function getInertElement() {
        if (inertElement)
            return inertElement;
        DOM = getDOM();
        // Prefer using <template> element if supported.
        var templateEl = DOM.createElement('template');
        if ('content' in templateEl)
            return templateEl;
        var doc = DOM.createHtmlDocument();
        inertElement = DOM.querySelector(doc, 'body');
        if (inertElement == null) {
            // usually there should be only one body element in the document, but IE doesn't have any, so we
            // need to create one.
            var html = DOM.createElement('html', doc);
            inertElement = DOM.createElement('body', doc);
            DOM.appendChild(html, inertElement);
            DOM.appendChild(doc, html);
        }
        return inertElement;
    }
    function tagSet(tags) {
        var res = {};
        for (var _i = 0, _a = tags.split(','); _i < _a.length; _i++) {
            var t = _a[_i];
            res[t.toLowerCase()] = true;
        }
        return res;
    }
    function merge() {
        var sets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sets[_i - 0] = arguments[_i];
        }
        var res = {};
        for (var _a = 0, sets_1 = sets; _a < sets_1.length; _a++) {
            var s = sets_1[_a];
            for (var v in s) {
                if (s.hasOwnProperty(v))
                    res[v] = true;
            }
        }
        return res;
    }
    // Good source of info about elements and attributes
    // http://dev.w3.org/html5/spec/Overview.html#semantics
    // http://simon.html5.org/html-elements
    // Safe Void Elements - HTML5
    // http://dev.w3.org/html5/spec/Overview.html#void-elements
    var VOID_ELEMENTS = tagSet('area,br,col,hr,img,wbr');
    // Elements that you can, intentionally, leave open (and which close themselves)
    // http://dev.w3.org/html5/spec/Overview.html#optional-tags
    var OPTIONAL_END_TAG_BLOCK_ELEMENTS = tagSet('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
    var OPTIONAL_END_TAG_INLINE_ELEMENTS = tagSet('rp,rt');
    var OPTIONAL_END_TAG_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, OPTIONAL_END_TAG_BLOCK_ELEMENTS);
    // Safe Block Elements - HTML5
    var BLOCK_ELEMENTS = merge(OPTIONAL_END_TAG_BLOCK_ELEMENTS, tagSet('address,article,' +
        'aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' +
        'h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'));
    // Inline Elements - HTML5
    var INLINE_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, tagSet('a,abbr,acronym,audio,b,' +
        'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,' +
        'samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'));
    var VALID_ELEMENTS = merge(VOID_ELEMENTS, BLOCK_ELEMENTS, INLINE_ELEMENTS, OPTIONAL_END_TAG_ELEMENTS);
    // Attributes that have href and hence need to be sanitized
    var URI_ATTRS = tagSet('background,cite,href,itemtype,longdesc,poster,src,xlink:href');
    // Attributes that have special href set hence need to be sanitized
    var SRCSET_ATTRS = tagSet('srcset');
    var HTML_ATTRS = tagSet('abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,' +
        'compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,' +
        'ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,' +
        'scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,' +
        'valign,value,vspace,width');
    // NB: This currently conciously doesn't support SVG. SVG sanitization has had several security
    // issues in the past, so it seems safer to leave it out if possible. If support for binding SVG via
    // innerHTML is required, SVG attributes should be added here.
    // NB: Sanitization does not allow <form> elements or other active elements (<button> etc). Those
    // can be sanitized, but they increase security surface area without a legitimate use case, so they
    // are left out here.
    var VALID_ATTRS = merge(URI_ATTRS, SRCSET_ATTRS, HTML_ATTRS);
    /**
     * SanitizingHtmlSerializer serializes a DOM fragment, stripping out any unsafe elements and unsafe
     * attributes.
     */
    var SanitizingHtmlSerializer = (function () {
        function SanitizingHtmlSerializer() {
            this.buf = [];
        }
        SanitizingHtmlSerializer.prototype.sanitizeChildren = function (el) {
            // This cannot use a TreeWalker, as it has to run on Angular's various DOM adapters.
            // However this code never accesses properties off of `document` before deleting its contents
            // again, so it shouldn't be vulnerable to DOM clobbering.
            var current = el.firstChild;
            while (current) {
                if (DOM.isElementNode(current)) {
                    this.startElement(current);
                }
                else if (DOM.isTextNode(current)) {
                    this.chars(DOM.nodeValue(current));
                }
                if (DOM.firstChild(current)) {
                    current = DOM.firstChild(current);
                    continue;
                }
                while (current) {
                    // Leaving the element. Walk up and to the right, closing tags as we go.
                    if (DOM.isElementNode(current)) {
                        this.endElement(DOM.nodeName(current).toLowerCase());
                    }
                    if (DOM.nextSibling(current)) {
                        current = DOM.nextSibling(current);
                        break;
                    }
                    current = DOM.parentElement(current);
                }
            }
            return this.buf.join('');
        };
        SanitizingHtmlSerializer.prototype.startElement = function (element) {
            var _this = this;
            var tagName = DOM.nodeName(element).toLowerCase();
            tagName = tagName.toLowerCase();
            if (VALID_ELEMENTS.hasOwnProperty(tagName)) {
                this.buf.push('<');
                this.buf.push(tagName);
                DOM.attributeMap(element).forEach(function (value, attrName) {
                    var lower = attrName.toLowerCase();
                    if (!VALID_ATTRS.hasOwnProperty(lower))
                        return;
                    // TODO(martinprobst): Special case image URIs for data:image/...
                    if (URI_ATTRS[lower])
                        value = sanitizeUrl(value);
                    if (SRCSET_ATTRS[lower])
                        value = sanitizeSrcset(value);
                    _this.buf.push(' ');
                    _this.buf.push(attrName);
                    _this.buf.push('="');
                    _this.buf.push(encodeEntities(value));
                    _this.buf.push('"');
                });
                this.buf.push('>');
            }
        };
        SanitizingHtmlSerializer.prototype.endElement = function (tagName) {
            tagName = tagName.toLowerCase();
            if (VALID_ELEMENTS.hasOwnProperty(tagName) && !VOID_ELEMENTS.hasOwnProperty(tagName)) {
                this.buf.push('</');
                this.buf.push(tagName);
                this.buf.push('>');
            }
        };
        SanitizingHtmlSerializer.prototype.chars = function (chars /** TODO #9100 */) { this.buf.push(encodeEntities(chars)); };
        return SanitizingHtmlSerializer;
    }());
    // Regular Expressions for parsing tags and attributes
    var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    // ! to ~ is the ASCII range.
    var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
    /**
     * Escapes all potentially dangerous characters, so that the
     * resulting string can be safely inserted into attribute or
     * element text.
     * @param value
     * @returns {string} escaped text
     */
    function encodeEntities(value /** TODO #9100 */) {
        return value.replace(/&/g, '&amp;')
            .replace(SURROGATE_PAIR_REGEXP, function (match /** TODO #9100 */) {
            var hi = match.charCodeAt(0);
            var low = match.charCodeAt(1);
            return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
        })
            .replace(NON_ALPHANUMERIC_REGEXP, function (match /** TODO #9100 */) { return '&#' + match.charCodeAt(0) + ';'; })
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    /**
     * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1'
     * attribute to declare ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo').
     *
     * This is undesirable since we don't want to allow any of these custom attributes. This method
     * strips them all.
     */
    function stripCustomNsAttrs(el) {
        DOM.attributeMap(el).forEach(function (_, attrName) {
            if (attrName === 'xmlns:ns1' || attrName.indexOf('ns1:') === 0) {
                DOM.removeAttribute(el, attrName);
            }
        });
        for (var _i = 0, _a = DOM.childNodesAsList(el); _i < _a.length; _i++) {
            var n = _a[_i];
            if (DOM.isElementNode(n))
                stripCustomNsAttrs(n);
        }
    }
    /**
     * Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
     * the DOM in a browser environment.
     */
    function sanitizeHtml(unsafeHtmlInput) {
        try {
            var containerEl = getInertElement();
            // Make sure unsafeHtml is actually a string (TypeScript types are not enforced at runtime).
            var unsafeHtml = unsafeHtmlInput ? String(unsafeHtmlInput) : '';
            // mXSS protection. Repeatedly parse the document to make sure it stabilizes, so that a browser
            // trying to auto-correct incorrect HTML cannot cause formerly inert HTML to become dangerous.
            var mXSSAttempts = 5;
            var parsedHtml = unsafeHtml;
            do {
                if (mXSSAttempts === 0) {
                    throw new Error('Failed to sanitize html because the input is unstable');
                }
                mXSSAttempts--;
                unsafeHtml = parsedHtml;
                DOM.setInnerHTML(containerEl, unsafeHtml);
                if (DOM.defaultDoc().documentMode) {
                    // strip custom-namespaced attributes on IE<=11
                    stripCustomNsAttrs(containerEl);
                }
                parsedHtml = DOM.getInnerHTML(containerEl);
            } while (unsafeHtml !== parsedHtml);
            var sanitizer = new SanitizingHtmlSerializer();
            var safeHtml = sanitizer.sanitizeChildren(DOM.getTemplateContent(containerEl) || containerEl);
            // Clear out the body element.
            var parent_1 = DOM.getTemplateContent(containerEl) || containerEl;
            for (var _i = 0, _a = DOM.childNodesAsList(parent_1); _i < _a.length; _i++) {
                var child = _a[_i];
                DOM.removeChild(parent_1, child);
            }
            if (_angular_core.isDevMode() && safeHtml !== unsafeHtmlInput) {
                DOM.log('WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).');
            }
            return safeHtml;
        }
        catch (e) {
            // In case anything goes wrong, clear out inertElement to reset the entire DOM structure.
            inertElement = null;
            throw e;
        }
    }
    /**
     * Regular expression for safe style values.
     *
     * Quotes (" and ') are allowed, but a check must be done elsewhere to ensure they're balanced.
     *
     * ',' allows multiple values to be assigned to the same property (e.g. background-attachment or
     * font-family) and hence could allow multiple values to get injected, but that should pose no risk
     * of XSS.
     *
     * The function expression checks only for XSS safety, not for CSS validity.
     *
     * This regular expression was taken from the Closure sanitization library, and augmented for
     * transformation values.
     */
    var VALUES = '[-,."\'%_!# a-zA-Z0-9]+';
    var TRANSFORMATION_FNS = '(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?';
    var COLOR_FNS = '(?:rgb|hsl)a?';
    var FN_ARGS = '\\([-0-9.%, a-zA-Z]+\\)';
    var SAFE_STYLE_VALUE = new RegExp("^(" + VALUES + "|(?:" + TRANSFORMATION_FNS + "|" + COLOR_FNS + ")" + FN_ARGS + ")$", 'g');
    /**
     * Matches a `url(...)` value with an arbitrary argument as long as it does
     * not contain parentheses.
     *
     * The URL value still needs to be sanitized separately.
     *
     * `url(...)` values are a very common use case, e.g. for `background-image`. With carefully crafted
     * CSS style rules, it is possible to construct an information leak with `url` values in CSS, e.g.
     * by observing whether scroll bars are displayed, or character ranges used by a font face
     * definition.
     *
     * Angular only allows binding CSS values (as opposed to entire CSS rules), so it is unlikely that
     * binding a URL value without further cooperation from the page will cause an information leak, and
     * if so, it is just a leak, not a full blown XSS vulnerability.
     *
     * Given the common use case, low likelihood of attack vector, and low impact of an attack, this
     * code is permissive and allows URLs that sanitize otherwise.
     */
    var URL_RE = /^url\(([^)]+)\)$/;
    /**
     * Checks that quotes (" and ') are properly balanced inside a string. Assumes
     * that neither escape (\) nor any other character that could result in
     * breaking out of a string parsing context are allowed;
     * see http://www.w3.org/TR/css3-syntax/#string-token-diagram.
     *
     * This code was taken from the Closure sanitization library.
     */
    function hasBalancedQuotes(value) {
        var outsideSingle = true;
        var outsideDouble = true;
        for (var i = 0; i < value.length; i++) {
            var c = value.charAt(i);
            if (c === '\'' && outsideDouble) {
                outsideSingle = !outsideSingle;
            }
            else if (c === '"' && outsideSingle) {
                outsideDouble = !outsideDouble;
            }
        }
        return outsideSingle && outsideDouble;
    }
    /**
     * Sanitizes the given untrusted CSS style property value (i.e. not an entire object, just a single
     * value) and returns a value that is safe to use in a browser environment.
     */
    function sanitizeStyle(value) {
        value = String(value).trim(); // Make sure it's actually a string.
        if (!value)
            return '';
        // Single url(...) values are supported, but only for URLs that sanitize cleanly. See above for
        // reasoning behind this.
        var urlMatch = URL_RE.exec(value);
        if ((urlMatch && sanitizeUrl(urlMatch[1]) === urlMatch[1]) ||
            value.match(SAFE_STYLE_VALUE) && hasBalancedQuotes(value)) {
            return value; // Safe style values.
        }
        if (_angular_core.isDevMode()) {
            getDOM().log("WARNING: sanitizing unsafe style value " + value + " (see http://g.co/ng/security#xss).");
        }
        return 'unsafe';
    }
    /**
     * DomSanitizationService helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
     * values to be safe to use in the different DOM contexts.
     *
     * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
     * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
     * the website.
     *
     * In specific situations, it might be necessary to disable sanitization, for example if the
     * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
     * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
     * methods, and then binding to that value from the template.
     *
     * These situations should be very rare, and extraordinary care must be taken to avoid creating a
     * Cross Site Scripting (XSS) security bug!
     *
     * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
     * close as possible to the source of the value, to make it easy to verify no security bug is
     * created by its use.
     *
     * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
     * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
     * code. The sanitizer leaves safe values intact.
     *
     * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
     * sanitization for the value passed in. Carefully check and audit all values and code paths going
     * into this call. Make sure any user data is appropriately escaped for this security context.
     * For more detail, see the [Security Guide](http://g.co/ng/security).
     *
     * @stable
     */
    var DomSanitizationService = (function () {
        function DomSanitizationService() {
        }
        return DomSanitizationService;
    }());
    var DomSanitizationServiceImpl = (function (_super) {
        __extends(DomSanitizationServiceImpl, _super);
        function DomSanitizationServiceImpl() {
            _super.apply(this, arguments);
        }
        DomSanitizationServiceImpl.prototype.sanitize = function (ctx, value) {
            if (value == null)
                return null;
            switch (ctx) {
                case SecurityContext.NONE:
                    return value;
                case SecurityContext.HTML:
                    if (value instanceof SafeHtmlImpl)
                        return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'HTML');
                    return sanitizeHtml(String(value));
                case SecurityContext.STYLE:
                    if (value instanceof SafeStyleImpl)
                        return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'Style');
                    return sanitizeStyle(value);
                case SecurityContext.SCRIPT:
                    if (value instanceof SafeScriptImpl)
                        return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'Script');
                    throw new Error('unsafe value used in a script context');
                case SecurityContext.URL:
                    if (value instanceof SafeUrlImpl)
                        return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'URL');
                    return sanitizeUrl(String(value));
                case SecurityContext.RESOURCE_URL:
                    if (value instanceof SafeResourceUrlImpl) {
                        return value.changingThisBreaksApplicationSecurity;
                    }
                    this.checkNotSafeValue(value, 'ResourceURL');
                    throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
                default:
                    throw new Error("Unexpected SecurityContext " + ctx + " (see http://g.co/ng/security#xss)");
            }
        };
        DomSanitizationServiceImpl.prototype.checkNotSafeValue = function (value, expectedType) {
            if (value instanceof SafeValueImpl) {
                throw new Error(("Required a safe " + expectedType + ", got a " + value.getTypeName() + " ") +
                    "(see http://g.co/ng/security#xss)");
            }
        };
        DomSanitizationServiceImpl.prototype.bypassSecurityTrustHtml = function (value) { return new SafeHtmlImpl(value); };
        DomSanitizationServiceImpl.prototype.bypassSecurityTrustStyle = function (value) { return new SafeStyleImpl(value); };
        DomSanitizationServiceImpl.prototype.bypassSecurityTrustScript = function (value) { return new SafeScriptImpl(value); };
        DomSanitizationServiceImpl.prototype.bypassSecurityTrustUrl = function (value) { return new SafeUrlImpl(value); };
        DomSanitizationServiceImpl.prototype.bypassSecurityTrustResourceUrl = function (value) {
            return new SafeResourceUrlImpl(value);
        };
        return DomSanitizationServiceImpl;
    }(DomSan/**
 * @license Angular 2.0.0-rc.4
 * (c) 2010-2016 Google, Inc. https://angular.io/
 * License: MIT
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/compiler'), require('@angular/core'), require('@angular/platform-browser'), require('rxjs/Subject'), require('rxjs/observable/PromiseObservable'), require('rxjs/operator/toPromise'), require('rxjs/Observable')) :
        typeof define === 'function' && define.amd ? define(['exports', '@angular/common', '@angular/compiler', '@angular/core', '@angular/platform-browser', 'rxjs/Subject', 'rxjs/observable/PromiseObservable', 'rxjs/operator/toPromise', 'rxjs/Observable'], factory) :
            (factory((global.ng = global.ng || {}, global.ng.platformBrowserDynamic = global.ng.platformBrowserDynamic || {}), global.ng.common, global.ng.compiler, global.ng.core, global.ng.platformBrowser, global.Rx, global.Rx, global.Rx.Observable.prototype, global.Rx));
}(this, function (exports, _angular_common, _angular_compiler, _angular_core, _angular_platformBrowser, rxjs_Subject, rxjs_observable_PromiseObservable, rxjs_operator_toPromise, rxjs_Observable) {
    'use strict';
    var ReflectionCapabilities = _angular_core.__core_private__.ReflectionCapabilities;
    var reflector = _angular_core.__core_private__.reflector;
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var globalScope;
    if (typeof window === 'undefined') {
        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
            globalScope = self;
        }
        else {
            globalScope = global;
        }
    }
    else {
        globalScope = window;
    }
    // Need to declare a new variable for global here since TypeScript
    // exports the original value of the symbol.
    var global$1 = globalScope;
    // TODO: remove calls to assert in production environment
    // Note: Can't just export this and import in in other files
    // as `assert` is a reserved keyword in Dart
    global$1.assert = function assert(condition) {
        // TODO: to be fixed properly via #2830, noop for now
    };
    function isPresent(obj) {
        return obj !== undefined && obj !== null;
    }
    function isBlank(obj) {
        return obj === undefined || obj === null;
    }
    function isArray(obj) {
        return Array.isArray(obj);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var PromiseCompleter = (function () {
        function PromiseCompleter() {
            var _this = this;
            this.promise = new Promise(function (res, rej) {
                _this.resolve = res;
                _this.reject = rej;
            });
        }
        return PromiseCompleter;
    }());
    var PromiseWrapper = (function () {
        function PromiseWrapper() {
        }
        PromiseWrapper.resolve = function (obj) { return Promise.resolve(obj); };
        PromiseWrapper.reject = function (obj, _) { return Promise.reject(obj); };
        // Note: We can't rename this method into `catch`, as this is not a valid
        // method name in Dart.
        PromiseWrapper.catchError = function (promise, onError) {
            return promise.catch(onError);
        };
        PromiseWrapper.all = function (promises) {
            if (promises.length == 0)
                return Promise.resolve([]);
            return Promise.all(promises);
        };
        PromiseWrapper.then = function (promise, success, rejection) {
            return promise.then(success, rejection);
        };
        PromiseWrapper.wrap = function (computation) {
            return new Promise(function (res, rej) {
                try {
                    res(computation());
                }
                catch (e) {
                    rej(e);
                }
            });
        };
        PromiseWrapper.scheduleMicrotask = function (computation) {
            PromiseWrapper.then(PromiseWrapper.resolve(null), computation, function (_) { });
        };
        PromiseWrapper.completer = function () { return new PromiseCompleter(); };
        return PromiseWrapper;
    }());
    var Map$1 = global$1.Map;
    var Set = global$1.Set;
    // Safari and Internet Explorer do not support the iterable parameter to the
    // Map constructor.  We work around that by manually adding the items.
    var createMapFromPairs = (function () {
        try {
            if (new Map$1([[1, 2]]).size === 1) {
                return function createMapFromPairs(pairs) { return new Map$1(pairs); };
            }
        }
        catch (e) {
        }
        return function createMapAndPopulateFromPairs(pairs) {
            var map = new Map$1();
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                map.set(pair[0], pair[1]);
            }
            return map;
        };
    })();
    var createMapFromMap = (function () {
        try {
            if (new Map$1(new Map$1())) {
                return function createMapFromMap(m) { return new Map$1(m); };
            }
        }
        catch (e) {
        }
        return function createMapAndPopulateFromMap(m) {
            var map = new Map$1();
            m.forEach(function (v, k) { map.set(k, v); });
            return map;
        };
    })();
    var _clearValues = (function () {
        if ((new Map$1()).keys().next) {
            return function _clearValues(m) {
                var keyIterator = m.keys();
                var k;
                while (!((k = keyIterator.next()).done)) {
                    m.set(k.value, null);
                }
            };
        }
        else {
            return function _clearValuesWithForeEach(m) {
                m.forEach(function (v, k) { m.set(k, null); });
            };
        }
    })();
    // Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
    // TODO(mlaval): remove the work around once we have a working polyfill of Array.from
    var _arrayFromMap = (function () {
        try {
            if ((new Map$1()).values().next) {
                return function createArrayFromMap(m, getValues) {
                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
                };
            }
        }
        catch (e) {
        }
        return function createArrayFromMapWithForeach(m, getValues) {
            var res = ListWrapper.createFixedSize(m.size), i = 0;
            m.forEach(function (v, k) {
                res[i] = getValues ? v : k;
                i++;
            });
            return res;
        };
    })();
    var ListWrapper = (function () {
        function ListWrapper() {
        }
        // JS has no way to express a statically fixed size list, but dart does so we
        // keep both methods.
        ListWrapper.createFixedSize = function (size) { return new Array(size); };
        ListWrapper.createGrowableSize = function (size) { return new Array(size); };
        ListWrapper.clone = function (array) { return array.slice(0); };
        ListWrapper.forEachWithIndex = function (array, fn) {
            for (var i = 0; i < array.length; i++) {
                fn(array[i], i);
            }
        };
        ListWrapper.first = function (array) {
            if (!array)
                return null;
            return array[0];
        };
        ListWrapper.last = function (array) {
            if (!array || array.length == 0)
                return null;
            return array[array.length - 1];
        };
        ListWrapper.indexOf = function (array, value, startIndex) {
            if (startIndex === void 0) { startIndex = 0; }
            return array.indexOf(value, startIndex);
        };
        ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
        ListWrapper.reversed = function (array) {
            var a = ListWrapper.clone(array);
            return a.reverse();
        };
        ListWrapper.concat = function (a, b) { return a.concat(b); };
        ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
        ListWrapper.removeAt = function (list, index) {
            var res = list[index];
            list.splice(index, 1);
            return res;
        };
        ListWrapper.removeAll = function (list, items) {
            for (var i = 0; i < items.length; ++i) {
                var index = list.indexOf(items[i]);
                list.splice(index, 1);
            }
        };
        ListWrapper.remove = function (list, el) {
            var index = list.indexOf(el);
            if (index > -1) {
                list.splice(index, 1);
                return true;
            }
            return false;
        };
        ListWrapper.clear = function (list) { list.length = 0; };
        ListWrapper.isEmpty = function (list) { return list.length == 0; };
        ListWrapper.fill = function (list, value, start, end) {
            if (start === void 0) { start = 0; }
            if (end === void 0) { end = null; }
            list.fill(value, start, end === null ? list.length : end);
        };
        ListWrapper.equals = function (a, b) {
            if (a.length != b.length)
                return false;
            for (var i = 0; i < a.length; ++i) {
                if (a[i] !== b[i])
                    return false;
            }
            return true;
        };
        ListWrapper.slice = function (l, from, to) {
            if (from === void 0) { from = 0; }
            if (to === void 0) { to = null; }
            return l.slice(from, to === null ? undefined : to);
        };
        ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
        ListWrapper.sort = function (l, compareFn) {
            if (isPresent(compareFn)) {
                l.sort(compareFn);
            }
            else {
                l.sort();
            }
        };
        ListWrapper.toString = function (l) { return l.toString(); };
        ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
        ListWrapper.maximum = function (list, predicate) {
            if (list.length == 0) {
                return null;
            }
            var solution = null;
            var maxValue = -Infinity;
            for (var index = 0; index < list.length; index++) {
                var candidate = list[index];
                if (isBlank(candidate)) {
                    continue;
                }
                var candidateValue = predicate(candidate);
                if (candidateValue > maxValue) {
                    solution = candidate;
                    maxValue = candidateValue;
                }
            }
            return solution;
        };
        ListWrapper.flatten = function (list) {
            var target = [];
            _flattenArray(list, target);
            return target;
        };
        ListWrapper.addAll = function (list, source) {
            for (var i = 0; i < source.length; i++) {
                list.push(source[i]);
            }
        };
        return ListWrapper;
    }());
    function _flattenArray(source, target) {
        if (isPresent(source)) {
            for (var i = 0; i < source.length; i++) {
                var item = source[i];
                if (isArray(item)) {
                    _flattenArray(item, target);
                }
                else {
                    target.push(item);
                }
            }
        }
        return target;
    }
    // Safari and Internet Explorer do not support the iterable parameter to the
    // Set constructor.  We work around that by manually adding the items.
    var createSetFromList = (function () {
        var test = new Set([1, 2, 3]);
        if (test.size === 3) {
            return function createSetFromList(lst) { return new Set(lst); };
        }
        else {
            return function createSetAndPopulateFromList(lst) {
                var res = new Set(lst);
                if (res.size !== lst.length) {
                    for (var i = 0; i < lst.length; i++) {
                        res.add(lst[i]);
                    }
                }
                return res;
            };
        }
    })();
    /**
     * @stable
     */
    var BaseException = (function (_super) {
        __extends(BaseException, _super);
        function BaseException(message) {
            if (message === void 0) { message = '--'; }
            _super.call(this, message);
            this.message = message;
            this.stack = (new Error(message)).stack;
        }
        BaseException.prototype.toString = function () { return this.message; };
        return BaseException;
    }(Error));
    /**
     * An implementation of XHR that uses a template cache to avoid doing an actual
     * XHR.
     *
     * The template cache needs to be built and loaded into window.$templateCache
     * via a separate mechanism.
     */
    var CachedXHR = (function (_super) {
        __extends(CachedXHR, _super);
        function CachedXHR() {
            _super.call(this);
            this._cache = global$1.$templateCache;
            if (this._cache == null) {
                throw new BaseException('CachedXHR: Template cache was not found in $templateCache.');
            }
        }
        CachedXHR.prototype.get = function (url) {
            if (this._cache.hasOwnProperty(url)) {
                return PromiseWrapper.resolve(this._cache[url]);
            }
            else {
                return PromiseWrapper.reject('CachedXHR: Did not find cached template for ' + url, null);
            }
        };
        return CachedXHR;
    }(_angular_compiler.XHR));
    var XHRImpl = (function (_super) {
        __extends(XHRImpl, _super);
        function XHRImpl() {
            _super.apply(this, arguments);
        }
        XHRImpl.prototype.get = function (url) {
            var completer = PromiseWrapper.completer();
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'text';
            xhr.onload = function () {
                // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)
                var response = isPresent(xhr.response) ? xhr.response : xhr.responseText;
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = xhr.status === 1223 ? 204 : xhr.status;
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = response ? 200 : 0;
                }
                if (200 <= status && status <= 300) {
                    completer.resolve(response);
                }
                else {
                    completer.reject("Failed to load " + url, null);
                }
            };
            xhr.onerror = function () { completer.reject("Failed to load " + url, null); };
            xhr.send();
            return completer.promise;
        };
        return XHRImpl;
    }(_angular_compiler.XHR));
    /**
     * @experimental
     */
    var BROWSER_APP_COMPILER_PROVIDERS = [
        _angular_compiler.COMPILER_PROVIDERS, {
            provide: _angular_compiler.CompilerConfig,
            useFactory: function (platformDirectives, platformPipes) {
                return new _angular_compiler.CompilerConfig({ platformDirectives: platformDirectives, platformPipes: platformPipes });
            },
            deps: [_angular_core.PLATFORM_DIRECTIVES, _angular_core.PLATFORM_PIPES]
        },
        { provide: _angular_compiler.XHR, useClass: XHRImpl },
        { provide: _angular_core.PLATFORM_DIRECTIVES, useValue: _angular_common.COMMON_DIRECTIVES, multi: true },
        { provide: _angular_core.PLATFORM_PIPES, useValue: _angular_common.COMMON_PIPES, multi: true }
    ];
    /**
     * @experimental
     */
    var CACHED_TEMPLATE_PROVIDER = [{ provide: _angular_compiler.XHR, useClass: CachedXHR }];
    /**
     * Bootstrapping for Angular applications.
     *
     * You instantiate an Angular application by explicitly specifying a component to use
     * as the root component for your application via the `bootstrap()` method.
     *
     * ## Simple Example
     *
     * Assuming this `index.html`:
     *
     * ```html
     * <html>
     *   <!-- load Angular script tags here. -->
     *   <body>
     *     <my-app>loading...</my-app>
     *   </body>
     * </html>
     * ```
     *
     * An application is bootstrapped inside an existing browser DOM, typically `index.html`.
     * Unlike Angular 1, Angular 2 does not compile/process providers in `index.html`. This is
     * mainly for security reasons, as well as architectural changes in Angular 2. This means
     * that `index.html` can safely be processed using server-side technologies such as
     * providers. Bindings can thus use double-curly `{{ syntax }}` without collision from
     * Angular 2 component double-curly `{{ syntax }}`.
     *
     * We can use this script code:
     *
     * {@example core/ts/bootstrap/bootstrap.ts region='bootstrap'}
     *
     * When the app developer invokes `bootstrap()` with the root component `MyApp` as its
     * argument, Angular performs the following tasks:
     *
     *  1. It uses the component's `selector` property to locate the DOM element which needs
     *     to be upgraded into the angular component.
     *  2. It creates a new child injector (from the platform injector). Optionally, you can
     *     also override the injector configuration for an app by invoking `bootstrap` with the
     *     `componentInjectableBindings` argument.
     *  3. It creates a new `Zone` and connects it to the angular application's change detection
     *     domain instance.
     *  4. It creates an emulated or shadow DOM on the selected component's host element and loads the
     *     template into it.
     *  5. It instantiates the specified component.
     *  6. Finally, Angular performs change detection to apply the initial data providers for the
     *     application.
     *
     *
     * ## Bootstrapping Multiple Applications
     *
     * When working within a browser window, there are many singleton resources: cookies, title,
     * location, and others. Angular services that represent these resources must likewise be
     * shared across all Angular applications that occupy the same browser window. For this
     * reason, Angular creates exactly one global platform object which stores all shared
     * services, and each angular application injector has the platform injector as its parent.
     *
     * Each application has its own private injector as well. When there are multiple
     * applications on a page, Angular treats each application injector's services as private
     * to that application.
     *
     * ## API
     *
     * - `appComponentType`: The root component which should act as the application. This is
     *   a reference to a `Type` which is annotated with `@Component(...)`.
     * - `customProviders`: An additional set of providers that can be added to the
     *   app injector to override default injection behavior.
     *
     * Returns a `Promise` of {@link ComponentRef}.
     *
     * @experimental This api cannot be used with the offline compiler and thus is still subject to
     * change.
     */
    function bootstrap(appComponentType, customProviders) {
        reflector.reflectionCapabilities = new ReflectionCapabilities();
        var providers = [
            _angular_platformBrowser.BROWSER_APP_PROVIDERS, BROWSER_APP_COMPILER_PROVIDERS,
            isPresent(customProviders) ? customProviders : []
        ];
        var appInjector = _angular_core.ReflectiveInjector.resolveAndCreate(providers, _angular_platformBrowser.browserPlatform().injector);
        return _angular_core.coreLoadAndBootstrap(appComponentType, appInjector);
    }
    /**
     * @experimental
     */
    function bootstrapWorkerUi(workerScriptUri, customProviders) {
        var app = _angular_core.ReflectiveInjector.resolveAndCreate([
            _angular_platformBrowser.WORKER_UI_APPLICATION_PROVIDERS, BROWSER_APP_COMPILER_PROVIDERS,
            { provide: _angular_platformBrowser.WORKER_SCRIPT, useValue: workerScriptUri },
            isPresent(customProviders) ? customProviders : []
        ], _angular_platformBrowser.workerUiPlatform().injector);
        // Return a promise so that we keep the same semantics as Dart,
        // and we might want to wait for the app side to come up
        // in the future...
        return PromiseWrapper.resolve(app.get(_angular_core.ApplicationRef));
    }
    /**
     * @experimental
     */
    var WORKER_APP_COMPILER_PROVIDERS = [
        _angular_compiler.COMPILER_PROVIDERS, {
            provide: _angular_compiler.CompilerConfig,
            useFactory: function (platformDirectives, platformPipes) {
                return new _angular_compiler.CompilerConfig({ platformDirectives: platformDirectives, platformPipes: platformPipes });
            },
            deps: [_angular_core.PLATFORM_DIRECTIVES, _angular_core.PLATFORM_PIPES]
        },
        { provide: _angular_compiler.XHR, useClass: XHRImpl },
        { provide: _angular_core.PLATFORM_DIRECTIVES, useValue: _angular_common.COMMON_DIRECTIVES, multi: true },
        { provide: _angular_core.PLATFORM_PIPES, useValue: _angular_common.COMMON_PIPES, multi: true }
    ];
    /**
     * @experimental
     */
    function bootstrapWorkerApp(appComponentType, customProviders) {
        var appInjector = _angular_core.ReflectiveInjector.resolveAndCreate([
            _angular_platformBrowser.WORKER_APP_APPLICATION_PROVIDERS, WORKER_APP_COMPILER_PROVIDERS,
            isPresent(customProviders) ? customProviders : []
        ], _angular_platformBrowser.workerAppPlatform().injector);
        return _angular_core.coreLoadAndBootstrap(appComponentType, appInjector);
    }
    exports.BROWSER_APP_COMPILER_PROVIDERS = BROWSER_APP_COMPILER_PROVIDERS;
    exports.CACHED_TEMPLATE_PROVIDER = CACHED_TEMPLATE_PROVIDER;
    exports.bootstrap = bootstrap;
    exports.bootstrapWorkerUi = bootstrapWorkerUi;
    exports.bootstrapWorkerApp = bootstrapWorkerApp;
}));
/**
 * @license Angular 2.0.0-rc.4
 * (c) 2010-2016 Google, Inc. https://angular.io/
 * License: MIT
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Subject'), require('rxjs/observable/PromiseObservable'), require('rxjs/operator/toPromise'), require('rxjs/Observable')) :
        typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/Subject', 'rxjs/observable/PromiseObservable', 'rxjs/operator/toPromise', 'rxjs/Observable'], factory) :
            (factory((global.ng = global.ng || {}, global.ng.compiler = global.ng.compiler || {}), global.ng.core, global.Rx, global.Rx, global.Rx.Observable.prototype, global.Rx));
}(this, function (exports, _angular_core, rxjs_Subject, rxjs_observable_PromiseObservable, rxjs_operator_toPromise, rxjs_Observable) {
    'use strict';
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var globalScope;
    if (typeof window === 'undefined') {
        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
            globalScope = self;
        }
        else {
            globalScope = global;
        }
    }
    else {
        globalScope = window;
    }
    var IS_DART = false;
    // Need to declare a new variable for global here since TypeScript
    // exports the original value of the symbol.
    var global$1 = globalScope;
    /**
     * Runtime representation a type that a Component or other object is instances of.
     *
     * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
     * the `MyCustomComponent` constructor function.
     *
     * @stable
     */
    var Type = Function;
    // TODO: remove calls to assert in production environment
    // Note: Can't just export this and import in in other files
    // as `assert` is a reserved keyword in Dart
    global$1.assert = function assert(condition) {
        // TODO: to be fixed properly via #2830, noop for now
    };
    function isPresent(obj) {
        return obj !== undefined && obj !== null;
    }
    function isBlank(obj) {
        return obj === undefined || obj === null;
    }
    function isBoolean(obj) {
        return typeof obj === 'boolean';
    }
    function isNumber(obj) {
        return typeof obj === 'number';
    }
    function isString(obj) {
        return typeof obj === 'string';
    }
    function isStringMap(obj) {
        return typeof obj === 'object' && obj !== null;
    }
    var STRING_MAP_PROTO = Object.getPrototypeOf({});
    function isStrictStringMap(obj) {
        return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
    }
    function isArray(obj) {
        return Array.isArray(obj);
    }
    function noop() { }
    function stringify(token) {
        if (typeof token === 'string') {
            return token;
        }
        if (token === undefined || token === null) {
            return '' + token;
        }
        if (token.name) {
            return token.name;
        }
        if (token.overriddenName) {
            return token.overriddenName;
        }
        var res = token.toString();
        var newLineIndex = res.indexOf('\n');
        return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
    }
    // serialize / deserialize enum exist only for consistency with dart API
    // enums in typescript don't need to be serialized
    function serializeEnum(val) {
        return val;
    }
    function resolveEnumToken(enumValue, val) {
        return enumValue[val];
    }
    var StringWrapper = (function () {
        function StringWrapper() {
        }
        StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
        StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
        StringWrapper.split = function (s, regExp) { return s.split(regExp); };
        StringWrapper.equals = function (s, s2) { return s === s2; };
        StringWrapper.stripLeft = function (s, charVal) {
            if (s && s.length) {
                var pos = 0;
                for (var i = 0; i < s.length; i++) {
                    if (s[i] != charVal)
                        break;
                    pos++;
                }
                s = s.substring(pos);
            }
            return s;
        };
        StringWrapper.stripRight = function (s, charVal) {
            if (s && s.length) {
                var pos = s.length;
                for (var i = s.length - 1; i >= 0; i--) {
                    if (s[i] != charVal)
                        break;
                    pos--;
                }
                s = s.substring(0, pos);
            }
            return s;
        };
        StringWrapper.replace = function (s, from, replace) {
            return s.replace(from, replace);
        };
        StringWrapper.replaceAll = function (s, from, replace) {
            return s.replace(from, replace);
        };
        StringWrapper.slice = function (s, from, to) {
            if (from === void 0) { from = 0; }
            if (to === void 0) { to = null; }
            return s.slice(from, to === null ? undefined : to);
        };
        StringWrapper.replaceAllMapped = function (s, from, cb) {
            return s.replace(from, function () {
                var matches = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    matches[_i - 0] = arguments[_i];
                }
                // Remove offset & string from the result array
                matches.splice(-2, 2);
                // The callback receives match, p1, ..., pn
                return cb(matches);
            });
        };
        StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
        StringWrapper.compare = function (a, b) {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        };
        return StringWrapper;
    }());
    var StringJoiner = (function () {
        function StringJoiner(parts) {
            if (parts === void 0) { parts = []; }
            this.parts = parts;
        }
        StringJoiner.prototype.add = function (part) { this.parts.push(part); };
        StringJoiner.prototype.toString = function () { return this.parts.join(''); };
        return StringJoiner;
    }());
    var NumberParseError = (function (_super) {
        __extends(NumberParseError, _super);
        function NumberParseError(message) {
            _super.call(this);
            this.message = message;
        }
        NumberParseError.prototype.toString = function () { return this.message; };
        return NumberParseError;
    }(Error));
    var NumberWrapper = (function () {
        function NumberWrapper() {
        }
        NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
        NumberWrapper.equal = function (a, b) { return a === b; };
        NumberWrapper.parseIntAutoRadix = function (text) {
            var result = parseInt(text);
            if (isNaN(result)) {
                throw new NumberParseError('Invalid integer literal when parsing ' + text);
            }
            return result;
        };
        NumberWrapper.parseInt = function (text, radix) {
            if (radix == 10) {
                if (/^(\-|\+)?[0-9]+$/.test(text)) {
                    return parseInt(text, radix);
                }
            }
            else if (radix == 16) {
                if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
                    return parseInt(text, radix);
                }
            }
            else {
                var result = parseInt(text, radix);
                if (!isNaN(result)) {
                    return result;
                }
            }
            throw new NumberParseError('Invalid integer literal when parsing ' + text + ' in base ' + radix);
        };
        // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
        NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
        Object.defineProperty(NumberWrapper, "NaN", {
            get: function () { return NaN; },
            enumerable: true,
            configurable: true
        });
        NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
        NumberWrapper.isNaN = function (value) { return isNaN(value); };
        NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
        return NumberWrapper;
    }());
    var RegExpWrapper = (function () {
        function RegExpWrapper() {
        }
        RegExpWrapper.create = function (regExpStr, flags) {
            if (flags === void 0) { flags = ''; }
            flags = flags.replace(/g/g, '');
            return new global$1.RegExp(regExpStr, flags + 'g');
        };
        RegExpWrapper.firstMatch = function (regExp, input) {
            // Reset multimatch regex state
            regExp.lastIndex = 0;
            return regExp.exec(input);
        };
        RegExpWrapper.test = function (regExp, input) {
            regExp.lastIndex = 0;
            return regExp.test(input);
        };
        RegExpWrapper.matcher = function (regExp, input) {
            // Reset regex state for the case
            // someone did not loop over all matches
            // last time.
            regExp.lastIndex = 0;
            return { re: regExp, input: input };
        };
        RegExpWrapper.replaceAll = function (regExp, input, replace) {
            var c = regExp.exec(input);
            var res = '';
            regExp.lastIndex = 0;
            var prev = 0;
            while (c) {
                res += input.substring(prev, c.index);
                res += replace(c);
                prev = c.index + c[0].length;
                regExp.lastIndex = prev;
                c = regExp.exec(input);
            }
            res += input.substring(prev);
            return res;
        };
        return RegExpWrapper;
    }());
    var RegExpMatcherWrapper = (function () {
        function RegExpMatcherWrapper() {
        }
        RegExpMatcherWrapper.next = function (matcher) {
            return matcher.re.exec(matcher.input);
        };
        return RegExpMatcherWrapper;
    }());
    var FunctionWrapper = (function () {
        function FunctionWrapper() {
        }
        FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
        FunctionWrapper.bind = function (fn, scope) { return fn.bind(scope); };
        return FunctionWrapper;
    }());
    function normalizeBlank(obj) {
        return isBlank(obj) ? null : obj;
    }
    function normalizeBool(obj) {
        return isBlank(obj) ? false : obj;
    }
    function isJsObject(o) {
        return o !== null && (typeof o === 'function' || typeof o === 'object');
    }
    function evalExpression(sourceUrl, expr, declarations, vars) {
        var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
        var fnArgNames = [];
        var fnArgValues = [];
        for (var argName in vars) {
            fnArgNames.push(argName);
            fnArgValues.push(vars[argName]);
        }
        return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
    }
    function isPrimitive(obj) {
        return !isJsObject(obj);
    }
    function escape(s) {
        return global$1.encodeURI(s);
    }
    function escapeRegExp(s) {
        return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
    }
    /**
     * A segment of text within the template.
     */
    var TextAst = (function () {
        function TextAst(value, ngContentIndex, sourceSpan) {
            this.value = value;
            this.ngContentIndex = ngContentIndex;
            this.sourceSpan = sourceSpan;
        }
        TextAst.prototype.visit = function (visitor, context) { return visitor.visitText(this, context); };
        return TextAst;
    }());
    /**
     * A bound expression within the text of a template.
     */
    var BoundTextAst = (function () {
        function BoundTextAst(value, ngContentIndex, sourceSpan) {
            this.value = value;
            this.ngContentIndex = ngContentIndex;
            this.sourceSpan = sourceSpan;
        }
        BoundTextAst.prototype.visit = function (visitor, context) {
            return visitor.visitBoundText(this, context);
        };
        return BoundTextAst;
    }());
    /**
     * A plain attribute on an element.
     */
    var AttrAst = (function () {
        function AttrAst(name, value, sourceSpan) {
            this.name = name;
            this.value = value;
            this.sourceSpan = sourceSpan;
        }
        AttrAst.prototype.visit = function (visitor, context) { return visitor.visitAttr(this, context); };
        return AttrAst;
    }());
    /**
     * A binding for an element property (e.g. `[property]="expression"`).
     */
    var BoundElementPropertyAst = (function () {
        function BoundElementPropertyAst(name, type, securityContext, value, unit, sourceSpan) {
            this.name = name;
            this.type = type;
            this.securityContext = securityContext;
            this.value = value;
            this.unit = unit;
            this.sourceSpan = sourceSpan;
        }
        BoundElementPropertyAst.prototype.visit = function (visitor, context) {
            return visitor.visitElementProperty(this, context);
        };
        return BoundElementPropertyAst;
    }());
    /**
     * A binding for an element event (e.g. `(event)="handler()"`).
     */
    var BoundEventAst = (function () {
        function BoundEventAst(name, target, handler, sourceSpan) {
            this.name = name;
            this.target = target;
            this.handler = handler;
            this.sourceSpan = sourceSpan;
        }
        BoundEventAst.prototype.visit = function (visitor, context) {
            return visitor.visitEvent(this, context);
        };
        Object.defineProperty(BoundEventAst.prototype, "fullName", {
            get: function () {
                if (isPresent(this.target)) {
                    return this.target + ":" + this.name;
                }
                else {
                    return this.name;
                }
            },
            enumerable: true,
            configurable: true
        });
        return BoundEventAst;
    }());
    /**
     * A reference declaration on an element (e.g. `let someName="expression"`).
     */
    var ReferenceAst = (function () {
        function ReferenceAst(name, value, sourceSpan) {
            this.name = name;
            this.value = value;
            this.sourceSpan = sourceSpan;
        }
        ReferenceAst.prototype.visit = function (visitor, context) {
            return visitor.visitReference(this, context);
        };
        return ReferenceAst;
    }());
    /**
     * A variable declaration on a <template> (e.g. `var-someName="someLocalName"`).
     */
    var VariableAst = (function () {
        function VariableAst(name, value, sourceSpan) {
            this.name = name;
            this.value = value;
            this.sourceSpan = sourceSpan;
        }
        VariableAst.prototype.visit = function (visitor, context) {
            return visitor.visitVariable(this, context);
        };
        return VariableAst;
    }());
    /**
     * An element declaration in a template.
     */
    var ElementAst = (function () {
        function ElementAst(name, attrs, inputs, outputs, references, directives, providers, hasViewContainer, children, ngContentIndex, sourceSpan) {
            this.name = name;
            this.attrs = attrs;
            this.inputs = inputs;
            this.outputs = outputs;
            this.references = references;
            this.directives = directives;
            this.providers = providers;
            this.hasViewContainer = hasViewContainer;
            this.children = children;
            this.ngContentIndex = ngContentIndex;
            this.sourceSpan = sourceSpan;
        }
        ElementAst.prototype.visit = function (visitor, context) {
            return visitor.visitElement(this, context);
        };
        return ElementAst;
    }());
    /**
     * A `<template>` element included in an Angular template.
     */
    var EmbeddedTemplateAst = (function () {
        function EmbeddedTemplateAst(attrs, outputs, references, variables, directives, providers, hasViewContainer, children, ngContentIndex, sourceSpan) {
            this.attrs = attrs;
            this.outputs = outputs;
            this.references = references;
            this.variables = variables;
            this.directives = directives;
            this.providers = providers;
            this.hasViewContainer = hasViewContainer;
            this.children = children;
            this.ngContentIndex = ngContentIndex;
            this.sourceSpan = sourceSpan;
        }
        EmbeddedTemplateAst.prototype.visit = function (visitor, context) {
            return visitor.visitEmbeddedTemplate(this, context);
        };
        return EmbeddedTemplateAst;
    }());
    /**
     * A directive property with a bound value (e.g. `*ngIf="condition").
     */
    var BoundDirectivePropertyAst = (function () {
        function BoundDirectivePropertyAst(directiveName, templateName, value, sourceSpan) {
            this.directiveName = directiveName;
            this.templateName = templateName;
            this.value = value;
            this.sourceSpan = sourceSpan;
        }
        BoundDirectivePropertyAst.prototype.visit = function (visitor, context) {
            return visitor.visitDirectiveProperty(this, context);
        };
        return BoundDirectivePropertyAst;
    }());
    /**
     * A directive declared on an element.
     */
    var DirectiveAst = (function () {
        function DirectiveAst(directive, inputs, hostProperties, hostEvents, sourceSpan) {
            this.directive = directive;
            this.inputs = inputs;
            this.hostProperties = hostProperties;
            this.hostEvents = hostEvents;
            this.sourceSpan = sourceSpan;
        }
        DirectiveAst.prototype.visit = function (visitor, context) {
            return visitor.visitDirective(this, context);
        };
        return DirectiveAst;
    }());
    /**
     * A provider declared on an element
     */
    var ProviderAst = (function () {
        function ProviderAst(token, multiProvider, eager, providers, providerType, sourceSpan) {
            this.token = token;
            this.multiProvider = multiProvider;
            this.eager = eager;
            this.providers = providers;
            this.providerType = providerType;
            this.sourceSpan = sourceSpan;
        }
        ProviderAst.prototype.visit = function (visitor, context) {
            // No visit method in the visitor for now...
            return null;
        };
        return ProviderAst;
    }());
    exports.ProviderAstType;
    (function (ProviderAstType) {
        ProviderAstType[ProviderAstType["PublicService"] = 0] = "PublicService";
        ProviderAstType[ProviderAstType["PrivateService"] = 1] = "PrivateService";
        ProviderAstType[ProviderAstType["Component"] = 2] = "Component";
        ProviderAstType[ProviderAstType["Directive"] = 3] = "Directive";
        ProviderAstType[ProviderAstType["Builtin"] = 4] = "Builtin";
    })(exports.ProviderAstType || (exports.ProviderAstType = {}));
    /**
     * Position where content is to be projected (instance of `<ng-content>` in a template).
     */
    var NgContentAst = (function () {
        function NgContentAst(index, ngContentIndex, sourceSpan) {
            this.index = index;
            this.ngContentIndex = ngContentIndex;
            this.sourceSpan = sourceSpan;
        }
        NgContentAst.prototype.visit = function (visitor, context) {
            return visitor.visitNgContent(this, context);
        };
        return NgContentAst;
    }());
    /**
     * Enumeration of types of property bindings.
     */
    exports.PropertyBindingType;
    (function (PropertyBindingType) {
        /**
         * A normal binding to a property (e.g. `[property]="expression"`).
         */
        PropertyBindingType[PropertyBindingType["Property"] = 0] = "Property";
        /**
         * A binding to an element attribute (e.g. `[attr.name]="expression"`).
         */
        PropertyBindingType[PropertyBindingType["Attribute"] = 1] = "Attribute";
        /**
         * A binding to a CSS class (e.g. `[class.name]="condition"`).
         */
        PropertyBindingType[PropertyBindingType["Class"] = 2] = "Class";
        /**
         * A binding to a style rule (e.g. `[style.rule]="expression"`).
         */
        PropertyBindingType[PropertyBindingType["Style"] = 3] = "Style";
        /**
         * A binding to an animation reference (e.g. `[animate.key]="expression"`).
         */
        PropertyBindingType[PropertyBindingType["Animation"] = 4] = "Animation";
    })(exports.PropertyBindingType || (exports.PropertyBindingType = {}));
    /**
     * Visit every node in a list of {@link TemplateAst}s with the given {@link TemplateAstVisitor}.
     */
    function templateVisitAll(visitor, asts, context) {
        if (context === void 0) { context = null; }
        var result = [];
        asts.forEach(function (ast) {
            var astResult = ast.visit(visitor, context);
            if (isPresent(astResult)) {
                result.push(astResult);
            }
        });
        return result;
    }
    var isDefaultChangeDetectionStrategy = _angular_core.__core_private__.isDefaultChangeDetectionStrategy;
    var ChangeDetectorStatus = _angular_core.__core_private__.ChangeDetectorStatus;
    var CHANGE_DETECTION_STRATEGY_VALUES = _angular_core.__core_private__.CHANGE_DETECTION_STRATEGY_VALUES;
    var LifecycleHooks = _angular_core.__core_private__.LifecycleHooks;
    var LIFECYCLE_HOOKS_VALUES = _angular_core.__core_private__.LIFECYCLE_HOOKS_VALUES;
    var ReflectorReader = _angular_core.__core_private__.ReflectorReader;
    var AppElement = _angular_core.__core_private__.AppElement;
    var CodegenComponentFactoryResolver = _angular_core.__core_private__.CodegenComponentFactoryResolver;
    var AppView = _angular_core.__core_private__.AppView;
    var DebugAppView = _angular_core.__core_private__.DebugAppView;
    var ViewType = _angular_core.__core_private__.ViewType;
    var MAX_INTERPOLATION_VALUES = _angular_core.__core_private__.MAX_INTERPOLATION_VALUES;
    var checkBinding = _angular_core.__core_private__.checkBinding;
    var flattenNestedViewRenderNodes = _angular_core.__core_private__.flattenNestedViewRenderNodes;
    var interpolate = _angular_core.__core_private__.interpolate;
    var ViewUtils = _angular_core.__core_private__.ViewUtils;
    var VIEW_ENCAPSULATION_VALUES = _angular_core.__core_private__.VIEW_ENCAPSULATION_VALUES;
    var DebugContext = _angular_core.__core_private__.DebugContext;
    var StaticNodeDebugInfo = _angular_core.__core_private__.StaticNodeDebugInfo;
    var devModeEqual = _angular_core.__core_private__.devModeEqual;
    var uninitialized = _angular_core.__core_private__.uninitialized;
    var ValueUnwrapper = _angular_core.__core_private__.ValueUnwrapper;
    var TemplateRef_ = _angular_core.__core_private__.TemplateRef_;
    var SecurityContext = _angular_core.__core_private__.SecurityContext;
    var createProvider = _angular_core.__core_private__.createProvider;
    var isProviderLiteral = _angular_core.__core_private__.isProviderLiteral;
    var EMPTY_ARRAY = _angular_core.__core_private__.EMPTY_ARRAY;
    var EMPTY_MAP = _angular_core.__core_private__.EMPTY_MAP;
    var pureProxy1 = _angular_core.__core_private__.pureProxy1;
    var pureProxy2 = _angular_core.__core_private__.pureProxy2;
    var pureProxy3 = _angular_core.__core_private__.pureProxy3;
    var pureProxy4 = _angular_core.__core_private__.pureProxy4;
    var pureProxy5 = _angular_core.__core_private__.pureProxy5;
    var pureProxy6 = _angular_core.__core_private__.pureProxy6;
    var pureProxy7 = _angular_core.__core_private__.pureProxy7;
    var pureProxy8 = _angular_core.__core_private__.pureProxy8;
    var pureProxy9 = _angular_core.__core_private__.pureProxy9;
    var pureProxy10 = _angular_core.__core_private__.pureProxy10;
    var castByValue = _angular_core.__core_private__.castByValue;
    var Console = _angular_core.__core_private__.Console;
    var reflector = _angular_core.__core_private__.reflector;
    var NoOpAnimationPlayer_ = _angular_core.__core_private__.NoOpAnimationPlayer;
    var AnimationSequencePlayer_ = _angular_core.__core_private__.AnimationSequencePlayer;
    var AnimationGroupPlayer_ = _angular_core.__core_private__.AnimationGroupPlayer;
    var AnimationKeyframe_ = _angular_core.__core_private__.AnimationKeyframe;
    var AnimationStyles_ = _angular_core.__core_private__.AnimationStyles;
    var ANY_STATE = _angular_core.__core_private__.ANY_STATE;
    var DEFAULT_STATE = _angular_core.__core_private__.DEFAULT_STATE;
    var EMPTY_ANIMATION_STATE = _angular_core.__core_private__.EMPTY_STATE;
    var FILL_STYLE_FLAG = _angular_core.__core_private__.FILL_STYLE_FLAG;
    var impBalanceAnimationStyles = _angular_core.__core_private__.prepareFinalAnimationStyles;
    var impBalanceAnimationKeyframes = _angular_core.__core_private__.balanceAnimationKeyframes;
    var impClearStyles = _angular_core.__core_private__.clearStyles;
    var impCollectAndResolveStyles = _angular_core.__core_private__.collectAndResolveStyles;
    var impRenderStyles = _angular_core.__core_private__.renderStyles;
    var Map$1 = global$1.Map;
    var Set$1 = global$1.Set;
    // Safari and Internet Explorer do not support the iterable parameter to the
    // Map constructor.  We work around that by manually adding the items.
    var createMapFromPairs = (function () {
        try {
            if (new Map$1([[1, 2]]).size === 1) {
                return function createMapFromPairs(pairs) { return new Map$1(pairs); };
            }
        }
        catch (e) {
        }
        return function createMapAndPopulateFromPairs(pairs) {
            var map = new Map$1();
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                map.set(pair[0], pair[1]);
            }
            return map;
        };
    })();
    var createMapFromMap = (function () {
        try {
            if (new Map$1(new Map$1())) {
                return function createMapFromMap(m) { return new Map$1(m); };
            }
        }
        catch (e) {
        }
        return function createMapAndPopulateFromMap(m) {
            var map = new Map$1();
            m.forEach(function (v, k) { map.set(k, v); });
            return map;
        };
    })();
    var _clearValues = (function () {
        if ((new Map$1()).keys().next) {
            return function _clearValues(m) {
                var keyIterator = m.keys();
                var k;
                while (!((k = keyIterator.next()).done)) {
                    m.set(k.value, null);
                }
            };
        }
        else {
            return function _clearValuesWithForeEach(m) {
                m.forEach(function (v, k) { m.set(k, null); });
            };
        }
    })();
    // Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
    // TODO(mlaval): remove the work around once we have a working polyfill of Array.from
    var _arrayFromMap = (function () {
        try {
            if ((new Map$1()).values().next) {
                return function createArrayFromMap(m, getValues) {
                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
                };
            }
        }
        catch (e) {
        }
        return function createArrayFromMapWithForeach(m, getValues) {
            var res = ListWrapper.createFixedSize(m.size), i = 0;
            m.forEach(function (v, k) {
                res[i] = getValues ? v : k;
                i++;
            });
            return res;
        };
    })();
    var MapWrapper = (function () {
        function MapWrapper() {
        }
        MapWrapper.clone = function (m) { return createMapFromMap(m); };
        MapWrapper.createFromStringMap = function (stringMap) {
            var result = new Map$1();
            for (var prop in stringMap) {
                result.set(prop, stringMap[prop]);
            }
            return result;
        };
        MapWrapper.toStringMap = function (m) {
            var r = {};
            m.forEach(function (v, k) { return r[k] = v; });
            return r;
        };
        MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
        MapWrapper.clearValues = function (m) { _clearValues(m); };
        MapWrapper.iterable = function (m) { return m; };
        MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
        MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
        return MapWrapper;
    }());
    /**
     * Wraps Javascript Objects
     */
    var StringMapWrapper = (function () {
        function StringMapWrapper() {
        }
        StringMapWrapper.create = function () {
            // Note: We are not using Object.create(null) here due to
            // performance!
            // http://jsperf.com/ng2-object-create-null
            return {};
        };
        StringMapWrapper.contains = function (map, key) {
            return map.hasOwnProperty(key);
        };
        StringMapWrapper.get = function (map, key) {
            return map.hasOwnProperty(key) ? map[key] : undefined;
        };
        StringMapWrapper.set = function (map, key, value) { map[key] = value; };
        StringMapWrapper.keys = function (map) { return Object.keys(map); };
        StringMapWrapper.values = function (map) {
            return Object.keys(map).reduce(function (r, a) {
                r.push(map[a]);
                return r;
            }, []);
        };
        StringMapWrapper.isEmpty = function (map) {
            for (var prop in map) {
                return false;
            }
            return true;
        };
        StringMapWrapper.delete = function (map, key) { delete map[key]; };
        StringMapWrapper.forEach = function (map, callback) {
            for (var prop in map) {
                if (map.hasOwnProperty(prop)) {
                    callback(map[prop], prop);
                }
            }
        };
        StringMapWrapper.merge = function (m1, m2) {
            var m = {};
            for (var attr in m1) {
                if (m1.hasOwnProperty(attr)) {
                    m[attr] = m1[attr];
                }
            }
            for (var attr in m2) {
                if (m2.hasOwnProperty(attr)) {
                    m[attr] = m2[attr];
                }
            }
            return m;
        };
        StringMapWrapper.equals = function (m1, m2) {
            var k1 = Object.keys(m1);
            var k2 = Object.keys(m2);
            if (k1.length != k2.length) {
                return false;
            }
            var key;
            for (var i = 0; i < k1.length; i++) {
                key = k1[i];
                if (m1[key] !== m2[key]) {
                    return false;
                }
            }
            return true;
        };
        return StringMapWrapper;
    }());
    var ListWrapper = (function () {
        function ListWrapper() {
        }
        // JS has no way to express a statically fixed size list, but dart does so we
        // keep both methods.
        ListWrapper.createFixedSize = function (size) { return new Array(size); };
        ListWrapper.createGrowableSize = function (size) { return new Array(size); };
        ListWrapper.clone = function (array) { return array.slice(0); };
        ListWrapper.forEachWithIndex = function (array, fn) {
            for (var i = 0; i < array.length; i++) {
                fn(array[i], i);
            }
        };
        ListWrapper.first = function (array) {
            if (!array)
                return null;
            return array[0];
        };
        ListWrapper.last = function (array) {
            if (!array || array.length == 0)
                return null;
            return array[array.length - 1];
        };
        ListWrapper.indexOf = function (array, value, startIndex) {
            if (startIndex === void 0) { startIndex = 0; }
            return array.indexOf(value, startIndex);
        };
        ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
        ListWrapper.reversed = function (array) {
            var a = ListWrapper.clone(array);
            return a.reverse();
        };
        ListWrapper.concat = function (a, b) { return a.concat(b); };
        ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
        ListWrapper.removeAt = function (list, index) {
            var res = list[index];
            list.splice(index, 1);
            return res;
        };
        ListWrapper.removeAll = function (list, items) {
            for (var i = 0; i < items.length; ++i) {
                var index = list.indexOf(items[i]);
                list.splice(index, 1);
            }
        };
        ListWrapper.remove = function (list, el) {
            var index = list.indexOf(el);
            if (index > -1) {
                list.splice(index, 1);
                return true;
            }
            return false;
        };
        ListWrapper.clear = function (list) { list.length = 0; };
        ListWrapper.isEmpty = function (list) { return list.length == 0; };
        ListWrapper.fill = function (list, value, start, end) {
            if (start === void 0) { start = 0; }
            if (end === void 0) { end = null; }
            list.fill(value, start, end === null ? list.length : end);
        };
        ListWrapper.equals = function (a, b) {
            if (a.length != b.length)
                return false;
            for (var i = 0; i < a.length; ++i) {
                if (a[i] !== b[i])
                    return false;
            }
            return true;
        };
        ListWrapper.slice = function (l, from, to) {
            if (from === void 0) { from = 0; }
            if (to === void 0) { to = null; }
            return l.slice(from, to === null ? undefined : to);
        };
        ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
        ListWrapper.sort = function (l, compareFn) {
            if (isPresent(compareFn)) {
                l.sort(compareFn);
            }
            else {
                l.sort();
            }
        };
        ListWrapper.toString = function (l) { return l.toString(); };
        ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
        ListWrapper.maximum = function (list, predicate) {
            if (list.length == 0) {
                return null;
            }
            var solution = null;
            var maxValue = -Infinity;
            for (var index = 0; index < list.length; index++) {
                var candidate = list[index];
                if (isBlank(candidate)) {
                    continue;
                }
                var candidateValue = predicate(candidate);
                if (candidateValue > maxValue) {
                    solution = candidate;
                    maxValue = candidateValue;
                }
            }
            return solution;
        };
        ListWrapper.flatten = function (list) {
            var target = [];
            _flattenArray(list, target);
            return target;
        };
        ListWrapper.addAll = function (list, source) {
            for (var i = 0; i < source.length; i++) {
                list.push(source[i]);
            }
        };
        return ListWrapper;
    }());
    function _flattenArray(source, target) {
        if (isPresent(source)) {
            for (var i = 0; i < source.length; i++) {
                var item = source[i];
                if (isArray(item)) {
                    _flattenArray(item, target);
                }
                else {
                    target.push(item);
                }
            }
        }
        return target;
    }
    // Safari and Internet Explorer do not support the iterable parameter to the
    // Set constructor.  We work around that by manually adding the items.
    var createSetFromList = (function () {
        var test = new Set$1([1, 2, 3]);
        if (test.size === 3) {
            return function createSetFromList(lst) { return new Set$1(lst); };
        }
        else {
            return function createSetAndPopulateFromList(lst) {
                var res = new Set$1(lst);
                if (res.size !== lst.length) {
                    for (var i = 0; i < lst.length; i++) {
                        res.add(lst[i]);
                    }
                }
                return res;
            };
        }
    })();
    var SetWrapper = (function () {
        function SetWrapper() {
        }
        SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
        SetWrapper.has = function (s, key) { return s.has(key); };
        SetWrapper.delete = function (m, k) { m.delete(k); };
        return SetWrapper;
    }());
    /**
     * @stable
     */
    var BaseException$1 = (function (_super) {
        __extends(BaseException$1, _super);
        function BaseException$1(message) {
            if (message === void 0) { message = '--'; }
            _super.call(this, message);
            this.message = message;
            this.stack = (new Error(message)).stack;
        }
        BaseException$1.prototype.toString = function () { return this.message; };
        return BaseException$1;
    }(Error));
    function unimplemented() {
        throw new BaseException$1('unimplemented');
    }
    var AST = (function () {
        function AST() {
        }
        AST.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return null;
        };
        AST.prototype.toString = function () { return 'AST'; };
        return AST;
    }());
    /**
     * Represents a quoted expression of the form:
     *
     * quote = prefix `:` uninterpretedExpression
     * prefix = identifier
     * uninterpretedExpression = arbitrary string
     *
     * A quoted expression is meant to be pre-processed by an AST transformer that
     * converts it into another AST that no longer contains quoted expressions.
     * It is meant to allow third-party developers to extend Angular template
     * expression language. The `uninterpretedExpression` part of the quote is
     * therefore not interpreted by the Angular's own expression parser.
     */
    var Quote = (function (_super) {
        __extends(Quote, _super);
        function Quote(prefix, uninterpretedExpression, location) {
            _super.call(this);
            this.prefix = prefix;
            this.uninterpretedExpression = uninterpretedExpression;
            this.location = location;
        }
        Quote.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitQuote(this, context);
        };
        Quote.prototype.toString = function () { return 'Quote'; };
        return Quote;
    }(AST));
    var EmptyExpr = (function (_super) {
        __extends(EmptyExpr, _super);
        function EmptyExpr() {
            _super.apply(this, arguments);
        }
        EmptyExpr.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            // do nothing
        };
        return EmptyExpr;
    }(AST));
    var ImplicitReceiver = (function (_super) {
        __extends(ImplicitReceiver, _super);
        function ImplicitReceiver() {
            _super.apply(this, arguments);
        }
        ImplicitReceiver.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitImplicitReceiver(this, context);
        };
        return ImplicitReceiver;
    }(AST));
    /**
     * Multiple expressions separated by a semicolon.
     */
    var Chain = (function (_super) {
        __extends(Chain, _super);
        function Chain(expressions) {
            _super.call(this);
            this.expressions = expressions;
        }
        Chain.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitChain(this, context);
        };
        return Chain;
    }(AST));
    var Conditional = (function (_super) {
        __extends(Conditional, _super);
        function Conditional(condition, trueExp, falseExp) {
            _super.call(this);
            this.condition = condition;
            this.trueExp = trueExp;
            this.falseExp = falseExp;
        }
        Conditional.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitConditional(this, context);
        };
        return Conditional;
    }(AST));
    var PropertyRead = (function (_super) {
        __extends(PropertyRead, _super);
        function PropertyRead(receiver, name) {
            _super.call(this);
            this.receiver = receiver;
            this.name = name;
        }
        PropertyRead.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitPropertyRead(this, context);
        };
        return PropertyRead;
    }(AST));
    var PropertyWrite = (function (_super) {
        __extends(PropertyWrite, _super);
        function PropertyWrite(receiver, name, value) {
            _super.call(this);
            this.receiver = receiver;
            this.name = name;
            this.value = value;
        }
        PropertyWrite.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitPropertyWrite(this, context);
        };
        return PropertyWrite;
    }(AST));
    var SafePropertyRead = (function (_super) {
        __extends(SafePropertyRead, _super);
        function SafePropertyRead(receiver, name) {
            _super.call(this);
            this.receiver = receiver;
            this.name = name;
        }
        SafePropertyRead.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitSafePropertyRead(this, context);
        };
        return SafePropertyRead;
    }(AST));
    var KeyedRead = (function (_super) {
        __extends(KeyedRead, _super);
        function KeyedRead(obj, key) {
            _super.call(this);
            this.obj = obj;
            this.key = key;
        }
        KeyedRead.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitKeyedRead(this, context);
        };
        return KeyedRead;
    }(AST));
    var KeyedWrite = (function (_super) {
        __extends(KeyedWrite, _super);
        function KeyedWrite(obj, key, value) {
            _super.call(this);
            this.obj = obj;
            this.key = key;
            this.value = value;
        }
        KeyedWrite.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitKeyedWrite(this, context);
        };
        return KeyedWrite;
    }(AST));
    var BindingPipe = (function (_super) {
        __extends(BindingPipe, _super);
        function BindingPipe(exp, name, args) {
            _super.call(this);
            this.exp = exp;
            this.name = name;
            this.args = args;
        }
        BindingPipe.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitPipe(this, context);
        };
        return BindingPipe;
    }(AST));
    var LiteralPrimitive = (function (_super) {
        __extends(LiteralPrimitive, _super);
        function LiteralPrimitive(value) {
            _super.call(this);
            this.value = value;
        }
        LiteralPrimitive.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitLiteralPrimitive(this, context);
        };
        return LiteralPrimitive;
    }(AST));
    var LiteralArray = (function (_super) {
        __extends(LiteralArray, _super);
        function LiteralArray(expressions) {
            _super.call(this);
            this.expressions = expressions;
        }
        LiteralArray.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitLiteralArray(this, context);
        };
        return LiteralArray;
    }(AST));
    var LiteralMap = (function (_super) {
        __extends(LiteralMap, _super);
        function LiteralMap(keys, values) {
            _super.call(this);
            this.keys = keys;
            this.values = values;
        }
        LiteralMap.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitLiteralMap(this, context);
        };
        return LiteralMap;
    }(AST));
    var Interpolation = (function (_super) {
        __extends(Interpolation, _super);
        function Interpolation(strings, expressions) {
            _super.call(this);
            this.strings = strings;
            this.expressions = expressions;
        }
        Interpolation.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitInterpolation(this, context);
        };
        return Interpolation;
    }(AST));
    var Binary = (function (_super) {
        __extends(Binary, _super);
        function Binary(operation, left, right) {
            _super.call(this);
            this.operation = operation;
            this.left = left;
            this.right = right;
        }
        Binary.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitBinary(this, context);
        };
        return Binary;
    }(AST));
    var PrefixNot = (function (_super) {
        __extends(PrefixNot, _super);
        function PrefixNot(expression) {
            _super.call(this);
            this.expression = expression;
        }
        PrefixNot.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitPrefixNot(this, context);
        };
        return PrefixNot;
    }(AST));
    var MethodCall = (function (_super) {
        __extends(MethodCall, _super);
        function MethodCall(receiver, name, args) {
            _super.call(this);
            this.receiver = receiver;
            this.name = name;
            this.args = args;
        }
        MethodCall.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitMethodCall(this, context);
        };
        return MethodCall;
    }(AST));
    var SafeMethodCall = (function (_super) {
        __extends(SafeMethodCall, _super);
        function SafeMethodCall(receiver, name, args) {
            _super.call(this);
            this.receiver = receiver;
            this.name = name;
            this.args = args;
        }
        SafeMethodCall.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitSafeMethodCall(this, context);
        };
        return SafeMethodCall;
    }(AST));
    var FunctionCall = (function (_super) {
        __extends(FunctionCall, _super);
        function FunctionCall(target, args) {
            _super.call(this);
            this.target = target;
            this.args = args;
        }
        FunctionCall.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return visitor.visitFunctionCall(this, context);
        };
        return FunctionCall;
    }(AST));
    var ASTWithSource = (function (_super) {
        __extends(ASTWithSource, _super);
        function ASTWithSource(ast, source, location) {
            _super.call(this);
            this.ast = ast;
            this.source = source;
            this.location = location;
        }
        ASTWithSource.prototype.visit = function (visitor, context) {
            if (context === void 0) { context = null; }
            return this.ast.visit(visitor, context);
        };
        ASTWithSource.prototype.toString = function () { return this.source + " in " + this.location; };
        return ASTWithSource;
    }(AST));
    var TemplateBinding = (function () {
        function TemplateBinding(key, keyIsVar, name, expression) {
            this.key = key;
            this.keyIsVar = keyIsVar;
            this.name = name;
            this.expression = expression;
        }
        return TemplateBinding;
    }());
    var RecursiveAstVisitor = (function () {
        function RecursiveAstVisitor() {
        }
        RecursiveAstVisitor.prototype.visitBinary = function (ast, context) {
            ast.left.visit(this);
            ast.right.visit(this);
            return null;
        };
        RecursiveAstVisitor.prototype.visitChain = function (ast, context) { return this.visitAll(ast.expressions, context); };
        RecursiveAstVisitor.prototype.visitConditional = function (ast, context) {
            ast.condition.visit(this);
            ast.trueExp.visit(this);
            ast.falseExp.visit(this);
            return null;
        };
        RecursiveAstVisitor.prototype.visitPipe = function (ast, context) {
            ast.exp.visit(this);
            this.visitAll(ast.args, context);
            return null;
        };
        RecursiveAstVisitor.prototype.visitFunctionCall = function (ast, context) {
            ast.target.visit(this);
            this.visitAll(ast.args, context);
            return null;
        };
        RecursiveAstVisitor.prototype.visitImplicitReceiver = function (ast, context) { return null; };
        RecursiveAstVisitor.prototype.visitInterpolation = function (ast, context) {
            return this.visitAll(ast.expressions, context);
        };
        RecursiveAstVisitor.prototype.visitKeyedRead = function (ast, context) {
            ast.obj.visit(this);
            ast.key.visit(this);
            return null;
        };
        RecursiveAstVisitor.prototype.visitKeyedWrite = function (ast, context) {
            ast.obj.visit(this);
            ast.key.visit(this);
            ast.value.visit(this);
            return null;
        };
        RecursiveAstVisitor.prototype.visitLiteralArray = function (ast, context) {
            return this.visitAll(ast.expressions, context);
        };
        RecursiveAstVisitor.prototype.visitLiteralMap = function (ast, context) { return this.visitAll(ast.values, context); };
        RecursiveAstVisitor.prototype.visitLiteralPrimitive = function (ast, context) { return null; };
        RecursiveAstVisitor.prototype.visitMethodCall = function (ast, context) {
            ast.receiver.visit(this);
            return this.visitAll(ast.args, context);
        };
        RecursiveAstVisitor.prototype.visitPrefixNot = function (ast, context) {
            ast.expression.visit(this);
            return null;
        };
        RecursiveAstVisitor.prototype.visitPropertyRead = function (ast, context) {
            ast.receiver.visit(this);
            return null;
        };
        RecursiveAstVisitor.prototype.visitPropertyWrite = function (ast, context) {
            ast.receiver.visit(this);
            ast.value.visit(this);
            return null;
        };
        RecursiveAstVisitor.prototype.visitSafePropertyRead = function (ast, context) {
            ast.receiver.visit(this);
            return null;
        };
        RecursiveAstVisitor.prototype.visitSafeMethodCall = function (ast, context) {
            ast.receiver.visit(this);
            return this.visitAll(ast.args, context);
        };
        RecursiveAstVisitor.prototype.visitAll = function (asts, context) {
            var _this = this;
            asts.forEach(function (ast) { return ast.visit(_this, context); });
            return null;
        };
        RecursiveAstVisitor.prototype.visitQuote = function (ast, context) { return null; };
        return RecursiveAstVisitor;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var $EOF = 0;
    var $TAB = 9;
    var $LF = 10;
    var $VTAB = 11;
    var $FF = 12;
    var $CR = 13;
    var $SPACE = 32;
    var $BANG = 33;
    var $DQ = 34;
    var $HASH = 35;
    var $$ = 36;
    var $PERCENT = 37;
    var $AMPERSAND = 38;
    var $SQ = 39;
    var $LPAREN = 40;
    var $RPAREN = 41;
    var $STAR = 42;
    var $PLUS = 43;
    var $COMMA = 44;
    var $MINUS = 45;
    var $PERIOD = 46;
    var $SLASH = 47;
    var $COLON = 58;
    var $SEMICOLON = 59;
    var $LT = 60;
    var $EQ = 61;
    var $GT = 62;
    var $QUESTION = 63;
    var $0 = 48;
    var $9 = 57;
    var $A = 65;
    var $E = 69;
    var $F = 70;
    var $X = 88;
    var $Z = 90;
    var $LBRACKET = 91;
    var $BACKSLASH = 92;
    var $RBRACKET = 93;
    var $CARET = 94;
    var $_ = 95;
    var $a = 97;
    var $e = 101;
    var $f = 102;
    var $n = 110;
    var $r = 114;
    var $t = 116;
    var $u = 117;
    var $v = 118;
    var $x = 120;
    var $z = 122;
    var $LBRACE = 123;
    var $BAR = 124;
    var $RBRACE = 125;
    var $NBSP = 160;
    var $BT = 96;
    function isWhitespace(code) {
        return (code >= $TAB && code <= $SPACE) || (code == $NBSP);
    }
    function isDigit(code) {
        return $0 <= code && code <= $9;
    }
    function isAsciiLetter(code) {
        return code >= $a && code <= $z || code >= $A && code <= $Z;
    }
    function isAsciiHexDigit(code) {
        return code >= $a && code <= $f || code >= $A && code <= $F || isDigit(code);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var DEFAULT_INTERPOLATION_CONFIG = {
        start: '{{',
        end: '}}'
    };
    var TokenType;
    (function (TokenType) {
        TokenType[TokenType["Character"] = 0] = "Character";
        TokenType[TokenType["Identifier"] = 1] = "Identifier";
        TokenType[TokenType["Keyword"] = 2] = "Keyword";
        TokenType[TokenType["String"] = 3] = "String";
        TokenType[TokenType["Operator"] = 4] = "Operator";
        TokenType[TokenType["Number"] = 5] = "Number";
    })(TokenType || (TokenType = {}));
    var KEYWORDS = ['var', 'let', 'null', 'undefined', 'true', 'false', 'if', 'else'];
    var Lexer = (function () {
        function Lexer() {
        }
        Lexer.prototype.tokenize = function (text) {
            var scanner = new _Scanner(text);
            var tokens = [];
            var token = scanner.scanToken();
            while (token != null) {
                tokens.push(token);
                token = scanner.scanToken();
            }
            return tokens;
        };
        return Lexer;
    }());
    /** @nocollapse */
    Lexer.decorators = [
        { type: _angular_core.Injectable },
    ];
    var Token = (function () {
        function Token(index, type, numValue, strValue) {
            this.index = index;
            this.type = type;
            this.numValue = numValue;
            this.strValue = strValue;
        }
        Token.prototype.isCharacter = function (code) {
            return (this.type == TokenType.Character && this.numValue == code);
        };
        Token.prototype.isNumber = function () { return (this.type == TokenType.Number); };
        Token.prototype.isString = function () { return (this.type == TokenType.String); };
        Token.prototype.isOperator = function (operater) {
            return (this.type == TokenType.Operator && this.strValue == operater);
        };
        Token.prototype.isIdentifier = function () { return (this.type == TokenType.Identifier); };
        Token.prototype.isKeyword = function () { return (this.type == TokenType.Keyword); };
        Token.prototype.isKeywordDeprecatedVar = function () {
            return (this.type == TokenType.Keyword && this.strValue == 'var');
        };
        Token.prototype.isKeywordLet = function () { return (this.type == TokenType.Keyword && this.strValue == 'let'); };
        Token.prototype.isKeywordNull = function () { return (this.type == TokenType.Keyword && this.strValue == 'null'); };
        Token.prototype.isKeywordUndefined = function () {
            return (this.type == TokenType.Keyword && this.strValue == 'undefined');
        };
        Token.prototype.isKeywordTrue = function () { return (this.type == TokenType.Keyword && this.strValue == 'true'); };
        Token.prototype.isKeywordFalse = function () { return (this.type == TokenType.Keyword && this.strValue == 'false'); };
        Token.prototype.toNumber = function () {
            // -1 instead of NULL ok?
            return (this.type == TokenType.Number) ? this.numValue : -1;
        };
        Token.prototype.toString = function () {
            switch (this.type) {
                case TokenType.Character:
                case TokenType.Identifier:
                case TokenType.Keyword:
                case TokenType.Operator:
                case TokenType.String:
                    return this.strValue;
                case TokenType.Number:
                    return this.numValue.toString();
                default:
                    return null;
            }
        };
        return Token;
    }());
    function newCharacterToken(index, code) {
        return new Token(index, TokenType.Character, code, StringWrapper.fromCharCode(code));
    }
    function newIdentifierToken(index, text) {
        return new Token(index, TokenType.Identifier, 0, text);
    }
    function newKeywordToken(index, text) {
        return new Token(index, TokenType.Keyword, 0, text);
    }
    function newOperatorToken(index, text) {
        return new Token(index, TokenType.Operator, 0, text);
    }
    function newStringToken(index, text) {
        return new Token(index, TokenType.String, 0, text);
    }
    function newNumberToken(index, n) {
        return new Token(index, TokenType.Number, n, '');
    }
    var EOF = new Token(-1, TokenType.Character, 0, '');
    var ScannerError = (function (_super) {
        __extends(ScannerError, _super);
        function ScannerError(message) {
            _super.call(this);
            this.message = message;
        }
        ScannerError.prototype.toString = function () { return this.message; };
        return ScannerError;
    }(BaseException$1));
    var _Scanner = (function () {
        function _Scanner(input) {
            this.input = input;
            this.peek = 0;
            this.index = -1;
            this.length = input.length;
            this.advance();
        }
        _Scanner.prototype.advance = function () {
            this.peek =
                ++this.index >= this.length ? $EOF : StringWrapper.charCodeAt(this.input, this.index);
        };
        _Scanner.prototype.scanToken = function () {
            var input = this.input, length = this.length, peek = this.peek, index = this.index;
            // Skip whitespace.
            while (peek <= $SPACE) {
                if (++index >= length) {
                    peek = $EOF;
                    break;
                }
                else {
                    peek = StringWrapper.charCodeAt(input, index);
                }
            }
            this.peek = peek;
            this.index = index;
            if (index >= length) {
                return null;
            }
            // Handle identifiers and numbers.
            if (isIdentifierStart(peek))
                return this.scanIdentifier();
            if (isDigit(peek))
                return this.scanNumber(index);
            var start = index;
            switch (peek) {
                case $PERIOD:
                    this.advance();
                    return isDigit(this.peek) ? this.scanNumber(start) :
                        newCharacterToken(start, $PERIOD);
                case $LPAREN:
                case $RPAREN:
                case $LBRACE:
                case $RBRACE:
                case $LBRACKET:
                case $RBRACKET:
                case $COMMA:
                case $COLON:
                case $SEMICOLON:
                    return this.scanCharacter(start, peek);
                case $SQ:
                case $DQ:
                    return this.scanString();
                case $HASH:
                case $PLUS:
                case $MINUS:
                case $STAR:
                case $SLASH:
                case $PERCENT:
                case $CARET:
                    return this.scanOperator(start, StringWrapper.fromCharCode(peek));
                case $QUESTION:
                    return this.scanComplexOperator(start, '?', $PERIOD, '.');
                case $LT:
                case $GT:
                    return this.scanComplexOperator(start, StringWrapper.fromCharCode(peek), $EQ, '=');
                case $BANG:
                case $EQ:
                    return this.scanComplexOperator(start, StringWrapper.fromCharCode(peek), $EQ, '=', $EQ, '=');
                case $AMPERSAND:
                    return this.scanComplexOperator(start, '&', $AMPERSAND, '&');
                case $BAR:
                    return this.scanComplexOperator(start, '|', $BAR, '|');
                case $NBSP:
                    while (isWhitespace(this.peek))
                        this.advance();
                    return this.scanToken();
            }
            this.error("Unexpected character [" + StringWrapper.fromCharCode(peek) + "]", 0);
            return null;
        };
        _Scanner.prototype.scanCharacter = function (start, code) {
            this.advance();
            return newCharacterToken(start, code);
        };
        _Scanner.prototype.scanOperator = function (start, str) {
            this.advance();
            return newOperatorToken(start, str);
        };
        /**
         * Tokenize a 2/3 char long operator
         *
         * @param start start index in the expression
         * @param one first symbol (always part of the operator)
         * @param twoCode code point for the second symbol
         * @param two second symbol (part of the operator when the second code point matches)
         * @param threeCode code point for the third symbol
         * @param three third symbol (part of the operator when provided and matches source expression)
         * @returns {Token}
         */
        _Scanner.prototype.scanComplexOperator = function (start, one, twoCode, two, threeCode, three) {
            this.advance();
            var str = one;
            if (this.peek == twoCode) {
                this.advance();
                str += two;
            }
            if (isPresent(threeCode) && this.peek == threeCode) {
                this.advance();
                str += three;
            }
            return newOperatorToken(start, str);
        };
        _Scanner.prototype.scanIdentifier = function () {
            var start = this.index;
            this.advance();
            while (isIdentifierPart(this.peek))
                this.advance();
            var str = this.input.substring(start, this.index);
            return KEYWORDS.indexOf(str) > -1 ? newKeywordToken(start, str) :
                newIdentifierToken(start, str);
        };
        _Scanner.prototype.scanNu       },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgFor.prototype, "ngForTemplate", {
            set: function (value) {
                if (isPresent(value)) {
                    this._templateRef = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgFor.prototype, "ngForTrackBy", {
            set: function (value) { this._ngForTrackBy = value; },
            enumerable: true,
            configurable: true
        });
        NgFor.prototype.ngDoCheck = function () {
            if (isPresent(this._differ)) {
                var changes = this._differ.diff(this._ngForOf);
                if (isPresent(changes))
                    this._applyChanges(changes);
            }
        };
        NgFor.prototype._applyChanges = function (changes) {
            var _this = this;
            // TODO(rado): check if change detection can produce a change record that is
            // easier to consume than current.
            var recordViewTuples = [];
            changes.forEachRemovedItem(function (removedRecord) { return recordViewTuples.push(new RecordViewTuple(removedRecord, null)); });
            changes.forEachMovedItem(function (movedRecord) { return recordViewTuples.push(new RecordViewTuple(movedRecord, null)); });
            var insertTuples = this._bulkRemove(recordViewTuples);
            changes.forEachAddedItem(function (addedRecord) { return insertTuples.push(new RecordViewTuple(addedRecord, null)); });
            this._bulkInsert(insertTuples);
            for (var i = 0; i < insertTuples.length; i++) {
                this._perViewChange(insertTuples[i].view, insertTuples[i].record);
            }
            for (var i = 0, ilen = this._viewContainer.length; i < ilen; i++) {
                var viewRef = this._viewContainer.get(i);
                viewRef.context.index = i;
                viewRef.context.count = ilen;
            }
            changes.forEachIdentityChange(function (record /** TODO #9100 */) {
                var viewRef = _this._viewContainer.get(record.currentIndex);
                viewRef.context.$implicit = record.item;
            });
        };
        NgFor.prototype._perViewChange = function (view, record) {
            view.context.$implicit = record.item;
        };
        NgFor.prototype._bulkRemove = function (tuples) {
            tuples.sort(function (a, b) { return a.record.previousIndex - b.record.previousIndex; });
            var movedTuples = [];
            for (var i = tuples.length - 1; i >= 0; i--) {
                var tuple = tuples[i];
                // separate moved views from removed views.
                if (isPresent(tuple.record.currentIndex)) {
                    tuple.view =
                        this._viewContainer.detach(tuple.record.previousIndex);
                    movedTuples.push(tuple);
                }
                else {
                    this._viewContainer.remove(tuple.record.previousIndex);
                }
            }
            return movedTuples;
        };
        NgFor.prototype._bulkInsert = function (tuples) {
            tuples.sort(function (a, b) { return a.record.currentIndex - b.record.currentIndex; });
            for (var i = 0; i < tuples.length; i++) {
                var tuple = tuples[i];
                if (isPresent(tuple.view)) {
                    this._viewContainer.insert(tuple.view, tuple.record.currentIndex);
                }
                else {
                    tuple.view = this._viewContainer.createEmbeddedView(this._templateRef, new NgForRow(null, null, null), tuple.record.currentIndex);
                }
            }
            return tuples;
        };
        return NgFor;
    }());
    /** @nocollapse */
    NgFor.decorators = [
        { type: _angular_core.Directive, args: [{ selector: '[ngFor][ngForOf]', inputs: ['ngForTrackBy', 'ngForOf', 'ngForTemplate'] },] },
    ];
    /** @nocollapse */
    NgFor.ctorParameters = [
        { type: _angular_core.ViewContainerRef, },
        { type: _angular_core.TemplateRef, },
        { type: _angular_core.IterableDiffers, },
        { type: _angular_core.ChangeDetectorRef, },
    ];
    var RecordViewTuple = (function () {
        function RecordViewTuple(record, view) {
            this.record = record;
            this.view = view;
        }
        return RecordViewTuple;
    }());
    var NgIf = (function () {
        function NgIf(_viewContainer, _templateRef) {
            this._viewContainer = _viewContainer;
            this._templateRef = _templateRef;
            this._prevCondition = null;
        }
        Object.defineProperty(NgIf.prototype, "ngIf", {
            set: function (newCondition /* boolean */) {
                if (newCondition && (isBlank(this._prevCondition) || !this._prevCondition)) {
                    this._prevCondition = true;
                    this._viewContainer.createEmbeddedView(this._templateRef);
                }
                else if (!newCondition && (isBlank(this._prevCondition) || this._prevCondition)) {
                    this._prevCondition = false;
                    this._viewContainer.clear();
                }
            },
            enumerable: true,
            configurable: true
        });
        return NgIf;
    }());
    /** @nocollapse */
    NgIf.decorators = [
        { type: _angular_core.Directive, args: [{ selector: '[ngIf]', inputs: ['ngIf'] },] },
    ];
    /** @nocollapse */
    NgIf.ctorParameters = [
        { type: _angular_core.ViewContainerRef, },
        { type: _angular_core.TemplateRef, },
    ];
    var _CASE_DEFAULT = new Object();
    // TODO: remove when fully deprecated
    var _warned = false;
    var SwitchView = (function () {
        function SwitchView(_viewContainerRef, _templateRef) {
            this._viewContainerRef = _viewContainerRef;
            this._templateRef = _templateRef;
        }
        SwitchView.prototype.create = function () { this._viewContainerRef.createEmbeddedView(this._templateRef); };
        SwitchView.prototype.destroy = function () { this._viewContainerRef.clear(); };
        return SwitchView;
    }());
    var NgSwitch = (function () {
        function NgSwitch() {
            this._useDefault = false;
            this._valueViews = new Map$1();
            this._activeViews = [];
        }
        Object.defineProperty(NgSwitch.prototype, "ngSwitch", {
            set: function (value) {
                // Empty the currently active ViewContainers
                this._emptyAllActiveViews();
                // Add the ViewContainers matching the value (with a fallback to default)
                this._useDefault = false;
                var views = this._valueViews.get(value);
                if (isBlank(views)) {
                    this._useDefault = true;
                    views = normalizeBlank(this._valueViews.get(_CASE_DEFAULT));
                }
                this._activateViews(views);
                this._switchValue = value;
            },
            enumerable: true,
            configurable: true
        });
        /** @internal */
        NgSwitch.prototype._onCaseValueChanged = function (oldCase, newCase, view) {
            this._deregisterView(oldCase, view);
            this._registerView(newCase, view);
            if (oldCase === this._switchValue) {
                view.destroy();
                ListWrapper.remove(this._activeViews, view);
            }
            else if (newCase === this._switchValue) {
                if (this._useDefault) {
                    this._useDefault = false;
                    this._emptyAllActiveViews();
                }
                view.create();
                this._activeViews.push(view);
            }
            // Switch to default when there is no more active ViewContainers
            if (this._activeViews.length === 0 && !this._useDefault) {
                this._useDefault = true;
                this._activateViews(this._valueViews.get(_CASE_DEFAULT));
            }
        };
        /** @internal */
        NgSwitch.prototype._emptyAllActiveViews = function () {
            var activeContainers = this._activeViews;
            for (var i = 0; i < activeContainers.length; i++) {
                activeContainers[i].destroy();
            }
            this._activeViews = [];
        };
        /** @internal */
        NgSwitch.prototype._activateViews = function (views) {
            // TODO(vicb): assert(this._activeViews.length === 0);
            if (isPresent(views)) {
                for (var i = 0; i < views.length; i++) {
                    views[i].create();
                }
                this._activeViews = views;
            }
        };
        /** @internal */
        NgSwitch.prototype._registerView = function (value, view) {
            var views = this._valueViews.get(value);
            if (isBlank(views)) {
                views = [];
                this._valueViews.set(value, views);
            }
            views.push(view);
        };
        /** @internal */
        NgSwitch.prototype._deregisterView = function (value, view) {
            // `_CASE_DEFAULT` is used a marker for non-registered cases
            if (value === _CASE_DEFAULT)
                return;
            var views = this._valueViews.get(value);
            if (views.length == 1) {
                this._valueViews.delete(value);
            }
            else {
                ListWrapper.remove(views, view);
            }
        };
        return NgSwitch;
    }());
    /** @nocollapse */
    NgSwitch.decorators = [
        { type: _angular_core.Directive, args: [{ selector: '[ngSwitch]', inputs: ['ngSwitch'] },] },
    ];
    var NgSwitchCase = (function () {
        function NgSwitchCase(viewContainer, templateRef, ngSwitch) {
            // `_CASE_DEFAULT` is used as a marker for a not yet initialized value
            /** @internal */
            this._value = _CASE_DEFAULT;
            this._switch = ngSwitch;
            this._view = new SwitchView(viewContainer, templateRef);
        }
        Object.defineProperty(NgSwitchCase.prototype, "ngSwitchCase", {
            set: function (value) {
                this._switch._onCaseValueChanged(this._value, value, this._view);
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSwitchCase.prototype, "ngSwitchWhen", {
            set: function (value) {
                if (!_warned) {
                    _warned = true;
                    console.warn('*ngSwitchWhen is deprecated and will be removed. Use *ngSwitchCase instead');
                }
                this._switch._onCaseValueChanged(this._value, value, this._view);
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        return NgSwitchCase;
    }());
    /** @nocollapse */
    NgSwitchCase.decorators = [
        { type: _angular_core.Directive, args: [{ selector: '[ngSwitchCase],[ngSwitchWhen]', inputs: ['ngSwitchCase', 'ngSwitchWhen'] },] },
    ];
    /** @nocollapse */
    NgSwitchCase.ctorParameters = [
        { type: _angular_core.ViewContainerRef, },
        { type: _angular_core.TemplateRef, },
        { type: NgSwitch, decorators: [{ type: _angular_core.Host },] },
    ];
    var NgSwitchDefault = (function () {
        function NgSwitchDefault(viewContainer, templateRef, sswitch) {
            sswitch._registerView(_CASE_DEFAULT, new SwitchView(viewContainer, templateRef));
        }
        return NgSwitchDefault;
    }());
    /** @nocollapse */
    NgSwitchDefault.decorators = [
        { type: _angular_core.Directive, args: [{ selector: '[ngSwitchDefault]' },] },
    ];
    /** @nocollapse */
    NgSwitchDefault.ctorParameters = [
        { type: _angular_core.ViewContainerRef, },
        { type: _angular_core.TemplateRef, },
        { type: NgSwitch, decorators: [{ type: _angular_core.Host },] },
    ];
    var NgPluralCase = (function () {
        function NgPluralCase(value, template, viewContainer) {
            this.value = value;
            this._view = new SwitchView(viewContainer, template);
        }
        return NgPluralCase;
    }());
    /** @nocollapse */
    NgPluralCase.decorators = [
        { type: _angular_core.Directive, args: [{ selector: '[ngPluralCase]' },] },
    ];
    /** @nocollapse */
    NgPluralCase.ctorParameters = [
        { type: undefined, decorators: [{ type: _angular_core.Attribute, args: ['ngPluralCase',] },] },
        { type: _angular_core.TemplateRef, },
        { type: _angular_core.ViewContainerRef, },
    ];
    var NgPlural = (function () {
        function NgPlural(_localization) {
            this._localization = _localization;
            this._caseViews = {};
            this.cases = null;
        }
        Object.defineProperty(NgPlural.prototype, "ngPlural", {
            set: function (value) {
                this._switchValue = value;
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        NgPlural.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.cases.forEach(function (pluralCase) {
                _this._caseViews[pluralCase.value] = pluralCase._view;
            });
            this._updateView();
        };
        /** @internal */
        NgPlural.prototype._updateView = function () {
            this._clearViews();
            var key = getPluralCategory(this._switchValue, Object.getOwnPropertyNames(this._caseViews), this._localization);
            this._activateView(this._caseViews[key]);
        };
        /** @internal */
        NgPlural.prototype._clearViews = function () {
            if (isPresent(this._activeView))
                this._activeView.destroy();
        };
        /** @internal */
        NgPlural.prototype._activateView = function (view) {
            if (!isPresent(view))
                return;
            this._activeView = view;
            this._activeView.create();
        };
        return NgPlural;
    }());
    /** @nocollapse */
    NgPlural.decorators = [
        { type: _angular_core.Directive, args: [{ selector: '[ngPlural]' },] },
    ];
    /** @nocollapse */
    NgPlural.ctorParameters = [
        { type: NgLocalization, },
    ];
    /** @nocollapse */
    NgPlural.propDecorators = {
        'cases': [{ type: _angular_core.ContentChildren, args: [NgPluralCase,] },],
        'ngPlural': [{ type: _angular_core.Input },],
    };
    var NgStyle = (function () {
        function NgStyle(_differs, _ngEl, _renderer) {
            this._differs = _differs;
            this._ngEl = _ngEl;
            this._renderer = _renderer;
        }
        Object.defineProperty(NgStyle.prototype, "rawStyle", {
            set: function (v) {
                this._rawStyle = v;
                if (isBlank(this._differ) && isPresent(v)) {
                    this._differ = this._differs.find(this._rawStyle).create(null);
                }
            },
            enumerable: true,
            configurable: true
        });
        NgStyle.prototype.ngDoCheck = function () {
            if (isPresent(this._differ)) {
                var changes = this._differ.diff(this._rawStyle);
                if (isPresent(changes)) {
                    this._applyChanges(changes);
                }
            }
        };
        NgStyle.prototype._applyChanges = function (changes) {
            var _this = this;
            changes.forEachAddedItem(function (record) { _this._setStyle(record.key, record.currentValue); });
            changes.forEachChangedItem(function (record) { _this._setStyle(record.key, record.currentValue); });
            changes.forEachRemovedItem(function (record) { _this._setStyle(record.key, null); });
        };
        NgStyle.prototype._setStyle = function (name, val) {
            this._renderer.setElementStyle(this._ngEl.nativeElement, name, val);
        };
        return NgStyle;
    }());
    /** @nocollapse */
    NgStyle.decorators = [
        { type: _angular_core.Directive, args: [{ selector: '[ngStyle]', inputs: ['rawStyle: ngStyle'] },] },
    ];
    /** @nocollapse */
    NgStyle.ctorParameters = [
        { type: _angular_core.KeyValueDiffers, },
        { type: _angular_core.ElementRef, },
        { type: _angular_core.Renderer, },
    ];
    var NgTemplateOutlet = (function () {
        function NgTemplateOutlet(_viewContainerRef) {
            this._viewContainerRef = _viewContainerRef;
        }
        Object.defineProperty(NgTemplateOutlet.prototype, "ngOutletContext", {
            set: function (context) {
                if (this._context !== context) {
                    this._context = context;
                    if (isPresent(this._viewRef)) {
                        this.createView();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgTemplateOutlet.prototype, "ngTemplateOutlet", {
            set: function (templateRef) {
                if (this._templateRef !== templateRef) {
                    this._templateRef = templateRef;
                    this.createView();
                }
            },
            enumerable: true,
            configurable: true
        });
        NgTemplateOutlet.prototype.createView = function () {
            if (isPresent(this._viewRef)) {
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef));
            }
            if (isPresent(this._templateRef)) {
                this._viewRef = this._viewContainerRef.createEmbeddedView(this._templateRef, this._context);
            }
        };
        return NgTemplateOutlet;
    }());
    /** @nocollapse */
    NgTemplateOutlet.decorators = [
        { type: _angular_core.Directive, args: [{ selector: '[ngTemplateOutlet]' },] },
    ];
    /** @nocollapse */
    NgTemplateOutlet.ctorParameters = [
        { type: _angular_core.ViewContainerRef, },
    ];
    /** @nocollapse */
    NgTemplateOutlet.propDecorators = {
        'ngOutletContext': [{ type: _angular_core.Input },],
        'ngTemplateOutlet': [{ type: _angular_core.Input },],
    };
    /**
     * A collection of Angular core directives that are likely to be used in each and every Angular
     * application.
     *
     * This collection can be used to quickly enumerate all the built-in directives in the `directives`
     * property of the `@Component` annotation.
     *
     * ### Example ([live demo](http://plnkr.co/edit/yakGwpCdUkg0qfzX5m8g?p=preview))
     *
     * Instead of writing:
     *
     * ```typescript
     * import {NgClass, NgIf, NgFor, NgSwitch, NgSwitchWhen, NgSwitchDefault} from '@angular/common';
     * import {OtherDirective} from './myDirectives';
     *
     * @Component({
     *   selector: 'my-component',
     *   templateUrl: 'myComponent.html',
     *   directives: [NgClass, NgIf, NgFor, NgSwitch, NgSwitchWhen, NgSwitchDefault, OtherDirective]
     * })
     * export class MyComponent {
     *   ...
     * }
     * ```
     * one could import all the core directives at once:
     *
     * ```typescript
     * import {CORE_DIRECTIVES} from '@angular/common';
     * import {OtherDirective} from './myDirectives';
     *
     * @Component({
     *   selector: 'my-component',
     *   templateUrl: 'myComponent.html',
     *   directives: [CORE_DIRECTIVES, OtherDirective]
     * })
     * export class MyComponent {
     *   ...
     * }
     * ```
     *
     * @stable
     */
    var CORE_DIRECTIVES = [
        NgClass,
        NgFor,
        NgIf,
        NgTemplateOutlet,
        NgStyle,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        NgPlural,
        NgPluralCase,
    ];
    /**
     * Used to provide a {@link ControlValueAccessor} for form controls.
     *
     * See {@link DefaultValueAccessor} for how to implement one.
     * @experimental
     */
    var NG_VALUE_ACCESSOR =
    /*@ts2dart_const*/ new _angular_core.OpaqueToken('NgValueAccessor');
    /**
     * Base class for control directives.
     *
     * Only used internally in the forms module.
     *
     * @experimental
     */
    var AbstractControlDirective = (function () {
        function AbstractControlDirective() {
        }
        Object.defineProperty(AbstractControlDirective.prototype, "control", {
            get: function () { return unimplemented(); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "value", {
            get: function () { return isPresent(this.control) ? this.control.value : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
            get: function () { return isPresent(this.control) ? this.control.valid : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
            get: function () {
                return isPresent(this.control) ? this.control.errors : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
            get: function () { return isPresent(this.control) ? this.control.pristine : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
            get: function () { return isPresent(this.control) ? this.control.dirty : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
            get: function () { return isPresent(this.control) ? this.control.touched : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
            get: function () { return isPresent(this.control) ? this.control.untouched : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "path", {
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        return AbstractControlDirective;
    }());
    /**
     * A base class that all control directive extend.
     * It binds a {@link Control} object to a DOM element.
     *
     * Used internally by Angular forms.
     *
     * @experimental
     */
    var NgControl = (function (_super) {
        __extends(NgControl, _super);
        function NgControl() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            _super.apply(this, args);
            this.name = null;
            this.valueAccessor = null;
        }
        Object.defineProperty(NgControl.prototype, "validator", {
            get: function () { return unimplemented(); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgControl.prototype, "asyncValidator", {
            get: function () { return unimplemented(); },
            enumerable: true,
            configurable: true
        });
        return NgControl;
    }(AbstractControlDirective));
    var RADIO_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
        multi: true
    };
    var RadioControlRegistry = (function () {
        function RadioControlRegistry() {
            this._accessors = [];
        }
        RadioControlRegistry.prototype.add = function (control, accessor) {
            this._accessors.push([control, accessor]);
        };
        RadioControlRegistry.prototype.remove = function (accessor) {
            var indexToRemove = -1;
            for (var i = 0; i < this._accessors.length; ++i) {
                if (this._accessors[i][1] === accessor) {
                    indexToRemove = i;
                }
            }
            ListWrapper.removeAt(this._accessors, indexToRemove);
        };
        RadioControlRegistry.prototype.select = function (accessor) {
            var _this = this;
            this._accessors.forEach(function (c) {
                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                    c[1].fireUncheck();
                }
            });
        };
        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
            return controlPair[0].control.root === accessor._control.control.root &&
                controlPair[1].name === accessor.name;
        };
        return RadioControlRegistry;
    }());
    /** @nocollapse */
    RadioControlRegistry.decorators = [
        { type: _angular_core.Injectable },
    ];
    /**
     * The value provided by the forms API for radio buttons.
     *
     * @experimental
     */
    var RadioButtonState = (function () {
        function RadioButtonState(checked, value) {
            this.checked = checked;
            this.value = value;
        }
        return RadioButtonState;
    }());
    var RadioControlValueAccessor = (function () {
        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._registry = _registry;
            this._injector = _injector;
            this.onChange = function () { };
            this.onTouched = function () { };
        }
        RadioControlValueAccessor.prototype.ngOnInit = function () {
            this._control = this._injector.get(NgControl);
            this._registry.add(this._control, this);
        };
        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
        RadioControlValueAccessor.prototype.writeValue = function (value) {
            this._state = value;
            if (isPresent(value) && value.checked) {
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', true);
            }
        };
        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
            var _this = this;
            this._fn = fn;
            this.onChange = function () {
                fn(new RadioButtonState(true, _this._state.value));
                _this._registry.select(_this);
            };
        };
        RadioControlValueAccessor.prototype.fireUncheck = function () { this._fn(new RadioButtonState(false, this._state.value)); };
        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        return RadioControlValueAccessor;
    }());
    /** @nocollapse */
    RadioControlValueAccessor.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: 'input[type=radio][ngControl],input[type=radio][ngFormControl],input[type=radio][ngModel]',
                    host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                    providers: [RADIO_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    RadioControlValueAccessor.ctorParameters = [
        { type: _angular_core.Renderer, },
        { type: _angular_core.ElementRef, },
        { type: RadioControlRegistry, },
        { type: _angular_core.Injector, },
    ];
    /** @nocollapse */
    RadioControlValueAccessor.propDecorators = {
        'name': [{ type: _angular_core.Input },],
    };
    /**
     * Indicates that a Control is valid, i.e. that no errors exist in the input value.
     */
    var VALID = 'VALID';
    /**
     * Indicates that a Control is invalid, i.e. that an error exists in the input value.
     */
    var INVALID = 'INVALID';
    /**
     * Indicates that a Control is pending, i.e. that async validation is occurring and
     * errors are not yet available for the input value.
     */
    var PENDING = 'PENDING';
    function _find(control, path) {
        if (isBlank(path))
            return null;
        if (!(path instanceof Array)) {
            path = path.split('/');
        }
        if (path instanceof Array && ListWrapper.isEmpty(path))
            return null;
        return path.reduce(function (v, name) {
            if (v instanceof ControlGroup) {
                return isPresent(v.controls[name]) ? v.controls[name] : null;
            }
            else if (v instanceof ControlArray) {
                var index = name;
                return isPresent(v.at(index)) ? v.at(index) : null;
            }
            else {
                return null;
            }
        }, control);
    }
    function toObservable(r) {
        return isPromise(r) ? ObservableWrapper.fromPromise(r) : r;
    }
    /**
     * @experimental
     */
    var AbstractControl = (function () {
        function AbstractControl(validator, asyncValidator) {
            this.validator = validator;
            this.asyncValidator = asyncValidator;
            this._pristine = true;
            this._touched = false;
        }
        Object.defineProperty(AbstractControl.prototype, "value", {
            get: function () { return this._value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "status", {
            get: function () { return this._status; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "valid", {
            get: function () { return this._status === VALID; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "errors", {
            /**
             * Returns the errors of this control.
             */
            get: function () { return this._errors; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "pristine", {
            get: function () { return this._pristine; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "dirty", {
            get: function () { return !this.pristine; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "touched", {
            get: function () { return this._touched; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "untouched", {
            get: function () { return !this._touched; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
            get: function () { return this._valueChanges; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
            get: function () { return this._statusChanges; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "pending", {
            get: function () { return this._status == PENDING; },
            enumerable: true,
            configurable: true
        });
        AbstractControl.prototype.markAsTouched = function () { this._touched = true; };
        AbstractControl.prototype.markAsDirty = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            onlySelf = normalizeBool(onlySelf);
            this._pristine = false;
            if (isPresent(this._parent) && !onlySelf) {
                this._parent.markAsDirty({ onlySelf: onlySelf });
            }
        };
        AbstractControl.prototype.markAsPending = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            onlySelf = normalizeBool(onlySelf);
            this._status = PENDING;
            if (isPresent(this._parent) && !onlySelf) {
                this._parent.markAsPending({ onlySelf: onlySelf });
            }
        };
        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
        AbstractControl.prototype.updateValueAndValidity = function (_a) {
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            onlySelf = normalizeBool(onlySelf);
            emitEvent = isPresent(emitEvent) ? emitEvent : true;
            this._updateValue();
            this._errors = this._runValidator();
            this._status = this._calculateStatus();
            if (this._status == VALID || this._status == PENDING) {
                this._runAsyncValidator(emitEvent);
            }
            if (emitEvent) {
                ObservableWrapper.callEmit(this._valueChanges, this._value);
                ObservableWrapper.callEmit(this._statusChanges, this._status);
            }
            if (isPresent(this._parent) && !onlySelf) {
                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            }
        };
        AbstractControl.prototype._runValidator = function () {
            return isPresent(this.validator) ? this.validator(this) : null;
        };
        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
            var _this = this;
            if (isPresent(this.asyncValidator)) {
                this._status = PENDING;
                this._cancelExistingSubscription();
                var obs = toObservable(this.asyncValidator(this));
                this._asyncValidationSubscription = ObservableWrapper.subscribe(obs, function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); });
            }
        };
        AbstractControl.prototype._cancelExistingSubscription = function () {
            if (isPresent(this._asyncValidationSubscription)) {
                ObservableWrapper.dispose(this._asyncValidationSubscription);
            }
        };
        /**
         * Sets errors on a control.
         *
         * This is used when validations are run not automatically, but manually by the user.
         *
         * Calling `setErrors` will also update the validity of the parent control.
         *
         * ## Usage
         *
         * ```
         * var login = new Control("someLogin");
         * login.setErrors({
         *   "notUnique": true
         * });
         *
         * expect(login.valid).toEqual(false);
         * expect(login.errors).toEqual({"notUnique": true});
         *
         * login.updateValue("someOtherLogin");
         *
         * expect(login.valid).toEqual(true);
         * ```
         */
        AbstractControl.prototype.setErrors = function (errors, _a) {
            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
            emitEvent = isPresent(emitEvent) ? emitEvent : true;
            this._errors = errors;
            this._status = this._calculateStatus();
            if (emitEvent) {
                ObservableWrapper.callEmit(this._statusChanges, this._status);
            }
            if (isPresent(this._parent)) {
                this._parent._updateControlsErrors();
            }
        };
        AbstractControl.prototype.find = function (path) { return _find(this, path); };
        AbstractControl.prototype.getError = function (errorCode, path) {
            if (path === void 0) { path = null; }
            var control = isPresent(path) && !ListWrapper.isEmpty(path) ? this.find(path) : this;
            if (isPresent(control) && isPresent(control._errors)) {
                return StringMapWrapper.get(control._errors, errorCode);
            }
            else {
                return null;
            }
        };
        AbstractControl.prototype.hasError = function (errorCode, path) {
            if (path === void 0) { path = null; }
            return isPresent(this.getError(errorCode, path));
        };
        Object.defineProperty(AbstractControl.prototype, "root", {
            get: function () {
                var x = this;
                while (isPresent(x._parent)) {
                    x = x._parent;
                }
                return x;
            },
            enumerable: true,
            configurable: true
        });
        /** @internal */
        AbstractControl.prototype._updateControlsErrors = function () {
            this._status = this._calculateStatus();
            if (isPresent(this._parent)) {
                this._parent._updateControlsErrors();
            }
        };
        /** @internal */
        AbstractControl.prototype._initObservables = function () {
            this._valueChanges = new EventEmitter$1();
            this._statusChanges = new EventEmitter$1();
        };
        AbstractControl.prototype._calculateStatus = function () {
            if (isPresent(this._errors))
                return INVALID;
            if (this._anyControlsHaveStatus(PENDING))
                return PENDING;
            if (this._anyControlsHaveStatus(INVALID))
                return INVALID;
            return VALID;
        };
        return AbstractControl;
    }());
    /**
     * Defines a part of a form that cannot be divided into other controls. `Control`s have values and
     * validation state, which is determined by an optional validation function.
     *
     * `Control` is one of the three fundamental building blocks used to define forms in Angular, along
     * with {@link ControlGroup} and {@link ControlArray}.
     *
     * ## Usage
     *
     * By default, a `Control` is created for every `<input>` or other form component.
     * With {@link NgFormControl} or {@link NgFormModel} an existing {@link Control} can be
     * bound to a DOM element instead. This `Control` can be configured with a custom
     * validation function.
     *
     * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
     *
     * @experimental
     */
    var Control = (function (_super) {
        __extends(Control, _super);
        function Control(value, validator, asyncValidator) {
            if (value === void 0) { value = null; }
            if (validator === void 0) { validator = null; }
            if (asyncValidator === void 0) { asyncValidator = null; }
            _super.call(this, validator, asyncValidator);
            this._value = value;
            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            this._initObservables();
        }
        /**
         * Set the value of the control to `value`.
         *
         * If `onlySelf` is `true`, this change will only affect the validation of this `Control`
         * and not its parent component. If `emitEvent` is `true`, this change will cause a
         * `valueChanges` event on the `Control` to be emitted. Both of these options default to
         * `false`.
         *
         * If `emitModelToViewChange` is `true`, the view will be notified about the new value
         * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
         * specified.
         */
        Control.prototype.updateValue = function (value, _a) {
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange;
            emitModelToViewChange = isPresent(emitModelToViewChange) ? emitModelToViewChange : true;
            this._value = value;
            if (isPresent(this._onChange) && emitModelToViewChange)
                this._onChange(this._value);
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        };
        /**
         * @internal
         */
        Control.prototype._updateValue = function () { };
        /**
         * @internal
         */
        Control.prototype._anyControlsHaveStatus = function (status) { return false; };
        /**
         * Register a listener for change events.
         */
        Control.prototype.registerOnChange = function (fn) { this._onChange = fn; };
        return Control;
    }(AbstractControl));
    /**
     * Defines a part of a form, of fixed length, that can contain other controls.
     *
     * A `ControlGroup` aggregates the values of each {@link Control} in the group.
     * The status of a `ControlGroup` depends on the status of its children.
     * If one of the controls in a group is invalid, the entire group is invalid.
     * Similarly, if a control changes its value, the entire group changes as well.
     *
     * `ControlGroup` is one of the three fundamental building blocks used to define forms in Angular,
     * along with {@link Control} and {@link ControlArray}. {@link ControlArray} can also contain other
     * controls, but is of variable length.
     *
     * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
     *
     * @experimental
     */
    var ControlGroup = (function (_super) {
        __extends(ControlGroup, _super);
        function ControlGroup(controls, optionals, validator, asyncValidator) {
            if (optionals === void 0) { optionals = null; }
            if (validator === void 0) { validator = null; }
            if (asyncValidator === void 0) { asyncValidator = null; }
            _super.call(this, validator, asyncValidator);
            this.controls = controls;
            this._optionals = isPresent(optionals) ? optionals : {};
            this._initObservables();
            this._setParentForControls();
            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        }
        /**
         * Register a control with the group's list of controls.
         */
        ControlGroup.prototype.registerControl = function (name, control) {
            this.controls[name] = control;
            control.setParent(this);
        };
        /**
         * Add a control to this group.
         */
        ControlGroup.prototype.addControl = function (name, control) {
            this.registerControl(name, control);
            this.updateValueAndValidity();
        };
        /**
         * Remove a control from this group.
         */
        ControlGroup.prototype.removeControl = function (name) {
            StringMapWrapper.delete(this.controls, name);
            this.updateValueAndValidity();
        };
        /**
         * Mark the named control as non-optional.
         */
        ControlGroup.prototype.include = function (controlName) {
            StringMapWrapper.set(this._optionals, controlName, true);
            this.updateValueAndValidity();
        };
        /**
         * Mark the named control as optional.
         */
        ControlGroup.prototype.exclude = function (controlName) {
            StringMapWrapper.set(this._optionals, controlName, false);
            this.updateValueAndValidity();
        };
        /**
         * Check whether there is a control with the given name in the group.
         */
        ControlGroup.prototype.contains = function (controlName) {
            var c = StringMapWrapper.contains(this.controls, controlName);
            return c && this._included(controlName);
        };
        /** @internal */
        ControlGroup.prototype._setParentForControls = function () {
            var _this = this;
            StringMapWrapper.forEach(this.controls, function (control, name) { control.setParent(_this); });
        };
        /** @internal */
        ControlGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
        /** @internal */
        ControlGroup.prototype._anyControlsHaveStatus = function (status) {
            var _this = this;
            var res = false;
            StringMapWrapper.forEach(this.controls, function (control, name) {
                res = res || (_this.contains(name) && control.status == status);
            });
            return res;
        };
        /** @internal */
        ControlGroup.prototype._reduceValue = function () {
            return this._reduceChildren({}, function (acc, control, name) {
                acc[name] = control.value;
                return acc;
            });
        };
        /** @internal */
        ControlGroup.prototype._reduceChildren = function (initValue, fn) {
            var _this = this;
            var res = initValue;
            StringMapWrapper.forEach(this.controls, function (control, name) {
                if (_this._included(name)) {
                    res = fn(res, control, name);
                }
            });
            return res;
        };
        /** @internal */
        ControlGroup.prototype._included = function (controlName) {
            var isOptional = StringMapWrapper.contains(this._optionals, controlName);
            return !isOptional || StringMapWrapper.get(this._optionals, controlName);
        };
        return ControlGroup;
    }(AbstractControl));
    /**
     * Defines a part of a form, of variable length, that can contain other controls.
     *
     * A `ControlArray` aggregates the values of each {@link Control} in the group.
     * The status of a `ControlArray` depends on the status of its children.
     * If one of the controls in a group is invalid, the entire array is invalid.
     * Similarly, if a control changes its value, the entire array changes as well.
     *
     * `ControlArray` is one of the three fundamental building blocks used to define forms in Angular,
     * along with {@link Control} and {@link ControlGroup}. {@link ControlGroup} can also contain
     * other controls, but is of fixed length.
     *
     * ## Adding or removing controls
     *
     * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
     * in `ControlArray` itself. These methods ensure the controls are properly tracked in the
     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
     * the `ControlArray` directly, as that will result in strange and unexpected behavior such
     * as broken change detection.
     *
     * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
     *
     * @experimental
     */
    var ControlArray = (function (_super) {
        __extends(ControlArray, _super);
        function ControlArray(controls, validator, asyncValidator) {
            if (validator === void 0) { validator = null; }
            if (asyncValidator === void 0) { asyncValidator = null; }
            _super.call(this, validator, asyncValidator);
            this.controls = controls;
            this._initObservables();
            this._setParentForControls();
            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        }
        /**
         * Get the {@link AbstractControl} at the given `index` in the array.
         */
        ControlArray.prototype.at = function (index) { return this.controls[index]; };
        /**
         * Insert a new {@link AbstractControl} at the end of the array.
         */
        ControlArray.prototype.push = function (control) {
            this.controls.push(control);
            control.setParent(this);
            this.updateValueAndValidity();
        };
        /**
         * Insert a new {@link AbstractControl} at the given `index` in the array.
         */
        ControlArray.prototype.insert = function (index, control) {
            ListWrapper.insert(this.controls, index, control);
            control.setParent(this);
            this.updateValueAndValidity();
        };
        /**
         * Remove the control at the given `index` in the array.
         */
        ControlArray.prototype.removeAt = function (index) {
            ListWrapper.removeAt(this.controls, index);
            this.updateValueAndValidity();
        };
        Object.defineProperty(ControlArray.prototype, "length", {
            /**
             * Length of the control array.
             */
            get: function () { return this.controls.length; },
            enumerable: true,
            configurable: true
        });
        /** @internal */
        ControlArray.prototype._updateValue = function () { this._value = this.controls.map(function (control) { return control.value; }); };
        /** @internal */
        ControlArray.prototype._anyControlsHaveStatus = function (status) {
            return this.controls.some(function (c) { return c.status == status; });
        };
        /** @internal */
        ControlArray.prototype._setParentForControls = function () {
            var _this = this;
            this.controls.forEach(function (control) { control.setParent(_this); });
        };
        return ControlArray;
    }(AbstractControl));
    var FormBuilder = (function () {
        function FormBuilder() {
        }
        /**
         * Construct a new {@link ControlGroup} with the given map of configuration.
         * Valid keys for the `extra` parameter map are `optionals` and `validator`.
         *
         * See the {@link ControlGroup} constructor for more details.
         */
        FormBuilder.prototype.group = function (controlsConfig, extra) {
            if (extra === void 0) { extra = null; }
            var controls = this._reduceControls(controlsConfig);
            var optionals = (isPresent(extra) ? StringMapWrapper.get(extra, 'optionals') : null);
            var validator = isPresent(extra) ? StringMapWrapper.get(extra, 'validator') : null;
            var asyncValidator = isPresent(extra) ? StringMapWrapper.get(extra, 'asyncValidator') : null;
            return new ControlGroup(controls, optionals, validator, asyncValidator);
        };
        /**
         * Construct a new {@link Control} with the given `value`,`validator`, and `asyncValidator`.
         */
        FormBuilder.prototype.control = function (value, validator, asyncValidator) {
            if (validator === void 0) { validator = null; }
            if (asyncValidator === void 0) { asyncValidator = null; }
            return new Control(value, validator, asyncValidator);
        };
        /**
         * Construct an array of {@link Control}s from the given `controlsConfig` array of
         * configuration, with the given optional `validator` and `asyncValidator`.
         */
        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
            var _this = this;
            if (validator === void 0) { validator = null; }
            if (asyncValidator === void 0) { asyncValidator = null; }
            var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
            return new ControlArray(controls, validator, asyncValidator);
        };
        /** @internal */
        FormBuilder.prototype._reduceControls = function (controlsConfig) {
            var _this = this;
            var controls = {};
            StringMapWrapper.forEach(controlsConfig, function (controlConfig, controlName) {
                controls[controlName] = _this._createControl(controlConfig);
            });
            return controls;
        };
        /** @internal */
        FormBuilder.prototype._createControl = function (controlConfig) {
            if (controlConfig instanceof Control || controlConfig instanceof ControlGroup ||
                controlConfig instanceof ControlArray) {
                return controlConfig;
            }
            else if (isArray(controlConfig)) {
                var value = controlConfig[0];
                var validator = controlConfig.length > 1 ? controlConfig[1] : null;
                var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
                return this.control(value, validator, asyncValidator);
            }
            else {
                return this.control(controlConfig);
            }
        };
        return FormBuilder;
    }());
    /** @nocollapse */
    FormBuilder.decorators = [
        { type: _angular_core.Injectable },
    ];
    var CHECKBOX_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
        multi: true
    };
    var CheckboxControlValueAccessor = (function () {
        function CheckboxControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
        };
        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        return CheckboxControlValueAccessor;
    }());
    /** @nocollapse */
    CheckboxControlValueAccessor.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: 'input[type=checkbox][ngControl],input[type=checkbox][ngFormControl],input[type=checkbox][ngModel]',
                    host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                    providers: [CHECKBOX_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    CheckboxControlValueAccessor.ctorParameters = [
        { type: _angular_core.Renderer, },
        { type: _angular_core.ElementRef, },
    ];
    var DEFAULT_VALUE_ACCESSOR =
    /* @ts2dart_Provider */ {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
        multi: true
    };
    var DefaultValueAccessor = (function () {
        function DefaultValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        DefaultValueAccessor.prototype.writeValue = function (value) {
            var normalizedValue = isBlank(value) ? '' : value;
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        };
        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        return DefaultValueAccessor;
    }());
    /** @nocollapse */
    DefaultValueAccessor.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: 'input:not([type=checkbox])[ngControl],textarea[ngControl],input:not([type=checkbox])[ngFormControl],textarea[ngFormControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                    // TODO: vsavkin replace the above selector with the one below it once
                    // https://github.com/angular/angular/issues/3011 is implemented
                    // selector: '[ngControl],[ngModel],[ngFormControl]',
                    host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                    providers: [DEFAULT_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    DefaultValueAccessor.ctorParameters = [
        { type: _angular_core.Renderer, },
        { type: _angular_core.ElementRef, },
    ];
    /**
     * Providers for validators to be used for {@link Control}s in a form.
     *
     * Provide this using `multi: true` to add validators.
     *
     * ### Example
     *
     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
     * @experimental
     */
    var NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
    /**
     * Providers for asynchronous validators to be used for {@link Control}s
     * in a form.
     *
     * Provide this using `multi: true` to add validators.
     *
     * See {@link NG_VALIDATORS} for more details.
     *
     * @experimental
     */
    var NG_ASYNC_VALIDATORS =
    /*@ts2dart_const*/ new _angular_core.OpaqueToken('NgAsyncValidators');
    /**
     * Provides a set of validators used by form controls.
     *
     * A validator is a function that processes a {@link Control} or collection of
     * controls and returns a map of errors. A null map means that validation has passed.
     *
     * ### Example
     *
     * ```typescript
     * var loginControl = new Control("", Validators.required)
     * ```
     *
     * @experimental
     */
    var Validators = (function () {
        function Validators() {
        }
        /**
         * Validator that requires controls to have a non-empty value.
         */
        Validators.required = function (control) {
            return isBlank(control.value) || (isString(control.value) && control.value == '') ?
                { 'required': true } :
                null;
        };
        /**
         * Validator that requires controls to have a value of a minimum length.
         */
        Validators.minLength = function (minLength) {
            return function (control) {
                if (isPresent(Validators.required(control)))
                    return null;
                var v = control.value;
                return v.length < minLength ?
                    { 'minlength': { 'requiredLength': minLength, 'actualLength': v.length } } :
                    null;
            };
        };
        /**
         * Validator that requires controls to have a value of a maximum length.
         */
        Validators.maxLength = function (maxLength) {
            return function (control) {
                if (isPresent(Validators.required(control)))
                    return null;
                var v = control.value;
                return v.length > maxLength ?
                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': v.length } } :
                    null;
            };
        };
        /**
         * Validator that requires a control to match a regex to its value.
         */
        Validators.pattern = function (pattern) {
            return function (control) {
                if (isPresent(Validators.required(control)))
                    return null;
                var regex = new RegExp("^" + pattern + "$");
                var v = control.value;
                return regex.test(v) ? null :
                    { 'pattern': { 'requiredPattern': "^" + pattern + "$", 'actualValue': v } };
            };
        };
        /**
         * No-op validator.
         */
        Validators.nullValidator = function (c) { return null; };
        /**
         * Compose multiple validators into a single function that returns the union
         * of the individual error maps.
         */
        Validators.compose = function (validators) {
            if (isBlank(validators))
                return null;
            var presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0)
                return null;
            return function (control) {
                return _mergeErrors(_executeValidators(control, presentValidators));
            };
        };
        Validators.composeAsync = function (validators) {
            if (isBlank(validators))
                return null;
            var presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0)
                return null;
            return function (control) {
                var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
                return PromiseWrapper.all(promises).then(_mergeErrors);
            };
        };
        return Validators;
    }());
    function _convertToPromise(obj) {
        return isPromise(obj) ? obj : ObservableWrapper.toPromise(obj);
    }
    function _executeValidators(control, validators) {
        return validators.map(function (v) { return v(control); });
    }
    function _executeAsyncValidators(control, validators) {
        return validators.map(function (v) { return v(control); });
    }
    function _mergeErrors(arrayOfErrors) {
        var res = arrayOfErrors.reduce(function (res, errors) {
            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
        }, {});
        return StringMapWrapper.isEmpty(res) ? null : res;
    }
    /**
     * A directive that contains multiple {@link NgControl}s.
     *
     * Only used by the forms module.
     *
     * @experimental
     */
    var ControlContainer = (function (_super) {
        __extends(ControlContainer, _super);
        function ControlContainer() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(ControlContainer.prototype, "formDirective", {
            /**
             * Get the form to which this container belongs.
             */
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlContainer.prototype, "path", {
            /**
             * Get the path to this container.
             */
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        return ControlContainer;
    }(AbstractControlDirective));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function normalizeValidator(validator) {
        if (validator.validate !== undefined) {
            return function (c) { return validator.validate(c); };
        }
        else {
            return validator;
        }
    }
    function normalizeAsyncValidator(validator) {
        if (validator.validate !== undefined) {
            return function (c) { return validator.validate(c); };
        }
        else {
            return validator;
        }
    }
    var NUMBER_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
        multi: true
    };
    var NumberValueAccessor = (function () {
        function NumberValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        NumberValueAccessor.prototype.writeValue = function (value) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', value);
        };
        NumberValueAccessor.prototype.registerOnChange = function (fn) {
            this.onChange = function (value) { fn(value == '' ? null : NumberWrapper.parseFloat(value)); };
        };
        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        return NumberValueAccessor;
    }());
    /** @nocollapse */
    NumberValueAccessor.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: 'input[type=number][ngControl],input[type=number][ngFormControl],input[type=number][ngModel]',
                    host: {
                        '(change)': 'onChange($event.target.value)',
                        '(input)': 'onChange($event.target.value)',
                        '(blur)': 'onTouched()'
                    },
                    providers: [NUMBER_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    NumberValueAccessor.ctorParameters = [
        { type: _angular_core.Renderer, },
        { type: _angular_core.ElementRef, },
    ];
    var SELECT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
        multi: true
    };
    function _buildValueString(id, value) {
        if (isBlank(id))
            return "" + value;
        if (!isPrimitive(value))
            value = 'Object';
        return StringWrapper.slice(id + ": " + value, 0, 50);
    }
    function _extractId(valueString) {
        return valueString.split(':')[0];
    }
    var SelectControlValueAccessor = (function () {
        function SelectControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            /** @internal */
            this._optionMap = new Map();
            /** @internal */
            this._idCounter =d.
     *
     * `OutputMetadata` takes an optional parameter that specifies the name
     * used when instantiating a component in the template. When not provided,
     * the name of the decorated property is used.
     *
     * ### Example
     *
     * ```typescript
     * @Directive({
     *   selector: 'interval-dir',
     * })
     * class IntervalDir {
     *   @Output() everySecond = new EventEmitter();
     *   @Output('everyFiveSeconds') five5Secs = new EventEmitter();
     *
     *   constructor() {
     *     setInterval(() => this.everySecond.emit("event"), 1000);
     *     setInterval(() => this.five5Secs.emit("event"), 5000);
     *   }
     * }
     *
     * @Component({
     *   selector: 'app',
     *   template: `
     *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
     *     </interval-dir>
     *   `,
     *   directives: [IntervalDir]
     * })
     * class App {
     *   everySecond() { console.log('second'); }
     *   everyFiveSeconds() { console.log('five seconds'); }
     * }
     * bootstrap(App);
     * ```
     * @ts2dart_const
     * @stable
     */
    var OutputMetadata = (function () {
        function OutputMetadata(bindingPropertyName) {
            this.bindingPropertyName = bindingPropertyName;
        }
        return OutputMetadata;
    }());
    /**
     * Declares a host property binding.
     *
     * Angular automatically checks host property bindings during change detection.
     * If a binding changes, it will update the host element of the directive.
     *
     * `HostBindingMetadata` takes an optional parameter that specifies the property
     * name of the host element that will be updated. When not provided,
     * the class property name is used.
     *
     * ### Example
     *
     * The following example creates a directive that sets the `valid` and `invalid` classes
     * on the DOM element that has ngModel directive on it.
     *
     * ```typescript
     * @Directive({selector: '[ngModel]'})
     * class NgModelStatus {
     *   constructor(public control:NgModel) {}
     *   @HostBinding('class.valid') get valid { return this.control.valid; }
     *   @HostBinding('class.invalid') get invalid { return this.control.invalid; }
     * }
     *
     * @Component({
     *   selector: 'app',
     *   template: `<input [(ngModel)]="prop">`,
     *   directives: [FORM_DIRECTIVES, NgModelStatus]
     * })
     * class App {
     *   prop;
     * }
     *
     * bootstrap(App);
     * ```
     * @ts2dart_const
     * @stable
     */
    var HostBindingMetadata = (function () {
        function HostBindingMetadata(hostPropertyName) {
            this.hostPropertyName = hostPropertyName;
        }
        return HostBindingMetadata;
    }());
    /**
     * Declares a host listener.
     *
     * Angular will invoke the decorated method when the host element emits the specified event.
     *
     * If the decorated method returns `false`, then `preventDefault` is applied on the DOM
     * event.
     *
     * ### Example
     *
     * The following example declares a directive that attaches a click listener to the button and
     * counts clicks.
     *
     * ```typescript
     * @Directive({selector: 'button[counting]'})
     * class CountClicks {
     *   numberOfClicks = 0;
     *
     *   @HostListener('click', ['$event.target'])
     *   onClick(btn) {
     *     console.log("button", btn, "number of clicks:", this.numberOfClicks++);
     *   }
     * }
     *
     * @Component({
     *   selector: 'app',
     *   template: `<button counting>Increment</button>`,
     *   directives: [CountClicks]
     * })
     * class App {}
     *
     * bootstrap(App);
     * ```
     * @ts2dart_const
     * @stable
     */
    var HostListenerMetadata = (function () {
        function HostListenerMetadata(eventName, args) {
            this.eventName = eventName;
            this.args = args;
        }
        return HostListenerMetadata;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Defines template and style encapsulation options available for Component's {@link View}.
     *
     * See {@link ViewMetadata#encapsulation}.
     * @stable
     */
    exports.ViewEncapsulation;
    (function (ViewEncapsulation) {
        /**
         * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
         * Element and pre-processing the style rules provided via
         * {@link ViewMetadata#styles} or {@link ViewMetadata#stylesUrls}, and adding the new Host Element
         * attribute to all selectors.
         *
         * This is the default option.
         */
        ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
        /**
         * Use the native encapsulation mechanism of the renderer.
         *
         * For the DOM this means using [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
         * creating a ShadowRoot for Component's Host Element.
         */
        ViewEncapsulation[ViewEncapsulation["Native"] = 1] = "Native";
        /**
         * Don't provide any template or style encapsulation.
         */
        ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
    })(exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
    var VIEW_ENCAPSULATION_VALUES = [exports.ViewEncapsulation.Emulated, exports.ViewEncapsulation.Native, exports.ViewEncapsulation.None];
    /**
     * Metadata properties available for configuring Views.
     *
     * Each Angular component requires a single `@Component` and at least one `@View` annotation. The
     * `@View` annotation specifies the HTML template to use, and lists the directives that are active
     * within the template.
     *
     * When a component is instantiated, the template is loaded into the component's shadow root, and
     * the expressions and statements in the template are evaluated against the component.
     *
     * For details on the `@Component` annotation, see {@link ComponentMetadata}.
     *
     * ### Example
     *
     * ```
     * @Component({
     *   selector: 'greet',
     *   template: 'Hello {{name}}!',
     *   directives: [GreetUser, Bold]
     * })
     * class Greet {
     *   name: string;
     *
     *   constructor() {
     *     this.name = 'World';
     *   }
     * }
     * ```
     * @ts2dart_const
     *
     * @experimental You should most likely be using ComponentMetadata instead.
     */
    var ViewMetadata = (function () {
        function ViewMetadata(_a) {
            var _b = _a === void 0 ? {} : _a, templateUrl = _b.templateUrl, template = _b.template, directives = _b.directives, pipes = _b.pipes, encapsulation = _b.encapsulation, styles = _b.styles, styleUrls = _b.styleUrls, animations = _b.animations, interpolation = _b.interpolation;
            this.templateUrl = templateUrl;
            this.template = template;
            this.styleUrls = styleUrls;
            this.styles = styles;
            this.directives = directives;
            this.pipes = pipes;
            this.encapsulation = encapsulation;
            this.animations = animations;
            this.interpolation = interpolation;
        }
        return ViewMetadata;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @stable
     */
    var LifecycleHooks;
    (function (LifecycleHooks) {
        LifecycleHooks[LifecycleHooks["OnInit"] = 0] = "OnInit";
        LifecycleHooks[LifecycleHooks["OnDestroy"] = 1] = "OnDestroy";
        LifecycleHooks[LifecycleHooks["DoCheck"] = 2] = "DoCheck";
        LifecycleHooks[LifecycleHooks["OnChanges"] = 3] = "OnChanges";
        LifecycleHooks[LifecycleHooks["AfterContentInit"] = 4] = "AfterContentInit";
        LifecycleHooks[LifecycleHooks["AfterContentChecked"] = 5] = "AfterContentChecked";
        LifecycleHooks[LifecycleHooks["AfterViewInit"] = 6] = "AfterViewInit";
        LifecycleHooks[LifecycleHooks["AfterViewChecked"] = 7] = "AfterViewChecked";
    })(LifecycleHooks || (LifecycleHooks = {}));
    var LIFECYCLE_HOOKS_VALUES = [
        LifecycleHooks.OnInit, LifecycleHooks.OnDestroy, LifecycleHooks.DoCheck, LifecycleHooks.OnChanges,
        LifecycleHooks.AfterContentInit, LifecycleHooks.AfterContentChecked, LifecycleHooks.AfterViewInit,
        LifecycleHooks.AfterViewChecked
    ];
    /**
     * Lifecycle hooks are guaranteed to be called in the following order:
     * - `OnChanges` (if any bindings have changed),
     * - `OnInit` (after the first check only),
     * - `DoCheck`,
     * - `AfterContentInit`,
     * - `AfterContentChecked`,
     * - `AfterViewInit`,
     * - `AfterViewChecked`,
     * - `OnDestroy` (at the very end before destruction)
     */
    /**
     * Implement this interface to get notified when any data-bound property of your directive changes.
     *
     * `ngOnChanges` is called right after the data-bound properties have been checked and before view
     * and content children are checked if at least one of them has changed.
     *
     * The `changes` parameter contains an entry for each of the changed data-bound property. The key is
     * the property name and the value is an instance of {@link SimpleChange}.
     *
     * ### Example ([live example](http://plnkr.co/edit/AHrB6opLqHDBPkt4KpdT?p=preview)):
     *
     * ```typescript
     * @Component({
     *   selector: 'my-cmp',
     *   template: `<p>myProp = {{myProp}}</p>`
     * })
     * class MyComponent implements OnChanges {
     *   @Input() myProp: any;
     *
     *   ngOnChanges(changes: SimpleChanges) {
     *     console.log('ngOnChanges - myProp = ' + changes['myProp'].currentValue);
     *   }
     * }
     *
     * @Component({
     *   selector: 'app',
     *   template: `
     *     <button (click)="value = value + 1">Change MyComponent</button>
     *     <my-cmp [my-prop]="value"></my-cmp>`,
     *   directives: [MyComponent]
     * })
     * export class App {
     *   value = 0;
     * }
     *
     * bootstrap(App).catch(err => console.error(err));
     * ```
     * @stable
     */
    var OnChanges = (function () {
        function OnChanges() {
        }
        return OnChanges;
    }());
    /**
     * Implement this interface to execute custom initialization logic after your directive's
     * data-bound properties have been initialized.
     *
     * `ngOnInit` is called right after the directive's data-bound properties have been checked for the
     * first time, and before any of its children have been checked. It is invoked only once when the
     * directive is instantiated.
     *
     * ### Example ([live example](http://plnkr.co/edit/1MBypRryXd64v4pV03Yn?p=preview))
     *
     * ```typescript
     * @Component({
     *   selector: 'my-cmp',
     *   template: `<p>my-component</p>`
     * })
     * class MyComponent implements OnInit, OnDestroy {
     *   ngOnInit() {
     *     console.log('ngOnInit');
     *   }
     *
     *   ngOnDestroy() {
     *     console.log('ngOnDestroy');
     *   }
     * }
     *
     * @Component({
     *   selector: 'app',
     *   template: `
     *     <button (click)="hasChild = !hasChild">
     *       {{hasChild ? 'Destroy' : 'Create'}} MyComponent
     *     </button>
     *     <my-cmp *ngIf="hasChild"></my-cmp>`,
     *   directives: [MyComponent, NgIf]
     * })
     * export class App {
     *   hasChild = true;
     * }
     *
     * bootstrap(App).catch(err => console.error(err));
     *  ```
     * @stable
     */
    var OnInit = (function () {
        function OnInit() {
        }
        return OnInit;
    }());
    /**
     * Implement this interface to supplement the default change detection algorithm in your directive.
     *
     * `ngDoCheck` gets called to check the changes in the directives in addition to the default
     * algorithm.
     *
     * The default change detection algorithm looks for differences by comparing bound-property values
     * by reference across change detection runs.
     *
     * Note that a directive typically should not use both `DoCheck` and {@link OnChanges} to respond to
     * changes on the same input. `ngOnChanges` will continue to be called when the default change
     * detector
     * detects changes, so it is usually unnecessary to respond to changes on the same input in both
     * hooks.
     * Reaction to the changes have to be handled from within the `ngDoCheck` callback.
     *
     * You can use {@link KeyValueDiffers} and {@link IterableDiffers} to help add your custom check
     * mechanisms.
     *
     * ### Example ([live demo](http://plnkr.co/edit/QpnIlF0CR2i5bcYbHEUJ?p=preview))
     *
     * In the following example `ngDoCheck` uses an {@link IterableDiffers} to detect the updates to the
     * array `list`:
     *
     * ```typescript
     * @Component({
     *   selector: 'custom-check',
     *   template: `
     *     <p>Changes:</p>
     *     <ul>
     *       <li *ngFor="let line of logs">{{line}}</li>
     *     </ul>`,
     *   directives: [NgFor]
     * })
     * class CustomCheckComponent implements DoCheck {
     *   @Input() list: any[];
     *   differ: any;
     *   logs = [];
     *
     *   constructor(differs: IterableDiffers) {
     *     this.differ = differs.find([]).create(null);
     *   }
     *
     *   ngDoCheck() {
     *     var changes = this.differ.diff(this.list);
     *
     *     if (changes) {
     *       changes.forEachAddedItem(r => this.logs.push('added ' + r.item));
     *       changes.forEachRemovedItem(r => this.logs.push('removed ' + r.item))
     *     }
     *   }
     * }
     *
     * @Component({
     *   selector: 'app',
     *   template: `
     *     <button (click)="list.push(list.length)">Push</button>
     *     <button (click)="list.pop()">Pop</button>
     *     <custom-check [list]="list"></custom-check>`,
     *   directives: [CustomCheckComponent]
     * })
     * export class App {
     *   list = [];
     * }
     * ```
     * @stable
     */
    var DoCheck = (function () {
        function DoCheck() {
        }
        return DoCheck;
    }());
    /**
     * Implement this interface to get notified when your directive is destroyed.
     *
     * `ngOnDestroy` callback is typically used for any custom cleanup that needs to occur when the
     * instance is destroyed
     *
     * ### Example ([live example](http://plnkr.co/edit/1MBypRryXd64v4pV03Yn?p=preview))
     *
     * ```typesript
     * @Component({
     *   selector: 'my-cmp',
     *   template: `<p>my-component</p>`
     * })
     * class MyComponent implements OnInit, OnDestroy {
     *   ngOnInit() {
     *     console.log('ngOnInit');
     *   }
     *
     *   ngOnDestroy() {
     *     console.log('ngOnDestroy');
     *   }
     * }
     *
     * @Component({
     *   selector: 'app',
     *   template: `
     *     <button (click)="hasChild = !hasChild">
     *       {{hasChild ? 'Destroy' : 'Create'}} MyComponent
     *     </button>
     *     <my-cmp *ngIf="hasChild"></my-cmp>`,
     *   directives: [MyComponent, NgIf]
     * })
     * export class App {
     *   hasChild = true;
     * }
     *
     * bootstrap(App).catch(err => console.error(err));
     * ```
     *
     *
     * To create a stateful Pipe, you should implement this interface and set the `pure`
     * parameter to `false` in the {@link PipeMetadata}.
     *
     * A stateful pipe may produce different output, given the same input. It is
     * likely that a stateful pipe may contain state that should be cleaned up when
     * a binding is destroyed. For example, a subscription to a stream of data may need to
     * be disposed, or an interval may need to be cleared.
     *
     * ### Example ([live demo](http://plnkr.co/edit/i8pm5brO4sPaLxBx56MR?p=preview))
     *
     * In this example, a pipe is created to countdown its input value, updating it every
     * 50ms. Because it maintains an internal interval, it automatically clears
     * the interval when the binding is destroyed or the countdown completes.
     *
     * ```
     * import {OnDestroy, Pipe, PipeTransform} from '@angular/core'
     * @Pipe({name: 'countdown', pure: false})
     * class CountDown implements PipeTransform, OnDestroy {
     *   remainingTime:Number;
     *   interval:SetInterval;
     *   ngOnDestroy() {
     *     if (this.interval) {
     *       clearInterval(this.interval);
     *     }
     *   }
     *   transform(value: any, args: any[] = []) {
     *     if (!parseInt(value, 10)) return null;
     *     if (typeof this.remainingTime !== 'number') {
     *       this.remainingTime = parseInt(value, 10);
     *     }
     *     if (!this.interval) {
     *       this.interval = setInterval(() => {
     *         this.remainingTime-=50;
     *         if (this.remainingTime <= 0) {
     *           this.remainingTime = 0;
     *           clearInterval(this.interval);
     *           delete this.interval;
     *         }
     *       }, 50);
     *     }
     *     return this.remainingTime;
     *   }
     * }
     * ```
     *
     * Invoking `{{ 10000 | countdown }}` would cause the value to be decremented by 50,
     * every 50ms, until it reaches 0.
     *
     * @stable
     */
    var OnDestroy = (function () {
        function OnDestroy() {
        }
        return OnDestroy;
    }());
    /**
     * Implement this interface to get notified when your directive's content has been fully
     * initialized.
     *
     * ### Example ([live demo](http://plnkr.co/edit/plamXUpsLQbIXpViZhUO?p=preview))
     *
     * ```typescript
     * @Component({
     *   selector: 'child-cmp',
     *   template: `{{where}} child`
     * })
     * class ChildComponent {
     *   @Input() where: string;
     * }
     *
     * @Component({
     *   selector: 'parent-cmp',
     *   template: `<ng-content></ng-content>`
     * })
     * class ParentComponent implements AfterContentInit {
     *   @ContentChild(ChildComponent) contentChild: ChildComponent;
     *
     *   constructor() {
     *     // contentChild is not initialized yet
     *     console.log(this.getMessage(this.contentChild));
     *   }
     *
     *   ngAfterContentInit() {
     *     // contentChild is updated after the content has been checked
     *     console.log('AfterContentInit: ' + this.getMessage(this.contentChild));
     *   }
     *
     *   private getMessage(cmp: ChildComponent): string {
     *     return cmp ? cmp.where + ' child' : 'no child';
     *   }
     * }
     *
     * @Component({
     *   selector: 'app',
     *   template: `
     *     <parent-cmp>
     *       <child-cmp where="content"></child-cmp>
     *     </parent-cmp>`,
     *   directives: [ParentComponent, ChildComponent]
     * })
     * export class App {
     * }
     *
     * bootstrap(App).catch(err => console.error(err));
     * ```
     * @stable
     */
    var AfterContentInit = (function () {
        function AfterContentInit() {
        }
        return AfterContentInit;
    }());
    /**
     * Implement this interface to get notified after every check of your directive's content.
     *
     * ### Example ([live demo](http://plnkr.co/edit/tGdrytNEKQnecIPkD7NU?p=preview))
     *
     * ```typescript
     * @Component({selector: 'child-cmp', template: `{{where}} child`})
     * class ChildComponent {
     *   @Input() where: string;
     * }
     *
     * @Component({selector: 'parent-cmp', template: `<ng-content></ng-content>`})
     * class ParentComponent implements AfterContentChecked {
     *   @ContentChild(ChildComponent) contentChild: ChildComponent;
     *
     *   constructor() {
     *     // contentChild is not initialized yet
     *     console.log(this.getMessage(this.contentChild));
     *   }
     *
     *   ngAfterContentChecked() {
     *     // contentChild is updated after the content has been checked
     *     console.log('AfterContentChecked: ' + this.getMessage(this.contentChild));
     *   }
     *
     *   private getMessage(cmp: ChildComponent): string {
     *     return cmp ? cmp.where + ' child' : 'no child';
     *   }
     * }
     *
     * @Component({
     *   selector: 'app',
     *   template: `
     *     <parent-cmp>
     *       <button (click)="hasContent = !hasContent">Toggle content child</button>
     *       <child-cmp *ngIf="hasContent" where="content"></child-cmp>
     *     </parent-cmp>`,
     *   directives: [NgIf, ParentComponent, ChildComponent]
     * })
     * export class App {
     *   hasContent = true;
     * }
     *
     * bootstrap(App).catch(err => console.error(err));
     * ```
     * @stable
     */
    var AfterContentChecked = (function () {
        function AfterContentChecked() {
        }
        return AfterContentChecked;
    }());
    /**
     * Implement this interface to get notified when your component's view has been fully initialized.
     *
     * ### Example ([live demo](http://plnkr.co/edit/LhTKVMEM0fkJgyp4CI1W?p=preview))
     *
     * ```typescript
     * @Component({selector: 'child-cmp', template: `{{where}} child`})
     * class ChildComponent {
     *   @Input() where: string;
     * }
     *
     * @Component({
     *   selector: 'parent-cmp',
     *   template: `<child-cmp where="view"></child-cmp>`,
     *   directives: [ChildComponent]
     * })
     * class ParentComponent implements AfterViewInit {
     *   @ViewChild(ChildComponent) viewChild: ChildComponent;
     *
     *   constructor() {
     *     // viewChild is not initialized yet
     *     console.log(this.getMessage(this.viewChild));
     *   }
     *
     *   ngAfterViewInit() {
     *     // viewChild is updated after the view has been initialized
     *     console.log('ngAfterViewInit: ' + this.getMessage(this.viewChild));
     *   }
     *
     *   private getMessage(cmp: ChildComponent): string {
     *     return cmp ? cmp.where + ' child' : 'no child';
     *   }
     * }
     *
     * @Component({
     *   selector: 'app',
     *   template: `<parent-cmp></parent-cmp>`,
     *   directives: [ParentComponent]
     * })
     * export class App {
     * }
     *
     * bootstrap(App).catch(err => console.error(err));
     * ```
     * @stable
     */
    var AfterViewInit = (function () {
        function AfterViewInit() {
        }
        return AfterViewInit;
    }());
    /**
     * Implement this interface to get notified after every check of your component's view.
     *
     * ### Example ([live demo](http://plnkr.co/edit/0qDGHcPQkc25CXhTNzKU?p=preview))
     *
     * ```typescript
     * @Component({selector: 'child-cmp', template: `{{where}} child`})
     * class ChildComponent {
     *   @Input() where: string;
     * }
     *
     * @Component({
     *   selector: 'parent-cmp',
     *   template: `
     *     <button (click)="showView = !showView">Toggle view child</button>
     *     <child-cmp *ngIf="showView" where="view"></child-cmp>`,
     *   directives: [NgIf, ChildComponent]
     * })
     * class ParentComponent implements AfterViewChecked {
     *   @ViewChild(ChildComponent) viewChild: ChildComponent;
     *   showView = true;
     *
     *   constructor() {
     *     // viewChild is not initialized yet
     *     console.log(this.getMessage(this.viewChild));
     *   }
     *
     *   ngAfterViewChecked() {
     *     // viewChild is updated after the view has been checked
     *     console.log('AfterViewChecked: ' + this.getMessage(this.viewChild));
     *   }
     *
     *   private getMessage(cmp: ChildComponent): string {
     *     return cmp ? cmp.where + ' child' : 'no child';
     *   }
     * }
     *
     * @Component({
     *   selector: 'app',
     *   template: `<parent-cmp></parent-cmp>`,
     *   directives: [ParentComponent]
     * })
     * export class App {
     * }
     *
     * bootstrap(App).catch(err => console.error(err));
     * ```
     * @stable
     */
    var AfterViewChecked = (function () {
        function AfterViewChecked() {
        }
        return AfterViewChecked;
    }());
    var _nextClassId = 0;
    function extractAnnotation(annotation) {
        if (isFunction(annotation) && annotation.hasOwnProperty('annotation')) {
            // it is a decorator, extract annotation
            annotation = annotation.annotation;
        }
        return annotation;
    }
    function applyParams(fnOrArray, key) {
        if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function ||
            fnOrArray === Number || fnOrArray === Array) {
            throw new Error("Can not use native " + stringify(fnOrArray) + " as constructor");
        }
        if (isFunction(fnOrArray)) {
            return fnOrArray;
        }
        else if (fnOrArray instanceof Array) {
            var annotations = fnOrArray;
            var fn = fnOrArray[fnOrArray.length - 1];
            if (!isFunction(fn)) {
                throw new Error("Last position of Class method array must be Function in key " + key + " was '" + stringify(fn) + "'");
            }
            var annoLength = annotations.length - 1;
            if (annoLength != fn.length) {
                throw new Error("Number of annotations (" + annoLength + ") does not match number of arguments (" + fn.length + ") in the function: " + stringify(fn));
            }
            var paramsAnnotations = [];
            for (var i = 0, ii = annotations.length - 1; i < ii; i++) {
                var paramAnnotations = [];
                paramsAnnotations.push(paramAnnotations);
                var annotation = annotations[i];
                if (annotation instanceof Array) {
                    for (var j = 0; j < annotation.length; j++) {
                        paramAnnotations.push(extractAnnotation(annotation[j]));
                    }
                }
                else if (isFunction(annotation)) {
                    paramAnnotations.push(extractAnnotation(annotation));
                }
                else {
                    paramAnnotations.push(annotation);
                }
            }
            Reflect.defineMetadata('parameters', paramsAnnotations, fn);
            return fn;
        }
        else {
            throw new Error("Only Function or Array is supported in Class definition for key '" + key + "' is '" + stringify(fnOrArray) + "'");
        }
    }
    /**
     * Provides a way for expressing ES6 classes with parameter annotations in ES5.
     *
     * ## Basic Example
     *
     * ```
     * var Greeter = ng.Class({
     *   constructor: function(name) {
     *     this.name = name;
     *   },
     *
     *   greet: function() {
     *     alert('Hello ' + this.name + '!');
     *   }
     * });
     * ```
     *
     * is equivalent to ES6:
     *
     * ```
     * class Greeter {
     *   constructor(name) {
     *     this.name = name;
     *   }
     *
     *   greet() {
     *     alert('Hello ' + this.name + '!');
     *   }
     * }
     * ```
     *
     * or equivalent to ES5:
     *
     * ```
     * var Greeter = function (name) {
     *   this.name = name;
     * }
     *
     * Greeter.prototype.greet = function () {
     *   alert('Hello ' + this.name + '!');
     * }
     * ```
     *
     * ### Example with parameter annotations
     *
     * ```
     * var MyService = ng.Class({
     *   constructor: [String, [new Query(), QueryList], function(name, queryList) {
     *     ...
     *   }]
     * });
     * ```
     *
     * is equivalent to ES6:
     *
     * ```
     * class MyService {
     *   constructor(name: string, @Query() queryList: QueryList) {
     *     ...
     *   }
     * }
     * ```
     *
     * ### Example with inheritance
     *
     * ```
     * var Shape = ng.Class({
     *   constructor: (color) {
     *     this.color = color;
     *   }
     * });
     *
     * var Square = ng.Class({
     *   extends: Shape,
     *   constructor: function(color, size) {
     *     Shape.call(this, color);
     *     this.size = size;
     *   }
     * });
     * ```
     * @stable
     */
    function Class(clsDef) {
        var constructor = applyParams(clsDef.hasOwnProperty('constructor') ? clsDef.constructor : undefined, 'constructor');
        var proto = constructor.prototype;
        if (clsDef.hasOwnProperty('extends')) {
            if (isFunction(clsDef.extends)) {
                constructor.prototype = proto =
                    Object.create(clsDef.extends.prototype);
            }
            else {
                throw new Error("Class definition 'extends' property must be a constructor function was: " + stringify(clsDef.extends));
            }
        }
        for (var key in clsDef) {
            if (key != 'extends' && key != 'prototype' && clsDef.hasOwnProperty(key)) {
                proto[key] = applyParams(clsDef[key], key);
            }
        }
        if (this && this.annotations instanceof Array) {
            Reflect.defineMetadata('annotations', this.annotations, constructor);
        }
        if (!constructor['name']) {
            constructor['overriddenName'] = "class" + _nextClassId++;
        }
        return constructor;
    }
    var Reflect = global$1.Reflect;
    function makeDecorator(annotationCls /* TODO #9100 */, chainFn) {
        if (chainFn === void 0) { chainFn = null; }
        function DecoratorFactory(objOrType /** TODO #9100 */) {
            var annotationInstance = new annotationCls(objOrType);
            if (this instanceof annotationCls) {
                return annotationInstance;
            }
            else {
                var chainAnnotation = isFunction(this) && this.annotations instanceof Array ? this.annotations : [];
                chainAnnotation.push(annotationInstance);
                var TypeDecorator = function TypeDecorator(cls /** TODO #9100 */) {
                    var annotations = Reflect.getOwnMetadata('annotations', cls);
                    annotations = annotations || [];
                    annotations.push(annotationInstance);
                    Reflect.defineMetadata('annotations', annotations, cls);
                    return cls;
                };
                TypeDecorator.annotations = chainAnnotation;
                TypeDecorator.Class = Class;
                if (chainFn)
                    chainFn(TypeDecorator);
                return TypeDecorator;
            }
        }
        DecoratorFactory.prototype = Object.create(annotationCls.prototype);
        DecoratorFactory.annotationCls = annotationCls;
        return DecoratorFactory;
    }
    function makeParamDecorator(annotationCls /** TODO #9100 */) {
        function ParamDecoratorFactory() {
            var args = []; /** TODO #9100 */
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var annotationInstance = Object.create(annotationCls.prototype);
            annotationCls.apply(annotationInstance, args);
            if (this instanceof annotationCls) {
                return annotationInstance;
            }
            else {
                ParamDecorator.annotation = annotationInstance;
                return ParamDecorator;
            }
            function ParamDecorator(cls /** TODO #9100 */, unusedKey /** TODO #9100 */, index /** TODO #9100 */) {
                var parameters = Reflect.getMetadata('parameters', cls);
                parameters = parameters || [];
                // there might be gaps if some in between parameters do not have annotations.
                // we pad with nulls.
                while (parameters.length <= index) {
                    parameters.push(null);
                }
                parameters[index] = parameters[index] || [];
                var annotationsForParam = parameters[index];
                annotationsForParam.push(annotationInstance);
                Reflect.defineMetadata('parameters', parameters, cls);
                return cls;
            }
        }
        ParamDecoratorFactory.prototype = Object.create(annotationCls.prototype);
        ParamDecoratorFactory.annotationCls = annotationCls;
        return ParamDecoratorFactory;
    }
    function makePropDecorator(annotationCls /** TODO #9100 */) {
        function PropDecoratorFactory() {
            var args = []; /** TODO #9100 */
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var decoratorInstance = Object.create(annotationCls.prototype);
            annotationCls.apply(decoratorInstance, args);
            if (this instanceof annotationCls) {
                return decoratorInstance;
            }
            else {
                return function PropDecorator(target, name) {
                    var meta = Reflect.getOwnMetadata('propMetadata', target.constructor);
                    meta = meta || {};
                    meta[name] = meta[name] || [];
                    meta[name].unshift(decoratorInstance);
                    Reflect.defineMetadata('propMetadata', meta, target.constructor);
                };
            }
        }
        PropDecoratorFactory.prototype = Object.create(annotationCls.prototype);
        PropDecoratorFactory.annotationCls = annotationCls;
        return PropDecoratorFactory;
    }
    // TODO(alexeagle): remove the duplication of this doc. It is copied from ComponentMetadata.
    /**
     * Declare reusable UI building blocks for an application.
     *
     * Each Angular component requires a single `@Component` annotation. The `@Component`
     * annotation specifies when a component is instantiated, and which properties and hostListeners it
     * binds to.
     *
     * When a component is instantiated, Angular
     * - creates a shadow DOM for the component.
     * - loads the selected template into the shadow DOM.
     * - creates all the injectable objects configured with `providers` and `viewProviders`.
     *
     * All template expressions and statements are then evaluated against the component instance.
     *
     * ## Lifecycle hooks
     *
     * When the component class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
     * are called by the change detection at defined points in time during the life of the component.
     *
     * ### Example
     *
     * {@example core/ts/metadata/metadata.ts region='component'}
     * @stable
     * @Annotation
     */
    var Component = makeDecorator(ComponentMetadata, function (fn) { return fn.View = View; });
    // TODO(alexeagle): remove the duplication of this doc. It is copied from DirectiveMetadata.
    /**
     * Directives allow you to attach behavior to elements in the DOM.
     *
     * {@link DirectiveMetadata}s with an embedded view are called {@link ComponentMetadata}s.
     *
     * A directive consists of a single directive annotation and a controller class. When the
     * directive's `selector` matches
     * elements in the DOM, the following steps occur:
     *
     * 1. For each directive, the `ElementInjector` attempts to resolve the directive's constructor
     * arguments.
     * 2. Angular instantiates directives for each matched element using `ElementInjector` in a
     * depth-first order,
     *    as declared in the HTML.
     *
     * ## Understanding How Injection Works
     *
     * There are three stages of injection resolution.
     * - *Pre-existing Injectors*:
     *   - The terminal {@link Injector} cannot resolve dependencies. It either throws an error or, if
     * the dependency was
     *     specified as `@Optional`, returns `null`.
     *   - The platform injector resolves browser singleton resources, such as: cookies, title,
     * location, and others.
     * - *Component Injectors*: Each component instance has its own {@link Injector}, and they follow
     * the same parent-child hierarchy
     *     as the component instances in the DOM.
     * - *Element Injectors*: Each component instance has a Shadow DOM. Within the Shadow DOM each
     * element has an `ElementInjector`
     *     which follow the same parent-child hierarchy as the DOM elements themselves.
     *
     * When a template is instantiated, it also must instantiate the corresponding directives in a
     * depth-first order. The
     * current `ElementInjector` resolves the constructor dependencies for each directive.
     *
     * Angular then resolves dependencies as follows, according to the order in which they appear in the
     * {@link ViewMetadata}:
     *
     * 1. Dependencies on the current element
     * 2. Dependencies on element injectors and their parents until it encounters a Shadow DOM boundary
     * 3. Dependencies on component injectors and their parents until it encounters the root component
     * 4. Dependencies on pre-existing injectors
     *
     *
     * The `ElementInjector` can inject other directives, element-specific special objects, or it can
     * delegate to the parent
     * injector.
     *
     * To inject other directives, declare the constructor parameter as:
     * - `directive:DirectiveType`: a directive on the current element only
     * - `@Host() directive:DirectiveType`: any directive that matches the type between the current
     * element and the
     *    Shadow DOM root.
     * - `@Query(DirectiveType) query:QueryList<DirectiveType>`: A live collection of direct child
     * directives.
     * - `@QueryDescendants(DirectiveType) query:QueryList<DirectiveType>`: A live collection of any
     * child directives.
     *
     * To inject element-specific special objects, declare the constructor parameter as:
     * - `element: ElementRef` to obtain a reference to logical element in the view.
     * - `viewContainer: ViewContainerRef` to control child template instantiation, for
     * {@link DirectiveMetadata} directives only
     * - `bindingPropagation: BindingPropagation` to control change detection in a more granular way.
     *
     * ### Example
     *
     * The following example demonstrates how dependency injection resolves constructor arguments in
     * practice.
     *
     *
     * Assume this HTML template:
     *
     * ```
     * <div dependency="1">
     *   <div dependency="2">
     *     <div dependency="3" my-directive>
     *       <div dependency="4">
     *         <div dependency="5"></div>
     *       </div>
     *       <div dependency="6"></div>
     *     </div>
     *   </div>
     * </div>
     * ```
     *
     * With the following `dependency` decorator and `SomeService` injectable class.
     *
     * ```
     * @Injectable()
     * class SomeService {
     * }
     *
     * @Directive({
     *   selector: '[dependency]',
     *   inputs: [
     *     'id: dependency'
     *   ]
     * })
     * class Dependency {
     *   id:string;
     * }
     * ```
     *
     * Let's step through the different ways in which `MyDirective` could be declared...
     *
     *
     * ### No injection
     *
     * Here the constructor is declared with no arguments, therefore nothing is injected into
     * `MyDirective`.
     *
     * ```
     * @Directive({ selector: '[my-directive]' })
     * class MyDirective {
     *   constructor() {
     *   }
     * }
     * ```
     *
     * This directive would be instantiated with no dependencies.
     *
     *
     * ### Component-level injection
     *
     * Directives can inject any injectable instance from the closest component injector or any of its
     * parents.
     *
     * Here, the constructor declares a parameter, `someService`, and injects the `SomeService` type
     * from the parent
     * component's injector.
     * ```
     * @Directive({ selector: '[my-directive]' })
     * class MyDirective {
     *   constructor(someService: SomeService) {
     *   }
     * }
     * ```
     *
     * This directive would be instantiated with a dependency on `SomeService`.
     *
     *
     * ### Injecting a directive from the current element
     *
     * Directives can inject other directives declared on the current element.
     *
     * ```
     * @Directive({ selector: '[my-directive]' })
     * class MyDirective {
     *   constructor(dependency: Dependency) {
     *     expect(dependency.id).toEqual(3);
     *   }
     * }
     * ```
     * This directive would be instantiated with `Dependency` declared at the same element, in this case
     * `dependency="3"`.
     *
     * ### Injecting a directive from any ancestor elements
     *
     * Directives can inject other directives declared on any ancestor element (in the current Shadow
     * DOM), i.e. on the current element, the
     * parent element, or its parents.
     * ```
     * @Directive({ selector: '[my-directive]' })
     * class MyDirective {
     *   constructor(@Host() dependency: Dependency) {
     *     expect(dependency.id).toEqual(2);
     *   }
     * }
     * ```
     *
     * `@Host` checks the current element, the parent, as well as its parents recursively. If
     * `dependency="2"` didn't
     * exist on the direct parent, this injection would
     * have returned
     * `dependency="1"`.
     *
     *
     * ### Injecting a live collection of direct child directives
     *
     *
     * A directive can also query for other child directives. Since parent directives are instantiated
     * before child directives, a directive can't simply inject the list of child directives. Instead,
     * the directive injects a {@link QueryList}, which updates its contents as children are added,
     * removed, or moved by a directive that uses a {@link ViewContainerRef} such as a `ngFor`, an
     * `ngIf`, or an `ngSwitch`.
     *
     * ```
     * @Directive({ selector: '[my-directive]' })
     * class MyDirective {
     *   constructor(@Query(Dependency) dependencies:QueryList<Dependency>) {
     *   }
     * }
     * ```
     *
     * This directive would be instantiated with a {@link QueryList} which contains `Dependency` 4 and
     * 6. Here, `Dependency` 5 would not be included, because it is not a direct child.
     *
     * ### Injecting a live collection of descendant directives
     *
     * By passing the descendant flag to `@Query` above, we can include the children of the child
     * elements.
     *
     * ```
     * @Directive({ selector: '[my-directive]' })
     * class MyDirective {
     *   constructor(@Query(Dependency, {descendants: true}) dependencies:QueryList<Dependency>) {
     *   }
     * }
     * ```
     *
     * This directive would be instantiated with a Query which would contain `Dependency` 4, 5 and 6.
     *
     * ### Optional injection
     *
     * The normal behavior of directives is to return an error when a specified dependency cannot be
     * resolved. If you
     * would like to inject `null` on unresolved dependency instead, you can annotate that dependency
     * with `@Optional()`.
     * This explicitly permits the author of a template to treat some of the surrounding directives as
     * optional.
     *
     * ```
     * @Directive({ selector: '[my-directive]' })
     * class MyDirective {
     *   constructor(@Optional() dependency:Dependency) {
     *   }
     * }
     * ```
     *
     * This directive would be instantiated with a `Dependency` directive found on the current element.
     * If none can be
     * found, the injector supplies `null` instead of throwing an error.
     *
     * ### Example
     *
     * Here we use a decorator directive to simply define basic tool-tip behavior.
     *
     * ```
     * @Directive({
     *   selector: '[tooltip]',
     *   inputs: [
     *     'text: tooltip'
     *   ],
     *   host: {
     *     '(mouseenter)': 'onMouseEnter()',
     *     '(mouseleave)': 'onMouseLeave()'
     *   }
     * })
     * class Tooltip{
     *   text:string;
     *   overlay:Overlay; // NOT YET IMPLEMENTED
     *   overlayManager:OverlayManager; // NOT YET IMPLEMENTED
     *
     *   constructor(overlayManager:OverlayManager) {
     *     this.overlayManager = overlayManager;
     *   }
     *
     *   onMouseEnter() {
     *     // exact signature to be determined
     *     this.overlay = this.overlayManager.open(text, ...);
     *   }
     *
     *   onMouseLeave() {
     *     this.overlay.close();
     *     this.overlay = null;
     *   }
     * }
     * ```
     * In our HTML template, we can then add this behavior to a `<div>` or any other element with the
     * `tooltip` selector,
     * like so:
     *
     * ```
     * <div tooltip="some text here"></div>
     * ```
     *
     * Directives can also control the instantiation, destruction, and positioning of inline template
     * elements:
     *
     * A directive uses a {@link ViewContainerRef} to instantiate, insert, move, and destroy views at
     * runtime.
     * The {@link ViewContainerRef} is created as a result of `<template>` element, and represents a
     * location in the current view
     * where these actions are performed.
     *
     * Views are always created as children of the current {@link ViewMetadata}, and as siblings of the
     * `<template>` element. Thus a
     * directive in a child view cannot inject the directive that created it.
     *
     * Since directives that create views via ViewContainers are common in Angular, and using the full
     * `<template>` element syntax is wordy, Angular
     * also supports a shorthand notation: `<li *foo="bar">` and `<li template="foo: bar">` are
     * equivalent.
     *
     * Thus,
     *
     * ```
     * <ul>
     *   <li *foo="bar" title="text"></li>
     * </ul>
     * ```
     *
     * Expands in use to:
     *
     * ```
     * <ul>
     *   <template [foo]="bar">
     *     <li title="text"></li>
     *   </template>
     * </ul>
     * ```
     *
     * Notice that although the shorthand places `*foo="bar"` within the `<li>` element, the binding for
     * the directive
     * controller is correctly instantiated on the `<template>` element rather than the `<li>` element.
     *
     * ## Lifecycle hooks
     *
     * When the directive class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
     * are called by the change detection at defined points in time during the life of the directive.
     *
     * ### Example
     *
     * Let's suppose we want to implement the `unless` behavior, to conditionally include a template.
     *
     * Here is a simple directive that triggers on an `unless` selector:
     *
     * ```
     * @Directive({
     *   selector: '[unless]',
     *   inputs: ['unless']
     * })
     * export class Unless {
     *   viewContainer: ViewContainerRef;
     *   templateRef: TemplateRef;
     *   prevCondition: boolean;
     *
     *   constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef) {
     *     this.viewContainer = viewContainer;
     *     this.templateRef = templateRef;
     *     this.prevCondition = null;
     *   }
     *
     *   set unless(newCondition) {
     *     if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
     *       this.prevCondition = true;
     *       this.viewContainer.clear();
     *     } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
     *       this.prevCondition = false;
     *       this.viewContainer.create(this.templateRef);
     *     }
     *   }
     * }
     * ```
     *
     * We can then use this `unless` selector in a template:
     * ```
     * <ul>
     *   <li *unless="expr"></li>
     * </ul>
     * ```
     *
     * Once the directive instantiates the child view, the shorthand notation for the template expands
     * and the result is:
     *
     * ```
     * <ul>
     *   <template [unless]="exp">
     *     <li></li>
     *   </template>
     *   <li></li>
     * </ul>
     * ```
     *
     * Note also that although the `<li></li>` template still exists inside the `<template></template>`,
     * the instantiated
     * view occurs on the second `<li></li>` which is a sibling to the `<template>` element.
     * @stable
     * @Annotation
     */
    var Directive = makeDecorator(DirectiveMetadata);
    // TODO(alexeagle): remove the duplication of this doc. It is copied from ViewMetadata.
    /**
     * Metadata properties available for configuring Views.
     *
     * Each Angular component requires a single `@Component` and at least one `@View` annotation. The
     * `@View` annotation specifies the HTML template to use, and lists the directives that are active
     * within the template.
     *
     * When a component is instantiated, the template is loaded into the component's shadow root, and
     * the expressions and statements in the template are evaluated against the component.
     *
     * For details on the `@Component` annotation, see {@link ComponentMetadata}.
     *
     * ### Example
     *
     * ```
     * @Component({
     *   selector: 'greet',
     *   template: 'Hello {{name}}!',
     *   directives: [GreetUser, Bold]
     * })
     * class Greet {
     *   name: string;
     *
     *   constructor() {
     *     this.name = 'World';
     *   }
     * }
     * ```
     * @deprecated
     * @Annotation
     */
    var View = makeDecorator(ViewMetadata, function (fn) { return fn.View = View; });
    /**
     * Specifies that a constant attribute value should be injected.
     *
     * The directive can inject constant string literals of host element attributes.
     *
     * ### Example
     *
     * Suppose we have an `<input>` element and want to know its `type`.
     *
     * ```html
     * <input type="text">
     * ```
     *
     * A decorator can inject string literal `text` like so:
     *
     * {@example core/ts/metadata/metadata.ts region='attributeMetadata'}
     * @stable
     * @Annotation
     */
    var Attribute = makeParamDecorator(AttributeMetadata);
    // TODO(alexeagle): remove the duplication of this doc. It is copied from QueryMetadata.
    /**
     * Declares an injectable parameter to be a live list of directives or variable
     * bindings from the content children of a directive.
     *
     * ### Example ([live demo](http://plnkr.co/edit/lY9m8HLy7z06vDoUaSN2?p=preview))
     *
     * Assume that `<tabs>` component would like to get a list its children `<pane>`
     * components as shown in this example:
     *
     * ```html
     * <tabs>
     *   <pane title="Overview">...</pane>
     *   <pane *ngFor="let o of objects" [title]="o.title">{{o.text}}</pane>
     * </tabs>
     * ```
     *
     * The preferred solution is to query for `Pane` directives using this decorator.
     *
     * ```javascript
     * @Component({
     *   selector: 'pane',
     *   inputs: ['title']
     * })
     * class Pane {
     *   title:string;
     * }
     *
     * @Component({
     *  selector: 'tabs',
     *  template: `
     *    <ul>
     *      <li *ngFor="let pane of panes">{{pane.title}}</li>
     *    </ul>
     *    <ng-content></ng-content>
     *  `
     * })
     * class Tabs {
     *   panes: QueryList<Pane>;
     *   constructor(@Query(Pane) panes:QueryList<Pane>) {
     *     this.panes = panes;
     *   }
     * }
     * ```
     *
     * A query can look for variable bindings by passing in a string with desired binding symbol.
     *
     * ### Example ([live demo](http://plnkr.co/edit/sT2j25cH1dURAyBRCKx1?p=preview))
     * ```html
     * <seeker>
     *   <div #findme>...</div>
     * </seeker>
     *
     * @Component({ selector: 'seeker' })
     * class seeker {
     *   constructor(@Query('findme') elList: QueryList<ElementRef>) {...}
     * }
     * ```
     *
     * In this case the object that is injected depend on the type of the variable
     * binding. It can be an ElementRef, a directive or a component.
     *
     * Passing in a comma separated list of variable bindings will query for all of them.
     *
     * ```html
     * <seeker>
     *   <div #findMe>...</div>
     *   <div #findMeToo>...</div>
     * </seeker>
     *
     *  @Component({
     *   selector: 'seeker'
     * })
     * class Seeker {
     *   constructor(@Query('findMe, findMeToo') elList: QueryList<ElementRef>) {...}
     * }
     * ```
     *
     * Configure whether query looks for direct children or all descendants
     * of the querying element, by using the `descendants` parameter.
     * It is set to `false` by default.
     *
     * ### Example ([live demo](http://plnkr.co/edit/wtGeB977bv7qvA5FTYl9?p=preview))
     * ```html
     * <container #first>
     *   <item>a</item>
     *   <item>b</item>
     *   <container #second>
     *     <item>c</item>
     *   </container>
     * </container>
     * ```
     *
     * When querying for items, the first container will see only `a` and `b` by default,
     * but with `Query(TextDirective, {descendants: true})` it will see `c` too.
     *
     * The queried directives are kept in a depth-first pre-order with respect to their
     * positions in the DOM.
     *
     * Query does not look deep into any subcomponent views.
     *
     * Query is updated as part of the change-detection cycle. Since change detection
     * happens after construction of a directive, QueryList will always be empty when observed in the
     * constructor.
     *
     * The injected object is an unmodifiable live list.
     * See {@link QueryList} for more details.
     * @deprecated
     * @Annotation
     */
    var Query = makeParamDecorator(QueryMetadata);
    // TODO(alexeagle): remove the duplication of this doc. It is copied from ContentChildrenMetadata.
    /**
     * Configures a content query.
     *
     * Content queries are set before the `ngAfterContentInit` callback is called.
     *
     * ### Example
     *
     * ```
     * @Directive({
     *   selector: 'someDir'
     * })
     * class SomeDir {
     *   @ContentChildren(ChildDirective) contentChildren: QueryList<ChildDirective>;
     *
     *   ngAfterContentInit() {
     *     // contentChildren is set
     *   }
     * }
     * ```
     * @stable
     * @Annotation
     */
    var ContentChildren = makePropDecorator(ContentChildrenMetadata);
    // TODO(alexeagle): remove the duplication of this doc. It is copied from ContentChildMetadata.
    /**
     * Configures a content query.
     *
     * Content queries are set before the `ngAfterContentInit` callback is called.
     *
     * ### Example
     *
     * ```
     * @Directive({
     *   selector: 'someDir'
     * })
     * class SomeDir {
     *   @ContentChild(ChildDirective) contentChild;
     *   @ContentChild('container_ref') containerChild
     *
     *   ngAfterContentInit() {
     *     // contentChild is set
     *     // containerChild is set
     *   }
     * }
     * ```
     *
     * ```html
     * <container #container_ref>
     *   <item>a</item>
     *   <item>b</item>
     * </container>
     * ```
     * @stable
     * @Annotation
     */
    var ContentChild = makePropDecorator(ContentChildMetadata);
    // TODO(alexeagle): remove the duplication of this doc. It is copied from ViewChildrenMetadata.
    /**
     * Declares a list of child element references.
     *
     * Angular automatically updates the list when the DOM is updated.
     *
     * `ViewChildren` takes a argument to select elements.
     *
     * - If the argument is a type, directives or components with the type will be bound.
     *
     * - If the argument is a string, the string is interpreted as a list of comma-separated selectors.
     * For each selector, an element containing the matching template variable (e.g. `#child`) will be
     * bound.
     *
     * View children are set before the `ngAfterViewInit` callback is called.
     *
     * ### Example
     *
     * With type selector:
     *
     * ```
     * @Component({
     *   selector: 'child-cmp',
     *   template: '<p>child</p>'
     * })
     * class ChildCmp {
     *   doSomething() {}
     * }
     *
     * @Component({
     *   selector: 'some-cmp',
     *   template: `
     *     <child-cmp></child-cmp>
     *     <child-cmp></child-cmp>
     *     <child-cmp></child-cmp>
     *   `,
     *   directives: [ChildCmp]
     * })
     * class SomeCmp {
     *   @ViewChildren(ChildCmp) children:QueryList<ChildCmp>;
     *
     *   ngAfterViewInit() {
     *     // children are set
     *     this.children.toArray().forEach((child)=>child.doSomething());
     *   }
     * }
     * ```
     *
     * With string selector:
     *
     * ```
     * @Component({
     *   selector: 'child-cmp',
     *   template: '<p>child</p>'
     * })
     * class ChildCmp {
     *   doSomething() {}
     * }
     *
     * @Component({
     *   selector: 'some-cmp',
     *   template: `
     *     <child-cmp #child1></child-cmp>
     *     <child-cmp #child2></child-cmp>
     *     <child-cmp #child3></child-cmp>
     *   `,
     *   directives: [ChildCmp]
     * })
     * class SomeCmp {
     *   @ViewChildren('child1,child2,child3') children:QueryList<ChildCmp>;
     *
     *   ngAfterViewInit() {
     *     // children are set
     *     this.children.toArray().forEach((child)=>child.doSomething());
     *   }
     * }
     * ```
     *
     * See also: [ViewChildrenMetadata]
     * @stable
     * @Annotation
     */
    var ViewChildren = makePropDecorator(ViewChildrenMetadata);
    // TODO(alexeagle): remove the duplication of this doc. It is copied from ViewChildMetadata.
    /**
     * Declares a reference to a child element.
     *
     * `ViewChildren` takes a argument to select elements.
     *
     * - If the argument is a type, a directive or a component with the type will be bound.
     *
     * - If the argument is a string, the string is interpreted as a selector. An element containing the
     * matching template variable (e.g. `#child`) will be bound.
     *
     * In either case, `@ViewChild()` assigns the first (looking from above) element if there are
     * multiple matches.
     *
     * View child is set before the `ngAfterViewInit` callback is called.
     *
     * ### Example
     *
     * With type selector:
     *
     * ```
     * @Component({
     *   selector: 'child-cmp',
     *   template: '<p>child</p>'
     * })
     * class ChildCmp {
     *   doSomething() {}
     * }
     *
     * @Component({
     *   selector: 'some-cmp',
     *   template: '<child-cmp></child-cmp>',
     *   directives: [ChildCmp]
     * })
     * class SomeCmp {
     *   @ViewChild(ChildCmp) child:ChildCmp;
     *
     *   ngAfterViewInit() {
     *     // child is set
     *     this.child.doSomething();
     *   }
     * }
     * ```
     *
     * With string selector:
     *
     * ```
     * @Component({
     *   selector: 'child-cmp',
     *   template: '<p>child</p>'
     * })
     * class ChildCmp {
     *   doSomething() {}
     * }
     *
     * @Component({
     *   selector: 'some-cmp',
     *   template: '<child-cmp #child></child-cmp>',
     *   directives: [ChildCmp]
     * })
     * class SomeCmp {
     *   @ViewChild('child') child:ChildCmp;
     *
     *   ngAfterViewInit() {
     *     // child is set
     *     this.child.doSomething();
     *   }
     * }
     * ```
     * See also: [ViewChildMetadata]
     * @stable
     * @Annotation
     */
    var ViewChild = makePropDecorator(ViewChildMetadata);
    // TODO(alexeagle): remove the duplication of this doc. It is copied from ViewQueryMetadata.
    /**
     * Similar to {@link QueryMetadata}, but querying the component view, instead of
     * the content children.
     *
     * ### Example ([live demo](http://plnkr.co/edit/eNsFHDf7YjyM6IzKxM1j?p=preview))
     *
     * ```javascript
     * @Component({
     *   ...,
     *   template: `
     *     <item> a </item>
     *     <item> b </item>
     *     <item> c </item>
     *   `
     * })
     * class MyComponent {
     *   shown: boolean;
     *
     *   constructor(private @Query(Item) items:QueryList<Item>) {
     *     items.changes.subscribe(() => console.log(items.length));
     *   }
     * }
     * ```
     *
     * Supports the same querying parameters as {@link QueryMetadata}, except
     * `descendants`. This always queries the whole view.
     *
     * As `shown` is flipped between true and false, items will contain zero of one
     * items.
     *
     * Specifies that a {@link QueryList} should be injected.
     *
     * The injected object is an iterable and observable live list.
     * See {@link QueryList} for more details.
     * @deprecated
     * @Annotation
     */
    var ViewQuery = makeParamDecorator(ViewQueryMetadata);
    // TODO(alexeagle): remove the duplication of this doc. It is copied from PipeMetadata.
    /**
     * Declare reusable pipe function.
     *
     * ### Example
     *
     * {@example core/ts/metadata/metadata.ts region='pipe'}
     * @stable
     * @Annotation
     */
    var Pipe = makeDecorator(PipeMetadata);
    // TODO(alexeagle): remove the duplication of this doc. It is copied from InputMetadata.
    /**
     * Declares a data-bound input property.
     *
     * Angular automatically updates data-bound properties during change detection.
     *
     * `InputMetadata` takes an optional parameter that specifies the name
     * used when instantiating a component in the template. When not provided,
     * the name of the decorated property is used.
     *
     * ### Example
     *
     * The following example creates a component with two input properties.
     *
     * ```typescript
     * @Component({
     *   selector: 'bank-account',
     *   template: `
     *     Bank Name: {{bankName}}
     *     Account Id: {{id}}
     *   `
     * })
     * class BankAccount {
     *   @Input() bankName: string;
     *   @Input('account-id') id: string;
     *
     *   // this property is not bound, and won't be automatically updated by Angular
     *   normalizedBankName: string;
     * }
     *
     * @Component({
     *   selector: 'app',
     *   template: `
     *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
     *   `,
     *   directives: [BankAccount]
     * })
     * class App {}
     *
     * bootstrap(App);
     * ```
     * @stable
     * @Annotation
     */
    var Input = makePropDecorator(InputMetadata);
    // TODO(alexeagle): remove the duplication of this doc. It is copied from OutputMetadata.
    /**
     * Declares an event-bound output property.
     *
     * When an output property emits an event, an event handler attached to that event
     * the template is invoked.
     *
     * `OutputMetadata` takes an optional parameter that specifies the name
     * used when instantiating a component in the template. When not provided,
     * the name of the decorated property is used.
     *
     * ### Example
     *
     * ```typescript
     * @Directive({
     *   selector: 'interval-dir',
     * })
     * class IntervalDir {
     *   @Output() everySecond = new EventEmitter();
     *   @Output('everyFiveSeconds') five5Secs = new EventEmitter();
     *
     *   constructor() {
     *     setInterval(() => this.everySecond.emit("event"), 1000);
     *     setInterval(() => this.five5Secs.emit("event"), 5000);
     *   }
     * }
     *
     * @Component({
     *   selector: 'app',
     *   template: `
     *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
     *     </interval-dir>
     *   `,
     *   directives: [IntervalDir]
     * })
     * class App {
     *   everySecond() { console.log('second'); }
     *   everyFiveSeconds() { console.log('five seconds'); }
     * }
     * bootstrap(App);
     * ```
     * @stable
     * @Annotation
     */
    var Output = makePropDecorator(OutputMetadata);
    // TODO(alexeagle): remove the duplication of this doc. It is copied from HostBindingMetadata.
    /**
     * Declares a host property binding.
     *
     * Angular automatically checks host property bindings during change detection.
     * If a binding changes, it will update the host element of the directive.
     *
     * `HostBindingMetadata` takes an optional parameter that specifies the property
     * name of the host element that will be updated. When not provided,
     * the class property name is used.
     *
     * ### Example
     *
     * The following example creates a directive that sets the `valid` and `invalid` classes
     * on the DOM element that has ngModel directive on it.
     *
     * ```typescript
     * @Directive({selector: '[ngModel]'})
     * class NgModelStatus {
     *   constructor(public control:NgModel) {}
     *   @HostBinding('class.valid') get valid() { return this.control.valid; }
     *   @HostBinding('class.invalid') get invalid() { return this.control.invalid; }
     * }
     *
     * @Component({
     *   selector: 'app',
     *   template: `<input [(ngModel)]="prop">`,
     *   directives: [FORM_DIRECTIVES, NgModelStatus]
     * })
     * class App {
     *   prop;
     * }
     *
     * bootstrap(App);
     * ```
     * @stable
     * @Annotation
     */
    var HostBinding = makePropDecorator(HostBindingMetadata);
    // TODO(alexea                   break;
                }
                else if (this.isUnsubscribed) {
                    sub.unsubscribe();
                }
                else {
                    (this._subscriptions || (this._subscriptions = [])).push(sub);
                }
                break;
            default:
                throw new Error('Unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        return sub;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        // HACK: This might be redundant because of the logic in `add()`
        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
            return;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.isUnsubscribed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;

},{"./util/UnsubscriptionError":260,"./util/errorObject":261,"./util/isArray":262,"./util/isFunction":264,"./util/isObject":266,"./util/tryCatch":275}],15:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var bindCallback_1 = require('../../observable/bindCallback');
Observable_1.Observable.bindCallback = bindCallback_1.bindCallback;

},{"../../Observable":5,"../../observable/bindCallback":139}],16:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var bindNodeCallback_1 = require('../../observable/bindNodeCallback');
Observable_1.Observable.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;

},{"../../Observable":5,"../../observable/bindNodeCallback":140}],17:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var combineLatest_1 = require('../../operator/combineLatest');
Observable_1.Observable.combineLatest = combineLatest_1.combineLatestStatic;

},{"../../Observable":5,"../../operator/combineLatest":167}],18:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var concat_1 = require('../../observable/concat');
Observable_1.Observable.concat = concat_1.concat;

},{"../../Observable":5,"../../observable/concat":141}],19:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var defer_1 = require('../../observable/defer');
Observable_1.Observable.defer = defer_1.defer;

},{"../../Observable":5,"../../observable/defer":142}],20:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var empty_1 = require('../../observable/empty');
Observable_1.Observable.empty = empty_1.empty;

},{"../../Observable":5,"../../observable/empty":143}],21:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var forkJoin_1 = require('../../observable/forkJoin');
Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;

},{"../../Observable":5,"../../observable/forkJoin":144}],22:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var from_1 = require('../../observable/from');
Observable_1.Observable.from = from_1.from;

},{"../../Observable":5,"../../observable/from":145}],23:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var fromEvent_1 = require('../../observable/fromEvent');
Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;

},{"../../Observable":5,"../../observable/fromEvent":146}],24:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var fromEventPattern_1 = require('../../observable/fromEventPattern');
Observable_1.Observable.fromEventPattern = fromEventPattern_1.fromEventPattern;

},{"../../Observable":5,"../../observable/fromEventPattern":147}],25:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var fromPromise_1 = require('../../observable/fromPromise');
Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;

},{"../../Observable":5,"../../observable/fromPromise":148}],26:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var interval_1 = require('../../observable/interval');
Observable_1.Observable.interval = interval_1.interval;

},{"../../Observable":5,"../../observable/interval":149}],27:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var merge_1 = require('../../observable/merge');
Observable_1.Observable.merge = merge_1.merge;

},{"../../Observable":5,"../../observable/merge":150}],28:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var never_1 = require('../../observable/never');
Observable_1.Observable.never = never_1.never;

},{"../../Observable":5,"../../observable/never":151}],29:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var of_1 = require('../../observable/of');
Observable_1.Observable.of = of_1.of;

},{"../../Observable":5,"../../observable/of":152}],30:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var race_1 = require('../../operator/race');
Observable_1.Observable.race = race_1.raceStatic;

},{"../../Observable":5,"../../operator/race":205}],31:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var range_1 = require('../../observable/range');
Observable_1.Observable.range = range_1.range;

},{"../../Observable":5,"../../observable/range":153}],32:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var throw_1 = require('../../observable/throw');
Observable_1.Observable.throw = throw_1._throw;

},{"../../Observable":5,"../../observable/throw":154}],33:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var timer_1 = require('../../observable/timer');
Observable_1.Observable.timer = timer_1.timer;

},{"../../Observable":5,"../../observable/timer":155}],34:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var zip_1 = require('../../observable/zip');
Observable_1.Observable.zip = zip_1.zip;

},{"../../Observable":5,"../../observable/zip":156}],35:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var audit_1 = require('../../operator/audit');
Observable_1.Observable.prototype.audit = audit_1.audit;

},{"../../Observable":5,"../../operator/audit":157}],36:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var auditTime_1 = require('../../operator/auditTime');
Observable_1.Observable.prototype.auditTime = auditTime_1.auditTime;

},{"../../Observable":5,"../../operator/auditTime":158}],37:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var buffer_1 = require('../../operator/buffer');
Observable_1.Observable.prototype.buffer = buffer_1.buffer;

},{"../../Observable":5,"../../operator/buffer":159}],38:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var bufferCount_1 = require('../../operator/bufferCount');
Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;

},{"../../Observable":5,"../../operator/bufferCount":160}],39:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var bufferTime_1 = require('../../operator/bufferTime');
Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;

},{"../../Observable":5,"../../operator/bufferTime":161}],40:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var bufferToggle_1 = require('../../operator/bufferToggle');
Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;

},{"../../Observable":5,"../../operator/bufferToggle":162}],41:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var bufferWhen_1 = require('../../operator/bufferWhen');
Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;

},{"../../Observable":5,"../../operator/bufferWhen":163}],42:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var cache_1 = require('../../operator/cache');
Observable_1.Observable.prototype.cache = cache_1.cache;

},{"../../Observable":5,"../../operator/cache":164}],43:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var catch_1 = require('../../operator/catch');
Observable_1.Observable.prototype.catch = catch_1._catch;

},{"../../Observable":5,"../../operator/catch":165}],44:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var combineAll_1 = require('../../operator/combineAll');
Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;

},{"../../Observable":5,"../../operator/combineAll":166}],45:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var combineLatest_1 = require('../../operator/combineLatest');
Observable_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;

},{"../../Observable":5,"../../operator/combineLatest":167}],46:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var concat_1 = require('../../operator/concat');
Observable_1.Observable.prototype.concat = concat_1.concat;

},{"../../Observable":5,"../../operator/concat":168}],47:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var concatAll_1 = require('../../operator/concatAll');
Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;

},{"../../Observable":5,"../../operator/concatAll":169}],48:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var concatMap_1 = require('../../operator/concatMap');
Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;

},{"../../Observable":5,"../../operator/concatMap":170}],49:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var concatMapTo_1 = require('../../operator/concatMapTo');
Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;

},{"../../Observable":5,"../../operator/concatMapTo":171}],50:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var count_1 = require('../../operator/count');
Observable_1.Observable.prototype.count = count_1.count;

},{"../../Observable":5,"../../operator/count":172}],51:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var debounce_1 = require('../../operator/debounce');
Observable_1.Observable.prototype.debounce = debounce_1.debounce;

},{"../../Observable":5,"../../operator/debounce":173}],52:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var debounceTime_1 = require('../../operator/debounceTime');
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;

},{"../../Observable":5,"../../operator/debounceTime":174}],53:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var defaultIfEmpty_1 = require('../../operator/defaultIfEmpty');
Observable_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;

},{"../../Observable":5,"../../operator/defaultIfEmpty":175}],54:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var delay_1 = require('../../operator/delay');
Observable_1.Observable.prototype.delay = delay_1.delay;

},{"../../Observable":5,"../../operator/delay":176}],55:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var delayWhen_1 = require('../../operator/delayWhen');
Observable_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;

},{"../../Observable":5,"../../operator/delayWhen":177}],56:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var dematerialize_1 = require('../../operator/dematerialize');
Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;

},{"../../Observable":5,"../../operator/dematerialize":178}],57:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var distinctUntilChanged_1 = require('../../operator/distinctUntilChanged');
Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;

},{"../../Observable":5,"../../operator/distinctUntilChanged":179}],58:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var do_1 = require('../../operator/do');
Observable_1.Observable.prototype.do = do_1._do;

},{"../../Observable":5,"../../operator/do":180}],59:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var every_1 = require('../../operator/every');
Observable_1.Observable.prototype.every = every_1.every;

},{"../../Observable":5,"../../operator/every":181}],60:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var expand_1 = require('../../operator/expand');
Observable_1.Observable.prototype.expand = expand_1.expand;

},{"../../Observable":5,"../../operator/expand":182}],61:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var filter_1 = require('../../operator/filter');
Observable_1.Observable.prototype.filter = filter_1.filter;

},{"../../Observable":5,"../../operator/filter":183}],62:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var finally_1 = require('../../operator/finally');
Observable_1.Observable.prototype.finally = finally_1._finally;

},{"../../Observable":5,"../../operator/finally":184}],63:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var first_1 = require('../../operator/first');
Observable_1.Observable.prototype.first = first_1.first;

},{"../../Observable":5,"../../operator/first":185}],64:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var groupBy_1 = require('../../operator/groupBy');
Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;

},{"../../Observable":5,"../../operator/groupBy":186}],65:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var ignoreElements_1 = require('../../operator/ignoreElements');
Observable_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;

},{"../../Observable":5,"../../operator/ignoreElements":187}],66:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var last_1 = require('../../operator/last');
Observable_1.Observable.prototype.last = last_1.last;

},{"../../Observable":5,"../../operator/last":188}],67:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var let_1 = require('../../operator/let');
Observable_1.Observable.prototype.let = let_1.letProto;
Observable_1.Observable.prototype.letBind = let_1.letProto;

},{"../../Observable":5,"../../operator/let":189}],68:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var map_1 = require('../../operator/map');
Observable_1.Observable.prototype.map = map_1.map;

},{"../../Observable":5,"../../operator/map":190}],69:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var mapTo_1 = require('../../operator/mapTo');
Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;

},{"../../Observable":5,"../../operator/mapTo":191}],70:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var materialize_1 = require('../../operator/materialize');
Observable_1.Observable.prototype.materialize = materialize_1.materialize;

},{"../../Observable":5,"../../operator/materialize":192}],71:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var merge_1 = require('../../operator/merge');
Observable_1.Observable.prototype.merge = merge_1.merge;

},{"../../Observable":5,"../../operator/merge":193}],72:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var mergeAll_1 = require('../../operator/mergeAll');
Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;

},{"../../Observable":5,"../../operator/mergeAll":194}],73:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var mergeMap_1 = require('../../operator/mergeMap');
Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;

},{"../../Observable":5,"../../operator/mergeMap":195}],74:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var mergeMapTo_1 = require('../../operator/mergeMapTo');
Observable_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;

},{"../../Observable":5,"../../operator/mergeMapTo":196}],75:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var multicast_1 = require('../../operator/multicast');
Observable_1.Observable.prototype.multicast = multicast_1.multicast;

},{"../../Observable":5,"../../operator/multicast":197}],76:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var observeOn_1 = require('../../operator/observeOn');
Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;

},{"../../Observable":5,"../../operator/observeOn":198}],77:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var partition_1 = require('../../operator/partition');
Observable_1.Observable.prototype.partition = partition_1.partition;

},{"../../Observable":5,"../../operator/partition":199}],78:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var pluck_1 = require('../../operator/pluck');
Observable_1.Observable.prototype.pluck = pluck_1.pluck;

},{"../../Observable":5,"../../operator/pluck":200}],79:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var publish_1 = require('../../operator/publish');
Observable_1.Observable.prototype.publish = publish_1.publish;

},{"../../Observable":5,"../../operator/publish":201}],80:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var publishBehavior_1 = require('../../operator/publishBehavior');
Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;

},{"../../Observable":5,"../../operator/publishBehavior":202}],81:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var publishLast_1 = require('../../operator/publishLast');
Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;

},{"../../Observable":5,"../../operator/publishLast":203}],82:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var publishReplay_1 = require('../../operator/publishReplay');
Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;

},{"../../Observable":5,"../../operator/publishReplay":204}],83:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var race_1 = require('../../operator/race');
Observable_1.Observable.prototype.race = race_1.race;

},{"../../Observable":5,"../../operator/race":205}],84:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var reduce_1 = require('../../operator/reduce');
Observable_1.Observable.prototype.reduce = reduce_1.reduce;

},{"../../Observable":5,"../../operator/reduce":206}],85:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var repeat_1 = require('../../operator/repeat');
Observable_1.Observable.prototype.repeat = repeat_1.repeat;

},{"../../Observable":5,"../../operator/repeat":207}],86:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var retry_1 = require('../../operator/retry');
Observable_1.Observable.prototype.retry = retry_1.retry;

},{"../../Observable":5,"../../operator/retry":208}],87:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var retryWhen_1 = require('../../operator/retryWhen');
Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;

},{"../../Observable":5,"../../operator/retryWhen":209}],88:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var sample_1 = require('../../operator/sample');
Observable_1.Observable.prototype.sample = sample_1.sample;

},{"../../Observable":5,"../../operator/sample":210}],89:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var sampleTime_1 = require('../../operator/sampleTime');
Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;

},{"../../Observable":5,"../../operator/sampleTime":211}],90:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var scan_1 = require('../../operator/scan');
Observable_1.Observable.prototype.scan = scan_1.scan;

},{"../../Observable":5,"../../operator/scan":212}],91:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var share_1 = require('../../operator/share');
Observable_1.Observable.prototype.share = share_1.share;

},{"../../Observable":5,"../../operator/share":213}],92:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var single_1 = require('../../operator/single');
Observable_1.Observable.prototype.single = single_1.single;

},{"../../Observable":5,"../../operator/single":214}],93:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var skip_1 = require('../../operator/skip');
Observable_1.Observable.prototype.skip = skip_1.skip;

},{"../../Observable":5,"../../operator/skip":215}],94:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var skipUntil_1 = require('../../operator/skipUntil');
Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;

},{"../../Observable":5,"../../operator/skipUntil":216}],95:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var skipWhile_1 = require('../../operator/skipWhile');
Observable_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;

},{"../../Observable":5,"../../operator/skipWhile":217}],96:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var startWith_1 = require('../../operator/startWith');
Observable_1.Observable.prototype.startWith = startWith_1.startWith;

},{"../../Observable":5,"../../operator/startWith":218}],97:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var subscribeOn_1 = require('../../operator/subscribeOn');
Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;

},{"../../Observable":5,"../../operator/subscribeOn":219}],98:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var switch_1 = require('../../operator/switch');
Observable_1.Observable.prototype.switch = switch_1._switch;

},{"../../Observable":5,"../../operator/switch":220}],99:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var switchMap_1 = require('../../operator/switchMap');
Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;

},{"../../Observable":5,"../../operator/switchMap":221}],100:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var switchMapTo_1 = require('../../operator/switchMapTo');
Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;

},{"../../Observable":5,"../../operator/switchMapTo":222}],101:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var take_1 = require('../../operator/take');
Observable_1.Observable.prototype.take = take_1.take;

},{"../../Observable":5,"../../operator/take":223}],102:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var takeLast_1 = require('../../operator/takeLast');
Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;

},{"../../Observable":5,"../../operator/takeLast":224}],103:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var takeUntil_1 = require('../../operator/takeUntil');
Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;

},{"../../Observable":5,"../../operator/takeUntil":225}],104:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var takeWhile_1 = require('../../operator/takeWhile');
Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;

},{"../../Observable":5,"../../operator/takeWhile":226}],105:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var throttle_1 = require('../../operator/throttle');
Observable_1.Observable.prototype.throttle = throttle_1.throttle;

},{"../../Observable":5,"../../operator/throttle":227}],106:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var throttleTime_1 = require('../../operator/throttleTime');
Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;

},{"../../Observable":5,"../../operator/throttleTime":228}],107:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var timeout_1 = require('../../operator/timeout');
Observable_1.Observable.prototype.timeout = timeout_1.timeout;

},{"../../Observable":5,"../../operator/timeout":229}],108:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var timeoutWith_1 = require('../../operator/timeoutWith');
Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;

},{"../../Observable":5,"../../operator/timeoutWith":230}],109:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var toArray_1 = require('../../operator/toArray');
Observable_1.Observable.prototype.toArray = toArray_1.toArray;

},{"../../Observable":5,"../../operator/toArray":231}],110:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var toPromise_1 = require('../../operator/toPromise');
Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;

},{"../../Observable":5,"../../operator/toPromise":232}],111:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var window_1 = require('../../operator/window');
Observable_1.Observable.prototype.window = window_1.window;

},{"../../Observable":5,"../../operator/window":233}],112:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var windowCount_1 = require('../../operator/windowCount');
Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;

},{"../../Observable":5,"../../operator/windowCount":234}],113:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var windowTime_1 = require('../../operator/windowTime');
Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;

},{"../../Observable":5,"../../operator/windowTime":235}],114:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var windowToggle_1 = require('../../operator/windowToggle');
Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;

},{"../../Observable":5,"../../operator/windowToggle":236}],115:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var windowWhen_1 = require('../../operator/windowWhen');
Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;

},{"../../Observable":5,"../../operator/windowWhen":237}],116:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var withLatestFrom_1 = require('../../operator/withLatestFrom');
Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;

},{"../../Observable":5,"../../operator/withLatestFrom":238}],117:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var zip_1 = require('../../operator/zip');
Observable_1.Observable.prototype.zip = zip_1.zipProto;

},{"../../Observable":5,"../../operator/zip":239}],118:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var zipAll_1 = require('../../operator/zipAll');
Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;

},{"../../Observable":5,"../../operator/zipAll":240}],119:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('../Observable');
var ScalarObservable_1 = require('./ScalarObservable');
var EmptyObservable_1 = require('./EmptyObservable');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ArrayLikeObservable = (function (_super) {
    __extends(ArrayLikeObservable, _super);
    function ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler) {
        _super.call(this);
        this.arrayLike = arrayLike;
        this.scheduler = scheduler;
        if (!mapFn && !scheduler && arrayLike.length === 1) {
            this._isScalar = true;
            this.value = arrayLike[0];
        }
        if (mapFn) {
            this.mapFn = mapFn.bind(thisArg);
        }
    }
    ArrayLikeObservable.create = function (arrayLike, mapFn, thisArg, scheduler) {
        var length = arrayLike.length;
        if (length === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        else if (length === 1 && !mapFn) {
            return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
        }
        else {
            return new ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler);
        }
    };
    ArrayLikeObservable.dispatch = function (state) {
        var arrayLike = state.arrayLike, index = state.index, length = state.length, mapFn = state.mapFn, subscriber = state.subscriber;
        if (subscriber.isUnsubscribed) {
            return;
        }
        if (index >= length) {
            subscriber.complete();
            return;
        }
        var result = mapFn ? mapFn(arrayLike[index], index) : arrayLike[index];
        subscriber.next(result);
        state.index = index + 1;
        this.schedule(state);
    };
    ArrayLikeObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var _a = this, arrayLike = _a.arrayLike, mapFn = _a.mapFn, scheduler = _a.scheduler;
        var length = arrayLike.length;
        if (scheduler) {
            return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
                arrayLike: arrayLike, index: index, length: length, mapFn: mapFn, subscriber: subscriber
            });
        }
        else {
            for (var i = 0; i < length && !subscriber.isUnsubscribed; i++) {
                var result = mapFn ? mapFn(arrayLike[i], i) : arrayLike[i];
                subscriber.next(result);
            }
            subscriber.complete();
        }
    };
    return ArrayLikeObservable;
}(Observable_1.Observable));
exports.ArrayLikeObservable = ArrayLikeObservable;

},{"../Observable":5,"./EmptyObservable":125,"./ScalarObservable":136}],120:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('../Observable');
var ScalarObservable_1 = require('./ScalarObservable');
var EmptyObservable_1 = require('./EmptyObservable');
var isScheduler_1 = require('../util/isScheduler');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ArrayObservable = (function (_super) {
    __extends(ArrayObservable, _super);
    function ArrayObservable(array, scheduler) {
        _super.call(this);
        this.array = array;
        this.scheduler = scheduler;
        if (!scheduler && array.length === 1) {
            this._isScalar = true;
            this.value = array[0];
        }
    }
    ArrayObservable.create = function (array, scheduler) {
        return new ArrayObservable(array, scheduler);
    };
    /**
     * Creates an Observable that emits some values you specify as arguments,
     * immediately one after the other, and then emits a complete notification.
     *
     * <span class="informal">Emits the arguments you provide, then completes.
     * </span>
     *
     * <img src="./img/of.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the arguments given, and the complete notification thereafter. It can
     * be used for composing with other Observables, such as with {@link concat}.
     * By default, it uses a `null` Scheduler, which means the `next`
     * notifications are sent synchronously, although with a different Scheduler
     * it is possible to determine when those notifications will be delivered.
     *
     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
     * var numbers = Rx.Observable.of(10, 20, 30);
     * var letters = Rx.Observable.of('a', 'b', 'c');
     * var interval = Rx.Observable.interval(1000);
     * var result = numbers.concat(letters).concat(interval);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link throw}
     *
     * @param {...T} values Arguments that represent `next` values to be emitted.
     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
     * the emissions of the `next` notifications.
     * @return {Observable<T>} An Observable that emits each given input value.
     * @static true
     * @name of
     * @owner Observable
     */
    ArrayObservable.of = function () {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i - 0] = arguments[_i];
        }
        var scheduler = array[array.length - 1];
        if (isScheduler_1.isScheduler(scheduler)) {
            array.pop();
        }
        else {
            scheduler = null;
        }
        var len = array.length;
        if (len > 1) {
            return new ArrayObservable(array, scheduler);
        }
        else if (len === 1) {
            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
        }
        else {
            return new EmptyObservable_1.EmptyObservable(scheduler);
        }
    };
    ArrayObservable.dispatch = function (state) {
        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(array[index]);
        if (subscriber.isUnsubscribed) {
            return;
        }
        state.index = index + 1;
        this.schedule(state);
    };
    ArrayObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var array = this.array;
        var count = array.length;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ArrayObservable.dispatch, 0, {
                array: array, index: index, count: count, subscriber: subscriber
            });
        }
        else {
            for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
                subscriber.next(array[i]);
            }
            subscriber.complete();
        }
    };
    return ArrayObservable;
}(Observable_1.Observable));
exports.ArrayObservable = ArrayObservable;

},{"../Observable":5,"../util/isScheduler":268,"./EmptyObservable":125,"./ScalarObservable":136}],121:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('../Observable');
var tryCatch_1 = require('../util/tryCatch');
var errorObject_1 = require('../util/errorObject');
var AsyncSubject_1 = require('../AsyncSubject');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundCallbackObservable = (function (_super) {
    __extends(BoundCallbackObservable, _super);
    function BoundCallbackObservable(callbackFunc, selector, args, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a callback function to an observable sequence.
     * @param {function} callbackFunc Function with a callback as the last
     * parameter.
     * @param {function} selector A selector which takes the arguments from the
     * callback to produce a single item to yield on next.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule
     * the callbacks.
     * @return {function(...params: *): Observable<T>} a function which returns the
     * Observable that corresponds to the callback.
     * @static true
     * @name bindCallback
     * @owner Observable
     */
    BoundCallbackObservable.create = function (callbackFunc, selector, scheduler) {
        if (selector === void 0) { selector = undefined; }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundCallbackObservable(callbackFunc, selector, args, scheduler);
        };
    };
    BoundCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new AsyncSubject_1.AsyncSubject();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    if (selector) {
                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                        if (result_1 === errorObject_1.errorObject) {
                            subject.error(errorObject_1.errorObject.e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
                if (result === errorObject_1.errorObject) {
                    subject.error(errorObject_1.errorObject.e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber });
        }
    };
    return BoundCallbackObservable;
}(Observable_1.Observable));
exports.BoundCallbackObservable = BoundCallbackObservable;
function dispatch(state) {
    var self = this;
    var source = state.source, subscriber = state.subscriber;
    var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
    var subject = source.subject;
    if (!subject) {
        subject = source.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector, subject = source.subject;
            if (selector) {
                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                if (result_2 === errorObject_1.errorObject) {
                    self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
                }
                else {
                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                }
            }
            else {
                var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        // use named function to pass values in without closure
        handler.source = source;
        var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
        if (result === errorObject_1.errorObject) {
            subject.error(errorObject_1.errorObject.e);
        }
    }
    self.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}

},{"../AsyncSubject":1,"../Observable":5,"../util/errorObject":261,"../util/tryCatch":275}],122:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('../Observable');
var tryCatch_1 = require('../util/tryCatch');
var errorObject_1 = require('../util/errorObject');
var AsyncSubject_1 = require('../AsyncSubject');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundNodeCallbackObservable = (function (_super) {
    __extends(BoundNodeCallbackObservable, _super);
    function BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a node callback to an Observable.
     * @param callbackFunc
     * @param selector
     * @param scheduler
     * @return {function(...params: *): Observable<T>}
     * @static true
     * @name bindNodeCallback
     * @owner Observable
     */
    BoundNodeCallbackObservable.create = function (callbackFunc, selector, scheduler) {
        if (selector === void 0) { selector = undefined; }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler);
        };
    };
    BoundNodeCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new AsyncSubject_1.AsyncSubject();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    var err = innerArgs.shift();
                    if (err) {
                        subject.error(err);
                    }
                    else if (selector) {
                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                        if (result_1 === errorObject_1.errorObject) {
                            subject.error(errorObject_1.errorObject.e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
                if (result === errorObject_1.errorObject) {
                    subject.error(errorObject_1.errorObject.e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber });
        }
    };
    return BoundNodeCallbackObservable;
}(Observable_1.Observable));
exports.BoundNodeCallbackObservable = BoundNodeCallbackObservable;
function dispatch(state) {
    var self = this;
    var source = state.source, subscriber = state.subscriber;
    var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
    var subject = source.subject;
    if (!subject) {
        subject = source.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector, subject = source.subject;
            var err = innerArgs.shift();
            if (err) {
                subject.error(err);
            }
            else if (selector) {
                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                if (result_2 === errorObject_1.errorObject) {
                    self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
                }
                else {
                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                }
            }
            else {
                var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        // use named function to pass values in without closure
        handler.source = source;
        var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
        if (result === errorObject_1.errorObject) {
            subject.error(errorObject_1.errorObject.e);
        }
    }
    self.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}

},{"../AsyncSubject":1,"../Observable":5,"../util/errorObject":261,"../util/tryCatch":275}],123:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('../Observable');
var Subscriber_1 = require('../Subscriber');
var Subscription_1 = require('../Subscription');
/**
 * @class ConnectableObservable<T>
 */
var ConnectableObservable = (function (_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        _super.call(this);
        this.source = source;
        this.subjectFactory = subjectFactory;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this.subject;
        if (subject && !subject.isUnsubscribed) {
            return subject;
        }
        return (this.subject = this.subjectFactory());
    };
    ConnectableObservable.prototype.connect = function () {
        var source = this.source;
        var subscription = this.subscription;
        if (subscription && !subscription.isUnsubscribed) {
            return subscription;
        }
        subscription = source.subscribe(this.getSubject());
        subscription.add(new ConnectableSubscription(this));
        return (this.subscription = subscription);
    };
    ConnectableObservable.prototype.refCount = function () {
        return new RefCountObservable(this);
    };
    /**
     * This method is opened for `ConnectableSubscription`.
     * Not to call from others.
     */
    ConnectableObservable.prototype._closeSubscription = function () {
        this.subject = null;
        this.subscription = null;
    };
    return ConnectableObservable;
}(Observable_1.Observable));
exports.ConnectableObservable = ConnectableObservable;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ConnectableSubscription = (function (_super) {
    __extends(ConnectableSubscription, _super);
    function ConnectableSubscription(connectable) {
        _super.call(this);
        this.connectable = connectable;
    }
    ConnectableSubscription.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        connectable._closeSubscription();
        this.connectable = null;
    };
    return ConnectableSubscription;
}(Subscription_1.Subscription));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RefCountObservable = (function (_super) {
    __extends(RefCountObservable, _super);
    function RefCountObservable(connectable, refCount) {
        if (refCount === void 0) { refCount = 0; }
        _super.call(this);
        this.connectable = connectable;
        this.refCount = refCount;
    }
    RefCountObservable.prototype._subscribe = function (subscriber) {
        var connectable = this.connectable;
        var refCountSubscriber = new RefCountSubscriber(subscriber, this);
        var subscription = connectable.subscribe(refCountSubscriber);
        if (!subscription.isUnsubscribed && ++this.refCount === 1) {
            refCountSubscriber.connection = this.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountObservable;
}(Observable_1.Observable));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RefCountSubscriber = (function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, refCountObservable) {
        _super.call(this, null);
        this.destination = destination;
        this.refCountObservable = refCountObservable;
        this.connection = refCountObservable.connection;
        destination.add(this);
    }
    RefCountSubscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    RefCountSubscriber.prototype._error = function (err) {
        this._resetConnectable();
        this.destination.error(err);
    };
    RefCountSubscriber.prototype._complete = function () {
        this._resetConnectable();
        this.destination.complete();
    };
    RefCountSubscriber.prototype._resetConnectable = function () {
        var observable = this.refCountObservable;
        var obsConnection = observable.connection;
        var subConnection = this.connection;
        if (subConnection && subConnection === obsConnection) {
            observable.refCount = 0;
            obsConnection.unsubscribe();
            observable.connection = null;
            this.unsubscribe();
        }
    };
    RefCountSubscriber.prototype._unsubscribe = function () {
        var observable = this.refCountObservable;
        if (observable.refCount === 0) {
            return;
        }
        if (--observable.refCount === 0) {
            var obsConnection = observable.connection;
            var subConnection = this.connection;
            if (subConnection && subConnection === obsConnection) {
                obsConnection.unsubscribe();
                observable.connection = null;
            }
        }
    };
    return RefCountSubscriber;
}(Subscriber_1.Subscriber));

},{"../Observable":5,"../Subscriber":13,"../Subscription":14}],124:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('../Observable');
var subscribeToResult_1 = require('../util/subscribeToResult');
var OuterSubscriber_1 = require('../OuterSubscriber');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var DeferObservable = (function (_super) {
    __extends(DeferObservable, _super);
    function DeferObservable(observableFactory) {
        _super.call(this);
        this.observableFactory = observableFactory;
    }
    /**
     * Creates an Observable that, on subscribe, calls an Observable factory to
     * make an Observable for each new Observer.
     *
     * <span class="informal">Creates the Observable lazily, that is, only when it
     * is subscribed.
     * </span>
     *
     * <img src="./img/defer.png" width="100%">
     *
     * `defer` allows you to create the Observable only when the Observer
     * subscribes, and create a fresh Observable for each Observer. It waits until
     * an Observer subscribes to it, and then it generates an Observable,
     * typically with an Observable factory function. It does this afresh for each
     * subscriber, so although each subscriber may think it is subscribing to the
     * same Observable, in fact each subscriber gets its own individual
     * Observable.
     *
     * @example <caption>Subscribe to either an Observable of clicks or an Observable of interval, at random</caption>
     * var clicksOrInterval = Rx.Observable.defer(function () {
     *   if (Math.random() > 0.5) {
     *     return Rx.Observable.fromEvent(document, 'click');
     *   } else {
     *     return Rx.Observable.interval(1000);
     *   }
     * });
     * clicksOrInterval.subscribe(x => console.log(x));
     *
     * @see {@link create}
     *
     * @param {function(): Observable|Promise} observableFactory The Observable
     * factory function to invoke for each Observer that subscribes to the output
     * Observable. May also return a Promise, which will be converted on the fly
     * to an Observable.
     * @return {Observable} An Observable whose Observers' subscriptions trigger
     * an invocation of the given Observable factory function.
     * @static true
     * @name defer
     * @owner Observable
     */
    DeferObservable.create = function (observableFactory) {
        return new DeferObservable(observableFactory);
    };
    DeferObservable.prototype._subscribe = function (subscriber) {
        return new DeferSubscriber(subscriber, this.observableFactory);
    };
    return DeferObservable;
}(Observable_1.Observable));
exports.DeferObservable = DeferObservable;
var DeferSubscriber = (function (_super) {
    __extends(DeferSubscriber, _super);
    function DeferSubscriber(destination, factory) {
        _super.call(this, destination);
        this.factory = factory;
        this.tryDefer();
    }
    DeferSubscriber.prototype.tryDefer = function () {
        try {
            this._callFactory();
        }
        catch (err) {
            this._error(err);
        }
    };
    DeferSubscriber.prototype._callFactory = function () {
        var result = this.factory();
        if (result) {
            this.add(subscribeToResult_1.subscribeToResult(this, result));
        }
    };
    return DeferSubscriber;
}(OuterSubscriber_1.OuterSubscriber));

},{"../Observable":5,"../OuterSubscriber":8,"../util/subscribeToResult":272}],125:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('../Observable');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var EmptyObservable = (function (_super) {
    __extends(EmptyObservable, _super);
    function EmptyObservable(scheduler) {
        _super.call(this);
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits a complete notification.
     *
     * <span class="informal">Just emits 'complete', and nothing else.
     * </span>
     *
     * <img src="./img/empty.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the complete notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then complete.</caption>
     * var result = Rx.Observable.empty().startWith(7);
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
     * );
     * result.subscribe(x => console.log(x));
     *
     * @see {@link create}
     * @see {@link never}
     * @see {@link of}
     * @see {@link throw}
     *
     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
     * the emission of the complete notification.
     * @return {Observable} An "empty" Observable: emits only the complete
     * notification.
     * @static true
     * @name empty
     * @owner Observable
     */
    EmptyObservable.create = function (scheduler) {
        return new EmptyObservable(scheduler);
    };
    EmptyObservable.dispatch = function (arg) {
        var subscriber = arg.subscriber;
        subscriber.complete();
    };
    EmptyObservable.prototype._subscribe = function (subscriber) {
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
        }
        else {
            subscriber.complete();
        }
    };
    return EmptyObservable;
}(Observable_1.Observable));
exports.EmptyObservable = EmptyObservable;

},{"../Observable":5}],126:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('../Observable');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ErrorObservable = (function (_super) {
    __extends(ErrorObservable, _super);
    function ErrorObservable(error, scheduler) {
        _super.call(this);
        this.error = error;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits an error notification.
     *
     * <span class="informal">Just emits 'error', and nothing else.
     * </span>
     *
     * <img src="./img/throw.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the error notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then emit an error.</caption>
     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @example <caption>Map and flattens numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x === 13 ?
     *     Rx.Observable.throw('Thirteens are bad') :
     *     Rx.Observable.of('a', 'b', 'c')
     * );
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link of}
     *
     * @param {any} error The particular Error to pass to the error notification.
     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
     * the emission of the error notification.
     * @return {Observable} An error Observable: emits only the error notification
     * using the given error argument.
     * @static true
     * @name throw
     * @owner Observable
     */
    ErrorObservable.create = function (error, scheduler) {
        return new ErrorObservable(error, scheduler);
    };
    ErrorObservable.dispatch = function (arg) {
        var error = arg.error, subscriber = arg.subscriber;
        subscriber.error(error);
    };
    ErrorObservable.prototype._subscribe = function (subscriber) {
        var error = this.error;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ErrorObservable.dispatch, 0, {
                error: error, subscriber: subscriber
            });
        }
        else {
            subscriber.error(error);
        }
    };
    return ErrorObservable;
}(Observable_1.Observable));
exports.ErrorObservable = ErrorObservable;

},{"../Observable":5}],127:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __()itizationService));
    /** @nocollapse */
    DomSanitizationServiceImpl.decorators = [
        { type: _angular_core.Injectable },
    ];
    var SafeValueImpl = (function () {
        function SafeValueImpl(changingThisBreaksApplicationSecurity) {
            this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
            // empty
        }
        SafeValueImpl.prototype.toString = function () {
            return ("SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity) +
                " (see http://g.co/ng/security#xss)";
        };
        return SafeValueImpl;
    }());
    var SafeHtmlImpl = (function (_super) {
        __extends(SafeHtmlImpl, _super);
        function SafeHtmlImpl() {
            _super.apply(this, arguments);
        }
        SafeHtmlImpl.prototype.getTypeName = function () { return 'HTML'; };
        return SafeHtmlImpl;
    }(SafeValueImpl));
    var SafeStyleImpl = (function (_super) {
        __extends(SafeStyleImpl, _super);
        function SafeStyleImpl() {
            _super.apply(this, arguments);
        }
        SafeStyleImpl.prototype.getTypeName = function () { return 'Style'; };
        return SafeStyleImpl;
    }(SafeValueImpl));
    var SafeScriptImpl = (function (_super) {
        __extends(SafeScriptImpl, _super);
        function SafeScriptImpl() {
            _super.apply(this, arguments);
        }
        SafeScriptImpl.prototype.getTypeName = function () { return 'Script'; };
        return SafeScriptImpl;
    }(SafeValueImpl));
    var SafeUrlImpl = (function (_super) {
        __extends(SafeUrlImpl, _super);
        function SafeUrlImpl() {
            _super.apply(this, arguments);
        }
        SafeUrlImpl.prototype.getTypeName = function () { return 'URL'; };
        return SafeUrlImpl;
    }(SafeValueImpl));
    var SafeResourceUrlImpl = (function (_super) {
        __extends(SafeResourceUrlImpl, _super);
        function SafeResourceUrlImpl() {
            _super.apply(this, arguments);
        }
        SafeResourceUrlImpl.prototype.getTypeName = function () { return 'ResourceURL'; };
        return SafeResourceUrlImpl;
    }(SafeValueImpl));
    var CAMEL_CASE_REGEXP = /([A-Z])/g;
    var DASH_CASE_REGEXP = /-([a-z])/g;
    function camelCaseToDashCase(input) {
        return StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, function (m /** TODO #9100 */) { return '-' + m[1].toLowerCase(); });
    }
    function dashCaseToCamelCase(input) {
        return StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, function (m /** TODO #9100 */) { return m[1].toUpperCase(); });
    }
    var WebAnimationsPlayer = (function () {
        function WebAnimationsPlayer(_player, totalTime) {
            var _this = this;
            this._player = _player;
            this.totalTime = totalTime;
            this._subscriptions = [];
            this._finished = false;
            this.parentPlayer = null;
            // this is required to make the player startable at a later time
            this.reset();
            this._player.onfinish = function () { return _this._onFinish(); };
        }
        WebAnimationsPlayer.prototype._onFinish = function () {
            if (!this._finished) {
                this._finished = true;
                if (!isPresent(this.parentPlayer)) {
                    this.destroy();
                }
                this._subscriptions.forEach(function (fn) { return fn(); });
                this._subscriptions = [];
            }
        };
        WebAnimationsPlayer.prototype.onDone = function (fn) { this._subscriptions.push(fn); };
        WebAnimationsPlayer.prototype.play = function () { this._player.play(); };
        WebAnimationsPlayer.prototype.pause = function () { this._player.pause(); };
        WebAnimationsPlayer.prototype.finish = function () {
            this._onFinish();
            this._player.finish();
        };
        WebAnimationsPlayer.prototype.reset = function () { this._player.cancel(); };
        WebAnimationsPlayer.prototype.restart = function () {
            this.reset();
            this.play();
        };
        WebAnimationsPlayer.prototype.destroy = function () {
            this.reset();
            this._onFinish();
        };
        WebAnimationsPlayer.prototype.setPosition = function (p /** TODO #9100 */) { this._player.currentTime = p * this.totalTime; };
        WebAnimationsPlayer.prototype.getPosition = function () { return this._player.currentTime / this.totalTime; };
        return WebAnimationsPlayer;
    }());
    var WebAnimationsDriver = (function () {
        function WebAnimationsDriver() {
        }
        WebAnimationsDriver.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing) {
            var anyElm = element;
            var formattedSteps = [];
            var startingStyleLookup = {};
            if (isPresent(startingStyles) && startingStyles.styles.length > 0) {
                startingStyleLookup = _populateStyles(anyElm, startingStyles, {});
                startingStyleLookup['offset'] = 0;
                formattedSteps.push(startingStyleLookup);
            }
            keyframes.forEach(function (keyframe) {
                var data = _populateStyles(anyElm, keyframe.styles, startingStyleLookup);
                data['offset'] = keyframe.offset;
                formattedSteps.push(data);
            });
            // this is a special case when only styles are applied as an
            // animation. When this occurs we want to animate from start to
            // end with the same values. Removing the offset and having only
            // start/end values is suitable enough for the web-animations API
            if (formattedSteps.length == 1) {
                var start = formattedSteps[0];
                start['offset'] = null;
                formattedSteps = [start, start];
            }
            var playerOptions = {
                'duration': duration,
                'delay': delay,
                'easing': easing,
                'fill': 'both' // we use `both` because it allows for styling at 0% to work with `delay`
            };
            var player = this._triggerWebAnimation(anyElm, formattedSteps, playerOptions);
            return new WebAnimationsPlayer(player, duration);
        };
        /** @internal */
        WebAnimationsDriver.prototype._triggerWebAnimation = function (elm, keyframes, options) {
            return elm.animate(keyframes, options);
        };
        return WebAnimationsDriver;
    }());
    function _populateStyles(element, styles, defaultStyles) {
        var data = {};
        styles.styles.forEach(function (entry) {
            StringMapWrapper.forEach(entry, function (val, prop) {
                var formattedProp = dashCaseToCamelCase(prop);
                data[formattedProp] = val == _angular_core.AUTO_STYLE ?
                    _computeStyle(element, formattedProp) :
                    val.toString() + _resolveStyleUnit(val, prop, formattedProp);
            });
        });
        StringMapWrapper.forEach(defaultStyles, function (value, prop) {
            if (!isPresent(data[prop])) {
                data[prop] = value;
            }
        });
        return data;
    }
    function _resolveStyleUnit(val, userProvidedProp, formattedProp) {
        var unit = '';
        if (_isPixelDimensionStyle(formattedProp) && val != 0 && val != '0') {
            if (isNumber(val)) {
                unit = 'px';
            }
            else if (_findDimensionalSuffix(val.toString()).length == 0) {
                throw new _angular_core.BaseException('Please provide a CSS unit value for ' + userProvidedProp + ':' + val);
            }
        }
        return unit;
    }
    var _$0 = 48;
    var _$9 = 57;
    var _$PERIOD = 46;
    function _findDimensionalSuffix(value) {
        for (var i = 0; i < value.length; i++) {
            var c = StringWrapper.charCodeAt(value, i);
            if ((c >= _$0 && c <= _$9) || c == _$PERIOD)
                continue;
            return value.substring(i, value.length);
        }
        return '';
    }
    function _isPixelDimensionStyle(prop) {
        switch (prop) {
            case 'width':
            case 'height':
            case 'minWidth':
            case 'minHeight':
            case 'maxWidth':
            case 'maxHeight':
            case 'left':
            case 'top':
            case 'bottom':
            case 'right':
            case 'fontSize':
            case 'outlineWidth':
            case 'outlineOffset':
            case 'paddingTop':
            case 'paddingLeft':
            case 'paddingBottom':
            case 'paddingRight':
            case 'marginTop':
            case 'marginLeft':
            case 'marginBottom':
            case 'marginRight':
            case 'borderRadius':
            case 'borderWidth':
            case 'borderTopWidth':
            case 'borderLeftWidth':
            case 'borderRightWidth':
            case 'borderBottomWidth':
            case 'textIndent':
                return true;
            default:
                return false;
        }
    }
    function _computeStyle(element, prop) {
        return getDOM().getComputedStyle(element)[prop];
    }
    /**
     * Provides DOM operations in any browser environment.
     */
    var GenericBrowserDomAdapter = (function (_super) {
        __extends(GenericBrowserDomAdapter, _super);
        function GenericBrowserDomAdapter() {
            var _this = this;
            _super.call(this);
            this._animationPrefix = null;
            this._transitionEnd = null;
            try {
                var element = this.createElement('div', this.defaultDoc());
                if (isPresent(this.getStyle(element, 'animationName'))) {
                    this._animationPrefix = '';
                }
                else {
                    var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
                    for (var i = 0; i < domPrefixes.length; i++) {
                        if (isPresent(this.getStyle(element, domPrefixes[i] + 'AnimationName'))) {
                            this._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
                            break;
                        }
                    }
                }
                var transEndEventNames = {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd otransitionend',
                    transition: 'transitionend'
                };
                StringMapWrapper.forEach(transEndEventNames, function (value, key) {
                    if (isPresent(_this.getStyle(element, key))) {
                        _this._transitionEnd = value;
                    }
                });
            }
            catch (e) {
                this._animationPrefix = null;
                this._transitionEnd = null;
            }
        }
        GenericBrowserDomAdapter.prototype.getDistributedNodes = function (el) { return el.getDistributedNodes(); };
        GenericBrowserDomAdapter.prototype.resolveAndSetHref = function (el, baseUrl, href) {
            el.href = href == null ? baseUrl : baseUrl + '/../' + href;
        };
        GenericBrowserDomAdapter.prototype.supportsDOMEvents = function () { return true; };
        GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = function () {
            return isFunction(this.defaultDoc().body.createShadowRoot);
        };
        GenericBrowserDomAdapter.prototype.getAnimationPrefix = function () {
            return isPresent(this._animationPrefix) ? this._animationPrefix : '';
        };
        GenericBrowserDomAdapter.prototype.getTransitionEnd = function () { return isPresent(this._transitionEnd) ? this._transitionEnd : ''; };
        GenericBrowserDomAdapter.prototype.supportsAnimation = function () {
            return isPresent(this._animationPrefix) && isPresent(this._transitionEnd);
        };
        return GenericBrowserDomAdapter;
    }(DomAdapter));
    var _attrToPropMap = {
        'class': 'className',
        'innerHtml': 'innerHTML',
        'readonly': 'readOnly',
        'tabindex': 'tabIndex'
    };
    var DOM_KEY_LOCATION_NUMPAD = 3;
    // Map to convert some key or keyIdentifier values to what will be returned by getEventKey
    var _keyMap = {
        // The following values are here for cross-browser compatibility and to match the W3C standard
        // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
        '\b': 'Backspace',
        '\t': 'Tab',
        '\x7F': 'Delete',
        '\x1B': 'Escape',
        'Del': 'Delete',
        'Esc': 'Escape',
        'Left': 'ArrowLeft',
        'Right': 'ArrowRight',
        'Up': 'ArrowUp',
        'Down': 'ArrowDown',
        'Menu': 'ContextMenu',
        'Scroll': 'ScrollLock',
        'Win': 'OS'
    };
    // There is a bug in Chrome for numeric keypad keys:
    // https://code.google.com/p/chromium/issues/detail?id=155654
    // 1, 2, 3 ... are reported as A, B, C ...
    var _chromeNumKeyPadMap = {
        'A': '1',
        'B': '2',
        'C': '3',
        'D': '4',
        'E': '5',
        'F': '6',
        'G': '7',
        'H': '8',
        'I': '9',
        'J': '*',
        'K': '+',
        'M': '-',
        'N': '.',
        'O': '/',
        '\x60': '0',
        '\x90': 'NumLock'
    };
    /**
     * A `DomAdapter` powered by full browser DOM APIs.
     */
    /* tslint:disable:requireParameterType */
    var BrowserDomAdapter = (function (_super) {
        __extends(BrowserDomAdapter, _super);
        function BrowserDomAdapter() {
            _super.apply(this, arguments);
        }
        BrowserDomAdapter.prototype.parse = function (templateHtml) { throw new Error('parse not implemented'); };
        BrowserDomAdapter.makeCurrent = function () { setRootDomAdapter(new BrowserDomAdapter()); };
        BrowserDomAdapter.prototype.hasProperty = function (element /** TODO #9100 */, name) { return name in element; };
        BrowserDomAdapter.prototype.setProperty = function (el, name, value) { el[name] = value; };
        BrowserDomAdapter.prototype.getProperty = function (el, name) { return el[name]; };
        BrowserDomAdapter.prototype.invoke = function (el, methodName, args) {
            el[methodName].apply(el, args);
        };
        // TODO(tbosch): move this into a separate environment class once we have it
        BrowserDomAdapter.prototype.logError = function (error /** TODO #9100 */) {
            if (window.console.error) {
                window.console.error(error);
            }
            else {
                window.console.log(error);
            }
        };
        BrowserDomAdapter.prototype.log = function (error /** TODO #9100 */) { window.console.log(error); };
        BrowserDomAdapter.prototype.logGroup = function (error /** TODO #9100 */) {
            if (window.console.group) {
                window.console.group(error);
                this.logError(error);
            }
            else {
                window.console.log(error);
            }
        };
        BrowserDomAdapter.prototype.logGroupEnd = function () {
            if (window.console.groupEnd) {
                window.console.groupEnd();
            }
        };
        Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
            get: function () { return _attrToPropMap; },
            enumerable: true,
            configurable: true
        });
        BrowserDomAdapter.prototype.query = function (selector) { return document.querySelector(selector); };
        BrowserDomAdapter.prototype.querySelector = function (el /** TODO #9100 */, selector) {
            return el.querySelector(selector);
        };
        BrowserDomAdapter.prototype.querySelectorAll = function (el /** TODO #9100 */, selector) {
            return el.querySelectorAll(selector);
        };
        BrowserDomAdapter.prototype.on = function (el /** TODO #9100 */, evt /** TODO #9100 */, listener /** TODO #9100 */) {
            el.addEventListener(evt, listener, false);
        };
        BrowserDomAdapter.prototype.onAndCancel = function (el /** TODO #9100 */, evt /** TODO #9100 */, listener /** TODO #9100 */) {
            el.addEventListener(evt, listener, false);
            // Needed to follow Dart's subscription semantic, until fix of
            // https://code.google.com/p/dart/issues/detail?id=17406
            return function () { el.removeEventListener(evt, listener, false); };
        };
        BrowserDomAdapter.prototype.dispatchEvent = function (el /** TODO #9100 */, evt /** TODO #9100 */) { el.dispatchEvent(evt); };
        BrowserDomAdapter.prototype.createMouseEvent = function (eventType) {
            var evt = document.createEvent('MouseEvent');
            evt.initEvent(eventType, true, true);
            return evt;
        };
        BrowserDomAdapter.prototype.createEvent = function (eventType /** TODO #9100 */) {
            var evt = document.createEvent('Event');
            evt.initEvent(eventType, true, true);
            return evt;
        };
        BrowserDomAdapter.prototype.preventDefault = function (evt) {
            evt.preventDefault();
            evt.returnValue = false;
        };
        BrowserDomAdapter.prototype.isPrevented = function (evt) {
            return evt.defaultPrevented || isPresent(evt.returnValue) && !evt.returnValue;
        };
        BrowserDomAdapter.prototype.getInnerHTML = function (el /** TODO #9100 */) { return el.innerHTML; };
        BrowserDomAdapter.prototype.getTemplateContent = function (el /** TODO #9100 */) {
            return 'content' in el && el instanceof HTMLTemplateElement ? el.content : null;
        };
        BrowserDomAdapter.prototype.getOuterHTML = function (el /** TODO #9100 */) { return el.outerHTML; };
        BrowserDomAdapter.prototype.nodeName = function (node) { return node.nodeName; };
        BrowserDomAdapter.prototype.nodeValue = function (node) { return node.nodeValue; };
        BrowserDomAdapter.prototype.type = function (node) { return node.type; };
        BrowserDomAdapter.prototype.content = function (node) {
            if (this.hasProperty(node, 'content')) {
                return node.content;
            }
            else {
                return node;
            }
        };
        BrowserDomAdapter.prototype.firstChild = function (el /** TODO #9100 */) { return el.firstChild; };
        BrowserDomAdapter.prototype.nextSibling = function (el /** TODO #9100 */) { return el.nextSibling; };
        BrowserDomAdapter.prototype.parentElement = function (el /** TODO #9100 */) { return el.parentNode; };
        BrowserDomAdapter.prototype.childNodes = function (el /** TODO #9100 */) { return el.childNodes; };
        BrowserDomAdapter.prototype.childNodesAsList = function (el /** TODO #9100 */) {
            var childNodes = el.childNodes;
            var res = ListWrapper.createFixedSize(childNodes.length);
            for (var i = 0; i < childNodes.length; i++) {
                res[i] = childNodes[i];
            }
            return res;
        };
        BrowserDomAdapter.prototype.clearNodes = function (el /** TODO #9100 */) {
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
        };
        BrowserDomAdapter.prototype.appendChild = function (el /** TODO #9100 */, node /** TODO #9100 */) { el.appendChild(node); };
        BrowserDomAdapter.prototype.removeChild = function (el /** TODO #9100 */, node /** TODO #9100 */) { el.removeChild(node); };
        BrowserDomAdapter.prototype.replaceChild = function (el, newChild /** TODO #9100 */, oldChild /** TODO #9100 */) {
            el.replaceChild(newChild, oldChild);
        };
        BrowserDomAdapter.prototype.remove = function (node /** TODO #9100 */) {
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            return node;
        };
        BrowserDomAdapter.prototype.insertBefore = function (el /** TODO #9100 */, node /** TODO #9100 */) {
            el.parentNode.insertBefore(node, el);
        };
        BrowserDomAdapter.prototype.insertAllBefore = function (el /** TODO #9100 */, nodes /** TODO #9100 */) {
            nodes.forEach(function (n /** TODO #9100 */) { return el.parentNode.insertBefore(n, el); });
        };
        BrowserDomAdapter.prototype.insertAfter = function (el /** TODO #9100 */, node /** TODO #9100 */) {
            el.parentNode.insertBefore(node, el.nextSibling);
        };
        BrowserDomAdapter.prototype.setInnerHTML = function (el /** TODO #9100 */, value /** TODO #9100 */) { el.innerHTML = value; };
        BrowserDomAdapter.prototype.getText = function (el /** TODO #9100 */) { return el.textContent; };
        // TODO(vicb): removed Element type because it does not support StyleElement
        BrowserDomAdapter.prototype.setText = function (el /** TODO #9100 */, value) { el.textContent = value; };
        BrowserDomAdapter.prototype.getValue = function (el /** TODO #9100 */) { return el.value; };
        BrowserDomAdapter.prototype.setValue = function (el /** TODO #9100 */, value) { el.value = value; };
        BrowserDomAdapter.prototype.getChecked = function (el /** TODO #9100 */) { return el.checked; };
        BrowserDomAdapter.prototype.setChecked = function (el /** TODO #9100 */, value) { el.checked = value; };
        BrowserDomAdapter.prototype.createComment = function (text) { return document.createComment(text); };
        BrowserDomAdapter.prototype.createTemplate = function (html /** TODO #9100 */) {
            var t = document.createElement('template');
            t.innerHTML = html;
            return t;
        };
        BrowserDomAdapter.prototype.createElement = function (tagName /* TODO #9100 */, doc) {
            if (doc === void 0) { doc = document; }
            return doc.createElement(tagName);
        };
        BrowserDomAdapter.prototype.createElementNS = function (ns /* TODO #9100 */, tagName /* TODO #9100 */, doc) {
            if (doc === void 0) { doc = document; }
            return doc.createElementNS(ns, tagName);
        };
        BrowserDomAdapter.prototype.createTextNode = function (text, doc) {
            if (doc === void 0) { doc = document; }
            return doc.createTextNode(text);
        };
        BrowserDomAdapter.prototype.createScriptTag = function (attrName, attrValue, doc) {
            if (doc === void 0) { doc = document; }
            var el = doc.createElement('SCRIPT');
            el.setAttribute(attrName, attrValue);
            return el;
        };
        BrowserDomAdapter.prototype.createStyleElement = function (css, doc) {
            if (doc === void 0) { doc = document; }
            var style = doc.createElement('style');
            this.appendChild(style, this.createTextNode(css));
            return style;
        };
        BrowserDomAdapter.prototype.createShadowRoot = function (el) { return el.createShadowRoot(); };
        BrowserDomAdapter.prototype.getShadowRoot = function (el) { return el.shadowRoot; };
        BrowserDomAdapter.prototype.getHost = function (el) { return el.host; };
        BrowserDomAdapter.prototype.clone = function (node) { return node.cloneNode(true); };
        BrowserDomAdapter.prototype.getElementsByClassName = function (element /** TODO #9100 */, name) {
            return element.getElementsByClassName(name);
        };
        BrowserDomAdapter.prototype.getElementsByTagName = function (element /** TODO #9100 */, name) {
            return element.getElementsByTagName(name);
        };
        BrowserDomAdapter.prototype.classList = function (element /** TODO #9100 */) {
            return Array.prototype.slice.call(element.classList, 0);
        };
        BrowserDomAdapter.prototype.addClass = function (element /** TODO #9100 */, className) { element.classList.add(className); };
        BrowserDomAdapter.prototype.removeClass = function (element /** TODO #9100 */, className) {
            element.classList.remove(className);
        };
        BrowserDomAdapter.prototype.hasClass = function (element /** TODO #9100 */, className) {
            return element.classList.contains(className);
        };
        BrowserDomAdapter.prototype.setStyle = function (element /** TODO #9100 */, styleName, styleValue) {
            element.style[styleName] = styleValue;
        };
        BrowserDomAdapter.prototype.removeStyle = function (element /** TODO #9100 */, stylename) {
            element.style[stylename] = null;
        };
        BrowserDomAdapter.prototype.getStyle = function (element /** TODO #9100 */, stylename) {
            return element.style[stylename];
        };
        BrowserDomAdapter.prototype.hasStyle = function (element /** TODO #9100 */, styleName, styleValue) {
            if (styleValue === void 0) { styleValue = null; }
            var value = this.getStyle(element, styleName) || '';
            return styleValue ? value == styleValue : value.length > 0;
        };
        BrowserDomAdapter.prototype.tagName = function (element /** TODO #9100 */) { return element.tagName; };
        BrowserDomAdapter.prototype.attributeMap = function (element /** TODO #9100 */) {
            var res = new Map();
            var elAttrs = element.attributes;
            for (var i = 0; i < elAttrs.length; i++) {
                var attrib = elAttrs[i];
                res.set(attrib.name, attrib.value);
            }
            return res;
        };
        BrowserDomAdapter.prototype.hasAttribute = function (element /** TODO #9100 */, attribute) {
            return element.hasAttribute(attribute);
        };
        BrowserDomAdapter.prototype.hasAttributeNS = function (element /** TODO #9100 */, ns, attribute) {
            return element.hasAttributeNS(ns, attribute);
        };
        BrowserDomAdapter.prototype.getAttribute = function (element /** TODO #9100 */, attribute) {
            return element.getAttribute(attribute);
        };
        BrowserDomAdapter.prototype.getAttributeNS = function (element /** TODO #9100 */, ns, name) {
            return element.getAttributeNS(ns, name);
        };
        BrowserDomAdapter.prototype.setAttribute = function (element /** TODO #9100 */, name, value) {
            element.setAttribute(name, value);
        };
        BrowserDomAdapter.prototype.setAttributeNS = function (element /** TODO #9100 */, ns, name, value) {
            element.setAttributeNS(ns, name, value);
        };
        BrowserDomAdapter.prototype.removeAttribute = function (element /** TODO #9100 */, attribute) {
            element.removeAttribute(attribute);
        };
        BrowserDomAdapter.prototype.removeAttributeNS = function (element /** TODO #9100 */, ns, name) {
            element.removeAttributeNS(ns, name);
        };
        BrowserDomAdapter.prototype.templateAwareRoot = function (el /** TODO #9100 */) {
            return this.isTemplateElement(el) ? this.content(el) : el;
        };
        BrowserDomAdapter.prototype.createHtmlDocument = function () {
            return document.implementation.createHTMLDocument('fakeTitle');
        };
        BrowserDomAdapter.prototype.defaultDoc = function () { return document; };
        BrowserDomAdapter.prototype.getBoundingClientRect = function (el /** TODO #9100 */) {
            try {
                return el.getBoundingClientRect();
            }
            catch (e) {
                return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
            }
        };
        BrowserDomAdapter.prototype.getTitle = function () { return document.title; };
        BrowserDomAdapter.prototype.setTitle = function (newTitle) { document.title = newTitle || ''; };
        BrowserDomAdapter.prototype.elementMatches = function (n /** TODO #9100 */, selector) {
            var matches = false;
            if (n instanceof HTMLElement) {
                if (n.matches) {
                    matches = n.matches(selector);
                }
                else if (n.msMatchesSelector) {
                    matches = n.msMatchesSelector(selector);
                }
                else if (n.webkitMatchesSelector) {
                    matches = n.webkitMatchesSelector(selector);
                }
            }
            return matches;
        };
        BrowserDomAdapter.prototype.isTemplateElement = function (el) {
            return el instanceof HTMLElement && el.nodeName == 'TEMPLATE';
        };
        BrowserDomAdapter.prototype.isTextNode = function (node) { return node.nodeType === Node.TEXT_NODE; };
        BrowserDomAdapter.prototype.isCommentNode = function (node) { return node.nodeType === Node.COMMENT_NODE; };
        BrowserDomAdapter.prototype.isElementNode = function (node) { return node.nodeType === Node.ELEMENT_NODE; };
        BrowserDomAdapter.prototype.hasShadowRoot = function (node /** TODO #9100 */) {
            return node instanceof HTMLElement && isPresent(node.shadowRoot);
        };
        BrowserDomAdapter.prototype.isShadowRoot = function (node /** TODO #9100 */) { return node instanceof DocumentFragment; };
        BrowserDomAdapter.prototype.importIntoDoc = function (node) {
            var toImport = node;
            if (this.isTemplateElement(node)) {
                toImport = this.content(node);
            }
            return document.importNode(toImport, true);
        };
        BrowserDomAdapter.prototype.adoptNode = function (node) { return document.adoptNode(node); };
        BrowserDomAdapter.prototype.getHref = function (el) { return el.href; };
        BrowserDomAdapter.prototype.getEventKey = function (event /** TODO #9100 */) {
            var key = event.key;
            if (isBlank(key)) {
                key = event.keyIdentifier;
                // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
                // Safari
                // cf
                // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
                if (isBlank(key)) {
                    return 'Unidentified';
                }
                if (key.startsWith('U+')) {
                    key = String.fromCharCode(parseInt(key.substring(2), 16));
                    if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
                        // There is a bug in Chrome for numeric keypad keys:
                        // https://code.google.com/p/chromium/issues/detail?id=155654
                        // 1, 2, 3 ... are reported as A, B, C ...
                        key = _chromeNumKeyPadMap[key];
                    }
                }
            }
            if (_keyMap.hasOwnProperty(key)) {
                key = _keyMap[key];
            }
            return key;
        };
        BrowserDomAdapter.prototype.getGlobalEventTarget = function (target) {
            if (target == 'window') {
                return window;
            }
            else if (target == 'document') {
                return document;
            }
            else if (target == 'body') {
                return document.body;
            }
        };
        BrowserDomAdapter.prototype.getHistory = function () { return window.history; };
        BrowserDomAdapter.prototype.getLocation = function () { return window.location; };
        BrowserDomAdapter.prototype.getBaseHref = function () {
            var href = getBaseElementHref();
            if (isBlank(href)) {
                return null;
            }
            return relativePath(href);
        };
        BrowserDomAdapter.prototype.resetBaseElement = function () { baseElement = null; };
        BrowserDomAdapter.prototype.getUserAgent = function () { return window.navigator.userAgent; };
        BrowserDomAdapter.prototype.setData = function (element /** TODO #9100 */, name, value) {
            this.setAttribute(element, 'data-' + name, value);
        };
        BrowserDomAdapter.prototype.getData = function (element /** TODO #9100 */, name) {
            return this.getAttribute(element, 'data-' + name);
        };
        BrowserDomAdapter.prototype.getComputedStyle = function (element /** TODO #9100 */) { return getComputedStyle(element); };
        // TODO(tbosch): move this into a separate environment class once we have it
        BrowserDomAdapter.prototype.setGlobalVar = function (path, value) { setValueOnPath(global$1, path, value); };
        BrowserDomAdapter.prototype.requestAnimationFrame = function (callback /** TODO #9100 */) {
            return window.requestAnimationFrame(callback);
        };
        BrowserDomAdapter.prototype.cancelAnimationFrame = function (id) { window.cancelAnimationFrame(id); };
        BrowserDomAdapter.prototype.supportsWebAnimation = function () {
            return isFunction(document.body['animate']);
        };
        BrowserDomAdapter.prototype.performanceNow = function () {
            // performance.now() is not available in all browsers, see
            // http://caniuse.com/#search=performance.now
            if (isPresent(window.performance) && isPresent(window.performance.now)) {
                return window.performance.now();
            }
            else {
                return DateWrapper.toMillis(DateWrapper.now());
            }
        };
        BrowserDomAdapter.prototype.supportsCookies = function () { return true; };
        BrowserDomAdapter.prototype.getCookie = function (name) { return parseCookieValue(document.cookie, name); };
        BrowserDomAdapter.prototype.setCookie = function (name, value) {
            // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
            // not clear other cookies.
            document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        };
        return BrowserDomAdapter;
    }(GenericBrowserDomAdapter));
    var baseElement = null;
    function getBaseElementHref() {
        if (isBlank(baseElement)) {
            baseElement = document.querySelector('base');
            if (isBlank(baseElement)) {
                return null;
            }
        }
        return baseElement.getAttribute('href');
    }
    // based on urlUtils.js in AngularJS 1
    var urlParsingNode = null;
    function relativePath(url /** TODO #9100 */) {
        if (isBlank(urlParsingNode)) {
            urlParsingNode = document.createElement('a');
        }
        urlParsingNode.setAttribute('href', url);
        return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
            '/' + urlParsingNode.pathname;
    }
    function parseCookieValue(cookie, name) {
        name = encodeURIComponent(name);
        var cookies = cookie.split(';');
        for (var _i = 0, cookies_1 = cookies; _i < cookies_1.length; _i++) {
            var cookie_1 = cookies_1[_i];
            var _a = cookie_1.split('=', 2), key = _a[0], value = _a[1];
            if (key.trim() === name) {
                return decodeURIComponent(value);
            }
        }
        return null;
    }
    var PublicTestability = (function () {
        function PublicTestability(testability) {
            this._testability = testability;
        }
        PublicTestability.prototype.isStable = function () { return this._testability.isStable(); };
        PublicTestability.prototype.whenStable = function (callback) { this._testability.whenStable(callback); };
        PublicTestability.prototype.findBindings = function (using, provider, exactMatch) {
            return this.findProviders(using, provider, exactMatch);
        };
        PublicTestability.prototype.findProviders = function (using, provider, exactMatch) {
            return this._testability.findBindings(using, provider, exactMatch);
        };
        return PublicTestability;
    }());
    var BrowserGetTestability = (function () {
        function BrowserGetTestability() {
        }
        BrowserGetTestability.init = function () { _angular_core.setTestabilityGetter(new BrowserGetTestability()); };
        BrowserGetTestability.prototype.addToWindow = function (registry) {
            global$1.getAngularTestability = function (elem, findInAncestors) {
                if (findInAncestors === void 0) { findInAncestors = true; }
                var testability = registry.findTestabilityInTree(elem, findInAncestors);
                if (testability == null) {
                    throw new Error('Could not find testability for element.');
                }
                return new PublicTestability(testability);
            };
            global$1.getAllAngularTestabilities = function () {
                var testabilities = registry.getAllTestabilities();
                return testabilities.map(function (testability) { return new PublicTestability(testability); });
            };
            global$1.getAllAngularRootElements = function () { return registry.getAllRootElements(); };
            var whenAllStable = function (callback /** TODO #9100 */) {
                var testabilities = global$1.getAllAngularTestabilities();
                var count = testabilities.length;
                var didWork = false;
                var decrement = function (didWork_ /** TODO #9100 */) {
                    didWork = didWork || didWork_;
                    count--;
                    if (count == 0) {
                        callback(didWork);
                    }
                };
                testabilities.forEach(function (testability /** TODO #9100 */) {
                    testability.whenStable(decrement);
                });
            };
            if (!global$1.frameworkStabilizers) {
                global$1.frameworkStabilizers = ListWrapper.createGrowableSize(0);
            }
            global$1.frameworkStabilizers.push(whenAllStable);
        };
        BrowserGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
            if (elem == null) {
                return null;
            }
            var t = registry.getTestability(elem);
            if (isPresent(t)) {
                return t;
            }
            else if (!findInAncestors) {
                return null;
            }
            if (getDOM().isShadowRoot(elem)) {
                return this.findTestabilityInTree(registry, getDOM().getHost(elem), true);
            }
            return this.findTestabilityInTree(registry, getDOM().parentElement(elem), true);
        };
        return BrowserGetTestability;
    }());
    var SharedStylesHost = (function () {
        function SharedStylesHost() {
            /** @internal */
            this._styles = [];
            /** @internal */
            this._stylesSet = new Set();
        }
        SharedStylesHost.prototype.addStyles = function (styles) {
            var _this = this;
            var additions = [];
            styles.forEach(function (style) {
                if (!SetWrapper.has(_this._stylesSet, style)) {
                    _this._stylesSet.add(style);
                    _this._styles.push(style);
                    additions.push(style);
                }
            });
            this.onStylesAdded(additions);
        };
        SharedStylesHost.prototype.onStylesAdded = function (additions) { };
        SharedStylesHost.prototype.getAllStyles = function () { return this._styles; };
        return SharedStylesHost;
    }());
    /** @nocollapse */
    SharedStylesHost.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    SharedStylesHost.ctorParameters = [];
    var DomSharedStylesHost = (function (_super) {
        __extends(DomSharedStylesHost, _super);
        function DomSharedStylesHost(doc) {
            _super.call(this);
            this._hostNodes = new Set();
            this._hostNodes.add(doc.head);
        }
        /** @internal */
        DomSharedStylesHost.prototype._addStylesToHost = function (styles, host) {
            for (var i = 0; i < styles.length; i++) {
                var style = styles[i];
                getDOM().appendChild(host, getDOM().createStyleElement(style));
            }
        };
        DomSharedStylesHost.prototype.addHost = function (hostNode) {
            this._addStylesToHost(this._styles, hostNode);
            this._hostNodes.add(hostNode);
        };
        DomSharedStylesHost.prototype.removeHost = function (hostNode) { SetWrapper.delete(this._hostNodes, hostNode); };
        DomSharedStylesHost.prototype.onStylesAdded = function (additions) {
            var _this = this;
            this._hostNodes.forEach(function (hostNode) { _this._addStylesToHost(additions, hostNode); });
        };
        return DomSharedStylesHost;
    }(SharedStylesHost));
    /** @nocollapse */
    DomSharedStylesHost.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    DomSharedStylesHost.ctorParameters = [
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [DOCUMENT,] },] },
    ];
    var NAMESPACE_URIS = {
        'xlink': 'http://www.w3.org/1999/xlink',
        'svg': 'http://www.w3.org/2000/svg',
        'xhtml': 'http://www.w3.org/1999/xhtml'
    };
    var TEMPLATE_COMMENT_TEXT = 'template bindings={}';
    var TEMPLATE_BINDINGS_EXP = /^template bindings=(.*)$/g;
    var DomRootRenderer = (function () {
        function DomRootRenderer(document, eventManager, sharedStylesHost, animationDriver) {
            this.document = document;
            this.eventManager = eventManager;
            this.sharedStylesHost = sharedStylesHost;
            this.animationDriver = animationDriver;
            this.registeredComponents = new Map();
        }
        DomRootRenderer.prototype.renderComponent = function (componentProto) {
            var renderer = this.registeredComponents.get(componentProto.id);
            if (isBlank(renderer)) {
                renderer = new DomRenderer(this, componentProto, this.animationDriver);
                this.registeredComponents.set(componentProto.id, renderer);
            }
            return renderer;
        };
        return DomRootRenderer;
    }());
    var DomRootRenderer_ = (function (_super) {
        __extends(DomRootRenderer_, _super);
        function DomRootRenderer_(_document, _eventManager, sharedStylesHost, animationDriver) {
            _super.call(this, _document, _eventManager, sharedStylesHost, animationDriver);
        }
        return DomRootRenderer_;
    }(DomRootRenderer));
    /** @nocollapse */
    DomRootRenderer_.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    DomRootRenderer_.ctorParameters = [
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [DOCUMENT,] },] },
        { type: EventManager, },
        { type: DomSharedStylesHost, },
        { type: AnimationDriver, },
    ];
    var DomRenderer = (function () {
        function DomRenderer(_rootRenderer, componentProto, _animationDriver) {
            this._rootRenderer = _rootRenderer;
            this.componentProto = componentProto;
            this._animationDriver = _animationDriver;
            this._styles = _flattenStyles(componentProto.id, componentProto.styles, []);
            if (componentProto.encapsulation !== _angular_core.ViewEncapsulation.Native) {
                this._rootRenderer.sharedStylesHost.addStyles(this._styles);
            }
            if (this.componentProto.encapsulation === _angular_core.ViewEncapsulation.Emulated) {
                this._contentAttr = _shimContentAttribute(componentProto.id);
                this._hostAttr = _shimHostAttribute(componentProto.id);
            }
            else {
                this._contentAttr = null;
                this._hostAttr = null;
            }
        }
        DomRenderer.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
            var el;
            if (isString(selectorOrNode)) {
                el = getDOM().querySelector(this._rootRenderer.document, selectorOrNode);
                if (isBlank(el)) {
                    throw new BaseException$1("The selector \"" + selectorOrNode + "\" did not match any elements");
                }
            }
            else {
                el = selectorOrNode;
            }
            getDOM().clearNodes(el);
            return el;
        };
        DomRenderer.prototype.createElement = function (parent, name, debugInfo) {
            var nsAndName = splitNamespace(name);
            var el = isPresent(nsAndName[0]) ?
                getDOM().createElementNS(NAMESPACE_URIS[nsAndName[0]], nsAndName[1]) :
                getDOM().createElement(nsAndName[1]);
            if (isPresent(this._contentAttr)) {
                getDOM().setAttribute(el, this._contentAttr, '');
            }
            if (isPresent(parent)) {
                getDOM().appendChild(parent, el);
            }
            return el;
        };
        DomRenderer.prototype.createViewRoot = function (hostElement) {
            var nodesParent;
            if (this.componentProto.encapsulation === _angular_core.ViewEncapsulation.Native) {
                nodesParent = getDOM().createShadowRoot(hostElement);
                this._rootRenderer.sharedStylesHost.addHost(nodesParent);
                for (var i = 0; i < this._styles.length; i++) {
                    getDOM().appendChild(nodesParent, getDOM().createStyleElement(this._styles[i]));
                }
            }
            else {
                if (isPresent(this._hostAttr)) {
                    getDOM().setAttribute(hostElement, this._hostAttr, '');
                }
                nodesParent = hostElement;
            }
            return nodesParent;
        };
        DomRenderer.prototype.createTemplateAnchor = function (parentElement, debugInfo) {
            var comment = getDOM().createComment(TEMPLATE_COMMENT_TEXT);
            if (isPresent(parentElement)) {
                getDOM().appendChild(parentElement, comment);
            }
            return comment;
        };
        DomRenderer.prototype.createText = function (parentElement, value, debugInfo) {
            var node = getDOM().createTextNode(value);
            if (isPresent(parentElement)) {
                getDOM().appendChild(parentElement, node);
            }
            return node;
        };
        DomRenderer.prototype.projectNodes = function (parentElement, nodes) {
            if (isBlank(parentElement))
                return;
            appendNodes(parentElement, nodes);
        };
        DomRenderer.prototype.attachViewAfter = function (node, viewRootNodes) { moveNodesAfterSibling(node, viewRootNodes); };
        DomRenderer.prototype.detachView = function (viewRootNodes) {
            for (var i = 0; i < viewRootNodes.length; i++) {
                getDOM().remove(viewRootNodes[i]);
            }
        };
        DomRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
            if (this.componentProto.encapsulation === _angular_core.ViewEncapsulation.Native && isPresent(hostElement)) {
                this._rootRenderer.sharedStylesHost.removeHost(getDOM().getShadowRoot(hostElement));
            }
        };
        DomRenderer.prototype.listen = function (renderElement, name, callback) {
            return this._rootRenderer.eventManager.addEventListener(renderElement, name, decoratePreventDefault(callback));
        };
        DomRenderer.prototype.listenGlobal = function (target, name, callback) {
            return this._rootRenderer.eventManager.addGlobalEventListener(target, name, decoratePreventDefault(callback));
        };
        DomRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
            getDOM().setProperty(renderElement, propertyName, propertyValue);
        };
        DomRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
            var attrNs;
            var nsAndName = splitNamespace(attributeName);
            if (isPresent(nsAndName[0])) {
                attributeName = nsAndName[0] + ':' + nsAndName[1];
                attrNs = NAMESPACE_URIS[nsAndName[0]];
            }
            if (isPresent(attributeValue)) {
                if (isPresent(attrNs)) {
                    getDOM().setAttributeNS(renderElement, attrNs, attributeName, attributeValue);
                }
                else {
                    getDOM().setAttribute(renderElement, attributeName, attributeValue);
                }
            }
            else {
                if (isPresent(attrNs)) {
                    getDOM().removeAttributeNS(renderElement, attrNs, nsAndName[1]);
                }
                else {
                    getDOM().removeAttribute(renderElement, attributeName);
                }
            }
        };
        DomRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
            var dashCasedPropertyName = camelCaseToDashCase(propertyName);
            if (getDOM().isCommentNode(renderElement)) {
                var existingBindings = RegExpWrapper.firstMatch(TEMPLATE_BINDINGS_EXP, StringWrapper.replaceAll(getDOM().getText(renderElement), /\n/g, ''));
                var parsedBindings = Json.parse(existingBindings[1]);
                parsedBindings[dashCasedPropertyName] = propertyValue;
                getDOM().setText(renderElement, StringWrapper.replace(TEMPLATE_COMMENT_TEXT, '{}', Json.stringify(parsedBindings)));
            }
            else {
                this.setElementAttribute(renderElement, propertyName, propertyValue);
            }
        };
        DomRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
            if (isAdd) {
                getDOM().addClass(renderElement, className);
            }
            else {
                getDOM().removeClass(renderElement, className);
            }
        };
        DomRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
            if (isPresent(styleValue)) {
                getDOM().setStyle(renderElement, styleName, stringify(styleValue));
            }
            else {
                getDOM().removeStyle(renderElement, styleName);
            }
        };
        DomRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
            getDOM().invoke(renderElement, methodName, args);
        };
        DomRenderer.prototype.setText = function (renderNode, text) { getDOM().setText(renderNode, text); };
        DomRenderer.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing) {
            return this._animationDriver.animate(element, startingStyles, keyframes, duration, delay, easing);
        };
        return DomRenderer;
    }());
    function moveNodesAfterSibling(sibling /** TODO #9100 */, nodes /** TODO #9100 */) {
        var parent = getDOM().parentElement(sibling);
        if (nodes.length > 0 && isPresent(parent)) {
            var nextSibling = getDOM().nextSibling(sibling);
            if (isPresent(nextSibling)) {
                for (var i = 0; i < nodes.length; i++) {
                    getDOM().insertBefore(nextSibling, nodes[i]);
                }
            }
            else {
                for (var i = 0; i < nodes.length; i++) {
                    getDOM().appendChild(parent, nodes[i]);
                }
            }
        }
    }
    function appendNodes(parent /** TODO #9100 */, nodes /** TODO #9100 */) {
        for (var i = 0; i < nodes.length; i++) {
            getDOM().appendChild(parent, nodes[i]);
        }
    }
    function decoratePreventDefault(eventHandler) {
        return function (event /** TODO #9100 */) {
            var allowDefaultBehavior = eventHandler(event);
            if (allowDefaultBehavior === false) {
                // TODO(tbosch): move preventDefault into event plugins...
                getDOM().preventDefault(event);
            }
        };
    }
    var COMPONENT_REGEX = /%COMP%/g;
    var COMPONENT_VARIABLE = '%COMP%';
    var HOST_ATTR = "_nghost-" + COMPONENT_VARIABLE;
    var CONTENT_ATTR = "_ngcontent-" + COMPONENT_VARIABLE;
    function _shimContentAttribute(componentShortId) {
        return StringWrapper.replaceAll(CONTENT_ATTR, COMPONENT_REGEX, componentShortId);
    }
    function _shimHostAttribute(componentShortId) {
        return StringWrapper.replaceAll(HOST_ATTR, COMPONENT_REGEX, componentShortId);
    }
    function _flattenStyles(compId, styles, target) {
        for (var i = 0; i < styles.length; i++) {
            var style = styles[i];
            if (isArray(style)) {
                _flattenStyles(compId, style, target);
            }
            else {
                style = StringWrapper.replaceAll(style, COMPONENT_REGEX, compId);
                target.push(style);
            }
        }
        return target;
    }
    var NS_PREFIX_RE = /^:([^:]+):(.+)/g;
    function splitNamespace(name) {
        if (name[0] != ':') {
            return [null, name];
        }
        var match = RegExpWrapper.firstMatch(NS_PREFIX_RE, name);
        return [match[1], match[2]];
    }
    var CORE_TOKENS = {
        'ApplicationRef': _angular_core.ApplicationRef,
        'NgZone': _angular_core.NgZone
    };
    var INSPECT_GLOBAL_NAME = 'ng.probe';
    var CORE_TOKENS_GLOBAL_NAME = 'ng.coreTokens';
    /**
     * Returns a {@link DebugElement} for the given native DOM element, or
     * null if the given native element does not have an Angular view associated
     * with it.
     */
    function inspectNativeElement(element /** TODO #9100 */) {
        return _angular_core.getDebugNode(element);
    }
    function _createConditionalRootRenderer(rootRenderer /** TODO #9100 */) {
        if (_angular_core.isDevMode()) {
            return _createRootRenderer(rootRenderer);
        }
        return rootRenderer;
    }
    function _createRootRenderer(rootRenderer /** TODO #9100 */) {
        getDOM().setGlobalVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
        getDOM().setGlobalVar(CORE_TOKENS_GLOBAL_NAME, CORE_TOKENS);
        return new DebugDomRootRenderer(rootRenderer);
    }
    /**
     * Providers which support debugging Angular applications (e.g. via `ng.probe`).
     */
    var ELEMENT_PROBE_PROVIDERS = [{ provide: _angular_core.RootRenderer, useFactory: _createConditionalRootRenderer, deps: [DomRootRenderer] }];
    var DomEventsPlugin = (function (_super) {
        __extends(DomEventsPlugin, _super);
        function DomEventsPlugin() {
            _super.apply(this, arguments);
        }
        // This plugin should come last in the list of plugins, because it accepts all
        // events.
        DomEventsPlugin.prototype.supports = function (eventName) { return true; };
        DomEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
            var zone = this.manager.getZone();
            var outsideHandler = function (event /** TODO #9100 */) { return zone.runGuarded(function () { return handler(event); }); };
            return this.manager.getZone().runOutsideAngular(function () { return getDOM().onAndCancel(element, eventName, outsideHandler); });
        };
        DomEventsPlugin.prototype.addGlobalEventListener = function (target, eventName, handler) {
            var element = getDOM().getGlobalEventTarget(target);
            var zone = this.manager.getZone();
            var outsideHandler = function (event /** TODO #9100 */) { return zone.runGuarded(function () { return handler(event); }); };
            return this.manager.getZone().runOutsideAngular(function () { return getDOM().onAndCancel(element, eventName, outsideHandler); });
        };
        return DomEventsPlugin;
    }(EventManagerPlugin));
    /** @nocollapse */
    DomEventsPlugin.decorators = [
        { type: _angular_core.Injectable },
    ];
    var modifierKeys = ['alt', 'control', 'meta', 'shift'];
    var modifierKeyGetters = {
        'alt': function (event) { return event.altKey; },
        'control': function (event) { return event.ctrlKey; },
        'meta': function (event) { return event.metaKey; },
        'shift': function (event) { return event.shiftKey; }
    };
    var KeyEventsPlugin = (function (_super) {
        __extends(KeyEventsPlugin, _super);
        function KeyEventsPlugin() {
            _super.call(this);
        }
        KeyEventsPlugin.prototype.supports = function (eventName) {
            return isPresent(KeyEventsPlugin.parseEventName(eventName));
        };
        KeyEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
            var parsedEvent = KeyEventsPlugin.parseEventName(eventName);
            var outsideHandler = KeyEventsPlugin.eventCallback(element, StringMapWrapper.get(parsedEvent, 'fullKey'), handler, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(function () {
                return getDOM().onAndCancel(element, StringMapWrapper.get(parsedEvent, 'domEventName'), outsideHandler);
            });
        };
        KeyEventsPlugin.parseEventName = function (eventName) {
            var parts = eventName.toLowerCase().split('.');
            var domEventName = parts.shift();
            if ((parts.length === 0) ||
                !(StringWrapper.equals(domEventName, 'keydown') ||
                    StringWrapper.equals(domEventName, 'keyup'))) {
                return null;
            }
            var key = KeyEventsPlugin._normalizeKey(parts.pop());
            var fullKey = '';
            modifierKeys.forEach(function (modifierName) {
                if (ListWrapper.contains(parts, modifierName)) {
                    ListWrapper.remove(parts, modifierName);
                    fullKey += modifierName + '.';
                }
            });
            fullKey += key;
            if (parts.length != 0 || key.length === 0) {
                // returning null instead of throwing to let another plugin process the event
                return null;
            }
            var result = StringMapWrapper.create();
            StringMapWrapper.set(result, 'domEventName', domEventName);
            StringMapWrapper.set(result, 'fullKey', fullKey);
            return result;
        };
        KeyEventsPlugin.getEventFullKey = function (event) {
            var fullKey = '';
            var key = getDOM().getEventKey(event);
            key = key.toLowerCase();
            if (StringWrapper.equals(key, ' ')) {
                key = 'space'; // for readability
            }
            else if (StringWrapper.equals(key, '.')) {
                key = 'dot'; // because '.' is used as a separator in event names
            }
            modifierKeys.forEach(function (modifierName) {
                if (modifierName != key) {
                    var modifierGetter = StringMapWrapper.get(modifierKeyGetters, modifierName);
                    if (modifierGetter(event)) {
                        fullKey += modifierName + '.';
                    }
                }
            });
            fullKey += key;
            return fullKey;
        };
        KeyEventsPlugin.eventCallback = function (element, fullKey, handler, zone) {
            return function (event /** TODO #9100 */) {
                if (StringWrapper.equals(KeyEventsPlugin.getEventFullKey(event), fullKey)) {
                    zone.runGuarded(function () { return handler(event); });
                }
            };
        };
        /** @internal */
        KeyEventsPlugin._normalizeKey = function (keyName) {
            // TODO: switch to a StringMap if the mapping grows too much
            switch (keyName) {
                case 'esc':
                    return 'escape';
                default:
                    return keyName;
            }
        };
        return KeyEventsPlugin;
    }(EventManagerPlugin));
    /** @nocollapse */
    KeyEventsPlugin.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    KeyEventsPlugin.ctorParameters = [];
    var BROWSER_PLATFORM_MARKER = new _angular_core.OpaqueToken('BrowserPlatformMarker');
    /**
     * A set of providers to initialize the Angular platform in a web browser.
     *
     * Used automatically by `bootstrap`, or can be passed to {@link platform}.
     *
     * @experimental API related to bootstrapping are still under review.
     */
    var BROWSER_PLATFORM_PROVIDERS = [
        { provide: BROWSER_PLATFORM_MARKER, useValue: true }, _angular_core.PLATFORM_COMMON_PROVIDERS,
        { provide: _angular_core.PLATFORM_INITIALIZER, useValue: initDomAdapter, multi: true },
        { provide: _angular_common.PlatformLocation, useClass: BrowserPlatformLocation }
    ];
    /**
     * @security Replacing built-in sanitization providers exposes the application to XSS risks.
     * Attacker-controlled data introduced by an unsanitized provider could expose your
     * application to XSS risks. For more detail, see the [Security Guide](http://g.co/ng/security).
     * @experimental
     */
    var BROWSER_SANITIZATION_PROVIDERS = [
        { provide: SanitizationService, useExisting: DomSanitizationService },
        { provide: DomSanitizationService, useClass: DomSanitizationServiceImpl },
    ];
    /**
     * A set of providers to initialize an Angular application in a web browser.
     *
     * Used automatically by `bootstrap`, or can be passed to {@link PlatformRef.application}.
     *
     * @experimental API related to bootstrapping are still under review.
     */
    var BROWSER_APP_PROVIDERS = [
        _angular_core.APPLICATION_COMMON_PROVIDERS, _angular_common.FORM_PROVIDERS, BROWSER_SANITIZATION_PROVIDERS,
        { provide: _angular_core.ExceptionHandler, useFactory: _exceptionHandler, deps: [] },
        { provide: DOCUMENT, useFactory: _document, deps: [] },
        { provide: EVENT_MANAGER_PLUGINS, useClass: DomEventsPlugin, multi: true },
        { provide: EVENT_MANAGER_PLUGINS, useClass: KeyEventsPlugin, multi: true },
        { provide: EVENT_MANAGER_PLUGINS, useClass: HammerGesturesPlugin, multi: true },
        { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig },
        { provide: DomRootRenderer, useClass: DomRootRenderer_ },
        { provide: _angular_core.RootRenderer, useExisting: DomRootRenderer },
        { provide: SharedStylesHost, useExisting: DomSharedStylesHost },
        { provide: AnimationDriver, useFactory: _resolveDefaultAnimationDriver }, DomSharedStylesHost,
        _angular_core.Testability, EventManager, ELEMENT_PROBE_PROVIDERS
    ];
    /**
     * @experimental API related to bootstrapping are still under review.
     */
    function browserPlatform() {
        if (isBlank(_angular_core.getPlatform())) {
            _angular_core.createPlatform(_angular_core.ReflectiveInjector.resolveAndCreate(BROWSER_PLATFORM_PROVIDERS));
        }
        return _angular_core.assertPlatform(BROWSER_PLATFORM_MARKER);
    }
    function initDomAdapter() {
        BrowserDomAdapter.makeCurrent();
        wtfInit();
        BrowserGetTestability.init();
    }
    function _exceptionHandler() {
        return new _angular_core.ExceptionHandler(getDOM());
    }
    function _document() {
        return getDOM().defaultDoc();
    }
    function _resolveDefaultAnimationDriver() {
        if (getDOM().supportsWebAnimation()) {
            return new WebAnimationsDriver();
        }
        return new NoOpAnimationDriver();
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var PromiseCompleter = (function () {
        function PromiseCompleter() {
            var _this = this;
            this.promise = new Promise(function (res, rej) {
                _this.resolve = res;
                _this.reject = rej;
            });
        }
        return PromiseCompleter;
    }());
    var PromiseWrapper = (function () {
        function PromiseWrapper() {
        }
        PromiseWrapper.resolve = function (obj) { return Promise.resolve(obj); };
        PromiseWrapper.reject = function (obj, _) { return Promise.reject(obj); };
        // Note: We can't rename this method into `catch`, as this is not a valid
        // method name in Dart.
        PromiseWrapper.catchError = function (promise, onError) {
            return promise.catch(onError);
        };
        PromiseWrapper.all = function (promises) {
            if (promises.length == 0)
                return Promise.resolve([]);
            return Promise.all(promises);
        };
        PromiseWrapper.then = function (promise, success, rejection) {
            return promise.then(success, rejection);
        };
        PromiseWrapper.wrap = function (computation) {
            return new Promise(function (res, rej) {
         /**
 * core-js 2.4.0
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2016 Denis Pushkarev
 */
!function(b,c,a){"use strict";!function(b){function __webpack_require__(c){if(a[c])return a[c].exports;var d=a[c]={exports:{},id:c,loaded:!1};return b[c].call(d.exports,d,d.exports,__webpack_require__),d.loaded=!0,d.exports}var a={};return __webpack_require__.m=b,__webpack_require__.c=a,__webpack_require__.p="",__webpack_require__(0)}([function(b,c,a){a(1),a(50),a(51),a(52),a(54),a(55),a(58),a(59),a(60),a(61),a(62),a(63),a(64),a(65),a(66),a(68),a(70),a(72),a(74),a(77),a(78),a(79),a(83),a(87),a(88),a(89),a(90),a(92),a(93),a(94),a(95),a(96),a(98),a(100),a(101),a(102),a(104),a(105),a(106),a(108),a(109),a(110),a(112),a(113),a(114),a(115),a(116),a(117),a(118),a(119),a(120),a(121),a(122),a(123),a(124),a(125),a(127),a(131),a(132),a(133),a(134),a(138),a(140),a(141),a(142),a(143),a(144),a(145),a(146),a(147),a(148),a(149),a(150),a(151),a(152),a(153),a(159),a(160),a(162),a(163),a(164),a(168),a(169),a(170),a(171),a(172),a(174),a(175),a(176),a(177),a(180),a(182),a(183),a(184),a(186),a(188),a(190),a(191),a(192),a(194),a(195),a(196),a(197),a(203),a(206),a(207),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(231),a(234),a(235),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(259),a(260),a(262),a(263),a(264),a(265),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(277),a(278),a(279),a(280),a(281),a(282),a(283),a(284),a(285),a(286),a(287),a(288),b.exports=a(289)},function(da,ca,b){var s=b(2),c=b(3),D=b(4),f=b(6),G=b(16),$=b(20).KEY,J=b(5),C=b(21),B=b(22),ba=b(17),n=b(23),aa=b(24),_=b(25),U=b(27),Y=b(40),X=b(43),A=b(10),t=b(30),z=b(14),x=b(15),l=b(44),N=b(47),O=b(49),P=b(9),W=b(28),H=O.f,j=P.f,T=N.f,d=s.Symbol,u=s.JSON,v=u&&u.stringify,i="prototype",e=n("_hidden"),L=n("toPrimitive"),V={}.propertyIsEnumerable,o=C("symbol-registry"),h=C("symbols"),m=C("op-symbols"),g=Object[i],k="function"==typeof d,E=s.QObject,F=!E||!E[i]||!E[i].findChild,y=D&&J(function(){return 7!=l(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(c,a,d){var b=H(g,a);b&&delete g[a],j(c,a,d),b&&c!==g&&j(g,a,b)}:j,R=function(a){var b=h[a]=l(d[i]);return b._k=a,b},w=k&&"symbol"==typeof d.iterator?function(a){return"symbol"==typeof a}:function(a){return a instanceof d},r=function defineProperty(a,b,d){return a===g&&r(m,b,d),A(a),b=z(b,!0),A(d),c(h,b)?(d.enumerable?(c(a,e)&&a[e][b]&&(a[e][b]=!1),d=l(d,{enumerable:x(0,!1)})):(c(a,e)||j(a,e,x(1,{})),a[e][b]=!0),y(a,b,d)):j(a,b,d)},S=function defineProperties(a,b){A(a);for(var c,d=Y(b=t(b)),e=0,f=d.length;f>e;)r(a,c=d[e++],b[c]);return a},Z=function create(b,c){return c===a?l(b):S(l(b),c)},Q=function propertyIsEnumerable(a){var b=V.call(this,a=z(a,!0));return this===g&&c(h,a)&&!c(m,a)?!1:b||!c(this,a)||!c(h,a)||c(this,e)&&this[e][a]?b:!0},M=function getOwnPropertyDescriptor(b,a){if(b=t(b),a=z(a,!0),b!==g||!c(h,a)||c(m,a)){var d=H(b,a);return!d||!c(h,a)||c(b,e)&&b[e][a]||(d.enumerable=!0),d}},K=function getOwnPropertyNames(g){for(var a,b=T(t(g)),d=[],f=0;b.length>f;)c(h,a=b[f++])||a==e||a==$||d.push(a);return d},I=function getOwnPropertySymbols(b){for(var a,d=b===g,e=T(d?m:t(b)),f=[],i=0;e.length>i;)c(h,a=e[i++])&&(d?c(g,a):!0)&&f.push(h[a]);return f};k||(d=function Symbol(){if(this instanceof d)throw TypeError("Symbol is not a constructor!");var b=ba(arguments.length>0?arguments[0]:a),f=function(a){this===g&&f.call(m,a),c(this,e)&&c(this[e],b)&&(this[e][b]=!1),y(this,b,x(1,a))};return D&&F&&y(g,b,{configurable:!0,set:f}),R(b)},G(d[i],"toString",function toString(){return this._k}),O.f=M,P.f=r,b(48).f=N.f=K,b(42).f=Q,b(41).f=I,D&&!b(26)&&G(g,"propertyIsEnumerable",Q,!0),aa.f=function(a){return R(n(a))}),f(f.G+f.W+f.F*!k,{Symbol:d});for(var q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),p=0;q.length>p;)n(q[p++]);for(var q=W(n.store),p=0;q.length>p;)_(q[p++]);f(f.S+f.F*!k,"Symbol",{"for":function(a){return c(o,a+="")?o[a]:o[a]=d(a)},keyFor:function keyFor(a){if(w(a))return U(o,a);throw TypeError(a+" is not a symbol!")},useSetter:function(){F=!0},useSimple:function(){F=!1}}),f(f.S+f.F*!k,"Object",{create:Z,defineProperty:r,defineProperties:S,getOwnPropertyDescriptor:M,getOwnPropertyNames:K,getOwnPropertySymbols:I}),u&&f(f.S+f.F*(!k||J(function(){var a=d();return"[null]"!=v([a])||"{}"!=v({a:a})||"{}"!=v(Object(a))})),"JSON",{stringify:function stringify(e){if(e!==a&&!w(e)){for(var b,c,d=[e],f=1;arguments.length>f;)d.push(arguments[f++]);return b=d[1],"function"==typeof b&&(c=b),!c&&X(b)||(b=function(b,a){return c&&(a=c.call(this,b,a)),w(a)?void 0:a}),d[1]=b,v.apply(u,d)}}}),d[i][L]||b(8)(d[i],L,d[i].valueOf),B(d,"Symbol"),B(Math,"Math",!0),B(s.JSON,"JSON",!0)},function(a,d){var b=a.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof c&&(c=b)},function(a,c){var b={}.hasOwnProperty;a.exports=function(a,c){return b.call(a,c)}},function(a,c,b){a.exports=!b(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(a,b){a.exports=function(a){try{return!!a()}catch(b){return!0}}},function(h,k,d){var c=d(2),e=d(7),i=d(8),j=d(16),g=d(18),f="prototype",b=function(k,l,o){var h,p,d,t,w=k&b.F,q=k&b.G,v=k&b.S,s=k&b.P,u=k&b.B,m=q?c:v?c[l]||(c[l]={}):(c[l]||{})[f],n=q?e:e[l]||(e[l]={}),r=n[f]||(n[f]={});q&&(o=l);for(h in o)p=!w&&m&&m[h]!==a,d=(p?m:o)[h],t=u&&p?g(d,c):s&&"function"==typeof d?g(Function.call,d):d,m&&j(m,h,d,k&b.U),n[h]!=d&&i(n,h,t),s&&r[h]!=d&&(r[h]=d)};c.core=e,b.F=1,b.G=2,b.S=4,b.P=8,b.B=16,b.W=32,b.U=64,b.R=128,h.exports=b},function(a,d){var c=a.exports={version:"2.4.0"};"number"==typeof b&&(b=c)},function(b,e,a){var c=a(9),d=a(15);b.exports=a(4)?function(a,b,e){return c.f(a,b,d(1,e))}:function(a,b,c){return a[b]=c,a}},function(g,c,a){var b=a(10),d=a(12),e=a(14),f=Object.defineProperty;c.f=a(4)?Object.defineProperty:function defineProperty(c,g,a){if(b(c),g=e(g,!0),b(a),d)try{return f(c,g,a)}catch(h){}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(c[g]=a.value),c}},function(a,d,b){var c=b(11);a.exports=function(a){if(!c(a))throw TypeError(a+" is not an object!");return a}},function(a,b){a.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},function(b,c,a){b.exports=!a(4)&&!a(5)(function(){return 7!=Object.defineProperty(a(13)("div"),"a",{get:function(){return 7}}).a})},function(d,f,b){var c=b(11),a=b(2).document,e=c(a)&&c(a.createElement);d.exports=function(b){return e?a.createElement(b):{}}},function(b,d,c){var a=c(11);b.exports=function(b,e){if(!a(b))return b;var c,d;if(e&&"function"==typeof(c=b.toString)&&!a(d=c.call(b)))return d;if("function"==typeof(c=b.valueOf)&&!a(d=c.call(b)))return d;if(!e&&"function"==typeof(c=b.toString)&&!a(d=c.call(b)))return d;throw TypeError("Can't convert object to primitive value")}},function(a,b){a.exports=function(a,b){return{enumerable:!(1&a),configurable:!(2&a),writable:!(4&a),value:b}}},function(g,j,a){var h=a(2),b=a(8),f=a(3),c=a(17)("src"),d="toString",e=Function[d],i=(""+e).split(d);a(7).inspectSource=function(a){return e.call(a)},(g.exports=function(d,a,e,j){var g="function"==typeof e;g&&(f(e,"name")||b(e,"name",a)),d[a]!==e&&(g&&(f(e,c)||b(e,c,d[a]?""+d[a]:i.join(String(a)))),d===h?d[a]=e:j?d[a]?d[a]=e:b(d,a,e):(delete d[a],b(d,a,e)))})(Function.prototype,d,function toString(){return"function"==typeof this&&this[c]||e.call(this)})},function(b,e){var c=0,d=Math.random();b.exports=function(b){return"Symbol(".concat(b===a?"":b,")_",(++c+d).toString(36))}},function(b,e,c){var d=c(19);b.exports=function(b,c,e){if(d(b),c===a)return b;switch(e){case 1:return function(a){return b.call(c,a)};case 2:return function(a,d){return b.call(c,a,d)};case 3:return function(a,d,e){return b.call(c,a,d,e)}}return function(){return b.apply(c,arguments)}}},function(a,b){a.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},function(k,o,b){var a=b(17)("meta"),i=b(11),d=b(3),g=b(9).f,f=0,c=Object.isExtensible||function(){return!0},j=!b(5)(function(){return c(Object.preventExtensions({}))}),e=function(b){g(b,a,{value:{i:"O"+ ++f,w:{}}})},l=function(b,f){if(!i(b))return"symbol"==typeof b?b:("string"==typeof b?"S":"P")+b;if(!d(b,a)){if(!c(b))return"F";if(!f)return"E";e(b)}return b[a].i},m=function(b,f){if(!d(b,a)){if(!c(b))return!0;if(!f)return!1;e(b)}return b[a].w},h=function(b){return j&&n.NEED&&c(b)&&!d(b,a)&&e(b),b},n=k.exports={KEY:a,NEED:!1,fastKey:l,getWeak:m,onFreeze:h}},function(d,f,e){var a=e(2),b="__core-js_shared__",c=a[b]||(a[b]={});d.exports=function(a){return c[a]||(c[a]={})}},function(c,f,a){var d=a(9).f,e=a(3),b=a(23)("toStringTag");c.exports=function(a,c,f){a&&!e(a=f?a:a.prototype,b)&&d(a,b,{configurable:!0,value:c})}},function(e,h,a){var b=a(21)("wks"),f=a(17),c=a(2).Symbol,d="function"==typeof c,g=e.exports=function(a){return b[a]||(b[a]=d&&c[a]||(d?c:f)("Symbol."+a))};g.store=b},function(c,a,b){a.f=b(23)},function(c,h,a){var d=a(2),b=a(7),e=a(26),f=a(24),g=a(9).f;c.exports=function(a){var c=b.Symbol||(b.Symbol=e?{}:d.Symbol||{});"_"==a.charAt(0)||a in c||g(c,a,{value:f.f(a)})}},function(a,b){a.exports=!1},function(b,e,a){var c=a(28),d=a(30);b.exports=function(g,h){for(var a,b=d(g),e=c(b),i=e.length,f=0;i>f;)if(b[a=e[f++]]===h)return a}},function(b,e,a){var c=a(29),d=a(39);b.exports=Object.keys||function keys(a){return c(a,d)}},function(c,g,a){var b=a(3),d=a(30),e=a(34)(!1),f=a(38)("IE_PROTO");c.exports=function(j,h){var a,g=d(j),i=0,c=[];for(a in g)a!=f&&b(g,a)&&c.push(a);for(;h.length>i;)b(g,a=h[i++])&&(~e(c,a)||c.push(a));return c}},function(b,e,a){var c=a(31),d=a(33);b.exports=function(a){return c(d(a))}},function(a,d,b){var c=b(32);a.exports=Object("z").propertyIsEnumerable(0)?Object:function(a){return"String"==c(a)?a.split(""):Object(a)}},function(a,c){var b={}.toString;a.exports=function(a){return b.call(a).slice(8,-1)}},function(b,c){b.exports=function(b){if(b==a)throw TypeError("Can't call method on  "+b);return b}},function(b,f,a){var c=a(30),d=a(35),e=a(37);b.exports=function(a){return function(j,g,k){var h,f=c(j),i=d(f.length),b=e(k,i);if(a&&g!=g){for(;i>b;)if(h=f[b++],h!=h)return!0}else for(;i>b;b++)if((a||b in f)&&f[b]===g)return a||b||0;return!a&&-1}}},function(a,e,b){var c=b(36),d=Math.min;a.exports=function(a){return a>0?d(c(a),9007199254740991):0}},function(a,d){var b=Math.ceil,c=Math.floor;a.exports=function(a){return isNaN(a=+a)?0:(a>0?c:b)(a)}},function(a,f,b){var c=b(36),d=Math.max,e=Math.min;a.exports=function(a,b){return a=c(a),0>a?d(a+b,0):e(a,b)}},function(c,e,a){var b=a(21)("keys"),d=a(17);c.exports=function(a){return b[a]||(b[a]=d(a))}},function(a,b){a.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(b,f,a){var c=a(28),d=a(41),e=a(42);b.exports=function(a){var b=c(a),f=d.f;if(f)for(var g,h=f(a),j=e.f,i=0;h.length>i;)j.call(a,g=h[i++])&&b.push(g);return b}},function(b,a){a.f=Object.getOwnPropertySymbols},function(b,a){a.f={}.propertyIsEnumerable},function(a,d,b){var c=b(32);a.exports=Array.isArray||function isArray(a){return"Array"==c(a)}},function(g,k,b){var h=b(10),i=b(45),f=b(39),j=b(38)("IE_PROTO"),d=function(){},e="prototype",c=function(){var a,d=b(13)("iframe"),g=f.length,h=">";for(d.style.display="none",b(46).appendChild(d),d.src="javascript:",a=d.contentWindow.document,a.open(),a.write("<script>document.F=Object</script"+h),a.close(),c=a.F;g--;)delete c[e][f[g]];return c()};g.exports=Object.create||function create(f,g){var b;return null!==f?(d[e]=h(f),b=new d,d[e]=null,b[j]=f):b=c(),g===a?b:i(b,g)}},function(b,f,a){var c=a(9),d=a(10),e=a(28);b.exports=a(4)?Object.defineProperties:function defineProperties(a,b){d(a);for(var f,g=e(b),i=g.length,h=0;i>h;)c.f(a,f=g[h++],b[f]);return a}},function(a,c,b){a.exports=b(2).document&&document.documentElement},function(d,h,a){var e=a(30),b=a(48).f,f={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],g=function(a){try{return b(a)}catch(d){return c.slice()}};d.exports.f=function getOwnPropertyNames(a){return c&&"[object Window]"==f.call(a)?g(a):b(e(a))}},function(e,b,a){var c=a(29),d=a(39).concat("length","prototype");b.f=Object.getOwnPropertyNames||function getOwnPropertyNames(a){return c(a,d)}},function(j,c,a){var d=a(42),e=a(15),f=a(30),g=a(14),h=a(3),i=a(12),b=Object.getOwnPropertyDescriptor;c.f=a(4)?b:function getOwnPropertyDescriptor(a,c){if(a=f(a),c=g(c,!0),i)try{return b(a,c)}catch(j){}return h(a,c)?e(!d.f.call(a,c),a[c]):void 0}},function(c,d,a){var b=a(6);b(b.S+b.F*!a(4),"Object",{defineProperty:a(9).f})},function(c,d,a){var b=a(6);b(b.S+b.F*!a(4),"Object",{defineProperties:a(45)})},function(d,e,a){var b=a(30),c=a(49).f;a(53)("getOwnPropertyDescriptor",function(){return function getOwnPropertyDescriptor(a,d){return c(b(a),d)}})},function(c,f,a){var b=a(6),d=a(7),e=a(5);c.exports=function(a,g){var c=(d.Object||{})[a]||Object[a],f={};f[a]=g(c),b(b.S+b.F*e(function(){c(1)}),"Object",f)}},function(c,d,a){var b=a(6);b(b.S,"Object",{create:a(44)})},function(d,e,a){var b=a(56),c=a(57);a(53)("getPrototypeOf",function(){return function getPrototypeOf(a){return c(b(a))}})},function(a,d,b){var c=b(33);a.exports=function(a){return Object(c(a))}},function(c,g,a){var d=a(3),e=a(56),b=a(38)("IE_PROTO"),f=Object.prototype;c.exports=Object.getPrototypeOf||function(a){return a=e(a),d(a,b)?a[b]:"function"==typeof a.constructor&&a instanceof a.constructor?a.constructor.prototype:a instanceof Object?f:null}},function(d,e,a){var b=a(56),c=a(28);a(53)("keys",function(){return function keys(a){return c(b(a))}})},function(b,c,a){a(53)("getOwnPropertyNames",function(){return a(47).f})},function(d,e,a){var b=a(11),c=a(20).onFreeze;a(53)("freeze",function(a){return function freeze(d){return a&&b(d)?a(c(d)):d}})},function(d,e,a){var b=a(11),c=a(20).onFreeze;a(53)("seal",function(a){return function seal(d){return a&&b(d)?a(c(d)):d}})},function(d,e,a){var b=a(11),c=a(20).onFreeze;a(53)("preventExtensions",function(a){return function preventExtensions(d){return a&&b(d)?a(c(d)):d}})},function(c,d,a){var b=a(11);a(53)("isFrozen",function(a){return function isFrozen(c){return b(c)?a?a(c):!1:!0}})},function(c,d,a){var b=a(11);a(53)("isSealed",function(a){return function isSealed(c){return b(c)?a?a(c):!1:!0}})},function(c,d,a){var b=a(11);a(53)("isExtensible",function(a){return function isExtensible(c){return b(c)?a?a(c):!0:!1}})},function(c,d,b){var a=b(6);a(a.S+a.F,"Object",{assign:b(67)})},function(d,i,a){var c=a(28),e=a(41),f=a(42),g=a(56),h=a(31),b=Object.assign;d.exports=!b||a(5)(function(){var a={},c={},d=Symbol(),e="abcdefghijklmnopqrst";return a[d]=7,e.split("").forEach(function(a){c[a]=a}),7!=b({},a)[d]||Object.keys(b({},c)).join("")!=e})?function assign(n,q){for(var i=g(n),o=arguments.length,k=1,d=e.f,m=f.f;o>k;)for(var b,a=h(arguments[k++]),l=d?c(a).concat(d(a)):c(a),p=l.length,j=0;p>j;)m.call(a,b=l[j++])&&(i[b]=a[b]);return i}:b},function(c,d,a){var b=a(6);b(b.S,"Object",{is:a(69)})},function(a,b){a.exports=Object.is||function is(a,b){return a===b?0!==a||1/a===1/b:a!=a&&b!=b}},function(c,d,a){var b=a(6);b(b.S,"Object",{setPrototypeOf:a(71).set})},function(d,g,b){var e=b(11),f=b(10),c=function(b,a){if(f(b),!e(a)&&null!==a)throw TypeError(a+": can't set as prototype!")};d.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,a,d){try{d=b(18)(Function.call,b(49).f(Object.prototype,"__proto__").set,2),d(e,[]),a=!(e instanceof Array)}catch(f){a=!0}return function setPrototypeOf(b,e){return c(b,e),a?b.__proto__=e:d(b,e),b}}({},!1):a),check:c}},function(d,e,a){var c=a(73),b={};b[a(23)("toStringTag")]="z",b+""!="[object z]"&&a(16)(Object.prototype,"toString",function toString(){return"[object "+c(this)+"]"},!0)},function(d,h,c){var b=c(32),e=c(23)("toStringTag"),f="Arguments"==b(function(){return arguments}()),g=function(a,b){try{return a[b]}catch(c){}};d.exports=function(d){var c,h,i;return d===a?"Undefined":null===d?"Null":"string"==typeof(h=g(c=Object(d),e))?h:f?b(c):"Object"==(i=b(c))&&"function"==typeof c.callee?"Arguments":i}},function(c,d,a){var b=a(6);b(b.P,"Function",{bind:a(75)})},function(d,i,a){var e=a(19),f=a(11),g=a(76),c=[].slice,b={},h=function(e,a,f){if(!(a in b)){for(var d=[],c=0;a>c;c++)d[c]="a["+c+"]";b[a]=Function("F,a","return new F("+d.join(",")+")")}return b[a](e,f)};d.exports=Function.bind||function bind(d){var a=e(this),i=c.call(arguments,1),b=function(){var e=i.concat(c.call(arguments));return this instanceof b?h(a,e.length,e):g(a,e,d)};return f(a.prototype)&&(b.prototype=a.prototype),b}},function(b,c){b.exports=function(c,b,d){var e=d===a;switch(b.length){case 0:return e?c():c.call(d);case 1:return e?c(b[0]):c.call(d,b[0]);case 2:return e?c(b[0],b[1]):c.call(d,b[0],b[1]);case 3:return e?c(b[0],b[1],b[2]):c.call(d,b[0],b[1],b[2]);case 4:return e?c(b[0],b[1],b[2],b[3]):c.call(d,b[0],b[1],b[2],b[3])}return c.apply(d,b)}},function(i,j,a){var c=a(9).f,e=a(15),f=a(3),d=Function.prototype,g=/^\s*function ([^ (]*)/,b="name",h=Object.isExtensible||function(){return!0};b in d||a(4)&&c(d,b,{configurable:!0,get:function(){try{var a=this,d=(""+a).match(g)[1];return f(a,b)||!h(a)||c(a,b,e(5,d)),d}catch(i){return""}}})},function(f,g,a){var b=a(11),e=a(57),c=a(23)("hasInstance"),d=Function.prototype;c in d||a(9).f(d,c,{value:function(a){if("function"!=typeof this||!b(a))return!1;if(!b(this.prototype))return a instanceof this;for(;a=e(a);)if(this.prototype===a)return!0;return!1}})},function(w,v,b){var k=b(2),j=b(3),i=b(32),n=b(80),o=b(14),p=b(5),q=b(48).f,t=b(49).f,u=b(9).f,m=b(81).trim,c="Number",a=k[c],d=a,f=a.prototype,r=i(b(44)(f))==c,s="trim"in String.prototype,l=function(i){var a=o(i,!1);if("string"==typeof a&&a.length>2){a=s?a.trim():m(a,3);var b,c,d,e=a.charCodeAt(0);if(43===e||45===e){if(b=a.charCodeAt(2),88===b||120===b)return NaN}else if(48===e){switch(a.charCodeAt(1)){case 66:case 98:c=2,d=49;break;case 79:case 111:c=8,d=55;break;default:return+a}for(var f,g=a.slice(2),h=0,j=g.length;j>h;h++)if(f=g.charCodeAt(h),48>f||f>d)return NaN;return parseInt(g,c)}}return+a};if(!a(" 0o1")||!a("0b1")||a("+0x1")){a=function Number(g){var e=1>arguments.length?0:g,b=this;return b instanceof a&&(r?p(function(){f.valueOf.call(b)}):i(b)!=c)?n(new d(l(e)),b,a):l(e)};for(var e,h=b(4)?q(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;h.length>g;g++)j(d,e=h[g])&&!j(a,e)&&u(a,e,t(d,e));a.prototype=f,f.constructor=a,b(16)(k,c,a)}},function(c,e,a){var d=a(11),b=a(71).set;c.exports=function(e,g,f){var a,c=g.constructor;return c!==f&&"function"==typeof c&&(a=c.prototype)!==f.prototype&&d(a)&&b&&b(e,a),e}},function(g,m,a){var d=a(6),h=a(33),i=a(5),c=a(82),b="["+c+"]",f="​",j=RegExp("^"+b+b+"*"),k=RegExp(b+b+"*$"),e=function(a,h,e){var b={},g=i(function(){return!!c[a]()||f[a]()!=f}),j=b[a]=g?h(l):c[a];e&&(b[e]=j),d(d.P+d.F*g,"String",b)},l=e.trim=function(a,b){return a=String(h(a)),1&b&&(a=a.replace(j,"")),2&b&&(a=a.replace(k,"")),a};g.exports=e},function(a,b){a.exports="	\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"},function(q,p,c){var f=c(6),n=(c(84),c(36)),o=c(85),g=c(86),j=1..toFixed,i=Math.floor,a=[0,0,0,0,0,0],k="Number.toFixed: incorrect invocation!",e="0",d=function(d,e){for(var c=-1,b=e;++c<6;)b+=d*a[c],a[c]=b%1e7,b=i(b/1e7)},h=function(d){for(var c=6,b=0;--c>=0;)b+=a[c],a[c]=i(b/d),b=b%d*1e7},l=function(){for(var c=6,b="";--c>=0;)if(""!==b||0===c||0!==a[c]){var d=String(a[c]);b=""===b?d:b+g.call(e,7-d.length)+d}return b},b=function(a,c,d){return 0===c?d:c%2===1?b(a,c-1,d*a):b(a*a,c/2,d)},m=function(c){for(var b=0,a=c;a>=4096;)b+=12,a/=4096;for(;a>=2;)b+=1,a/=2;return b};f(f.P+f.F*(!!j&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==0xde0b6b3a7640080.toFixed(0))||!c(5)(function(){j.call({})})),"Number",{toFixed:function toFixed(s){var f,q,j,p,a=o(this,k),i=n(s),r="",c=e;if(0>i||i>20)throw RangeError(k);if(a!=a)return"NaN";if(-1e21>=a||a>=1e21)return String(a);if(0>a&&(r="-",a=-a),a>1e-21)if(f=m(a*b(2,69,1))-69,q=0>f?a*b(2,-f,1):a/b(2,f,1),q*=4503599627370496,f=52-f,f>0){for(d(0,q),j=i;j>=7;)d(1e7,0),j-=7;for(d(b(10,j,1),0),j=f-1;j>=23;)h(1<<23),j-=23;h(1<<j),d(1,1),h(2),c=l()}else d(0,q),d(1<<-f,0),c=l()+g.call(e,i);return i>0?(p=c.length,c=r+(i>=p?"0."+g.call(e,i-p)+c:c.slice(0,p-i)+"."+c.slice(p-i))):c=r+c,c}})},function(b,c){b.exports=function(b,d,e,c){if(!(b instanceof d)||c!==a&&c in b)throw TypeError(e+": incorrect invocation!");return b}},function(a,d,b){var c=b(32);a.exports=function(a,b){if("number"!=typeof a&&"Number"!=c(a))throw TypeError(b);return+a}},function(b,e,a){var c=a(36),d=a(33);b.exports=function repeat(f){var b=String(d(this)),e="",a=c(f);if(0>a||a==1/0)throw RangeError("Count can't be negative");for(;a>0;(a>>>=1)&&(b+=b))1&a&&(e+=b);return e}},function(g,h,c){var d=c(6),e=c(5),f=c(85),b=1..toPrecision;d(d.P+d.F*(e(function(){return"1"!==b.call(1,a)})||!e(function(){b.call({})})),"Number",{toPrecision:function toPrecision(c){var d=f(this,"Number#toPrecision: incorrect invocation!");return c===a?b.call(d):b.call(d,c)}})},function(c,d,b){var a=b(6);a(a.S,"Number",{EPSILON:Math.pow(2,-52)})},function(d,e,a){var b=a(6),c=a(2).isFinite;b(b.S,"Number",{isFinite:function isFinite(a){return"number"==typeof a&&c(a)}})},function(c,d,a){var b=a(6);b(b.S,"Number",{isInteger:a(91)})},function(a,e,b){var c=b(11),d=Math.floor;a.exports=function isInteger(a){return!c(a)&&isFinite(a)&&d(a)===a}},function(c,d,b){var a=b(6);a(a.S,"Number",{isNaN:function isNaN(a){return a!=a}})},function(e,f,a){var b=a(6),c=a(91),d=Math.abs;b(b.S,"Number",{isSafeInteger:function isSafeInteger(a){return c(a)&&d(a)<=9007199254740991}})},function(c,d,b){var a=b(6);a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(c,d,b){var a=b(6);a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(d,e,b){var a=b(6),c=b(97);a(a.S+a.F*(Number.parseFloat!=c),"Number",{parseFloat:c})},function(c,e,a){var b=a(2).parseFloat,d=a(81).trim;c.exports=1/b(a(82)+"-0")!==-(1/0)?function parseFloat(e){var a=d(String(e),3),c=b(a);return 0===c&&"-"==a.charAt(0)?-0:c}:b},function(d,e,b){var a=b(6),c=b(99);a(a.S+a.F*(Number.parseInt!=c),"Number",{parseInt:c})},function(d,g,b){var a=b(2).parseInt,e=b(81).trim,c=b(82),f=/^[\-+]?0[xX]/;d.exports=8!==a(c+"08")||22!==a(c+"0x16")?function parseInt(c,d){var b=e(String(c),3);return a(b,d>>>0||(f.test(b)?16:10))}:a},function(d,e,b){var a=b(6),c=b(99);a(a.G+a.F*(parseInt!=c),{parseInt:c})},function(d,e,b){var a=b(6),c=b(97);a(a.G+a.F*(parseFloat!=c),{parseFloat:c})},function(f,g,c){var a=c(6),e=c(103),d=Math.sqrt,b=Math.acosh;a(a.S+a.F*!(b&&710==Math.floor(b(Number.MAX_VALUE))&&b(1/0)==1/0),"Math",{acosh:function acosh(a){return(a=+a)<1?NaN:a>94906265.62425156?Math.log(a)+Math.LN2:e(a-1+d(a-1)*d(a+1))}})},function(a,b){a.exports=Math.log1p||function log1p(a){return(a=+a)>-1e-8&&1e-8>a?a-a*a/2:Math.log(1+a)}},function(d,e,c){function asinh(a){return isFinite(a=+a)&&0!=a?0>a?-asinh(-a):Math.log(a+Math.sqrt(a*a+1)):a}var a=c(6),b=Math.asinh;a(a.S+a.F*!(b&&1/b(0)>0),"Math",{asinh:asinh})},function(d,e,c){var a=c(6),b=Math.atanh;a(a.S+a.F*!(b&&1/b(-0)<0),"Math",{atanh:function atanh(a){return 0==(a=+a)?a:Math.log((1+a)/(1-a))/2}})},function(d,e,a){var b=a(6),c=a(107);b(b.S,"Math",{cbrt:function cbrt(a){return c(a=+a)*Math.pow(Math.abs(a),1/3)}})},function(a,b){a.exports=Math.sign||function sign(a){return 0==(a=+a)||a!=a?a:0>a?-1:1}},function(c,d,b){var a=b(6);a(a.S,"Math",{clz32:function clz32(a){return(a>>>=0)?31-Math.floor(Math.log(a+.5)*Math.LOG2E):32}})},function(d,e,c){var a=c(6),b=Math.exp;a(a.S,"Math",{cosh:function cosh(a){return(b(a=+a)+b(-a))/2}})},function(d,e,b){var a=b(6),c=b(111);a(a.S+a.F*(c!=Math.expm1),"Math",{expm1:c})},function(b,c){var a=Math.expm1;b.exports=!a||a(10)>22025.465794806718||a(10)<22025.465794806718||-2e-17!=a(-2e-17)?function expm1(a){return 0==(a=+a)?a:a>-1e-6&&1e-6>a?a+a*a/2:Math.exp(a)-1}:a},function(k,j,e){var f=e(6),g=e(107),a=Math.pow,d=a(2,-52),b=a(2,-23),i=a(2,127)*(2-b),c=a(2,-126),h=function(a){return a+1/d-1/d};f(f.S,"Math",{fround:function fround(k){var f,a,e=Math.abs(k),j=g(k);return c>e?j*h(e/c/b)*c*b:(f=(1+b/d)*e,a=f-(f-e),a>i||a!=a?j*(1/0):j*a)}})},function(d,e,b){var a=b(6),c=Math.abs;a(a.S,"Math",{hypot:function hypot(h,i){for(var a,b,e=0,f=0,g=arguments.length,d=0;g>f;)a=c(arguments[f++]),a>d?(b=d/a,e=e*b*b+1,d=a):a>0?(b=a/d,e+=b*b):e+=a;return d===1/0?1/0:d*Math.sqrt(e)}})},function(d,e,b){var a=b(6),c=Math.imul;a(a.S+a.F*b(5)(function(){return-5!=c(4294967295,5)||2!=c.length}),"Math",{imul:function imul(f,g){var a=65535,b=+f,c=+g,d=a&b,e=a&c;return 0|d*e+((a&b>>>16)*e+d*(a&c>>>16)<<16>>>0)}})},function(c,d,b){var a=b(6);a(a.S,"Math",{log10:function log10(a){return Math.log(a)/Math.LN10}})},function(c,d,a){var b=a(6);b(b.S,"Math",{log1p:a(103)})},function(c,d,b){var a=b(6);a(a.S,"Math",{log2:function log2(a){return Math.log(a)/Math.LN2}})},function(c,d,a){var b=a(6);b(b.S,"Math",{sign:a(107)})},function(e,f,a){var b=a(6),c=a(111),d=Math.exp;b(b.S+b.F*a(5)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function sinh(a){return Math.abs(a=+a)<1?(c(a)-c(-a))/2:(d(a-1)-d(-a-1))*(Math.E/2)}})},function(e,f,a){var b=a(6),c=a(111),d=Math.exp;b(b.S,"Math",{tanh:function tanh(a){var b=c(a=+a),e=c(-a);return b==1/0?1:e==1/0?-1:(b-e)/(d(a)+d(-a))}})},function(c,d,b){var a=b(6);a(a.S,"Math",{trunc:function trunc(a){return(a>0?Math.floor:Math.ceil)(a)}})},function(f,g,b){var a=b(6),e=b(37),c=String.fromCharCode,d=String.fromCodePoint;a(a.S+a.F*(!!d&&1!=d.length),"String",{fromCodePoint:function fromCodePoint(g){for(var a,b=[],f=arguments.length,d=0;f>d;){if(a=+arguments[d++],e(a,1114111)!==a)throw RangeError(a+" is not a valid code point");b.push(65536>a?c(a):c(((a-=65536)>>10)+55296,a%1024+56320))}return b.join("")}})},function(e,f,a){var b=a(6),c=a(30),d=a(35);b(b.S,"String",{raw:function raw(f){for(var e=c(f.raw),g=d(e.length),h=arguments.length,b=[],a=0;g>a;)b.push(String(e[a++])),h>a&&b.push(String(arguments[a]));return b.join("")}})},function(b,c,a){a(81)("trim",function(a){return function trim(){return a(this,3)}})},function(d,e,a){var b=a(6),c=a(126)(!1);b(b.P,"String",{codePointAt:function codePointAt(a){return c(this,a)}})},function(c,f,b){var d=b(36),e=b(33);c.exports=function(b){return function(j,k){var f,h,g=String(e(j)),c=d(k),i=g.length;return 0>c||c>=i?b?"":a:(f=g.charCodeAt(c),55296>f||f>56319||c+1===i||(h=g.charCodeAt(c+1))<56320||h>57343?b?g.charAt(c):f:b?g.slice(c,c+2):(f-55296<<10)+(h-56320)+65536)}}},function(h,i,b){var c=b(6),e=b(35),g=b(128),d="endsWith",f=""[d];c(c.P+c.F*b(130)(d),"String",{endsWith:function endsWith(i){var b=g(this,i,d),j=arguments.length>1?arguments[1]:a,k=e(b.length),c=j===a?k:Math.min(e(j),k),h=String(i);return f?f.call(b,h,c):b.slice(c-h.length,c)===h}})},function(b,e,a){var c=a(129),d=a(33);b.exports=function(a,b,e){if(c(b))throw TypeError("String#"+e+" doesn't accept regex!");return String(d(a))}},function(c,g,b){var d=b(11),e=b(32),f=b(23)("match");c.exports=function(b){var c;return d(b)&&((c=b[f])!==a?!!c:"RegExp"==e(b))}},function(a,d,b){var c=b(23)("match");a.exports=function(b){var a=/./;try{"/./"[b](a)}catch(d){try{return a[c]=!1,!"/./"[b](a)}catch(e){}}return!0}},function(f,g,b){var c=b(6),e=b(128),d="includes";c(c.P+c.F*b(130)(d),"String",{includes:function includes(b){return!!~e(this,b,d).indexOf(b,arguments.length>1?arguments[1]:a)}})},function(c,d,a){var b=a(6);b(b.P,"String",{repeat:a(86)})},function(h,i,b){var c=b(6),f=b(35),g=b(128),d="startsWith",e=""[d];c(c.P+c.F*b(130)(d),"String",{startsWith:function startsWith(i){var b=g(this,i,d),c=f(Math.min(arguments.length>1?arguments[1]:a,b.length)),h=String(i);return e?e.call(b,h,c):b.slice(c,c+h.length)===h}})},function(d,e,b){var c=b(126)(!0);b(135)(String,"String",function(a){this._t=String(a),this._i=0},function(){var b,d=this._t,e=this._i;return e>=d.length?{value:a,done:!0}:(b=c(d,e),this._i+=b.length,{value:b,done:!1})})},function(q,s,b){var h=b(26),e=b(6),o=b(16),i=b(8),n=b(3),j=b(136),r=b(137),l=b(22),m=b(57),c=b(23)("iterator"),f=!([].keys&&"next"in[].keys()),p="@@iterator",k="keys",d="values",g=function(){return this};q.exports=function(C,w,x,H,s,G,D){r(x,w,H);var v,z,u,y=function(a){if(!f&&a in b)return b[a];switch(a){case k:return function keys(){return new x(this,a)};case d:return function values(){return new x(this,a)}}return function entries(){return new x(this,a)}},E=w+" Iterator",A=s==d,B=!1,b=C.prototype,t=b[c]||b[p]||s&&b[s],q=t||y(s),I=s?A?y("entries"):q:a,F="Array"==w?b.entries||t:t;if(F&&(u=m(F.call(new C)),u!==Object.prototype&&(l(u,E,!0),h||n(u,c)||i(u,c,g))),A&&t&&t.name!==d&&(B=!0,q=function values(){return t.call(this)}),h&&!D||!f&&!B&&b[c]||i(b,c,q),j[w]=q,j[E]=g,s)if(v={values:A?q:y(d),keys:G?q:y(k),entries:I},D)for(z in v)z in b||o(b,z,v[z]);else e(e.P+e.F*(f||B),w,v);return v}},function(a,b){a.exports={}},function(c,g,a){var d=a(44),e=a(15),f=a(22),b={};a(8)(b,a(23)("iterator"),function(){return this}),c.exports=function(a,c,g){a.prototype=d(b,{next:e(1,g)}),f(a,c+" Iterator")}},function(b,c,a){a(139)("anchor",function(a){return function anchor(b){return a(this,"a","name",b)}})},function(c,h,a){var b=a(6),d=a(5),e=a(33),f=/"/g,g=function(d,a,b,g){var h=String(e(d)),c="<"+a;return""!==b&&(c+=" "+b+'="'+String(g).replace(f,"&quot;")+'"'),c+">"+h+"</"+a+">"};c.exports=function(a,e){var c={};c[a]=e(g),b(b.P+b.F*d(function(){var b=""[a]('"');return b!==b.toLowerCase()||b.split('"').length>3}),"String",c)}},function(b,c,a){a(139)("big",function(a){return function big(){return a(this,"big","","")}})},function(b,c,a){a(139)("blink",function(a){return function blink(){return a(this,"blink","","")}})},function(b,c,a){a(139)("bold",function(a){return function bold(){return a(this,"b","","")}})},function(b,c,a){a(139)("fixed",function(a){return function fixed(){return a(this,"tt","","")}})},function(b,c,a){a(139)("fontcolor",function(a){return function fontcolor(b){return a(this,"font","color",b)}})},function(b,c,a){a(139)("fontsize",function(a){return function fontsize(b){return a(this,"font","size",b)}})},function(b,c,a){a(139)("italics",function(a){return function italics(){return a(this,"i","","")}})},function(b,c,a){a(139)("link",function(a){return function link(b){return a(this,"a","href",b)}})},function(b,c,a){a(139)("small",function(a){return function small(){return a(this,"small","","")}})},function(b,c,a){a(139)("strike",function(a){return function strike(){return a(this,"strike","","")}})},function(b,c,a){a(139)("sub",function(a){return function sub(){return a(this,"sub","","")}})},function(b,c,a){a(139)("sup",function(a){return function sup(){return a(this,"sup","","")}})},function(c,d,a){var b=a(6);b(b.S,"Array",{isArray:a(43)})},function(l,k,b){var g=b(18),c=b(6),e=b(56),h=b(154),i=b(155),j=b(35),d=b(156),f=b(157);c(c.S+c.F*!b(158)(function(a){Array.from(a)}),"Array",{from:function from(t){var o,c,m,n,k=e(t),p="function"==typeof this?this:Array,s=arguments.length,l=s>1?arguments[1]:a,q=l!==a,b=0,r=f(k);if(q&&(l=g(l,s>2?arguments[2]:a,2)),r==a||p==Array&&i(r))for(o=j(k.length),c=new p(o);o>b;b++)d(c,b,q?l(k[b],b):k[b]);else for(n=r.call(k),c=new p;!(m=n.next()).done;b++)d(c,b,q?h(n,l,[m.value,b],!0):m.value);return c.length=b,c}})},function(c,e,d){var b=d(10);c.exports=function(d,e,c,g){try{return g?e(b(c)[0],c[1]):e(c)}catch(h){var f=d["return"];throw f!==a&&b(f.call(d)),h}}},function(c,g,b){var d=b(136),e=b(23)("iterator"),f=Array.prototype;c.exports=function(b){return b!==a&&(d.Array===b||f[e]===b)}},function(b,e,a){var c=a(9),d=a(15);b.exports=function(a,b,e){b in a?c.f(a,b,d(0,e)):a[b]=e}},function(c,g,b){var d=b(73),e=b(23)("iterator"),f=b(136);
c.exports=b(7).getIteratorMethod=function(b){return b!=a?b[e]||b["@@iterator"]||f[d(b)]:void 0}},function(d,f,e){var a=e(23)("iterator"),b=!1;try{var c=[7][a]();c["return"]=function(){b=!0},Array.from(c,function(){throw 2})}catch(g){}d.exports=function(f,g){if(!g&&!b)return!1;var d=!1;try{var c=[7],e=c[a]();e.next=function(){return{done:d=!0}},c[a]=function(){return e},f(c)}catch(h){}return d}},function(d,e,a){var b=a(6),c=a(156);b(b.S+b.F*a(5)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var a=0,b=arguments.length,d=new("function"==typeof this?this:Array)(b);b>a;)c(d,a,arguments[a++]);return d.length=b,d}})},function(f,g,b){var c=b(6),e=b(30),d=[].join;c(c.P+c.F*(b(31)!=Object||!b(161)(d)),"Array",{join:function join(b){return d.call(e(this),b===a?",":b)}})},function(a,d,b){var c=b(5);a.exports=function(a,b){return!!a&&c(function(){b?a.call(null,function(){},1):a.call(null)})}},function(i,j,b){var c=b(6),d=b(46),h=b(32),e=b(37),f=b(35),g=[].slice;c(c.P+c.F*b(5)(function(){d&&g.call(d)}),"Array",{slice:function slice(j,b){var d=f(this.length),k=h(this);if(b=b===a?d:b,"Array"==k)return g.call(this,j,b);for(var i=e(j,d),n=e(b,d),l=f(n-i),m=Array(l),c=0;l>c;c++)m[c]="String"==k?this.charAt(i+c):this[i+c];return m}})},function(i,j,b){var c=b(6),h=b(19),e=b(56),f=b(5),d=[].sort,g=[1,2,3];c(c.P+c.F*(f(function(){g.sort(a)})||!f(function(){g.sort(null)})||!b(161)(d)),"Array",{sort:function sort(b){return b===a?d.call(e(this)):d.call(e(this),h(b))}})},function(e,f,a){var b=a(6),c=a(165)(0),d=a(161)([].forEach,!0);b(b.P+b.F*!d,"Array",{forEach:function forEach(a){return c(this,a,arguments[1])}})},function(c,i,b){var d=b(18),e=b(31),f=b(56),g=b(35),h=b(166);c.exports=function(b,l){var i=1==b,m=2==b,n=3==b,c=4==b,j=6==b,o=5==b||j,k=l||h;return function(p,v,x){for(var l,r,u=f(p),s=e(u),w=d(v,x,3),t=g(s.length),h=0,q=i?k(p,t):m?k(p,0):a;t>h;h++)if((o||h in s)&&(l=s[h],r=w(l,h,u),b))if(i)q[h]=r;else if(r)switch(b){case 3:return!0;case 5:return l;case 6:return h;case 2:q.push(l)}else if(c)return!1;return j?-1:n||c?c:q}}},function(a,d,b){var c=b(167);a.exports=function(a,b){return new(c(a))(b)}},function(d,g,b){var e=b(11),c=b(43),f=b(23)("species");d.exports=function(d){var b;return c(d)&&(b=d.constructor,"function"!=typeof b||b!==Array&&!c(b.prototype)||(b=a),e(b)&&(b=b[f],null===b&&(b=a))),b===a?Array:b}},function(d,e,a){var b=a(6),c=a(165)(1);b(b.P+b.F*!a(161)([].map,!0),"Array",{map:function map(a){return c(this,a,arguments[1])}})},function(d,e,a){var b=a(6),c=a(165)(2);b(b.P+b.F*!a(161)([].filter,!0),"Array",{filter:function filter(a){return c(this,a,arguments[1])}})},function(d,e,a){var b=a(6),c=a(165)(3);b(b.P+b.F*!a(161)([].some,!0),"Array",{some:function some(a){return c(this,a,arguments[1])}})},function(d,e,a){var b=a(6),c=a(165)(4);b(b.P+b.F*!a(161)([].every,!0),"Array",{every:function every(a){return c(this,a,arguments[1])}})},function(d,e,a){var b=a(6),c=a(173);b(b.P+b.F*!a(161)([].reduce,!0),"Array",{reduce:function reduce(a){return c(this,a,arguments.length,arguments[1],!1)}})},function(b,g,a){var c=a(19),d=a(56),e=a(31),f=a(35);b.exports=function(m,l,n,b,g){c(l);var i=d(m),h=e(i),j=f(i.length),a=g?j-1:0,k=g?-1:1;if(2>n)for(;;){if(a in h){b=h[a],a+=k;break}if(a+=k,g?0>a:a>=j)throw TypeError("Reduce of empty array with no initial value")}for(;g?a>=0:j>a;a+=k)a in h&&(b=l(b,h[a],a,i));return b}},function(d,e,a){var b=a(6),c=a(173);b(b.P+b.F*!a(161)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(a){return c(this,a,arguments.length,arguments[1],!0)}})},function(f,g,a){var b=a(6),e=a(34)(!1),c=[].indexOf,d=!!c&&1/[1].indexOf(1,-0)<0;b(b.P+b.F*(d||!a(161)(c)),"Array",{indexOf:function indexOf(a){return d?c.apply(this,arguments)||0:e(this,a,arguments[1])}})},function(h,i,a){var b=a(6),e=a(30),f=a(36),g=a(35),c=[].lastIndexOf,d=!!c&&1/[1].lastIndexOf(1,-0)<0;b(b.P+b.F*(d||!a(161)(c)),"Array",{lastIndexOf:function lastIndexOf(i){if(d)return c.apply(this,arguments)||0;var b=e(this),h=g(b.length),a=h-1;for(arguments.length>1&&(a=Math.min(a,f(arguments[1]))),0>a&&(a=h+a);a>=0;a--)if(a in b&&b[a]===i)return a||0;return-1}})},function(c,d,a){var b=a(6);b(b.P,"Array",{copyWithin:a(178)}),a(179)("copyWithin")},function(d,g,b){var e=b(56),c=b(37),f=b(35);d.exports=[].copyWithin||function copyWithin(l,m){var g=e(this),h=f(g.length),b=c(l,h),d=c(m,h),k=arguments.length>2?arguments[2]:a,i=Math.min((k===a?h:c(k,h))-d,h-b),j=1;for(b>d&&d+i>b&&(j=-1,d+=i-1,b+=i-1);i-- >0;)d in g?g[b]=g[d]:delete g[b],b+=j,d+=j;return g}},function(e,f,d){var b=d(23)("unscopables"),c=Array.prototype;c[b]==a&&d(8)(c,b,{}),e.exports=function(a){c[b][a]=!0}},function(c,d,a){var b=a(6);b(b.P,"Array",{fill:a(181)}),a(179)("fill")},function(d,g,b){var e=b(56),c=b(37),f=b(35);d.exports=function fill(j){for(var b=e(this),d=f(b.length),g=arguments.length,h=c(g>1?arguments[1]:a,d),i=g>2?arguments[2]:a,k=i===a?d:c(i,d);k>h;)b[h++]=j;return b}},function(g,h,b){var c=b(6),f=b(165)(5),d="find",e=!0;d in[]&&Array(1)[d](function(){e=!1}),c(c.P+c.F*e,"Array",{find:function find(b){return f(this,b,arguments.length>1?arguments[1]:a)}}),b(179)(d)},function(g,h,b){var c=b(6),f=b(165)(6),d="findIndex",e=!0;d in[]&&Array(1)[d](function(){e=!1}),c(c.P+c.F*e,"Array",{findIndex:function findIndex(b){return f(this,b,arguments.length>1?arguments[1]:a)}}),b(179)(d)},function(f,h,b){var d=b(179),c=b(185),e=b(136),g=b(30);f.exports=b(135)(Array,"Array",function(a,b){this._t=g(a),this._i=0,this._k=b},function(){var d=this._t,e=this._k,b=this._i++;return!d||b>=d.length?(this._t=a,c(1)):"keys"==e?c(0,b):"values"==e?c(0,d[b]):c(0,[b,d[b]])},"values"),e.Arguments=e.Array,d("keys"),d("values"),d("entries")},function(a,b){a.exports=function(a,b){return{value:b,done:!!a}}},function(b,c,a){a(187)("Array")},function(c,g,a){var d=a(2),e=a(9),f=a(4),b=a(23)("species");c.exports=function(c){var a=d[c];f&&a&&!a[b]&&e.f(a,b,{configurable:!0,get:function(){return this}})}},function(s,r,c){var i=c(2),q=c(80),o=c(9).f,n=c(48).f,m=c(129),l=c(189),b=i.RegExp,e=b,g=b.prototype,d=/a/g,f=/a/g,k=new b(d)!==d;if(c(4)&&(!k||c(5)(function(){return f[c(23)("match")]=!1,b(d)!=d||b(f)==f||"/a/i"!=b(d,"i")}))){b=function RegExp(c,f){var i=this instanceof b,d=m(c),h=f===a;return!i&&d&&c.constructor===b&&h?c:q(k?new e(d&&!h?c.source:c,f):e((d=c instanceof b)?c.source:c,d&&h?l.call(c):f),i?this:g,b)};for(var p=(function(a){a in b||o(b,a,{configurable:!0,get:function(){return e[a]},set:function(b){e[a]=b}})}),j=n(e),h=0;j.length>h;)p(j[h++]);g.constructor=b,b.prototype=g,c(16)(i,"RegExp",b)}c(187)("RegExp")},function(a,d,b){var c=b(10);a.exports=function(){var b=c(this),a="";return b.global&&(a+="g"),b.ignoreCase&&(a+="i"),b.multiline&&(a+="m"),b.unicode&&(a+="u"),b.sticky&&(a+="y"),a}},function(i,j,b){b(191);var f=b(10),g=b(189),h=b(4),c="toString",d=/./[c],e=function(a){b(16)(RegExp.prototype,c,a,!0)};b(5)(function(){return"/a/b"!=d.call({source:"a",flags:"b"})})?e(function toString(){var b=f(this);return"/".concat(b.source,"/","flags"in b?b.flags:!h&&b instanceof RegExp?g.call(b):a)}):d.name!=c&&e(function toString(){return d.call(this)})},function(b,c,a){a(4)&&"g"!=/./g.flags&&a(9).f(RegExp.prototype,"flags",{configurable:!0,get:a(189)})},function(c,d,b){b(193)("match",1,function(c,b,d){return[function match(d){var e=c(this),f=d==a?a:d[b];return f!==a?f.call(d,e):new RegExp(d)[b](String(e))},d]})},function(b,h,a){var c=a(8),d=a(16),e=a(5),f=a(33),g=a(23);b.exports=function(a,j,k){var b=g(a),h=k(f,b,""[a]),l=h[0],i=h[1];e(function(){var c={};return c[b]=function(){return 7},7!=""[a](c)})&&(d(String.prototype,a,l),c(RegExp.prototype,b,2==j?function(a,b){return i.call(a,this,b)}:function(a){return i.call(a,this)}))}},function(c,d,b){b(193)("replace",2,function(c,d,b){return[function replace(e,f){var g=c(this),h=e==a?a:e[d];return h!==a?h.call(e,g,f):b.call(String(g),e,f)},b]})},function(c,d,b){b(193)("search",1,function(c,b,d){return[function search(d){var e=c(this),f=d==a?a:d[b];return f!==a?f.call(d,e):new RegExp(d)[b](String(e))},d]})},function(c,d,b){b(193)("split",2,function(i,j,e){var k=b(129),f=e,l=[].push,d="split",c="length",g="lastIndex";if("c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[c]||2!="ab"[d](/(?:ab)*/)[c]||4!="."[d](/(.?)(.?)/)[c]||"."[d](/()()/)[c]>1||""[d](/.?/)[c]){var h=/()??/.exec("")[1]===a;e=function(d,o){var i=String(this);if(d===a&&0===o)return[];if(!k(d))return f.call(i,d,o);var s,b,p,t,n,e=[],r=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(d.sticky?"y":""),m=0,q=o===a?4294967295:o>>>0,j=new RegExp(d.source,r+"g");for(h||(s=new RegExp("^"+j.source+"$(?!\\s)",r));(b=j.exec(i))&&(p=b.index+b[0][c],!(p>m&&(e.push(i.slice(m,b.index)),!h&&b[c]>1&&b[0].replace(s,function(){for(n=1;arguments[c]-2>n;n++)arguments[n]===a&&(b[n]=a)}),b[c]>1&&i[c]>b.index&&l.apply(e,b.slice(1)),t=b[0][c],m=p,e[c]>=q)));)j[g]===b.index&&j[g]++;return m===i[c]?!t&&j.test("")||e.push(""):e.push(i.slice(m)),e[c]>q?e.slice(0,q):e}}else"0"[d](a,0)[c]&&(e=function(b,c){return b===a&&0===c?[]:f.call(this,b,c)});return[function split(b,c){var d=i(this),f=b==a?a:b[j];return f!==a?f.call(b,d,c):e.call(String(d),b,c)},e]})},function(K,J,b){var m,v,w,E=b(26),e=b(2),g=b(18),D=b(73),c=b(6),I=b(11),s=(b(10),b(19)),C=b(84),x=b(198),G=(b(71).set,b(199)),B=b(200).set,u=b(201)(),f="Promise",t=e.TypeError,n=e.process,d=e[f],n=e.process,k="process"==D(n),l=function(){},j=!!function(){try{var a=d.resolve(1),c=(a.constructor={})[b(23)("species")]=function(a){a(l,l)};return(k||"function"==typeof PromiseRejectionEvent)&&a.then(l)instanceof c}catch(e){}}(),z=function(a,b){return a===b||a===d&&b===w},A=function(a){var b;return I(a)&&"function"==typeof(b=a.then)?b:!1},i=function(a){return z(d,a)?new y(a):new v(a)},y=v=function(d){var b,c;this.promise=new d(function(d,e){if(b!==a||c!==a)throw t("Bad Promise constructor");b=d,c=e}),this.resolve=s(b),this.reject=s(c)},p=function(a){try{a()}catch(b){return{error:b}}},q=function(a,c){if(!a._n){a._n=!0;var b=a._c;u(function(){for(var d=a._v,e=1==a._s,f=0,g=function(b){var c,i,h=e?b.ok:b.fail,j=b.resolve,f=b.reject,g=b.domain;try{h?(e||(2==a._h&&H(a),a._h=1),h===!0?c=d:(g&&g.enter(),c=h(d),g&&g.exit()),c===b.promise?f(t("Promise-chain cycle")):(i=A(c))?i.call(c,j,f):j(c)):f(d)}catch(k){f(k)}};b.length>f;)g(b[f++]);a._c=[],a._n=!1,c&&!a._h&&F(a)})}},F=function(b){B.call(e,function(){var c,g,d,f=b._v;if(o(b)&&(c=p(function(){k?n.emit("unhandledRejection",f,b):(g=e.onunhandledrejection)?g({promise:b,reason:f}):(d=e.console)&&d.error&&d.error("Unhandled promise rejection",f)}),b._h=k||o(b)?2:1),b._a=a,c)throw c.error})},o=function(a){if(1==a._h)return!1;for(var b,c=a._a||a._c,d=0;c.length>d;)if(b=c[d++],b.fail||!o(b.promise))return!1;return!0},H=function(a){B.call(e,function(){var b;k?n.emit("rejectionHandled",a):(b=e.onrejectionhandled)&&b({promise:a,reason:a._v})})},h=function(b){var a=this;a._d||(a._d=!0,a=a._w||a,a._v=b,a._s=2,a._a||(a._a=a._c.slice()),q(a,!0))},r=function(b){var c,a=this;if(!a._d){a._d=!0,a=a._w||a;try{if(a===b)throw t("Promise can't be resolved itself");(c=A(b))?u(function(){var d={_w:a,_d:!1};try{c.call(b,g(r,d,1),g(h,d,1))}catch(e){h.call(d,e)}}):(a._v=b,a._s=1,q(a,!1))}catch(d){h.call({_w:a,_d:!1},d)}}};j||(d=function Promise(a){C(this,d,f,"_h"),s(a),m.call(this);try{a(g(r,this,1),g(h,this,1))}catch(b){h.call(this,b)}},m=function Promise(b){this._c=[],this._a=a,this._s=0,this._d=!1,this._v=a,this._h=0,this._n=!1},m.prototype=b(202)(d.prototype,{then:function then(c,e){var b=i(G(this,d));return b.ok="function"==typeof c?c:!0,b.fail="function"==typeof e&&e,b.domain=k?n.domain:a,this._c.push(b),this._a&&this._a.push(b),this._s&&q(this,!1),b.promise},"catch":function(b){return this.then(a,b)}}),y=function(){var a=new m;this.promise=a,this.resolve=g(r,a,1),this.reject=g(h,a,1)}),c(c.G+c.W+c.F*!j,{Promise:d}),b(22)(d,f),b(187)(f),w=b(7)[f],c(c.S+c.F*!j,f,{reject:function reject(b){var a=i(this),c=a.reject;return c(b),a.promise}}),c(c.S+c.F*(E||!j),f,{resolve:function resolve(a){if(a instanceof d&&z(a.constructor,this))return a;var b=i(this),c=b.resolve;return c(a),b.promise}}),c(c.S+c.F*!(j&&b(158)(function(a){d.all(a)["catch"](l)})),f,{all:function all(g){var c=this,b=i(c),d=b.resolve,e=b.reject,f=p(function(){var b=[],h=0,f=1;x(g,!1,function(i){var j=h++,g=!1;b.push(a),f++,c.resolve(i).then(function(a){g||(g=!0,b[j]=a,--f||d(b))},e)}),--f||d(b)});return f&&e(f.error),b.promise},race:function race(e){var b=this,a=i(b),c=a.reject,d=p(function(){x(e,!1,function(d){b.resolve(d).then(a.resolve,c)})});return d&&c(d.error),a.promise}})},function(f,d,a){var j=a(18),e=a(154),k=a(155),g=a(10),h=a(35),i=a(157),c={},b={},d=f.exports=function(d,m,t,r,s){var q,l,n,a,o=s?function(){return d}:i(d),p=j(t,r,m?2:1),f=0;if("function"!=typeof o)throw TypeError(d+" is not iterable!");if(k(o)){for(q=h(d.length);q>f;f++)if(a=m?p(g(l=d[f])[0],l[1]):p(d[f]),a===c||a===b)return a}else for(n=o.call(d);!(l=n.next()).done;)if(a=e(n,p,l.value,m),a===c||a===b)return a};d.BREAK=c,d.RETURN=b},function(d,g,b){var c=b(10),e=b(19),f=b(23)("species");d.exports=function(g,h){var b,d=c(g).constructor;return d===a||(b=c(d)[f])==a?h:e(b)}},function(s,t,b){var c,g,f,k=b(18),r=b(76),n=b(46),p=b(13),a=b(2),l=a.process,h=a.setImmediate,i=a.clearImmediate,o=a.MessageChannel,j=0,d={},q="onreadystatechange",e=function(){var a=+this;if(d.hasOwnProperty(a)){var b=d[a];delete d[a],b()}},m=function(a){e.call(a.data)};h&&i||(h=function setImmediate(a){for(var b=[],e=1;arguments.length>e;)b.push(arguments[e++]);return d[++j]=function(){r("function"==typeof a?a:Function(a),b)},c(j),j},i=function clearImmediate(a){delete d[a]},"process"==b(32)(l)?c=function(a){l.nextTick(k(e,a,1))}:o?(g=new o,f=g.port2,g.port1.onmessage=m,c=k(f.postMessage,f,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts?(c=function(b){a.postMessage(b+"","*")},a.addEventListener("message",m,!1)):c=q in p("script")?function(a){n.appendChild(p("script"))[q]=function(){n.removeChild(this),e.call(a)}}:function(a){setTimeout(k(e,a,1),0)}),s.exports={set:h,clear:i}},function(h,j,c){var b=c(2),i=c(200).set,f=b.MutationObserver||b.WebKitMutationObserver,d=b.process,e=b.Promise,g="process"==c(32)(d);h.exports=function(){var c,j,h,k=function(){var b,e;for(g&&(b=d.domain)&&b.exit();c;){e=c.fn,c=c.next;try{e()}catch(f){throw c?h():j=a,f}}j=a,b&&b.enter()};if(g)h=function(){d.nextTick(k)};else if(f){var l=!0,m=document.createTextNode("");new f(k).observe(m,{characterData:!0}),h=function(){m.data=l=!l}}else if(e&&e.resolve){var n=e.resolve();h=function(){n.then(k)}}else h=function(){i.call(b,k)};return function(d){var b={fn:d,next:a};j&&(j.next=b),c||(c=b,h()),j=b}}},function(a,d,b){var c=b(16);a.exports=function(a,b,e){for(var d in b)c(a,d,b[d],e);return a}},function(d,e,c){var b=c(204);d.exports=c(205)("Map",function(b){return function Map(){return b(this,arguments.length>0?arguments[0]:a)}},{get:function get(c){var a=b.getEntry(this,c);return a&&a.v},set:function set(a,c){return b.def(this,0===a?0:a,c)}},b,!0)},function(i,r,b){var j=b(9).f,m=b(44),o=(b(8),b(202)),p=b(18),f=b(84),q=b(33),k=b(198),l=b(135),e=b(185),n=b(187),g=b(4),h=b(20).fastKey,c=g?"_s":"size",d=function(b,c){var a,d=h(c);if("F"!==d)return b._i[d];for(a=b._f;a;a=a.n)if(a.k==c)return a};i.exports={getConstructor:function(e,h,i,l){var b=e(function(d,e){f(d,b,h,"_i"),d._i=m(null),d._f=a,d._l=a,d[c]=0,e!=a&&k(e,i,d[l],d)});return o(b.prototype,{clear:function clear(){for(var d=this,e=d._i,b=d._f;b;b=b.n)b.r=!0,b.p&&(b.p=b.p.n=a),delete e[b.i];d._f=d._l=a,d[c]=0},"delete":function(g){var b=this,a=d(b,g);if(a){var e=a.n,f=a.p;delete b._i[a.i],a.r=!0,f&&(f.n=e),e&&(e.p=f),b._f==a&&(b._f=e),b._l==a&&(b._l=f),b[c]--}return!!a},forEach:function forEach(d){f(this,b,"forEach");for(var c,e=p(d,arguments.length>1?arguments[1]:a,3);c=c?c.n:this._f;)for(e(c.v,c.k,this);c&&c.r;)c=c.p},has:function has(a){return!!d(this,a)}}),g&&j(b.prototype,"size",{get:function(){return q(this[c])}}),b},def:function(b,f,j){var g,i,e=d(b,f);return e?e.v=j:(b._l=e={i:i=h(f,!0),k:f,v:j,p:g=b._l,n:a,r:!1},b._f||(b._f=e),g&&(g.n=e),b[c]++,"F"!==i&&(b._i[i]=e)),b},getEntry:d,setStrong:function(d,b,c){l(d,b,function(b,c){this._t=b,this._k=c,this._l=a},function(){for(var c=this,d=c._k,b=c._l;b&&b.r;)b=b.p;return c._t&&(c._l=b=b?b.n:c._t._f)?"keys"==d?e(0,b.k):"values"==d?e(0,b.v):e(0,[b.k,b.v]):(c._t=a,e(1))},c?"entries":"values",!c,!0),n(b)}}},function(m,p,b){var l=b(2),c=b(6),g=b(16),h=b(202),f=b(20),j=b(198),k=b(84),d=b(11),e=b(5),n=b(158),i=b(22),o=b(80);m.exports=function(q,y,A,x,r,m){var u=l[q],b=u,s=r?"set":"add",p=b&&b.prototype,w={},t=function(b){var c=p[b];g(p,b,"delete"==b?function(a){return m&&!d(a)?!1:c.call(this,0===a?0:a)}:"has"==b?function has(a){return m&&!d(a)?!1:c.call(this,0===a?0:a)}:"get"==b?function get(b){return m&&!d(b)?a:c.call(this,0===b?0:b)}:"add"==b?function add(a){return c.call(this,0===a?0:a),this}:function set(a,b){return c.call(this,0===a?0:a,b),this})};if("function"==typeof b&&(m||p.forEach&&!e(function(){(new b).entries().next()}))){var v=new b,B=v[s](m?{}:-0,1)!=v,C=e(function(){v.has(1)}),D=n(function(a){new b(a)}),z=!m&&e(function(){for(var c=new b,a=5;a--;)c[s](a,a);return!c.has(-0)});D||(b=y(function(d,e){k(d,b,q);var c=o(new u,d,b);return e!=a&&j(e,r,c[s],c),c}),b.prototype=p,p.constructor=b),(C||z)&&(t("delete"),t("has"),r&&t("get")),(z||B)&&t(s),m&&p.clear&&delete p.clear}else b=x.getConstructor(y,q,r,s),h(b.prototype,A),f.NEED=!0;return i(b,q),w[q]=b,c(c.G+c.W+c.F*(b!=u),w),m||x.setStrong(b,q,r),b}},function(d,e,b){var c=b(204);d.exports=b(205)("Set",function(b){return function Set(){return b(this,arguments.length>0?arguments[0]:a)}},{add:function add(a){return c.def(this,a=0===a?0:a,a)}},c)},function(q,r,b){var d,p=b(165)(0),o=b(16),h=b(20),n=b(67),c=b(208),j=b(11),k=(b(3),h.getWeak),l=Object.isExtensible,m=c.ufstore,i={},g=function(b){return function WeakMap(){return b(this,arguments.length>0?arguments[0]:a)}},f={get:function get(b){if(j(b)){var c=k(b);return c===!0?m(this).get(b):c?c[this._i]:a}},set:function set(a,b){return c.def(this,a,b)}},e=q.exports=b(205)("WeakMap",g,f,c,!0,!0);7!=(new e).set((Object.freeze||Object)(i),7).get(i)&&(d=c.getConstructor(g),n(d.prototype,f),h.NEED=!0,p(["delete","has","get","set"],function(a){var b=e.prototype,c=b[a];o(b,a,function(b,e){if(j(b)&&!l(b)){this._f||(this._f=new d);var f=this._f[a](b,e);return"set"==a?this:f}return c.call(this,b,e)})}))},function(j,r,b){var l=b(202),e=b(20).getWeak,k=b(10),f=b(11),p=b(84),q=b(198),h=b(165),i=b(3),m=h(5),n=h(6),o=0,c=function(a){return a._l||(a._l=new g)},g=function(){this.a=[]},d=function(a,b){return m(a.a,function(a){return a[0]===b})};g.prototype={get:function(b){var a=d(this,b);return a?a[1]:void 0},has:function(a){return!!d(this,a)},set:function(a,b){var c=d(this,a);c?c[1]=b:this.a.push([a,b])},"delete":function(b){var a=n(this.a,function(a){return a[0]===b});return~a&&this.a.splice(a,1),!!~a}},j.exports={getConstructor:function(d,g,h,j){var b=d(function(c,d){p(c,b,g,"_i"),c._i=o++,c._l=a,d!=a&&q(d,h,c[j],c)});return l(b.prototype,{"delete":function(b){if(!f(b))return!1;var a=e(b);return a===!0?c(this)["delete"](b):a&&i(a,this._i)&&delete a[this._i]},has:function has(a){if(!f(a))return!1;var b=e(a);return b===!0?c(this).has(a):b&&i(b,this._i)}}),b},def:function(a,b,d){var f=e(k(b),!0);return f===!0?c(a).set(b,d):f[a._i]=d,a},ufstore:c}},function(d,e,b){var c=b(208);b(205)("WeakSet",function(b){return function WeakSet(){return b(this,arguments.length>0?arguments[0]:a)}},{add:function add(a){return c.def(this,a,!0)}},c,!1,!0)},function(f,g,a){var b=a(6),c=a(19),d=a(10),e=Function.apply;b(b.S,"Reflect",{apply:function apply(a,b,f){return e.call(c(a),b,d(f))}})},function(h,i,a){var b=a(6),e=a(44),c=a(19),f=a(10),d=a(11),g=a(75);b(b.S+b.F*a(5)(function(){function F(){}return!(Reflect.construct(function(){},[],F)instanceof F)}),"Reflect",{construct:function construct(b,a){c(b),f(a);var i=3>arguments.length?b:c(arguments[2]);if(b==i){switch(a.length){case 0:return new b;case 1:return new b(a[0]);case 2:return new b(a[0],a[1]);case 3:return new b(a[0],a[1],a[2]);case 4:return new b(a[0],a[1],a[2],a[3])}var h=[null];return h.push.apply(h,a),new(g.apply(b,h))}var j=i.prototype,k=e(d(j)?j:Object.prototype),l=Function.apply.call(b,k,a);return d(l)?l:k}})},function(f,g,a){var c=a(9),b=a(6),d=a(10),e=a(14);b(b.S+b.F*a(5)(function(){Reflect.defineProperty(c.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(b,a,f){d(b),a=e(a,!0),d(f);try{return c.f(b,a,f),!0}catch(g){return!1}}})},function(e,f,a){var b=a(6),c=a(49).f,d=a(10);b(b.S,"Reflect",{deleteProperty:function deleteProperty(a,b){var e=c(d(a),b);return e&&!e.configurable?!1:delete a[b]}})},function(f,g,b){var c=b(6),e=b(10),d=function(a){this._t=e(a),this._i=0;var b,c=this._k=[];for(b in a)c.push(b)};b(137)(d,"Object",function(){var c,b=this,d=b._k;do if(b._i>=d.length)return{value:a,done:!0};while(!((c=d[b._i++])in b._t));return{value:c,done:!1}}),c(c.S,"Reflect",{enumerate:function enumerate(a){return new d(a)}})},function(i,j,b){function get(b,i){var c,k,j=3>arguments.length?b:arguments[2];return h(b)===j?b[i]:(c=d.f(b,i))?f(c,"value")?c.value:c.get!==a?c.get.call(j):a:g(k=e(b))?get(k,i,j):void 0}var d=b(49),e=b(57),f=b(3),c=b(6),g=b(11),h=b(10);c(c.S,"Reflect",{get:get})},function(e,f,a){var c=a(49),b=a(6),d=a(10);b(b.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(a,b){return c.f(d(a),b)}})},function(e,f,a){var b=a(6),c=a(57),d=a(10);b(b.S,"Reflect",{getPrototypeOf:function getPrototypeOf(a){return c(d(a))}})},function(c,d,b){var a=b(6);a(a.S,"Reflect",{has:function has(a,b){return b in a}})},function(e,f,a){var b=a(6),d=a(10),c=Object.isExtensible;b(b.S,"Reflect",{isExtensible:function isExtensible(a){return d(a),c?c(a):!0}})},function(c,d,a){var b=a(6);b(b.S,"Reflect",{ownKeys:a(221)})},function(c,g,a){var d=a(48),e=a(41),f=a(10),b=a(2).Reflect;c.exports=b&&b.ownKeys||function ownKeys(a){var b=d.f(f(a)),c=e.f;return c?b.concat(c(a)):b}},function(e,f,a){var b=a(6),d=a(10),c=Object.preventExtensions;b(b.S,"Reflect",{preventExtensions:function preventExtensions(a){d(a);try{return c&&c(a),!0}catch(b){return!1}}})},function(l,k,b){function set(l,k,m){var n,o,e=4>arguments.length?l:arguments[3],b=d.f(g(l),k);if(!b){if(c(o=j(l)))return set(o,k,m,e);b=f(0)}return h(b,"value")?b.writable!==!1&&c(e)?(n=d.f(e,k)||f(0),n.value=m,i.f(e,k,n),!0):!1:b.set===a?!1:(b.set.call(e,m),!0)}var i=b(9),d=b(49),j=b(57),h=b(3),e=b(6),f=b(15),g=b(10),c=b(11);e(e.S,"Reflect",{set:set})},function(d,e,b){var c=b(6),a=b(71);a&&c(c.S,"Reflect",{setPrototypeOf:function setPrototypeOf(b,c){a.check(b,c);try{return a.set(b,c),!0}catch(d){return!1}}})},function(c,d,b){var a=b(6);a(a.S,"Date",{now:function(){return(new Date).getTime()}})},function(e,f,a){var b=a(6),c=a(56),d=a(14);b(b.P+b.F*a(5)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function toJSON(e){var a=c(this),b=d(a);return"number"!=typeof b||isFinite(b)?a.toISOString():null}})},function(f,g,c){var b=c(6),d=c(5),e=Date.prototype.getTime,a=function(a){return a>9?a:"0"+a};b(b.P+b.F*(d(function(){return"0385-07-25T07:06:39.999Z"!=new Date(-5e13-1).toISOString()})||!d(function(){new Date(NaN).toISOString()})),"Date",{toISOString:function toISOString(){if(!isFinite(e.call(this)))throw RangeError("Invalid time value");var b=this,c=b.getUTCFullYear(),d=b.getUTCMilliseconds(),f=0>c?"-":c>9999?"+":"";return f+("00000"+Math.abs(c)).slice(f?-6:-4)+"-"+a(b.getUTCMonth()+1)+"-"+a(b.getUTCDate())+"T"+a(b.getUTCHours())+":"+a(b.getUTCMinutes())+":"+a(b.getUTCSeconds())+"."+(d>99?d:"0"+a(d))+"Z"}})},function(g,h,d){var a=Date.prototype,b="Invalid Date",c="toString",e=a[c],f=a.getTime;new Date(NaN)+""!=b&&d(16)(a,c,function toString(){var a=f.call(this);return a===a?e.call(this):b})},function(d,e,a){var b=a(23)("toPrimitive"),c=Date.prototype;b in c||a(8)(c,b,a(230))},function(c,f,a){var d=a(10),e=a(14),b="number";c.exports=function(a){if("string"!==a&&a!==b&&"default"!==a)throw TypeError("Incorrect hint");return e(d(this),a!=b)}},function(s,r,b){var c=b(6),f=b(232),j=b(233),g=b(10),m=b(37),n=b(35),p=b(11),i=(b(23)("typed_array"),b(2).ArrayBuffer),q=b(199),d=j.ArrayBuffer,k=j.DataView,l=f.ABV&&i.isView,h=d.prototype.slice,o=f.VIEW,e="ArrayBuffer";c(c.G+c.W+c.F*(i!==d),{ArrayBuffer:d}),c(c.S+c.F*!f.CONSTR,e,{isView:function isView(a){return l&&l(a)||p(a)&&o in a}}),c(c.P+c.U+c.F*b(5)(function(){return!new d(2).slice(1,a).byteLength}),e,{slice:function slice(f,b){if(h!==a&&b===a)return h.call(g(this),f);for(var c=g(this).byteLength,e=m(f,c),i=m(b===a?c:b,c),j=new(q(this,d))(n(i-e)),l=new k(this),o=new k(j),p=0;i>e;)o.setUint8(p++,l.getUint8(e++));return j}}),b(187)(e)},function(k,n,a){for(var b,c=a(2),e=a(8),f=a(17),d=f("typed_array"),g=f("view"),h=!(!c.ArrayBuffer||!c.DataView),i=h,j=0,l=9,m="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l>j;)(b=c[m[j++]])?(e(b.prototype,d,!0),e(b.prototype,g,!0)):i=!1;k.exports={ABV:h,CONSTR:i,TYPED:d,VIEW:g}},function(da,F,c){var m=c(2),q=c(4),aa=c(26),O=c(232),N=c(8),M=c(202),E=c(5),u=c(84),t=c(36),Q=c(35),ca=c(48).f,W=c(9).f,$=c(181),D=c(22),r="ArrayBuffer",k="DataView",h="prototype",G="Wrong length!",B="Wrong index!",b=m[r],d=m[k],j=m.Math,l=m.RangeError,s=m.Infinity,n=b,ba=j.abs,e=j.pow,X=j.floor,Y=j.log,Z=j.LN2,A="buffer",v="byteLength",C="byteOffset",w=q?"_b":A,i=q?"_l":v,x=q?"_o":C,z=function(a,c,l){var b,d,g,h=Array(l),i=8*l-c-1,j=(1<<i)-1,f=j>>1,m=23===c?e(2,-24)-e(2,-77):0,k=0,n=0>a||0===a&&0>1/a?1:0;for(a=ba(a),a!=a||a===s?(d=a!=a?1:0,b=j):(b=X(Y(a)/Z),a*(g=e(2,-b))<1&&(b--,g*=2),a+=b+f>=1?m/g:m*e(2,1-f),a*g>=2&&(b++,g/=2),b+f>=j?(d=0,b=j):b+f>=1?(d=(a*g-1)*e(2,c),b+=f):(d=a*e(2,f-1)*e(2,c),b=0));c>=8;h[k++]=255&d,d/=256,c-=8);for(b=b<<c|d,i+=c;i>0;h[k++]=255&b,b/=256,i-=8);return h[--k]|=128*n,h},H=function(h,g,k){var c,j=8*k-g-1,l=(1<<j)-1,i=l>>1,b=j-7,d=k-1,f=h[d--],a=127&f;for(f>>=7;b>0;a=256*a+h[d],d--,b-=8);for(c=a&(1<<-b)-1,a>>=-b,b+=g;b>0;c=256*c+h[d],d--,b-=8);if(0===a)a=1-i;else{if(a===l)return c?NaN:f?-s:s;c+=e(2,g),a-=i}return(f?-1:1)*c*e(2,a-g)},I=function(a){return a[3]<<24|a[2]<<16|a[1]<<8|a[0]},J=function(a){return[255&a]},K=function(a){return[255&a,a>>8&255]},L=function(a){return[255&a,a>>8&255,a>>16&255,a>>24&255]},U=function(a){return z(a,52,8)},V=function(a){return z(a,23,4)},o=function(a,b,c){W(a[h],b,{get:function(){return this[c]}})},g=function(b,c,g,h){var d=+g,a=t(d);if(d!=a||0>a||a+c>b[i])throw l(B);var j=b[w]._b,e=a+b[x],f=j.slice(e,e+c);return h?f:f.reverse()},f=function(c,d,j,h,f,g){var e=+j,b=t(e);if(e!=b||0>b||b+d>c[i])throw l(B);for(var k=c[w]._b,m=b+c[x],n=h(+f),a=0;d>a;a++)k[m+a]=n[g?a:d-a-1]},P=function(d,e){u(d,b,r);var a=+e,c=Q(a);if(a!=c)throw l(G);return c};if(O.ABV){if(!E(function(){new b})||!E(function(){new b(.5)})){b=function ArrayBuffer(a){return new n(P(this,a))};for(var y,_=b[h]=n[h],R=ca(n),S=0;R.length>S;)(y=R[S++])in b||N(b,y,n[y]);aa||(_.constructor=b)}var p=new d(new b(2)),T=d[h].setInt8;p.setInt8(0,2147483648),p.setInt8(1,2147483649),!p.getInt8(0)&&p.getInt8(1)||M(d[h],{setInt8:function setInt8(a,b){T.call(this,a,b<<24>>24)},setUint8:function setUint8(a,b){T.call(this,a,b<<24>>24)}},!0)}else b=function ArrayBuffer(b){var a=P(this,b);this._b=$.call(Array(a),0),this[i]=a},d=function DataView(f,h,c){u(this,d,k),u(f,b,k);var g=f[i],e=t(h);if(0>e||e>g)throw l("Wrong offset!");if(c=c===a?g-e:Q(c),e+c>g)throw l(G);this[w]=f,this[x]=e,this[i]=c},q&&(o(b,v,"_l"),o(d,A,"_b"),o(d,v,"_l"),o(d,C,"_o")),M(d[h],{getInt8:function getInt8(a){return g(this,1,a)[0]<<24>>24},getUint8:function getUint8(a){return g(this,1,a)[0]},getInt16:function getInt16(b){var a=g(this,2,b,arguments[1]);return(a[1]<<8|a[0])<<16>>16},getUint16:function getUint16(b){var a=g(this,2,b,arguments[1]);return a[1]<<8|a[0]},getInt32:function getInt32(a){return I(g(this,4,a,arguments[1]))},getUint32:function getUint32(a){return I(g(this,4,a,arguments[1]))>>>0},getFloat32:function getFloat32(a){return H(g(this,4,a,arguments[1]),23,4)},getFloat64:function getFloat64(a){return H(g(this,8,a,arguments[1]),52,8)},setInt8:function setInt8(a,b){f(this,1,a,J,b)},setUint8:function setUint8(a,b){f(this,1,a,J,b)},setInt16:function setInt16(a,b){f(this,2,a,K,b,arguments[2])},setUint16:function setUint16(a,b){f(this,2,a,K,b,arguments[2])},setInt32:function setInt32(a,b){f(this,4,a,L,b,arguments[2])},setUint32:function setUint32(a,b){f(this,4,a,L,b,arguments[2])},setFloat32:function setFloat32(a,b){f(this,4,a,V,b,arguments[2])},setFloat64:function setFloat64(a,b){f(this,8,a,U,b,arguments[2])}});D(b,r),D(d,k),N(d[h],O.VIEW,!0),F[r]=b,F[k]=d},function(c,d,b){var a=b(6);a(a.G+a.W+a.F*!b(232).ABV,{DataView:b(233).DataView})},function(b,c,a){a(236)("Int8",1,function(a){return function Int8Array(b,c,d){return a(this,b,c,d)}})},function(N,Wa,b){if(b(4)){var T=b(26),y=b(2),h=b(5),c=b(6),x=b(232),ca=b(233),Ka=b(18),da=b(84),Ha=b(15),e=b(8),D=b(202),Ga=(b(91),b(36)),q=b(35),fa=b(37),ia=b(14),s=b(3),ya=b(69),ka=b(73),j=b(11),ma=b(56),ta=b(155),sa=b(44),ra=b(57),B=b(48).f,Ra=(b(237),b(157)),Y=b(17),V=b(23),i=b(165),U=b(34),H=b(199),I=b(184),Sa=b(136),Ta=b(158),Qa=b(187),Va=b(181),qa=b(178),O=b(9),P=b(49),p=O.f,Ua=P.f,k=y.RangeError,J=y.TypeError,l=y.Uint8Array,E="ArrayBuffer",W="Shared"+E,X="BYTES_PER_ELEMENT",r="prototype",g=Array[r],C=ca.ArrayBuffer,Pa=ca.DataView,aa=i(0),Oa=i(2),La=i(3),Ja=i(4),Ia=i(5),oa=i(6),Ea=U(!0),Ca=U(!1),Aa=I.values,xa=I.keys,wa=I.entries,va=g.lastIndexOf,ua=g.reduce,pa=g.reduceRight,na=g.join,Fa=g.sort,M=g.slice,o=g.toString,K=g.toLocaleString,G=V("iterator"),t=V("toStringTag"),la=Y("typed_constructor"),w=Y("def_constructor"),ja=x.CONSTR,m=x.TYPED,za=x.VIEW,n="Wrong length!",Ba=i(1,function(a,b){return u(H(a,a[w]),b)}),ha=h(function(){return 1===new l(new Uint16Array([1]).buffer)[0]}),Da=!!l&&!!l[r].set&&h(function(){new l(1).set({})}),ga=function(b,d){if(b===a)throw J(n);var e=+b,c=q(b);if(d&&!ya(e,c))throw k(n);return c},A=function(b,c){var a=Ga(b);if(0>a||a%c)throw k("Wrong offset!");return a},d=function(a){if(j(a)&&m in a)return a;throw J(a+" is not a typed array!")},u=function(a,b){if(!(j(a)&&la in a))throw J("It is not a typed array constructor!");return new a(b)},ea=function(a,b){return F(H(a,a[w]),b)},F=function(e,b){for(var a=0,c=b.length,d=u(e,c);c>a;)d[a]=b[a++];return d},v=function(a,b,c){p(a,b,{get:function(){return this._d[c]}})},L=function from(m){var b,f,g,h,j,i,c=ma(m),k=arguments.length,d=k>1?arguments[1]:a,l=d!==a,e=Ra(c);if(e!=a&&!ta(e)){for(i=e.call(c),g=[],b=0;!(j=i.next()).done;b++)g.push(j.value);c=g}for(l&&k>2&&(d=Ka(d,arguments[2],2)),b=0,f=q(c.length),h=u(this,f);f>b;b++)h[b]=l?d(c[b],b):c[b];return h},Ma=function of(){for(var a=0,b=arguments.length,c=u(this,b);b>a;)c[a]=arguments[a++];return c},Na=!!l&&h(function(){K.call(new l(1))}),ba=function toLocaleString(){return K.apply(Na?M.call(d(this)):d(this),arguments)},_={copyWithin:function copyWithin(b,c){return qa.call(d(this),b,c,arguments.length>2?arguments[2]:a)},every:function every(b){return Ja(d(this),b,arguments.length>1?arguments[1]:a)},fill:function fill(a){return Va.apply(d(this),arguments)},filter:function filter(b){return ea(this,Oa(d(this),b,arguments.length>1?arguments[1]:a))},find:function find(b){return Ia(d(this),b,arguments.length>1?arguments[1]:a)},findIndex:function findIndex(b){return oa(d(this),b,arguments.length>1?arguments[1]:a)},forEach:function forEach(b){aa(d(this),b,arguments.length>1?arguments[1]:a)},indexOf:function indexOf(b){return Ca(d(this),b,arguments.length>1?arguments[1]:a)},includes:function includes(b){return Ea(d(this),b,arguments.length>1?arguments[1]:a)},join:function join(a){return na.apply(d(this),arguments)},lastIndexOf:function lastIndexOf(a){return va.apply(d(this),arguments)},map:function map(b){return Ba(d(this),b,arguments.length>1?arguments[1]:a);
},reduce:function reduce(a){return ua.apply(d(this),arguments)},reduceRight:function reduceRight(a){return pa.apply(d(this),arguments)},reverse:function reverse(){for(var e,a=this,b=d(a).length,f=Math.floor(b/2),c=0;f>c;)e=a[c],a[c++]=a[--b],a[b]=e;return a},some:function some(b){return La(d(this),b,arguments.length>1?arguments[1]:a)},sort:function sort(a){return Fa.call(d(this),a)},subarray:function subarray(g,e){var b=d(this),c=b.length,f=fa(g,c);return new(H(b,b[w]))(b.buffer,b.byteOffset+f*b.BYTES_PER_ELEMENT,q((e===a?c:fa(e,c))-f))}},$=function slice(a,b){return ea(this,M.call(d(this),a,b))},Z=function set(f){d(this);var b=A(arguments[1],1),g=this.length,c=ma(f),e=q(c.length),a=0;if(e+b>g)throw k(n);for(;e>a;)this[b+a]=c[a++]},z={entries:function entries(){return wa.call(d(this))},keys:function keys(){return xa.call(d(this))},values:function values(){return Aa.call(d(this))}},S=function(b,a){return j(b)&&b[m]&&"symbol"!=typeof a&&a in b&&String(+a)==String(a)},R=function getOwnPropertyDescriptor(b,a){return S(b,a=ia(a,!0))?Ha(2,b[a]):Ua(b,a)},Q=function defineProperty(b,c,a){return!(S(b,c=ia(c,!0))&&j(a)&&s(a,"value"))||s(a,"get")||s(a,"set")||a.configurable||s(a,"writable")&&!a.writable||s(a,"enumerable")&&!a.enumerable?p(b,c,a):(b[c]=a.value,b)};ja||(P.f=R,O.f=Q),c(c.S+c.F*!ja,"Object",{getOwnPropertyDescriptor:R,d