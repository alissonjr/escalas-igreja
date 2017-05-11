/**
* Valida o campo passados
* @param field
* @param {Array} config [required, type, min_length, max_length]
*/
const validate = (field, value, config) => {
    // -------------------
    if (value === undefined || (config.required && !config.required === true)) return { field, message: `${field} precisa ser informado!` };
    // -------------------
    if (config.type && typeof field !== config.type) return { field, message:`${field} precisa ser ${config.type}!` };
    // -------------------
    if (config.min_length && value.length < config.min_length) return { field, message:`${field} precisa ter no mínimo ${value[1]} caracteres!` };
    // -------------------
    if (config.max_length && value.length > config.max_length) return { field, message:`${field} precisa ter no mínimo ${value[2]} caracteres!` };
    // -------------------
    return false;
    // -------------------
};

export default validate;
