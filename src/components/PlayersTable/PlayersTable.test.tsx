import { render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "state/store";
import { PlayersTable } from "./PlayersTable";

const players = [
  {
    id: 217,
    name: "Lautaro Javier Martínez",
    nationality: "Argentina",
    position: "0",
    photo: "https://media.api-sports.io/football/players/217.png",
  },
  {
    id: 576,
    name: "Eduardo Antonio Salvio",
    nationality: "Argentina",
    position: "1",
    photo: "https://media.api-sports.io/football/players/576.png",
  },
  {
    id: 642,
    name: "Sergio Leonel Agüero del Castillo",
    nationality: "Argentina",
    position: "2",
    photo: "https://media.api-sports.io/football/players/642.png",
  },
  {
    id: 982,
    name: "Lucas Nicolás Alario",
    nationality: "Argentina",
    position: "3",
    photo: "https://media-3.api-sports.io/football/players/982.png",
  },
  {
    id: 1854,
    name: "Carlos Joaquín Correa",
    nationality: "Argentina",
    position: "4",
    photo: "https://media.api-sports.io/football/players/1854.png",
  },
  {
    id: 2462,
    name: "Esteban Maximiliano Andrada",
    nationality: "Argentina",
    position: "5",
    photo: "https://media-3.api-sports.io/football/players/2462.png",
  },
  {
    id: 5996,
    name: "Enzo Jeremías Fernández",
    nationality: "Argentina",
    position: "6",
    photo: "https://media.api-sports.io/football/players/5996.png",
  },
  {
    id: 6000,
    name: "Lucas Martínez Quarta",
    nationality: "Argentina",
    position: "7",
    photo: "https://media-3.api-sports.io/football/players/6000.png",
  },
  {
    id: 6009,
    name: "Julián Álvarez",
    nationality: "Argentina",
    position: "8",
    photo: "https://media-3.api-sports.io/football/players/6009.png",
  },
  {
    id: 6492,
    name: "Jeremías Conan Ledesma",
    nationality: "Argentina",
    position: "9",
    photo: "https://media.api-sports.io/football/players/6492.png",
  },
  {
    id: 6610,
    name: "Marcos Nicolás Senesi Barón",
    nationality: "Argentina",
    position: "10",
    photo: "https://media.api-sports.io/football/players/6610.png",
  },
  {
    id: 6716,
    name: "Alexis Mac Allister",
    nationality: "Argentina",
    position: "11",
    photo: "https://media-3.api-sports.io/football/players/6716.png",
  },
  {
    id: 19071,
    name: "Emiliano Buendía Stati",
    nationality: "Argentina",
    position: "12",
    photo: "https://media-3.api-sports.io/football/players/19071.png",
  },
  {
    id: 19599,
    name: "Damián Emiliano Martínez Romero",
    nationality: "Argentina",
    position: "13",
    photo: "https://media-3.api-sports.io/football/players/19599.png",
  },
  {
    id: 26315,
    name: "Nicolás Iván González",
    nationality: "Argentina",
    position: "14",
    photo: "https://media.api-sports.io/football/players/26315.png",
  },
  {
    id: 30776,
    name: "Cristian Gabriel Romero",
    nationality: "Argentina",
    position: "15",
    photo: "https://media.api-sports.io/football/players/30776.png",
  },
  {
    id: 35550,
    name: "Maximiliano Eduardo Meza",
    nationality: "Argentina",
    position: "16",
    photo: "https://media-3.api-sports.io/football/players/35550.png",
  },
  {
    id: 278339,
    name: "Federico Gomes Gerth",
    nationality: "Argentina",
    position: "17",
    photo: "https://media.api-sports.io/football/players/278339.png",
  },
  {
    id: 333667,
    name: "Tiago José Geralnik",
    nationality: "Argentina",
    position: "18",
    photo: "https://media.api-sports.io/football/players/333667.png",
  },
  {
    id: 341646,
    name: "Valentín Carboni",
    nationality: "Argentina",
    position: "19",
    photo: "https://media-3.api-sports.io/football/players/341646.png",
  },
];

describe("<PlayersTable />", () => {
  const Component = () => {
    return (
      <Provider store={store}>
        <PlayersTable players={players} />
      </Provider>
    );
  };

  it("Should render successfully", () => {
    // Arrange
    render(<Component />);

    // Act
    const result = screen.getByTestId("playerstable");

    // Assert
    expect(result).toBeInTheDocument();
  });

  it("Should have Name, Nationality & Position as columns", () => {
    // Arrange
    render(<Component />);

    // Act
    const result = screen.getByRole("columnheader", { name: "Name" });
    const result2 = screen.getByRole("columnheader", { name: "Nationality" });
    const result3 = screen.getByRole("columnheader", { name: "Position" });

    // Assert
    expect(result).toBeInTheDocument();
    expect(result2).toBeInTheDocument();
    expect(result3).toBeInTheDocument();
  });

  it("Should have 20 rows of players", () => {
    // Arrange
    render(<Component />);

    // Act
    players.forEach(({ name, position }, index) => {
      const row = within(screen.getByTestId(`argentina-${index}`));
      const result = row.getByText(name);
      const result2 = row.getByText(position);

      // Assert
      expect(result).toBeInTheDocument();
      expect(result2).toBeInTheDocument();
    });
  });
});
