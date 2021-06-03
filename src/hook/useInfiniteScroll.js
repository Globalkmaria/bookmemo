import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function useInfiniteScroll(query, fn) {
  const dispatch = useDispatch();
  useEffect(() => {
    const scrollBottom = () => {
      const {
        scrollHeight,
        scrollTop,
        clientHeight,
      } = document.documentElement;
      if (scrollTop + clientHeight + 10 >= scrollHeight) {
        dispatch(fn(query, true));
      }
    };
    window.addEventListener('scroll', scrollBottom);

    return () => {
      window.removeEventListener('scroll', scrollBottom);
    };
  }, [query, fn, dispatch]);
}

export default useInfiniteScroll;
