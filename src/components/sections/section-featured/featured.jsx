import React from "react";
import "./Featured.css"

const Featured = () => {
  return (
     <section id="featured-services" class="featured-services">
        <div class="container">
            <div class="row">
            <div class="service-item">
                <div class="icon flex-shrink-0"><i class="bi bi-house-door"></i></div>
                <div>
                <h4 class="title"><a href="#" class="stretched-link">Emergencias del Hogar</a></h4>
                <p class="description">
                    Solucionamos problemas de plomería, gas, y electricidad 24/7 para tu tranquilidad.
                </p>
                </div>
            </div>

    
            <div class="service-item">
                <div class="icon flex-shrink-0"><i class="bi bi-rocket"></i></div>
                <div>
                <h4 class="title"><a href="#" class="stretched-link">Asistencia al Viajero</a></h4>
                <p class="description">
                    Respaldo en transporte, itinerarios y emergencias mientras viajas.
                </p>
                </div>
            </div>


            <div class="service-item">
                <div class="icon flex-shrink-0"><i class="bi bi-phone"></i></div>
                <div>
                <h4 class="title"><a href="#" class="stretched-link">Asesoría Legal Telefónica</a></h4>
                <p class="description">
                    Consulta legal gratuita con abogados especializados por teléfono.
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>
  );
};

export default Featured;
