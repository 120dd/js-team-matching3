import { View } from './view/view.js';
import { Matcher } from './matcher.js';

export class App {
	constructor() {
		this.matcher = new Matcher();
		this.view = new View(this.matcher);
		this.view.setCrewTabEvent(this.requestAddCrew, this.requestDeleteCrew);
	}

	requestAddCrew = (course, crewName) => {
		if (this.matcher[course].includes(crewName)){
			this.view.alert("동명이인 등록은 불가합니다");
			return;
		}
		this.matcher.addCrew(course, crewName);
		this.view.renderCrewTabDetail(course);
	};

	requestDeleteCrew = (course, idx) => {
		if (!this.view.conirm("정말 삭제하시겠습니까?")){
			return;
		}
		this.matcher.deleteCrew(course, idx);
		this.view.renderCrewTabDetail(course);
	};
}
