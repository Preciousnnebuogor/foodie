"use client"
export default function Login() {
  return (
    <div className={`mt-40 md:mt-20 flex items-center justify-center`}>
      <div className={` flex flex-col items-center justify-center`}>
        <input
          placeholder="email"
          type="email"
          className={`rounded-full bg-gradient-to-r from-orange-100 to bg-orange-400 py-4 px-8 
         text-xl md:self-start my-4`}
        />
        <input
          placeholder="password"
          type="password"
          className={`mb-4 rounded-full bg-gradient-to-r from-orange-100 to bg-orange-400 py-4 px-8 
             text-xl md:self-start my-4`}
        />
        <input
          placeholder="number"
          type="number"
          className={`mb-4 rounded-full bg-gradient-to-r from-orange-100 to bg-orange-400 py-4 px-8 
            text-xl md:self-start my-4`}
        />
        <input
          placeholder="pin"
          className={`mb-4 rounded-full bg-gradient-to-r from-orange-100 to bg-orange-400 py-4 px-8 
            text-xl md:self-start my-4`}
        />
        <div className={`flex items-center justify-center`}>
    <button className={`bg-orange-400 rounded-full mt-3 text-xl md:self-start py-4 px-8`}>Login</button>
      </div>

      </div>
    </div>
  )
}
