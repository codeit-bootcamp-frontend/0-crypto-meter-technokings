const DROPDOWN_LIST = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    imageUrl:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
  },
  {
    id: "tether",
    name: "Tether",
    imageUrl:
      "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
  },
  {
    id: "binancecoin",
    name: "BNB",
    imageUrl:
      "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
  },
  {
    id: "usd-coin",
    name: "USD Coin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
  },
  {
    id: "ripple",
    name: "XRP",
    imageUrl:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
  },
  {
    id: "cardano",
    name: "Cardano",
    imageUrl:
      "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
  },
  {
    id: "staked-ether",
    name: "Lido Staked Ether",
    imageUrl:
      "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546",
  },
  {
    id: "dogecoin",
    name: "Dogecoin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
  },
  {
    id: "matic-network",
    name: "Polygon",
    imageUrl:
      "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912",
  },
  {
    id: "solana",
    name: "Solana",
    imageUrl:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
  },
  {
    id: "litecoin",
    name: "Litecoin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580",
  },
  {
    id: "polkadot",
    name: "Polkadot",
    imageUrl:
      "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644",
  },
  {
    id: "tron",
    name: "TRON",
    imageUrl:
      "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066",
  },
  {
    id: "shiba-inu",
    name: "Shiba Inu",
    imageUrl:
      "https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446",
  },
  {
    id: "avalanche-2",
    name: "Avalanche",
    imageUrl:
      "https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1670992574",
  },
  {
    id: "dai",
    name: "Dai",
    imageUrl:
      "https://assets.coingecko.com/coins/images/9956/large/4943.png?1636636734",
  },
  {
    id: "wrapped-bitcoin",
    name: "Wrapped Bitcoin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744",
  },
  {
    id: "uniswap",
    name: "Uniswap",
    imageUrl:
      "https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png?1600306604",
  },
  {
    id: "leo-token",
    name: "LEO Token",
    imageUrl:
      "https://assets.coingecko.com/coins/images/8418/large/leo-token.png?1558326215",
  },
  {
    id: "chainlink",
    name: "Chainlink",
    imageUrl:
      "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700",
  },
  {
    id: "cosmos",
    name: "Cosmos Hub",
    imageUrl:
      "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960",
  },
  {
    id: "the-open-network",
    name: "Toncoin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/17980/large/ton_symbol.png?1670498136",
  },
  {
    id: "okb",
    name: "OKB",
    imageUrl:
      "https://assets.coingecko.com/coins/images/4463/large/WeChat_Image_20220118095654.png?1642471050",
  },
  {
    id: "monero",
    name: "Monero",
    imageUrl:
      "https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1547033729",
  },
  {
    id: "ethereum-classic",
    name: "Ethereum Classic",
    imageUrl:
      "https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1547034169",
  },
  {
    id: "stellar",
    name: "Stellar",
    imageUrl:
      "https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157",
  },
  {
    id: "internet-computer",
    name: "Internet Computer",
    imageUrl:
      "https://assets.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png?1620703073",
  },
  {
    id: "bitcoin-cash",
    name: "Bitcoin Cash",
    imageUrl:
      "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492",
  },
  {
    id: "true-usd",
    name: "TrueUSD",
    imageUrl:
      "https://assets.coingecko.com/coins/images/3449/large/tusd.png?1618395665",
  },
  {
    id: "filecoin",
    name: "Filecoin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/12817/large/filecoin.png?1602753933",
  },
  {
    id: "lido-dao",
    name: "Lido DAO",
    imageUrl:
      "https://assets.coingecko.com/coins/images/13573/large/Lido_DAO.png?1609873644",
  },
  {
    id: "hedera-hashgraph",
    name: "Hedera",
    imageUrl:
      "https://assets.coingecko.com/coins/images/3688/large/hbar.png?1637045634",
  },
  {
    id: "aptos",
    name: "Aptos",
    imageUrl:
      "https://assets.coingecko.com/coins/images/26455/large/aptos_round.png?1666839629",
  },
  {
    id: "crypto-com-chain",
    name: "Cronos",
    imageUrl:
      "https://assets.coingecko.com/coins/images/7310/large/cro_token_logo.png?1669699773",
  },
  {
    id: "quant-network",
    name: "Quant",
    imageUrl:
      "https://assets.coingecko.com/coins/images/3370/large/5ZOu7brX_400x400.jpg?1612437252",
  },
  {
    id: "near",
    name: "NEAR Protocol",
    imageUrl:
      "https://assets.coingecko.com/coins/images/10365/large/near.jpg?1683515160",
  },
  {
    id: "arbitrum",
    name: "Arbitrum",
    imageUrl:
      "https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg?1680097630",
  },
  {
    id: "vechain",
    name: "VeChain",
    imageUrl:
      "https://assets.coingecko.com/coins/images/1167/large/VET_Token_Icon.png?1680067517",
  },
  {
    id: "apecoin",
    name: "ApeCoin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/24383/large/apecoin.jpg?1647476455",
  },
  {
    id: "algorand",
    name: "Algorand",
    imageUrl:
      "https://assets.coingecko.com/coins/images/4380/large/download.png?1547039725",
  },
  {
    id: "the-graph",
    name: "The Graph",
    imageUrl:
      "https://assets.coingecko.com/coins/images/13397/large/Graph_Token.png?1608145566",
  },
  {
    id: "fantom",
    name: "Fantom",
    imageUrl:
      "https://assets.coingecko.com/coins/images/4001/large/Fantom_round.png?1669652346",
  },
  {
    id: "paxos-standard",
    name: "Pax Dollar",
    imageUrl:
      "https://assets.coingecko.com/coins/images/6013/large/Pax_Dollar.png?1629877204",
  },
  {
    id: "frax",
    name: "Frax",
    imageUrl:
      "https://assets.coingecko.com/coins/images/13422/large/FRAX_icon.png?1679886922",
  },
  {
    id: "edgecoin-2",
    name: "Edgecoin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/14409/large/edgecoin_bank_logo-4_%281%29.png?1673251201",
  },
  {
    id: "the-sandbox",
    name: "The Sandbox",
    imageUrl:
      "https://assets.coingecko.com/coins/images/12129/large/sandbox_logo.jpg?1597397942",
  },
  {
    id: "eos",
    name: "EOS",
    imageUrl:
      "https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png?1547034481",
  },
  {
    id: "rocket-pool",
    name: "Rocket Pool",
    imageUrl:
      "https://assets.coingecko.com/coins/images/2090/large/rocket_pool_%28RPL%29.png?1637662441",
  },
  {
    id: "elrond-erd-2",
    name: "MultiversX",
    imageUrl:
      "https://assets.coingecko.com/coins/images/12335/large/egld-token-logo.png?1673490885",
  },
  {
    id: "aave",
    name: "Aave",
    imageUrl:
      "https://assets.coingecko.com/coins/images/12645/large/AAVE.png?1601374110",
  },
  {
    id: "blockstack",
    name: "Stacks",
    imageUrl:
      "https://assets.coingecko.com/coins/images/2069/large/Stacks_logo_full.png?1604112510",
  },
  {
    id: "decentraland",
    name: "Decentraland",
    imageUrl:
      "https://assets.coingecko.com/coins/images/878/large/decentraland-mana.png?1550108745",
  },
  {
    id: "theta-token",
    name: "Theta Network",
    imageUrl:
      "https://assets.coingecko.com/coins/images/2538/large/theta-token-logo.png?1548387191",
  },
  {
    id: "render-token",
    name: "Render",
    imageUrl:
      "https://assets.coingecko.com/coins/images/11636/large/rndr.png?1638840934",
  },
  {
    id: "tezos",
    name: "Tezos",
    imageUrl:
      "https://assets.coingecko.com/coins/images/976/large/Tezos-logo.png?1547034862",
  },
  {
    id: "axie-infinity",
    name: "Axie Infinity",
    imageUrl:
      "https://assets.coingecko.com/coins/images/13029/large/axie_infinity_logo.png?1604471082",
  },
  {
    id: "flow",
    name: "Flow",
    imageUrl:
      "https://assets.coingecko.com/coins/images/13446/la…94c0c7a8cda55cb1c936_Flow_Wordmark.png?1631696776",
  },
  {
    id: "havven",
    name: "Synthetix Network",
    imageUrl:
      "https://assets.coingecko.com/coins/images/3406/large/SNX.png?1598631139",
  },
  {
    id: "bitdao",
    name: "BitDAO",
    imageUrl:
      "https://assets.coingecko.com/coins/images/17627/large/rI_YptK8.png?1653983088",
  },
  {
    id: "immutable-x",
    name: "ImmutableX",
    imageUrl:
      "https://assets.coingecko.com/coins/images/17233/large/immutableX-symbol-BLK-RGB.png?1665110648",
  },
  {
    id: "gala",
    name: "GALA",
    imageUrl:
      "https://assets.coingecko.com/coins/images/12493/large/GALA-COINGECKO.png?1600233435",
  },
  {
    id: "usdd",
    name: "USDD",
    imageUrl:
      "https://assets.coingecko.com/coins/images/25380/large/UUSD.jpg?1651823371",
  },
  {
    id: "radix",
    name: "Radix",
    imageUrl:
      "https://assets.coingecko.com/coins/images/4374/large/Radix.png?1629701658",
  },
  {
    id: "pepe",
    name: "Pepe",
    imageUrl:
      "https://assets.coingecko.com/coins/images/29850/large/pepe-token.jpeg?1682922725",
  },
  {
    id: "kucoin-shares",
    name: "KuCoin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/1047/large/sa9z79.png?1610678720",
  },
  {
    id: "rocket-pool-eth",
    name: "Rocket Pool ETH",
    imageUrl:
      "https://assets.coingecko.com/coins/images/20764/large/reth.png?1637652366",
  },
  {
    id: "gatechain-token",
    name: "Gate",
    imageUrl:
      "https://assets.coingecko.com/coins/images/8183/large/gt.png?1556085624",
  },
  {
    id: "curve-dao-token",
    name: "Curve DAO",
    imageUrl:
      "https://assets.coingecko.com/coins/images/12124/large/Curve.png?1597369484",
  },
  {
    id: "bitcoin-cash-sv",
    name: "Bitcoin SV",
    imageUrl:
      "https://assets.coingecko.com/coins/images/6799/large/BSV.png?1558947902",
  },
  {
    id: "whitebit",
    name: "WhiteBIT Token",
    imageUrl:
      "https://assets.coingecko.com/coins/images/27045/large/wbt_token.png?1667923752",
  },
  {
    id: "bitget-token",
    name: "Bitget Token",
    imageUrl:
      "https://assets.coingecko.com/coins/images/11610/large/photo_2022-01-24_14-08-03.jpg?1643019457",
  },
  {
    id: "neo",
    name: "NEO",
    imageUrl:
      "https://assets.coingecko.com/coins/images/480/large/NEO_512_512.png?1594357361",
  },
  {
    id: "conflux-token",
    name: "Conflux",
    imageUrl:
      "https://assets.coingecko.com/coins/images/13079/large/3vuYMbjN.png?1631512305",
  },
  {
    id: "sui",
    name: "Sui",
    imageUrl:
      "https://assets.coingecko.com/coins/images/26375/large/sui_asset.jpeg?1683114182",
  },
  {
    id: "gemini-dollar",
    name: "Gemini Dollar",
    imageUrl:
      "https://assets.coingecko.com/coins/images/5992/large/gemini-dollar-gusd.png?1536745278",
  },
  {
    id: "chiliz",
    name: "Chiliz",
    imageUrl:
      "https://assets.coingecko.com/coins/images/8834/large/CHZ_Token_updated.png?1675848257",
  },
  {
    id: "bittorrent",
    name: "BitTorrent",
    imageUrl:
      "https://assets.coingecko.com/coins/images/22457/large/btt_logo.png?1643857231",
  },
  {
    id: "maker",
    name: "Maker",
    imageUrl:
      "https://assets.coingecko.com/coins/images/1364/large/Mark_Maker.png?1585191826",
  },
  {
    id: "injective-protocol",
    name: "Injective",
    imageUrl:
      "https://assets.coingecko.com/coins/images/12882/large/Secondary_Symbol.png?1628233237",
  },
  {
    id: "klay-token",
    name: "Klaytn",
    imageUrl:
      "https://assets.coingecko.com/coins/images/9672/large/klaytn.png?1660288824",
  },
  {
    id: "optimism",
    name: "Optimism",
    imageUrl:
      "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1660904599",
  },
  {
    id: "casper-network",
    name: "Casper Network",
    imageUrl:
      "https://assets.coingecko.com/coins/images/15279/large/casper.PNG?1620341020",
  },
  {
    id: "kava",
    name: "Kava",
    imageUrl:
      "https://assets.coingecko.com/coins/images/9761/large/kava.png?1663638871",
  },
  {
    id: "gmx",
    name: "GMX",
    imageUrl:
      "https://assets.coingecko.com/coins/images/18323/large/arbit.png?1631532468",
  },
  {
    id: "terra-luna",
    name: "Terra Luna Classic",
    imageUrl:
      "https://assets.coingecko.com/coins/images/8284/large/01_LunaClassic_color.png?1653547790",
  },
  {
    id: "mina-protocol",
    name: "Mina Protocol",
    imageUrl:
      "https://assets.coingecko.com/coins/images/15628/large/JM4_vQ34_400x400.png?1621394004",
  },
  {
    id: "pax-gold",
    name: "PAX Gold",
    imageUrl:
      "https://assets.coingecko.com/coins/images/9519/large/paxg.PNG?1568542565",
  },
  {
    id: "frax-share",
    name: "Frax Share",
    imageUrl:
      "https://assets.coingecko.com/coins/images/13423/large/Frax_Shares_icon.png?1679886947",
  },
  {
    id: "ecash",
    name: "eCash",
    imageUrl:
      "https://assets.coingecko.com/coins/images/16646/large/Logo_final-22.png?1628239446",
  },
  {
    id: "tokenize-xchange",
    name: "Tokenize Xchange",
    imageUrl:
      "https://assets.coingecko.com/coins/images/4984/large/TKX_-_Logo_-_RGB-15.png?1672912391",
  },
  {
    id: "iota",
    name: "IOTA",
    imageUrl:
      "https://assets.coingecko.com/coins/images/692/large/IOTA_Swirl.png?1604238557",
  },
  {
    id: "dash",
    name: "Dash",
    imageUrl:
      "https://assets.coingecko.com/coins/images/19/large/dash-logo.png?1548385930",
  },
  {
    id: "tether-gold",
    name: "Tether Gold",
    imageUrl:
      "https://assets.coingecko.com/coins/images/10481/large/Tether_Gold.png?1668148656",
  },
  {
    id: "huobi-token",
    name: "Huobi",
    imageUrl:
      "https://assets.coingecko.com/coins/images/2822/large/huobi-token-logo.png?1547036992",
  },
  {
    id: "compound-ether",
    name: "cETH",
    imageUrl:
      "https://assets.coingecko.com/coins/images/10643/large/ceth2.JPG?1581389598",
  },
  {
    id: "flare-networks",
    name: "Flare",
    imageUrl:
      "https://assets.coingecko.com/coins/images/28624/large/FLR-icon200x200.png?1673325704",
  },
  {
    id: "trust-wallet-token",
    name: "Trust Wallet",
    imageUrl:
      "https://assets.coingecko.com/coins/images/11085/large/Trust.png?1588062702",
  },
  {
    id: "xdce-crowd-sale",
    name: "XDC Network",
    imageUrl:
      "https://assets.coingecko.com/coins/images/2912/large/xdc-icon.png?1633700890",
  },
  {
    id: "zilliqa",
    name: "Zilliqa",
    imageUrl:
      "https://assets.coingecko.com/coins/images/2687/large/Zilliqa-logo.png?1547036894",
  },
  {
    id: "compound-usd-coin",
    name: "cUSDC",
    imageUrl:
      "https://assets.coingecko.com/coins/images/9442/large/Compound_USDC.png?1567581577",
  },
  {
    id: "woo-network",
    name: "WOO Network",
    imageUrl:
      "https://assets.coingecko.com/coins/images/12921/large/w2UiemF__400x400.jpg?1603670367",
  },
  {
    id: "frax-ether",
    name: "Frax Ether",
    imageUrl:
      "https://assets.coingecko.com/coins/images/28284/large/frxETH_icon.png?1679886981",
  },
  {
    id: "nexo",
    name: "NEXO",
    imageUrl:
      "https://assets.coingecko.com/coins/images/3695/large/nexo.png?1548086057",
  },
  {
    id: "pancakeswap-token",
    name: "PancakeSwap",
    imageUrl:
      "https://assets.coingecko.com/coins/images/12632/large/pancakeswap-cake-logo_%281%29.png?1629359065",
  },
  {
    id: "loopring",
    name: "Loopring",
    imageUrl:
      "https://assets.coingecko.com/coins/images/913/large/LRC.png?1572852344",
  },
  {
    id: "mask-network",
    name: "Mask Network",
    imageUrl:
      "https://assets.coingecko.com/coins/images/14051/large/Mask_Network.jpg?1614050316",
  },
  {
    id: "convex-finance",
    name: "Convex Finance",
    imageUrl:
      "https://assets.coingecko.com/coins/images/15585/large/convex.png?1621256328",
  },
  {
    id: "osmosis",
    name: "Osmosis",
    imageUrl:
      "https://assets.coingecko.com/coins/images/16724/large/osmo.png?1632763885",
  },
  {
    id: "enjincoin",
    name: "Enjin Coin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/1102/large/enjin-coin-logo.png?1547035078",
  },
  {
    id: "thorchain",
    name: "THORChain",
    imageUrl:
      "https://assets.coingecko.com/coins/images/6595/large/Rune200x200.png?1671179394",
  },
  {
    id: "dydx",
    name: "dYdX",
    imageUrl:
      "https://assets.coingecko.com/coins/images/17500/large/hjnIm9bV.jpg?1628009360",
  },
  {
    id: "singularitynet",
    name: "SingularityNET",
    imageUrl:
      "https://assets.coingecko.com/coins/images/2138/large/singularitynet.png?1548609559",
  },
  {
    id: "nxm",
    name: "Nexus Mutual",
    imageUrl:
      "https://assets.coingecko.com/coins/images/11810/large/NXMmain.png?1674799570",
  },
  {
    id: "arweave",
    name: "Arweave",
    imageUrl:
      "https://assets.coingecko.com/coins/images/4343/large/oRt6SiEN_400x400.jpg?1591059616",
  },
  {
    id: "btse-token",
    name: "BTSE Token",
    imageUrl:
      "https://assets.coingecko.com/coins/images/10807/large/BTSE_logo_Square.jpeg?1583965964",
  },
  {
    id: "basic-attention-token",
    name: "Basic Attention",
    imageUrl:
      "https://assets.coingecko.com/coins/images/677/large/basic-attention-token.png?1547034427",
  },
  {
    id: "1inch",
    name: "1inch",
    imageUrl:
      "https://assets.coingecko.com/coins/images/13469/large/1inch-token.png?1608803028",
  },
  {
    id: "baby-doge-coin",
    name: "Baby Doge Coin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/16125/large/babydoge.jpg?1676303229",
  },
  {
    id: "floki",
    name: "FLOKI",
    imageUrl:
      "https://assets.coingecko.com/coins/images/16746/large/PNG_image.png?1643184642",
  },
  {
    id: "kaspa",
    name: "Kaspa",
    imageUrl:
      "https://assets.coingecko.com/coins/images/25751/large/kaspa-icon-exchanges.png?1653891958",
  },
  {
    id: "gnosis",
    name: "Gnosis",
    imageUrl:
      "https://assets.coingecko.com/coins/images/662/large/logo_square_simple_300px.png?1609402668",
  },
  {
    id: "holotoken",
    name: "Holo",
    imageUrl:
      "https://assets.coingecko.com/coins/images/3348/large/Holologo_Profile.png?1547037966",
  },
  {
    id: "nem",
    name: "NEM",
    imageUrl:
      "https://assets.coingecko.com/coins/images/242/large/NEM_WC_Logo_200px.png?1642668663",
  },
  {
    id: "oec-token",
    name: "OKT Chain",
    imageUrl:
      "https://assets.coingecko.com/coins/images/13708/large/WeChat_Image_20220118095654.png?1642471094",
  },
  {
    id: "mx-token",
    name: "MX",
    imageUrl:
      "https://assets.coingecko.com/coins/images/8545/large/MEXC_GLOBAL_LOGO.jpeg?1670213280",
  },
  {
    id: "zcash",
    name: "Zcash",
    imageUrl:
      "https://assets.coingecko.com/coins/images/486/large/circle-zcash-color.png?1547034197",
  },
  {
    id: "cdai",
    name: "cDAI",
    imageUrl:
      "https://assets.coingecko.com/coins/images/9281/large/cDAI.png?1576467585",
  },
  {
    id: "marumarunft",
    name: "marumaruNFT",
    imageUrl:
      "https://assets.coingecko.com/coins/images/27672/la…e23f86-426d-4a0f-9d66-10da3d58baf5.png?1665158519",
  },
  {
    id: "liquity-usd",
    name: "Liquity USD",
    imageUrl:
      "https://assets.coingecko.com/coins/images/14666/large/Group_3.png?1617631327",
  },
  {
    id: "safemoon",
    name: "SafeMoon [OLD]",
    imageUrl:
      "https://assets.coingecko.com/coins/images/14362/large/174x174-white.png?1617174846",
  },
  {
    id: "qtum",
    name: "Qtum",
    imageUrl:
      "https://assets.coingecko.com/coins/images/684/large/Qtum_Logo_blue_CG.png?1637155875",
  },
  {
    id: "ordinals",
    name: "ORDI",
    imageUrl:
      "https://assets.coingecko.com/coins/images/30162/large/ordi.png?1683527689",
  },
  {
    id: "theta-fuel",
    name: "Theta Fuel",
    imageUrl:
      "https://assets.coingecko.com/coins/images/8029/large/1_0YusgngOrriVg4ZYx4wOFQ.png?1553483622",
  },
  {
    id: "ethereum-name-service",
    name: "Ethereum Name Service",
    imageUrl:
      "https://assets.coingecko.com/coins/images/19785/large/acatxTm8_400x400.jpg?1635850140",
  },
  {
    id: "oasis-network",
    name: "Oasis Network",
    imageUrl:
      "https://assets.coingecko.com/coins/images/13162/large/rose.png?1605772906",
  },
  {
    id: "fetch-ai",
    name: "Fetch.ai",
    imageUrl:
      "https://assets.coingecko.com/coins/images/5681/large/Fetch.jpg?1572098136",
  },
  {
    id: "chia",
    name: "Chia",
    imageUrl:
      "https://assets.coingecko.com/coins/images/15174/large/zV5K5y9f_400x400.png?1620024414",
  },
  {
    id: "celo",
    name: "Celo",
    imageUrl:
      "https://assets.coingecko.com/coins/images/11090/large/InjXBNx9_400x400.jpg?1674707499",
  },
  {
    id: "ravencoin",
    name: "Ravencoin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/3412/large/ravencoin.png?1548386057",
  },
  {
    id: "audius",
    name: "Audius",
    imageUrl:
      "https://assets.coingecko.com/coins/images/12913/large/AudiusCoinLogo_2x.png?1603425727",
  },
  {
    id: "decred",
    name: "Decred",
    imageUrl:
      "https://assets.coingecko.com/coins/images/329/large/decred.png?1547034093",
  },
  {
    id: "terra-luna-2",
    name: "Terra",
    imageUrl:
      "https://assets.coingecko.com/coins/images/25767/large/01_Luna_color.png?1653556122",
  },
  {
    id: "defichain",
    name: "DeFiChain",
    imageUrl:
      "https://assets.coingecko.com/coins/images/11757/large/symbol-defi-blockchain_200.png?1597306538",
  },
  {
    id: "link",
    name: "LINK",
    imageUrl:
      "https://assets.coingecko.com/coins/images/6450/large/linklogo.png?1547042644",
  },
  {
    id: "staked-frax-ether",
    name: "Staked Frax Ether",
    imageUrl:
      "https://assets.coingecko.com/coins/images/28285/large/sfrxETH_icon.png?1679886768",
  },
  {
    id: "swipe",
    name: "SXP",
    imageUrl:
      "https://assets.coingecko.com/coins/images/9368/large/swipe.png?1566792311",
  },
  {
    id: "aleph-zero",
    name: "Aleph Zero",
    imageUrl:
      "https://assets.coingecko.com/coins/images/17212/large/gtmuTVa.png?1626853180",
  },
  {
    id: "icon",
    name: "ICON",
    imageUrl:
      "https://assets.coingecko.com/coins/images/1060/large/icon-icx-logo.png?1547035003",
  },
  {
    id: "illuvium",
    name: "Illuvium",
    imageUrl:
      "https://assets.coingecko.com/coins/images/14468/large/logo-200x200.png?1682415398",
  },
  {
    id: "stepn",
    name: "STEPN",
    imageUrl:
      "https://assets.coingecko.com/coins/images/23597/large/gmt.png?1644658792",
  },
  {
    id: "compound-governance-token",
    name: "Compound",
    imageUrl:
      "https://assets.coingecko.com/coins/images/10775/large/COMP.png?1592625425",
  },
  {
    id: "huobi-btc",
    name: "Huobi BTC",
    imageUrl:
      "https://assets.coingecko.com/coins/images/12407/large/Unknown-5.png?1599624896",
  },
  {
    id: "astar",
    name: "Astar",
    imageUrl:
      "https://assets.coingecko.com/coins/images/22617/large/astr.png?1642314057",
  },
  {
    id: "jasmycoin",
    name: "JasmyCoin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/13876/large/JASMY200x200.jpg?1612473259",
  },
  {
    id: "bitcoin-gold",
    name: "Bitcoin Gold",
    imageUrl:
      "https://assets.coingecko.com/coins/images/1043/large/bitcoin-gold-logo.png?1547034978",
  },
  {
    id: "dao-maker",
    name: "DAO Maker",
    imageUrl:
      "https://assets.coingecko.com/coins/images/13915/large/4.png?1612838831",
  },
  {
    id: "kusama",
    name: "Kusama",
    imageUrl:
      "https://assets.coingecko.com/coins/images/9568/large/m4zRhP5e_400x400.jpg?1576190080",
  },
  {
    id: "beldex",
    name: "Beldex",
    imageUrl:
      "https://assets.coingecko.com/coins/images/5111/large/Beldex.png?1559189036",
  },
  {
    id: "escoin-token",
    name: "Escoin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/13566/large/escoin-200.png?1609833886",
  },
  {
    id: "convex-crv",
    name: "Convex CRV",
    imageUrl:
      "https://assets.coingecko.com/coins/images/15586/large/convex-crv.png?1621255952",
  },
  {
    id: "ethereum-pow-iou",
    name: "EthereumPoW",
    imageUrl:
      "https://assets.coingecko.com/coins/images/26997/large/logo-clear.png?1661311105",
  },
  {
    id: "blur",
    name: "Blur",
    imageUrl:
      "https://assets.coingecko.com/coins/images/28453/large/blur.png?1670745921",
  },
  {
    id: "tether-eurt",
    name: "Euro Tether",
    imageUrl:
      "https://assets.coingecko.com/coins/images/17385/large/Tether_new.png?1683650223",
  },
  {
    id: "tominet",
    name: "tomiNet",
    imageUrl:
      "https://assets.coingecko.com/coins/images/28730/large/logo_for_token.png?1673690005",
  },
  {
    id: "balancer",
    name: "Balancer",
    imageUrl:
      "https://assets.coingecko.com/coins/images/11683/large/Balancer.png?1592792958",
  },
  {
    id: "yearn-finance",
    name: "yearn.finance",
    imageUrl:
      "https://assets.coingecko.com/coins/images/11849/large/yearn-finance-yfi.png?1676174746",
  },
  {
    id: "wemix-token",
    name: "WEMIX",
    imageUrl:
      "https://assets.coingecko.com/coins/images/12998/large/wemixcoin_color_200.png?1666768971",
  },
  {
    id: "iotex",
    name: "IoTeX",
    imageUrl:
      "https://assets.coingecko.com/coins/images/3334/large/iotex-logo.png?1547037941",
  },
  {
    id: "golem",
    name: "Golem",
    imageUrl:
      "https://assets.coingecko.com/coins/images/542/large/Golem_Submark_Positive_RGB.png?1606392013",
  },
  {
    id: "ankr",
    name: "Ankr Network",
    imageUrl:
      "https://assets.coingecko.com/coins/images/4324/large/U85xTl2.png?1608111978",
  },
  {
    id: "ronin",
    name: "Ronin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/20009/large/ronin.jpg?1649184678",
  },
  {
    id: "just",
    name: "JUST",
    imageUrl:
      "https://assets.coingecko.com/coins/images/11095/large/JUST.jpg?1588175394",
  },
  {
    id: "olympus",
    name: "Olympus",
    imageUrl:
      "https://assets.coingecko.com/coins/images/14483/large/token_OHM_%281%29.png?1628311611",
  },
  {
    id: "harmony",
    name: "Harmony",
    imageUrl:
      "https://assets.coingecko.com/coins/images/4344/large/Y88JAze.png?1565065793",
  },
  {
    id: "helium",
    name: "Helium",
    imageUrl:
      "https://assets.coingecko.com/coins/images/4284/large/Helium_HNT.png?1612620071",
  },
  {
    id: "magic",
    name: "Magic",
    imageUrl:
      "https://assets.coingecko.com/coins/images/18623/large/magic.png?1656052146",
  },
  {
    id: "gains-farm",
    name: "Gains Farm",
    imageUrl:
      "https://assets.coingecko.com/coins/images/13703/large/gfarm_v2.png?1611035398",
  },
  {
    id: "ontology",
    name: "Ontology",
    imageUrl:
      "https://assets.coingecko.com/coins/images/3447/large/ONT.png?1583481820",
  },
];
export default DROPDOWN_LIST;
