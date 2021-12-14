import React, { useEffect, useRef, useState }    from "react";
import check                    from "../../assets/images/check.svg";
import { Link }                 from "react-router-dom";
import { useForm }              from "../../hooks/useForm";
import { useDispatch, useSelector }  from "react-redux";
import { fillFormOne, postFormOne } from '../../actions/fillForm';
import Swal from 'sweetalert2'
import { idAgrav } from "../../actions/idQuery";

  const tipoDocumento = ["DNI","PASAPORTE","RUC"]; 
  Swal.fire(
    'Por favor llena todos los campos para validar tu reclamo/queja!',
    'Aceptar!',
  )
  export const StepOne = () => {
    //ubigeo
    const [ depa,setDepa ] = useState([])
    const [ provi,setProvi ] = useState([])
    const [ distri,setDistri ] = useState([])

    //ref DOM
    const dep = useRef()
    const pro = useRef()
    const dis = useRef()

    const idDepa = useRef()

    
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
          // const depValue = dep.current?.value.split('-')
          setDepa([...response])
          
          console.log(depa)
      
        }
        if (dep) {
          const handleProvince = async()=> {
            const data = await fetch('https://liwru-pollux-apis.herokuapp.com/api/provincias')
            const response = await data.json()
            const depaValue = dep.current?.value.split('-') || ''
            console.log(depaValue)
            const filtros = response.filter(item => item.departamento.nombre === depaValue[0])
            console.log(filtros)
            setProvi(filtros)
          }
          handleProvince()
        }
        if (pro) {
          const handleDistrit = async()=> {
            const data = await fetch('https://liwru-pollux-apis.herokuapp.com/api/distritos')
            const response = await data.json()
            let disValue = pro.current?.value.split('-') || ''
            console.log(disValue)
            const filtros = response.filter(item => item.provincia.nombre === disValue[0])
            console.log(filtros)
            setDistri(filtros)
          }
          handleDistrit()
        }
        handleDepart()
      },[depa]) //depa

    const handlePostOne = async (e) => {
      const idDepa = valuesForm.department.split('-')[1]
      const idPro = valuesForm.province.split('-')[1]
      const idDis = valuesForm.district.split('-')[1]
      // const nuevoPost = {
      //   clienteNombre: valuesForm.name,
      //   clienteApeMat: valuesForm.aMaterno,
      //   clienteApePat: valuesForm.aPaterno,
      //   clienteEmail: valuesForm.email,
      //   clienteTelefono: valuesForm.phone,
      //   clienteDireccion: valuesForm.direction,
      //   clienteNroDoc: valuesForm.dni,
      //   estatusEdad: 1,
      //   estado: 1,
      //   idTipoDoc: 4,
      //   idApoderado: null,
      //   idDepartamento: idDepa*1,
      //   idProvincia: idPro*1,
      //   idDistrito: idDis*1,
      //   createdAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`,
      //   updatedAt: null
      // }

      //
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "clienteNombre": valuesForm.name,
        "clienteApeMat": valuesForm.aMaterno,
        "clienteApePat": valuesForm.aPaterno,
        "clienteEmail": valuesForm.email,
        "clienteTelefono": valuesForm.phone,
        "clienteDireccion": valuesForm.direction,
        "clienteNroDoc": valuesForm.dni,
        "estatusEdad": 1,
        "estado": 1,
        "idTipoDoc": 4,
        "idApoderado": null,
        "idDepartamento": idDepa*1,
        "idProvincia": idPro*1,
        "idDistrito": idDis*1,
        "updatedAt": null
      });

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://liwru-pollux-apis.herokuapp.com/api/agraviados", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result.idAgraviado)
    dispatch(idAgrav(result.idAgraviado))
    Swal.fire(
      'Agraviado guardado!',
      'Clcik en aceptar!',
      'Exitoso'
    )
  })
  .catch(error => {
    console.log('error', error)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No se puedo guardar, intente más tarde!',
    })
  });
      //
      //   .then(result => {
      //     Swal.fire('Agraviado guardado!','You clicked the button!','success')
      //     console.log(result,'resultresultresultresultresult')
      //     // dispatch(idAgrav(result.idAgraviado))
      //   })
      //   .catch(error => console.log('error', Swal.fire({
      //     icon: 'error',
      //     title: 'Oops...',
      //     text: error
      //   })));

      console.log(valuesForm)
      console.log(idDepa)

    }
  
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
                      <option  key={item} value={item}>{item}</option>
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
                <select ref={dep}  name="department"  onChange={handleInputChange} >
                  <option value="">Seleccione</option>
                  {
                    depa.map( (item) => (
                      <option  key={item.nombre} value={`${item.nombre}-${item.idDepartamento}`} >{item.nombre}</option>
                    ))
                  }
                </select>
              </div>
              <div className="liwru-forms-group">
                <strong>Provincia *</strong>
                <select ref={pro} name="province" onChange={handleInputChange} >
                  <option value="">Seleccione</option>
                  {
                    provi.map( (item) => (
                      <option key={item.nombre} value={`${item.nombre}-${item.idProvincia}`}>{item.nombre}</option>
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
                      <option key={`${item.nombre}-${index}`} value={`${item.nombre}-${item.idDistrito}`}>{item.nombre}</option>
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
            onClick={()=>{
              handlePostOne()
              sumbitForm()
            }}
            >
            Siguiente
          </Link>
        </div>
      </div>
    </div>
  );
};

// figma: paso 1
