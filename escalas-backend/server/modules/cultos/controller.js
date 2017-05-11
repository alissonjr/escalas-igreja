import Culto from './model';
import utils from '../../../utils'

const validate = utils.validate;

// --------------------------------------------------
export const createCulto = async (req, res) => {
    // get atributes
    const { description, period, duration } = req.body;

    // validate
    let validation = [
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

    validation = validation.map((item) => validate(item.field, item.value, item.validation)).filter((item) => item);

    if (validation.length > 0) {
        return res.status(400).json({ error: true, messages: validation });
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

    const id_culto = req.params.id_culto;
    const validation = validate(item.field, item.value, item.validation) !== false;

    if(validation)
        return res.status(400).json({ error: true, message: validation });

    try {
        return res.status(200).json(await Culto.findById());
    } catch (e) {
        return res.status(e.status).json({ error: true, message: 'Culto não encontrado' });
    }
};
