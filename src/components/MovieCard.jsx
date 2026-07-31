function MovieCard({ movie }) {
    return (
        <div
            style={{
                width: "250px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                backgroundColor: "#fff",
            }}
        >
            <img
                src={movie.image}
                alt={movie.title}
                style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                }}
            />

            <div style={{ padding: "15px" }}>
                <h3>{movie.title}</h3>

                <p>{movie.description}</p>
            </div>
        </div>
    );
}

export default MovieCard;