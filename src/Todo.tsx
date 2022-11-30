import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const compeleteMark = completed ? "【完】" : "【未】";
  return <p>{`${compeleteMark}${title}(ユーザ：${userId})`} </p>;
};
