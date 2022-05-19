import { createContext } from "react";

const data = localStorage.getItem("user");

export const UserContext = createContext(data);
