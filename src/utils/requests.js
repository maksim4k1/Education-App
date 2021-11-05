const API_URL = "http://localhost:1717";

export async function getStudentsById(id){
  const response = await fetch(`${API_URL}/students/${id}`);

  return response;
}