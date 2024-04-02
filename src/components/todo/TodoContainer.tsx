/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useAppSelector } from "@/redux/hook";
import AddTodoModel from "./AddTodoModel";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // const { todos } = useAppSelector((state) => state.todo);
  const { data: todos, isLoading } = useGetTodosQuery(undefined);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModel />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-ful h-full rounded-lg space-y-5">
          {todos?.data.map((item: any) => (
            <TodoCard {...item} />
          ))}
          {/* <div className="text-white font-bold text-2xl p-5 flex justify-center items-center">
            <p>There is on task pending</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};



export default TodoContainer;
