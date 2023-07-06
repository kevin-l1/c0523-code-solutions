import './AppDrawer.css';
import { useState } from 'react';

export default function AppDrawer({ items }) {
  return (
    <>
      <Menu />
      <MenuItems items={items} />
    </>
  );
}

function Menu() {
  return (
    <div>
      <h1>Menu</h1>
    </div>
  );
}

function MenuItems({ items }) {
  let itemArray = items.map((e) => <div class="item">{e}</div>);

  return <div>{itemArray}</div>;
}
