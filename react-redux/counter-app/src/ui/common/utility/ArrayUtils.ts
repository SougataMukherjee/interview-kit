export function isArrayNullOrEmpty<T>(arrayObject:T[]):boolean{
    return !Array.isArray(arrayObject)|| arrayObject.length == 0
}