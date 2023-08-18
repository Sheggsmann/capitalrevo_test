import { useEffect, useLayoutEffect, useRef } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function useEventListener(eventName, handler, element, options) {
  // create a ref that stores the handler
  const saveHandler = useRef(handler);

  useIsomorphicLayoutEffect(() => {
    saveHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define the listening target
    const targetElement = element?.current || window;

    if (!(targetElement && targetElement.addEventListener)) return;

    // Create event listener that calls handler function stored in ref
    const listener = (event) => saveHandler.current(event);

    targetElement.addEventListener(eventName, listener, options);

    // Remove event listener on cleanup
    return () =>
      targetElement.removeEventListener(eventName, listener, options);
  }, [eventName, element, options]);
}
