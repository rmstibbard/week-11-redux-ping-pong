const initial = {
  id: null,
  complete: false,
  loaded: false,
  game_setup: false,
  winning_score: 21,
  change_serve: 5,

  player_1: {
    name: '',
    score: 0,
    serving: true,
    won: false
  },

  player_2: {
    name: '',
    score: 0,
    serving: false,
    won: false
  }

};

export default initial;