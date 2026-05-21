// Default available time slots when admin hasn't configured custom slots.
export const DEFAULT_SLOTS = [
  '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00',
];

export function todayYmd(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function addDays(d: Date, n: number): Date {
  const copy = new Date(d);
  copy.setDate(copy.getDate() + n);
  return copy;
}
