# React Beginner

### Boilerplate

1. Install nodejs 19 from nodejs.org
2. Create app with 'npm create vite@latest'

#### immer "produce" is used to set nested states easily:

```typescript
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
