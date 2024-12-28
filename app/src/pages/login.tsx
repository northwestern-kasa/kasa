"use client"
export default function Login() {
    async function login(formData: any) {
        const body = {
            email: formData.get("email"),
            password: formData.get("password")
        }
        const res = await fetch("http://localhost:8080/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
  return (
    <div className="flex justify-center items-center h-screen">
      <div id="container" className="flex flex-col space-y-8 items-center justify-center rounded-[3rem] navBarShadow p-16 w-1/4">
        <div id="header" className="flex flex-col space-y-1 text-center">
          <h2 id="header" className="font-bold text-3xl">LOGIN</h2>
          <h6 className="text-lg">to access this page</h6>
        </div>
        <form method="POST" className="flex flex-col space-y-4 items-center justify-center w-full">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email"
            className="block w-full rounded-full border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
          />
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password"
            className="block w-full rounded-full border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
          />
        </form>
        <div id="buttons" className="flex flex-col space-y-4 w-3/4">
          <button onClick={login} className="flex w-full justify-center rounded-full bg-red text-white px-3 py-1.5 text-md">Login</button>
          <button className="flex w-full justify-center rounded-full border-2 border-black px-3 py-1.5 text-md">Create Account</button>
        </div>
      </div>
    </div>
  );
}
