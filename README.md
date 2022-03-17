# Filter, Map, Reduce

Das folgende Beispiel können Sie entweder im Browser ausführen und mit den Developer Tools testen (`index.html`), oder mit Node.js. Für Windows finden Sie auf der offiziellen Node.js-Webseite ein [Installationsprogramm](https://nodejs.org/de/). Unter Ubuntu Linux können Sie Node.js folgendermassen installieren:

    sudo apt install nodejs

Testen Sie anschliessend, ob der `node`-Befehl eine entsprechende Kommandozeile anzeigt, welche JavaScript interpretiert:

    node
    > console.log('Hello, World!')
    Hello, World!

## Aufgabe: Bonusberechnung für Mitarbeiter

Die Datei `employees.js` enthält eine Reihe von Mitarbeitern (`employees`).

Verwenden Sie `node`, um die Mitarbeiter auszugeben:

    node employees.js
    [
        { name: 'Dilbert', position: 'Engineer', salary: 120000 },
        { name: 'Ashok', position: 'Intern', salary: 25000 },
        { name: 'Wally', position: 'Engineer', salary: 110000 },
        { name: 'Pointy-Haired Boss', position: 'Manager', salary: 190000 },
        { name: 'Dogbert', position: 'Consultant', salary: 220000 },
        { name: 'Alice', position: 'Engineer', salary: 115000 }
    ]

Alternativ können Sie die Datei `index.html` öffnen, und nach einem Neuladen in der Developer Console die Ausgabe betrachten.

Den Ingenieuren ("Engineers"), aber nicht den anderen Berufsgruppen, soll ein Bonus vom 10% ihres jeweiligen Jahreslohns ausbezahlt werden. Nun will die Firma wissen, wie viel sie das kosten wird. Berechnen Sie diese Zahl folgendermassen:

### Mit einer Schleife

Als erstes können Sie entweder eine klassische [`for`-Schleife](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) (mit Zählervariable) oder eine [`for`/`of`-Schleife](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) schreiben, um über die einzelnen Mitarbeiter zu iterieren.

Bei jedem Durchlauf machen Sie folgendes:

1. Prüfen, ob der Mitarbeiter ein Ingenieur ist (`employee.position === "Engineer"`).
2. Ist dies der Fall, nehmen Sie 10% des Gehalts (`employee.salary`) und addieren Sie das zu einer laufenden Summe.
3. Nach der Schleife geben Sie diese Summe aus. Dies ist der Bonus, der total ausbezahlt werden muss.

### Mit drei Schleifen

Die einzelnen Verarbeitungsschritte können auseinandergenommen werden, indem man den ganzen Berechnungsprozess auf drei Schleifen verteilt.

1. **Filterung**: In der ersten Schleife werden die Ingenieure aus den Mitarbeitern gefiltert. Erstellen Sie ein neues (zu Beginn leeres) Array. Iterieren Sie wieder mit einer `for`-Schleife über die Angestellten. Fügen Sie dem neuen Array nur diejenigen Mitarbeiter hinzu, welche Ingenieure sind. _Sie haben nun ein Array von Ingenieuren._
2. **Mapping**: In der zweiten Schleife wird für jeden Ingenieur der individuelle Bonus berechnet. Iterieren Sie über die zuvor gefundenen Ingenieure und schreiben Sie 10% des jeweiligen Gehalts in ein neues (zu Beginn leeres) Array. _Sie haben nun ein Array von Zahlen_.
3. **Reduktion**: In der dritten Schleife iterieren Sie über die Boni der Ingenieure und summieren diese zu einer Zahl auf. _Sie haben nun eine einzige Zahl._

Diese Aufteilung in drei Schleifen mag Ihnen vielleicht als umständlich erscheinen, führt uns aber näher zur Verallgemeinerung solcher Verarbeitungen.

### Mit Hilfsfunktionen

Erstellen Sie drei Hilfsfunktionen (mithilfe von [`function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)), welche folgendermassen funktionieren sollten:

1. **Prädikatsfunktion** `isEngineer`: Diese nimmt als Parameter einen `employee` entgegen und gibt zurück (Boolean), ob es sich hierbei um einen Ingenieur handelt (`true`) oder nicht (`false`).
2. **Transformationsfunktion** `calculateBonus`: Diese nimmt als Parameter einen `employee` entgegen und gibt den berechneten Bonus zurück, d.h. 10% des Gehalts.
3. **Reduktionsfunktion** `sumUp`: Diese nimmt als Parameter die laufende Summe und einen bonus entgegen, summiert diese beiden Zahlen auf und gibt die Summe zurück.

Passen Sie die Schleifenkörper nun so an, dass diese drei neuen Hilfsfunktionen zur Berechnung des Gesamtbonus verwendet werden.

### Mit `filter`, `map`, `reduce`

Diese drei Arten von Verarbeitungsschritten -- Filterung, Transformation und Reduktion -- werden so häufig gebraucht, dass JavaScript hierzu spezielle Funktionen anbietet. Hierbei handelt es sich um _Funktionen höherer Ordnung_; das sind Funktionen, welche andere Funktionen als Parameter erwarten.

Behalten Sie die gerade geschriebenen Hilfsfunktionen bei, aber eliminieren Sie die drei Schleifen, indem Sie sie durch folgende Funktionsaufrufe ersetzen:

1. **Filterung**: mit [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
2. **Transformation**: mit [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
3. **Reduktion**: mit [`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

Gehen Sie dabei Schleife für Schleife vor und überprüfen Sie, ob das jeweilige Zwischenergebnis noch korrekt ist.

Beantworten Sie folgende Frage: Was ist der Vorteil von `filter`/`map`/`reduce` gegenüber den Lösungen mit einer Schleife bzw. mit drei Schleifen? Sehen Sie auch Nachteile?

### Zusatzaufgabe

Versuchen Sie die drei Funktionen `filter`, `map` und `reduce` selber zu implementieren. Wenn Sie die Lösung mit den Schleifen und Hilfsfunktionen erarbeiten konnten, dürften `filter` und `map` keine Schwierigkeit darstellen.

Die Funktion `reduce` hingegen ist etwas anspruchsvoller zu implementieren, da Sie sich auch um den Startwert kümmern müssen.