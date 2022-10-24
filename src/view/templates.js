import { COURSE_NAME_KR, SELECTORS } from './viewContants.js';

const HEADER = `
<header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
        <ul>
            <li>
            <button id=${SELECTORS.CREW_TAB}>크루 관리</button>
            </li>
            <li>
            <button id=${SELECTORS.TEAM_TAB}>팀 매칭 관리</button>
        </li>
        </ul>
    </nav>
</header>
`;
const MAIN = `<main id=${SELECTORS.MAIN}></main>`;
const CREW_TAB = `
<section>
    <h3>크루를 관리할 코스를 선택해주세요</h3>
    <div>
        <input id="frontend-course" type="radio" name="course" value="frontend" />
        <label for="frontend">프론트엔드</label>
        <input id="backend-course" type="radio" name="course" value="backend" />
        <label for="backend">백엔드</label>
    </div>
</section>
`;

const CREW_MANAGE_DETAIL = courseName => `
<section id=${SELECTORS.CREW_TAB_DETAIL}>
      <h3>${COURSE_NAME_KR[courseName]} 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input id="crew-name-input" type="text" />
        <button id="add-crew-button" data-course=${courseName}>확인</button>
      </form>
    </section>
`;

export { HEADER, MAIN, CREW_TAB, CREW_MANAGE_DETAIL };
