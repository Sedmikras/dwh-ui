import React, {useEffect, useState} from "react";
import DashboardPanel from "./DashboardPanel.tsx";
import {DashboardColumnPanelData} from "../../services/Utils.ts";
import {getCoreData, getOperationalData, getStageData} from "../../services/DashboardService.ts";

const DashboardForm: React.FC = () => {
    const [stageProps, setStageProps] = useState<DashboardColumnPanelData[]>([])
    const [coreProps, setCoreProps] = useState<DashboardColumnPanelData[]>([])
    const [operationalProps, setOperationalProps] = useState<DashboardColumnPanelData[]>([])
    const version = useState('6.3.0')
    const created = useState('12.11.2024')

    useEffect(() => {
        setStageProps(getStageData)
        }, []
    );

    useEffect(() => {
        setCoreProps(getCoreData)
        }, []
    );

    useEffect(() => {
        setOperationalProps(getOperationalData)}, []
    );

    return (
        <>
            <div className={'flex container w-full border-b-2 border-b-black'}>
                <div className={'flex container'}>
                    <div className={''}>
                        ETL Version: {version}
                    </div>
                    <div className={''}>
                        Created: {created}
                    </div>
                    <div className={'flex ml-auto'}>
                        <div>Logs</div>
                        <div>Monitoring</div>
                    </div>
                </div>
            </div>
            <div className={'flex justify-between items-center'}>
                <div className={'flex basis-1/4'}>
                    <DashboardPanel title={'PRJ Stage'} columns={stageProps} graph={'stage graph'}></DashboardPanel>
                </div>
                <div className={'flex basis-1/4'}>
                    <DashboardPanel title={'PRJ Core'} columns={coreProps} graph={'prj core graph'}></DashboardPanel>
                </div>
                <div className={'flex basis-1/4'}>
                    <DashboardPanel title={'PRJ Operational'} columns={operationalProps}
                                    graph={'operational graph'}></DashboardPanel>
                </div>
            </div>
        </>
    )
}

export default DashboardForm