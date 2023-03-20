import axios from "axios";
import Joi from "joi";
import Product from "../models/product";

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string(),
});

export const getAll = async (req, res) => {
   try {
      const {data} = await axios.get(`http://localhost:3002/products`);
      return res.json(data)
   } catch (error) {
      console.log(error);
   }

}
export const get = async (req, res) => {
   try {
      const id= req.params.id;
      const {data} = await axios.get(`http://localhost:3002/products/${id}`);
      return res.json(data)
   } catch (error) {
      console.log(error);
   }
}

export const Post = async (req, res) => {
   try {
      const body = req.body;
      const { error } = productSchema.validate(body);
      if (error) {
          const errors = error.details.map((errorItem) => errorItem.message);
          return res.status(400).json({
              message: errors,
          });
      }

      // const { data } = await axios.post("http://localhost:3002/products", body);
      const data = await Product.create(body);
      if (!data) {
          return res.status(400).json({ message: "Thêm sản phẩm thất bại" });
      }
      return res.json({
          message: "Thêm sản phẩm thành công",
          data,
      });
   } catch (error) {
      console.log(error);
   }
}
export const Remove = async (req, res) => {
   try {
      const id = req.params.id;
      const {data} = await axios.delete(`http://localhost:3002/products/${id}`);
      
      return res.json(data)
  
   } catch (error) {
      console.log(error);
   }
}

export const Put = async (req, res) => {
   try {
      const id = req.params.id;
      const body = req.body;
      const {data} = await axios.put(`http://localhost:3002/products/${body['id']}`,body);
      return res.json(data)
   } catch (error) {
      console.log(error);
   }
}



