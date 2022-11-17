// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getXataClient } from "../../src/xata";
const xata = await getXataClient();

const handler = async (req, res) => {
  const { firstName, lastName, phoneNumber, location, email, image_url } =
    req.body;
  await xata.db.contacts.create({
    firstName,
    lastName,
    phoneNumber,
    location,
    email,
    image_url,
  });
  res.end();
};

export default handler;
