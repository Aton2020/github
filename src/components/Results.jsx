import { useState } from 'react';
import { useEffect } from 'react';

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [props.username]);

  return (
    <div>
      <img src={data?.image} alt={data?.name} />
      <h2>{data?.name}</h2>
      <h2>{data?.location}</h2>
      <h2>{data?.address}</h2>
    </div>
  );
}