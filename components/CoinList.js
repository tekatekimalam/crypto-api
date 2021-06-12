import Coins from "./Coins";

const CoinList = ({ filteredCoins }) => {
  return (
    <>
      {filteredCoins.map(coin => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            id={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
};

const URL_API =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

export const getServerSideProps = async () => {
  const res = await fetch(URL_API);
  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};

export default CoinList;
