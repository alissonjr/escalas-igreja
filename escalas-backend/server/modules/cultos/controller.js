import Culto from './model';

export const createCulto = async (req, res) => {
  const { description, period, duration } = req.body;
  const newCulto = new Culto({ description, period, duration });

  try {
    return res.status(201).json({ culto: await newCulto.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: `Não foi possível salvar o culto` });
  }
};

export const getAllCultos = async (req, res) => {
  try {
    return res.status(200).json({ cultos: await Culto.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Nenhum culto encontrado' });
  }
};

export const getCulto = async (req, res) => {
  try {
    return res.status(200).json(await Culto.findById(req.params.id_culto));
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Culto não encontrado' });
  }
};
