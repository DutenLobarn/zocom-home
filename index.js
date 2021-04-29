const { app } = require('./core'); 
const {db, update} = require('./db')

// Turns on the vacuum(or whatever device of your choice) with the url: localhost:3001/vacuum(device name of your choice)/on.
app.put('/vacuum/on', (req, res) => {
    db.get('devices')
    // I am finding the right object with my .find method and matches it vid the value inside the key id.
    .find({id: 'VAC1'})
    // I change the value in my 'on' key from false to true.
    .assign({on: true})
    // .value make sure i get the correct datatype.
    .value();

    // update() tell the frontend to update the state.
    update()
    // res.end() ends the function. 
    res.end('vacuum started')
})
// Turns off the vacuum(or whatever device of your choice) with the url: localhost:3001/vacuum(device name of your choice)/off.
app.put('/vacuum/off', (req, res) => {
    db.get('devices')
    .find({id: 'VAC1'})
    // I change the value in my 'on' key from true to false.
    .assign({on: false})
    .value();

    update()
    res.end('vacuum shutdown')
})

app.put('/lightbedroom/on', (req, res) => {
    db.get('devices')
    .find({id: 'LIG1'})
    .assign({on: true, color: '#8A2BE2'})
    .value();

    update()
    res.end()
})
app.put('/lightbedroom/off', (req, res) => {
    db.get('devices')
    .find({id: 'LIG1'})
    .assign({on: false})
    .value();

    update()
    res.end()
})

app.put('/lightlivingroom/on', (req, res) => {
    db.get('devices')
    .find({id: 'LIG2'})
    .assign({on: true, color: '#FF69B4', brightness: 0.8})
    .value();

    update()
    res.end()
})
app.put('/lightlivingroom/off', (req, res) => {
    db.get('devices')
    .find({id: 'LIG2'})
    .assign({on: false})
    .value();

    update()
    res.end()
})

app.put('/lightgarden/on', (req, res) => {
    db.get('devices')
    .find({id: 'LIG3'})
    .assign({on: true, color: '#7CFC00'})
    .value();

    update()
    res.end()
})
app.put('/lightgarden/off', (req, res) => {
    db.get('devices')
    .find({id: 'LIG3'})
    .assign({on: false})
    .value();

    update()
    res.end()
})

app.put('/blind/on', (req, res) => {
    db.get('devices')
    .find({id: 'BLI1'})
    .assign({on: true})
    .value();

    update()
    res.end()
})
app.put('/blind/off', (req, res) => {
    db.get('devices')
    .find({id: 'BLI1'})
    .assign({on: false})
    .value();

    update()
    res.end()
})

app.put('/ac/on', (req, res) => {
    db.get('devices')
    .find({id: 'AC1'})
    .assign({on: true, temperature: 22})
    .value();

    update()
    res.end()
})
app.put('/ac/off', (req, res) => {
    db.get('devices')
    .find({id: 'AC1'})
    .assign({on: false})
    .value();
    
    update()
    res.end()
})

// Unlocks the front door with the url: localhost:3001/door/open.
app.put('/door/open', (req, res) => {
    db.get('devices')
    // I am finding the right object with my .find method and matches it vid the value inside the key id.
    .find({id: 'LOC1'})
    // I change the value in my 'locked' key from false to true.
    .assign({locked: true})
    // .value make sure i get the correct datatype.
    .value();

    // update() tell the frontend to update the state.
    update()
    // res.end() ends the function. 
    res.end()
})
// Locks the front door with the url: localhost:3001/door/closed.
app.put('/door/closed', (req, res) => {
    db.get('devices')
    .find({id: 'LOC1'})
    // I change the value in my 'locked' key from true to false.
    .assign({locked: false})
    .value();

    update()
    res.end()
})

app.put('/camera/on', (req, res) => {
    db.get('devices')
    .find({id: 'CAM1'})
    .assign({on: true})
    .value();

    update()
    res.end()
})
app.put('/camera/off', (req, res) => {
    db.get('devices')
    .find({id: 'CAM1'})
    .assign({on: false})
    .value();

    update()
    res.end()
})

app.put('/speaker/on', (req, res) => {
    db.get('devices')
    .find({id: 'SPE1'})
    .assign({on: true})
    .value();

    update()
    res.end()
})
app.put('/speaker/off', (req, res) => {
    db.get('devices')
    .find({id: 'SPE1'})
    .assign({on: false})
    .value();

    update()
    res.end()
})

app.listen(3001, () => {
    console.log('API for smart home 1.1 up n running.')
})