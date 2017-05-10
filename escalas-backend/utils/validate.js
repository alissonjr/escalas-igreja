/**
* Valida o campo passados
* @param field
* @param {Array} config [required, type, min_length, max_length]
*/
export default async (field, value, config) => {
    // -------------------
    let messages = [];
    // -------------------
    if (!field || !config.required) return { error: true, messages: `${value} precisa ser informado!` };
    // -------------------
    if (typeof field !== config.type) messages.push(`${value}: precisa ser string!`);
    // -------------------
    if (field.length < config.min_length) messages.push(`${value} precisa ter no mínimo ${value[1]} caracteres!`);
    // -------------------
    if (field.length > config.max_length) messages.push(`${value} precisa ter no mínimo ${value[2]} caracteres!`);
    // -------------------
    return messages.length > 0 ? { error: true, messages } : false;
    // -------------------
}
