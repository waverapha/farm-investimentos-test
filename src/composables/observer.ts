export function useIntersectionObserver(handleIntersect: IntersectionObserverCallback, options?: IntersectionObserverInit) {
  const createObserver = () => {
    const observerOptions = Object.assign({
      root: null,
      rootMargin: "0px"
    }, options)

    return new IntersectionObserver(handleIntersect, observerOptions);
  }

  return {
    createObserver
  }
}