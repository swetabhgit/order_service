// haversine formula to calucate distance

let calculateDistance = (latitude1, longitude1, latitude2, longitude2) =>{

    const R= 6371 // earth radius
    const longitude1Radian = longitude1*Math.PI/180 
    const longitude2Radian = longitude2*Math.PI/180
    const longitudeDiff = Math.abs(longitude2-longitude1)*Math.PI/180
    const latitudeDiff = Math.abs(latitude2-latitude1)*Math.PI/180
    const a = Math.sin(latitudeDiff) * Math.sin(latitudeDiff/2) +
    Math.cos(longitude1Radian) * Math.cos(longitude2Radian) *
    Math.sin(longitudeDiff/2) * Math.sin(longitudeDiff/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R*c

}

module.exports.calculateDistance = calculateDistance