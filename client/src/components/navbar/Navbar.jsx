import React from "react";
import "./navbar.css";
export default function navbar() {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item logo">BLF.</li>
          <li className="nav-list-item contact">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
