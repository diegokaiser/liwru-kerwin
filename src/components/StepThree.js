import React from "react";
import check from "../assets/images/check.svg";
import { Link } from "react-router-dom";

export const StepThree = () => {
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
              <span className="liwru-readonly">Francisco</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Apellido Paterno</strong>
              <span className="liwru-readonly">Sagasti</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Apellido Materno</strong>
              <span className="liwru-readonly">Hochhaussler</span>
            </div>
          </div>

          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>Tipo de Documento</strong>
              <span className="liwru-readonly">DNI</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Nro. de Documento</strong>
              <span className="liwru-readonly">45678932</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Correo electrónico</strong>
              <span className="liwru-readonly">
                fsagasti@presidencia.gob.pe
              </span>
            </div>
          </div>

          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>Tipo de Respuesta</strong>
              <span className="liwru-readonly">Correo electrónico</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Dirección</strong>
              <span className="liwru-readonly">Av. Siemprevivas 167</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Teléfono</strong>
              <span className="liwru-readonly">987 654 321</span>
            </div>
          </div>

          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>Departamento</strong>
              <span className="liwru-readonly">Lima</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Provincia</strong>
              <span className="liwru-readonly">Lima</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Distrito</strong>
              <span className="liwru-readonly">San Isidro</span>
            </div>
          </div>

          <div className="liwru-forms-row just-two">
            <div className="liwru-forms-group">
              <strong>¿Qué tipo de incidente deseas registrar?</strong>
              <span className="liwru-readonly">Reclamo</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Motivo &lt;del/de la&gt; &lt;reclamo/queja&gt;</strong>
              <span className="liwru-readonly">Chip defectuoso</span>
            </div>
          </div>

          <div className="liwru-forms-row just-two">
            <div className="liwru-forms-group">
              <strong>¿El incidente fue en un establecimiento físico?</strong>
              <span className="liwru-readonly">Sí</span>
            </div>
            <div className="liwru-forms-group">
              <strong>Seleccionar establecimiento </strong>
              <span className="liwru-readonly">BCP - San Isidro</span>
            </div>
          </div>

          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>Fecha de Incidencia</strong>
              <span className="liwru-readonly">20/04/2021</span>
            </div>
            <div className="liwru-forms-group"></div>
            <div className="liwru-forms-group"></div>
          </div>

          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>¿Tienes documentos relacionados a la incidencia?</strong>
              <span className="liwru-readonly">Existen documentos</span>
            </div>
            <div className="liwru-forms-group"></div>
            <div className="liwru-forms-group"></div>
          </div>

          <div className="liwru-forms-row just-two align-items-end">
            <div className="liwru-forms-group">
              <strong>Agregar el documento *</strong>
              <span className="liwru-readonly">Factura.pdf</span>
              <span className="liwru-readonly">Recibo simple.pdf</span>
              <span className="liwru-readonly">Manual de usuario.pdf</span>
            </div>
            <div className="liwru-forms-group"></div>
          </div>

          <div className="liwru-forms-row just-two">
            <div className="liwru-forms-group">
              <strong>Detalle del reclamo</strong>
              <textarea
                className="liwru-readonly"
                value="Mauris ut erat bibendum, commodo augue in, elementum enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ac sapien et enim sagittis bibendum. Nullam ultrices euismod enim non vulputate. Aenean sit amet libero sapien. "
              ></textarea>
            </div>
            <div className="liwru-forms-group">
              <strong>Pedido</strong>
              <textarea
                className="liwru-readonly"
                value="Curabitur finibus sollicitudin ligula, quis venenatis augue facilisis eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut sed euismod nibh. Quisque sodales dignissim lectus eu dapibus. "
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
