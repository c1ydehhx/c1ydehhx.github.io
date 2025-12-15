import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Link } = Typography;

export const dailyData = [
    {
        date: "2025-12-15",
        topic: "dev",
        title: "Create a pull request #264 on solvcon",
        description: <div>
            <p>Fix missing shared object issue</p>
            <div className="flex flex-col gap-1">
                <Link href="https://github.com/solvcon/solvcon/pull/264"><GithubOutlined /> solvcon/solvcon PR #264</Link>
            </div>
        </div>
    },
    {
        date: "2025-12-08",
        topic: "dev",
        title: "Create a issue #180 on devenv",
        description: <div>
            <p>Application Build failed on ubuntu 24.04 and macos</p>
            <div className="flex flex-col gap-1">
                <Link href="https://github.com/solvcon/devenv/issues/180"><GithubOutlined /> solvcon/devenv issue #180</Link>
            </div>
        </div>
    },
    {
        date: "2025-10-18",
        topic: "dev",
        title: "Create a pull request #600 on modmesh",
        description: <div>
            <p>Remove TimeRegistry related class and test</p>
            <div className="flex flex-col gap-1">
                <Link href="https://github.com/solvcon/modmesh/pull/600"><GithubOutlined /> solvcon/modmesh PR #600</Link>
            </div>
        </div>
    },
    {
        date: "2025-10-02",
        topic: "dev",
        title: "Create a pull request #777 on UERANSIM",
        description: <div>
            <p>Fix missing header to let UERANSIM compile successfully.</p>
            <div className="flex flex-col gap-1">
                <Link href="https://github.com/aligungr/UERANSIM/pull/777"><GithubOutlined /> aligungr/UERANSIM PR #777</Link>
            </div>
        </div>
    },
    {
        date: "2025-09-26",
        topic: "dev",
        title: "Create a issue: 'DNN configuration in webui with the static IP not in DNN static IP CIDR pool should not update successful.' in free5gc",
        description: <div>
            <p>When solving free5gcCTF, I just found that we can assign any static IP and update successful in webconsole.</p>
            <p>The issue should be consider to prevent insufficient resources.</p>
            <div className="flex flex-col gap-1">
                <Link href="https://github.com/free5gc/free5gc/issues/720"><GithubOutlined /> free5gc/free5gc Issue #720</Link>
            </div>
        </div>
    },
    {
        date: "2025-09-24",
        topic: "talk",
        title: "How to: Test your code",
        description: "I handle a talk to describe how to do tests. You may interest in this topic."
    },
    {
        date: "2025-09-18",
        topic: "dev",
        title: "Find and fix a webui bugs on Free5GC and report with issue",
        description: <div>
            <p>I just find out a issue when two both of UE have empty GPSI, the update will show duplicate gpsi alert, which is abnormal.</p>
            <p>Fix it to skip the verification of empty GPSI, and check 3 situation work properly.</p>
            <div className="flex flex-col gap-1">
                <Link href="https://github.com/free5gc/free5gc/issues/718"><GithubOutlined /> free5gc/free5gc Issue #718</Link>
                <Link href="https://github.com/free5gc/webconsole/pull/167"><GithubOutlined /> free5gc/webconole Pull #167</Link>
            </div>
        </div>
    },
    {
        date: "2025-09-18",
        topic: "dev",
        title: "Remove print_statistic function in modmesh",
        description: <div>
            <p>I remove print_statistic function in modmesh for preparing remove TimeRegistry class.</p>
            <div className="flex flex-col gap-1">
                <Link href="https://github.com/solvcon/modmesh/pull/583"><GithubOutlined /> solvcon/modmesh PR #583</Link>
            </div>
        </div>
    },
    {
        date: "2025-09-17",
        topic: "dev",
        title: "Create Dev Daily page on my webiste",
        description: <div>
            <p>It will be a good place to share what I do. For more information, please refer:</p>
            <div className="flex flex-col gap-1">
                <Link href="https://c1ydeh.net/#/devdaily"><LinkOutlined /> Clyde's Page / Dev Daily </Link>
            </div>
        </div>
    },
    {
        date: "2025-09-17",
        topic: "talk",
        title: "How to: Continuous Integrate",
        description: "I handle a talk to describe how to do Continuous Integrate. You may interest in this topic."
    },
    {
        date: "2025-09-17",
        topic: "dev",
        title: "Migrate hypatia with Ubuntu 24.04 and ns3-3.45",
        description: <div className="flex flex-col gap-3">
            <div>
                <p>I migrate hypatia with Ubuntu 24.04 and ns3-3.45. It resolve pointer class migration and outdated dependency issue. I create two fork project.</p>
                <p>For more information, please refer: </p>
            </div>
            <div className="flex flex-col gap-1">
                <Link href="https://github.com/c1ydehhx/hypatia"><GithubOutlined /> c1ydehhx/hypatia</Link>
                <Link href="https://github.com/c1ydehhx/basic-sim"><GithubOutlined /> c1ydehhx/basic-sim</Link>
                <Link href="https://github.com/snkas/hypatia/pull/39"><GithubOutlined /> snkas/hypatia PR#39 </Link>
            </div>
        </div>
    }
]

export default dailyData;