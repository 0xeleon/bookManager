import { body, query }  from 'express-validator';

const validateCreate =  [
    body('id')
        .isInt()
        .withMessage('is not integer')
        .isLength({min : 1, max: 8})
        .withMessage('the name must have minimum length of 1')
        .trim(),
    body('title')
        .isString()
        .notEmpty()
        .isLength({min : 1, max: 2000})
        .withMessage('the name must have minimum length of 1 and a maximum of 2000')
        .trim(),
    body('author')
        .isString()
        .notEmpty()
        .isLength({min : 1, max: 1000})
        .withMessage('the name must have minimum length of 1 and a maximum of 1000')
        .trim(),
    body('dateRelease')
        .isISO8601('yyyy-mm-dd')
        .withMessage('date is invalid')
        .toDate()
];

const validateUpdate = [
    query('id')
        .isInt()
        .withMessage('is not integer')
        .isLength({min : 1, max: 8})
        .withMessage('the name must have minimum length of 1')
        .trim(),
    body('title')
        .isString()
        .notEmpty()
        .isLength({min : 1, max: 2000})
        .withMessage('the name must have minimum length of 1 and a maximum of 2000')
        .trim(),
    body('author')
        .isString()
        .notEmpty()
        .isLength({min : 1, max: 1000})
        .withMessage('the name must have minimum length of 1 and a maximum of 1000')
        .trim(),
    body('dateRelease')
        .isISO8601('yyyy-mm-dd')
        .withMessage('date is invalid')
        .toDate()
]

const validateDelete = [
    query('id')
        .isInt()
        .withMessage('is not integer')
        .isLength({min : 1, max: 8})
        .withMessage('the name must have minimum length of 1')
        .trim(),
]


export {
    validateCreate,
    validateUpdate,
    validateDelete
}