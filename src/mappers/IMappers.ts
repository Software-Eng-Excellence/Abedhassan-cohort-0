export interface IMapper<T, U> {
    map(data: T): U;        // Converts data from type T to type U
 
}