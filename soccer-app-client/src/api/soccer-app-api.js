import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://'+ window.location.hostname +':8081/soccer-app/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
  
  export async function getTeams() {
    try {
      const res = await axiosInstance.get("/")
        
      if (res && res.data.length > 0) {
        return res.data;
      } else {
        return null;
      };
  
    } catch (err) {
      console.log('error: ', err);
    }
  }
    
  export async function updateTeamFavorite(teamDetalis) {
    try {
      const res = await axiosInstance.put(`/update`, teamDetalis)
        
      if (res && res.status == 200) {
        return res.data;
      } else {
        return null;
      };
  
    } catch (err) {
      console.log('error: ', err);
    }
  }

  
