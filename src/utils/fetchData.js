export const exerciseOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': 'c297d58718msh73e63c4b0f67201p1ad922jsn47c5631489f9',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };



 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c297d58718msh73e63c4b0f67201p1ad922jsn47c5631489f9',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {
    const response =  await fetch(url, options);
    const data = await response.json();

    return data;
};