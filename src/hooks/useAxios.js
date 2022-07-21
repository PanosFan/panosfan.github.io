import axios from "axios";

const { useState, useEffect } = require("react");

const useAxios = (configObject) => {
  const { method = "GET", url, payload = null } = configObject;

  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .request({
        data: payload,
        signal: controller.signal,
        method,
        url,
      })
      .then((response) => {
        setLoading(false);
        setResponse(response);
        console.log(response);
      })
      .catch((error) => {
        if (error.message !== "canceled") {
          setLoading(false);
          setError(error.message);
          console.log(error);
        }
      });

    return () => controller.abort();
  }, [url]);
  //   console.log(response);
  return { response, error, loading };
};

export default useAxios;
