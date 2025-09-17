import { Avatar } from "antd";
import UriahImage from "./assets/uriah.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="text-center py-[5rem]">
      <Avatar className="w-full" size={160} src={UriahImage}></Avatar>
      <p className="py-3 font-bold text-2xl md:text-3xl">
        Huang, Han-Xuan (黃漢軒)
      </p>
      <div className="flex gap-3 md:gap-0 flex-col">
        <p className="text-xs text-center text-gray-500 md:text-center md:text-base">
          Graduated at National Taipei University of Technology.
        </p>
        <p className="text-xs text-center text-gray-500 md:text-center md:text-base">
          Studying master program at National Yang-Ming Chiao-Tung University.
        </p>
        <p className="text-xs text-center text-gray-500 md:text-center md:text-base">
          Interest in Networking, Cyber Securty (Sandbox and Malware) and
          Network Security.
        </p>
        <div className="border border-gray-300 w-full md:w-[50vw] mx-auto my-5"></div>
      </div>
      <div className="w-full flex gap-5 justify-center">
        <a href="https://github.com/c1ydehhx">
          <FontAwesomeIcon
            icon={faGithubSquare}
            fontSize="4rem"
          />
        </a>
        <a href="https://www.linkedin.com/in/han-xuan-huang-3b50b4238/">
          <FontAwesomeIcon icon={faLinkedin} fontSize="4rem" />
        </a>
        <a href="https://discord.gg/Xg3aZPssEy">
          <FontAwesomeIcon icon={faDiscord} fontSize="4rem" />
        </a>
      </div>
    </div>
  );
}
