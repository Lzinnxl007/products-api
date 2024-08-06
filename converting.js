import fs from "node:fs"

const accessKey = "dtFAe3tlWao8Q3rO"

const token_response = await fetch(`http://ws.spotgifts.com.br/api/v1/authenticateclient?AccessKey=${accessKey}`)

const token_data = await token_response.json()

const token = token_data.Token

const products_response = await fetch(`http://ws.spotgifts.com.br/api/v1/products?token=${token}&lang=PT`)

const products = await products_response.json()

console.log(products)

fs.writeFile("spot.txt", JSON.stringify(products), (err) => {
    if(err) {
        console.log(err)
        return
    }
    console.log("File created!")
})


