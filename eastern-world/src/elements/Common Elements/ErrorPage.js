import React, {useState, useMemo, useEffect, memo, useCallback} from 'react';
import "./ErrorPage.css"

const Error = () =>{
    return (
        <div style={{transform: "rotateX(-180deg)"}} className='Error'>40<span style={{transform: "rotateY(-180deg)"}}>4</span></div>
    )
}

export default memo(Error)