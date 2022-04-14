import axios from "axios";

const URL = "https://localhost:3000/api";

class ImagesService {
  getImages() {
    axios.get(URL);
  }
}

export default new ImagesService();
