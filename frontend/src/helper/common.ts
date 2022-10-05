export function isNotEmptyObject<T>(Obj: T) {
  for (const i in Obj) return true;
  return false;
}

export function capitalizeString(string: string) {
  return string[0].toUpperCase() + string.substring(1);
}

interface inputObject {
  readonly [key: string]: any
}
export function freezeEntrireObjects(input: inputObject) {
  for (const value of Object.values(input)) {
    if (typeof value === 'object') {
      freezeEntrireObjects(value)
    }
    Object.freeze(input);
  }
}