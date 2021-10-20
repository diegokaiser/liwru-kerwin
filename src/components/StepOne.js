import React from "react";
import check from "../assets/images/check.svg";
import { Link } from "react-router-dom";
import { TipoDocumentoGrid } from "./grids/TipoDocumentoGrid";
import { DepartamentosGrid } from "./grids/DepartamentosGrid";
import { ProvinciasGrid } from "./grids/ProvinciasGrid";
import { DistritosGrid } from "./grids/DistritosGrid";

export const StepOne = () => {
  const tipoDocumento = [""];
  const departamento = [""];
  const provincia = [""];
  const distrito = [""];

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
        <div className="liwru-forms steps">
          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>Nombres *</strong>
              <input type="number" placeholder="Ingresa tus nombres" />
            </div>
            <div className="liwru-forms-group">
              <strong>Apellido Paterno *</strong>
              <input type="number" placeholder="Ingresa tu apellido paterno" />
            </div>
            <div className="liwru-forms-group">
              <strong>Apellido Materno *</strong>
              <input type="number" placeholder="Ingresa tu apellido materno" />
            </div>
          </div>

          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>Tipo de Documento *</strong>
              <select defaultValue={""}>
                <option value="">Seleccione</option>
                {tipoDocumento.map((tipoDocumento) => (
                  <TipoDocumentoGrid
                    key={tipoDocumento}
                    tipoDocumento={tipoDocumento}
                  />
                ))}
              </select>
            </div>
            <div className="liwru-forms-group">
              <strong>Nro. de Documento *</strong>
              <input type="number" placeholder="Ingresa tu nro. de documento" />
            </div>
            <div className="liwru-forms-group">
              <strong>Correo electrónico *</strong>
              <input type="number" placeholder="Ingresa tu correo" />
            </div>
          </div>

          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>Tipo de Respuesta *</strong>
              <select defaultValue={""}>
                <option value="">Seleccione</option>
                <option value="0">Por correo electrónico</option>
                <option value="1">Por llamada telefónica</option>
              </select>
            </div>
            <div className="liwru-forms-group">
              <strong>Dirección *</strong>
              <input type="number" placeholder="Ingresa tu dirección" />
            </div>
            <div className="liwru-forms-group">
              <strong>Teléfono *</strong>
              <input type="number" placeholder="Ingresa tu teléfono" />
            </div>
          </div>

          <div className="liwru-forms-row">
            <div className="liwru-forms-group">
              <strong>Departamento *</strong>
              <select defaultValue={""}>
                <option value="">Seleccione</option>
                {departamento.map((departamento) => (
                  <DepartamentosGrid
                    key={departamento}
                    departamento={departamento}
                  />
                ))}
              </select>
            </div>
            <div className="liwru-forms-group">
              <strong>Provincia *</strong>
              <select defaultValue={""}>
                <option value="">Seleccione</option>
                {provincia.map((provincia) => (
                  <ProvinciasGrid key={provincia} provincia={provincia} />
                ))}
              </select>
            </div>
            <div className="liwru-forms-group">
              <strong>Distrito *</strong>
              <select defaultValue={""}>
                <option value="">Seleccione</option>
                {distrito.map((distrito) => (
                  <DistritosGrid key={distrito} distrito={distrito} />
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="liwru-actions fixed">
          <Link to="/step-zero" className="liwru-actions-goback">
            Volver
          </Link>
          <Link to="/step-two" className="liwru-actions-goon">
            Siguiente
          </Link>
        </div>
      </div>
    </div>
  );
};

// figma: paso 1
