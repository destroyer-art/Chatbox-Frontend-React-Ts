export function isNotEmptyObject<T>(Obj: T) {
  for (const i in Obj) return true;
  return false;
}

export function capitalizeString(string: string) {
  return string[0].toUpperCase() + string.substring(1);
}
