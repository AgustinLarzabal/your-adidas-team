import { useSelector } from "react-redux";
import { PlayerStats } from "core/getPlayers";
import {
  Chip,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupRemoveIcon from "@mui/icons-material/GroupRemove";
import { useLineup } from "hooks/useLineup";

type Props = {
  players: PlayerStats[];
};

const PlayersTable = ({ players }: Props) => {
  const { addToLineup, removeFromLineup } = useLineup();
  const lineup = useSelector((state: any) => state.lineup.lineup);

  return (
    <TableContainer data-testid="playerstable">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Nationality</TableCell>
            <TableCell colSpan={2}>Position</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player, index) => (
            <TableRow
              key={`${player.name}`}
              data-testid={`${player.nationality.toLowerCase()}-${player.position.toLowerCase()}`}
            >
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.nationality}</TableCell>
              <TableCell>
                <Chip
                  label={player.position}
                  color="primary"
                  size="small"
                  className={`position-${player.position}`}
                />
              </TableCell>
              <TableCell align="right">
                <Tooltip title="Add to lineup">
                  <IconButton
                    onClick={() => {
                      addToLineup(player);
                    }}
                    disabled={lineup.length >= 16}
                  >
                    <GroupAddIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Remove from lineup">
                  <IconButton
                    onClick={() => {
                      removeFromLineup(player);
                    }}
                  >
                    <GroupRemoveIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { PlayersTable };
