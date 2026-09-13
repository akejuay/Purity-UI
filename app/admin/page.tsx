import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  // Not logged in
  if (!session) {
    redirect("/");
  }

  // Logged in but NOT the admin
  if (!session.user?.isAdmin) {
    redirect("/");
  }

  return (
    <div>
      <h1>TravelHub Admin Dashboard</h1>

      <p>Welcome, {session.user.name}</p>

      {/* Your admin dashboard goes here */}
    </div>
  );
}
