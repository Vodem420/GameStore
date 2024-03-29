import axios from "axios";
export default {
  options: {
    genresUrl: "https://api.rawg.io/api/genres",
    key: "931a2558e9934622880c3c0cf809c34a",
    // todo env key
  },
  async getGenres(p = {}) {
    return axios
      .get(this.options.genresUrl, {
        params: { ...{ key: this.options.key, page_size: 40 }, ...p },
      })
      .then(function (response) {
        // console.log(response.data.results);
        return response.data.results;
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
