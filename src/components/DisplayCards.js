import React, { Component, useEffect, useState } from 'react';

const DisplayCards = (props) => {
    // const { tasks } = props;

    const [className1, setClassName1] = useState('blueCard');
    const [className2, setClassName2] = useState('greenCard');
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameState, setGameState] = useState('please begin');


    const card1 = <div id="card1" className={className1} key={"card1"}></div>
    const card2 = <div id="card2" className={className2} key={"card2"}></div>
    const cards = [card1, card2]
    let clickedCards = []
    let thisCounter = 0


    useEffect(() => {

        const shuffle = (event) => {



            if (clickedCards.includes(event.target.className)) {

                console.log('you lose')

                setCurrentScore(0)

                thisCounter = 0

                setGameState('please begin')

                clickedCards = []



            } else {

                thisCounter ++
                clickedCards.push(event.target.className)

                let card1 = document.getElementById('card1')
                let card2 = document.getElementById('card2')

                let card1Sticky = card1.className.toString()
                let card2Sticky = card2.className.toString()
                let oldClassNameList = [card1Sticky, card2Sticky]
                let newClassNameList = oldClassNameList
                let counter = 0

                console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
                console.log("currentScore1: " + currentScore)

                setCurrentScore(currentScore + 1)
                console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
                console.log("currentScore2: " + currentScore)



                console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
                console.log("clickedCards: " + clickedCards)

                // execute until the new order of cards is different from the current order of cards
                while (newClassNameList[0] == card1Sticky
                    && newClassNameList[1] == card2Sticky
                    && counter < 20) {


                    let currentIndex = newClassNameList.length, randomIndex;
                    // While there remain elements to shuffle...
                    while (currentIndex != 0) {
                        // Pick a remaining element...
                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex--;
                        // And swap it with the current element.
                        [newClassNameList[currentIndex], newClassNameList[randomIndex]] = [
                            newClassNameList[randomIndex], newClassNameList[currentIndex]];
                    }
                    counter = counter + 1
                }


                if (true) {
                    setClassName1(newClassNameList[0])
                    setClassName2(newClassNameList[1])
                    setCurrentScore(thisCounter)
                    setHighScore(thisCounter)
                    setGameState('playing')




                }

            }

        };

        let thisCard = document.getElementById('card1')
        thisCard.addEventListener("click", shuffle);
        let thisOtherCard = document.getElementById('card2')
        thisOtherCard.addEventListener("click", shuffle);



        return () => {
            thisCard.removeEventListener("click", shuffle);
            thisOtherCard.removeEventListener("click", shuffle);

        };

    }, []);






    return (

        <div id="board" >
            {cards}
            {/* <button onClick={shuffle}>I'm a button</button> */}
            <div>current score: {currentScore}</div>
            <div>high score: {highScore}</div>
            <div>state: {gameState}</div>


        </div>

    );
};

export default DisplayCards;

