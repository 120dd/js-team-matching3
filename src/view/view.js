import { SELECTORS } from './viewContants.js';
import { CREW_MANAGE_DETAIL, CREW_TAB, HEADER, MAIN } from './templates.js';

const getElement = selector => document.querySelector(`#${selector}`);
const addClickEvent = (selector, callback) => {
	getElement(SELECTORS.APP).addEventListener('click', event => {
		if (event.target.id === selector) {
			callback(event);
			return;
		}
		if (event.target.className === selector) {
			callback(event);
		}
	});
};

export class View {
	constructor() {
		this.initalize();
	}

	initalize() {
		this.renderHeader();
		this.renderMain();
		this.setEvent();
	}

	renderHeader() {
		getElement(SELECTORS.APP).insertAdjacentHTML('beforeend', HEADER);
	}

	renderMain() {
		getElement(SELECTORS.APP).insertAdjacentHTML('beforeend', MAIN);
	}

	clearNode(selector) {
		getElement(selector).innerHTML = '';
	}

	renderCrewTab() {
		this.clearNode(SELECTORS.MAIN);
		getElement(SELECTORS.MAIN).insertAdjacentHTML('beforeend', CREW_TAB);
	}

	renderCrewTabDetail(currentCourse) {
		getElement(SELECTORS.CREW_TAB_DETAIL)?.remove();
		getElement(SELECTORS.MAIN).insertAdjacentHTML('beforeend', CREW_MANAGE_DETAIL(currentCourse));
	}

	setEvent() {
		addClickEvent(SELECTORS.CREW_TAB, event => {
			this.renderCrewTab();
		});
		addClickEvent(SELECTORS.FRONTEND_COURSE_INPUT, event => {
			this.renderCrewTabDetail(event.target.value);
		});
		addClickEvent(SELECTORS.BACKEND_COURSE_INPUT, event => {
			this.renderCrewTabDetail(event.target.value);
		});
	}
}
