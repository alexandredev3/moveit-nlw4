import { VercelRequest, VercelResponse } from "@vercel/node";
import { connectToDatabase } from "@lib/mongodb";

export default async function leaderboard(req: VercelRequest, res: VercelResponse) {
  const { db } = await connectToDatabase();
  const { page } = req.query;

  const challengesCollection = db.collection("challenges");

  /**
   * with the "skip" this route loses performance according to the scale application,
   * but for now I will leave it at that.
   */

  try {
    const totalChallenges = await challengesCollection.count();
    const pageLimit = 20;
    const totalPage = Math.ceil(totalChallenges / pageLimit);

    const challenges = await challengesCollection
      .find()
      .sort({
        level: -1,
        challengesCompleted: -1,
        currentExperience: -1,
      })
      .limit(pageLimit)
      .skip((Number(page) - 1) * pageLimit)
      .toArray();

    return res.status(200).json({
      leaderboard: {
        totalPage,
        challenges: challenges,
      },
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json("Internal Server Error");
  }
}
