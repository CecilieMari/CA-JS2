import api from "../constants/api.js";

export async function getBooks() {
    const response = await fetch(api);
    const results = await response.json();
    return results;
}