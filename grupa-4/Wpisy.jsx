/* PL: [IMG][tekst]   EU: [tekst][IMG] */

export default function Entry({ item, side }) {
  const isEu = side === "eu";

  const imgBox = (
    <div className="entry-img">
      {item.media?.image ? (
        <img src={item.media.image} alt={item.title.full} />
      ) : (
        <div className="img-placeholder">
          <span>IMG</span>
        </div>
      )}
    </div>
  );

  const textBox = (
    <div className="entry-text">
      <div className="entry-year">{item.time?.label}</div>
      <h3 className="entry-title">{item.title?.full}</h3>
      <p className="entry-desc">{item.description}</p>
    </div>
  );

  return (
    <div className={`entry ${side}`}>
      {isEu ? (
        <>
          {textBox}
          {imgBox}
        </>
      ) : (
        <>
          {imgBox}
          {textBox}
        </>
      )}
    </div>
  );
}

export function Placeholder({ side }) {
  return (
    <div className={`entry-placeholder ${side}`}>
      <div className="ph-img">?</div>
      <div className="ph-text">
        <code>{"{ year, title, desc, image }"}</code>
        <p>Dodaj wpis w tablicy powyżej</p>
      </div>
    </div>
  );
}
