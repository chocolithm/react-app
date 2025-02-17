'use client';

import { useEffect, useState } from 'react';

export default function Fetch() {
  const [user, setUser] = useState({id: null});
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/api/1')
      .then(type => type.json())
      .then(result => {
        setUser(result);
      })
  }, []);

  return (
    <>
      <h1>/app/sub/fetch/page.js</h1>
      <p>{user.id}</p>
      <a href="/">/app/page.js</a>
    </>
  )
}