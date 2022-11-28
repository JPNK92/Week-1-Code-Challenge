function speedDetector(speed) {
    let points = (speed-70)/5;
    if (speed >=0 && speed <= 70) {
        return "Ok";
    }else if ((speed-70)/5>12) {
        return "license suspended";
    } else {
        return `points:${points}`;
    }
}
speedDetector();