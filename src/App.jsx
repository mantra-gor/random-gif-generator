import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
    <div>
      <div className="w-full h-screen background flex flex-col items-center">
        <h1 className="bg-white w-10/12 uppercase text-center text-3xl font-bold 
        rounded-xl p-4 mt-11">
          Random GIFS
        </h1>
        <div className="flex w-10/12 px-4 py-8 gap-10">
          <Random />
          <Tag />
        </div>
      </div>
    </div>
  )
}
