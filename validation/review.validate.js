import { body, query }  from 'express-validator';

const validateCreate =  [
    body('text')
        .isString()
        .notEmpty()
        .isLength({min : 1, max: 500})
        .withMessage('the name must have minimum length of 1 and a maximum of 500')
        .trim(),
    body('name')
        .isString()
        .notEmpty()
        .isLength({min : 1, max: 200})
        .withMessage('the name must have minimum length of 1 and a maximum of 200')
        .trim(),
    body('book')
        .isInt()
        .withMessage('is not integer')
        .isLength({min : 1, max: 8})
        .withMessage('the name must have minimum length of 1')
        .trim()
];

const validateUpdate = [
    query('_id')
        .isMongoId()
        .withMessage('is not a mongo id'),
    body('text')
        .isString()
        .notEmpty()
        .isLength({min : 1, max: 500})
        .withMessage('the name must have minimum length of 1 and a maximum of 500')
        .trim(),
    body('name')
        .isString()
        .notEmpty()
        .isLength({min : 1, max: 200})
        .withMessage('the name must have minimum length of 1 and a maximum of 200')
        .trim(),
]

const validateDelete = [
    query('_id')
        .isMongoId()
        .withMessage('is not a mongo id'),
]


export {
    validateCreate,
    validateUpdate,
    validateDelete
}