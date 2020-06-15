import React from 'react'

export default function Listado(props) {
    const {arrAlumno,filtro}=props
    const filter = arrAlumno.filter(alum => alum.codigo.includes(filtro));
    return (
        <table className="table">
            <thead className="thead-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Nota Final</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
            {
              filter.map((alums, index) => 
              <tbody>
               <tr>
                <td>{alums.nombre}</td>
                 <td>{alums.definitiva}</td> 
                <td style={{background: alums.definitiva >= 3 ? 'green'  : 'red'   }} >{alums.definitiva >= 3 ? 'Gano'  : 'Perdio'}  </td>
                </tr>
               </tbody>
              )  
            }
        </table>

    
    )
}
