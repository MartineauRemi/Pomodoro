/** 
 * @param {*} time in seconds
 * @returns the number of minutes
 */
const getMinutes = (time) => parseInt(time / 60000)

/** 
 * @param {*} time in seconds 
 * @returns the number of seconds
 */
const getSeconds = (time) => (time % 60000 < 10000 ? "0" : "") + parseInt((time % 60000) / 1000)


/** 
 * @param {*} time in seconds
 * @returns a string following the pattern: 'mm:ss'
 * e.g. displayTimerValue(90) === '01:30)'
 */
export function displayTimerValue(time){
    return getMinutes(time) + ":" + getSeconds(time)
}