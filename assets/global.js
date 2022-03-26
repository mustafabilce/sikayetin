$(() => {
	function IsVisible(el) {
		let rect = el.getBoundingClientRect();
		const top = rect.top;
		const height = rect.height;
		let parent = el.parentNode;
		if (rect.bottom < 0) return false;
		if (top > document.documentElement.clientHeight) return false;
		do {
			rect = parent.getBoundingClientRect();
			if (top <= rect.bottom === false) return false;
			if (top + height <= rect.top) return false;
			parent = parent.parentNode;
		} while (parent != document.body);
		return true;
	}

	for (const element of $('.reveal-on-visible')) {
		if (IsVisible(element)) {
			$(element).addClass('revealed');
		}

		window.addEventListener('scroll', () => {
			console.log("scroll");
			if (IsVisible(element)) {
				$(element).addClass('revealed');
			}
		});
	}
})