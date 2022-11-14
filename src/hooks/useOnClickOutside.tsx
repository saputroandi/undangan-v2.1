import React, { RefObject } from "react";

const useOnClickOutside = (ref: any, handler: any) => {
	React.useEffect(() => {
		const listener = (event: Event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]);
};

export default useOnClickOutside;
