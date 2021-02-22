import hotkeys from 'hotkeys-js'

const observerMap = {}


export function addKeyObserver(key, callback) {
    if (! observerMap[key]) {
        observerMap[key] = []
        hotkeys(key, () => {})
    }

    observerMap[key].push(callback)
}


export function removeKeyObserver(key, callback) {
    observerMap[k

}