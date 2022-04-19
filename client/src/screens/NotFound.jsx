import './NotFound.css';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div class="site">
      <div class="sketch">
        <div class="bee-sketch red"></div>
        <div class="bee-sketch blue"></div>
      </div>
      <h1>
        404:
        <small>PAGES NOT FOUND</small>
      </h1>
    </div>
  );
}
