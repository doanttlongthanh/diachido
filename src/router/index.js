const newRouter = require("./news");

function router(app) {
    // TIN TỨC
    app.use("/news", newRouter);

    // TRANG CHỦ
    app.get("/", (req, res) => {
        res.render("home");
    });

    // TÌM KIẾM

    app.get("/search", (req, res) => {
        res.render("search");
    });
}

module.exports = router;
