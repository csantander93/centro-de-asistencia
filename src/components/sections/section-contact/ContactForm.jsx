import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import Popup from '../../popup/Popup';
import './ContactForm.css';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');  // Añadido para mostrar mensajes de error
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(''); // Limpiar mensaje de error

    // Prepara los datos del formulario para enviarlos
    const formData = new FormData(formRef.current);
    const formValues = Object.fromEntries(formData.entries());

    try {
      // Sustituye 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_USER_ID' con tus credenciales de Email.js
      const result = await emailjs.sendForm(
        'service_bmv94b2',   // El ID de tu servicio
        'template_8dub8yf',  // El ID de la plantilla que configuraste en Email.js
        formRef.current,     // El formulario a enviar
        'NzgQT3psPoPwBNLsd'       // El ID de tu usuario de Email.js
      );
      console.log(result.text); // Puedes agregar más lógica aquí si necesitas manejar la respuesta

      // Limpiar formulario
      if (formRef.current) {
        formRef.current.reset();
      }

      // Mostrar popup de éxito
      setShowPopup(true);
    } catch (error) {
      console.error('Error al enviar el correo', error);
      setErrorMessage('Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente más tarde.'); // Mostrar mensaje de error al usuario
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contacto</h2>
        <p>
          "Si necesitas más información o tienes alguna consulta, no dudes en comunicarte con nosotros a través de los siguientes contactos. Estamos aquí para ayudarte."
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-geo-alt"></i>
              <h3>Dirección</h3>
              <p>Av. Santa Fe 3456, Piso 3, Departamento A, Barrio de Palermo, CABA, Argentina.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-telephone"></i>
              <h3>Comunicarse al</h3>
              <p>0810-268-3762</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-envelope"></i>
              <h3>Email</h3>
              <p>centroasistencias@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="row gy-4 mt-1">
          <div className="col-lg-6">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="email-form"
            >
              <p className="form-intro">
                Escribinos un mensaje para que a la brevedad nos pongamos en contacto con vos.
              </p>
              <div className="fields-row">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Nombre completo"
                  required
                />
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Por favor, introduce un correo válido"
                />
                <input
                  type="text"
                  className="form-control"
                  name="phone_area"
                  placeholder="Cod. de área (ej. 11)"
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  name="phone_number"
                  placeholder="Número de Tel. (ej. 12345678)"
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Asunto"
                  required
                />
              </div>
              <textarea
                className="form-control"
                name="message"
                rows="6"
                placeholder="Mensaje"
                required
              ></textarea>
              <div className="text-center">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
            </form>

            {errorMessage && (
              <div className="error-message">
                <p>{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showPopup && (
        <Popup
          message="Mensaje enviado correctamente. A la brevedad nos estaremos poniendo en contacto con usted."
          onClose={() => setShowPopup(false)}
        />
      )}
    </section>
  );
};

export default ContactForm;
