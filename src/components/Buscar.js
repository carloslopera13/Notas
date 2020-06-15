import React from 'react'

export default function Buscar(props) {
  const {searchText, handleChange,bBuscar} = props
  
    return (
        <div className="col-md-12 order-md-1">
            <form>
             <div>
              <input type="number" 
              onChange={(e) => handleChange(e)}
              className="form-control" 
              placeholder="🔎 Buscar..." 
              name="searchText"
              value={searchText}
              
              />
              
              <button  onClick={(e) => bBuscar(e)} className="btn btn-outline-secondary" type="submit" > Buscar</button>
             </div>
           </form>
        </div>

    )
}
