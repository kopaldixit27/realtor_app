import axios from "axios";

export const baseUrl='https://bayut.p.rapidapi.com'


export const fetchApi = async function (url){
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '989635b14dmshcc32c58171ac9f0p17c6f7jsn4490101c4a21',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
}