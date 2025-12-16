import { Tag } from "antd";
import { useNavigate } from "react-router-dom";

export const Blog = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full">
            <div className="md:w-[50%] mx-auto">
                <h1 className="text-left text-2xl font-bold pb-5">Blog</h1>
                <div className="flex flex-col gap-5">
                    <div className="p-5 rounded border border-gray-300 w-full hover:shadow-lg duration-500 transition-all cursor-pointer">
                        <div onClick={() => navigate("2025f-deep-dive-setup-py")}>
                            <div className="mb-5">
                                <h3 className="font-bold">Solve solvcon CI issue by deep dive <span className="font-mono">setup.py</span> in modmesh</h3>
                                <Tag>2025-12-18</Tag>
                                <Tag color="red">Development</Tag>
                                <Tag color="black">Under construct</Tag>
                            </div>
                            <div className="text-sm flex flex-col gap-2">
                                <p>This is the technical article to record the step of issue solving on solvcon/solvcon GitHub Actions. Due to lack of shared object of packaging, it's necessary to clearify the problem first, then trying to find a good practice to solve the issue.</p>
                                <p>To find good practice, I deep dive <span className="font-mono">setup.py</span> in modmesh as reference. It's worth that get to know how <span className="font-mono">setup.py</span> work, also find clearest solution to solve the issue.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 rounded border border-gray-300 w-full hover:shadow-lg duration-500 transition-all cursor-pointer">
                        <div onClick={() => navigate("2025f-free5gc-dpi")}>
                            <div className="mb-5">
                                <h3 className="font-bold">Efficient and Hardware-Independent Deep Packet Inspection for Free5GC</h3>
                                <Tag>2025-12-15</Tag>
                                <Tag color="orange">Networking</Tag>
                                <Tag color="green">Research Topic</Tag>
                            </div>
                            <div className="text-sm flex flex-col gap-2">
                                <p>This is the technical article for this project started in 2025 fall. We aims to introduce software-based deep packet inspection (DPI) that having the same efficient on hardware-support solution. We propose 3 different method: P4 Assist Method, Full Copy Method, and XDP Method.</p>
                                <p>Based on our research result, the XDP method have the same link throughput and packet blocking-rate on P4 Assist Method. It prove that we achieve that purpose a software-solution and have the same efficient on hardware-support solution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;