import type { Task } from "./item";
import { TodoItem } from "./TodoItem";
interface TodoListProps {
  tasks: Task[];
}
export function TodoList({ tasks }: TodoListProps) {
  return (
    <div>
      <h2>Список задач</h2>
      <ul>
        {tasks.map((item) => (
          <TodoItem key={item.id} task={item} />
        ))}
      </ul>
    </div>
  );
}
