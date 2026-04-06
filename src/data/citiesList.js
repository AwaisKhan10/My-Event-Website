import { mockEvents } from "./mockEvents";

export const EVENT_CITIES = [
  ...new Set(mockEvents.map((e) => e.city)),
].sort();

/** Include detected / saved city even if not in demo events yet */
export function getCityOptionsForUi(preferredCity) {
  const s = new Set(EVENT_CITIES);
  if (preferredCity?.trim()) s.add(preferredCity.trim());
  return [...s].sort();
}
