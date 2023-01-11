export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Champion is Stronger?</div>
      <div className="border-rounded p-8 flex justify-between max-w-2xl flex-g">
        <div className="w-16 h-16 bg-blue-200" />
        <div>Vs.</div>
        <div className="w-16 h-16 bg-blue-200" />
      </div>
    </div>
  );
}