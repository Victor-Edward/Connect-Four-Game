import styled from 'styled-components'


export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    
    & p {
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }
`

export const Grettings = styled.div`
    width: 80%;
    height: 120px;
    background-color: darkgray; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 5px;
    border-radius: 10px;
`

export const Cells = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
`

export const Cell = styled.td`
    width: 70px;
    height: 70px;
    background-color: #ccdbfd;
    border: 2px solid black;
    border-radius: 40px;
`

export const Table = styled.table`
    border-radius: 10px;
    background-color: #5390d9; 
    padding: 8px;
    box-shadow: 15px 10px 40px #014f86;
    margin-bottom: 30px;
`

export const StartButton = styled.button`
    border: 0;
    border-radius: 6px;
    
    background-color: #008000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 125px;
    height: 38px;
    font-size: 28px;

    transition: background-color 0.2s;
    :hover{
        background-color: #006600;
    }
`

export const ResetButton = styled.button`
    border: 0;
    border-radius: 6px;
    
    background-color: #008000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 38px;
    font-size: 28px;

    transition: background-color 0.2s;
    :hover{
        background-color: #006600;
    }
`