import type { NextApiRequest, NextApiResponse } from "next";
import {
  retrieveDataByID,
  retrieveProducts,
} from "../../utils/db/servicefirebase";

type Data = {
  status: boolean;
  status_code: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { produk } = req.query;

  // jika akses /api/produk/{id}
  if (Array.isArray(produk) && produk.length > 1) {
    const id = produk[1];

    const data = await retrieveDataByID("products", id);

    return res.status(200).json({
      status: true,
      status_code: 200,
      data,
    });
  }

  // jika akses /api/produk
  const data = await retrieveProducts("products");

  return res.status(200).json({
    status: true,
    status_code: 200,
    data,
  });
}