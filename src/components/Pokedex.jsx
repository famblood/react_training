import React, { useEffect, useState } from 'react'
import './Pokedex.css'
import { fetchPokemon, fetchPokemonB } from '../services/fetchPokemon'

export default function Pokedex() {
    const [pokeDex, setPokeDex] = useState(undefined)
    const [pokeDexB, setPokeDexB] = useState(undefined)
    const [value, setValue] = useState(undefined);
    let img = ""
    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(e.target.value)
    };
    useEffect(() => {
        const fetchPokeData = async () => {
            let pokeData = await fetchPokemon(value)
            if (pokeData != undefined) {
                console.log(pokeData)
                setPokeDex({
                    name: pokeData?.name,
                    height: pokeData?.height,
                    abilities: pokeData?.moves,
                    id: pokeData?.id,
                    img: pokeData?.sprites.other.showdown.back_default,
                    stats: pokeData?.stats
                })
            } else {
                setPokeDex(undefined)
            }
        }
        const fetchPokeDataB = async () => {
            let pokeDataB = await fetchPokemonB(value)
            console.log(pokeDataB)
            if (pokeDataB != undefined) {
                setPokeDexB({
                    name: pokeDataB?.name,
                    height: pokeDataB?.height,
                    abilities: pokeDataB?.abilities,
                    id: pokeDataB?.id,
                    img: pokeDataB?.sprites.other.showdown.front_default,
                    stats: pokeDataB?.stats
                })
            } else {
                setPokeDexB(undefined)
            }
        }
        fetchPokeData()
        fetchPokeDataB()
        return () => { }
    }, [value])


    return (
        <>
            <div className='detailB'>
                <b>zekrom</b>
                <hr />
                <p className='statsB'>HP: {pokeDexB?.stats[0].base_stat}/{pokeDexB?.stats[0].base_stat}</p>
            </div>
            <div>
                <img className='imgB' src={`${pokeDexB?.img}`} /><br />
              
            </div>

            <div className='detail'>
                <b>{pokeDex?.name} &nbsp;</b>
                <hr />
                <p className='stats'>HP: {pokeDex?.stats[0].base_stat}/{pokeDex?.stats[0].base_stat}</p>
            </div>
            <div className='divMain'>
                {pokeDex != undefined ? (
                    <>
                        <br />
                        <img className='img' src={`${pokeDex?.img}`} /><br />
                        <br />
                        <select name="poke" id="poke" value={value} onChange={handleChange}>
                            <option value="Select Pokemon" hidden>Select Pokemon</option>
                            <option value="dialga" >Dialga</option>
                            <option value="hydreigon">Hydreigon</option>
                            <option value="haxorus">Haxorus</option>
                            <option value="eternatus">Eternatus</option>
                            <option value="yveltal">Yveltal</option>
                            <option value="articuno">Articuno</option>
                            <option value="xerneas">Xerneas</option>
                            <option value="garchomp">Garchomp</option>
                            <option value="copperajah">Copperajah</option>
                            <option value="reshiram">Reshiram</option>
                        </select>

                    </>
                ) : (
                    <>
                        <select name="poke" id="poke" value={value} onChange={handleChange}>
                            <option value="Select Pokemon" hidden>Select Pokemon</option>
                            <option value="dialga" >Dialga</option>
                            <option value="hydreigon">Hydreigon</option>
                            <option value="haxorus">Haxorus</option>
                            <option value="eternatus">Eternatus</option>
                            <option value="yveltal">Yveltal</option>
                            <option value="articuno">Articuno</option>
                            <option value="xerneas">Xerneas</option>
                            <option value="garchomp">Garchomp</option>
                            <option value="copperajah">Copperajah</option>
                            <option value="reshiram">Reshiram</option>
                        </select>
                    </>
                )
                }
            </div>
            <div className='mainDiv'>
                <div className='skill'>
                    {pokeDex?.abilities.map((v, i) => (resultData(v.move.name, i)))}
                </div>
            </div>


        </>

    )
}

function resultData(v, i) {
    if (i + 1 < 5) {
        return (

            <div key={i} className='divSkill'>
                &nbsp;{i + 1}: {v}&nbsp;
            </div>
        )
    }

}