import React, { useEffect, useRef, useState }    from "react";
import check                    from "../../assets/images/check.svg";
import { Link }                 from "react-router-dom";
import { useForm }              from "../../hooks/useForm";
import { useDispatch, useSelector }  from "react-redux";
import { fillFormOne } from '../../actions/fillForm';


  const tipoDocumento = ["DNI","PASAPORTE","RUC"]; 
  
  export const StepOne = () => {
    //ubigeo
    const [ depa,setDepa ] = useState([])
    const [ provi,setProvi ] = useState([])
    const [ distri,setDistri ] = useState([])

    //ref DOM
    const dep = useRef()
    const dis = useRef()
    
    //props to sent data to global state
    const dispatch = useDispatch();
    const state = useSelector(state => state.formOne)
    
    //forms
    const [valuesForm, handleInputChange] = useForm( state )
    const {
      aMaterno,
      aPaterno,
      direction,
      dni,
      email,
      name,
      phone,
    } = valuesForm;
  
    //set data to global state
    const sumbitForm = () =>{
      dispatch(fillFormOne(valuesForm))
    }

    //fetch departaments
      useEffect(() => {
        const handleDepart = async()=> {
          const data = await fetch('https://liwru-pollux-apis.herokuapp.com/api/departamentos')
          const response = await data.json()
          setDepa([...response])
          
          console.log(depa)
      
        }
        if (dep) {
          const handleProvince = async()=> {
            const data = await fetch('https://liwru-pollux-apis.herokuapp.com/api/provincias')
            const response = await data.json()
            const depaValue = dep.current.value
            console.log(depaValue)
            const filtros = response.filter(item => item.departamento.nombre === depaValue)
            console.log(filtros)
            setProvi(filtros)
          }
          handleProvince()
        }
        if (dis) {
          const handleDistrit = async()=> {
            const data = await fetch('https://liwru-pollux-apis.herokuapp.com/api/distritos')
            const response = await data.json()
            const disValue = dis.current?.value
            console.log(disValue)
            const filtros = response.filter(item => item.provincia.nombre === disValue)
            console.log(filtros)
            setDistri(filtros)
          }
          handleDistrit()
        }
        handleDepart()
      },[valuesForm,dep])
  
  
  return (
    <div className="liwru">
      <div className="liwru-home step xs-height">
        <div className="liwru-steps">
          <div className="liwru-steps-step completed">
            <span>
              <img src={check} alt="completado!" />
            </span>
          </div>
          <div className="liwru-steps-step current">
            <span>2</span>
          </div>
          <div className="liwru-steps-step">
            <span>3</span>
          </div>
          <div className="liwru-steps-step">
            <span>4</span>
          </div>
        </div>
        <h2>Datos personales</h2>
        <form>
          <div className="liwru-forms steps">
            <div className="liwru-forms-row">
              <div className="liwru-forms-group">
                <strong>Nombres *</strong>
                <input 
                  type="text" 
                  placeholder="Ingrese sus nombres"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  />
              </div>
              <div className="liwru-forms-group">
                <strong>Apellido Paterno *</strong>
                <input 
                  type="text" 
                  placeholder="Ingresa tu apellido paterno" 
                  name="aPaterno"
                  value={aPaterno}
                  onChange={handleInputChange}
                  />
              </div>
              <div className="liwru-forms-group">
                <strong>Apellido Materno *</strong>
                <input 
                  type="text" 
                  placeholder="Ingresa tu apellido materno" 
                  name="aMaterno"
                  value={aMaterno}
                  onChange={handleInputChange}
                  />
              </div>
            </div>

            <div className="liwru-forms-row">
              <div className="liwru-forms-group">
                <strong>Tipo de Documento *</strong>
                <select name="typeDocument" onChange={handleInputChange} >
                  <option value="">Seleccione</option>
                  {
                    tipoDocumento.map( (item) => (
                      <option key={item} value={item}>{item}</option>
                    ))
                  }
                </select>
              </div>
              <div className="liwru-forms-group">
                <strong>Nro. de Documento *</strong>
                <input 
                  maxLength="10"
                  type="number" 
                  placeholder="Ingresa tu nro. de documento" 
                  name="dni"
                  value={dni}
                  onChange={handleInputChange}
                  size= '6'
                  />
              </div>
              <div className="liwru-forms-group">
                <strong>Correo electrónico *</strong>
                <input 
                  type="email" 
                  placeholder="Ingresa tu correo" 
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  />
              </div>
            </div>

            <div className="liwru-forms-row">
              <div className="liwru-forms-group">
                <strong>Tipo de Respuesta *</strong>
                <select name="typeResponse" onChange={handleInputChange} >
                  <option value="">Seleccione</option>
                  <option value="0">Por correo electrónico</option>
                  <option value="1">Por llamada telefónica</option>
                </select>
              </div>
              <div className="liwru-forms-group">
                <strong>Dirección *</strong>
                <input 
                  type="text" 
                  placeholder="Ingresa tu dirección" 
                  name="direction"
                  value={direction}
                  onChange={handleInputChange}
                  />
              </div>
              <div className="liwru-forms-group">
                <strong>Teléfono *</strong>
                <input 
                  type="number" 
                  placeholder="Ingresa tu teléfono" 
                  name="phone"
                  value={phone}
                  onChange={handleInputChange}
                  />
              </div>
            </div>

            <div className="liwru-forms-row">
              <div className="liwru-forms-group">
                <strong>Departamento *</strong>
                <select ref={dep}  name="department"   onChange={handleInputChange} >
                  <option value="">Seleccione</option>
                  {
                    depa.map( (item) => (
                      <option  key={item.nombre} value={item.nombre}>{item.nombre}</option>
                    ))
                  }
                </select>
              </div>
              <div className="liwru-forms-group">
                <strong>Provincia *</strong>
                <select ref={dis} name="province" onChange={handleInputChange} >
                  <option value="">Seleccione</option>
                  {
                    provi.map( (item) => (
                      <option key={item.nombre} value={item.nombre}>{item.nombre}</option>
                    ))
                  }
                </select>
              </div>
              <div className="liwru-forms-group">
                <strong>Distrito *</strong>
                <select name="district" onChange={handleInputChange} >
                  <option value="">Seleccione</option>
                  {
                    distri.map( (item,index) => (
                      <option key={`${item.nombre}-${index}`} value={item.nombre}>{item.nombre}</option>
                    ))
                  }
                </select>
              </div>
            </div>
          </div>
        </form>
        <div className="liwru-actions fixed">
          <Link to="/step-zero" className="liwru-actions-goback">
            Volver
          </Link>
          <Link 
            to="/step-two" 
            className="liwru-actions-goon"
            onClick={sumbitForm}
            >
            Siguiente
          </Link>
        </div>
      </div>
    </div>
  );
};

// figma: paso 1
