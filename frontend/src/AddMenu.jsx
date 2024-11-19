import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function AddMenu() {
  const [menus, setMenus] = useState([]);
  const [checkedMenus, setCheckedMenus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchMenus = async () => {
        const res = await axios.get(`${baseUrl}/menus`);
        setMenus(res.data);
      };
      fetchMenus();
    } catch (err) {
      console.error("メニューの取得に失敗しました:", err);
    }
  }, []);

  const handleCheck = (menu) => {
    if (checkedMenus.find((m) => m.menu_id === menu.menu_id)) {
      setCheckedMenus(checkedMenus.filter((m) => m.menu_id !== menu.menu_id));
    } else {
      setCheckedMenus([...checkedMenus, menu]);
    }
  };

  const handleNavigateToAddExercise = () => {
    navigate("/add-exercise");
  };

  return (
    <div className="add-menu">
      <h2>メニュー管理</h2>
      <ul>
        {menus.map((menu) => (
          <li key={menu.menu_id}>
            <label>
              <input
                type="checkbox"
                checked={!!checkedMenus.find((m) => m.menu_id === menu.menu_id)}
                onChange={() => handleCheck(menu)}
              />
              {menu.name} - レベル: {menu.difficulty}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleNavigateToAddExercise}>種目追加</button>
    </div>
  );
}
