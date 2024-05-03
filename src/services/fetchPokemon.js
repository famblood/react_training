import axios from "axios"


export async function fetchPokemon(pokeName) {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        console.log(res)
        return res?.data
    } catch (error) {
        return Promise.reject()
    }
}

export async function fetchPokemonB() {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/zekrom`);
        console.log(res)
        return res?.data
    } catch (error) {
        return Promise.reject()
    }
}