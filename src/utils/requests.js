const API_URL = "http://localhost:1717";

export async function getData(url){
  const response = await fetch(`${API_URL}${url}`);
  const data = await response.json();

  return data;
}