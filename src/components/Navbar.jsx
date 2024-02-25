import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Tooltip } from "antd";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const Navbar = () => {
  const { activeMenu, handleClick, setActiveMenu, isClicked, setIsClicked } =
    useStateContext();
  const NavButton = ({ title, customFunc, color, icon, dotColor }) => (
    <Tooltip title={title}>
      <button
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        onClick={customFunc}
      >
        <span
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 "
          style={{ background: dotColor }}
        />
        {icon}
      </button>
    </Tooltip>
  );
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((preventMenu) => !preventMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          color="#03c9d7"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          customFunc={() => handleClick("notification")}
          color="#03c9d7"
          icon={<RiNotification3Line />}
        />
      </div>
      <Tooltip title="Profile">
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick("userProfile")}
        >
          <img
            src={avatar}
            className="rounded-full w-8 h-8"
            alt="Profile photo"
          />
          <p>
            <span className="text-gray-400 font-bold ml-1 text-14">Hi, </span>{" "}
            <span className="text-gray-400 font-bold ml-1 text-14">
              Michael
            </span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
      </Tooltip>

      {isClicked.cart && <Cart />}
      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
    </div>
  );
};
export default Navbar;
