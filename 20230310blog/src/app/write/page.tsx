import Write from "components/Write/Write";

export default async function Page() {
  try {
    const response = await fetch("http://localhost:3002/api/user/write", {
      credentials: "include",
    });

    if (!response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("접근완료");
    }
  } catch (err) {}

  return (
    <>
      <Write />
    </>
  );
}
