import { React, useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

import { Table } from 'react-bootstrap';

const KoreaMovieRank = () => {

    const [koreaMovieDataList, setKoreaMovieDataList] = useState('');

    useEffect(() => {
        let nowDate = moment().format('YYYYMMDD')
        nowDate--;
        axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=39575e07a3eb11bb1d7820502d69e33f&targetDt=' +nowDate+ '&repNationCd=K')
            .then((response) => {
                setKoreaMovieDataList(response.data.boxOfficeResult.dailyBoxOfficeList);
                console.log('korea movie ---> ', response.data.boxOfficeResult.dailyBoxOfficeList)
            })
    }, [])




    return (
        <div className='MovieRank'>
            <div>
                {
                    koreaMovieDataList.length > 0 ?
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
                                        {koreaMovieDataList.map((koreaMovieData, index) => {
                                            return (
                                                <tr key={koreaMovieData.rank}>
                                                    <td>{koreaMovieData.movieNm.length > 12 ? `${koreaMovieData.movieNm.slice(0, 12)}....` : koreaMovieData.movieNm}</td>
                                                    <td>{koreaMovieData.rank}</td>
                                                    <td>{koreaMovieData.rankInten}</td>
                                                    <td>{koreaMovieData.openDt}</td>
                                                    <td>{koreaMovieData.audiAcc}</td>
                                                    <td>{koreaMovieData.audiCnt}</td>
                                                    <td>{koreaMovieData.salesAmt}</td>
                                                    <td>{koreaMovieData.salesAcc}</td>
                                                    <td>{koreaMovieData.salesInten}</td>
                                                    <td>{koreaMovieData.audiInten}</td>
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

export default KoreaMovieRank;