import React, { useRef } from "react";

function RefTutorial() {
  const inputRef = useRef(null);
  const butRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "33";
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick} ref={butRef}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
