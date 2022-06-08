import { css } from "@emotion/react";

export const GlobalStyles = css`
    :root {
        --background: #F0F2F5;
    }

    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background);
    }
`

//continuar aqui: https://app.rocketseat.com.br/node/chapter-ii-1/group/estrutura-da-aplicacao-1/lesson/criando-estilos-globais