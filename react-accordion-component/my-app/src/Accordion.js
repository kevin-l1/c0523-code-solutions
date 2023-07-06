import './Accordion.css';

import { useState } from 'react';

export default function Accordion({ topics }) {
  const [openTopic, setOpenTopic] = useState();

  function handleOpenTopic(topic) {
    if (openTopic === topic) {
      setOpenTopic(undefined);
    } else {
      setOpenTopic(topic);
    }
  }

  const newArray = topics.map((topic) => (
    <Topic
      topic={topic}
      isOpen={topic === openTopic}
      onClick={() => handleOpenTopic(topic)}
    />
  ));

  return <>{newArray}</>;
}

function Topic({ topic, isOpen, onClick }) {
  return (
    <div className="topic">
      <div type="text" className="accordion-header" onClick={onClick}>
        <h1>{topic.name}</h1>
      </div>

      {isOpen ? (
        <div className="accordion-body">
          <p>{topic.description}</p>
        </div>
      ) : null}
    </div>
  );
}
