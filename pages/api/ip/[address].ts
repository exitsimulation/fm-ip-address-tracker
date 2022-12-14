import { NextApiRequest, NextApiResponse } from "next";
import { IData } from "../../../user";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>
) {
  const { address } = req.query;

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_m1UM0IYxI5qrmM9zixZMCC4nszn7u&ipAddress=${address}`;

  await axios
    .get(url)
    .then(({ data }) => {
      res.status(200).json(data);
    })
    .catch(({ err }) => {
      res.status(400).json({ err });
    });
}
