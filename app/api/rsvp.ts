import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import XLSX from "xlsx";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const data = req.body;

  try {
    // 1. Generate CSV
    const csvHeaders = [
      "Name",
      "Email",
      "Phone",
      "Total Guests",
      "Guest Names",
      "Dietary Requirements",
      "Needs Bus",
      "Submission Date",
    ];
    const csvRows = [
      [
        data.name,
        data.email,
        data.phone,
        data.total_guests,
        data.guest_names,
        data.dietary_requirements,
        data.needs_bus,
        data.submission_date,
      ],
    ];
    const csvContent = [
      csvHeaders.join(","),
      ...csvRows.map((r) => r.join(",")),
    ].join("\n");

    // 2. Generate Excel (.xlsx)
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet([data]);
    XLSX.utils.book_append_sheet(wb, ws, "RSVP");
    const excelBuffer = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

    // 3. Nodemailer setup
    const transporter = nodemailer.createTransport({
      host: "smtp.your-email.com",
      port: 587,
      auth: { user: "your-email@example.com", pass: "YOUR_EMAIL_PASSWORD" },
    });

    await transporter.sendMail({
      from: '"Wedding RSVP" ',
      to: "shafiquedev256@gmail.com",
      subject: "New Wedding RSVP Submission",
      text: "You received a new RSVP submission!",
      attachments: [
        { filename: "RSVP.csv", content: csvContent },
        { filename: "RSVP.xlsx", content: excelBuffer },
      ],
    });

    res.status(200).json({ message: "RSVP sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending RSVP." });
  }
}
