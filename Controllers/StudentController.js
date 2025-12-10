const getStudents = (req, res) => {
    let setData = { "name": "Siddu", "id": "42A1" };
    res.status(200).json({ data: setData });
}
const addStudents = (req, res) => {
    const addData = { "name": "HanuMan", "id": "infinite" };
    res.status(200).json({ data: addData });
}
const updateStudents = (req, res) => {
    const update = { "name": "MOM", "id": "DAD" };
    const update1 = { "name": "Jai Shri Ram", "id": "My Heart" };
    res.status(200).json({ message: update, update1 });
}
export { getStudents, addStudents, updateStudents };