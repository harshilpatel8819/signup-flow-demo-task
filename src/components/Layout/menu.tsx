import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const sidebarOptions = [
  {
    title: "Dashboard",
    icon: <FontAwesomeIcon icon={faHouse} />,
    url: "/dashboard",
  },
  {
    title: "Personal Info Signup",
    icon: <FontAwesomeIcon icon={faUser} />,
    url: "/auth/personalinfo-signup",
  },
  {
    title: "MultiStep Signup",
    icon: <FontAwesomeIcon icon={faRightToBracket} />,
    url: "/auth/multistep-signup",
  },
];
