export const Todo = (props) => {
  const { title, userid, complted } = props;
  return <p>{`${title}(ユーザ：${userid})`} </p>;
};
