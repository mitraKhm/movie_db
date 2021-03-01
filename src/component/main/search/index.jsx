
//import styles 
import styles from "./style.module.css"

const SearchComp = () => {



     const getData = async ( url) => {
      try{
        const res = await fetch(url)
        if(!res.ok){
          throw new Error (res.status)
         }
        const finalRes = await res.json();
        const pop = finalRes;
        console.log(finalRes);
  

      }catch(e){
    console.log(e);
      }
    }
    const handleValue = (e) => {
        if (e.keyCode === 13) {
            const inputValue = e.target.value.replace(/ /g, '%');
     
            for (var i = 1; i < 15; i++) {
                const url = `https://api.themoviedb.org/3/search/multi?api_key=893075893339d08fb28f13b616a70bff&language=en-US&query=${inputValue}&page=${i}&include_adult=false`;
                getData(url)
                console.log(url);
            } 
            
     
}
    }
    return (
        <div className={styles.searchContainer}>
            <input className={styles.searchInput} onKeyDown={ (e) => handleValue(e)} type='text' placeholder='search movie or ...' />
            <button >search</button>

        </div>
        
        )
}


export default SearchComp;