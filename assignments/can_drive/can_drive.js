function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (!hasDrivingLiscence) {
        return "you cannot drive";
    } else {
        if (isTired || !isSober) {
            return "you should not drive";
        }
    }
    return "you can drive";
}

module.exports = CanDrive;
