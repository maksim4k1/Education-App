export function setProfileData(token, data){
  localStorage.setItem("profileData", JSON.stringify(data));
  localStorage.setItem("token", token);
}

export function getToken(){
  return localStorage.getItem("token");
}

export function getProfileData(){
  const data = localStorage.getItem("profileData")
  return JSON.parse(data);
}

export function deleteProfileData(){
  localStorage.removeItem("token");
  localStorage.removeItem("profileData");
}