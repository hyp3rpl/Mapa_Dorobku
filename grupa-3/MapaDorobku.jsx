import React, { useState } from 'react';
import { historyData } from './historyData';
import './MapaDorobku.css';

const MapaDorobku = () => {
  const [wybraneId, setWybraneId] = useState(historyData[0].id);
  const [aktywnePojecie, setAktywnePojecie] = useState(null);
  
  const aktywnaEpoka = historyData.find(d => d.id === wybraneId);

  return (
    <div className="projekt-kontener" style={{ backgroundColor: aktywnaEpoka.bg, transition: 'background 0.8s ease' }}>
      
      <header className="naglowek-glowny">
        <span className="nadtytul">Syntetyczna Historia Literatury</span>
        <h1>Mapa Dorobku Ludzkości</h1>
        
        <div className="nawigacja-epok">
          {historyData.map(ep => (
            <button 
              key={ep.id} 
              className={`przycisk-epoki ${wybraneId === ep.id ? 'aktywny' : ''}`}
              style={{ '--kolor-akcentu': ep.color }}
              onClick={() => setWybraneId(ep.id)}
            >
              {ep.name}
            </button>
          ))}
        </div>
      </header>

      <main className="obszar-infografiki">
        {/* Dynamiczna ramka - kolor zmienia się wraz z epoką */}
        <div 
          className="pomaranczowa-ramka" 
          style={{ borderColor: aktywnaEpoka.color, transition: 'border-color 0.8s ease' }}
        >
          {/* Dynamiczna linia osi */}
          <div 
            className="linia-osi-tlo" 
            style={{ backgroundColor: aktywnaEpoka.color, transition: 'background-color 0.8s ease' }}
          ></div>

          <div className="rzed-epok">
            {historyData.map(ep => (
              <div 
                key={ep.id} 
                className={`wezel-epoki ${wybraneId === ep.id ? 'aktywny' : ''}`}
              >
                <div 
                  className="ikona-nad-kropka" 
                  style={{ color: wybraneId === ep.id ? ep.color : '#ccc' }}
                >
                  {ep.icon}
                </div>

                <button 
                  className={`kropka-osi ${wybraneId === ep.id ? 'wybrana' : ''}`}
                  style={{ 
                    backgroundColor: wybraneId === ep.id ? ep.color : '#d1d1d1',
                    boxShadow: wybraneId === ep.id ? `0 0 0 5px ${aktywnaEpoka.bg}` : 'none'
                  }}
                  onClick={() => setWybraneId(ep.id)}
                />

                <span className="etykieta-daty">
                  {ep.id === 'antyk' ? 'Początki' : ep.period.split(' – ')[0].trim()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <section className="panel-szczegolow">
        <div className="karta-glowna">
          <h2 style={{ color: aktywnaEpoka.color }}>{aktywnaEpoka.name}</h2>
          <div className="info-czasowe">{aktywnaEpoka.period}</div>
          <p className="opis-tekstowy">{aktywnaEpoka.description}</p>
          
          <div className="sekcja-danych">
            <h4>KLUCZOWI TWÓRCY:</h4>
            <div className="chmura-tagow">
              {aktywnaEpoka.authors.map(autor => (
                <span key={autor} className="tag-autora" style={{ background: aktywnaEpoka.color }}>
                  {autor}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="karta-boczna">
          <div className="sekcja-danych">
            <h4>POJĘCIA KLUCZOWE: <small>(Najedź, aby przeczytać opis)</small></h4>
            <div className="chmura-tagow">
              {aktywnaEpoka.keywords.map(pojecie => (
                <div 
                  key={pojecie.name} 
                  className="kontener-pojecia"
                  onMouseEnter={() => setAktywnePojecie(pojecie)}
                  onMouseLeave={() => setAktywnePojecie(null)}
                >
                  <span className="tag-pojecia" style={{ '--kolor-aktywny': aktywnaEpoka.color }}>
                    {pojecie.name}
                  </span>
                  
                  {aktywnePojecie?.name === pojecie.name && (
                    <div className="dymek-opisowy" style={{ borderTop: `3px solid ${aktywnaEpoka.color}` }}>
                      {pojecie.desc}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pole-przelomu" style={{ borderLeft: `4px solid ${aktywnaEpoka.color}`, background: `${aktywnaEpoka.color}08` }}>
            <h4>MOMENT PRZEŁOMU:</h4>
            <p><strong>{aktywnaEpoka.shift}</strong></p>
            <small>{aktywnaEpoka.shiftNote}</small>
          </div>

          {/* NOWA SEKCJA CYTATU */}
          <div className="sekcja-cytatu">
             <h4>CYTAT EPOKI:</h4>
             <blockquote style={{ borderLeft: `3px solid ${aktywnaEpoka.color}` }}>
                "{aktywnaEpoka.quote.text}"
                <footer>— {aktywnaEpoka.quote.author}</footer>
             </blockquote>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MapaDorobku;