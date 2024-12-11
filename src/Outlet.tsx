import { Tabs } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-row w-[95%] md:w-[80%] mx-auto border-b">
        <div
          className="w-[40%] md:w-fit h-full flex flex-col justify-center px-3"
          style={{ height: 70 }}
        >
          <a href="/#/">
            <p className="text-base text-center align-middle md:text-2xl font-bold text-nowrap">
              Clyde's Webpage
            </p>
          </a>
        </div>
        <div className="w-[60%]">
          <Tabs
            className="w-full px-5"
            tabPosition="top"
            tabBarStyle={{ height: 70 }}
            items={[
              {
                label: "Home",
                key: "",
              },
              {
                label: "About",
                key: "about",
              },
              {
                label: "Project",
                key: "project",
              },
            ]}
            onTabClick={(key: string) => {
              navigate(`/${key}`);
            }}
          ></Tabs>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-center py-5"></div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
