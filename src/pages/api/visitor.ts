import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const data = req.body;
        console.log("Visitor data received:", data);

        const client = await clientPromise;
        const db = client.db("wave"); // your DB name
        const collection = db.collection("visitors");

        const result = await collection.insertOne({ ...data, createdAt: new Date() });
        console.log("Inserted document ID:", result.insertedId);

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("MongoDB insert error:", error);
        return res.status(500).json({ success: false, error: String(error) });
    }
}
