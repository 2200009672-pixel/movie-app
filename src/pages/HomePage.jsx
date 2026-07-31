import MovieCard from "../components/MovieCard";

function HomePage() {

    const movies = [
        {
            id: 1,
            title: "Avengers: Endgame",
            image:
                "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
            description:
                "Biệt đội siêu anh hùng chiến đấu với Thanos để cứu vũ trụ."
        },

        {
            id: 2,
            title: "Spider-Man: No Way Home",
            image:
                "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1200_.jpg",
            description:
                "Spider-Man đối mặt với các phản diện đến từ đa vũ trụ."
        },

        {
            id: 3,
            title: "The Batman",
            image:
                "https://m.media-amazon.com/images/I/81G+8H8BfIL._AC_SL1500_.jpg",
            description:
                "Batman điều tra hàng loạt vụ án bí ẩn tại Gotham."
        },

        {
            id: 4,
            title: "Doctor Strange 2",
            image:
                "https://m.media-amazon.com/images/I/81jP6M6K5-L._AC_SL1500_.jpg",
            description:
                "Doctor Strange bước vào đa vũ trụ đầy nguy hiểm."
        }
    ];

    return (
        <div style={{ padding: "30px" }}>

            <h1 style={{ textAlign: "center" }}>
                🎬 Danh sách phim
            </h1>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "30px",
                    marginTop: "30px",
                }}
            >
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </div>

        </div>
    );
}

export default HomePage;