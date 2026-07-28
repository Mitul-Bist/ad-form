import { NextRequest, NextResponse } from "next/server";

const URL = "https://script.google.com/macros/s/AKfycbyiUdNL8OZd9zq0-9fqyyG0bnxQpFhudrRi1gjjUFeIIrRMX0ECYk3OjHhAakuHjzw/exec";

// file is the image

export async function POST(req) {
    const formData = await req.formData();
    const captchaToken = formData.get('g-recaptcha-response');

    // No captcha
    if (!captchaToken) {
      return NextResponse.json(
        { message: 'CAPTCHA token missing.' },
        { status: 400 }
      );
    }

    const googleRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      { method: 'POST' }
    );

    const googleData = await googleRes.json();

    if (!googleData.success) {
      return NextResponse.json(
        { message: 'Invalid CAPTCHA token.' },
        { status: 400 }
      );
    }

    // 2. CAPTCHA passed

    const file = formData.get("analytics");

    if (!file || !(file instanceof File) || file.size === 0) {
        return NextResponse.json({ error: "Image is required" }, { status: 400 });
    }

    const textData = {};
    for (const [key, value] of formData.entries()) {
        // 'analytics' is name of img input
        if (key !== "analytics") {
            textData[key] = value;
        }
    }

    console.log(textData);

    // 2. Convert image file to Base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileBase64 = buffer.toString("base64");

    // 3. Combine text data + file payload
    const payload = {
        ...textData,
        fileBase64,
        fileName: file.name,
        fileMimeType: file.type,
    };

    // 4. Send everything in one POST request to Google Apps Script
    const sheetResponse = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        redirect: "follow", // Essential for Google Apps Script redirects!
    });

    const responseText = await sheetResponse.text();

    return NextResponse.json({
        success: true,
        sheetStatus: sheetResponse.status,
        scriptResponse: responseText,
    });
}