import { Tabs } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-row w-[100%] md:w-[80%] pr-5 md:pr-0 mx-auto border-b border-gray-300">
        <div
          className="w-[30%] md:w-fit h-full flex flex-col justify-center px-5"
          style={{ height: 70 }}
        >
          <a href="/#/">
            <p className="text-base text-center align-middle md:text-2xl font-bold text-nowrap">
              c1ydehhx
            </p>
          </a>
        </div>
        <div className="w-[70%]">
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
                label: "Dev Daily",
                key: "devdaily",
              },
              {
                label: "Project",
                key: "project",
              },
              {
                label: "Blog",
                key: "blog",
              },
            ]}
            onTabClick={(key: string) => {
              navigate(`/${key}`);
            }}
          ></Tabs>
        </div>
      </div>
      <div className="p-5">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
