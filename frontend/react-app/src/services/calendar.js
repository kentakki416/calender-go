import dayjs from "dayjs";

export const createCalendar = month => {
  // 今月の最初の日を追加
  const firstDay = getMonth(month);
  const firstDayIndex = firstDay.day(); // 曜日 0(日曜日)~6（土曜日）

  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");

      return day;
    });
};

/**
 * 同じ日にちか判定する関数
 * @param {object} d1 
 * @param {object} d2 
 * @returns boolean
 */
export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
}

/**
 * 同じ月か判定する
 * @param {object} m1 
 * @param {object} m2 
 * @returns boolean
 */
export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};

/**
 * 月始めの日か判定する
 * @param {object} day 
 * @returns boolean
 */
export const isFirstDay = day => day.date() === 1;

/**
 * その月のdayjsインスタンスを返す
 * @param {Object} year 
 * @param {Object} month
 * @returns Dayjs
 */
export const getMonth = ({ year, month}) => {
  return dayjs(`${year}-${month}`);
}

/**
 * 翌月をの返す関数
 * @param {object} month 
 * @returns 
 */
export const getNextMonth = month => {
  const day = getMonth(month).add(1, "month");
  return formatMonth(day);
}

/**
 * 前月を返す関数
 * @param {object} month 
 * @returns object
 */
export const getPreviousMonth = month => {
  const day = getMonth(month).add(-1, "month");
  return formatMonth(day);
}

/**
 * 今月を返す関数
 * @param {object} month 
 * @returns object
 */
export const getCurrentMonth = () => {
  const today = dayjs();
  return formatMonth(today);

}

/**
 * 月と年を格納するオブジェクトにformatする関数
 * @param {object} day 
 * @returns object 
 */
export const formatMonth = day => ({
  month: day.month() + 1,
  year: day.year()
});