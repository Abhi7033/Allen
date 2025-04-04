import React from "react";

const Card = ({ title }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
    </div>
  );
};

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 10,
          padding: "0 20px",
        }}
      >
        {/* Left-side items */}
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          <div>
            <h1 style={{ fontSize: "2.5rem" }}>ALLEN</h1>
          </div>
          <div>Exams</div>
          <div>Programs</div>
          <div>Scholarships</div>
          <div>Test Series</div>
          <div>Study Materials</div>
        </div>

        {/* Right-side items */}
        <div style={{ display: "flex", gap: 30 }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              color: "black",
              borderRadius: "25px",
              fontWeight: "bold",
              padding: "8px 15px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            📞 Talk to us
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
              borderRadius: "25px",
              padding: "8px 15px",
              fontSize: "14px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 10,
          padding: "0 20px",
        }}
      >
      <div>
      <div
        style={{
          paddingLeft: 70,
          display: "flex",
          gap: "10px",
        }}
      >
        <span style={{ fontWeight: "bold" }}>Home</span>
        <span style={{ color: "#ccc" }}>›</span>
        <span>Online Programs</span>
      </div>

      <div style={{ paddingLeft: 70, display: "flex" }}>
        <h1>Online Programs</h1>
      </div>
      <div style={{ paddingLeft: 70, display: "flex" }}>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          To get the full ALLENLearning Experience explore the Ultimate series
          of <br />
          Programs for JEE, NEET and Olympiads. The Ultimate Program are Allen{" "}
          <br />
          Recommended. They provide a fully structured curriculum with a week-
          <br />
          by-week plan and foster meaningful teacher-student interaction.These{" "}
          <br />
          programs offer a personalized study experience, guiding you <br />
          throughout your journey on where to concentrate your efforts.
        </p>
      </div>
      </div>
      <div style={{display:"flex", paddingRight:"100px 200px"}}>
        <img src="" />
      </div>
      </div>

      <div style={{paddingLeft:100, display:"flex"}}>
        <h1>Discover the perfect online program</h1>
      </div>
      <div style={styles.cardContainer}>
        <Card title="JEE" />
        <Card title="NEET" />
        <Card title="UPSC" />
      </div>
    </>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    paddingLeft:100,
    gap: "20px",
    padding: "20px",
    color:"black",
    
  },
  card: {
    width: "150px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    backgroundColor: "#fff",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  title: {
    margin: 0,
  },
};

export default App;
