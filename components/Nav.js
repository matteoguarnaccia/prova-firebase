import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Nav() {
  const [user, loading] = useAuthState(auth);
  return (
    <nav className="flex justify-between items-center py-10">
      <Link href="/">
        <button className="text-lg font-medium">Prova di Firebase</button>
      </Link>
      <ul className="flex items-center gap-10">
        {!user ? (
          <li className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">
            <Link href="/auth/login">Join Now</Link>
          </li>
        ) : (
          <div className="flex items-center gap-6">
            <li>
              <Link href="/post">
                <button className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-md text-sm">
                  Post
                </button>
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <img
                  src={user.photoURL}
                  className="w-12 rounded-full cursor-pointer"
                  alt="dashboard"
                />
              </Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}
