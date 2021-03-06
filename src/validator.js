/**
 * Validator.validator
 * @author Jennie Ji - jennie.ji@hotmail.com
 */
import Regular from './validators/regular';
import NumberValidator from './validators/number';
import NumberRange from './validators/number-range';
import Length from './validators/length';
import Email from './validators/email';

/**
 * @module Validator.validator
 */
module.exports = {
	Regular,
	Number: NumberValidator,
	NumberRange,
	Length,
	Email
};