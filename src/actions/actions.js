

// think it as the paramter you will take
// must have type: extra could have payload or data itself
// if it is a single item, i just write a name
// if it is an object or multiple fields, i put it as a payload

export const toggleToCart = id => ({
    type: 'TOGGLE_TO_CART',
    id
})