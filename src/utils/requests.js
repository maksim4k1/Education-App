const API_URL = "http://localhost:1717";

export async function getStudentsById(id){
  try{
    const response = await fetch(`${API_URL}/students/${id}`);
    return response;
  } catch{
    return {ok: false};
  }
}

export async function addNewStudent(classroom, data){
  try{
    const body = {
      name: data.name,
      level: data.level,
      score: Number(data.score)
    }

    const response = await fetch(`${API_URL}/students/${classroom}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    return response;
  } catch{
    return {ok: false};
  }
}

export async function loginRequest(data){
  const body = {
    username: data.username,
    password: data.password
  }

  try{
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    return response;
  } catch{
    return {ok: false};
  }
}

export async function loginByToken(token){
  try{
    const response = await fetch(`${API_URL}/me`, {
      method: "GET",
      headers: {
        "X-Auth": token
      }
    });

    return response;
  } catch{
    return {ok: false};
  }
}