import { Plant } from './types'

// Beispiel für ein Pflanzendatenbank-Array
const plantDatabase: Plant[] = [
  // ... (Liste von Pflanzenobjekten)
]

/**
 * Überprüft die Kompatibilität zwischen den Pflanzen.
 * @param plant Die Hauptpflanze, die Sie anbauen möchten.
 * @returns Ein Objekt, das die Gesamtkompatibilität und potenzielle Problempflanzen angibt.
 */
function checkCompatibility(plant: Plant): { score: number; issues: string[] } {
  const { good, bad } = plant.synergies
  let score = 0
  let issues: string[] = []

  // Für jede "good" Pflanze
  for (let compatiblePlantName of good) {
    const compatiblePlant = plantDatabase.find(
      (p) => p.name.common === compatiblePlantName
    )
    if (!compatiblePlant) continue

    // Überprüfe, ob die "good" Pflanze mit anderen "good" Pflanzen kompatibel ist
    for (let otherPlantName of good) {
      if (compatiblePlantName === otherPlantName) continue // Sich selbst überspringen
      if (compatiblePlant.synergies.bad.includes(otherPlantName)) {
        issues.push(
          `${compatiblePlantName} verträgt sich nicht mit ${otherPlantName}`
        )
      } else {
        score++
      }
    }
  }

  // Eine einfache Methode zur Wertung: score - Anzahl der Probleme
  score = score - issues.length

  return { score, issues }
}

// Beispielaufruf:
// const potato = plantDatabase.find((p) => p.name.common === 'Kartoffel')
// const compatibility = checkCompatibility(potato!)
// console.log(compatibility)
