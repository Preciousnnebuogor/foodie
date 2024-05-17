export default function Navbar() {
  return (
    <div className={"bg-primary border-b-2 fixed top-0 w-screen"}>
      <div className={"mx-auto md:px-6 px-4 py-2 "}>
        <div className="md:flex md:flex-row md:justify-between text-center">
          <div className="flex flex-row justify-center items-center">
            <img src={""} className={"h-8 w-8"} />
            <p className="text-xs font-bold">Foodie</p>
          </div>
        </div>
      </div>
    </div>
  )
}
