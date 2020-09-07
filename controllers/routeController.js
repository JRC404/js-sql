const connection = require('../lib/connection');


exports.getIndex = async (req, res) => {
    // let values = await functions.SelectIndividual();
    // let values = await functions.SelectAll();
    // console.log(values.recordset);
    // let display = values.recordset;
    await connection.SelectItem();
    // let result = await connection.CreateItem();
    // console.table(values.recordset);
    // console.log(result);
    res.send('Hello')
    // res.send(result.recordset[0]);
}

exports.getItems = async (req, res) => {
    let result = await connection.CreateItem();
    res.send(result.recordset[0]);
}