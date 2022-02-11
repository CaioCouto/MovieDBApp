export default function capitalize(word) {
    /**
     * Returns a capitalized version of a single word.
     * Examples:
     *      test -> Test
     *      HOUSE -> house
     *      ShAzAm -> Shazam
     */
    const letters = word.toLowerCase().split('')
    const [ firstLetter ] = letters.splice(0, 1)
    const capitalized = firstLetter.toUpperCase() + letters.join('')
    return word === 'tv' ? capitalized + ' Show' : capitalized 
}