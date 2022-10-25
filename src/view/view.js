import { SELECTORS } from './viewContants.js';
import { CREW_MANAGE_DETAIL, CREW_MANAGE_LIST, CREW_TAB, HEADER, MAIN } from './templates.js';

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
	constructor(_matcher) {
		this.initialize();
		this.matcher = _matcher;
		this.setHeaderEvent();
	}

	initialize() {
		this.renderHeader();
		this.renderMain();
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

	clearNodes(selector) {
		document.querySelectorAll(`.${selector}`).forEach(node => {
			node.remove();
		});
	}

	renderCrewTab() {
		this.clearNode(SELECTORS.MAIN);
		getElement(SELECTORS.MAIN).insertAdjacentHTML('beforeend', CREW_TAB);
	}

	renderCrewTabDetail(currentCourse) {
		this.clearNodes(SELECTORS.CREW_TAB_DETAIL);
		getElement(SELECTORS.MAIN).insertAdjacentHTML('beforeend', CREW_MANAGE_DETAIL(currentCourse));
		this.renderCrewList(currentCourse);
	}

	renderCrewList(currentCourse) {
		getElement(SELECTORS.MAIN)
		.insertAdjacentHTML('beforeend', CREW_MANAGE_LIST(this.matcher[currentCourse],currentCourse));
	}

	setHeaderEvent(){
		addClickEvent(SELECTORS.CREW_TAB, () => {
			this.renderCrewTab();
		});
		addClickEvent(SELECTORS.TEAM_TAB, () => {
			console.log(1122);
		});
	}
	
	setCrewTabEvent(addCrewFn, deleteFn) {
		addClickEvent(SELECTORS.FRONTEND_COURSE_INPUT, event => {
			this.renderCrewTabDetail(event.target.value);
		});
		addClickEvent(SELECTORS.BACKEND_COURSE_INPUT, event => {
			this.renderCrewTabDetail(event.target.value);
		});
		addClickEvent(SELECTORS.ADD_CREW_BUTTON, event => {
			event.preventDefault();
			addCrewFn(event.target.dataset.course, getElement(SELECTORS.CREW_NAME_INPUT).value);
		});
		addClickEvent(SELECTORS.DELETE_CREW_BUTTON, event => {
			deleteFn(event.target.dataset.course, event.target.dataset.idx);
		});
	}
	
	alert(msg){
		alert(msg);
	}
	
	conirm(msg){
		return confirm(msg)
	}
}
