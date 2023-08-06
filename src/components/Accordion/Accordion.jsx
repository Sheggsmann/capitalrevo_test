import { useState } from "react";
import QuestionMarkLogo from "../../assets/help-circle-outline.svg";
import "./Accordion.scss";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion" onClick={() => setIsOpen((prev) => !prev)}>
      <div className="header">
        <img src={QuestionMarkLogo} alt="question mark" />
        <h3>{question}</h3>
      </div>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

export default Accordion;
