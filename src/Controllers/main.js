const controller = {
    index: (req,res) => res.render('index', {
        styles: ["/home"]
    }),
    about: (req, res) => res.render("about", {
        styles: ["/about"]
    }),
    contact: (req, res) => res.render("contact", {
        styles: ["/contact"]
    }),
    talleres: (req, res) => res.render("talleres", {
        styles: ["/talleres"]
    })
}

module.exports = controller
