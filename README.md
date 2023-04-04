# React Beginner

### Boilerplate

This project is created using `npm create vite@latest`

1. Install nodejs 19 from nodejs.org
2. Run `npm i` to install modules from package.json
3. Run `npm run dev` to start web-server

#### Immer "produce" is used to set nested states easily:

```typescript
import produce from "immer";
const [bugs, setBugs] = useState([
  { id: 1, title: "Bug 1", fixed: false },
  { id: 2, title: "Bug 2", fixed: false },
]);

const handleClick = () => {
  setBugs(
    produce((draft) => {
      const bug = draft.find((bug) => bug.id === 1);
      if (bug) bug.fixed = true;
    })
  );
};
```

```typescript
import produce from "immer";
const [game, setGame] = useState({
  id: 1,
  player: {
    name: "John",
    gear: ["Gloves"],
  },
});

const handleClick = () => {
  setGame(
    produce((draft) => {
      draft.player.name = "Einar";
    })
  );
  setGame(
    produce((draft) => {
      draft.player.gear.push("Boots");
    })
  );
};
```
