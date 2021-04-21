import axios from "axios";
import env from "react-dotenv";

export default {
  findByName: async (name) => {
    const result = await axios.get(
      `https://api.rawg.io/api/games?key=${
        env.RAWGKEY
      }&search=${encodeURI(name)}`
    );
    return result;
  },
};
