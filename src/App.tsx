import "./App.css";
import { Card } from "./components/Card";
import { PageLayout } from "./components/PageLayout";
import { TodoList } from "./components/todo/TodoList";
import { UserCard } from "./components/UserCard";

const tasks = [
  { id: 1, text: "Выучить пропсы", done: true },

  { id: 2, text: "Понять children", done: false },

  { id: 3, text: "Сделать домашку", done: false },
];

function App() {
  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        <UserCard name="Айбек" age={22} role="Frontend" />

        <UserCard name="Динара" age={28} role="Backend" />

        <UserCard name="Максат" age={19} role="Designer" />
      </div>

      <hr />
      <Card>
        <h2>Заголовок</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
          ducimus non, ea fugit soluta repellendus facilis totam voluptatum
          dolorem assumenda distinctio, blanditiis dolorum similique in, placeat
          aspernatur a. Aut, sequi.
        </p>
      </Card>

      <Card>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/3nkTxmxi2NfpMEZ4IWSJaG/0198fe49a115f5d9b914ce7a806a09cc/0_hero__5_.webp?fit=fill&w=600&h=400" />

        <button>Нажми меня</button>
      </Card>
      <hr />
      <PageLayout
        header={<nav>Моё приложение</nav>}
        sidebar={
          <ul>
            <li>Главная</li>
            <li>О нас</li>
          </ul>
        }
        content={<p>Основной контент страницы</p>}
      />
      <hr />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
