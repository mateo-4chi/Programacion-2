import axios from "axios";

const getProductById = async (id_producto) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/products/${id_producto}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
};

export default getProductById;
