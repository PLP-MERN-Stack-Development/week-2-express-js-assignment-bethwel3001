module.exports = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (!name || !description || typeof price !== 'number' || !category || typeof inStock !== 'boolean') {
    return res.status(400).json({
      error: 'Validation error. Required fields: name (string), description (string), price (number), category (string), inStock (boolean).'
    });
  }

  next();
};
