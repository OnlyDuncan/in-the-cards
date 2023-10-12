import Cards from '../components/Cards';

export default function Home() {
  return (
    <div className="body relative h-screen">
      <div className="h-full">
        <header className="relative flex-col items-center justify-center h-full">
          <h1 className="text-4xl text-center">
            In the Cards
          </h1>
          <br />
          <div className="items-center justify-center">
            <Cards />
          </div>
        </header>
      </div>
    </div>
  )
}
