import './AppDrawer.css';
import { useState } from 'react';

export default function AppDrawer({ items }) {
  const [active, setActive] = useState(false);
  function handleHidden() {
    setActive(!active);
  }

  return (
    <>
      <i class="fa-solid fa-bars" onClick={handleHidden}></i>
      <div className={active ? 'container' : 'container hidden'}>
        <Menu text="Hoyoverse Games" />
        <MenuItems items={items} click={handleHidden} />
      </div>
      <div
        className={active ? 'overlay' : 'overlay hidden'}
        onClick={handleHidden}></div>
    </>
  );
}

function Menu({ text }) {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

function MenuItems({ items, click }) {
  let itemArray = items.map((e) => (
    <div className="item" onClick={click}>
      <p>{e}</p>
    </div>
  ));

  return <div className="item-container">{itemArray}</div>;
}
