import React from 'react'

export const useSendWord = () => {
    const [result, setResult] = useState({
        result: null,
        attemptsLeft: null,
        isGameWon: false,
    })

    return {
        result,
        attemptsLeft,
        isGameWon,
    }
}