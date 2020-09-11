
/**
 * @imports
 */
import Sequence from '@onephrase/play-ui/src/ani/Sequence.js';

/**
 * ---------------------------
 * The client-build entry
 * ---------------------------
 */

/**
 * Define the customized built-in UL element
 */
window.customElements.define('playui-ul', class extends window.HTMLUListElement {

	/**
	 * Establish a common Timeline.
	 *
	 * @return void
	 */
	constructor() {
		super();
		var sequenceA = new Sequence;
		var sequenceB = new Sequence;
		var params = {lag: 150, oneoff: true, duration: 300};
		// ----------------
		sequenceA.play([{
			opacity: 0,
			transform: {
				translate: ['0', '100'],
			}
		}, {
			opacity: 1,
			transform: {
				translate: ['0', '0'],
			}
		}], params);
		// -----------------
		sequenceB.play([{
			opacity: 0,
			transform: {
				translate: ['0', '-100'],
			}
		}, {
			opacity: 1,
			transform: {
				translate: ['0', '0'],
			}
		}], params);
		// --------------
		this.intersectionObserver = new  window.IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					if (entry.boundingClientRect.top < 0) {
						// Top-to-bottom motion
						sequenceB.add(entry.target);
					} else {
						// Bottom-to-top motion
						sequenceA.add(entry.target);
					}
				}
			});
		}, {rootMargin: '50px'});
	}

	/**
	 * Adds an element to the sequence.
	 *
	 * @param HTMLElement el
	 *
	 * @return void
	 */
	sequenceAdd(el) {
		this.intersectionObserver.observe(el);
	}

}, {extends: 'ul'});

	
/**
 * Define the customized built-in UL element
 */
window.customElements.define('playui-li', class extends  window.HTMLLIElement {
	
	/**
	 * This triggers self-replacement
	 * when so defined.
	 *
	 * @return void
	 */
	connectedCallback() {
		if (this.parentNode.sequenceAdd) {
			this.parentNode.sequenceAdd(this);
		}
	}

}, {extends: 'li'});