import {useState} from 'react';

const useApi = <T>(apiCall: any) => {
  const [error, setError] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);

  const request = async (...args: any) => {
    setIsLoading(true);
    const response = await apiCall(...args);
    setIsLoading(false);

    if (response.ok) {
      setError("Couldn't load data");
      return response;
    }

    setData(response.data);
    return response;
  };

  return {data, error, isLoading, request};
};

export default useApi;
