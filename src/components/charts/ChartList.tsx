import React, { useState, useEffect } from "react";
import axios from "axios";
import { Space } from "antd";

import ChartItem from "./ChartItem";

const useFetch = (initialData: string[], initialUrl: string) => {
  const [posts, setPosts] = useState(initialData);
  const [url] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await axios(url);
        const postList = response.data.data.list;
        console.log(postList);
        setPosts(postList);

        if (postList.length > 0) {
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(error);
      }
    };

    fetchData();
  }, [url]);

  return [{ posts, isLoading, isError }];
};

const ChartList = () => {
  const results: string[] = [];
  const url: string = "http://localhost:8000/api/datawrapper/charts";

  const [{ posts, isLoading, isError }] = useFetch(results, url);

  return (
    <Space size={20} className="chart-list">
      {isError && <div>Something Went Wrong! Fixing it Right Away!</div>}
      {isLoading ? (
        <div>Charts Coming Soon :)</div>
      ) : (
        posts &&
        posts.map((post: any, e: number) => {
          return <ChartItem key={e} post={post} className="chart-item" />;
        })
      )}
    </Space>
  );
};

export default ChartList;
