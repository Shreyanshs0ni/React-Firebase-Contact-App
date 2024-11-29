import Navbar from "./components/Navbar";
import { FaSearch } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

const App = () => {
  return (
    <div className="max-w-[370px mx-auto px-4">
      <Navbar />{" "}
      <div className="flex gap-2">
        <div className="relative flex flex-grow items-center">
          <FaSearch className="absolute ml-1 text-xl text-white" />
          <input
            type="text"
            placeholder="Search Contact"
            className="h-8 flex-grow rounded-md border border-[orange] bg-transparent pl-8 text-white"
          />
        </div>
        <IoIosAddCircleOutline className="cursor-pointer text-4xl text-white" />
      </div>
    </div>
  );
};

export default App;
