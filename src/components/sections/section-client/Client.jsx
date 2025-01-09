import React from 'react';
import './Client.css';

const Client = () => {
  const clients = [
    'src/assets/images/clients/client-1.png',
    'src/assets/images/clients/client-2.png',
    'src/assets/images/clients/client-3.png',
    'src/assets/images/clients/client-4.png',
    'src/assets/images/clients/client-5.png',
    'src/assets/images/clients/client-6.png',
  ];

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
