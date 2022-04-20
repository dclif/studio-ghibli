import { render, screen } from '@testing-library/react';
import App from './App';
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("https://ghibliapi.herokuapp.com/films", (req, res, ctx) => {
    return res(
      ctx.json([{
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "original_title": "天空の城ラピュタ",
        "original_title_romanised": "Tenkū no shiro Rapyuta",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "release_date": "1986",
        "running_time": "124",
        "rt_score": "95",
        "people": [],
        "species": [],
        "locations": [],
        "vehicles": [],
        "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"

      }])
    )
  }));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('renders film title', async () => {
  render(<App />);
  const filmTitle = await screen.findByText(/Castle in the Sky/i);
  expect(filmTitle).toBeInTheDocument();
});
