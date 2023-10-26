import CardsServer from '../components/CardsServer';

export default function Home() {
  return (
    <div className="body relative">
      <div className="h-full w-full relative flex-col item-center justify-center m-auto" style={{ height: "100vh", backgroundColor: "#322238", margin: "0" }}>
        <div className="flex justify-center">
          <CardsServer />
        </div>
      </div>
    </div>
  )
}
