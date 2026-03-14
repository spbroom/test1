"use client";
export default function First() {
  function handleClick() {
    alert("You clicked me!");
  }
  return (
    <main>
      <h1>Hello First!</h1>
      <p>My Next.js App Router is working.</p>
      <button onClick={handleClick}>write</button>
    </main>
  );
}
