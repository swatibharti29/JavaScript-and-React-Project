import React from "react";

const Profile = ({ results, backHome }) => {
  return (
    <div className="profile">
      <h2>Profile / Performance Summary</h2>
      {results.length === 0 ? (
        <p>No quizzes attempted yet.</p>
      ) : (
        <ul>
          {results.map((res, idx) => (
            <li key={idx}>{res.quizTitle}: {res.score} / {res.total}</li>
          ))}
        </ul>
      )}
      <button onClick={backHome}>Back to Home</button>
    </div>
  );
};

export default Profile;
