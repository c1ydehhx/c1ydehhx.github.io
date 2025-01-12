import { Avatar, Image, Steps } from "antd";
import NYCU from "./assets/nycu.png";
import NTUT from "./assets/ntut.png";
import UriahLife from "./assets/uriah2.png";

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
            <p>
              Hi, I'm Huang, Han-Xuan. From Tainan, Taiwan. You can call me
              Clyde.
            </p>
            <p>
              I'm interest on Networking, Cyber Securty (Sandbox and Malware)
              and Network Security and still proactive develop lot of interest.
            </p>
            <p>
              Currently, I'm a full-time master student in Network and System
              Lab at National Yang-Ming Chiao-Tong University hosted bt Dr.
              Shie-Yuan Wang. Major on 5G Network Security. Also, I'm work as
              consultant in Information Security Lab at National Taipei
              University of Technology hosted by Dr. Sun, Chin-Yu.
            </p>
            <p>
              I have a huge passion on project development and usually have some
              interesting idea of project. Mostly, I use C++ and Python to
              develop almost everything excepted web application, but I'm study
              Golang now. You may check project page for fetch more information
              about my project.
            </p>
            <p>
              With lot of experience of project development, I already familiar
              with full-stack development, sandbox application development,
              software testing and DevOps (GitHub Action, Jenkins). Moreover,
              because the term project of NYCU NSD course, I am trying to
              develop a project (PolygonDust) based on geomatry calculation now.
            </p>
            <p>
              I'll be glad to exchange the idea or information to people. Feel
              free to contact me if I'm your interest. I'm look forward to have
              a chance to get to know the people who also loved to develop
              project.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-2xl font-bold">Education</p>
        <Steps
          direction="vertical"
          items={[
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
          ]}
        ></Steps>
      </div>
    </div>
  );
}
