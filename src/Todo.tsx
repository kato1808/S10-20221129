import { TodoType } from "./types/todo";

export const Todo = (props: Omit<TodoType, "id">) => {
  const { title, userId, completed = false } = props;
  const compeleteMark = completed ? "【完】" : "【未】";
  return <p>{`${compeleteMark}${title}(ユーザ：${userId})`} </p>;
};
