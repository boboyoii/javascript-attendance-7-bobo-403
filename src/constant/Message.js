const PREFIX_ERROR = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  invalid__format: `${PREFIX_ERROR} 잘못된 형식을 입력하였습니다.\n`,
  invalid_name: `${PREFIX_ERROR} 등록되지 않은 닉네임입니다.\n`,
  invalid_date: (date) => `${PREFIX_ERROR} ${date}은 등교일이 아닙니다.\n`,
  invalid_edit: `${PREFIX_ERROR} 아직 수정할 수 없습니다.\n`,
  invalid_hour: `${PREFIX_ERROR} 캠퍼스 운영 시간에만 출석이 가능합니다.\n`,
  invalid_attendance: `${PREFIX_ERROR} 이미 출석을 확인하였습니다. 필요한 경우 수정 기능을 이용해 주세요.\n`,
});
