import EventEmitter from "../client-js/event-emitter.mjs"
import {assert} from 'chai'

export default function basicTestMethods() {
	describe("event basics", function () {
		it("basic emission", function (done) {
			let emitter = new EventEmitter()

			emitter.on('test', function (one, two, three) {
				done()
			})

			emitter.emit('test')
		})
		it("chained calls", function (done) {
			let emitter = new EventEmitter()

			emitter.on('test', function (one, two, three) {
				done()
			})
				.on('test', function (one, two, three) {
				})

			emitter.emit('test')
		})

		it("emission parameters", function (done) {
			let emitter = new EventEmitter()

			emitter.on('test', (one, two, three) => {
				assert.equal(one, 1)
				assert.equal(two, 2)
				assert.equal(three, 3)
				done()
			})

			emitter.emit('test', 1, 2, 3)
		})

		it("wrong event type emission", function (done) {
			let emitter = new EventEmitter()

			emitter.on('test', (one, two, three) => {
				done(new Error())
			})

			emitter.emit('test2')
			setTimeout(function () {
				done()
			}, 200)
		})

		it("remove listener", function (done) {
			let emitter = new EventEmitter()

			let listener = (one, two, three) => {
				done(new Error())
			}
			emitter.on('test', listener)
			emitter.removeListener('test', listener)

			emitter.emit('test')
			setTimeout(function () {
				done()
			}, 200)
		})
		it("remove CustomEvent", function () {
			if(typeof window !== 'undefined') {
				delete window.CustomEvent
			}
		})
		it("basic emission plain event", function (done) {
			let emitter = new EventEmitter()

			emitter.on('test', function (one, two, three) {
				done()
			})

			emitter.emit('test')
		})
		it("chained calls plain event", function (done) {
			let emitter = new EventEmitter()

			emitter.on('test', function (one, two, three) {
				done()
			})
				.on('test', function (one, two, three) {
				})

			emitter.emit('test')
		})

		it("emission parameters plain event", function (done) {
			let emitter = new EventEmitter()

			emitter.on('test', (one, two, three) => {
				assert.equal(one, 1)
				assert.equal(two, 2)
				assert.equal(three, 3)
				done()
			})

			emitter.emit('test', 1, 2, 3)
		})

		it("wrong event type emission plain event", function (done) {
			let emitter = new EventEmitter()

			emitter.on('test', (one, two, three) => {
				done(new Error())
			})

			emitter.emit('test2')
			setTimeout(function () {
				done()
			}, 200)
		})

		it("remove listener plain event", function (done) {
			let emitter = new EventEmitter()

			let listener = (one, two, three) => {
				done(new Error())
			}
			emitter.on('test', listener)
			emitter.removeListener('test', listener)

			emitter.emit('test')
			setTimeout(function () {
				done()
			}, 200)
		})
	})
}