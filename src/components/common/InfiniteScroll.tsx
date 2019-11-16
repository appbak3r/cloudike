import React, { FC, memo, useCallback, useEffect } from "react";

type Props = {
  onLoadMore: () => void;
  hasMore: boolean;
};

export const InfiniteScroll: FC<Props> = memo(
  ({ children, hasMore, onLoadMore }) => {
    const trigger = React.createRef<HTMLDivElement>();

    const loadMore = useCallback(
      (entries: IntersectionObserverEntry[]) => {
        const [target] = entries;

        if (target.isIntersecting && hasMore) {
          onLoadMore();
        }
      },
      [hasMore, onLoadMore]
    );

    useEffect(() => {
      if (!trigger.current) {
        return;
      }

      const triggerElement = trigger.current;

      const options = {
        root: null,
        rootMargin: "500px"
      };

      const observer = new IntersectionObserver(loadMore, options);

      observer.observe(triggerElement);

      return () => {
        observer.unobserve(triggerElement as Element);
      };
    }, [loadMore, trigger]);

    return (
      <>
        {children}

        <div ref={trigger} />
      </>
    );
  }
);
