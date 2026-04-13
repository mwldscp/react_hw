import type { Task } from "./item";

interface TodoItemProps {
  task: Task;
}

export function TodoItem({ task }: TodoItemProps) {
  return (
    <div>
      <li style={{ textDecoration: task.done ? "line-through" : "none" }}>
        <input type="checkbox" checked={task.done} /> {task.text}
      </li>
    </div>
  );
}
