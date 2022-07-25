import "./NavBar.css";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
// import CategoryList from "../CategoryList/CategoryList";
import { useState, useEffect } from "react";
// import { findAllByTestId } from "@testing-library/react";
// import CategoryTodo from "../../components/CategoryTodo/CategoryTodo";

export default function NavBar({ user, setUser, categories, setActiveCat }) {
  const [edit, setEdit] = useState(false);

  // Add the following function
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  function setCurrentCat() {
    setActiveCat();
    changeShow();
  }
  function zeroActiveCat() {
    setActiveCat();
    setEdit(false);
  }

  //////////////////////////////
  //DropDown Menu
  //////////////////////////////

  function changeShow(evt) {
    setEdit(!edit);
    // console.log(setActiveCat)
  }
  function closeShow(evt){
    setEdit(false);
  }

  let viewMode = {};
  let editMode = {};

  if (edit) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <>
      <div className="flex w-64" aria-label="Sidebar">
        <div className="overflow-y-auto h-screen bg-stone-800">
          <div>
            <div className="bg-stone-800">
              <div
                className="text-white flex justify-end pt-10 pb-2 px-2 font-bold tracking-tighter"
                id="logo"
              >
                <p id="clearsight">clearsight</p>
              </div>
            </div>
            <div>
              <p className="text-black flex justify-end p-3 mb-0 pb-1 text-base font-extralight bg-orange-400">
                {/* {" "}
                Welcome, {user.name}! */}
              </p>
            </div>
            {/* Begin NavBar */}
            <div id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
              <div>
                <Link
                  to="/"
                  className="pl-3 text-white flex justify-start order-last p-2 border-[#1f1f1f] focus:text-black focus:bg-[#f7f7f2] border-r-8 hover:border-r-8 hover:border-[#f7f7f2] focus:border-[#f7f7f2] transition-colors duration-300 text-lg font-extralight active"
                  aria-selected="true"
                  onClick={zeroActiveCat}
                >
                  <i className="fa-solid fa-house mt-1 text-orange-400"></i>
                  &nbsp;&nbsp;&nbsp;Home
                </Link>
              </div>
              <div>
                <Link
                  to="/notes"
                  className="pl-3 text-white flex justify-start order-last p-2 border-[#1f1f1f] focus:text-black focus:bg-[#f7f7f2] border-r-8 hover:border-r-8 hover:border-[#C8B497] focus:border-[#f7f7f2] transition-colors duration-300 text-lg font-extralight"
                  aria-selected="false" onClick={closeShow}
                >
                  <i className="fa-solid fa-pen-to-square mt-1.5 text-orange-400"></i>
                  &nbsp;&nbsp;&nbsp;Notes
                </Link>
              </div>
              <div>
                <Link
                  to="/todos"
                  className="pl-3 text-white flex justify-start order-last p-2 border-[#1f1f1f] focus:text-black focus:bg-[#f7f7f2] border-r-8 hover:border-r-8 hover:border-[#C8B497] focus:border-[#f7f7f2] transition-colors duration-300 text-lg font-extralight"
                  aria-selected="false"
                  onClick={setCurrentCat}
                >
                  <i className="fa-solid fa-list-check mt-1.5 text-orange-400"></i>
                  &nbsp;&nbsp;&nbsp;To-Do Lists
                </Link>

                <div style={editMode} className="text-white font-extralight">
                  <CategoryTodo
                    categories={categories}
                    setActiveCat={setActiveCat}
                  />
                </div>
              </div>

              <Link
                to="/categories"
                className="pl-3 text-white flex justify-start order-last p-2 border-[#1f1f1f] focus:text-black focus:bg-[#f7f7f2] border-r-8 hover:border-r-8 hover:border-[#C8B497] focus:border-[#f7f7f2] transition-colors duration-300 text-lg font-extralight"
                aria-selected="false" onClick={closeShow}
              >
                <i className="fa-solid fa-tags mt-1.5 text-orange-400"></i>
                &nbsp;&nbsp;&nbsp;Categories
              </Link>

              <Link
                to="/appointments"
                className="pl-3 text-white flex justify-start order-last p-2 border-[#1f1f1f] focus:text-black focus:bg-[#f7f7f2] border-r-8 hover:border-r-8 hover:border-[#C8B497] focus:border-[#f7f7f2] transition-colors duration-300 text-lg font-extralight"
                aria-selected="false" onClick={closeShow}
              >
                <i class="fa-solid fa-calendar-days mt-1 text-orange-400"></i>
                &nbsp;&nbsp;&nbsp;Appointments
              </Link>

              <div>
                <Link
                  to=""
                  onClick={handleLogOut}
                  className="pl-3 text-white flex justify-start order-last p-2 border-[#1f1f1f] focus:text-black focus:bg-[#f7f7f2] border-r-8 hover:border-r-8 hover:border-[#C8B497] active: transition-colors duration-300 text-lg font-extralight"
                  aria-selected="false"
                >
                  <i className="fa-solid fa-arrow-right-from-bracket mt-1.5 text-orange-400"></i>
                  &nbsp;&nbsp;&nbsp;Log Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// text-white flex justify-start p-2.5 text-base border-r-4 hover:border-r-4 hover:border-[#e4e6c3] transition-colors duration-300 text-lg lessmargin borderright font-extralight
