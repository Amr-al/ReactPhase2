import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
function usePageStates() {
  const [Courses, setCourses] = useState([]);
  const [APIData, setData] = useState([]);
  const [check, setCheck] = useState("");
  const [Description, setDecription] = useState([]);
  const [Loading, setLoad] = useState(true);
  const [Tab, setTab] = useState("python");

  const fetchData = (async () => {
    try {
      const { data: response } = await axios.get(`http://localhost:4000/${Tab}`);
      setData(response.splice(1));
      setDecription(response[0]);
      setCourses([]);
      setLoad(false)
    } catch {
      console.error('error');
    }
  });
  const filterHandler = useCallback(
    () => {
      console.log(check);
      const filteredArray = APIData.filter((item) => {
        return item.title.toLowerCase().includes(check.toLowerCase());
      });
      setCourses(filteredArray);
    },
    [check]
  );
  return [
    filterHandler,
    APIData,
    Description,
    Courses,
    setCourses,
    check,
    setCheck,
    Loading,
    setLoad,
    Tab,
    setTab,
    fetchData,
  ];
}

export default usePageStates;
