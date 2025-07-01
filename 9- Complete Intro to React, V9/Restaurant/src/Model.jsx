// basically stolen from the React docs
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Model({ children }) {
    const elRef = useRef(null);
    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elRef.current);

        //the cleaning function of this render which will be triggered in the beginning of the next render
        return () => modalRoot.removeChild(elRef.current);
    }, []);

    // render the children inside the elRef.current 
    return createPortal(<div>{children}</div>, elRef.current);
};