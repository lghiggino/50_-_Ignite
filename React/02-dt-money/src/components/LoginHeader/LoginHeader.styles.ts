import styled from "@emotion/styled";

export const Container = styled.header`
    background-color: var(--blue);
`
export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .button-container{
        display: flex;
        flex-direction: column;

            button { 
            font-size: 1rem;
            color: #fff;
            background-color: var(--blue-light);
            border: 0;
            padding: 0 2rem;
            border-radius: 0.25rem;
            height: 3rem;
            margin-right: 1rem;
            margin-bottom: 0.5rem;

            transition: filter 0.2s;

            &:hover{
                filter: brightness(0.9);
            }
        }
    }

`

export const FormSection = styled.section`
    max-width: 1120px;
    margin: 0 auto;

    form {
        display: flex;
        flex-direction: column;
        margin: 0 1rem 1rem 1rem;
        padding-bottom: 2rem;

        label {
            color: #fff;
        }

        input {
            border: 0;
            padding: 0 2rem;
            border-radius: 0.25rem;
            height: 2rem;
            background-color: #fff;
            color: var(--blue);
            outline: none;
        }


        button { 
            font-size: 1rem;
            color: #fff;
            background-color: var(--blue-light);
            border: 0;
            padding: 0 2rem;
            border-radius: 0.25rem;
            height: 3rem;
            margin-bottom: 0.5rem;
            max-width: 12rem;
            align-self: flex-end;

            transition: filter 0.2s;

            &:hover{
                filter: brightness(0.9);
            }
        }
    }
`