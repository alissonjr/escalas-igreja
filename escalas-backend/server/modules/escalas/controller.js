import Escala from './model';

export const createEscala = async (req, res) => {
  const { title, description } = req.body;
  const newEscala = new Escala({ title, description });

  try {
    return res.status(201).json({ escala: await newEscala.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: `Error` });
  }
};

export const getAllEscalas = async (req, res) => {
  try {
    return res.status(200).json({ escalas: await Escala.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error nas escalas' });
  }
};

export const getEscala = async (req, res) => {
  try {
    return res.status(200).json(await Escala.findOne({ _id: ObjectId(req.params.id_escala) }));
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error na escala' });
  }
};
