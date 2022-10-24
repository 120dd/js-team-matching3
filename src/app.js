import { View } from './view/view.js';
import { Matcher } from './matcher.js';

export class App {
	constructor() {
		this.matcher = new Matcher();
		this.view = new View(this.matcher);
		this.view.setCrewTabEvent(this.requestAddCrew, this.requestDeleteCrew);
	}

	requestAddCrew = (course, crewName) => {
		this.matcher.addCrew(course, crewName);
		this.view.renderCrewTabDetail(course);
	};

	requestDeleteCrew = (course, idx) => {
		this.matcher.deleteCrew(course, idx);
		this.view.renderCrewTabDetail(course);
	};
}
