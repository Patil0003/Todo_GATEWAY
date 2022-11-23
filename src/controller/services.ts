import axios from "axios";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const base_url = process.env.BASE_URL;


// register
export const userRegister = async (req: Request, res: Response) => {
  try {
    
    const details = await axios({
      url: `${base_url}/user/signup`,
      method: "post",
      data: req.body,     
    
    });

    return res.status(200).json({ data: details.data });
    } catch (error: any) {
    console.log("error", error);
    throw { status: 404, error: error.data };
  }
};
// login
export const userLogin = async (req: Request, res: Response) => {
  try {
    const details = await axios({
      url: `${base_url}/user/login`,
      method: "post",
      data: req.body,
    });

    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    console.log("error", error);
    throw { status: 404, error: error.data };
  }
};
// add
export const addtask = async (req: Request, res: Response) => {
  try {
    const details = await axios({
      url: `${base_url}/user/add-task`,
      method: "post",
      data: req.body,
    });

    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    console.log("error jhghghfhhgfhg", error);
    throw { status: 404, error: error.data };
  }
};
// delete
export const deletetask = async (req: Request, res: Response) => {
  try {
    const details = await axios({
      url: `${base_url}/user/delete-task`,
      method: "delete",
      data: req.body,
    });

    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    console.log("error", error);
    throw { status: 404, error: error.data };
  }
};
// update
export const edittask = async (req: Request, res: Response) => {
  try {
    const details = await axios({
      url: `${base_url}/user/update-task`,
      method: "put",
      data: req.body,
    });

    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    console.log("error", error);
    throw { status: 404, error: error.data };
  }
};
// list
export const showlist = async (req: Request, res: Response) => {
  try {
    const details = await axios({
      url: `${base_url}/user/show-list`,
      method: "get",
      data: req.body,
    });

    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    console.log("error", error);
    throw { status: 404, error: error.data };
  }
};
