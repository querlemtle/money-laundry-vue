import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
require("dayjs/locale/zh-tw");

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      return datetime ? dayjs(datetime).locale("zh-tw").fromNow() : "-";
    },
  },
};

export const customDateFormatter = {
  filters: {
    customDateFormat(datetime) {
      return datetime ? dayjs(datetime).locale("zh-tw").format("a h:mm") : "-";
    },
  },
};
