import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './Testimonials.css';

import testimonialImg1 from '../../../assets/images/testimonials/testimonials-1.png';
import testimonialImg2 from '../../../assets/images/testimonials/testimonials-2.png';
import testimonialImg3 from '../../../assets/images/testimonials/testimonials-3.png';
import testimonialImg4 from '../../../assets/images/testimonials/testimonials-4.png';
import testimonialImg5 from '../../../assets/images/testimonials/testimonials-5.png';
import testimonialImg6 from '../../../assets/images/testimonials/testimonials-6.png';
import testimonialImg7 from '../../../assets/images/testimonials/testimonials-7.png';
import testimonialImg8 from '../../../assets/images/testimonials/testimonials-8.png';
import testimonialImg9 from '../../../assets/images/testimonials/testimonials-9.png';
import testimonialImg10 from '../../../assets/images/testimonials/testimonials-10.png';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3} // Mostrar 3 tarjetas
        centeredSlides={true} // Centrar la tarjeta activa
        loop={true} // Habilitar el bucle infinito
        navigation
        pagination={{ clickable: true }}
      >
        {/* Testimonial 1 */}
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              "Un servicio impecable, siempre disponible y con profesionales muy capacitados. ¡La tranquilidad de saber que siempre hay alguien para ayudarnos cuando más lo necesitamos!"
            </p>
            <div className="profile mt-auto">
              <img
                src={testimonialImg1}
                className="testimonial-img"
                alt="Diego González"
              />
              <h3>Diego González</h3>
              <p>Martinez, Gran Buenos Aires</p>
              <h4>Cliente feliz</h4>
            </div>
          </div>
        </SwiperSlide>

        {/* Testimonial 2 */}
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              "El servicio me ayudó con una reparación de electricidad que necesitaba urgente. El equipo llegó a tiempo y solucionó el problema de forma eficaz. ¡Excelente atención!"
            </p>
            <div className="profile mt-auto">
              <img
                src={testimonialImg2}
                className="testimonial-img"
                alt="Carla Rodríguez"
              />
              <h3>Carla Rodríguez</h3>
              <p>Gral. Roca, Neuquén</p>
              <h4>Cliente satisfecho</h4>
            </div>
          </div>
        </SwiperSlide>

        {/* Testimonial 3 */}
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              "Tuve que hacer uso del servicio por un problema de plomería y quedé impresionado con la rapidez y la calidad del servicio. El personal fue muy amable y eficiente."
            </p>
            <div className="profile mt-auto">
              <img
                src={testimonialImg3}
                className="testimonial-img"
                alt="Bibiana Martínez"
              />
              <h3>Bibiana Martínez</h3>
              <p>Rosario, Santa Fe</p>
              <h4>Cliente satisfecho</h4>
            </div>
          </div>
        </SwiperSlide>

        {/* Testimonial 4 */}
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              "Recomiendo este servicio sin dudarlo. Siempre están disponibles y resuelven cualquier inconveniente rápidamente. Se nota que se preocupan por sus clientes."
            </p>
            <div className="profile mt-auto">
              <img
                src={testimonialImg4}
                className="testimonial-img"
                alt="Martín López"
              />
              <h3>Martín López</h3>
              <p>Palermo, CABA</p>
              <h4>Cliente contento</h4>
            </div>
          </div>
        </SwiperSlide>

        {/* Testimonial 5 */}
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              "Excelente atención y compromiso. Me ayudaron con un problema complicado en casa y no podría estar más agradecida. Altamente recomendados."
            </p>
            <div className="profile mt-auto">
              <img
                src={testimonialImg5}
                className="testimonial-img"
                alt="Gerardo Luque"
              />
              <h3>Gerardo Luque</h3>
              <p>Villa María, Córdoba</p>
              <h4>Cliente agradecido</h4>
            </div>
          </div>
        </SwiperSlide>

        {/* Testimonial 6 */}
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              "Tuve una experiencia muy positiva. El servicio fue rápido y profesional, resolvieron todo sin complicaciones. Definitivamente volvería a contratar."
            </p>
            <div className="profile mt-auto">
              <img
                src={testimonialImg6}
                className="testimonial-img"
                alt="Hector Juarez"
              />
              <h3>Hector Juarez</h3>
              <p>Santa Fe Capital, Santa Fe</p>
              <h4>Cliente feliz</h4>
            </div>
          </div>
        </SwiperSlide>

        {/* Testimonial 7 */}
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              "Muy agradecido con el equipo. Solucionaron un problema urgente en mi comercio en tiempo récord. No podría estar más conforme con el servicio."
            </p>
            <div className="profile mt-auto">
              <img
                src={testimonialImg7}
                className="testimonial-img"
                alt="Rita Gómez"
              />
              <h3>Rita Gómez</h3>
              <p>Corrientes Capital, Corrientes</p>
              <h4>Cliente agradecido</h4>
            </div>
          </div>
        </SwiperSlide>

        {/* Testimonial 8 */}
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              "Me sorprendió la calidad del servicio. Los técnicos fueron amables, puntuales y muy eficientes. Definitivamente recomendaré a mis conocidos."
            </p>
            <div className="profile mt-auto">
              <img
                src={testimonialImg8}
                className="testimonial-img"
                alt="Marcos Peralta"
              />
              <h3>Marcos Peralta</h3>
              <p>San Isidro, Gran Buenos Aires</p>
              <h4>Cliente satisfecho</h4>
            </div>
          </div>
        </SwiperSlide>

        {/* Testimonial 9 */}
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              "Necesitaba ayuda con un problema eléctrico en casa, y la respuesta fue inmediata. Estoy muy conforme con el servicio y lo recomendaría sin dudarlo."
            </p>
            <div className="profile mt-auto">
              <img
                src={testimonialImg9}
                className="testimonial-img"
                alt="Edgard Ramírez"
              />
              <h3>Edgard Ramírez</h3>
              <p>San Miguel de Tucumán, Tucumán</p>
              <h4>Cliente satisfecha</h4>
            </div>
          </div>
        </SwiperSlide>

        {/* Testimonial 10 */}
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              "Contraté el servicio para una reparación en mi comercio, y el equipo hizo un excelente trabajo. ¡Muy agradecido por la rapidez y la calidad!"
            </p>
            <div className="profile mt-auto">
              <img
                src={testimonialImg10}
                className="testimonial-img"
                alt="Janet Álvarez"
              />
              <h3>Janet Álvarez</h3>
              <p>Comodoro Rivadavia, Chubut</p>
              <h4>Cliente agradecido</h4>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Testimonials;
