const URL = "https://script.google.com/macros/s/AKfycbyiUdNL8OZd9zq0-9fqyyG0bnxQpFhudrRi1gjjUFeIIrRMX0ECYk3OjHhAakuHjzw/exec";

export async function POST(req) {
    const formData = await req.formData();

    const data = Object.fromEntries(formData.entries());

    console.log(data);

    const sheetResponse = await fetch(URL , {
        method : "POST",
        headers : {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(data)
    })

    console.log(sheetResponse.status);
    console.log(await sheetResponse.text());

    return Response.json(data);
}