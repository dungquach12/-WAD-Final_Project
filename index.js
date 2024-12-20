const express = require("express");
const app = express();
const port = 3000;
const expressHbs = require("express-handlebars");
const { createPagination } = require("express-handlebars-paginate")

// Configure static web folders
app.use(express.static(__dirname + "/html"));

// Configure view templates
app.engine('hbs', expressHbs.engine({
    layoutsDir: __dirname + "/views/layouts",
    partialDir: __dirname + "/views/partials",
    extname: "hbs",
    defaultLayout: "layout",
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    },
    helpers: {
        createPagination,
        formatDate: (date) => {
            return date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            });
        },
    }
}));

app.set("view engine", "hbs");

// Routes
// YOUR CODE HERE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/profile", require("./routes/profileRouter"));

app.listen(port, () =>
     console.log(`Example app listening on port ${port}`)
);