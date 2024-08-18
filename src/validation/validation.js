export const validate = (schema, requst) => {
   const result = schema.validate(requst)
   if (result.error) {
       throw result.error;
   } else {
    return result.value;
   }
};

export {
    validate
}