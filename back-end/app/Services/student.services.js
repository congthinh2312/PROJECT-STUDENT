const {Student} = require("../model/index");

// danh sách học sinh
// let studentList = [
//     {
//         "id" : 1,
//         "fullName" : "Dang Cong Thinh",
//         "age" : 18,
//         "numberClass" : 12
//     },
//     {
//         "id" : 2,
//         "fullName" : "Nguyen Thi Quynh Tien",
//         "age" : 15,
//         "numberClass" : 9
//     },
//     {
//         "id" : 3,
//         "fullName" : "Nguyen Hoang Phuc",
//         "age" : 14,
//         "numberClass" : 8
//     },
// ]

// Lấy danh sách học sinh
const getList = async () => {
    const studentList = await Student.findAll();
    if(studentList){
        return studentList;
    }else{
        return false;
    }
};

// Lấy thông tin chi tiết học sinh
const getDetail = async (id) => {
    const student = await Student.findOne({
        where: {
            id
        },
    });
    
    if(student){
        return student;
    }else{
        return false;
    }
};


// thêm học sinh
const create = async (student) => {
    const newStudent = await Student.create(student);
    return newStudent;
};

// cập nhập học sinh
const update = async (id, student) => {
    const studentUpdate = await getDetail(id);
    if (studentUpdate) {
        studentUpdate.fullName = student.fullName;
        studentUpdate.age = student.age;
        studentUpdate.numberClass = student.numberClass;
        const studentUpdated = await studentUpdate.save();
        return studentUpdated;
    } else {
        return false;
    }
};

// xóa học sinh
const deleteById = async (id) => {
    const studentDelete = await getDetail(id);
    if (studentDelete) {
        await Student.destroy({
            where: {
                id,
            },
        });
        return studentDelete;
    } else {
        return false;
    }
};

module.exports = {
    getList,
    getDetail,
    create,
    update,
    deleteById,
};