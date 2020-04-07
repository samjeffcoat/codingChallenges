function missingAngle(angle1, angle2) {
    let sum = 180;
    if (sum - angle1 - angle2 > 90) {
        return 'obtuse'
    } else if (sum - angle1 - angle2 < 90) {
        return 'acute'
    } else {
        return 'right'
    }
}


const missingAngle = (angle1, angle2) => {
    const angle3 = 180 - angle1 - angle2;
    return angle3 > 90 ? 'obtuse' : angle3 < 90 ? 'acute' : 'right';
};