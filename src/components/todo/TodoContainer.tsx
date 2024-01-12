import { Button } from "../ui/button";
import AddTodoModel from "./AddTodoModel";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModel />
        <Button>Filter</Button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-ful h-full rounded-lg space-y-5">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          {/* <div className="text-white font-bold text-2xl p-5 flex justify-center items-center">
          <p>There is on task pending</p>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;