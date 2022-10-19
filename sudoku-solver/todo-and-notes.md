# todos and notes

## todos

- [x] bei jedem write einer zahl von vorn machen (+possibles updaten)
- [ ] in updateListOfPossibles-function den block-teil verbessern
- [ ] in solve-function wenn man nach eindeutigen zahlen sucht muss man unbedingt jedes mal possibles neu generieren? kann man einen kleinen for loop durch das ganze puzzle machen?
- [ ] höhere schwierigkeit testen/verbessern
  - [x] easy
  - [x] middle
  - [ ] hard
  - [ ] expert
  - [ ] hell
- [ ] integrate easy techniques from [https://baileyspuzzles.com/advanced-sudoku-techniques/](https://baileyspuzzles.com/advanced-sudoku-techniques/)
  - [ ] subsets (naked & hidden) (blocklevel double uniques)
  - [ ] blocking (aka intersection) (lock in blocklevel due to lack of possibility in line)
- [ ] integrate advanced techniques from [https://www.sudokuonline.io/tips/advanced-sudoku-strategies](https://www.sudokuonline.io/tips/advanced-sudoku-strategies)
  - [ ] The X-Wing (eliminates candidates)
  - [ ] The Swordfish (eliminates candidates)
  - [ ] Forcing Chain (might force numbers)(long and multiple ways!) wird ne harte nuss bestimmt
  - [ ] The XY-Wing (eliminate candidates)
  - [ ] Unique Rectancle Type1 (detects multiple solutions and prevents deadlock)
  - [ ] Nishio (take advantage of 50% guess and return if neccessary)
- [ ] metadaten loggen? (benötigte zeit durchlüfe)(zeit zum vergleichen gegen random)

## notes

### erster Entwurf/Plan

- nimm jeden block einzeln und guck welche zahlen möglich wären (vertikal horizontal und block)
- durchlaufe alle blöcke
- nach einem durchlauf prüfe ob nur eine zahl möglich ist wenn ja schreib die zahl rein

---

### Ideen/Sachen die aufgefallen sind

- wenn man an einen punkt kommt wo man das nicht mit einzigartigkeit lösen kann eine liste erstellen mit dem aktuellen status und dann eine möglichkeit probieren und dann checken obs richtig
- wenn 2 gleiche möglichkeiten in der horizontalen sind und das die einzige höhe im block ist kann man die zahlen in den anderen ausschliessen ohne eine zahl zu comitten
