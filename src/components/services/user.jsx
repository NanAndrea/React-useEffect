import { fetchAndParse } from "./utils";

export function GetUsers (){
    return fetchAndParse ("https://jsonplaceholder.typicode.com/users");
     
}