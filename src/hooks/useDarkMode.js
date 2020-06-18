import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValues) => {
  const [values, setValues] = useLocalStorage(key, initialValues);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    if (values) {
      // add
      //console.log("darkmode activated!");
      body.classList.add("dark");
    } else {
      // remove class from body element
      //console.log("darkmode de-activated!");
      body.classList.remove("dark");
    }
  }, [values]);

  const setSwitchMode = e => {
    setValues(!values);
  };

  return [values, setSwitchMode];
};
