import React from "react";

type LogoProps = {size:number}

const Logo : React.FC<LogoProps> = (props) => {
    return (
        <div className={'m-3 h-10 grid grid-cols-2 gap-1 content-between'} id={'logo'}>
            <div className={`bg-gray-600 w-${props.size} h-${props.size}`}/>
            <div className={`bg-gray-950 w-${props.size} h-${props.size}`}/>
            <div className={`bg-gray-600 w-${props.size} h-${props.size}`}/>
            <div className={`bg-gray-600 w-${props.size} h-${props.size}`}/>
        </div>
    )
}

export default Logo