export function GET() {
const content = `
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
`.trim();

return new Response(content, {
headers: {
"Content-Type": "text/plain",
},
});
}