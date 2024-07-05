import React, { useEffect, useState } from "react";
import "./TestingNotebook.css";

import HTMLFlipBook from "react-pageflip";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      /* ref required */
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

function MyBook(props) {
  return (
    <HTMLFlipBook width={1000} height={5000}>
      <Page number="1">
        <textarea
          className="notebook-content"
          placeholder="Write your diary here..."
        ></textarea>
      </Page>
      <Page number="1">
        <textarea
          className="notebook-content"
          placeholder="Write your diary here..."
        ></textarea>
      </Page>
      <Page number="1">
        <textarea
          className="notebook-content"
          placeholder="Write your diary here..."
        ></textarea>
      </Page>
    </HTMLFlipBook>
  );
}
const TestingNotebook = () => {
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    const now = new Date();
    const formattedDateTime = formatDateTime(now);
    setDateTime(formattedDateTime);
  }, []);

  const formatDateTime = (date) => {
    const options = {
      weekday: "long", 
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const dateString = date.toLocaleDateString(undefined, options);
    const timeString = date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${dateString}, ${timeString}`;
  };
  return (
    <div className="notebook">
      <div className="notebook-header">{dateTime}</div>
      {/* {MyBook()} */}
      <Page number="1">
        <textarea
          className="notebook-content"
          placeholder="Write your diary here..."
        ></textarea>
      </Page>
    </div>
  );
};

export default TestingNotebook;
