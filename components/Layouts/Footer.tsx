import Link from "next/link";

const footerLlink = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 2,
    name: "Profile",
    link: "/profile",
  },
  {
    id: 3,
    name: "blog",
    link: "/sign-up",
  },
  {
    id: 4,
    name: "license",
    link: "/dashboard",
  },
];

export default function Footer() {
  return (
    <footer className="flex justify-between items-center max-w-6xl mx-auto mb-6">
      <aside>
        <p className="text-gray-400 text-sm">
          @2026, Made with ❤️ by{" "}
          <span className="text-teal-300">Akeju Ayomide</span> for a better web
        </p>
      </aside>

      <ul className="flex items-center gap-10">
        {footerLlink.map((items) => (
          <li key={items.id} className="text-gray-400 text-sm">
            <Link href={items.link}>{items.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
