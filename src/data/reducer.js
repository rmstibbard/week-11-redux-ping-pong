import initial from "./initial";

const player1Scores = (state) => (
  {
    ...state,
    player_1: {
      score: state.player_1.score + 1,
    },
  }
);

const player2Scores = (state) => (
  {
    ...state,
    player_2: {
      score: state.player_2.score + 1,
    },
  }
);

// const setServer = (state) => {
//   const {
//     player_1: { // - How to handle nested JSON here?
//       score,
//       serving
//     },
//     player_2: {
//       score,
//       serving
//     }
//   } = state;

//   let changeServer = state.change_serve;

//   if ((player_1.score >= 20) && (player_2.score >= 20)) {
//     changeServer = 2;
//   }

//   return (
//     {
//       ...state,
//       player_1.serving: (player_1.score + player_2.score) % change_serve === 0 ? !player_1.serving : player_1.serving // ????? TERNARY NO LONGER WORKING - Nested JSON again
// }
//   )
// }

// const winningPlayer = (state) => {
//   if ((state.player_1.score >= state.winning_score) && (state.player_1.score - state.player_2.score >= 2)) {
//     return (
//       {
//         ...state,
//         previousGames: [
//           ...state.previousGames,
//           {
//             player_1: {
//               score: state.player1Score,
//               won: true,
//               name: state.player_1.name,
//             },
//             player2: {
//               score: state.player2Score,
//               won: false,
//               name: state.player_2.name,
//             }
//           }
//         ]
//       }
//     )
//   }
//   if ((state.player_2.score >= state.winning_score) && (state.player_2.score - state.player1_Score >= 2)) {
//     return (
//       {
//         ...state,
//         previousGames: [
//           ...state.previousGames,
//           {
//             player1: {
//               score: state.player1Score,
//               won: false,
//               name: state.player_1.name,
//             },
//             player2: {
//               score: state.player2Score,
//               won: true,
//               name: state.player_2.name,
//             }
//           }
//         ]
//       }
//     )
//   }
//   return (
//     {
//       ...state,
//     }
//   )
// }

const saveSettings = (state, { data }) => (
  {
    ...state,
    id: data.id,
    player_1: {
      name: data.player_1.name,
    },
    player_2: {
      name: data.player_2.name,
    },
    winning_score: data.winning_score,
    change_serve: data.change_serve,
    game_setup: true
  }
)


const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYER1_SCORES": return player1Scores(state);
    case "PLAYER2_SCORES": return player2Scores(state);
    case "SAVE_SETTINGS": return saveSettings(state, action);
    case "RESET": return {
      ...initial,
      player_1: {
        name: state.player_1.name,
      },
      player_2: {
        name: state.player_2.name,
      },
      winning_score: state.winning_score,
      change_serve: state.change_serve,
      previousGames: state.previousGames,
    };
    default: return state;
  }
};

// POST, PATCH - same response
// GET - previous games in array of same format
// DELETE

export default reducer;