import { NextResponse } from 'next/server';

export async function GET() {
  // 1. Read token from server-only env variable
  const token = process.env.CONTENTFUL_API_TOKEN;
  const spaceId = process.env.SPACE_ID;
  console.log(token);
  if (!token) {
    return NextResponse.json({ error: 'Token not set' }, { status: 500 });
  }

  // 2. Call the external API with the token in the Authorization header
  const externalRes = await fetch('https://cdn.contentful.com/spaces/' + spaceId + '/entries', {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });

  if (!externalRes.ok) {
    return NextResponse.json({ error: 'External API error' }, { status: externalRes.status });
  }

  // 3. Pass the data back to the browser
  const data = await externalRes.json();
  return NextResponse.json(data);
}
