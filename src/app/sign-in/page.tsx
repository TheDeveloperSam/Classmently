import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">

        <Link href="/" className="text-xl font-bold">
          Classroom
        </Link>

        <h1 className="mt-10 text-3xl font-bold">
          Welcome back
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Sign in to access your classroom.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <Link href="/forgot-password" className="text-blue-600">
              Forgot password?
            </Link>
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white"
          >
            Sign in
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-blue-600">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}
