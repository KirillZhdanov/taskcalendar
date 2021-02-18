export function dateFormat(year: number, month: number, day: number) {
  const m = month < 10 ? `0${month}` : month;
  const d = day < 10 ? `0${day}` : day;
  return `${d}.${m}.${year}`;
}
