import * as React from "react";

// mostly stolen from https://codesandbox.io/s/04vvrxj79p
export const useIntersect = ({
  root,
  rootMargin,
  threshold = 0
}: {
  root: Element | null;
  rootMargin?: string;
  threshold?: number[] | number;
}): [
  React.MutableRefObject<HTMLDivElement | null>,
  IntersectionObserverEntry | undefined
] => {
  const [entry, updateEntry] = React.useState<IntersectionObserverEntry>();
  const node = React.useRef<HTMLDivElement>(null);

  const observer = React.useRef(
    new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold
    })
  );

  React.useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (node && node.current) {
      currentObserver.observe(node.current);
    }

    return () => currentObserver.disconnect();
  }, [node]);

  return [node, entry];
};
