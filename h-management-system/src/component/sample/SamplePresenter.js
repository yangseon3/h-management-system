import React from 'react'
//css
import './style.css';
// function
import { getErrorNotice } from './SampleController';

function SamplePresenter() {

    async function handleApiTestClick() {
        let [error, result] = await getErrorNotice();
        if (!error) {   // 성공시
            console.log("전체");
            console.log(result);
            console.log("방법1");
            console.log(result["error_notice"]);
            console.log("방법2");
            console.log(result.error_notice);
        }
        else {  // 실패시
        }
	}
    return (
        <div>
            <p>SamplePresenter</p>
            <button className='sample-block__get-api sample-block__get-api--error-notice' onClick={handleApiTestClick} >api test</button>
        </div>
    )
}

export default SamplePresenter