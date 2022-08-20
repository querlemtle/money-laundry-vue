import moment from "moment";
import "moment/locale/zh-tw";

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      return datetime ? moment(datetime).fromNow() : "-";
    },
  },
};

export const customLongDateFormatter = {
  filters: {
    customLongDateFormat(datetime) {
      return datetime ? moment(datetime).format("a h:mm・ll") : "-";
    },
  },
};
