import { GithubOutlined } from "@ant-design/icons";
import { Calendar, Tag, Typography } from "antd";

const { Link } = Typography;

const dailys = [
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

export const DevDaily = () => {
    const bgColor = (topic: string) => {
        if(topic == "dev"){
            return "bg-blue-100"
        }else if(topic == "talk"){
            return "bg-orange-100"
        }
    }
    const tagColor = (topic: string) => {
        if(topic == "dev"){
            return "#1976D2"
        }else if(topic == "talk"){
            return "#F57C00"
        }
    }
    return (
        <div className="w-full">
            <h1 className="text-center text-2xl font-bold py-3">Dev Daily</h1>
            <div className="flex h-[75vh] w-full flex-col gap-3">
                <div className="h-full w-full p-3 md:w-[75%] mx-auto border border-gray-300 rounded shadow">
                    <Calendar fullscreen={false}></Calendar>
                </div>
                <div className="h-full w-full md:w-[75%] flex flex-col gap-3 mx-auto overflow-y-auto">
                    { 
                        dailys.map(daily => {
                            return (
                                <div className={`p-3 border border-gray-300 rounded shadow flex flex-col gap-3 ${bgColor(daily.topic)}`}>
                                    <div>
                                        <h4>{daily.title}</h4>
                                        <Tag color={tagColor(daily.topic)}>{daily.topic}</Tag>
                                        <Tag color="#888888">{daily.date}</Tag>
                                    </div>
                                    <div>
                                        {daily.description}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default DevDaily;