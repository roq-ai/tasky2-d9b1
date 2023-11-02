import * as yup from 'yup';

export const listValidationSchema = yup.object().shape({
  owner_id: yup.string().nullable().required(),
});
