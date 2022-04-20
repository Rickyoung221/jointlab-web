import './NotFound.css';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="site">
      <div className="sketch">
        <div className="bee-sketch red"></div>
        <div className="bee-sketch blue"></div>
      </div>
      <h1>
        404:
        <small>PAGES NOT FOUND</small>
      </h1>
    </div>
  );
}
