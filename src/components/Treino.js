import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const treino = {
  "Dia A – Full Body 1": [
    { nome: "Incline Bench Press com halteres", series: 3 },
    { nome: "Desenvolvimento com halteres", series: 3 },
    { nome: "Leg Extension (máquina)", series: 3 },
    { nome: "Remada alta na polia (pegada fechada)", series: 3 },
    { nome: "Bíceps com halteres", series: 3 },
    { nome: "Prancha frontal", series: 3 }
  ],
  "Dia B – Full Body 2": [
    { nome: "Flys na máquina (peito)", series: 3 },
    { nome: "Elevações laterais com halteres", series: 3 },
    { nome: "Agachamento com barra", series: 3 },
    { nome: "Remada alta na polia", series: 3 },
    { nome: "Tríceps na polia (corda ou barra)", series: 3 },
    { nome: "Elevação de pernas (abdómen)", series: 3 }
  ],
  "Dia C – Full Body 3": [
    { nome: "Incline Bench Press com halteres", series: 3 },
    { nome: "Desenvolvimento com halteres", series: 3 },
    { nome: "Leg Curl (máquina)", series: 3 },
    { nome: "Remada alta na polia", series: 3 },
    { nome: "Bíceps com halteres (martelo ou inclinado)", series: 3 },
    { nome: "Crunch com peso", series: 3 }
  ],
  "Dia D – Full Body 4": [
    { nome: "Flys na máquina (peito)", series: 3 },
    { nome: "Elevações laterais com halteres", series: 3 },
    { nome: "Abdutores (máquina)", series: 3 },
    { nome: "Leg Curl (máquina)", series: 3 },
    { nome: "Tríceps na polia (barra ou corda)", series: 3 },
    { nome: "Roda abdominal ou prancha lateral", series: 3 }
  ]
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

function Treino() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const dados = getStoredData();
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      const chave = input.dataset.key;
      if (chave && dados[chave]) {
        input.value = dados[chave];
      }
    });
  }, []);

  const guardarNotas = () => {
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      const chave = input.dataset.key;
      const valor = input.value;
      if (chave) {
        storeData(chave, valor);
      }
    });
    alert("Notas guardadas com sucesso!");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Plano de Treino Fullbody - 4x por semana</h1>
      <div className="accordion" id="accordionTreino">
        {Object.entries(treino).map(([dia, exercicios], index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                type="button"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {dia}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}
            >
              <div className="accordion-body">
                {exercicios.map((ex, i) => (
                  <div className="card mb-3" key={i}>
                    <div className="card-body">
                      <h5>{`${ex.nome} (${ex.series} séries)`}</h5>
                      {[...Array(ex.series)].map((_, s) => (
                        <div className="d-flex gap-2 mb-2" key={s}>
                          <span>Série {s + 1}:</span>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Reps"
                            data-key={`${dia}-${i}-serie${s + 1}-reps`}
                            style={{ width: "120px" }}
                          />
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Carga (kg)"
                            data-key={`${dia}-${i}-serie${s + 1}-carga`}
                            style={{ width: "120px" }}
                          />
                        </div>
                      ))}
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
}

export default Treino;
