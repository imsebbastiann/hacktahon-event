import './mainPart.css';
import img from './img.png';

function MainPart() {
  return (
    <div className="mainPart">
      <div className="left">
        <h1 className="header">Reimaginam interactiunea dintre studenti</h1>
        <p className="caption">
            Te simți blocat acasă, fără să stii ce vrei sa faci in fiecare weekend? Mulțumită nouă, nu a fost niciodată mai ușor.
        </p>
        <button className="button">Cauta evenimente</button>
      </div>
      <div className="right">
        <img src={img} alt="landingPageImage" className="img"></img>
      </div>
    </div>
  );
}

export default MainPart;
