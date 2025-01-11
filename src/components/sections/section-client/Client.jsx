import React from 'react';
import './Client.css';

// Importar las imágenes
import client1 from "../../../assets/images/clients/client-1.png";
import client2 from "../../../assets/images/clients/client-2.png";
import client3 from "../../../assets/images/clients/client-3.png";
import client4 from "../../../assets/images/clients/client-4.png";
import client5 from "../../../assets/images/clients/client-5.png";
import client6 from "../../../assets/images/clients/client-6.png";

const Client = () => {
  // Crear un array con las imágenes importadas
  const clients = [client1, client2, client3, client4, client5, client6];

  return (
    <section id="clients" className="clients section">
      <div className="container">
        <div className="row gy-4">
          {clients.map((client, index) => (
            <div key={index} className="col-xl-2 col-md-3 col-6 client-logo">
              <img src={client} className="img-fluid" alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
