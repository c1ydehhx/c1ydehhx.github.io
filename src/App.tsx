import { Avatar, Menu, Tabs } from "antd";
import "./output.css";
import "./custom.css";
import UriahImage from "./assets/uriah.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div>
      <div className="flex flex-row w-screen md:w-[80%] mx-auto border-b">
        <div
          className="w-[40%] md:w-fit h-full flex flex-col justify-center px-3"
          style={{ height: 70 }}
        >
          <p className="text-base text-center align-middle md:text-2xl font-bold text-nowrap">
            Clyde's Webpage
          </p>
        </div>
        <div className="w-[60%]">
          <Tabs
            className="w-full px-5"
            tabPosition="top"
            tabBarStyle={{ height: 70 }}
            items={[
              {
                label: "Home",
                key: "home",
              },
              {
                label: "About",
                key: "about",
              },
              {
                label: "Project",
                key: "project",
              },
              {
                label: "Résumé",
                key: "Resume",
              },
            ]}
          ></Tabs>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-center py-5">
          <div className="text-center">
            <Avatar
              className="w-48 h-48"
              src={UriahImage}
              size="large"
            ></Avatar>
            <p className="py-3 font-bold text-2xl md:text-3xl">
              Huang, (Clyde) Han-Xuan
            </p>
            <div className="flex gap-3 md:gap-0 flex-col">
              <p className="text-xs text-center text-gray-500 md:text-center md:text-base">
                Graduated at National Taipei University of Technology.
              </p>
              <p className="text-xs text-center text-gray-500 md:text-center md:text-base">
                Studying master program at National Yang-Ming Chiao-Tong
                University.
              </p>
              <p className="text-xs text-center text-gray-500 md:text-center md:text-base">
                Interest in Networking, Cyber Securty (Sandbox and Malware) and
                Network Security.
              </p>
            </div>
            <div className="border w-75 my-5"></div>
            <div className="w-100 flex gap-3 justify-center">
              <FontAwesomeIcon
                icon={faGithubSquare}
                className="w-16 h-12 md:h-16"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-16 h-12 md:h-16"
              />
              <FontAwesomeIcon icon={faDiscord} className="w-16 h-12 md:h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
