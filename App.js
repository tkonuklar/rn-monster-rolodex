import React, { useState, useEffect, useMemo } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import { AppWrapper } from "./components/app-wrapper/app-wrapper.component";
import { Headline } from "./components/headline/headline.component";

function App() {
  const [monsters, setMonsters] = useState(null);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  function handleChange(text) {
    setSearchField(text);
  }

  const filteredMonster = useMemo(() => {
    if (!monsters) return [];
    return monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
  }, [monsters, searchField]);

  return (
    <AppWrapper>
      <Headline>{monsters ? "Monster Rolodex" : "Loading…"}</Headline>
      <SearchBox placeholder="Search Monster" handleChanges={handleChange} />
      <CardList monsters={filteredMonster}></CardList>
    </AppWrapper>
  );
}

export default App;
