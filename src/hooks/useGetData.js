import { useState, useEffect } from "react";

import { instance } from "@/services/api";

const promiseWrapper = (promise) => {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };
  return { read };
};

function useGetData(url) {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const getData = async () => {
      //   const promise = axios.get(url).then((response) => response.data);
      const promise = instance.request({ url });
      setResource(promiseWrapper(promise));
    };

    getData();
  }, [url]);

  return resource;
}

// export function useGetDataAll(url1, url2, url3, url4, url5) {
//   const [resource, setResource] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       const res = Promise.all([
//         instance.request({ url1 }),
//         instance.request({ url2 }),
//         instance.request({ url3 }),
//         instance.request({ url4 }),
//         instance.request({ url5 }),
//       ]);
//       setResource(promiseWrapper(res));
//     };

//     getData();
//   }, []);

//   return resource;
// }

export default useGetData;
