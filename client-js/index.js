let Emitter
import Streamish from "./streamish.mjs"
import EventEmitter from "./event-emitter.mjs"

if (typeof EventTarget !== 'undefined') {
	Emitter = EventEmitter
}
else {
	Emitter = Streamish
}


export default Emitter