import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data as T;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

const data = await fetchData("https://jsonplaceholder.typicode.com/todos/1");

console.log("====================================");
console.log(data);
console.log("====================================");
