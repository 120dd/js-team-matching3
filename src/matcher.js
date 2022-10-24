export class Matcher {
	constructor() {
		this.frontend = ['a', 'b'];
		this.backend = ['c', 'd', 'e'];
	}

	addCrew(course, name) {
		this[course].push(name);
	}
	
	deleteCrew(course, idx){
		this[course].splice(idx,1);
	}
}
