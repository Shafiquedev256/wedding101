import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export async function OPTIONS() {
  return NextResponse.json("ok", { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { rsvpData } = body;

    if (!rsvpData || !rsvpData.name || !rsvpData.email) {
      return NextResponse.json(
        { success: false, error: "Missing required RSVP data" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert RSVP
    const { error: insertError } = await supabase
      .from("rsvp_submissions")
      .insert({
        name: rsvpData.name,
        email: rsvpData.email,
        phone: rsvpData.phone || "",
        total_guests: parseInt(rsvpData.total_guests || "1"),
        guest_names: rsvpData.guest_names || [], // store as array
        dietary_requirements: rsvpData.dietary_requirements || "None",
        needs_bus: rsvpData.needs_bus === "yes",
      });
    if (insertError) throw insertError;

    // Fetch all RSVPs
    const { data: allRsvps, error: fetchError } = await supabase
      .from("rsvp_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (fetchError) throw fetchError;

    // Generate CSV
    const csvHeaders =
      "Name,Email,Phone,Total Guests,Guest Names,Dietary Requirements,Needs Bus,Submission Date\n";
    const csvRows = allRsvps
      .map((rsvp) => {
        const guestNamesString = Array.isArray(rsvp.guest_names)
          ? rsvp.guest_names.join(" | ")
          : rsvp.guest_names;
        const date = new Date(rsvp.created_at).toLocaleString();
        return `"${rsvp.name}","${rsvp.email}","${rsvp.phone}",${rsvp.total_guests},"${guestNamesString}","${rsvp.dietary_requirements || "None"}","${
          rsvp.needs_bus ? "Yes" : "No"
        }","${date}"`;
      })
      .join("\n");
    const csvContent = csvHeaders + csvRows;
    const csvBase64 = Buffer.from(csvContent, "utf-8").toString("base64");
    const excelBase64 = Buffer.from("\uFEFF" + csvContent, "utf-8").toString(
      "base64"
    );

    // Email HTML
    const guestNamesString =
      Array.isArray(rsvpData.guest_names) && rsvpData.guest_names.length > 0
        ? rsvpData.guest_names.join(" | ")
        : "N/A";

    const emailHtml = `
      <h2>New Wedding RSVP Submission</h2>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
      <hr>
      <h3>Guest Details:</h3>
      <p><strong>Name:</strong> ${rsvpData.name}</p>
      <p><strong>Email:</strong> ${rsvpData.email}</p>
      <p><strong>Phone:</strong> ${rsvpData.phone || "N/A"}</p>
      <p><strong>Total Guests:</strong> ${rsvpData.total_guests || 1}</p>
      <p><strong>Guest Names:</strong> ${guestNamesString}</p>
      <p><strong>Dietary Requirements:</strong> ${rsvpData.dietary_requirements || "None"}</p>
      <p><strong>Shuttle Bus:</strong> ${rsvpData.needs_bus === "yes" ? "Yes" : "No"}</p>
      <hr>
      <p><em>Complete RSVP list attached as CSV and Excel files.</em></p>
      <p><strong>Total RSVPs Received:</strong> ${allRsvps.length}</p>
    `;

    // Send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Wedding RSVP <onboarding@resend.dev>",
          to: ["shafiquedev256@gmail.com"],
          subject: `New Wedding RSVP from ${rsvpData.name}`,
          html: emailHtml,
          attachments: [
            { filename: "wedding-rsvps.csv", content: csvBase64 },
            { filename: "wedding-rsvps-excel.csv", content: excelBase64 },
          ],
        }),
      });

      if (!emailResponse.ok) {
        const errorText = await emailResponse.text();
        console.error("Resend email error:", errorText);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "RSVP saved and email sent successfully",
        totalRsvps: allRsvps.length,
      },
      { headers: corsHeaders }
    );
  } catch (error: any) {
    console.error("RSVP Error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Unknown server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
