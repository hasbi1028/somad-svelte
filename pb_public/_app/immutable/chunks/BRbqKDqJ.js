import { b as J, e as V } from './BHafZ7-g.js';
import { p as _ } from './BMat-oFk.js';
import { i as z, g as Q } from './1dHx3Gtq.js';
class d extends Error {
	constructor(e) {
		var t, s, i, n;
		super('ClientResponseError'),
			(this.url = ''),
			(this.status = 0),
			(this.response = {}),
			(this.isAbort = !1),
			(this.originalError = null),
			Object.setPrototypeOf(this, d.prototype),
			e !== null &&
				typeof e == 'object' &&
				((this.url = typeof e.url == 'string' ? e.url : ''),
				(this.status = typeof e.status == 'number' ? e.status : 0),
				(this.isAbort = !!e.isAbort),
				(this.originalError = e.originalError),
				e.response !== null && typeof e.response == 'object'
					? (this.response = e.response)
					: e.data !== null && typeof e.data == 'object'
						? (this.response = e.data)
						: (this.response = {})),
			this.originalError || e instanceof d || (this.originalError = e),
			typeof DOMException < 'u' && e instanceof DOMException && (this.isAbort = !0),
			(this.name = 'ClientResponseError ' + this.status),
			(this.message = (t = this.response) == null ? void 0 : t.message),
			this.message ||
				(this.isAbort
					? (this.message =
							'The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation.')
					: (n =
								(i = (s = this.originalError) == null ? void 0 : s.cause) == null
									? void 0
									: i.message) != null && n.includes('ECONNREFUSED ::1')
						? (this.message =
								'Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21).')
						: (this.message = 'Something went wrong while processing your request.'));
	}
	get data() {
		return this.response;
	}
	toJSON() {
		return { ...this };
	}
}
const I = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function Y(o, e) {
	const t = {};
	if (typeof o != 'string') return t;
	const s = Object.assign({}, {}).decode || X;
	let i = 0;
	for (; i < o.length; ) {
		const n = o.indexOf('=', i);
		if (n === -1) break;
		let r = o.indexOf(';', i);
		if (r === -1) r = o.length;
		else if (r < n) {
			i = o.lastIndexOf(';', n - 1) + 1;
			continue;
		}
		const a = o.slice(i, n).trim();
		if (t[a] === void 0) {
			let c = o.slice(n + 1, r).trim();
			c.charCodeAt(0) === 34 && (c = c.slice(1, -1));
			try {
				t[a] = s(c);
			} catch {
				t[a] = c;
			}
		}
		i = r + 1;
	}
	return t;
}
function U(o, e, t) {
	const s = Object.assign({}, t || {}),
		i = s.encode || Z;
	if (!I.test(o)) throw new TypeError('argument name is invalid');
	const n = i(e);
	if (n && !I.test(n)) throw new TypeError('argument val is invalid');
	let r = o + '=' + n;
	if (s.maxAge != null) {
		const a = s.maxAge - 0;
		if (isNaN(a) || !isFinite(a)) throw new TypeError('option maxAge is invalid');
		r += '; Max-Age=' + Math.floor(a);
	}
	if (s.domain) {
		if (!I.test(s.domain)) throw new TypeError('option domain is invalid');
		r += '; Domain=' + s.domain;
	}
	if (s.path) {
		if (!I.test(s.path)) throw new TypeError('option path is invalid');
		r += '; Path=' + s.path;
	}
	if (s.expires) {
		if (
			!(function (c) {
				return Object.prototype.toString.call(c) === '[object Date]' || c instanceof Date;
			})(s.expires) ||
			isNaN(s.expires.valueOf())
		)
			throw new TypeError('option expires is invalid');
		r += '; Expires=' + s.expires.toUTCString();
	}
	if ((s.httpOnly && (r += '; HttpOnly'), s.secure && (r += '; Secure'), s.priority))
		switch (typeof s.priority == 'string' ? s.priority.toLowerCase() : s.priority) {
			case 'low':
				r += '; Priority=Low';
				break;
			case 'medium':
				r += '; Priority=Medium';
				break;
			case 'high':
				r += '; Priority=High';
				break;
			default:
				throw new TypeError('option priority is invalid');
		}
	if (s.sameSite)
		switch (typeof s.sameSite == 'string' ? s.sameSite.toLowerCase() : s.sameSite) {
			case !0:
				r += '; SameSite=Strict';
				break;
			case 'lax':
				r += '; SameSite=Lax';
				break;
			case 'strict':
				r += '; SameSite=Strict';
				break;
			case 'none':
				r += '; SameSite=None';
				break;
			default:
				throw new TypeError('option sameSite is invalid');
		}
	return r;
}
function X(o) {
	return o.indexOf('%') !== -1 ? decodeURIComponent(o) : o;
}
function Z(o) {
	return encodeURIComponent(o);
}
const ee =
	(typeof navigator < 'u' && navigator.product === 'ReactNative') ||
	(typeof global < 'u' && global.HermesInternal);
let K;
function O(o) {
	if (o)
		try {
			const e = decodeURIComponent(
				K(o.split('.')[1])
					.split('')
					.map(function (t) {
						return '%' + ('00' + t.charCodeAt(0).toString(16)).slice(-2);
					})
					.join('')
			);
			return JSON.parse(e) || {};
		} catch {}
	return {};
}
function W(o, e = 0) {
	let t = O(o);
	return !(Object.keys(t).length > 0 && (!t.exp || t.exp - e > Date.now() / 1e3));
}
K =
	typeof atob != 'function' || ee
		? (o) => {
				let e = String(o).replace(/=+$/, '');
				if (e.length % 4 == 1)
					throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
				for (
					var t, s, i = 0, n = 0, r = '';
					(s = e.charAt(n++));
					~s && ((t = i % 4 ? 64 * t + s : s), i++ % 4)
						? (r += String.fromCharCode(255 & (t >> ((-2 * i) & 6))))
						: 0
				)
					s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(s);
				return r;
			}
		: atob;
const N = 'pb_auth';
class A {
	constructor() {
		(this.baseToken = ''), (this.baseModel = null), (this._onChangeCallbacks = []);
	}
	get token() {
		return this.baseToken;
	}
	get record() {
		return this.baseModel;
	}
	get model() {
		return this.baseModel;
	}
	get isValid() {
		return !W(this.token);
	}
	get isSuperuser() {
		var t, s;
		let e = O(this.token);
		return (
			e.type == 'auth' &&
			(((t = this.record) == null ? void 0 : t.collectionName) == '_superusers' ||
				(!((s = this.record) != null && s.collectionName) && e.collectionId == 'pbc_3142635823'))
		);
	}
	get isAdmin() {
		return (
			console.warn(
				'Please replace pb.authStore.isAdmin with pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName'
			),
			this.isSuperuser
		);
	}
	get isAuthRecord() {
		return (
			console.warn(
				'Please replace pb.authStore.isAuthRecord with !pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName'
			),
			O(this.token).type == 'auth' && !this.isSuperuser
		);
	}
	save(e, t) {
		(this.baseToken = e || ''), (this.baseModel = t || null), this.triggerChange();
	}
	clear() {
		(this.baseToken = ''), (this.baseModel = null), this.triggerChange();
	}
	loadFromCookie(e, t = N) {
		const s = Y(e || '')[t] || '';
		let i = {};
		try {
			(i = JSON.parse(s)),
				(typeof i === null || typeof i != 'object' || Array.isArray(i)) && (i = {});
		} catch {}
		this.save(i.token || '', i.record || i.model || null);
	}
	exportToCookie(e, t = N) {
		var c, l;
		const s = { secure: !0, sameSite: !0, httpOnly: !0, path: '/' },
			i = O(this.token);
		(s.expires = i != null && i.exp ? new Date(1e3 * i.exp) : new Date('1970-01-01')),
			(e = Object.assign({}, s, e));
		const n = {
			token: this.token,
			record: this.record ? JSON.parse(JSON.stringify(this.record)) : null
		};
		let r = U(t, JSON.stringify(n), e);
		const a = typeof Blob < 'u' ? new Blob([r]).size : r.length;
		if (n.record && a > 4096) {
			n.record = {
				id: (c = n.record) == null ? void 0 : c.id,
				email: (l = n.record) == null ? void 0 : l.email
			};
			const w = ['collectionId', 'collectionName', 'verified'];
			for (const u in this.record) w.includes(u) && (n.record[u] = this.record[u]);
			r = U(t, JSON.stringify(n), e);
		}
		return r;
	}
	onChange(e, t = !1) {
		return (
			this._onChangeCallbacks.push(e),
			t && e(this.token, this.record),
			() => {
				for (let s = this._onChangeCallbacks.length - 1; s >= 0; s--)
					if (this._onChangeCallbacks[s] == e)
						return delete this._onChangeCallbacks[s], void this._onChangeCallbacks.splice(s, 1);
			}
		);
	}
	triggerChange() {
		for (const e of this._onChangeCallbacks) e && e(this.token, this.record);
	}
}
class te extends A {
	constructor(e = 'pocketbase_auth') {
		super(), (this.storageFallback = {}), (this.storageKey = e), this._bindStorageEvent();
	}
	get token() {
		return (this._storageGet(this.storageKey) || {}).token || '';
	}
	get record() {
		const e = this._storageGet(this.storageKey) || {};
		return e.record || e.model || null;
	}
	get model() {
		return this.record;
	}
	save(e, t) {
		this._storageSet(this.storageKey, { token: e, record: t }), super.save(e, t);
	}
	clear() {
		this._storageRemove(this.storageKey), super.clear();
	}
	_storageGet(e) {
		if (typeof window < 'u' && window != null && window.localStorage) {
			const t = window.localStorage.getItem(e) || '';
			try {
				return JSON.parse(t);
			} catch {
				return t;
			}
		}
		return this.storageFallback[e];
	}
	_storageSet(e, t) {
		if (typeof window < 'u' && window != null && window.localStorage) {
			let s = t;
			typeof t != 'string' && (s = JSON.stringify(t)), window.localStorage.setItem(e, s);
		} else this.storageFallback[e] = t;
	}
	_storageRemove(e) {
		var t;
		typeof window < 'u' &&
			window != null &&
			window.localStorage &&
			((t = window.localStorage) == null || t.removeItem(e)),
			delete this.storageFallback[e];
	}
	_bindStorageEvent() {
		typeof window < 'u' &&
			window != null &&
			window.localStorage &&
			window.addEventListener &&
			window.addEventListener('storage', (e) => {
				if (e.key != this.storageKey) return;
				const t = this._storageGet(this.storageKey) || {};
				super.save(t.token || '', t.record || t.model || null);
			});
	}
}
class g {
	constructor(e) {
		this.client = e;
	}
}
class se extends g {
	async getAll(e) {
		return (e = Object.assign({ method: 'GET' }, e)), this.client.send('/api/settings', e);
	}
	async update(e, t) {
		return (
			(t = Object.assign({ method: 'PATCH', body: e }, t)), this.client.send('/api/settings', t)
		);
	}
	async testS3(e = 'storage', t) {
		return (
			(t = Object.assign({ method: 'POST', body: { filesystem: e } }, t)),
			this.client.send('/api/settings/test/s3', t).then(() => !0)
		);
	}
	async testEmail(e, t, s, i) {
		return (
			(i = Object.assign({ method: 'POST', body: { email: t, template: s, collection: e } }, i)),
			this.client.send('/api/settings/test/email', i).then(() => !0)
		);
	}
	async generateAppleClientSecret(e, t, s, i, n, r) {
		return (
			(r = Object.assign(
				{ method: 'POST', body: { clientId: e, teamId: t, keyId: s, privateKey: i, duration: n } },
				r
			)),
			this.client.send('/api/settings/apple/generate-client-secret', r)
		);
	}
}
const ie = [
	'requestKey',
	'$cancelKey',
	'$autoCancel',
	'fetch',
	'headers',
	'body',
	'query',
	'params',
	'cache',
	'credentials',
	'headers',
	'integrity',
	'keepalive',
	'method',
	'mode',
	'redirect',
	'referrer',
	'referrerPolicy',
	'signal',
	'window'
];
function q(o) {
	if (o) {
		o.query = o.query || {};
		for (let e in o) ie.includes(e) || ((o.query[e] = o[e]), delete o[e]);
	}
}
function B(o) {
	const e = [];
	for (const t in o) {
		if (o[t] === null || o[t] === void 0) continue;
		const s = o[t],
			i = encodeURIComponent(t);
		if (Array.isArray(s)) for (const n of s) e.push(i + '=' + encodeURIComponent(n));
		else
			s instanceof Date
				? e.push(i + '=' + encodeURIComponent(s.toISOString()))
				: typeof s !== null && typeof s == 'object'
					? e.push(i + '=' + encodeURIComponent(JSON.stringify(s)))
					: e.push(i + '=' + encodeURIComponent(s));
	}
	return e.join('&');
}
class $ extends g {
	constructor() {
		super(...arguments),
			(this.clientId = ''),
			(this.eventSource = null),
			(this.subscriptions = {}),
			(this.lastSentSubscriptions = []),
			(this.maxConnectTimeout = 15e3),
			(this.reconnectAttempts = 0),
			(this.maxReconnectAttempts = 1 / 0),
			(this.predefinedReconnectIntervals = [200, 300, 500, 1e3, 1200, 1500, 2e3]),
			(this.pendingConnects = []);
	}
	get isConnected() {
		return !!this.eventSource && !!this.clientId && !this.pendingConnects.length;
	}
	async subscribe(e, t, s) {
		var r;
		if (!e) throw new Error('topic must be set.');
		let i = e;
		if (s) {
			q((s = Object.assign({}, s)));
			const a =
				'options=' + encodeURIComponent(JSON.stringify({ query: s.query, headers: s.headers }));
			i += (i.includes('?') ? '&' : '?') + a;
		}
		const n = function (a) {
			const c = a;
			let l;
			try {
				l = JSON.parse(c == null ? void 0 : c.data);
			} catch {}
			t(l || {});
		};
		return (
			this.subscriptions[i] || (this.subscriptions[i] = []),
			this.subscriptions[i].push(n),
			this.isConnected
				? this.subscriptions[i].length === 1
					? await this.submitSubscriptions()
					: (r = this.eventSource) == null || r.addEventListener(i, n)
				: await this.connect(),
			async () => this.unsubscribeByTopicAndListener(e, n)
		);
	}
	async unsubscribe(e) {
		var s;
		let t = !1;
		if (e) {
			const i = this.getSubscriptionsByTopic(e);
			for (let n in i)
				if (this.hasSubscriptionListeners(n)) {
					for (let r of this.subscriptions[n])
						(s = this.eventSource) == null || s.removeEventListener(n, r);
					delete this.subscriptions[n], t || (t = !0);
				}
		} else this.subscriptions = {};
		this.hasSubscriptionListeners() ? t && (await this.submitSubscriptions()) : this.disconnect();
	}
	async unsubscribeByPrefix(e) {
		var s;
		let t = !1;
		for (let i in this.subscriptions)
			if ((i + '?').startsWith(e)) {
				t = !0;
				for (let n of this.subscriptions[i])
					(s = this.eventSource) == null || s.removeEventListener(i, n);
				delete this.subscriptions[i];
			}
		t && (this.hasSubscriptionListeners() ? await this.submitSubscriptions() : this.disconnect());
	}
	async unsubscribeByTopicAndListener(e, t) {
		var n;
		let s = !1;
		const i = this.getSubscriptionsByTopic(e);
		for (let r in i) {
			if (!Array.isArray(this.subscriptions[r]) || !this.subscriptions[r].length) continue;
			let a = !1;
			for (let c = this.subscriptions[r].length - 1; c >= 0; c--)
				this.subscriptions[r][c] === t &&
					((a = !0),
					delete this.subscriptions[r][c],
					this.subscriptions[r].splice(c, 1),
					(n = this.eventSource) == null || n.removeEventListener(r, t));
			a &&
				(this.subscriptions[r].length || delete this.subscriptions[r],
				s || this.hasSubscriptionListeners(r) || (s = !0));
		}
		this.hasSubscriptionListeners() ? s && (await this.submitSubscriptions()) : this.disconnect();
	}
	hasSubscriptionListeners(e) {
		var t, s;
		if (((this.subscriptions = this.subscriptions || {}), e))
			return !!((t = this.subscriptions[e]) != null && t.length);
		for (let i in this.subscriptions)
			if ((s = this.subscriptions[i]) != null && s.length) return !0;
		return !1;
	}
	async submitSubscriptions() {
		if (this.clientId)
			return (
				this.addAllSubscriptionListeners(),
				(this.lastSentSubscriptions = this.getNonEmptySubscriptionKeys()),
				this.client
					.send('/api/realtime', {
						method: 'POST',
						body: { clientId: this.clientId, subscriptions: this.lastSentSubscriptions },
						requestKey: this.getSubscriptionsCancelKey()
					})
					.catch((e) => {
						if (!(e != null && e.isAbort)) throw e;
					})
			);
	}
	getSubscriptionsCancelKey() {
		return 'realtime_' + this.clientId;
	}
	getSubscriptionsByTopic(e) {
		const t = {};
		e = e.includes('?') ? e : e + '?';
		for (let s in this.subscriptions) (s + '?').startsWith(e) && (t[s] = this.subscriptions[s]);
		return t;
	}
	getNonEmptySubscriptionKeys() {
		const e = [];
		for (let t in this.subscriptions) this.subscriptions[t].length && e.push(t);
		return e;
	}
	addAllSubscriptionListeners() {
		if (this.eventSource) {
			this.removeAllSubscriptionListeners();
			for (let e in this.subscriptions)
				for (let t of this.subscriptions[e]) this.eventSource.addEventListener(e, t);
		}
	}
	removeAllSubscriptionListeners() {
		if (this.eventSource)
			for (let e in this.subscriptions)
				for (let t of this.subscriptions[e]) this.eventSource.removeEventListener(e, t);
	}
	async connect() {
		if (!(this.reconnectAttempts > 0))
			return new Promise((e, t) => {
				this.pendingConnects.push({ resolve: e, reject: t }),
					this.pendingConnects.length > 1 || this.initConnect();
			});
	}
	initConnect() {
		this.disconnect(!0),
			clearTimeout(this.connectTimeoutId),
			(this.connectTimeoutId = setTimeout(() => {
				this.connectErrorHandler(new Error('EventSource connect took too long.'));
			}, this.maxConnectTimeout)),
			(this.eventSource = new EventSource(this.client.buildURL('/api/realtime'))),
			(this.eventSource.onerror = (e) => {
				this.connectErrorHandler(new Error('Failed to establish realtime connection.'));
			}),
			this.eventSource.addEventListener('PB_CONNECT', (e) => {
				const t = e;
				(this.clientId = t == null ? void 0 : t.lastEventId),
					this.submitSubscriptions()
						.then(async () => {
							let s = 3;
							for (; this.hasUnsentSubscriptions() && s > 0; )
								s--, await this.submitSubscriptions();
						})
						.then(() => {
							for (let i of this.pendingConnects) i.resolve();
							(this.pendingConnects = []),
								(this.reconnectAttempts = 0),
								clearTimeout(this.reconnectTimeoutId),
								clearTimeout(this.connectTimeoutId);
							const s = this.getSubscriptionsByTopic('PB_CONNECT');
							for (let i in s) for (let n of s[i]) n(e);
						})
						.catch((s) => {
							(this.clientId = ''), this.connectErrorHandler(s);
						});
			});
	}
	hasUnsentSubscriptions() {
		const e = this.getNonEmptySubscriptionKeys();
		if (e.length != this.lastSentSubscriptions.length) return !0;
		for (const t of e) if (!this.lastSentSubscriptions.includes(t)) return !0;
		return !1;
	}
	connectErrorHandler(e) {
		if (
			(clearTimeout(this.connectTimeoutId),
			clearTimeout(this.reconnectTimeoutId),
			(!this.clientId && !this.reconnectAttempts) ||
				this.reconnectAttempts > this.maxReconnectAttempts)
		) {
			for (let s of this.pendingConnects) s.reject(new d(e));
			return (this.pendingConnects = []), void this.disconnect();
		}
		this.disconnect(!0);
		const t =
			this.predefinedReconnectIntervals[this.reconnectAttempts] ||
			this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length - 1];
		this.reconnectAttempts++,
			(this.reconnectTimeoutId = setTimeout(() => {
				this.initConnect();
			}, t));
	}
	disconnect(e = !1) {
		var t;
		if (
			(this.clientId && this.onDisconnect && this.onDisconnect(Object.keys(this.subscriptions)),
			clearTimeout(this.connectTimeoutId),
			clearTimeout(this.reconnectTimeoutId),
			this.removeAllSubscriptionListeners(),
			this.client.cancelRequest(this.getSubscriptionsCancelKey()),
			(t = this.eventSource) == null || t.close(),
			(this.eventSource = null),
			(this.clientId = ''),
			!e)
		) {
			this.reconnectAttempts = 0;
			for (let s of this.pendingConnects) s.resolve();
			this.pendingConnects = [];
		}
	}
}
class H extends g {
	decode(e) {
		return e;
	}
	async getFullList(e, t) {
		if (typeof e == 'number') return this._getFullList(e, t);
		let s = 500;
		return (
			(t = Object.assign({}, e, t)).batch && ((s = t.batch), delete t.batch),
			this._getFullList(s, t)
		);
	}
	async getList(e = 1, t = 30, s) {
		return (
			((s = Object.assign({ method: 'GET' }, s)).query = Object.assign(
				{ page: e, perPage: t },
				s.query
			)),
			this.client.send(this.baseCrudPath, s).then((i) => {
				var n;
				return (i.items = ((n = i.items) == null ? void 0 : n.map((r) => this.decode(r))) || []), i;
			})
		);
	}
	async getFirstListItem(e, t) {
		return (
			((t = Object.assign(
				{ requestKey: 'one_by_filter_' + this.baseCrudPath + '_' + e },
				t
			)).query = Object.assign({ filter: e, skipTotal: 1 }, t.query)),
			this.getList(1, 1, t).then((s) => {
				var i;
				if (!((i = s == null ? void 0 : s.items) != null && i.length))
					throw new d({
						status: 404,
						response: { code: 404, message: "The requested resource wasn't found.", data: {} }
					});
				return s.items[0];
			})
		);
	}
	async getOne(e, t) {
		if (!e)
			throw new d({
				url: this.client.buildURL(this.baseCrudPath + '/'),
				status: 404,
				response: { code: 404, message: 'Missing required record id.', data: {} }
			});
		return (
			(t = Object.assign({ method: 'GET' }, t)),
			this.client
				.send(this.baseCrudPath + '/' + encodeURIComponent(e), t)
				.then((s) => this.decode(s))
		);
	}
	async create(e, t) {
		return (
			(t = Object.assign({ method: 'POST', body: e }, t)),
			this.client.send(this.baseCrudPath, t).then((s) => this.decode(s))
		);
	}
	async update(e, t, s) {
		return (
			(s = Object.assign({ method: 'PATCH', body: t }, s)),
			this.client
				.send(this.baseCrudPath + '/' + encodeURIComponent(e), s)
				.then((i) => this.decode(i))
		);
	}
	async delete(e, t) {
		return (
			(t = Object.assign({ method: 'DELETE' }, t)),
			this.client.send(this.baseCrudPath + '/' + encodeURIComponent(e), t).then(() => !0)
		);
	}
	_getFullList(e = 500, t) {
		(t = t || {}).query = Object.assign({ skipTotal: 1 }, t.query);
		let s = [],
			i = async (n) =>
				this.getList(n, e || 500, t).then((r) => {
					const a = r.items;
					return (s = s.concat(a)), a.length == r.perPage ? i(n + 1) : s;
				});
		return i(1);
	}
}
function m(o, e, t, s) {
	const i = s !== void 0;
	return i || t !== void 0
		? i
			? (console.warn(o),
				(e.body = Object.assign({}, e.body, t)),
				(e.query = Object.assign({}, e.query, s)),
				e)
			: Object.assign(e, t)
		: e;
}
function P(o) {
	var e;
	(e = o._resetAutoRefresh) == null || e.call(o);
}
class ne extends H {
	constructor(e, t) {
		super(e), (this.collectionIdOrName = t);
	}
	get baseCrudPath() {
		return this.baseCollectionPath + '/records';
	}
	get baseCollectionPath() {
		return '/api/collections/' + encodeURIComponent(this.collectionIdOrName);
	}
	get isSuperusers() {
		return this.collectionIdOrName == '_superusers' || this.collectionIdOrName == '_pbc_2773867675';
	}
	async subscribe(e, t, s) {
		if (!e) throw new Error('Missing topic.');
		if (!t) throw new Error('Missing subscription callback.');
		return this.client.realtime.subscribe(this.collectionIdOrName + '/' + e, t, s);
	}
	async unsubscribe(e) {
		return e
			? this.client.realtime.unsubscribe(this.collectionIdOrName + '/' + e)
			: this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName);
	}
	async getFullList(e, t) {
		if (typeof e == 'number') return super.getFullList(e, t);
		const s = Object.assign({}, e, t);
		return super.getFullList(s);
	}
	async getList(e = 1, t = 30, s) {
		return super.getList(e, t, s);
	}
	async getFirstListItem(e, t) {
		return super.getFirstListItem(e, t);
	}
	async getOne(e, t) {
		return super.getOne(e, t);
	}
	async create(e, t) {
		return super.create(e, t);
	}
	async update(e, t, s) {
		return super.update(e, t, s).then((i) => {
			var n, r, a;
			if (
				((n = this.client.authStore.record) == null ? void 0 : n.id) ===
					(i == null ? void 0 : i.id) &&
				(((r = this.client.authStore.record) == null ? void 0 : r.collectionId) ===
					this.collectionIdOrName ||
					((a = this.client.authStore.record) == null ? void 0 : a.collectionName) ===
						this.collectionIdOrName)
			) {
				let c = Object.assign({}, this.client.authStore.record.expand),
					l = Object.assign({}, this.client.authStore.record, i);
				c && (l.expand = Object.assign(c, i.expand)),
					this.client.authStore.save(this.client.authStore.token, l);
			}
			return i;
		});
	}
	async delete(e, t) {
		return super.delete(e, t).then((s) => {
			var i, n, r;
			return (
				!s ||
					((i = this.client.authStore.record) == null ? void 0 : i.id) !== e ||
					(((n = this.client.authStore.record) == null ? void 0 : n.collectionId) !==
						this.collectionIdOrName &&
						((r = this.client.authStore.record) == null ? void 0 : r.collectionName) !==
							this.collectionIdOrName) ||
					this.client.authStore.clear(),
				s
			);
		});
	}
	authResponse(e) {
		const t = this.decode((e == null ? void 0 : e.record) || {});
		return (
			this.client.authStore.save(e == null ? void 0 : e.token, t),
			Object.assign({}, e, { token: (e == null ? void 0 : e.token) || '', record: t })
		);
	}
	async listAuthMethods(e) {
		return (
			(e = Object.assign({ method: 'GET', fields: 'mfa,otp,password,oauth2' }, e)),
			this.client.send(this.baseCollectionPath + '/auth-methods', e)
		);
	}
	async authWithPassword(e, t, s) {
		let i;
		(s = Object.assign({ method: 'POST', body: { identity: e, password: t } }, s)),
			this.isSuperusers &&
				((i = s.autoRefreshThreshold),
				delete s.autoRefreshThreshold,
				s.autoRefresh || P(this.client));
		let n = await this.client.send(this.baseCollectionPath + '/auth-with-password', s);
		return (
			(n = this.authResponse(n)),
			i &&
				this.isSuperusers &&
				(function (a, c, l, w) {
					P(a);
					const u = a.beforeSend,
						p = a.authStore.record,
						v = a.authStore.onChange((b, h) => {
							(!b ||
								(h == null ? void 0 : h.id) != (p == null ? void 0 : p.id) ||
								(((h != null && h.collectionId) || (p != null && p.collectionId)) &&
									(h == null ? void 0 : h.collectionId) !=
										(p == null ? void 0 : p.collectionId))) &&
								P(a);
						});
					(a._resetAutoRefresh = function () {
						v(), (a.beforeSend = u), delete a._resetAutoRefresh;
					}),
						(a.beforeSend = async (b, h) => {
							var f;
							const S = a.authStore.token;
							if ((f = h.query) != null && f.autoRefresh)
								return u ? u(b, h) : { url: b, sendOptions: h };
							let R = a.authStore.isValid;
							if (R && W(a.authStore.token, c))
								try {
									await l();
								} catch {
									R = !1;
								}
							R || (await w());
							const T = h.headers || {};
							for (let C in T)
								if (C.toLowerCase() == 'authorization' && S == T[C] && a.authStore.token) {
									T[C] = a.authStore.token;
									break;
								}
							return (h.headers = T), u ? u(b, h) : { url: b, sendOptions: h };
						});
				})(
					this.client,
					i,
					() => this.authRefresh({ autoRefresh: !0 }),
					() => this.authWithPassword(e, t, Object.assign({ autoRefresh: !0 }, s))
				),
			n
		);
	}
	async authWithOAuth2Code(e, t, s, i, n, r, a) {
		let c = {
			method: 'POST',
			body: { provider: e, code: t, codeVerifier: s, redirectURL: i, createData: n }
		};
		return (
			(c = m(
				'This form of authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, options?).',
				c,
				r,
				a
			)),
			this.client
				.send(this.baseCollectionPath + '/auth-with-oauth2', c)
				.then((l) => this.authResponse(l))
		);
	}
	authWithOAuth2(...e) {
		if (e.length > 1 || typeof (e == null ? void 0 : e[0]) == 'string')
			return (
				console.warn(
					'PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration.'
				),
				this.authWithOAuth2Code(
					(e == null ? void 0 : e[0]) || '',
					(e == null ? void 0 : e[1]) || '',
					(e == null ? void 0 : e[2]) || '',
					(e == null ? void 0 : e[3]) || '',
					(e == null ? void 0 : e[4]) || {},
					(e == null ? void 0 : e[5]) || {},
					(e == null ? void 0 : e[6]) || {}
				)
			);
		const t = (e == null ? void 0 : e[0]) || {};
		let s = null;
		t.urlCallback || (s = x(void 0));
		const i = new $(this.client);
		function n() {
			s == null || s.close(), i.unsubscribe();
		}
		const r = {},
			a = t.requestKey;
		return (
			a && (r.requestKey = a),
			this.listAuthMethods(r)
				.then((c) => {
					var p;
					const l = c.oauth2.providers.find((v) => v.name === t.provider);
					if (!l) throw new d(new Error(`Missing or invalid provider "${t.provider}".`));
					const w = this.client.buildURL('/api/oauth2-redirect'),
						u = a ? ((p = this.client.cancelControllers) == null ? void 0 : p[a]) : void 0;
					return (
						u &&
							(u.signal.onabort = () => {
								n();
							}),
						new Promise(async (v, b) => {
							var h;
							try {
								await i.subscribe('@oauth2', async (f) => {
									var L;
									const C = i.clientId;
									try {
										if (!f.state || C !== f.state) throw new Error("State parameters don't match.");
										if (f.error || !f.code)
											throw new Error('OAuth2 redirect error or missing code: ' + f.error);
										const y = Object.assign({}, t);
										delete y.provider,
											delete y.scopes,
											delete y.createData,
											delete y.urlCallback,
											(L = u == null ? void 0 : u.signal) != null &&
												L.onabort &&
												(u.signal.onabort = null);
										const G = await this.authWithOAuth2Code(
											l.name,
											f.code,
											l.codeVerifier,
											w,
											t.createData,
											y
										);
										v(G);
									} catch (y) {
										b(new d(y));
									}
									n();
								});
								const S = { state: i.clientId };
								(h = t.scopes) != null && h.length && (S.scope = t.scopes.join(' '));
								const R = this._replaceQueryParams(l.authURL + w, S);
								await (
									t.urlCallback ||
									function (f) {
										s ? (s.location.href = f) : (s = x(f));
									}
								)(R);
							} catch (S) {
								n(), b(new d(S));
							}
						})
					);
				})
				.catch((c) => {
					throw (n(), c);
				})
		);
	}
	async authRefresh(e, t) {
		let s = { method: 'POST' };
		return (
			(s = m(
				'This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).',
				s,
				e,
				t
			)),
			this.client
				.send(this.baseCollectionPath + '/auth-refresh', s)
				.then((i) => this.authResponse(i))
		);
	}
	async requestPasswordReset(e, t, s) {
		let i = { method: 'POST', body: { email: e } };
		return (
			(i = m(
				'This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).',
				i,
				t,
				s
			)),
			this.client.send(this.baseCollectionPath + '/request-password-reset', i).then(() => !0)
		);
	}
	async confirmPasswordReset(e, t, s, i, n) {
		let r = { method: 'POST', body: { token: e, password: t, passwordConfirm: s } };
		return (
			(r = m(
				'This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).',
				r,
				i,
				n
			)),
			this.client.send(this.baseCollectionPath + '/confirm-password-reset', r).then(() => !0)
		);
	}
	async requestVerification(e, t, s) {
		let i = { method: 'POST', body: { email: e } };
		return (
			(i = m(
				'This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).',
				i,
				t,
				s
			)),
			this.client.send(this.baseCollectionPath + '/request-verification', i).then(() => !0)
		);
	}
	async confirmVerification(e, t, s) {
		let i = { method: 'POST', body: { token: e } };
		return (
			(i = m(
				'This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).',
				i,
				t,
				s
			)),
			this.client.send(this.baseCollectionPath + '/confirm-verification', i).then(() => {
				const n = O(e),
					r = this.client.authStore.record;
				return (
					r &&
						!r.verified &&
						r.id === n.id &&
						r.collectionId === n.collectionId &&
						((r.verified = !0), this.client.authStore.save(this.client.authStore.token, r)),
					!0
				);
			})
		);
	}
	async requestEmailChange(e, t, s) {
		let i = { method: 'POST', body: { newEmail: e } };
		return (
			(i = m(
				'This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).',
				i,
				t,
				s
			)),
			this.client.send(this.baseCollectionPath + '/request-email-change', i).then(() => !0)
		);
	}
	async confirmEmailChange(e, t, s, i) {
		let n = { method: 'POST', body: { token: e, password: t } };
		return (
			(n = m(
				'This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).',
				n,
				s,
				i
			)),
			this.client.send(this.baseCollectionPath + '/confirm-email-change', n).then(() => {
				const r = O(e),
					a = this.client.authStore.record;
				return (
					a && a.id === r.id && a.collectionId === r.collectionId && this.client.authStore.clear(),
					!0
				);
			})
		);
	}
	async listExternalAuths(e, t) {
		return this.client
			.collection('_externalAuths')
			.getFullList(
				Object.assign({}, t, { filter: this.client.filter('recordRef = {:id}', { id: e }) })
			);
	}
	async unlinkExternalAuth(e, t, s) {
		const i = await this.client.collection('_externalAuths').getFirstListItem(
			this.client.filter('recordRef = {:recordId} && provider = {:provider}', {
				recordId: e,
				provider: t
			})
		);
		return this.client
			.collection('_externalAuths')
			.delete(i.id, s)
			.then(() => !0);
	}
	async requestOTP(e, t) {
		return (
			(t = Object.assign({ method: 'POST', body: { email: e } }, t)),
			this.client.send(this.baseCollectionPath + '/request-otp', t)
		);
	}
	async authWithOTP(e, t, s) {
		return (
			(s = Object.assign({ method: 'POST', body: { otpId: e, password: t } }, s)),
			this.client
				.send(this.baseCollectionPath + '/auth-with-otp', s)
				.then((i) => this.authResponse(i))
		);
	}
	async impersonate(e, t, s) {
		((s = Object.assign({ method: 'POST', body: { duration: t } }, s)).headers = s.headers || {}),
			s.headers.Authorization || (s.headers.Authorization = this.client.authStore.token);
		const i = new M(this.client.baseURL, new A(), this.client.lang),
			n = await i.send(this.baseCollectionPath + '/impersonate/' + encodeURIComponent(e), s);
		return (
			i.authStore.save(
				n == null ? void 0 : n.token,
				this.decode((n == null ? void 0 : n.record) || {})
			),
			i
		);
	}
	_replaceQueryParams(e, t = {}) {
		let s = e,
			i = '';
		e.indexOf('?') >= 0 &&
			((s = e.substring(0, e.indexOf('?'))), (i = e.substring(e.indexOf('?') + 1)));
		const n = {},
			r = i.split('&');
		for (const a of r) {
			if (a == '') continue;
			const c = a.split('=');
			n[decodeURIComponent(c[0].replace(/\+/g, ' '))] = decodeURIComponent(
				(c[1] || '').replace(/\+/g, ' ')
			);
		}
		for (let a in t) t.hasOwnProperty(a) && (t[a] == null ? delete n[a] : (n[a] = t[a]));
		i = '';
		for (let a in n)
			n.hasOwnProperty(a) &&
				(i != '' && (i += '&'),
				(i +=
					encodeURIComponent(a.replace(/%20/g, '+')) +
					'=' +
					encodeURIComponent(n[a].replace(/%20/g, '+'))));
		return i != '' ? s + '?' + i : s;
	}
}
function x(o) {
	if (typeof window > 'u' || !(window != null && window.open))
		throw new d(new Error('Not in a browser context - please pass a custom urlCallback function.'));
	let e = 1024,
		t = 768,
		s = window.innerWidth,
		i = window.innerHeight;
	(e = e > s ? s : e), (t = t > i ? i : t);
	let n = s / 2 - e / 2,
		r = i / 2 - t / 2;
	return window.open(
		o,
		'popup_window',
		'width=' + e + ',height=' + t + ',top=' + r + ',left=' + n + ',resizable,menubar=no'
	);
}
class re extends H {
	get baseCrudPath() {
		return '/api/collections';
	}
	async import(e, t = !1, s) {
		return (
			(s = Object.assign({ method: 'PUT', body: { collections: e, deleteMissing: t } }, s)),
			this.client.send(this.baseCrudPath + '/import', s).then(() => !0)
		);
	}
	async getScaffolds(e) {
		return (
			(e = Object.assign({ method: 'GET' }, e)),
			this.client.send(this.baseCrudPath + '/meta/scaffolds', e)
		);
	}
	async truncate(e, t) {
		return (
			(t = Object.assign({ method: 'DELETE' }, t)),
			this.client
				.send(this.baseCrudPath + '/' + encodeURIComponent(e) + '/truncate', t)
				.then(() => !0)
		);
	}
}
class oe extends g {
	async getList(e = 1, t = 30, s) {
		return (
			((s = Object.assign({ method: 'GET' }, s)).query = Object.assign(
				{ page: e, perPage: t },
				s.query
			)),
			this.client.send('/api/logs', s)
		);
	}
	async getOne(e, t) {
		if (!e)
			throw new d({
				url: this.client.buildURL('/api/logs/'),
				status: 404,
				response: { code: 404, message: 'Missing required log id.', data: {} }
			});
		return (
			(t = Object.assign({ method: 'GET' }, t)),
			this.client.send('/api/logs/' + encodeURIComponent(e), t)
		);
	}
	async getStats(e) {
		return (e = Object.assign({ method: 'GET' }, e)), this.client.send('/api/logs/stats', e);
	}
}
class ae extends g {
	async check(e) {
		return (e = Object.assign({ method: 'GET' }, e)), this.client.send('/api/health', e);
	}
}
class ce extends g {
	getUrl(e, t, s = {}) {
		return (
			console.warn('Please replace pb.files.getUrl() with pb.files.getURL()'), this.getURL(e, t, s)
		);
	}
	getURL(e, t, s = {}) {
		if (
			!t ||
			!(e != null && e.id) ||
			(!(e != null && e.collectionId) && !(e != null && e.collectionName))
		)
			return '';
		const i = [];
		i.push('api'),
			i.push('files'),
			i.push(encodeURIComponent(e.collectionId || e.collectionName)),
			i.push(encodeURIComponent(e.id)),
			i.push(encodeURIComponent(t));
		let n = this.client.buildURL(i.join('/'));
		if (Object.keys(s).length) {
			s.download === !1 && delete s.download;
			const r = new URLSearchParams(s);
			n += (n.includes('?') ? '&' : '?') + r;
		}
		return n;
	}
	async getToken(e) {
		return (
			(e = Object.assign({ method: 'POST' }, e)),
			this.client.send('/api/files/token', e).then((t) => (t == null ? void 0 : t.token) || '')
		);
	}
}
class le extends g {
	async getFullList(e) {
		return (e = Object.assign({ method: 'GET' }, e)), this.client.send('/api/backups', e);
	}
	async create(e, t) {
		return (
			(t = Object.assign({ method: 'POST', body: { name: e } }, t)),
			this.client.send('/api/backups', t).then(() => !0)
		);
	}
	async upload(e, t) {
		return (
			(t = Object.assign({ method: 'POST', body: e }, t)),
			this.client.send('/api/backups/upload', t).then(() => !0)
		);
	}
	async delete(e, t) {
		return (
			(t = Object.assign({ method: 'DELETE' }, t)),
			this.client.send(`/api/backups/${encodeURIComponent(e)}`, t).then(() => !0)
		);
	}
	async restore(e, t) {
		return (
			(t = Object.assign({ method: 'POST' }, t)),
			this.client.send(`/api/backups/${encodeURIComponent(e)}/restore`, t).then(() => !0)
		);
	}
	getDownloadUrl(e, t) {
		return (
			console.warn('Please replace pb.backups.getDownloadUrl() with pb.backups.getDownloadURL()'),
			this.getDownloadURL(e, t)
		);
	}
	getDownloadURL(e, t) {
		return this.client.buildURL(
			`/api/backups/${encodeURIComponent(t)}?token=${encodeURIComponent(e)}`
		);
	}
}
class he extends g {
	async getFullList(e) {
		return (e = Object.assign({ method: 'GET' }, e)), this.client.send('/api/crons', e);
	}
	async run(e, t) {
		return (
			(t = Object.assign({ method: 'POST' }, t)),
			this.client.send(`/api/crons/${encodeURIComponent(e)}`, t).then(() => !0)
		);
	}
}
function j(o) {
	return (
		(typeof Blob < 'u' && o instanceof Blob) ||
		(typeof File < 'u' && o instanceof File) ||
		(o !== null &&
			typeof o == 'object' &&
			o.uri &&
			((typeof navigator < 'u' && navigator.product === 'ReactNative') ||
				(typeof global < 'u' && global.HermesInternal)))
	);
}
function E(o) {
	return (
		o && (o.constructor.name === 'FormData' || (typeof FormData < 'u' && o instanceof FormData))
	);
}
function D(o) {
	for (const e in o) {
		const t = Array.isArray(o[e]) ? o[e] : [o[e]];
		for (const s of t) if (j(s)) return !0;
	}
	return !1;
}
const ue = /^[\-\.\d]+$/;
function F(o) {
	if (typeof o != 'string') return o;
	if (o == 'true') return !0;
	if (o == 'false') return !1;
	if ((o[0] === '-' || (o[0] >= '0' && o[0] <= '9')) && ue.test(o)) {
		let e = +o;
		if ('' + e === o) return e;
	}
	return o;
}
class de extends g {
	constructor() {
		super(...arguments), (this.requests = []), (this.subs = {});
	}
	collection(e) {
		return this.subs[e] || (this.subs[e] = new pe(this.requests, e)), this.subs[e];
	}
	async send(e) {
		const t = new FormData(),
			s = [];
		for (let i = 0; i < this.requests.length; i++) {
			const n = this.requests[i];
			if ((s.push({ method: n.method, url: n.url, headers: n.headers, body: n.json }), n.files))
				for (let r in n.files) {
					const a = n.files[r] || [];
					for (let c of a) t.append('requests.' + i + '.' + r, c);
				}
		}
		return (
			t.append('@jsonPayload', JSON.stringify({ requests: s })),
			(e = Object.assign({ method: 'POST', body: t }, e)),
			this.client.send('/api/batch', e)
		);
	}
}
class pe {
	constructor(e, t) {
		(this.requests = []), (this.requests = e), (this.collectionIdOrName = t);
	}
	upsert(e, t) {
		t = Object.assign({ body: e || {} }, t);
		const s = {
			method: 'PUT',
			url: '/api/collections/' + encodeURIComponent(this.collectionIdOrName) + '/records'
		};
		this.prepareRequest(s, t), this.requests.push(s);
	}
	create(e, t) {
		t = Object.assign({ body: e || {} }, t);
		const s = {
			method: 'POST',
			url: '/api/collections/' + encodeURIComponent(this.collectionIdOrName) + '/records'
		};
		this.prepareRequest(s, t), this.requests.push(s);
	}
	update(e, t, s) {
		s = Object.assign({ body: t || {} }, s);
		const i = {
			method: 'PATCH',
			url:
				'/api/collections/' +
				encodeURIComponent(this.collectionIdOrName) +
				'/records/' +
				encodeURIComponent(e)
		};
		this.prepareRequest(i, s), this.requests.push(i);
	}
	delete(e, t) {
		t = Object.assign({}, t);
		const s = {
			method: 'DELETE',
			url:
				'/api/collections/' +
				encodeURIComponent(this.collectionIdOrName) +
				'/records/' +
				encodeURIComponent(e)
		};
		this.prepareRequest(s, t), this.requests.push(s);
	}
	prepareRequest(e, t) {
		if ((q(t), (e.headers = t.headers), (e.json = {}), (e.files = {}), t.query !== void 0)) {
			const i = B(t.query);
			i && (e.url += (e.url.includes('?') ? '&' : '?') + i);
		}
		let s = t.body;
		E(s) &&
			(s = (function (n) {
				let r = {};
				return (
					n.forEach((a, c) => {
						if (c === '@jsonPayload' && typeof a == 'string')
							try {
								let l = JSON.parse(a);
								Object.assign(r, l);
							} catch (l) {
								console.warn('@jsonPayload error:', l);
							}
						else
							r[c] !== void 0
								? (Array.isArray(r[c]) || (r[c] = [r[c]]), r[c].push(F(a)))
								: (r[c] = F(a));
					}),
					r
				);
			})(s));
		for (const i in s) {
			const n = s[i];
			if (j(n)) (e.files[i] = e.files[i] || []), e.files[i].push(n);
			else if (Array.isArray(n)) {
				const r = [],
					a = [];
				for (const c of n) j(c) ? r.push(c) : a.push(c);
				if (r.length > 0 && r.length == n.length) {
					e.files[i] = e.files[i] || [];
					for (let c of r) e.files[i].push(c);
				} else if (((e.json[i] = a), r.length > 0)) {
					let c = i;
					i.startsWith('+') || i.endsWith('+') || (c += '+'), (e.files[c] = e.files[c] || []);
					for (let l of r) e.files[c].push(l);
				}
			} else e.json[i] = n;
		}
	}
}
class M {
	get baseUrl() {
		return this.baseURL;
	}
	set baseUrl(e) {
		this.baseURL = e;
	}
	constructor(e = '/', t, s = 'en-US') {
		(this.cancelControllers = {}),
			(this.recordServices = {}),
			(this.enableAutoCancellation = !0),
			(this.baseURL = e),
			(this.lang = s),
			t
				? (this.authStore = t)
				: typeof window < 'u' && window.Deno
					? (this.authStore = new A())
					: (this.authStore = new te()),
			(this.collections = new re(this)),
			(this.files = new ce(this)),
			(this.logs = new oe(this)),
			(this.settings = new se(this)),
			(this.realtime = new $(this)),
			(this.health = new ae(this)),
			(this.backups = new le(this)),
			(this.crons = new he(this));
	}
	get admins() {
		return this.collection('_superusers');
	}
	createBatch() {
		return new de(this);
	}
	collection(e) {
		return (
			this.recordServices[e] || (this.recordServices[e] = new ne(this, e)), this.recordServices[e]
		);
	}
	autoCancellation(e) {
		return (this.enableAutoCancellation = !!e), this;
	}
	cancelRequest(e) {
		return (
			this.cancelControllers[e] &&
				(this.cancelControllers[e].abort(), delete this.cancelControllers[e]),
			this
		);
	}
	cancelAllRequests() {
		for (let e in this.cancelControllers) this.cancelControllers[e].abort();
		return (this.cancelControllers = {}), this;
	}
	filter(e, t) {
		if (!t) return e;
		for (let s in t) {
			let i = t[s];
			switch (typeof i) {
				case 'boolean':
				case 'number':
					i = '' + i;
					break;
				case 'string':
					i = "'" + i.replace(/'/g, "\\'") + "'";
					break;
				default:
					i =
						i === null
							? 'null'
							: i instanceof Date
								? "'" + i.toISOString().replace('T', ' ') + "'"
								: "'" + JSON.stringify(i).replace(/'/g, "\\'") + "'";
			}
			e = e.replaceAll('{:' + s + '}', i);
		}
		return e;
	}
	getFileUrl(e, t, s = {}) {
		return (
			console.warn('Please replace pb.getFileUrl() with pb.files.getURL()'),
			this.files.getURL(e, t, s)
		);
	}
	buildUrl(e) {
		return console.warn('Please replace pb.buildUrl() with pb.buildURL()'), this.buildURL(e);
	}
	buildURL(e) {
		var s;
		let t = this.baseURL;
		return (
			typeof window > 'u' ||
				!window.location ||
				t.startsWith('https://') ||
				t.startsWith('http://') ||
				((t =
					(s = window.location.origin) != null && s.endsWith('/')
						? window.location.origin.substring(0, window.location.origin.length - 1)
						: window.location.origin || ''),
				this.baseURL.startsWith('/') ||
					((t += window.location.pathname || '/'), (t += t.endsWith('/') ? '' : '/')),
				(t += this.baseURL)),
			e && ((t += t.endsWith('/') ? '' : '/'), (t += e.startsWith('/') ? e.substring(1) : e)),
			t
		);
	}
	async send(e, t) {
		t = this.initSendOptions(e, t);
		let s = this.buildURL(e);
		if (this.beforeSend) {
			const i = Object.assign({}, await this.beforeSend(s, t));
			i.url !== void 0 || i.options !== void 0
				? ((s = i.url || s), (t = i.options || t))
				: Object.keys(i).length &&
					((t = i),
					console != null &&
						console.warn &&
						console.warn(
							'Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`.'
						));
		}
		if (t.query !== void 0) {
			const i = B(t.query);
			i && (s += (s.includes('?') ? '&' : '?') + i), delete t.query;
		}
		return (
			this.getHeader(t.headers, 'Content-Type') == 'application/json' &&
				t.body &&
				typeof t.body != 'string' &&
				(t.body = JSON.stringify(t.body)),
			(t.fetch || fetch)(s, t)
				.then(async (i) => {
					let n = {};
					try {
						n = await i.json();
					} catch {}
					if ((this.afterSend && (n = await this.afterSend(i, n, t)), i.status >= 400))
						throw new d({ url: i.url, status: i.status, data: n });
					return n;
				})
				.catch((i) => {
					throw new d(i);
				})
		);
	}
	initSendOptions(e, t) {
		if (
			(((t = Object.assign({ method: 'GET' }, t)).body = (function (i) {
				if (
					typeof FormData > 'u' ||
					i === void 0 ||
					typeof i != 'object' ||
					i === null ||
					E(i) ||
					!D(i)
				)
					return i;
				const n = new FormData();
				for (const r in i) {
					const a = i[r];
					if (typeof a != 'object' || D({ data: a })) {
						const c = Array.isArray(a) ? a : [a];
						for (let l of c) n.append(r, l);
					} else {
						let c = {};
						(c[r] = a), n.append('@jsonPayload', JSON.stringify(c));
					}
				}
				return n;
			})(t.body)),
			q(t),
			(t.query = Object.assign({}, t.params, t.query)),
			t.requestKey === void 0 &&
				(t.$autoCancel === !1 || t.query.$autoCancel === !1
					? (t.requestKey = null)
					: (t.$cancelKey || t.query.$cancelKey) &&
						(t.requestKey = t.$cancelKey || t.query.$cancelKey)),
			delete t.$autoCancel,
			delete t.query.$autoCancel,
			delete t.$cancelKey,
			delete t.query.$cancelKey,
			this.getHeader(t.headers, 'Content-Type') !== null ||
				E(t.body) ||
				(t.headers = Object.assign({}, t.headers, { 'Content-Type': 'application/json' })),
			this.getHeader(t.headers, 'Accept-Language') === null &&
				(t.headers = Object.assign({}, t.headers, { 'Accept-Language': this.lang })),
			this.authStore.token &&
				this.getHeader(t.headers, 'Authorization') === null &&
				(t.headers = Object.assign({}, t.headers, { Authorization: this.authStore.token })),
			this.enableAutoCancellation && t.requestKey !== null)
		) {
			const s = t.requestKey || (t.method || 'GET') + e;
			delete t.requestKey, this.cancelRequest(s);
			const i = new AbortController();
			(this.cancelControllers[s] = i), (t.signal = i.signal);
		}
		return t;
	}
	getHeader(e, t) {
		(e = e || {}), (t = t.toLowerCase());
		for (let s in e) if (s.toLowerCase() == t) return e[s];
		return null;
	}
}
const k = new M('http://127.0.0.1:8090');
let fe = J(_(k.authStore.record));
k.autoCancellation(!1);
k.authStore.onChange(() => {
	V(fe, _(k.authStore.record));
}, !0);
async function ye() {
	k.authStore.clear(), await z(), Q('/login/?message="logged out"');
}
export { ye as l, k as p };
