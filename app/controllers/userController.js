module.exports = {
    allUserAccess: (req, res) => {
        res.status(200).send("public content")
    },
    adminAccess: (req, res) => {
        res.status(200).send("admin content")
    },
    moderatorAccess: (req, res) => {
        res.status(200).send("moderator content")
    },
    userAccess: (req, res) => {
        res.status(200).send("user content")
    }
}