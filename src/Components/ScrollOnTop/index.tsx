import * as React from "react"
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

// ===============================================
//  if the upper code don't work try this instead and for the code below you have to wrap the every thing     inside the route component
// ===============================================

// import * as React from "react";
// import { useLocation } from "react-router";

// interface Props {
//     children: React.ReactNode;
// }

// const ScrollToTop: React.FC<Props> = (props) => {
//     const location = useLocation();
//     React.useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [location]);

//     return <>{props.children}</>
// };

// export default ScrollToTop;