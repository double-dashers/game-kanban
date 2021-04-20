import { useEffect, useState } from "react";
import axios from "axios";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    const response = await axios.get(
      "https://api.rawg.io/api/games?key=4b0b80a25416456b93cb6339ad40fefc&dates=2019-09-01,2019-09-30&platforms=18,1,7"
    );

    console.log(response.data.results);
    setGames(response);
  };

  return <></>;
};

export default Games;
