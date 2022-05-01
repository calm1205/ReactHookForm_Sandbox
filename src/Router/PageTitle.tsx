import React from "react";
import { Link } from "react-router-dom";

type Input = {
  title: string;
  path: string;
};

export const PageTitle: React.FC<Input> = ({ title, path }) => {
  return (
    <li>
      <Link to={`/${path}`}>{title}</Link>
    </li>
  );
};
