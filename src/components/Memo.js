// 비동기 호출

// useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//         .then((response) => console.log('response.json ---> ', response.json)
//         )
// }, [])

// const getCoins = async () => {
//     const response = await fetch("https://api.coinpaprika.com/v1/tickers");
//     const json = await response.json();
//     console.log('json ===> ', json);
// }


// <Routes>
//     <Route path="/route/:id" element={???}></Route>
// </Routes>

// useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users/' + id)
//         .then(json => {
//             setUser(json.data);
//             setLoading(false);
//         });
// }, []);

// 해당 element의 Link to 속성에 ???:id 부여하면 route 가능



// 네이버 API 호출

    // const [clientId , setClientId] = useState('N4HlVdTQa3M9Tl2igkmq');
    // const [clientSecret , setClientSecret] = useState('JFEcJodtyb');


// useEffect(() => {
//     // const fetchEvents = async () =>{
//     const clientId = 'N4HlVdTQa3M9Tl2igkmq';
//     const clientSecret = 'JFEcJodtyb';

//     console.log(clientId)
//     console.log(clientSecret)

//     try {
//         const res = await axios.get("/v1/search/movie.json", {
//             params: {
//                 query: '코로나확진자',
//                 display: 20
//             },
//             headers: {
//                 'X-Naver-Client-Id': clientId,
//                 'X-Naver-Client-Secret': clientSecret
//             }
//         });
//         console.log(res.data);
//     }
//     catch(e){
//         console.log(e);
//     }
// };
// fetchEvents();

// axios.get("https://openapi.naver.com/v1/search/news.json", {
//     params: {
//         query: '코로나 확진자',
//         display: 20
//     },
//     headers: {
//         'X-Naver-Client-Id': clientId,
//         'X-Naver-Client-Secret': clientSecret
//     }
// })
// .then((response) => {
//     setUserDatas(response.data);
// })
// } , []);


// const testApi = async () => {
//     const clientId = '';
//     const clientSecret = '';
//     let search = '황해';
//     let display = 20;

//     try {
//         const {
//             data: { items },
//         } = await axios.get('http://12.127.199.121:5000/search/movie', {
//             params: { query: search, display: display },
//             headers: {
//                 'X-Naver-Client-Id': clientId,
//                 'X-Naver-Client-Secret': clientSecret,
//             },
//         });

//         console.log('items : ', items);
//     } catch (error) {
//         console.log('err : ', error);
//     }
// };

// useEffect(() => {
//     testApi();
// }, []);
