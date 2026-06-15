// Default available time slots when admin hasn't configured custom slots.
export const DEFAULT_SLOTS = [
  '10:00 AM - 11:00 AM',
  '11:30 AM - 12:30 PM',
  '1:00 PM - 2:00 PM',
  '2:30 PM - 3:30 PM',
  '4:00 PM - 5:00 PM',
  '5:30 PM - 6:30 PM',
  '6:30 PM - 7:30 PM',
  '8:00 PM - 9:00 PM',
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
