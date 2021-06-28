import { createGlobalStyle } from "styled-components";

import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
   
    }

    *, *:before, *:after {
        box-sizing : border-box; 
        
    }

    main {
        width : 100%; 
        margin: 0; 
    }
`;
