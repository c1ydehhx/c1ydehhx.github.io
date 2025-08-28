import { Avatar, Image, Steps } from "antd";
import NYCU from "./assets/nycu.png";
import NTUT from "./assets/ntut.png";
import UriahLife from "./assets/uriah2.png";

import { aboutDescription } from "./description/about"

const educations = [
  {
    title: "National Yang-Ming Chaio-Tung University",
    description: (
      <div>
        <p>Master (2024-now)</p>
        <p>Institute of Computer and Communications Security</p>
      </div>
    ),
    icon: <Avatar src={NYCU} />,
  },
  {
    title: "National Taipei University of Technology",
    description: (
      <div>
        <p>Bachelor's Degree (2020-2024)</p>
        <p>
          Department of Computer Science and Information Engineering
        </p>
      </div>
    ),
    icon: <Avatar src={NTUT} />,
  },
]

export default function About() {
  return (
    <div className="md:w-[50%] mx-auto flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <p className="text-2xl font-bold">About</p>
        <div className="flex flex-col md:flex-row gap-5">
          <div>
            <Image className="border" src={UriahLife}></Image>
          </div>
          <div className="flex flex-col gap-3 text-sm md:text-base">
            {aboutDescription.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-2xl font-bold">Education</p>
        <Steps
          direction="vertical"
          items={educations}
        ></Steps>
      </div>
    </div>
  );
}
