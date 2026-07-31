import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { content, sha, password } = await req.json();

    if (password !== "3b1234") {
      return NextResponse.json({ error: 'Geçersiz şifre!' }, { status: 401 });
    }

    const res = await fetch('https://api.github.com/repos/cenas1905/3b-yap-i/contents/data.json', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Admin Panelden İçerik Güncellemesi',
        content: Buffer.from(JSON.stringify(content, null, 2)).toString('base64'),
        sha, 
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
