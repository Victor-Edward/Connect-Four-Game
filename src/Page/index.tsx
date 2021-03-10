import React, { useEffect, useState } from 'react'
import {Cell, Cells, Grettings, ResetButton, StartButton, Table, Wrapper } from './styled'

const ConnectFour = () => {

    const getRandomInt = () =>{
        return Math.round(Math.random()+1)
    }
    
    const [activeTurn,setActiveTurn] = useState(0)
    const [winner,setWinner] = useState(0)
    const [dropRow,setDropRow] = useState<any>([])
    const [isStartButtonActive, setIsStartButtonActive] = useState(true)
    
    const CellCreate = () => {
        const cells = []
        for (var i=0; i<7; i++){
            cells.push(<Cell onClick={e => ColorChange(e)}></Cell>)
        }
        return cells
    }

    const RowsCreate = () => {
        const rows = []
        for (var i=0; i<6; i++){
            rows.push(<tr>{CellCreate().map(cell => cell)}</tr>)
        }
        return rows
    }

    const DropColor = (e: any) => {
        const cell = e.target.cellIndex
        const cells = document.querySelectorAll('td')
        for (var i=41; i>-1; i--){
            if (cells[i].cellIndex == cell){
                if (cells[i].style.backgroundColor == ""){
                    dropRow.push(cells[i])
                }
            }
        }        
    }

    const verticalCheck = (e: any) => {
        const cell = e.target.cellIndex
        const cells = document.querySelectorAll('td')
        const playerOneColor = 'rgb(230, 57, 70)'
        const playerTwoColor = 'rgb(245, 203, 92)'   
        for (var i = 35+cell ; i>20; i -= 7){
            const a = cells[i].style.backgroundColor
            const b = cells[i-7].style.backgroundColor
            const c = cells[i-14].style.backgroundColor
            const d = cells[i-21].style.backgroundColor
            if (a == b && b == c && c == d && a != "" && b != "" && c != "" && d != ""){
                if (a == playerOneColor){
                    setWinner(1)
                } else if (a == playerTwoColor){
                    setWinner(2)
                }
            }
        } 
    }

    const horizontalCheck = () => {
        const cells = document.querySelectorAll('td')
        const playerOneColor = 'rgb(230, 57, 70)'
        const playerTwoColor = 'rgb(245, 203, 92)'
        for (var i = 41; i>2; i -= 1){
            var a = cells[i-3].style.backgroundColor
            var b = cells[i-2].style.backgroundColor
            var c = cells[i-1].style.backgroundColor
            var d = cells[i].style.backgroundColor
            if (a == b && b == c && c == d && a != "" && b != "" && c != "" && d != ""){
                if (a == playerOneColor){
                    setWinner(1)
                } else if (a == playerTwoColor){
                    setWinner(2)
                }
            }
            if (i == 9 || i == 16 || i == 23 || i == 30 || i == 37){
                i -= 2
            }
        }
    }

    const victoryCheck = () => {
        const p:any = document.querySelector('#Winner')
        if (winner == 1){
            p.innerHTML = 'Jogador 1 venceu!'
        } else if (winner == 2){
            p.innerHTML = 'Jogador 2 venceu!'
        }
    }

    const reset = () => {
        const cells = document.querySelectorAll('td')
        for (var i=0; i<cells.length; i++){
            cells[i].style.backgroundColor = ""
        }
        setWinner(0)
        turn()
    }

    const startGame = () => {
        setActiveTurn(getRandomInt())
        setIsStartButtonActive(false)
        reset()
    }

    const turn = () =>{
        const p:any = document.querySelector("#Winner")
        if (activeTurn == 1 && winner == 0){
            p.innerHTML = 'Jogador <strong>1</strong> é a sua vez!'
        } else if (activeTurn == 2 && winner == 0){
            p.innerHTML = 'Jogador <strong>2</strong> é a sua vez!'
        }
    }

    const ColorChange = (e: any) => {
        const playerOneColor = 'rgb(230, 57, 70)'
        const playerTwoColor = 'rgb(245, 203, 92)'

        DropColor(e)

        if (winner == 0){
            if (activeTurn === 1 && e.target.style.backgroundColor == ""){
                dropRow[0].style.backgroundColor = playerOneColor
                setDropRow([])
                verticalCheck(e)
                horizontalCheck()
                setActiveTurn(2)
                
            } else if (activeTurn === 2 && e.target.style.backgroundColor == ""){
                dropRow[0].style.backgroundColor = playerTwoColor
                setDropRow([])
                verticalCheck(e)
                horizontalCheck()
                setActiveTurn(1)
            }
        }
    }

    useEffect (() =>{
        victoryCheck()
    },[winner])

    useEffect (() =>{
        turn()
    },[activeTurn, winner])

    return (
        <>
        <Wrapper>
            <Grettings>
                <h1>Seja bem vindo ao Connect Four!</h1>
                <h4>O objetivo deste jogo é formar 4 fichas seguidas. Boa sorte!</h4>
            </Grettings>
        
            <p id='Winner'>Para começar clique no botão abaixo.</p>
            { isStartButtonActive ? (
                <StartButton onClick={startGame}>Começar</StartButton>
            ) : (
                <ResetButton onClick={reset}>Recomeçar</ResetButton>
            )} 
            
            
        </Wrapper>
        <Cells>
            <Table>
                <tbody>
                    {RowsCreate().map(rows => rows)}
                </tbody>
            </Table>
        </Cells>
        </>
    )
}

export default ConnectFour