import React from 'react';


function Example() {
  const [count, setCount] = useState(0);
  const checkList = [];
  return (
    <>
      <div>
        <p>Você clicou {count} vezes</p>
        <button onClick={() => setCount(count + 1)}>Clique aqui</button>
      </div>
    </>
  );
}

export default Example;
