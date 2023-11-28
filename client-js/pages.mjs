import EventEmitter from '../client-js/index.js'
import 'mocha'

import { assert } from 'chai'

mocha.setup('bdd')
mocha.run()


describe("event basics", function () {
	it("basic emission", function (done) {
		let emitter = new EventEmitter()

		emitter.on('test', function (one, two, three) {
			console.log(this)
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
		setTimeout(function() {
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
		setTimeout(function() {
			done()
		}, 200)
	})
})

