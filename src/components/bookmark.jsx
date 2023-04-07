import React from "react";
import { useState } from "react";

const BookMark = (props) => {
  const [bookmark, setBookmark] = useState(props.bookmark);
  const handelBookmark = (userId) => {
    if (userId === props.id) {
      return setBookmark(!bookmark);
    } else {
      return bookmark;
    }
  };

  return (
    <>
      {bookmark ? (
        <button onClick={() => handelBookmark(props.id)}>
          <i className="bi bi-bookmark-check-fill m-2"></i>
        </button>
      ) : (
        <button onClick={() => handelBookmark(props.id)}>
          <i className="bi bi-bookmark-check m-2"></i>
        </button>
      )}
    </>
  );
};

export default BookMark;
