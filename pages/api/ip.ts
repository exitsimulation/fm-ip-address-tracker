import { NextApiRequest, NextApiResponse } from "next";
import { IData, IQueryResponse } from "../../user";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>
) {
  const { address } = req.query;
  res.status(200).json({ data: "IP" });
}
