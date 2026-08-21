export function logsByDate(logs) {
  return new Map(logs.map((log) => [log.date, log]))
}