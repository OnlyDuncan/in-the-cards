import CardsServer from '../components/CardsServer';

export default function Home() {
  return (
    <div className="body relative">
      <div className="h-full relative flex-col item-center justify-center m-auto" style={{ height: "100vh" }}>
        <div className="flex justify-center">
          <CardsServer />
        </div>
      </div>
    </div>
  )
}
