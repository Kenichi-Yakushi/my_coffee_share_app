import React, { useState } from 'react';

const CountUp = (): JSX.Element => { // 返り値の型を指定しました。
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>+</button><br/>
      <button type="button" onClick={() => setCount(count - 1)}>-</button><br/>
      <button type="button" onClick={() => setCount(0)}>リセット</button>
      <p>{new Date().toTimeString()}</p>
    </>
  );
};

export default CountUp;