import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DashboardPodcast from "../Dashboard/Cards/DashboardPodcast.jsx";
import "./DashboardComponent.css";
import axios from "axios";

export default function DashboardComponent() {
  const [podcast, setPodcast] = useState([]);
  const [hidden, setHidden] = useState("notHidden");

  const user = localStorage.getItem("id");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/file/user/${user}`);
      const json = res.data;
      setPodcast(json);
      if (podcast.length === 0) {
        setHidden("hidden");
      } else {
        setHidden("notHidden");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="dashboardComponent" id={hidden}>
        <div className="dashboardContent">
          <div className="dashboardIcon">
            <svg
              width="41"
              height="59"
              viewBox="0 0 41 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 53.7083V47.625C2 42.7848 3.92276 38.1428 7.3453 34.7203C10.7678 31.2978 15.4098 29.375 20.25 29.375C25.0902 29.375 29.7322 31.2978 33.1547 34.7203C36.5772 38.1428 38.5 42.7848 38.5 47.625V53.7083C38.5 54.515 38.1795 55.2887 37.6091 55.8591C37.0387 56.4295 36.265 56.75 35.4583 56.75H5.04167C4.23497 56.75 3.46131 56.4295 2.89088 55.8591C2.32046 55.2887 2 54.515 2 53.7083Z"
                stroke="#FF9800"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 5.04167V11.125C2 15.9652 3.92276 20.6072 7.3453 24.0297C10.7678 27.4522 15.4098 29.375 20.25 29.375C25.0902 29.375 29.7322 27.4522 33.1547 24.0297C36.5772 20.6072 38.5 15.9652 38.5 11.125V5.04167C38.5 4.23497 38.1795 3.46131 37.6091 2.89088C37.0387 2.32046 36.265 2 35.4583 2H5.04167C4.23497 2 3.46131 2.32046 2.89088 2.89088C2.32046 3.46131 2 4.23497 2 5.04167Z"
                stroke="#FF9800"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="dashboardContentText">
            Seems like you’ve not uploaded any podcasts yet!
          </div>
          <div className="dashboardStartUploading">
            <Link to="/form">
              <button className="startUploading">Start Uploading Today</button>
            </Link>
          </div>
        </div>
      </div>
      <DashboardPodcast data={podcast} />
      {/* <BingeWorthy/> */}
    </>
  );
}
