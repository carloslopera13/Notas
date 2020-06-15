import React from 'react'

export default function Resultado(props) {
    const {definitiva}=props
    return (
        <div className=" mb-3" >
            <label >Definitiva: {definitiva}</label>
        </div>
        
    )
}
