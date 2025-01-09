import React from 'react';
import ServiceItem from './services-item/ServiceItem';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="section-title-container" data-aos="fade-up">
        <h2 className="section-title">Servicios de Emergencias</h2>
        <p className="section-description">Te ofrecemos una amplia gama de asistencias ante imprevistos todos los días del año. ¡Estamos aquí para ayudarte cuando más lo necesites!</p>
      </div>

      <div className="services-container">
        <div className="services-row">
          <ServiceItem 
            iconClass="bi-wrench" 
            title="Asistencia en el Hogar - Plomería" 
            description="Te ofrecemos asistencia para reparaciones de plomería urgentes, con un monto cubierto de hasta $15.000 por evento, hasta 2 veces al año. ¡Te ayudamos con problemas de cañerías, sifones y más!" 
            colorClass="cyan" 
          />
          <ServiceItem 
            iconClass="bi-fire" 
            title="Asistencia en el Hogar - Gasista" 
            description="En caso de una emergencia con las instalaciones de gas, enviamos un gasista para reparaciones urgentes. Cobertura de hasta $15.000 por evento, máximo 2 eventos al año." 
            colorClass="orange" 
          />
          <ServiceItem 
            iconClass="bi-lock" 
            title="Asistencia en el Hogar - Cerrajería" 
            description="Si pierdes las llaves o se daña la cerradura, te enviamos un cerrajero para resolver el problema. Cobertura de hasta $15.000 por evento, hasta 2 veces al año." 
            colorClass="teal" 
          />
          <ServiceItem 
            iconClass="bi-lightbulb" 
            title="Asistencia en el Hogar - Electricista" 
            description="Si tienes problemas con el suministro eléctrico en tu hogar, enviamos un electricista para resolverlo rápidamente. Cobertura de hasta $15.000 por evento, máximo 2 eventos al año." 
            colorClass="red" 
          />
          <ServiceItem 
            iconClass="bi-airplane-engines" 
            title="Asistencia al Viajero" 
            description="Si sufres un percance con tu medio de transporte, te reintegramos hasta $8.500 en gastos de viáticos para que puedas continuar tu viaje sin inconvenientes." 
            colorClass="indigo" 
          />
          <ServiceItem 
            iconClass="bi-briefcase" 
            title="Asistencia Legal" 
            description="Accede a asesoría legal telefónica gratuita, ilimitada por evento, para resolver dudas sobre derecho penal, civil, comercial o laboral. Además, te apoyamos en el proceso legal." 
            colorClass="pink" 
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
