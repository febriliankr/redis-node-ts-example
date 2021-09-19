import { DateTime, Settings } from "luxon";

function timestampToJakartaTimeString(timestamp: any) {
  if (!timestamp) {
    return "";
  }
  //   7 hours in miliseconds
  const sevenHoursMs = 1000 * 3600 * 7;

  const date = new Date(timestamp + sevenHoursMs);
  const isoDate = date.toISOString();
  const jakartaDateString = DateTime.fromISO(isoDate)
    .setLocale("id")
    .setZone("Asia/Jakarta")
    .toLocaleString(DateTime.DATE_HUGE);

  const jakartaTimeString = DateTime.fromISO(isoDate)
    .setLocale("id")
    .toLocaleString(DateTime.TIME_24_WITH_SHORT_OFFSET);

  const theString = `${jakartaDateString} ${jakartaTimeString}`;

  return theString;
}

export { timestampToJakartaTimeString };
