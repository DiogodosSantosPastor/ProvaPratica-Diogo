import React, { useState, useEffect } from 'react';


const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch('https://api.cartola.globo.com/clubes')
      .then(response => response.json())
      .then(data => {
        const clubsArray = Object.values(data);
        setClubs(clubsArray);
      })
      .catch(error => console.error('Erro ao buscar os clubes:', error));
  }, []);

  return (
    <div className="clubs-container">

      <div className="clubs-list">
        {clubs.map(club => (
          <div key={club.id} className="club-card">
            <img src={club.escudos['60x60']} alt={`${club.nome} escudo`} />
            <h2>{club.nome}</h2>
            <p>{club.apelido}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;