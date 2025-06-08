import React, { useEffect, useState } from 'react'

export const useStartGame = () => {
    const [id, getId] = useState({
        gameId: null
    });

    useEffect(() => {
        getGameId();
    }, []);

    const getGameId = async() => {
        const resp = await fetch('localhost:3000/game');
        const data = await resp.json();

        console.log({data})
    }

    return {
        gameId,
    }
}