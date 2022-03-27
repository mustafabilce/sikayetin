import extend from '../utils/extend-vue-app';

function IsVisible(el) {
	let { top, bottom } = el.getBoundingClientRect();
	return bottom >= 0 && top <= document.documentElement.clientHeight
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