export async function GET(request, { params }) {
  const { id } = params;
  return Response.json({ id });
}