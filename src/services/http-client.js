const baseUrl = 'https://api.themoviedb.org/3'
const api_key = "?api_key=893075893339d08fb28f13b616a70bff&language=en-US"


const HttpClint = async (url) => {
    try{
        const res = await fetch(baseUrl+ url +api_key);
        if(!res.ok){
            throw new Error (res.status)
         }
         const finalRes = await res.json();
         console.log(finalRes);
         return finalRes
         }catch(e){
       console.log(e);
         }
     
}
export {
  baseUrl,
  api_key
}

export default HttpClint;
