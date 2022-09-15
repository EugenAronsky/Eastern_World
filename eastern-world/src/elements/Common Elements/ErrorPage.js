import React, {useState, useMemo, useEffect, memo, useCallback} from 'react';
import "./ErrorPage.css"

const Error = () =>{
    return (
        <div className='Error'>404</div>
    )
}

export default memo(Error)