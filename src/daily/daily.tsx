import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Link } = Typography;

export const dailyData = [
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