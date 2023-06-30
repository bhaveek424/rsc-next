'use client';
import { useState } from 'react';

function HitCounter({ hits }) {
  const [isCensored, setIsCensored] = useState(false);

  return (
    <button
      className={isCensored ? 'censored' : undefined}
      onClick={() => {
        setIsCensored(!isCensored);
      }}>
      {hits}
    </button>
  );
}

export default HitCounter;
