import styled from "@emotion/styled";

export const Container = styled.main`
    max-width: 1120px;
    margin: -2rem auto;
    padding: 2.5rem 1rem;
    background-color: var(--background);
    border-radius: 0.25rem;

    form {
        display: flex;
        flex-direction: column;

        label {
            color: var(--blue);
        }

        input {
            border: 0;
            padding: 0 2rem;
            border-radius: 0.25rem;
            height: 2rem;
            background-color: var(--blue);
            color: #fff;
        }
    }

`