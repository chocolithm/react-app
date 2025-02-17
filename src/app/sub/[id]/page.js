export default function Id({ params }) {
  const { id } = params;

  return (
    <>
      <h1>/app/sub/[id]/page.js</h1>
      <p>Parameter id: {id}</p>
      <a href="/">/app/page.js</a>
    </>
  );
}
