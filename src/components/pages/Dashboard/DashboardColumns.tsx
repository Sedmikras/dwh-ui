import {DashboardColumnPanelData} from "../../services/Utils.ts";

interface DashboardColumnsProps {
    columns: DashboardColumnPanelData[];
}

const DashboardColumns: React.FC<DashboardColumnsProps> = ({columns}) => {
    return (
        <div className="container flex flex-col w-full">
            {columns.map(({title, value, isValid}, index) => (
                <div key={index}
                     className={`column ${isValid ? 'valid' : 'invalid'}`}>
                    <div className={'container flex flex-nowrap border-gray-200 border-b-2'}>
                        <div className={'font-bold whitespace-nowrap basis-7/12 border-r-2 border-gray-200 text-left pl-3 text-xl'}>{title}</div>
                        <div className={'container flex basis-5/12 border-gray-200 text-center text-lg'}>
                            <div className={''}>{value}</div>
                            {isValid !== undefined && (
                                <span>{isValid ? '(/)' : '(X)'}</span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DashboardColumns;