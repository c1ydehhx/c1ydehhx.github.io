import { Avatar, Image, Steps } from "antd";

import { aboutDescription } from "@/description/about"

const educations = [
  {
    title: "National Yang-Ming Chaio-Tung University",
    content: (
      <div>
        <p>Master (2024-now)</p>
        <p>Institute of Computer and Communications Security</p>
      </div>
    ),
    icon: <Avatar src="/image/nycu.png" />,
  },
  {
    title: "National Taipei University of Technology",
    content: (
      <div>
        <p>Bachelor's Degree (2020-2024)</p>
        <p>
          Department of Computer Science and Information Engineering
        </p>
      </div>
    ),
    icon: <Avatar src="/image/ntut.png" />,
  },
]

export default function About() {
  return (
    <div className="md:w-[50%] mx-auto flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <p className="text-2xl font-bold">About</p>
        <div className="flex flex-col lg:flex-row gap-5">
          <div>
            <Image className="border border-gray-300" src="/image/uriah2.png"></Image>
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
          orientation="vertical"
          items={educations}
        ></Steps>
      </div>
    </div>
  );
}
