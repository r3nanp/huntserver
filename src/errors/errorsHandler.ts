import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'
import { IValidationErrors } from '../repositories/IValidationErrors'

const errorHandler: ErrorRequestHandler = (error, request, response) => {
  if (error instanceof ValidationError) {
    const errors: IValidationErrors = {}

    error.inner.forEach(err => {
      errors[err.path] = err.errors
    })

    return response.status(400).json({ message: 'Validation fails', errors })
  }

  return response.status(500).json({ message: 'Internal server error' })
}

export { errorHandler }
