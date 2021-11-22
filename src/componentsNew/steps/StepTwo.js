import React, { useState } from "react";
import check from "../../assets/images/check.svg";
import trash from "../../assets/images/trash.svg";
import plus from "../../assets/images/plus.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { fillFormTwo } from '../../actions/fillForm';

export const StepTwo = () => {

  const dispatch = useDispatch()

  const valuesForm = useSelector(state => state.formTwo)
  
  let [values, handleInputChange] = useForm( valuesForm )
  
  // const {
  //     typeIncidence,
  //     reason,
  //     establishmentType,
  //     establishment,
  //     dateIncidence,
  //     dateAprox,
  //     docIncidence,
  //     files,
  //     detailReclam,
  //     request,
  // } = values;

const reasons        = ["rea1","rea2"];
const establishments = ["esta1","esta2"];

const [incidentState, setIncidente] = useState(true);
const [establishmentState, seteStablishment]      = useState(true);
const [dateState, setDate]          = useState(true);
const [documentState, setDocument]  = useState(true);

const [ docFiles, setDocFiles]  = useState([]);

const handleIncidentChange = () => setIncidente(!incidentState);
const handleReasonChange = () => seteStablishment(!establishmentState);
const handleDateChange = () => setDate(!dateState);
const handleDocumentChange = () => setDocument(!documentState);

const handleDocFilesChange = (e) => setDocFiles([...docFiles,e.target.files[0]]);

incidentState ? values = { ...values, typeIncidence: "1" } : values = { ...values, typeIncidence: "2" }
establishmentState ? values = { ...values, establishmentType: "Fisico" } : values = { ...values, establishmentType: "Virtual" }
dateState ? values = { ...values, dateAprox: "1" } : values = { ...values, dateAprox: "2" }
documentState ? values = { ...values, docIncidence: "1" } : values = { ...values, docIncidence: "2" }

docFiles ? values = { ...values, files: [...docFiles] } : values = { ...values }

const handleSubmit = () => dispatch(fillFormTwo(values))


  return (
    <div className="liwru">
      <div className="liwru-home step xs-height">
        <div className="liwru-steps">
          <div className="liwru-steps-step completed">
            <span>
              <img src={check} alt="completado!" />
            </span>
          </div>
          <div className="liwru-steps-step completed">
            <span>
              <img src={check} alt="completado!" />
            </span>
          </div>
          <div className="liwru-steps-step current">
            <span>3</span>
          </div>
          <div className="liwru-steps-step">
            <span>4</span>
          </div>
        </div>
        <h2>Información general</h2>
        <div className="liwru-forms steps">
          <div className="liwru-forms-row just-one">
            <div className="liwru-forms-group">
              <strong>¿Qué tipo de incidente deseas registrar?</strong>
              <div className="liwru-forms-group-subgroup">
                <label>
                  <input value="1"  type="checkbox" checked={incidentState} onChange={handleIncidentChange} /> Reclamo
                </label>
                <label>
                  <input value="2"  type="checkbox" checked={!incidentState} onChange={handleIncidentChange} /> Queja
                </label>
              </div>
            </div>
          </div>

          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>Motivo del reclamo/queja *</strong>
              <select name="reason" onChange={handleInputChange}>
                <option value="">Seleccione</option>
                {
                  reasons.map( (reason) => (
                    <option key={reason} value={reason}>{reason}</option>
                  ) )
                }
              </select>
            </div>
          </div>

          <div className="liwru-forms-row just-one">
            <div className="liwru-forms-group">
              <strong>¿El incidente fue en un establecimiento físico?</strong>
              <div className="liwru-forms-group-subgroup">
                <label>
                  <input value="1"  type="checkbox" checked={establishmentState} onChange={handleReasonChange} /> Sí
                </label>
                <label>
                  <input value="2"  type="checkbox" checked={!establishmentState} onChange={handleReasonChange} /> No
                </label>
              </div>
            </div>
          </div>

          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>Seleccionar establecimiento *</strong>
              <select name="establishment" onChange={handleInputChange}>
                <option value="">Seleccione</option>
                {
                  establishments.map( (establishment) => (
                    <option key={establishment} value={establishment}>{establishment}</option>
                  ) )
                }
              </select>
            </div>
          </div>

          <div className="liwru-forms-row align-items-end">
            <div className="liwru-forms-group">
              <strong>Fecha de Incidencia *</strong>
              <input type="date" placeholder="Registre la fecha" name="dateIncidence" onChange={handleInputChange} />
            </div>
            <div className="liwru-forms-group">
              <label>
                <input type="checkbox" checked={dateState} onChange={handleDateChange} /> Esta es una fecha aproximada
              </label>
            </div>
            <div className="liwru-forms-group"></div>
          </div>

          <div className="liwru-forms-row just-one">
            <div className="liwru-forms-group">
              <strong>¿Tienes documentos relacionados a la incidencia?</strong>
              <div className="liwru-forms-group-subgroup">
                <label>
                  <input value="1" type="checkbox" checked={documentState} onChange={handleDocumentChange} /> Sí
                </label>
                <label>
                  <input value="2" type="checkbox" checked={!documentState} onChange={handleDocumentChange} /> No
                </label>
              </div>
            </div>
          </div>

          <div className="liwru-forms-row just-two align-items-end files">
            <div className="liwru-forms-group">
              <strong>Agregar el documento *</strong>
              <input type="file" onChange={handleDocFilesChange}  />
            </div>
            <div className="liwru-forms-group">
              <strong></strong>
              <button className="liwru-actions-files">
                <img src={trash} alt="Eliminar documento" />
              </button>
            </div>
          </div>

          <div className="liwru-forms-row just-two align-items-end files">
            <div className="liwru-forms-group">
              <input type="file" onChange={handleDocFilesChange} />
            </div>
            <div className="liwru-forms-group">
              <strong></strong>
              <button className="liwru-actions-files">
                <img src={plus} alt="Agregar documento" />
              </button>
            </div>
          </div>

          <div className="liwru-forms-row just-two">
            <div className="liwru-forms-group">
              <strong>Detalle del reclamo *</strong>
              <textarea name="detailReclam" onChange={handleInputChange}></textarea>
            </div>
            <div className="liwru-forms-group">
              <strong>Pedido *</strong>
              <textarea name="request" onChange={handleInputChange}></textarea>
            </div>
          </div>
        </div>
        <div className="liwru-actions fixed">
          <Link to="/step-one" className="liwru-actions-goback">
            Volver
          </Link>
          <Link 
            to="/step-three" 
            className="liwru-actions-goon"
            onClick={handleSubmit}
            >
            Siguiente
          </Link>
        </div>
      </div>
    </div>
  );
};

// figma: paso 2
