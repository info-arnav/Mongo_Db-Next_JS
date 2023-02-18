import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    // const db = client.db("database_name");

    // const data = await db
    //   .collection("collection_name")
    //   .find({})
    //   .toArray();

    // res.json(data);
  } catch (e) {
    console.error(e);
  }
};
