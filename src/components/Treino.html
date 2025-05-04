import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const treino = {
  "Dia A – Força & Estabilidade": [
    { nome: "Agachamento com barra", series: 3 },
    { nome: "Supino inclinado com halteres", series: 3 },
    { nome: "Puxada frontal com triângulo", series: 3 },
    { nome: "Bird-Dog (por lado)", series: 3 },
  ],
  "Dia B – Volume & Mobilidade": [
    { nome: "Leg press", series: 3 },
    { nome: "Press de ombro com halteres", series: 3 },
    { nome: "Remada baixa com triângulo", series: 3 },
    { nome: "Elevações laterais", series: 3 },
    { nome: "Dead Bug", series: 3 },
  ],
  "Dia C – Técnica & Core Profundo": [
    { nome: "Agachamento frontal (ou goblet squat)", series: 3 },
    { nome: "Supino reto com barra", series: 3 },
    { nome: "Remada unilateral com haltere", series: 3 },
    { nome: "Prancha lateral (cada lado)", series: 3 },
  ],
  "Dia D – Isolamento & Lombar": [
    { nome: "Leg extension", series: 3 },
    { nome: "Push-ups ou fundos em paralelas", series: 3 },
    { nome: "Curl de bíceps com barra ou halteres", series: 3 },
    { nome: "Elevação de gémeos em pé com halteres", series: 3 },
    { nome: "Hip Thrust (ou glute bridge)", series: 3 },
  ],
};

function getStoredData() {
  const data = localStorage.getItem("treinoNotas");
  return data ? JSON.parse(data) : {};
}

function storeData(chave, valor) {
  const data = getStoredData();
  data[chave] = valor;
  localStorage.setItem("treinoNotas", JSON.stringify(data));
}

function guardarNotas() {
  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    const chave = input.dataset.key;
    const valor = input.value;
    if (chave) {
      storeData(chave, valor);
    }
  });
  alert("Notas guardadas com sucesso!");
}

function carregarNotas() {
  const dados = getStoredData();
  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    const chave = input.dataset.key;
    if (chave && dados[chave]) {
      input.value = dados[chave];
    }
  });
}

const Treino = () => {
  useEffect(() => {
    carregarNotas();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Plano de Treino Fullbody - 4x por semana</h1>
      <div className="accordion" id="accordionTreino">
        {Object.entries(treino).map(([dia, exercicios], index) => (
          <div className="accordion-item" key={dia}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${index > 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0}
                aria-controls={`collapse${index}`}
              >
                {dia}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              data-bs-parent="#accordionTreino"
            >
              <div className="accordion-body">
                {exercicios.map((ex, i) => (
                  <div className="card mb-3" key={i}>
                    <div className="card-body">
                      <h5>{`${ex.nome} (${ex.series} séries)`}</h5>
                      <div>
                        {[...Array(ex.series)].map((_, s) => (
                          <div className="d-flex align-items-center gap-2 mb-2" key={s}>
                            <span>Série {s + 1}:</span>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Reps"
                              style={{ width: "140px" }}
                              data-key={`${dia}-${i}-serie${s + 1}-reps`}
                            />
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Carga (kg)"
                              style={{ width: "140px" }}
                              data-key={`${dia}-${i}-serie${s + 1}-carga`}
                            />
                          </div>
                        ))}
                      </div>
                      <textarea
                        className="form-control mt-2"
                        rows="2"
                        placeholder="Notas..."
                        data-key={`${dia}-${i}-notas`}
                      ></textarea>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={guardarNotas}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default Treino;
