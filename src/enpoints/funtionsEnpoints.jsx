const pruebaEnpointRickYMorty = () => {
    return fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .catch(e => console.log("No funciona:", e));
  };

const productosIndumentaria = () =>{
    return fetch('https://apimocha.com/compraventa/indumentaria',{
    method: "GET",
    headers: { "Content-Type": "application/json", "accept": "application/json" },
    
})
.then(res=> res.json())
.catch(e => console.log("no funcina", e))
}

export default {pruebaEnpointRickYMorty, productosIndumentaria};