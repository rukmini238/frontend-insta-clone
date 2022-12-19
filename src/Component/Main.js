import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header, Postview } from "../PostView/postview";
import * as ReactBootstrap from "react-bootstrap";

export default function Main() {
  const [users, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "backend-insta-clone-psi.vercel.app/posts"
      )
      .then((res) => {
        setdata(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [users]);

  return (
    <>
      <Header />
      {[...users].reverse().map((user) => {
        return (
          <Postview
            key={user._id}
            name={user.author}
            location={user.location}
            image={`backend-insta-clone-psi.vercel.app/${user.imagename}`}
            date={user.Date}
            likes={user.likes}
            description={user.description}
          />
        );
      })}

      <div className="spinner">
        {loading && (
          <ReactBootstrap.Spinner
            className="spinner"
            animation="border"
            variant="primary"
          />
        )}
      </div>
    </>
  );
}
