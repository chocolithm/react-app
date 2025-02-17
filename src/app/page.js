export default function Home() {
  return (
    <div>
      <h1>/pages/index.js</h1>
      <ul>
        <li><a href="/sub">/pages/sub/page.js</a></li>
        <li><a href="/sub/about">/pages/sub/about/page.js</a></li>
        <li><a href="/sub/1">/pages/sub/[id]/page.js</a></li>
        <li><a href="/sub/2">/pages/sub/[id]/page.js</a></li>
        <li><a href="/sub/fetch">/pages/sub/fetch/page.js</a></li>
      </ul>
    </div>
  );
}
