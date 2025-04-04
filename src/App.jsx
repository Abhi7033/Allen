import React from "react"

function App(){
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: 10, padding: "0 20px" }}>
      {/* Left-side items */}
      <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
        <div><h1 style={{fontSize: "2.5rem"}}>ALLEN</h1></div>
        <div>Exams</div>
        <div>Programs</div>
        <div>Scholarships</div>
        <div>Test Series</div>
        <div>Study Materials</div>
      </div>

      {/* Right-side items */}
      <div style={{ display: "flex",  gap: 30 }}>
        <button style={{display:"flex", alignItems:"center", backgroundColor:"white", color:"black", borderRadius:"25px", fontWeight:"bold", padding:"8px 15px", fontSize:"14px", cursor:"pointer"}}>📞 Talk to us</button>
        <button style={{display:"flex", alignItems:"center", backgroundColor:"transparent", color:"white", border:"1px solid white", borderRadius:"25px", padding:"8px 15px", fontSize:"14px", fontWeight:"bold", cursor:"pointer"}}>Login</button>
      </div>
    </div>
  );
}

export default App;
