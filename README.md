# React Beginner

### Boilerplate

This project is created using `npm create vite@latest`

1. Install nodejs 19 from nodejs.org
2. Run `npm i` to install modules from package.json
3. Run `npm run dev` to start web-server

### Nice to knows

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

#### React-hook-form provides easy form usage

```typescript
import React, { FormEvent, useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
```
