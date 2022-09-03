import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const datas = [
  { id: 1, name: "이영우", description: "Description", age: 8 },
  { id: 2, name: "강기재", description: "Description", age: 10 },
  { id: 3, name: "정상헌", description: "Description", age: 9 },
  { id: 4, name: "송예린", description: "Description", age: 8 },
  { id: 5, name: "이준홍", description: "Description", age: 15 },
];

const getPostByID = (id) => {
  const array = datas.filter((x) => x.id == id);
  if (array.length == 1) {
    return array[0];
  }
  return null;
};

const ArtistDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setData(getPostByID(id));
    // eslint-disable-next-line
  }, []);

  return (
    <ul>
      <li>{data.name}</li>
      <li>{data.description}</li>
      <li>{data.age}</li>
    </ul>
  );
};

export default ArtistDetail;
