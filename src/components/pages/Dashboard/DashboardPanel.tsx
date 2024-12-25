import React from "react";
import DashboardColumns from "./DashboardColumns.tsx";
import {DashboardColumnPanelData} from "../../services/Utils.ts";

type DashboardProps = {
    title: string,
    columns: DashboardColumnPanelData[],
    graph?: string
}

const DashboardPanel : React.FC<DashboardProps> = (props) => {
    return (
        <div className="container flex w-full border-gray-200 border-2 text-black mt-3">
            <div className="flex-row w-full">
                <div className="bg-gray-300 font-bold text-xl">
                    {props.title}
                </div>
                <DashboardColumns columns={props.columns}/>
                <div>{props.graph}</div>
            </div>
        </div>
    )
}

export default DashboardPanel;