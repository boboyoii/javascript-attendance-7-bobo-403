const PREFIX_ERROR = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  invalid__format: `${PREFIX_ERROR} 잘못된 형식을 입력하였습니다.\n`,
  invalid_name: `${PREFIX_ERROR} 등록되지 않은 닉네임입니다.\n`,
  invalid_date: (date, day) =>
    `${PREFIX_ERROR} 12월 ${date}일 ${day}요일은 등교일이 아닙니다.\n`,
  invalid_edit: `${PREFIX_ERROR} 아직 수정할 수 없습니다.\n`,
  invalid_hour: `${PREFIX_ERROR} 캠퍼스 운영 시간에만 출석이 가능합니다.\n`,
  invalid_attendance: `${PREFIX_ERROR} 이미 출석을 확인하였습니다. 필요한 경우 수정 기능을 이용해 주세요.\n`,
});

export const HOLIDAY_DATE = [1, 7, 8, 14, 15, 21, 22, 25, 28, 29];

export const DAY = Object.freeze({
  2: '월',
  3: '화',
  4: '수',
  5: '목',
  6: '금',
});

export const FEATURE_SELECTION = ['1', '2', '3', '4', 'Q'];

export const PROGRESS_MESSAGE = Object.freeze({
  enter_feature_num: (
    date,
    day
  ) => `오늘은 12월 ${date}일 ${day}입니다. 기능을 선택해 주세요.\n 1. 출석 확인\n
2. 출석 수정\n
3. 크루별 출석 기록 확인\n
4. 제적 위험자 확인\n
Q. 종료\n`,
  enter_name: '닉네임을 입력해 주세요.\n',
  enter_time: '등교 시간을 입력해 주세요.\n',
  enter_edit_name: '출석을 수정하려는 크루의 닉네임을 입력해 주세요.\n',
  enter_edit_date: '수정하려는 날짜(일)를 입력해 주세요.\n',
  enter_edit_time: '언제로 변경하겠습니까?\n',
});
