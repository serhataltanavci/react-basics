import { useState } from "react";
import data from "./data";
import Person from "./Person";

function List() {
  const [human, setHuman] = useState(data);
  return (
    <>
      {human.map((x) => {
        return <Person {...x} key={x.id} />;
      })}
      <button
        style={{ color: "white" }}
        type="button"
        onClick={() => {
          setHuman([]);
        }}>
        clear all
      </button>
    </>
  );
}

export default List;
