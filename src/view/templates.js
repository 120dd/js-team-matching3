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
<section class=${SELECTORS.CREW_TAB_DETAIL}>
      <h3>${COURSE_NAME_KR[courseName]} 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input id="crew-name-input" type="text" />
        <button id="add-crew-button" data-course=${courseName}>확인</button>
      </form>
    </section>
`;

const CREW_MANAGE_LIST = (crewList, course) => `
<section class=${SELECTORS.CREW_TAB_DETAIL}>
      <h3>${COURSE_NAME_KR[course]} 크루 목록</h3>
      <table id="crew-table" border="1">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          ${crewList.map((name, idx) => `
          <tr>
            <td>${idx + 1}</td>
            <td>${name}</td>
            <td>
              <button data-course=${course} data-idx=${idx} class="delete-crew-button">삭제</button>
            </td>
          </tr>
          `,).join('')}
        </tbody>
      </table>
    </section>
`;

const TEAM_TAB = `
<section>
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select id="course-select">
          <option value="frontend">프론트엔드</option>
          <option value="backend">백엔드</option>
        </select>
        <select id="mission-select">
          <option value="baseball">숫자야구게임</option>
          <option value="racingcar">자동차경주</option>
          <option value="lotto">로또</option>
          <option value="shopping-cart">장바구니</option>
          <option value="payments">결제</option>
          <option value="subway">지하철노선도</option>
          <option value="performance">성능개선</option>
          <option value="deploy">배포</option>
        </select>
        <button id="show-team-matcher-button">확인</button>
      </form>
    </section>
`

const TEAM_NUMBER_INPUT_SECTION = (courseKr,mission,crewList) =>`
<section class=${SELECTORS.CREW_TAB_DETAIL}>
      <h3>${courseKr} ${mission} 미션의 팀 매칭</h3>
      <div>
        <div>
          <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
          <form>
            <label>1팀당 인원 수</label>
            <input id="team-member-count-input" type="number" />
            <button id="match-team-button">팀 매칭</button>
          </form>
        </div>
        <h4>크루 목록</h4>
        <ul>
        ${crewList.map((crewName)=>`<li>${crewName}</li>`).join("")}
        </ul>
      </div>
    </section>
`
export { HEADER, MAIN, CREW_TAB, CREW_MANAGE_DETAIL, CREW_MANAGE_LIST, TEAM_TAB , TEAM_NUMBER_INPUT_SECTION};
