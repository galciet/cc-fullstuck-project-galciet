import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function AddExercise() {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await axios.post(`${baseUrl}/menus`, { name, tag, difficulty });
      navigate("/");
    } catch (err) {
      console.error("種目の追加に失敗しました:", err);
    }
  };

  return (
    <div className="add-exercise">
      <h2>種目追加</h2>
      <div>
        <label>種目名:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>タグ:</label>
        <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      </div>
      <div>
        <label>レベル:</label>
        <input type="number" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>種目追加確定</button>
      <button onClick={() => navigate("/")}>戻る</button>
    </div>
  );
}
