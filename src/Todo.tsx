type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
};

export const Todo = (props) => {
  const { title, userid, completed } = props;
  const compeleteMark = completed ? "【完】" : "【未】";
  return <p>{`${compeleteMark}${title}(ユーザ：${userid})`} </p>;
};
