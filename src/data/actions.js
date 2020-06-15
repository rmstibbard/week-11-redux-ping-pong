
export const player1Scores = () => {
  return {
    type: "PLAYER1_SCORES"
  }
}

export const player2Scores = () => {
  return {
    type: "PLAYER2_SCORES"
  }
}

export const saveGameData = (data) => {
  return {
    type: "SAVE_GAMEDATA",
    data: data
  }
}

export const reset = () => {
  return {
    type: "RESET"
  }
}

export const postGame = (data) => {
  return {
    type: "POST_GAME",
    data: data
  }
}
