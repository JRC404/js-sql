const sql = require('mssql');
const bodyParser = require('body-parser');

const sqlConnection = async () => {
    await sql.connect('mssql://sa:YourStrong!Passw0rd@localhost,1401/DummyApiDb')
}

const SelectItem = async (req, res) => {
    await sqlConnection();
    let result;
    try {
        result = await sql.query `select * from stock`;
        console.dir(result);
        return result
    } catch (err) {
        console.log('error.');
    }
    
    return result
}

const CreateItem = async (ID, NAME, PRICE, INSTOCK) => {
    await sqlConnection();
    let result;
    try {
        result = await sql.query `insert into stock VALUES(${ID}, ${NAME}, ${PRICE}, ${INSTOCK})`;
        // result = await sql.query `insert into stock VALUES(2, "Air Force One", 100, 1)`;
        console.dir(result);
    } catch (err) {
        console.log('error');
    }
}

// await sqlConnection();

module.exports = {
    SelectItem,
    CreateItem
}