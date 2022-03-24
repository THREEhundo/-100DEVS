let url =
	'http://api.coinlayer.com/api/live?access_key=13b2e06f2d5460655f7b3099335641c4&symbols=BTC,ETH';

//((url) => {
//	const btc = document.querySelector('#btc');
//	const eth = document.querySelector('#eth');
//
//	// FETCH current btc & eth prices in spans
//	currentCryptoPrice(url, btc, eth);
//})(url);

document.querySelector('#convertBTC').addEventListener('click', fetchCrypto);
document.querySelector('#convertETH').addEventListener('click', fetchCrypto);

async function fetchCrypto(url) {
	// ! get btc price from api
	// ? http://api.coinlayer.com/api/live?access_key=13b2e06f2d5460655f7b3099335641c4&symbols=BTC,ETH

	return await fetch(url)
		.then((response) => response.json())
		.then((json) => {
			// ! return object with both timestamp, 1BTC price
			const { rates, timestamp } = json;
			return convertUSDtoCrypto(rates.BTC, rates.ETH, timestamp, this.id);
		});
}

function convertUSDtoCrypto(btcPrice, ethPrice, time, buttonID) {
	// ! get $ amount
	let dollarAmount = document.querySelector('#USD').value;
	// ! convert to BTC || ETH total
	//dollarAmount = dollarAmount / btcPrice;
	buttonID === 'convertBTC'
		? (dollarAmount = dollarAmount / btcPrice)
		: (dollarAmount = dollarAmount / ethPrice);
	// ! display Coin Amount
	document.querySelector('#time').innerText = Date(time);
	// ! if BTC was clicked show else ETH was clicked show
	buttonID === 'convertBTC'
		? (document.querySelector('#coinsHeld').innerText = `${dollarAmount} BTC`)
		: (document.querySelector('#coinsHeld').innerText = `${dollarAmount} ETH`);
}

// ? timestamp
async function currentCryptoPrice(url, btc, eth) {
	// TODO on window load fetch live ETH & BTC
	return await fetch(url)
		.then((response) => response.json())
		.then((json) => {
			const { rates } = json;
			const { BTC, ETH } = rates;
			const fixedBTC = Math.trunc(BTC).toLocaleString('en-US');
			const fixedETH = Math.trunc(ETH).toLocaleString('en-US');
			btc > 69000 ? (btc.style.color = 'green') : (btc.style.color = 'red');
			eth > 4200 ? (eth.style.color = 'green') : (eth.style.color = 'red');

			// TODO Default BTC array
			let hopiumBTC = [6, 9, 0, 0, 0];
			// TODO Split price into an array
			let btcArr = fixedBTC.toString().split('').map(Number);
			// TODO find difference in 69,000 to current price

			btc.innerText = fixedBTC;
			eth.innerText = fixedETH;
			return;
		});
}

/**
 * ? attaching animation not done
 */

function priceAnimation() {
	// TODO get starting span # 6
	const digit = document.querySelectorAll('.digit');

	// TODO use animation to change to current #
	// TODO
}

// \ animatie change
function flipDigit(slot, value) {
	slot.classList.remove('flip');
	slot.dataset.previous = slot.dataset.current;
	slot.dataset.current = value;
	slot.classList.add('flip');
}

/**
 * ? attaching animation not done ??? DO I NEED THIS ???
 */
// TODO rate of change
function tick() {
	setTimeout(() => {
		return;
	}, 1000);
}

/**********
 * 1. fetch price ✅ ✅
 * 2. compare old price to new price ❌ ❌
 * 3. run for loop ✅ ❌
 * 4. each number change in for loop run animation ✅ ❌
 * 5. add color red or green to number change ❌❌
 *********/

// UPDATING NUMBER COUNTER
function update(previousPriceDigit, currentPriceDigit) {
	let defaultCountStart = previousPriceDigit; // 9
	let defaultCountEnd = currentPriceDigit; // 2

	if (defaultCountStart === defaultCountEnd) return 'yer';

	// loop starting digit --> ending digit
	for (let i = defaultCountStart; i < defaultCountEnd; i++) {
		previousPriceDigit = i;
		currentPriceDigit = i + 1;

		let prevString = previousPriceDigit.toString();
		let currString = currentPriceDigit.toString();

		//		if (currString > 9) {
		//			currString = currString.slice(1, 1);
		//			prevString = prevString.slice(1, 1);
		//			console.log(prevString);
		//
		//			console.log(currString);
		//			// show sliced string
		//		}
		// if currString === 9
		// show 0 1 2 3
		// currentPriceDigit

		console.log(prevString);
		console.log(currString);

		// TODO animation
		//return currentPriceDigit;
	}
}

//function updater(previousPriceDigit, currentPriceDigit) {}

var Clock = (function () {
	var exports = function (element) {
		this._element = element;
		var html = '';
		for (var i = 0; i < 6; i++) {
			html += '<span>&nbsp;</span>';
		}
		this._element.innerHTML = html;
		this._slots = this._element.getElementsByTagName('span');
		this._tick();
	};
	exports.prototype = {
		_tick: function () {
			// get time with new date
			var time = new Date();
			// update hours minutes seconds
			this._update(
				this._pad(time.getHours()) +
					this._pad(time.getMinutes()) +
					this._pad(time.getSeconds()),
			);
			// span timer
			var self = this;
			setTimeout(function () {
				self._tick();
			}, 1000);
		},
		// cuts out digits
		_pad: function (value) {
			return ('0' + value).slice(-2);
		},
		// update time string
		_update: function (timeString) {
			var i = 0,
				l = this._slots.length,
				value,
				slot,
				now;
			for (; i < l; i++) {
				value = timeString.charAt(i);
				slot = this._slots[i];
				now = slot.dataset.now;
				if (!now) {
					slot.dataset.now = value;
					slot.dataset.old = value;
					continue;
				}
				if (now !== value) {
					this._flip(slot, value);
				}
			}
		},
		_updateTicker: function (digit) {},
		_flip: function (slot, value) {
			slot.classList.remove('flip');
			slot.dataset.old = slot.dataset.now;
			slot.dataset.now = value;
			slot.offsetLeft;
			slot.classList.add('flip');
		},
	};
	return exports;
})();
var i = 0,
	clocks = document.querySelectorAll('.clock'),
	l = clocks.length;
for (; i < l; i++) {
	new Clock(clocks[i]);
}
