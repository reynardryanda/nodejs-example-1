const printUserToConsole = (req, res, next) => {
    if(true) {
        console.log('user lewat /user atau /user/profile');
        next();
    } else {
        return res.status(401).json({message: "unauthorized"})
    };
};

module.exports = {
    printUserToConsole
}