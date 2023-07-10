import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

const links = [
  {
    id: 1,
    value: "Features",
    sub: [
      {
        id: 1,
        value: "Todo List",
        href: "#todo",
        icon: "./images/icon-todo.svg",
      },
      {
        id: 2,
        value: "Calendar",
        href: "#cale",
        icon: "./images/icon-calendar.svg",
      },
      {
        id: 3,
        value: "Reminders",
        href: "#remi",
        icon: "./images/icon-reminders.svg",
      },
      {
        id: 4,
        value: "Planning",
        href: "#plan",
        icon: "./images/icon-planning.svg",
      },
    ],
  },
  {
    id: 2,
    value: "Company",
    sub: [
      {
        id: 1,
        value: "History",
        href: "#his",
      },
      {
        id: 2,
        value: "Our Team",
        href: "#our",
      },
      {
        id: 3,
        value: "Blog",
        href: "#blog",
      },
    ],
  },
  {
    id: 3,
    value: "Careers",
    href: "#car",
  },
  {
    id: 4,
    value: "About",
    href: "#ab",
  },
];

const auth_links = [
  {
    id: 1,
    value: "Login",
    href: "#login",
  },
  {
    id: 2,
    value: "Register",
    href: "#register",
  },
];

function App() {
  return (
    <div className="min-h-screen font-primary bg-white md:bg-tw-white">
      <Header links={links} auth_links={auth_links} />

      <Main />
    </div>
  );
}

export default App;
