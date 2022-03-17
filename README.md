# Filter, Map, Reduce

Das folgende Beispiel können Sie entweder im Browser ausführen und mit den Developer Tools testen (`index.html`), oder mit Node.js. Für Windows finden Sie auf der offiziellen Node.js-Webseite ein [Installationsprogramm](https://nodejs.org/de/). Unter Ubuntu Linux können Sie Node.js folgendermassen installieren:

    sudo apt install nodejs

Testen Sie anschliessend, ob der `node`-Befehl eine entsprechende Kommandozeile anzeigt, welche JavaScript interpretiert:

    nodejs
    > console.log('Hello, World!')
    Hello, World!

## Bonusberechnung für Mitarbeiter

Die Datei `employees.js` enthält eine Reihe von Mitarbeitern (`employees`). Den Ingenieuren ("Engineers"), aber nicht den anderen Berufsgruppen, soll ein Bonus vom 10% ihres jeweiligen Jahreslohns ausbezahlt werden. Nun will die Firma wissen, wie viel sie das kosten wird. Berechnen Sie diese Zahl folgendermassen:

### Mit ein

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