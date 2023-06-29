import {
  GameViewContainer,
  GameButton,
  GameImage,
  ResultImageContainer,
  ResultName,
  ResultText,
  ButtonResult,
} from './styledComponents'

const ResultsView = props => {
  const {choicesList, isShow, checkResult, newArray, text, restartGame} = props
  const showGame = () => (
    <>
      {!isShow && (
        <GameViewContainer>
          <GameButton
            type="button"
            key={choicesList[0].id}
            data-testid="rockButton"
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              onClick={() => checkResult(choicesList[0].id)}
            />
          </GameButton>
          <GameButton
            type="button"
            key={choicesList[1].id}
            data-testid="paperButton"
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              onClick={() => checkResult(choicesList[1].id)}
            />
          </GameButton>
          <GameButton
            type="button"
            key={choicesList[2].id}
            data-testid="scissorsButton"
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              onClick={() => checkResult(choicesList[2].id)}
            />
          </GameButton>
        </GameViewContainer>
      )}
      {isShow && (
        <GameViewContainer>
          <ResultImageContainer>
            <ResultName>YOU</ResultName>
            <GameImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultName>OPPONENT</ResultName>
            <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultText>{text}</ResultText>
            <ButtonResult
              type="button"
              data-testid="rockButton"
              onClick={restartGame}
            >
              PLAY AGAIN
            </ButtonResult>
          </ResultImageContainer>
        </GameViewContainer>
      )}
    </>
  )
  return showGame()
}

export default ResultsView
