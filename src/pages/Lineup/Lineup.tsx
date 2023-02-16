import { useSelector } from "react-redux";
import { PlayerStats } from "core/getPlayers";
import { Box } from "@mui/material";
import { SoccerField } from "components/SoccerField";
import { Tactic } from "components/Tactic";
import { Player } from "components/Player";
import { RootState } from "state/store";

const Lineup = () => {
  const { lineup } = useSelector((state: RootState) => state.lineup);
  const { goalkeepers, defenders, midfielders, attackers } = lineup;

  return (
    <Box sx={{ width: "40%", px: 4, pt: 4 }}>
      <SoccerField>
        <Tactic>
          {goalkeepers.map((gk: PlayerStats, index: number) => (
            <Player key={gk.id} position={`gk${index}`} photo={gk.photo} />
          ))}
          {defenders.map((d: PlayerStats, index: number) => (
            <Player key={d.id} position={`d${index}`} photo={d.photo} />
          ))}
          {midfielders.map((m: PlayerStats, index: number) => (
            <Player key={m.id} position={`m${index}`} photo={m.photo} />
          ))}
          {attackers.map((a: PlayerStats, index: number) => (
            <Player key={a.id} position={`a${index}`} photo={a.photo} />
          ))}
        </Tactic>
      </SoccerField>
    </Box>
  );
};

export { Lineup };
