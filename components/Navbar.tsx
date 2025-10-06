import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  // async/await can be solely used in server components, NOT client
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
            {session && session?.user ? (
                <>
                    <Link href='/startup/create'>
                        <span>Create</span>
                    </Link>
                    
                    {/* Asynchronous server action which tries to sign us out */}
                    <form action={async () => {
                      "use server";
                      await signOut({ redirectTo: "/"});
                    }}>
                        <button type="submit">Logout</button>
                    </form>

                    <Link href={`/user/${session?.id}`}>
                        <span>{session?.user?.name}</span>
                    </Link>
                </>
            ) : (
              // Asynchronous server action which tries to sign us in
                <form action={async () => {
                  "use server";
                  await signIn('github');
                }}>
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
