import TestClient from "./test-client";

export default function Page() {
  async function handleAction(formData) {
    "use server";
    const rating = formData.get("rating");
    console.log("🔥 SERVER RECEIVED:", rating);
  }

  return <TestClient action={handleAction} />;
}
