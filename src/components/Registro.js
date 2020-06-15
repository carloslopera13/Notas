import React, { Component } from 'react'
import Listado from './Listado'
import Buscar from './Buscar'

export default class Registro extends Component {
    state={
        codigo:"",
        nombre:"",
        parcial:"",
        final:"",
        seguimiento:"",
        estado:"",
        arrAlumno:[],
        pSeguimiento: 0.50,
        pParcial: 0.25,
        pFinal: 0.25,
        searchText:"",
        filtro:""
      }

      handleChange = (e) => {
        e.preventDefault()
         const name = e.target.name
         const value = e.target.value
         let bandera = false
         if(name === 'parcial' || name === 'seguimiento' || name === 'final' ){
          if(value > 0 && value < 5){
          bandera= false
          }else{
            bandera= true
          } 
         }

          !bandera ?
          this.setState({
            ...this.state, [name]:value
          }) 
          : alert('La nota debe estar entre 0 y 5')
      }

      bBuscar = (e) => {
        e.preventDefault()
        this.setState({
          filtro: this.state.searchText
        })

      }

      onClick = (e) => {
          e.preventDefault()
          const notaSeguimiento = this.state.seguimiento * this.state.pSeguimiento 
          const notaParcial = this.state.parcial * this.state.pParcial 
          const notaFinal = this.state.final * this.state.pFinal
          const notaMateria = (parseFloat(notaSeguimiento,10 ) + parseFloat(notaParcial,10)  + parseFloat(notaFinal,10))
          let bGuardar= false
          this.state.arrAlumno.forEach(alum => {
            if(this.state.codigo === alum.codigo)
            {
              bGuardar= true
            }else{
              bGuardar= false
            }           
          });
          !bGuardar ?           
          this.setState({
            arrAlumno:[...this.state.arrAlumno,{
                codigo: this.state.codigo,
                nombre: this.state.nombre,
                estado: this.state.estado,
                definitiva: notaMateria 
            }],
            nombre:'',
            codigo:'',
            parcial:'',
            final:'',
            seguimiento:'',
            notaMateria: ''
        }) : alert('El documento ya existe, porfavor corregirlo')

      }



    render() {
        const {parcial, final, seguimiento, codigo, nombre,arrAlumno, searchText, filtro}= this.state
        return (

          <div className="row">
            <div className="col-md-6">
            <div className="col-md-12 order-md-1">
            <form className="needs-validation" onSubmit={this.onClick} >
              <div className="row">
                  
                <div className="col-md-8 mb-3">
                  <label >Codigo</label>
                  <input type="number" 
                  className="form-control" 
                  name="codigo" 
                  placeholder="Documento" 
                  value={codigo}
                  onChange={this.handleChange} required />
  
                  <label >Alumno</label>
                  <input type="text" 
                  className="form-control" 
                  name="nombre"
                  value={nombre} 
                  placeholder="Nombres y Apellidos" 
                  onChange={this.handleChange} required />
                  <br/>
                  <div className="col-md-8 mb-3">
                    <label >Parcial</label>
                    <input type="number" 
                    className="form-control" 
                    name="parcial" 
                    value={parcial} 
                    placeholder="" 
                    onChange={this.handleChange} required />
  
                    <label >Final</label>
                    <input type="number" 
                    className="form-control" 
                    name="final" 
                    value={final} 
                    placeholder="" 
                    onChange={this.handleChange} required />
                    
                    <label >Seguimiento</label>
                    <input type="number" 
                    className="form-control" 
                    name="seguimiento"
                    value={seguimiento}  
                    placeholder="" 
                    onChange={this.handleChange} required />
                    <br />
                    <button type="submit" className="btn btn-outline-primary">Guardar</button>
                  </div>
                  <br/> 
                </div>  
              </div>    
            </form>  
          </div> 
        </div>
            <div className="col-md-6">
             <Buscar bBuscar={this.bBuscar} handleChange={this.handleChange} searchText={searchText} arrAlumno={arrAlumno}/> 
             <br />
             <Listado  filtro={filtro} arrAlumno={arrAlumno}/>
            </div>
          </div>
        )
    }
}

