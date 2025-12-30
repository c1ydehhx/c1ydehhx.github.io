import { Tag } from "antd";
import Link from "next/link";

export const Blog = () => {
    return (
        <div className="w-full">
            <div className="md:w-[50%] mx-auto">
                <h1 className="text-left text-2xl font-bold pb-5">Blog</h1>
                <div className="flex flex-col gap-5">
                    <div className="p-5 rounded border border-gray-300 w-full hover:shadow-lg duration-500 transition-all cursor-pointer">
                        <Link href="/blog/2025f-deep-dive-setup-py" className="block">
                            <div className="mb-5">
                                <h3 className="font-bold">Solve solvcon CI issue by deep dive <span className="font-mono">setup.py</span> in modmesh</h3>
                                <div className="flex flex-row gap-2">
                                    <Tag variant="outlined" >2025-12-17</Tag>
                                    <Tag variant="outlined" color="red">Development</Tag>
                                </div>
                            </div>
                            <div className="text-sm flex flex-col gap-2">
                                <p>This is the technical article to record the step of issue solving on solvcon/solvcon GitHub Actions. Due to lack of shared object of packaging, it's necessary to clearify the problem first, then trying to find a good practice to solve the issue.</p>
                                <p>To find good practice, I deep dive <span className="font-mono">setup.py</span> in modmesh as reference. It's worth that get to know how <span className="font-mono">setup.py</span> work, also find clearest solution to solve the issue.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="p-5 rounded border border-gray-300 w-full hover:shadow-lg duration-500 transition-all cursor-pointer">
                        <Link href="/blog/2025f-free5gc-dpi" className="block">
                            <div className="mb-5">
                                <h3 className="font-bold">Efficient and Hardware-Independent Deep Packet Inspection for Free5GC</h3>
                                <div className="flex flex-row gap-2">
                                    <Tag variant="outlined" >2025-12-15</Tag>
                                    <Tag variant="outlined" color="orange">Networking</Tag>
                                    <Tag variant="outlined" color="green">Research Topic</Tag>
                                </div>
                            </div>
                            <div className="text-sm flex flex-col gap-2">
                                <p>This is the technical article for this project started in 2025 fall. We aims to introduce software-based deep packet inspection (DPI) that having the same efficient on hardware-support solution. We propose 3 different method: P4 Assist Method, Full Copy Method, and XDP Method.</p>
                                <p>Based on our research result, the XDP method have the same link throughput and packet blocking-rate on P4 Assist Method. It prove that we achieve that purpose a software-solution and have the same efficient on hardware-support solution.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;