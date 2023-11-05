import { useEffect, useState } from 'react';
import { createListPageArr } from '../util/createListPageArr';

export const useMorePage = (data) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [listPageArr, setListPageArr] = useState([]);

  //서버에서 받은 data 페이징처리
  useEffect(() => {
    if (data) {
      const arr = createListPageArr(data, currentPage);
      setListPageArr(arr);
    }
  }, [data, currentPage]);

  //다음페이지 불러오기
  const getMorePage = () => {
    if (listPageArr[currentPage]?.length >= 5) setCurrentPage((prev) => prev + 1);
    else setHasNextPage(false);
  };

  return { listPageArr, currentPage, hasNextPage, getMorePage };
};
