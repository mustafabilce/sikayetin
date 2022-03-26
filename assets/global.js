import extend from '../utils/extend-vue-app';

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

function MakeVisibleElementsRevealed() {
	for (const element of $('.reveal-on-visible')) {
		if (IsVisible(element)) {
			$(element).addClass('revealed');

			setTimeout(() => {
				$(element).addClass('reveal-finished');
			}, 1200);
		}
	}
}

export default ({ app }) => {
	app.router.beforeEach(async (to, from, next) => {
		$(".revealed").each((i, x) => {
			x.style.transition = "300ms ease";
			x.style.transitionDelay = 0;
			x.classList.remove('revealed');
			x.classList.remove('reveal-finished');
		});
		await new Promise(res => setTimeout(res, 300));
		next();
	})

	app.router.afterEach((to, from) => {
		setTimeout(MakeVisibleElementsRevealed, 100);
		window.removeEventListener('load', MakeVisibleElementsRevealed);
		window.addEventListener('load', MakeVisibleElementsRevealed);
		window.removeEventListener('resize', MakeVisibleElementsRevealed);
		window.addEventListener('resize', MakeVisibleElementsRevealed);
		window.removeEventListener('scroll', MakeVisibleElementsRevealed);
		window.addEventListener('scroll', MakeVisibleElementsRevealed);
	})

	extend(app, {
		mounted() {
			MakeVisibleElementsRevealed();
		},
	})
}