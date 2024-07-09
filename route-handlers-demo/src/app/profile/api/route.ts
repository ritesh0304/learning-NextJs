
import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
export async function GET(request: NextRequest) {
       
    console.log(cookies().get("theme"))
    const headers=new Headers(request.headers);
    console.log(headers.get("Authorization"))
    return new Response("profile Api data",{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=white;Path=/;"
        }
    });
}

