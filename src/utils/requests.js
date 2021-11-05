const API_URL = "http://localhost:1717";

export async function getStudentsById(id){
  try{
    const response = await fetch(`${API_URL}/students/${id}`);
    return response;
  } catch{
    return {ok: false};
  }
}