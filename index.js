
const superbowlWin = arr => {
    let tracker = arr.find(record => record.result === 'W')  
    return tracker ? tracker.year : undefined
}

