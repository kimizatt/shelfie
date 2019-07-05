




module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const {name, price, imgurl}= req.body
        console.log(req.body)
        db.create_product([name, price, imgurl])
        .then( ()=> res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Something went wrong.'})
            console.log(err)
        })
        
    },

    getProducts: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: "oops! something went wrong."})
        })
        
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        
        db.delete_product(id)
        .then ( () => res.sendStatus(200))
        .catch (err => {
            res.status(500).send({errorMessage: "Oops!"})
            console.log(err)
        })

    }

    // update: (req, res) => {
    //     const db =req.app.get('db')
    // }

}