import React from "react";

function AboutHistory() {
  const photos = [
    "/history/event1.jpeg",
    "/history/event2.jpeg",
    "/history/event3.jpeg",
    "/history/event4.jpeg",
    "/history/event5.jpeg",
    "/history/event6.jpeg",
    "/history/event7.jpeg",
    "/history/event8.jpeg",
    "/history/event9.jpeg",
    "/history/event10.jpeg",
  ];

  const styles = {
    section: {
      padding: "100px 0",
      backgroundColor: "#f6f7fb",
    },
    container: {
      width: "90%",
      maxWidth: "1300px",
      margin: "0 auto",
    },
    title: {
      fontSize: "2.6rem",
      textAlign: "center",
      marginBottom: "15px",
      color: "#1e1e1e",
    },
    text: {
      textAlign: "center",
      maxWidth: "750px",
      margin: "0 auto 60px",
      fontSize: "1.1rem",
      color: "#555",
    },
    gallery: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "25px",
    },
    card: {
      borderRadius: "16px",
      overflow: "hidden",
      backgroundColor: "#fff",
      boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
    },
    image: {
      width: "100%",
      height: "230px",
      objectFit: "cover",
      display: "block",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Conference History</h2>
        <p style={styles.text}>
          A visual journey through past ICHEC conferences and memorable moments.
        </p>

        <div style={styles.gallery}>
          {photos.map((photo, index) => (
            <div key={index} style={styles.card}>
              <img
                src={photo}
                alt={`ICHEC Past Event ${index + 1}`}
                style={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutHistory;
