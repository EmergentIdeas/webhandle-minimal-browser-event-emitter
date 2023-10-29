# webhandle-minimal-browser-event-emitter

The smallest possible node js style event emitter methods over browser event dispatcher code


## Install 

```bash
npm install @webhandle/minimal-browser-event-emitter
```

## Usage

Intended to be used in a browser.


```js
import EventEmitter from '@webhandle/minimal-browser-event-emitter'

// or
// const EventEmitter = require('@webhandle/minimal-browser-event-emitter').default

let emitter = new EventEmitter()

emitter.on('test', function (one, two, three) {
	// Do something
})

emitter.emit('test', 1, 2, 3)
```