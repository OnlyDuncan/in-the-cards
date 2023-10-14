import Cards from '../components/Cards';

export default function Home() {
  return (
    <div className="body relative">
      <div className="h-full relative flex-col item-center justify-center m-auto" style={{ height: "100vh" }}>
        <h1 className="text-4xl text-center">
          In the Cards
        </h1>
        <br />
        <div className="flex justify-center">
          <Cards />
        </div>
      </div>
    </div>
  )
}
