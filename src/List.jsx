import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const List = ({ title, info }) => {
  const [showInfos, setShowInfos] = useState(false);

  const expand = () => {
    setShowInfos(!showInfos);
  };
  return (
    <article className="question">
      <header className="header">
        <h5>{title}</h5>

        <button className="question-btn" onClick={expand}>
          {!showInfos ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>

      {showInfos && <p>{info}</p>}
    </article>
  );
};
export default List;
