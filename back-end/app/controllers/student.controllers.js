const {getList, getDetail, create, update, deleteById} = require("../Services/student.services");

// Lấy danh sách học sinh
const getStudentList = async (req, res) => {
    const studentList = await getList();
    if(studentList){
        res.status(200).send(studentList);
    }else{
        res.status(404).send("Not Found!");
    }
};

// Lấy thông tin chi tiết học sinh
const getStudentDetailById = async (req, res) => {
    const params = req.params;
    const id = params.id
    const student = await getDetail(id);
    if(student){
        res.status(200).send(student);
    }else{
        res.status(404).send("Not Found!");
    }
};

// thêm học sinh
const createStudent = async (req, res) => {
    let student = req.body;
    const newStudent = await create(student);
    res.status(201).send(newStudent);
    };

// cập nhập học sinh
const updateStudentById = async (req, res) => {
    const { id } = req.params;
    const student = req.body;
    
    const studentUpdated = await update(id, student);

    if(studentUpdated){
        res.status(200).send(studentUpdated)
    }else{
        res.status(404).send("Not Found!");
    }
};

// xóa học sinh
const deleteStudentById = async (req, res) => {
    const { id } = req.params;
    const studentDeleted = await deleteById(id);
    if(studentDeleted){
        res.status(200).send(studentDeleted);
    }else{
        res.status(404).send("Not Found!");
    }
};


module.exports = {
    getStudentList,
    getStudentDetailById,
    createStudent,
    updateStudentById,
    deleteStudentById
};