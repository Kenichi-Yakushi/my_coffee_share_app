import React, { useState } from 'react';

const CountUp = (): JSX.Element => { // 返り値の型を指定しました。
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
      <p>{new Date().toTimeString()}</p>
    </>
  );
};

export default CountUp;