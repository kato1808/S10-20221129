type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed } = props;
  const compeleteMark = completed ? "【完】" : "【未】";
  return <p>{`${compeleteMark}${title}(ユーザ：${userId})`} </p>;
};
