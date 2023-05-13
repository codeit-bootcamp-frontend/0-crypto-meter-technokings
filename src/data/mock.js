/**
 * // api 문제점 : 무료 버전은 요청 제한이 빡빡해서 한번에 다 불러오는 건 괜찮은데, 페이지네이션으로 여러 번 요청하다보면 한번씩 429 error 발생
 *   => 한번에 불러오는 페이지 개수를 늘리거나, 한번에 불러오거나..?
 *
 * GET /coins/markets
 *
 * https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d
 *
 * - vs_currency : 화폐 단위
 * - order : 정렬 순서 (market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc)
 * - ids: 코인 id
 * - per_page : 한 페이지 당 불러올 개수
 * - page : 페이지 개수
 * - price_change_percentage : 변동량 => 1시간, 24시간, 7일 (1h%2C24h%2C7d)
 */

/**
 * markets.map((market) => {
 *    순위 - market.market_cap_rank
 *    화폐 이름 - market.name
 *    화폐 이미지 - market.image
 *    가격 - market.current_price
 *    총 시가 - market.fully-diluted_valuation
 *    24시간 거래량 - market.total_volume
 *    1시간 변동폭 - market.price_change_percentage_1h_in_currency
 *    24시간 변동폭 - market.price_change_percentage_24h_in_currency
 *    7일 변동폭 - market.price_change_percentage_7d_in_currency
 * })
 */
export const markets = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 26849,
    market_cap: 520053206062,
    market_cap_rank: 1,
    fully_diluted_valuation: 563756611903,
    total_volume: 16000828515,
    high_24h: 26981,
    low_24h: 25889,
    price_change_24h: 471.35,
    price_change_percentage_24h: 1.78692,
    market_cap_change_24h: 8974538770,
    market_cap_change_percentage_24h: 1.756,
    circulating_supply: 19372043,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 69045,
    ath_change_percentage: -61.12112,
    ath_date: "2021-11-10T14:24:11.849Z",
    atl: 67.81,
    atl_change_percentage: 39487.42165,
    atl_date: "2013-07-06T00:00:00.000Z",
    roi: null,
    last_updated: "2023-05-13T11:11:38.772Z",
    price_change_percentage_1h_in_currency: 0.08499831677472065,
    price_change_percentage_24h_in_currency: 1.7869214423648612,
    price_change_percentage_7d_in_currency: -8.329973137079035,
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    current_price: 1806.56,
    market_cap: 221892488600,
    market_cap_rank: 2,
    fully_diluted_valuation: 221892488600,
    total_volume: 7852436954,
    high_24h: 1814.71,
    low_24h: 1745.22,
    price_change_24h: 39.46,
    price_change_percentage_24h: 2.23278,
    market_cap_change_24h: 7395431019,
    market_cap_change_percentage_24h: 3.4478,
    circulating_supply: 122841588.015919,
    total_supply: 122841588.015919,
    max_supply: null,
    ath: 4878.26,
    ath_change_percentage: -62.95463,
    ath_date: "2021-11-10T14:24:19.604Z",
    atl: 0.432979,
    atl_change_percentage: 417280.626,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: {
      times: 88.9622506312047,
      currency: "btc",
      percentage: 8896.22506312047,
    },
    last_updated: "2023-05-13T11:11:36.698Z",
    price_change_percentage_1h_in_currency: -0.09125405694533582,
    price_change_percentage_24h_in_currency: 2.23278471081376,
    price_change_percentage_7d_in_currency: -6.48599436210391,
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
    current_price: 1.001,
    market_cap: 82843313605,
    market_cap_rank: 3,
    fully_diluted_valuation: 82843313605,
    total_volume: 20467457623,
    high_24h: 1.007,
    low_24h: 0.993962,
    price_change_24h: -0.000213198896715117,
    price_change_percentage_24h: -0.0213,
    market_cap_change_24h: 53127604,
    market_cap_change_percentage_24h: 0.06417,
    circulating_supply: 82797235449.0672,
    total_supply: 82797235449.0672,
    max_supply: null,
    ath: 1.32,
    ath_change_percentage: -24.32417,
    ath_date: "2018-07-24T00:00:00.000Z",
    atl: 0.572521,
    atl_change_percentage: 74.88675,
    atl_date: "2015-03-02T00:00:00.000Z",
    roi: null,
    last_updated: "2023-05-13T11:10:00.472Z",
    price_change_percentage_1h_in_currency: -0.12509110921357797,
    price_change_percentage_24h_in_currency: -0.021303492012697225,
    price_change_percentage_7d_in_currency: -0.11322601910011666,
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image:
      "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
    current_price: 310.31,
    market_cap: 49022871274,
    market_cap_rank: 4,
    fully_diluted_valuation: 62098962968,
    total_volume: 232482305,
    high_24h: 310.73,
    low_24h: 301.78,
    price_change_24h: 4.53,
    price_change_percentage_24h: 1.48022,
    market_cap_change_24h: 728659292,
    market_cap_change_percentage_24h: 1.50879,
    circulating_supply: 157886280,
    total_supply: 157900174,
    max_supply: 200000000,
    ath: 686.31,
    ath_change_percentage: -54.78878,
    ath_date: "2021-05-10T07:24:17.097Z",
    atl: 0.0398177,
    atl_change_percentage: 779170.48017,
    atl_date: "2017-10-19T00:00:00.000Z",
    roi: null,
    last_updated: "2023-05-13T11:11:44.405Z",
    price_change_percentage_1h_in_currency: -0.04582519568156975,
    price_change_percentage_24h_in_currency: 1.4802233237667521,
    price_change_percentage_7d_in_currency: -4.638107651193069,
  },
  {
    id: "usd-coin",
    symbol: "usdc",
    name: "USD Coin",
    image:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
    current_price: 1.001,
    market_cap: 29995566155,
    market_cap_rank: 5,
    fully_diluted_valuation: 29995572800,
    total_volume: 4644572653,
    high_24h: 1.007,
    low_24h: 0.99623,
    price_change_24h: 0.00056161,
    price_change_percentage_24h: 0.05615,
    market_cap_change_24h: 9912439,
    market_cap_change_percentage_24h: 0.03306,
    circulating_supply: 29975182852.9972,
    total_supply: 29975189493.9972,
    max_supply: null,
    ath: 1.17,
    ath_change_percentage: -14.65983,
    ath_date: "2019-05-08T00:40:28.300Z",
    atl: 0.877647,
    atl_change_percentage: 14.03102,
    atl_date: "2023-03-11T08:02:13.981Z",
    roi: null,
    last_updated: "2023-05-13T11:11:37.452Z",
    price_change_percentage_1h_in_currency: 0.011005351519930496,
    price_change_percentage_24h_in_currency: 0.056154707465399016,
    price_change_percentage_7d_in_currency: 0.03941518676686899,
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
    current_price: 0.428417,
    market_cap: 22208299358,
    market_cap_rank: 6,
    fully_diluted_valuation: 42841884827,
    total_volume: 706855543,
    high_24h: 0.433212,
    low_24h: 0.417281,
    price_change_24h: -0.002482693277042259,
    price_change_percentage_24h: -0.57616,
    market_cap_change_24h: -123178101.302845,
    market_cap_change_percentage_24h: -0.55159,
    circulating_supply: 51837820505,
    total_supply: 99988965239,
    max_supply: 100000000000,
    ath: 3.4,
    ath_change_percentage: -87.38114,
    ath_date: "2018-01-07T00:00:00.000Z",
    atl: 0.00268621,
    atl_change_percentage: 15864.72716,
    atl_date: "2014-05-22T00:00:00.000Z",
    roi: null,
    last_updated: "2023-05-13T11:11:39.996Z",
    price_change_percentage_1h_in_currency: 0.011399452357007438,
    price_change_percentage_24h_in_currency: -0.5761644537649057,
    price_change_percentage_7d_in_currency: -7.408762667440111,
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
    image:
      "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
    current_price: 0.365313,
    market_cap: 12801578590,
    market_cap_rank: 7,
    fully_diluted_valuation: 16438028082,
    total_volume: 218986416,
    high_24h: 0.371334,
    low_24h: 0.35456,
    price_change_24h: -0.000738711382563317,
    price_change_percentage_24h: -0.20181,
    market_cap_change_24h: -42336217.9836483,
    market_cap_change_percentage_24h: -0.32962,
    circulating_supply: 35045020830.3234,
    total_supply: 45000000000,
    max_supply: 45000000000,
    ath: 3.09,
    ath_change_percentage: -88.14692,
    ath_date: "2021-09-02T06:00:10.474Z",
    atl: 0.01925275,
    atl_change_percentage: 1800.47682,
    atl_date: "2020-03-13T02:22:55.044Z",
    roi: null,
    last_updated: "2023-05-13T11:11:42.669Z",
    price_change_percentage_1h_in_currency: -0.28790179851640846,
    price_change_percentage_24h_in_currency: -0.2018051593528301,
    price_change_percentage_7d_in_currency: -5.581963975431498,
  },
  {
    id: "staked-ether",
    symbol: "steth",
    name: "Lido Staked Ether",
    image:
      "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546",
    current_price: 1805.03,
    market_cap: 11948881126,
    market_cap_rank: 8,
    fully_diluted_valuation: 11948881126,
    total_volume: 13619139,
    high_24h: 1813.09,
    low_24h: 1745.69,
    price_change_24h: 38.34,
    price_change_percentage_24h: 2.17038,
    market_cap_change_24h: 330665668,
    market_cap_change_percentage_24h: 2.8461,
    circulating_supply: 6619898.78640388,
    total_supply: 6619898.78640388,
    max_supply: 6619898.78640388,
    ath: 4829.57,
    ath_change_percentage: -62.61909,
    ath_date: "2021-11-10T14:40:47.256Z",
    atl: 482.9,
    atl_change_percentage: 273.8562,
    atl_date: "2020-12-22T04:08:21.854Z",
    roi: null,
    last_updated: "2023-05-13T11:11:38.584Z",
    price_change_percentage_1h_in_currency: -0.067816073389471,
    price_change_percentage_24h_in_currency: 2.170377391791885,
    price_change_percentage_7d_in_currency: -6.430054050748598,
  },
  {
    id: "dogecoin",
    symbol: "doge",
    name: "Dogecoin",
    image:
      "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
    current_price: 0.072179,
    market_cap: 10055472760,
    market_cap_rank: 9,
    fully_diluted_valuation: null,
    total_volume: 350407542,
    high_24h: 0.07273,
    low_24h: 0.070277,
    price_change_24h: 0.00001375,
    price_change_percentage_24h: 0.01905,
    market_cap_change_24h: -13451106.952531815,
    market_cap_change_percentage_24h: -0.13359,
    circulating_supply: 139327496383.705,
    total_supply: null,
    max_supply: null,
    ath: 0.731578,
    ath_change_percentage: -90.12734,
    ath_date: "2021-05-08T05:08:23.458Z",
    atl: 0.0000869,
    atl_change_percentage: 83010.60634,
    atl_date: "2015-05-06T00:00:00.000Z",
    roi: null,
    last_updated: "2023-05-13T11:11:36.477Z",
    price_change_percentage_1h_in_currency: -0.12527570442384695,
    price_change_percentage_24h_in_currency: 0.019050538066378568,
    price_change_percentage_7d_in_currency: -7.4545262314482,
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
    current_price: 21.17,
    market_cap: 8370569338,
    market_cap_rank: 10,
    fully_diluted_valuation: 11589954101,
    total_volume: 386687158,
    high_24h: 21.25,
    low_24h: 20.02,
    price_change_24h: 0.886401,
    price_change_percentage_24h: 4.37095,
    market_cap_change_24h: 354040927,
    market_cap_change_percentage_24h: 4.41639,
    circulating_supply: 395476330.597484,
    total_supply: 547579541.447015,
    max_supply: null,
    ath: 259.96,
    ath_change_percentage: -91.85997,
    ath_date: "2021-11-06T21:54:35.825Z",
    atl: 0.500801,
    atl_change_percentage: 4125.38287,
    atl_date: "2020-05-11T19:35:23.449Z",
    roi: null,
    last_updated: "2023-05-13T11:11:35.871Z",
    price_change_percentage_1h_in_currency: -0.22880521876894663,
    price_change_percentage_24h_in_currency: 4.3709474418038745,
    price_change_percentage_7d_in_currency: -6.152117632816682,
  },
];

/**
 * GET /coins/:id/history?date=mm-dd-yyyy
 *
 * 특정 시점의 화폐 정보
 *
 * https://api.coingecko.com/api/v3/coins/bitcoin/history?date=12-05-2023
 *
 */

/**
 * history.map((coin) => {
 *    coin.id
 *    coin.name
 *    coin.image
 *    coin.market_data.current_price.krw
 *    coin.market_data.current_price.usd
 * })
 */

export const history = {
  id: "bitcoin",
  symbol: "btc",
  name: "Bitcoin",
  localization: {
    en: "Bitcoin",
    ko: "비트코인",
  },
  image: {
    thumb:
      "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
    small:
      "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
  },
  market_data: {
    current_price: {
      btc: 1,
      krw: 35916698.02103988,
      usd: 27024.76572929978,
    },
    market_cap: {
      krw: 695636250691196.6,
      usd: 523414877659.3074,
    },
    total_volume: {
      krw: 10305684755782.445,
      usd: 7754296234.077171,
    },
  },
};

/**
 * GET /coins/:id/market_chart
 *
 * https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=krw&days=7
 *
 * GET /coins/:id/market_chart/range는 from, to를 쿼리로 받는다.
 */

export const chart = {
  prices: [
    [1683370805438, 38601361.62244734],
    [1683374404723, 38596814.12374778],
    [1683378007550, 38360993.11172477],
    [1683381674522, 38209942.71351239],
    [1683385222681, 37755525.3468536],
    [1683388846801, 37737524.56714279],
    [1683392419473, 37863072.4275802],
    [1683396013482, 37995548.535370536],
    [1683399616435, 38128321.207764216],
    [1683403253456, 38090567.19984202],
    [1683406881474, 38026987.74457614],
    [1683410463750, 37975223.88799009],
    [1683414096578, 38088518.30800418],
    [1683417612829, 38072742.74965272],
    [1683421236316, 38188017.93195458],
    [1683424811491, 38206694.69475993],
    [1683428421103, 38079031.339090414],
    [1683432007648, 37994533.68732357],
    [1683435610370, 38054087.794501],
  ],
};
