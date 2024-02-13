import CardsServer from '../components/CardsServer';

export default function Home() {
  return (
    <div className="body relative" style={{ backgroundColor: "#322238" }}>
      <div className="h-full w-full relative flex-col item-center justify-center m-auto" style={{ height: "100vh", backgroundColor: "#322238", margin: "0" }}>
        <div className="flex justify-center" style={{ backgroundColor: "#322238" }}>
          <CardsServer />
        </div>
      </div>
    </div>
  )
}
