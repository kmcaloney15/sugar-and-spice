import * as usersService from "../../utilities/users-service";

import TodoList from "../.././components/TodoList/TodoList";
import * as todoAPI from "../../utilities/todos-api";

import { Link } from "react-router-dom";

export default function HomePage({
  user,

}) {
  async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  }

  return (
    <>
      <div className="w-screen h-screen px-8 overflow-hidden">
        <h1 className="font-medium text-3xl text-left px-2 pt-6 pb-2 border-[#1f1f1f] border-b-[1px]">
          <i className="fa-solid fa-house text-orange-400"></i>
          {/* &nbsp; Hello, {user.name}! */}
          &nbsp; Hello, Tester!
        </h1>
      </div>
    </>
  );
}
