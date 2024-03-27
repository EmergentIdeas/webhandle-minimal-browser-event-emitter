import EventEmitter from '../client-js/index.js'
import 'mocha'

import { assert } from 'chai'
import basicTestMethods from '../utils/basic-test-methods.mjs'

mocha.setup('bdd')
mocha.run()

basicTestMethods()
