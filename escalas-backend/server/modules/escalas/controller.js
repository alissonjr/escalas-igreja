import Escala from './model';
// --------------------------------------------------
export const createEscala = async (req, res) => {
    // get atributes
    const { date, culto, description, escalados } = req.body;

    // validate
    let tests = [date, culto, description, escalados];
    tests = tests.filter(validateField);
    if (tests.length > 0) {
        return res.status(400).json(tests);
    }

    // get Model
    const newEscala = new Escala({ date, culto, description, escalados });

    try {
        return res.status(201).json({ escala: await newEscala.save() });
    } catch (e) {
        return res.status(e.status).json({ error: true, message: `Error` });
    }
};
// --------------------------------------------------
export const getAllEscalas = async (req, res) => {
    try {
        return res.status(200).json({
            escalas: await Escala.find({}).project({
                date: true,
                culto: true,
                description: true,
                escalados: true,
                updatedAt: false,
                createdAt: false,
                _id: false
            })
        });
    } catch (e) {
        return res.status(e.status).json({ error: true, message: 'Error nas escalas' });
    }
};
// --------------------------------------------------
export const getEscala = async (req, res) => {
    try {
        return res.status(200).json(await Escala.findById(req.params.id_culto));
    } catch (e) {
        return res.status(e.status).json({ error: true, message: 'Escala não encontrada' });
    }
};
// --------------------------------------------------
