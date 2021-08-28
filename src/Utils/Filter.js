import {matchSorter} from 'match-sorter'
import citiesList from '../citiesList.json'

export function getMatchedCities(word) {
    if (!word || word?.length < 3) return []
    return matchSorter(citiesList, word)
}
