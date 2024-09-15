import { Card, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import PolygonDust from "./assets/polygondust.png";
import GiraffeAdventure from "./assets/giraffe-adventure.png";
import { CheckCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

export default function Project() {
  return (
    <div className="md:w-[50%] mx-auto flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <p className="text-2xl font-bold">Project</p>
        <div className="flex flex-col md:flex-row w-full gap-5">
          <Card
            className="hover:shadow-lg hover:duration-300 cursor-pointer w-full md:w-[50%]"
            cover={
              <img
                alt="polygonDust"
                src={PolygonDust}
                className="mx-auto object-scale-down"
                style={{ height: "360px" }}
              />
            }
            onClick={() => {
              window.open("https://github.com/ntut-xuan/PolygonDust", "_blank");
            }}
          >
            <Meta
              title={<div>PolygonDust</div>}
              description={
                <div className="flex flex-col gap-3">
                  <p>
                    PolygonDust is an application to measure the area size of
                    polygon.
                  </p>
                  <div>
                    <Tag icon={<CheckCircleOutlined />} color="success">
                      Maintaining
                    </Tag>
                  </div>
                </div>
              }
            />
          </Card>
          <Card
            className="hover:shadow-lg hover:duration-300 cursor-pointer w-full md:w-[50%]"
            cover={
              <img
                alt="GiraffeAdventure"
                src={GiraffeAdventure}
                className="my-auto object-scale-down"
                style={{ height: "360px" }}
              />
            }
            onClick={() => {
              window.open(
                "https://github.com/ntut-xuan/GiraffeEmojiAdventure",
                "_blank"
              );
            }}
          >
            <Meta
              title={<div>GiraffeAdventure</div>}
              description={
                <div className="flex flex-col gap-3">
                  <p>
                    Giraffe Adventure is a game develop with C++. It shout-out
                    to a game in my childhood named 魔塔.
                  </p>
                  <div>
                    <Tag icon={<MinusCircleOutlined />} color="default">
                      Public Archived
                    </Tag>
                  </div>
                </div>
              }
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
