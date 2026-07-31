function AboutPage() {
    return (
        <div
            style={{
                maxWidth: "900px",
                margin: "40px auto",
                padding: "30px",
                backgroundColor: "#f8f9fa",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    color: "#0d6efd"
                }}
            >
                🎬 Giới thiệu nhóm
            </h1>

            <hr />

            <h2>Thông tin dự án</h2>

            <p>
                Đây là ứng dụng Movie App được xây dựng bằng ReactJS.
            </p>

            <p>
                Ứng dụng giúp người dùng xem danh sách phim,
                xem thông tin chi tiết và tìm hiểu về các bộ phim yêu thích.
            </p>

            <h2>Thông tin nhóm</h2>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "20px"
                }}
            >
                <thead>
                    <tr
                        style={{
                            backgroundColor: "#0d6efd",
                            color: "white"
                        }}
                    >
                        <th style={{ padding: "10px" }}>MSSV</th>
                        <th>Họ và tên</th>
                        <th>Công việc</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td style={{ padding: "10px" }}>2200009672</td>
                        <td>Trần Nguyễn Châu Tấn</td>
                        <td>Header, Footer, HomePage</td>
                    </tr>

                    <tr>
                        <td style={{ padding: "10px" }}>2200009999</td>
                        <td>Nguyễn Văn A</td>
                        <td>AboutPage</td>
                    </tr>

                    <tr>
                        <td style={{ padding: "10px" }}>2200008888</td>
                        <td>Trần Thị B</td>
                        <td>Movie Detail</td>
                    </tr>
                </tbody>
            </table>

            <h2 style={{ marginTop: "30px" }}>
                Công nghệ sử dụng
            </h2>

            <ul>
                <li>ReactJS</li>
                <li>React Router DOM</li>
                <li>JavaScript ES6</li>
                <li>HTML5</li>
                <li>CSS3</li>
            </ul>
        </div>
    );
}

export default AboutPage;