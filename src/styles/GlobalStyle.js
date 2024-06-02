import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

:root {
    font-size: 60%;
}

@media (min-width: 700px) {
    :root {
        font-size: 62.5%;
    }
}

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

button {
    cursor: pointer;
}

ul {
    width: 100vw;
    display: flex;
    align-items: center;
    padding: 100px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 100px;
    
}

li {
    list-style-type: none;
}

footer {
    background-color: gray;
}

`;
