const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
function Promise(executor) {
	const self = this;
	self.status = PENDING;
	self.value = '';
	self.reason = '';
	self.onFulfilled = [];
	self.onRejected = [];

	function resolve(value) {
		if (self.status === PENDING) {
			self.status = FULFILLED;
			self.value = value;
			setTimeout(() => {
				self.onFulfilled.foeEach(fn => fn(self.value));
			});
		}
	}
	function reject(reason) {
		if (self.status === PENDING) {
			self.status = REJECTED;
			self.reason = reason;
			setTimeout(() => {
				self.onRejected.forEach(fn => fn(self.reason));
			});
		}
	}

	try {
		executor(resolve, reject);
	} catch (e) {
		reject(e);
	}
}

/* eslint-disable */
const resolvePromise = (promise2, x, resolve, reject) => {
	if (promise2 === x) {
		// 如果从onFulfilled中返回的x 就是promise2 就会导致循环引用报错
		return reject(new TypeError('循环引用'));
	}

	let called = false; // 避免多次调用
	// 如果x是一个promise对象 （该判断和下面 判断是不是thenable对象重复 所以可有可无）
	if (x instanceof Promise) {
		// 获得它的终值 继续resolve
		if (x.status === PENDING) {
			// 如果为等待态需等待直至 x 被执行或拒绝 并解析y值
			x.then(
				y => {
					resolvePromise(promise2, y, resolve, reject);
				},
				reason => {
					reject(reason);
				},
			);
		} else {
			// 如果 x 已经处于执行态/拒绝态(值已经被解析为普通值)，用相同的值执行传递下去 promise
			x.then(resolve, reject);
		}
		// 如果 x 为对象或者函数
	} else if (x != null && (typeof x === 'object' || typeof x === 'function')) {
		try {
			// 是否是thenable对象（具有then方法的对象/函数）
			const {then} = x;
			if (typeof then === 'function') {
				then.call(
					x,
					y => {
						if (called) return;
						called = true;
						resolvePromise(promise2, y, resolve, reject);
					},
					reason => {
						if (called) return;
						called = true;
						reject(reason);
					},
				);
			} else {
				// 说明是一个普通对象/函数
				resolve(x);
			}
		} catch (e) {
			if (called) return;
			called = true;
			reject(e);
		}
	} else {
		resolve(x);
	}
}
/* eslint-enable */

Promise.prototype.then = (onFulfilled, onReject) => {
	const self = this;
	onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
	onReject = typeof onReject === 'function' ? onReject : reason => { throw reason; };
	const promist2 = new Promise((resolve, reject) => {
		if (self.status === FULFILLED) {
			setTimeout(() => {
				try {
					// onFulfilled(self.result)
					const x = onFulfilled(self.value);
					resolvePromise(promist2, x, resolve, reject);
				} catch (e) {
					reject(e);
				}
			});
		}
		if (self.status === REJECTED) {
			setTimeout(() => {
				try {
					// onReject(self.reason)
					const x = onReject(self.reason);
					resolvePromise(promist2, x, resolve, reject);
				} catch (e) {
					reject(e);
				}
			});
		}
		if (self.status === PENDING) {
			self.onFulfilled.push(result => {
				try {
					// onFulfilled(result);
					const x = onFulfilled(result);
					resolvePromise(promist2, x, resolve, reject);
				} catch (e) {
					reject(e);
				}
			});
			self.onRejected.push(reason => {
				try {
					// onReject(reason);
					const x = onReject(reason);
					resolvePromise(promist2, x, resolve, reject);
				} catch (e) {
					reject(e);
				}
			});
		}
	});

	return promist2;
};

function gen(length, resolve) {
	let count = 0;
	const values = [];
	return (i, value) => {
		values[i] = value;
		if (++count === length) {
			console.log(values);
			resolve(values);
		}
	};
}

/**
   * Promise.race
   * 参数: 接收 promise对象组成的数组作为参数
   * 返回值: 返回一个Promise实例
   * 只要有一个promise对象进入 FulFilled 或者 Rejected 状态的话，就会继续进行后面的处理(取决于哪一个更快)
   */
Promise.race = promises => new Promise((resolve, reject) => {
	promises.forEach(promise => {
		promise.then(resolve, reject);
	});
});

// 用于promise方法链时 捕获前面onFulfilled/onRejected抛出的异常
Promise.prototype.catch = function (onRejected) {
	return this.then(null, onRejected);
};

Promise.resolve = function (value) {
	return new Promise(resolve => {
		resolve(value);
	});
};

Promise.reject = function (reason) {
	return new Promise((resolve, reject) => {
		reject(reason);
	});
};

/**
 * Promise.all Promise进行并行处理
 * 参数: promise对象组成的数组作为参数
 * 返回值: 返回一个Promise实例
 * 当这个数组里的所有promise对象全部变为resolve状态的时候，才会resolve。
 */
Promise.all = promises => new Promise((resolve, reject) => {
	const done = gen(promises.length, resolve);
	promises.forEach((promise, index) => {
		promise.then(value => {
			done(index, value);
		}, reject);
	});
});


Promise.deferred = () => {
	// 延迟对象
	const defer = {};
	defer.promise = new Promise((resolve, reject) => {
		defer.resolve = resolve;
		defer.reject = reject;
	});
	return defer;
};

module.exports = Promise;
