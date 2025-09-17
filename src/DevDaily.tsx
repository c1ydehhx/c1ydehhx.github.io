import { Calendar, Tag } from "antd";
import type { CellRenderInfo } from 'rc-picker/lib/interface';
import dayjs from "dayjs";
import { useState } from "react";
import dailyData from "./daily/daily";

export const DevDaily = () => {
    const [dailys, setDailys] = useState(dailyData);

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
    const dailyEmoji = (topic: string) => {
        if(topic == "dev"){
            return "🔨"
        }else{
            return "💬"
        }
    }
    const cellRender = (date: dayjs.Dayjs, _info: CellRenderInfo<dayjs.Dayjs>) => {
        if(dailyData.map(daily => daily.date).filter(dailyDate => dailyDate == date.format("YYYY-MM-DD")).length > 0){
            return <div className="w-[5px] h-[5px] rounded-full bg-blue-500 mx-auto mt-1"></div>
        }else{
            return <div className="w-[5px] h-[5px] rounded-full bg-white mx-auto mt-1"></div>
        }
    }
    return (
        <div className="w-full">
            <h1 className="text-center text-2xl font-bold py-3">Dev Daily</h1>
            <div className="flex h-[80vh] w-full flex-col gap-3">
                <div className="h-full w-full md:w-[75%] mx-auto border border-gray-300 rounded shadow">
                    <Calendar fullscreen={false} cellRender={cellRender} onSelect={(date, _info) => {
                        setDailys(dailyData.filter(daily => daily.date == date.format("YYYY-MM-DD")))
                    }}></Calendar>
                </div>
                <div className="h-full w-full md:w-[75%] flex flex-col gap-3 mx-auto overflow-y-auto">
                    { 
                        dailys.map(daily => {
                            return (
                                <div className={`p-3 border border-gray-300 rounded shadow flex flex-col gap-3 ${bgColor(daily.topic)}`}>
                                    <div>
                                        <h4 className="font-bold">{dailyEmoji(daily.topic)} {daily.title}</h4>
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