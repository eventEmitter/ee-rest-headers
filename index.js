/**
 * @todo Add a possiblity to directly hook in transformations
 * @todo Add dedicated collections for select, order and filter statements
 * @todo Allow to hook in additional rules for node transformation
 */

var   parser              = require('./lib/parser/HeaderParser')
    , ParserMiddleware    = require('./lib/ParserMiddleware')
    , Visitor             = require('./lib/visitor/NodeVisitor');

/**
 * The error classes for proper error handling.
 *
 * @type {exports}
 */
module.exports.error    = require('./lib/error');

/**
 * The middleware for the services.
 *
 * @type {*}
 */
module.exports.Middleware = ParserMiddleware;

/**
 * The parser itself.
 * @type {*|exports}
 */
module.exports.parser = parser;


/**
 * A depth first visitor.
 *
 * @type {*|exports}
 */
module.exports.Visitor = Visitor;

/**
 * Parses a select statement into a collection of properties and variables.
 *
 * @param aString
 * @returns {*}
 */
module.exports.parseSelect = function(aString){
    return parser.parse(aString, {startRule: 'select'});
};

/**
 * Parses a filter statement and creates a collection of comparison objects.
 *
 * @param aString
 * @returns {*}
 */
module.exports.parseFilter = function(aString){
    return parser.parse(aString, {startRule: 'filter'});
};

/**
 * Parses an order statement and creates a collection of possibly tagged variable or property nodes.
 *
 * @param aString
 * @returns {*}
 */
module.exports.parseOrder = function(aString){
    return parser.parse(aString, {startRule: 'order'});
};