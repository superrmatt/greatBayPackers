var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "greatbay_db"


});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected at ID: " + connection.thread)
    afterConnection()
})

function afterConnection() {
    connection.query("SELECT * FROM items", function(err, res) {
    
    if (err) throw err;
    console.log(res)
    insert()

    })

    function insert() {

        var query = connection.query(
            
            "INSERT INTO items SET ?",
            
            {
                product: "",
                price: "",
                highest_bid: "",
                highest_bidder: ""
            },

            function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " item added\n")
                

                updateBID()
            });
            console.log(query.sql)
        }

    function updateBID() {

        var query = connection.query(
            
            "UPDATE items SET ? WHERE ?",
           [ 
                {
                    highest_bid: "",
                },

                {
                    product: "",
                }
            ],
            function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " item updated\n")
                

                deleteItem()
            });
            console.log(query.sql)
        }

        function deleteItem() {

            var query = connection.query(
                
                "DELETE FROM items WHERE ?",
               
                    {
                        product: "JT",
                    },

                function(err, res) {
                    if (err) throw err;
                    
                    console.log(res.affectedRows + " item deleted\n")
                    

                    readItems()
                });
                console.log(query.sql)
            }

            function readItems() {  
                console.log("Getting Data.....\n");
                connection.query("SELECT * FROM items", function(err, res) {
                    if (err) throw err;

                    console.log(res);
                    connection.end()

                })

            }
    
// afterConnection() closing bracket
}

    


