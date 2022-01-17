

export const loginCtrl = async (req, res) => {
    try {

        const {email,password} = req.body;

    } catch (error) {
        res.status(401).json(error)
    }
}