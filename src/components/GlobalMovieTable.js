import react, { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';

import {Table} from 'react-bootstrap'


const GlobalMovieTable = () => {

    const [globalMovieDataList , setGlobalMovieDataList] = useState('');


    useEffect(() => {
        let nowDate = moment().format('YYYYMMDD')
        nowDate--;
        console.log(nowDate);
        axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=' +nowDate+ '&repNationCd=F')
            .then((response) => {
                setGlobalMovieDataList(response.data.boxOfficeResult.dailyBoxOfficeList);
                console.log(' movie ---> ', response.data.boxOfficeResult.dailyBoxOfficeList)
            })
    },[])
    return(
        <div className='MovieRank'>
            <div>
                {
                    globalMovieDataList.length > 0 ?
                        <div style={{ width: '100%' }}>
                            <div className='rankTable'>
                                <table >
                                    <thead className="tableHeader" >
                                        <tr>
                                            <th style={{ width: '200px' }} rowSpan='2'>영화 이름</th>
                                            <th style={{ width: '40px' }} rowSpan='2' >순위</th>
                                            <th style={{ width: '80px' }} rowSpan='2'>전일 대비<br />순위 증감</th>
                                            <th style={{ width: '120px' }} rowSpan='2'>개봉일</th>
                                            <th style={{ width: '180px' }} colSpan='2'>관객수</th>
                                            <th style={{ width: '250px' }} colSpan='2'>매출액</th>
                                            <th style={{ width: '200px' }} colSpan='2'>전일 대비 증감</th>
                                        </tr>
                                        <tr>
                                            <th>누적 관객수</th>
                                            <th>오늘 관객수</th>
                                            <th>오늘 매출액</th>
                                            <th style={{ width : '120px'}}>누적 매출액</th>
                                            <th>전일 대비<br />매출액 증감</th>
                                            <th>전일 대비<br />관객수 증감</th>
                                        </tr>
                                    </thead>
                                    <tbody className='movieRankTable'>
                                        {globalMovieDataList.map((globalMovieData, index) => {
                                            return (
                                                <tr key={globalMovieData.rank}>
                                                    <td>{globalMovieData.movieNm.length > 12 ? `${globalMovieData.movieNm.slice(0, 12)}....` : globalMovieData.movieNm}</td>
                                                    <td>{globalMovieData.rank}</td>
                                                    <td>{globalMovieData.rankInten}</td>
                                                    <td>{globalMovieData.openDt}</td>
                                                    <td>{globalMovieData.audiAcc}</td>
                                                    <td>{globalMovieData.audiCnt}</td>
                                                    <td>{globalMovieData.salesAmt}</td>
                                                    <td>{globalMovieData.salesAcc}</td>
                                                    <td>{globalMovieData.salesInten}</td>
                                                    <td>{globalMovieData.audiInten}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        : <div>False</div>
                }
            </div>
        </div>
    )
}

export default GlobalMovieTable;