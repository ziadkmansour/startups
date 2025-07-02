

async function Home() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if (!response.ok) throw new Error("Failed to fetch data");

    const albums = await response.json();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {albums.map((album: { id: number, title: string }) => (
                <div
                    key={album.id}
                    className="bg-black shadow-md rounded-lg p-4 transition transform hover:scale-105"
                >
                    <h3 className="text-lg font-bold mb-2">{album.title}</h3>
                    <p className="text-gray-600">Album ID: {album.id}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;
