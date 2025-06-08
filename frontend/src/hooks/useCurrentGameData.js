import React, { useState } from 'react'

export const useCurrentGameData = () => {
    const [gameData, setGameData] = useState({
        gameId: null,
        gameStatus: null,
        attemptsLeft: null,
        wordToGuess: null,
        guesses: null,
    });

    return {
        gameId,
        gameStatus,
        attemptsLeft,
        wordToGuess,
        guesses,
    }
}