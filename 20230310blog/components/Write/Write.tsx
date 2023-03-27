export default async function Write() {
  const response = await fetch("http://localhost:3002/api/user/write");

  if (!response.ok) {
    const data = await response.json();

    console.log(data.message);
  } else {
    console.log(response.status);
  }

  return <div>Write</div>;
}
