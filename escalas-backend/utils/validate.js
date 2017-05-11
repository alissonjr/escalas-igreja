/**
* Valida o campo passados
* @param field
* @param {Array} config [required, type, min_length, max_length]
*/
const validate = (field, value, config) => {
    // -------------------
    let messages = [];
    // -------------------
    if (value === undefined || (config.required && !config.required === true)){
      return { error: true, field, messages: `${field} precisa ser informado!` };
    }
    // -------------------
    if (config.type && typeof field !== config.type) messages.push(`${field}: precisa ser ${config.type}!`);
    // -------------------
    if (config.min_length && value.length < config.min_length) messages.push(`${field} precisa ter no mínimo ${value[1]} caracteres!`);
    // -------------------
    if (config.max_length && value.length > config.max_length) messages.push(`${field} precisa ter no mínimo ${value[2]} caracteres!`);
    // -------------------
    return messages.length > 0 ? { error: true, field, messages } : false;
    // -------------------
};

export default validate;
