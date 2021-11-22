import React from "react";
import check from "../../assets/images/check.svg";

import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export const StepThree = () => {


  const { formOne } = useSelector(state => state)
  const { formTwo } = useSelector(state => state)

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
          <div className="liwru-steps-step completed">
            <span>
              <img src={check} alt="completado!" />
            </span>
          </div>
          <div className="liwru-steps-step current">
            <span>4</span>
          </div>
        </div>
        <h2>Resumen</h2>
        <div className="liwru-forms steps">
          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>Nombres</strong>
              <span className="liwru-readonly">{formOne.name}</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Apellido Paterno</strong>
              <span className="liwru-readonly">{formOne.aPaterno}</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Apellido Materno</strong>
              <span className="liwru-readonly">{formOne.aMaterno}</span>
            </div>
          </div>

          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>Tipo de Documento</strong>
              <span className="liwru-readonly">{formOne.typeDocument}</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Nro. de Documento</strong>
              <span className="liwru-readonly">{formOne.dni}</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Correo electrónico</strong>
              <span className="liwru-readonly">
                {formOne.email}
              </span>
            </div>
          </div>

          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>Tipo de Respuesta</strong>
              <span className="liwru-readonly">
                {
                  formOne.typeResponse === '0' ?
                  'Por correo electrónico'  :
                  'Por llamada telefónica'
                }
              </span>
            </div>
            <div className="liwru-forms-group">
              <strong>Dirección</strong>
              <span className="liwru-readonly">{formOne.direction}</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Teléfono</strong>
              <span className="liwru-readonly">{formOne.phone}</span>
            </div>
          </div>

          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>Departamento</strong>
              <span className="liwru-readonly">{formOne.department}</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Provincia</strong>
              <span className="liwru-readonly">{formOne.province}</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Distrito</strong>
              <span className="liwru-readonly">{formOne.district}</span>
            </div>
          </div>
          {/* feat/cv-17/add-rody-castillo-profile */}
          <div className="liwru-forms-row just-two">
            <div className="liwru-forms-group">
              <strong>¿Qué tipo de incidente deseas registrar?</strong>
              <span className="liwru-readonly">
                {
                  formTwo.typeIncidence === '1' ?
                  'Reclamo' :
                  'Queja'
                }
              </span>
            </div>
            <div className="liwru-forms-group">
              <strong>Motivo &lt;del/de la&gt; &lt;reclamo/queja&gt;</strong>
              <span className="liwru-readonly">{formTwo.reason}</span>
            </div>
          </div>

          <div className="liwru-forms-row just-two">
            <div className="liwru-forms-group">
              <strong>¿El incidente fue en un establecimiento físico?</strong>
              <span className="liwru-readonly">
              {
                formTwo.establishmentType === '1' ?
                'Sí'  :
                'No'
              }
              </span>
            </div>
            <div className="liwru-forms-group">
              <strong>Lugar del establecimiento </strong>
              <span className="liwru-readonly">{formTwo.establishment}</span>
            </div>
          </div>

          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>Fecha de Incidencia</strong>
              <span className="liwru-readonly">{formTwo.dateIncidence}</span>
            </div>
            <div className="liwru-forms-group"></div>
            <div className="liwru-forms-group"></div>
          </div>

          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>¿Tienes documentos relacionados a la incidencia?</strong>
              <span className="liwru-readonly">
                existen
              </span>
            </div>
            <div className="liwru-forms-group"></div>
            <div className="liwru-forms-group"></div>
          </div>

          <div className="liwru-forms-row just-two align-items-end">
            <div className="liwru-forms-group">
              <strong>Agregar el documento *</strong>
              {
                formTwo.files.map(item =>{
                  return (
                    <span className="liwru-readonly">{item.name}</span>
                  )
                })
              }
              <span className="liwru-readonly">Manual de usuario.pdf</span>
            </div>
            <div className="liwru-forms-group"></div>
          </div>

          <div className="liwru-forms-row just-two">
            <div className="liwru-forms-group">
              <strong>Detalle del reclamo</strong>
              <textarea
                className="liwru-readonly"
                value={formTwo.detailReclam}
              ></textarea>
            </div>
            <div className="liwru-forms-group">
              <strong>Pedido</strong>
              <textarea
                className="liwru-readonly"
                value={formTwo.request}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="liwru-actions fixed">
          <Link to="/step-two" className="liwru-actions-goback">
            Volver
          </Link>
          <Link to="/success" className="liwru-actions-goon">
            Siguiente
          </Link>
        </div>
      </div>
    </div>
  );
};

// figma: paso 3
