const Teacher = require("../models/Teacher");
const Course = require("../models/Course");
const router = require("express").Router();

router
    .post("/teachers",async (req, res, next) => {
        try {
            const teacher = await Teacher.create(req.body);
            res.status(201).location(teacher.id).send().json({ message: "teacher created" })
        } catch (error) {
            next(error)
        }
    })
    .get("/teachers",async (req, res, next) => {
        try {
            const teachers = await Teacher.findAll();
            if (teachers.length > 0) {
                res.json(teachers)//trimitem profesorii existenti
            } else {
                res.status(404).json({ message: "not found" });
            }
        } catch (error) {
            next(error)
        }
    })


    //FUNCTIE CARE PERMITE ADAUGAREA UNUI CURS PENTRU UN ANUMIT PROFESOR
    //adaugare curs la un anumit profesor

    .post('/teachers/:teacherId/courses', async (req, res, next) => {
        try {
            //cautare profesor
            const teacher= await Teacher.findByPk(req.params.teacherId);
            if (teacher) {
                const course= await Course.create(req.body);
                teacher.addCourse(course);
                await teacher.save();
                res.status(201).json({message:"created"})
    
            } else {
                res.status(404).json({ message: "not found" })
            }
    
        } catch (error) {
            next(error)
            res.status(400).json({message:"eroare"});
        }
    })


    //afisarea cursurilor unui anumit profesor
    .get('/teachers/:teacherId/courses', async (req, res, next) => {
        try {
            const teacher = await Teacher.findByPk(req.params.teacherId);
            if (teacher) {
                const courses = await teacher.getCourses();
                if (courses.length > 0) {
                    res.json(courses)//trimitem cursurile identificate
    
                } else {
                    res.status(404).json({ message: " no courses" })
                }
    
    
            } else {
                res.status(404).json({ message: "no teacher" })
            }
    
        } catch (error) {
            next(error)
        }
    })

    //afisarea unui anumit curs al unui profesor
    .get('/teachers/:teacherId/courses/:courseId', async(req,res,next)=>{
        try{
            const teacher = await Teacher.findByPk(req.params.teacherId);
            if (teacher) {
                const courses = await teacher.getCourses({where: {id: req.params.courseId}});
                const course=courses.shift()
                if (course) {
                    res.json(course)//trimitem cursurile identificate
    
                } else {
                    res.status(404).json({ message: " no courses" })
                }
    
    
            } else {
                res.status(404).json({ message: "no teacher" })
            }
    
        }catch(error){
            next(error)
        }
    })

    .delete('/teachers/:teacherId',async(req,res,next)=>{
        try{
            const teacher = await Teacher.findByPk(req.params.teacherId);
            if(teacher){
                await teacher.destroy();
                res.status(200).json({
                    message : 'accepted'
                });
            }else{
                res.status(404).json({
                    message:" teacher not found"
                })
            }

        }catch(err){
            next(err)
        }
    })

    
    module.exports = router;