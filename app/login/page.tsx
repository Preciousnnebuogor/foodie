"use client"
export default function Login(){
    return <div className={`mt-40`}>
        <div className={` flex flex-col items-center justify-center`}>
            <input placeholder="email" className={`mb-4 rounded-full bg-gradient-to-r from-orange-100 to bg-orange-400 py-4 px-8 
            uppercase text-xl md:self-start my-5`}/>
            <input placeholder="password" className={`mb-4 rounded-full bg-gradient-to-r from-orange-100 to bg-orange-400 py-4 px-8 
            uppercase text-xl md:self-start my-5`}/>
            <input placeholder="number" className={`mb-4 rounded-full bg-gradient-to-r from-orange-100 to bg-orange-400 py-4 px-8 
            uppercase text-xl md:self-start my-5`}/>
            <input placeholder="name" className={`mb-4 rounded-full bg-gradient-to-r from-orange-100 to bg-orange-400 py-4 px-8 
            uppercase text-xl md:self-start my-5`}/>
        </div>
    </div>
}