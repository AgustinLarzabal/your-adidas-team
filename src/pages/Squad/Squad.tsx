import { useEffect, useState } from "react";
import { getCountries, Countries, Country } from "core/getCountries";
import { getTeams, Teams, TeamObj } from "core/getTeams";
import { getPlayers, Players, PlayerObj, PlayerStats } from "core/getPlayers";
import { Box } from "@mui/material";
import { Autocomplete } from "components/Autocomplete";
import { PlayersTable } from "components/PlayersTable";
import { Option } from "utils/types";
import { deepSearchByKey } from "utils/helpers";
import { useLoader } from "hooks/useLoader";
import { useNotification } from "hooks/useNotification";
import { ERRORS, Error } from "utils/errors";

const Squad = () => {
  const [countries, setCountries] = useState<Option[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [teamID, setTeamID] = useState<number>(0);
  const [players, setPlayers] = useState<PlayerStats[]>([]);
  const { showLoader, hideLoader } = useLoader();
  const { displayNotification } = useNotification();

  useEffect(() => {
    handleGetCountries();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      handleGetTeams();
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (teamID) {
      handleGetPlayers();
    }
  }, [teamID]);

  const handleGetCountries = () => {
    showLoader();
    getCountries()
      .then((res: Countries) => {
        hideLoader();
        const formattedCountries = res.response.map((country: Country) => {
          return {
            label: country.name,
            value: country.name.toLowerCase(),
            code: country.code ?? "",
          };
        });
        setCountries(formattedCountries);
      })
      .catch((error: Error) => {
        hideLoader();
        displayNotification({
          type: "error",
          message: ERRORS.getCountriesError.message,
        });
      });
  };

  const handleGetTeams = () => {
    showLoader();
    getTeams(selectedCountry)
      .then((res: Teams) => {
        const nationalTeam = res.response.find(
          (team: TeamObj) => team.team.national === true
        );
        setTeamID(nationalTeam?.team.id ?? 0);
      })
      .catch((error: Error) => {
        hideLoader();
        displayNotification({
          type: "error",
          message: ERRORS.getPlayersError.message,
        });
      });
  };

  const handleGetPlayers = () => {
    getPlayers(teamID)
      .then((res: Players) => {
        hideLoader();
        const players = res.response.map((player: PlayerObj, index) => {
          const asd = deepSearchByKey(res.response, "position");
          return {
            id: player.player.id,
            name: `${player.player.firstname} ${player.player.lastname}`,
            nationality: player.player.nationality,
            // TODO: REFACTOR!!!
            position: asd[index].position,
            photo: player.player.photo,
          };
        });
        setPlayers(players);
      })
      .catch((error: Error) => {
        hideLoader();
        hideLoader();
        displayNotification({
          type: "error",
          message: ERRORS.getPlayersError.message,
        });
      });
  };

  const handleCountrySelection = (country: string) => {
    setSelectedCountry(country);
  };

  return (
    <Box sx={{ width: "60%", p: 4 }}>
      <Autocomplete
        label="Choose a National Team"
        options={countries}
        onChange={handleCountrySelection}
      />

      {players.length > 0 && <PlayersTable players={players} />}
    </Box>
  );
};

export { Squad };
