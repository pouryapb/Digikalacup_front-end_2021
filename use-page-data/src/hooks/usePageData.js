import { useEffect, useState } from "react";

const cache = {};

function usePageData({ url, fireOnLoad, successCallback, failedCallback }) {
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState({});
  const [pending, setPending] = useState(false);

  const request = async () => {
    try {
      if (cache[url]) {
        setData(cache[url].result);
        setHasError(cache[url].hasError);
        if (cache[url].hasError) {
          if (failedCallback) failedCallback();
        } else {
          if (successCallback) successCallback(cache[url].result);
        }
        return cache[url].result;
      } else {
        setPending(true);
        const response = await fetch(url);
        const json = await response.json();
        cache[url] = {
          result: json,
          hasError: false,
        };
        setData(json);
        setPending(false);
        if (successCallback) successCallback(json);
        return json;
      }
    } catch (error) {
      setHasError(true);
      setPending(false);
      if (failedCallback) failedCallback();
    }
  };

  useEffect(() => {
    if (fireOnLoad) request();
  }, []);

  return { pending: pending, request: request, hasError: hasError, data: data };
}

export default usePageData;
