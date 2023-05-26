import { Router } from 'express'
import StudentService from '../services/student.service.js'
const router = Router()
const Student = new StudentService()

router.post('/', async (req, res) => {
    try {
        const obj = { id: 6, nombre: "Pamela", apellido1: "Ortíz", apellido2: "Muñoz", run: "18.673.756-k", promedio: 67, peso: 64, estatura: 1.76 }
        await Student.addStudent(obj)
        const data = await Student.getStudents()
        return res.status(200).json(data)
    } catch (err) {
        console.log('error' + err)
    }

})
router.get('/', async (req, res) => {
    try {
        const data = await Student.getStudents()
        return res.render('/index')
    } catch (err) {
        console.log(err)
    }
})
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        let newStudent = await Student.getStudentById(id)
        return res.status(200).json(newStudent)
    } catch (err) {
        console.log(err)
    }

})
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const obj = { id: 7, nombre: "Paola", apellido1: "Mendez", apellido2: "Gutierrez", run: "20.689.564-6", promedio: 63, peso: 75, estatura: 1.59 }
        let newStudents = await Student.updateStudent(5, obj)
        const data = await Student.getStudents()
        return res.status(200).json(data)
    } catch (err) {
        console.log('error ' + err)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await Student.deleteStudent(id)
        const data = await Student.getStudents()
        return res.status(200).json(data)
    } catch (err) {
        console.log('error ' + err)
    }
})
router.get('/mejor', async (req, res) => {
    try {
        const r=await Student.StudentmejorPromedio(1)
        console.log(r)
        return res.status(200).json(r)
    } catch (err) {
        console.log('error ' + err)
    }
})
router.get('/imc', async (req, res) => {
    try {
        const imc = await Student.StudentIMC(2)
        console.log(imc)
        return res.status(200).json(imc)
    } catch (err) {
        console.log('error ' + err)
    }
})
router.delete('/deleteall', async (req, res) => {
    try {
        await Student.deleteALLStudents()
        const data = await Student.getStudents()
        return res.status(200).json(data)
    } catch (err) {
        console.log('error ' + err)
    }
})
export default router  