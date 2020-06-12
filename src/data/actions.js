
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

export const saveSettings = (data) => {
  return {
    type: "SAVE_SETTINGS",
    data: data
  }
}

export const reset = () => {
  return {
    type: "RESET"
  }
}
