// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getXataClient } from "../../src/xata";
const xata = getXataClient();

const handler = async (req, res) => {

  const { firstName, lastName, phoneNumber, location, email, imageUrl } =
    req.body;
  await xata.db.contacts.create({
    firstName,
    lastName,
    phoneNumber,
    location,
    email,
    imageUrl,
  });
  res.end();
};

export default handler;
