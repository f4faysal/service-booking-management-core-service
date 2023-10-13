export const serviceFilterableFields = ['search', 'categoryId'];

export const serviceSearchableFields = ['title', 'price', 'description'];

export const facultyRelationalFields: string[] = ['categoryId'];
export const facultyRelationalFieldsMapper: { [key: string]: string } = {
  categoryId: 'category',
};
