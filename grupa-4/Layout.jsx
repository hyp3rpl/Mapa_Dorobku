import "./Layout.css";

export default function Layout({ polandContent, europeContent }) {
  return (
    <div className="page">
      <header className="page-header">
        <h1>
          <span className="pl">Polska</span>
          <span className="sep">|</span>
          <span className="eu">Europa</span>
        </h1>
        <p>
          Oś czasu — dodaj własne wpisy w <code>src/App.jsx</code>
        </p>
      </header>

      {/* możliwa zmiana(usuniecie tego) */}

      <div className="col-headers">
        <div className="ch pl-ch">POLSKA</div>
        <div className="ch eu-ch">EUROPA</div>
      </div>

      <div className="columns">
        <div className="col pl-col">
          <div className="col-line pl-line" />
          <div className="entries">{polandContent}</div>
        </div>

        <div className="col eu-col">
          <div className="col-line eu-line" />
          <div className="entries">{europeContent}</div>
        </div>
      </div>
    </div>
  );
}
