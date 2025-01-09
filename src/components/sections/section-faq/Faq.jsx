// Componente FAQ.js
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "¿Qué incluye el Plan de $9500 mensuales?",
      answer: "El plan incluye asistencia en el hogar para problemas de plomería, gas, electricidad y cerrajería. También tendrás acceso a asesoría legal telefónica y cobertura de hasta $40,000 por evento, máximo 2 veces al año, dentro del territorio argentino.",
    },
    {
      question: "¿Cómo funciona el servicio?",
      answer: "Cuando necesites asistencia, solo tienes que comunicarte con nosotros. Buscaremos al especialista adecuado y lo enviaremos con la mayor prontitud posible. Asegúrate de abonar el servicio para recibir la asistencia.",
    },
    {
      question: "¿A qué número llamo ante una emergencia?",
      answer: "En caso de emergencia, puedes comunicarte con nosotros las 24 horas al siguiente número: 0810-268-3762 / (011) 6009-6463. Para atención al cliente, el horario es de 10 a 18 hs.",
    },
    {
      question: "¿Cuántas veces puedo hacer uso del servicio al año?",
      answer: "El plan cubre hasta dos eventos por año, con un máximo de $40,000 por evento. Si superas este límite, podrás acceder a tarifas adicionales por cada servicio solicitado.",
    },
    {
      question: "¿Cuáles son las condiciones generales del servicio?",
      answer: "El servicio tiene una carencia administrativa de 72 horas, a partir de la cual puedes solicitar un especialista. El precio del servicio es de $6900 mensuales fijos durante un año, con renovación automática después de los 12 meses, y una cláusula de ajuste al monto actual.",
    },
    {
      question: "¿El servicio cubre reparaciones fuera de mi domicilio?",
      answer: "No, el servicio está destinado exclusivamente a reparaciones dentro del domicilio declarado por el cliente, dentro del territorio argentino.",
    },
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="container faq-title" data-aos="fade-up">
        <h2>Preguntas Frecuentes</h2>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  <div className="faq-content">
                    <p>{faq.answer}</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
