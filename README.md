# Filter, Map, Reduce

## Bonusberechnung für Mitarbeiter

Die Datei `employees.js` enthält eine Reihe von Mitarbeitern. Den Ingenieuren ("Engineers") soll ein Bonus vom 10% ihres jeweiligen Jahreslohns ausbezahlt werden. Nun will die Firma wissen, wie viel sie das kosten wird. Berechnen Sie diese Zahl in drei Schritten:

1. filtern Sie die Angestellten, sodass nur noch Ingenieure übrigbleiben
2. berechnen Sie den Bonus für jeden Ingenieur, sodass eine Reihe von Zahlen übrigbleibt
3. berechnen Sie die Summe dieser einzelnen Boni, um auf den Gesamtbonus zu kommen

### (Notizen zum Refactoring)

1. start with `for`/`of` loops
2. refactor to `forEach` calls
3. extract functions
    - predicate
    - mapping
    - summing
4. write own functions
    - filter
    - map
    - reduce