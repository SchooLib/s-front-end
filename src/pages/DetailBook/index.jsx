import React from "react";
import { useParams } from "react-router-dom";

const DetailBook = () => {
  const { bookId } = useParams();

  // fetch book detail using this bookId

  return <div>DetailBook {bookId}</div>;
};

export default DetailBook;
