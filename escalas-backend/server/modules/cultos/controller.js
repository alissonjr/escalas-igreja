import Culto from './model';
import utils from '../../../utils'

const validate = utils.validate;

// --------------------------------------------------
export const createCulto = async (req, res) => {
    // get atributes
    const { description, period, duration } = req.body;

    // validate
    let tests = [
        {
            field: "description",
            value: description,
            validation: { required: true, type: 'string' }
        },
        {
            field: "period",
            value: period,
            validation: { required: true, type: 'string' }
        },
        {
            field: "duration",
            value: duration,
            validation: { required: true, type: 'string' }
        }
    ];

    tests = tests.filter((item) => {
        item = validate(item.field, item.value, item.validation);
        return item;
    });

    if (tests.length > 0) {
        return res.status(400).json(tests);
    }

    const newCulto = new Culto({ description, period, duration });

    try {
        return res.status(201).json({ culto: await newCulto.save() });
    } catch (e) {
        return res.status(e.status).json({ error: true, message: `Não foi possível salvar o culto` });
    }
};
// --------------------------------------------------
export const getAllCultos = async (req, res) => {
    try {
        return res.status(200).json({ cultos: Culto.find({}).project({ period: 1, description: 1, duration: 1, updatedAt: 0, createdAt: 0, _id: 0, _v: 0 }) });
    } catch (e) {
        return res.status(e.status).json({ error: true, message: 'Nenhum culto encontrado' });
    }
};
// --------------------------------------------------
export const getCulto = async (req, res) => {
    try {
        return res.status(200).json(await Culto.findById(req.params.id_culto));
    } catch (e) {
        return res.status(e.status).json({ error: true, message: 'Culto não encontrado' });
    }
};
