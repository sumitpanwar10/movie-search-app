import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 ">
      <h1 className="text-3xl font-bold mb-4">Movie Search App</h1>
      <SearchBar />
    </main>
  );
}
