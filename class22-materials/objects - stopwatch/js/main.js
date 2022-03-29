// Stopwatch Object

// start
// stop
// duration

function CreateStopwatch() {
	let duration, startTime, endTime, running

	this.start = function () {
		if (running) throw new error(`You've started the stopwatch already!`)

		running = true

		startTime = new Date()
	}

	this.stop = function () {
		if (!running) throw new error('Stopwatch is not running!')

		running = false

		endTime = (new Date() - startTime) / 1000
		// get number and assign to duration
		duration = `${endTime} seconds`
		return duration
	}

	this.getDuration = function () {
		return duration
	}
}

let stopwatch = new CreateStopwatch()
stopwatch.start()
