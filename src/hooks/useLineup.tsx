import { useDispatch, useSelector } from "react-redux";
import { LineupActions } from "state/lineupSlice";
import { RootState } from "state/store";
import { PlayerStats } from "core/getPlayers";
import { useNotification } from "hooks/useNotification";

export const useLineup = () => {
  const dispatch = useDispatch();
  const { lineup, totalPlayers } = useSelector(
    (state: RootState) => state.lineup
  );
  const { displayNotification } = useNotification();

  const checkPlayerExistence = (player: PlayerStats) => {
    let draft = 0;
    Object.values<PlayerStats[]>(lineup).forEach((val) => {
      draft += val.filter((el) => el.id === player.id).length;
    });
    return draft === 1;
  };

  const checkPlayerNationality = (nationality: string) => {
    let draft = 0;
    Object.values<PlayerStats[]>(lineup).forEach((val, index) => {
      draft += val.filter((el) => el.nationality === nationality).length;
    });
    return draft === 4;
  };

  const checkPlayerPosition = (position: string) => {
    const { goalkeepers, defenders, midfielders, attackers } = lineup;

    switch (position) {
      case "Goalkeeper":
        return goalkeepers.length === 2;
      case "Defender":
        return defenders.length === 4;
      case "Midfielder":
        return midfielders.length === 4;
      case "Attacker":
        return attackers.length === 2;
    }
  };

  const lineupRules = (player: PlayerStats) => {
    switch (true) {
      case totalPlayers === 16:
        return "Ya has agregado el máximo de jugadores permitido";

      case checkPlayerExistence(player):
        return "El jugador ya existe en la táctica actual";

      case checkPlayerNationality(player.nationality):
        return `Ya tienes el máximo de ${player.nationality}`;

      case checkPlayerPosition(player.position):
        return `Ya tienes el máximo de ${player.position}`;
    }
  };

  const addToLineup = (player: PlayerStats) => {
    const hasError = lineupRules(player);

    if (hasError) {
      displayNotification({
        type: "error",
        message: hasError,
      });
    } else {
      dispatch(LineupActions.addToLineup(player));
    }
  };

  const removeFromLineup = (player: PlayerStats) => {
    dispatch(LineupActions.removeFromLineup(player));
  };

  return { addToLineup, removeFromLineup } as const;
};
