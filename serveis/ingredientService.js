import { Ingredient } from './../models/ingredient.js';

export function getTypeOfIngredient(idIngredient) {

    idIngredient = idIngredient.toLowerCase();

    switch (idIngredient) {
        case 'imgbellpeper':
            return new Ingredient('Pimiento', 1.50, 1);
        case 'imgcheese':
            return new Ingredient('Queso', 1.80, 1);
        case 'imgcorn':
            return new Ingredient('Maíz', 1.20, 1);
        case 'imgmushroom':
            return new Ingredient('Champiñones', 0.80, 1);
        case 'imgolive':
            return new Ingredient('Aceitunas', 0.90, 1);
        case 'imgonion':
            return new Ingredient('Cebolla', 1.30, 1);
        case 'imgpepperoni':
            return new Ingredient('Pepperonis', 1.80, 1);
        case 'imgtomato':
            return new Ingredient('Tomate', 0.50, 1);
    }

}

export function getTypeOfIngredientByKeyboard(key) {

    switch (key) {
        case 112:
            return new Ingredient('Pimiento', 1.50, 1);
        case 102:
            return new Ingredient('Queso', 1.80, 1);
        case 98:
            return new Ingredient('Maíz', 1.20, 1);
        case 120:
            return new Ingredient('Champiñones', 0.80, 1);
        case 111:
            return new Ingredient('Aceitunas', 0.90, 1);
        case 99:
            return new Ingredient('Cebolla', 1.30, 1);
        case 114:
            return new Ingredient('Pepperoni', 1.80, 1);
        case 116:
            return new Ingredient('Tomate', 0.50, 1);
    }

}

export function getTypeOfIngredientByName(name) {

    switch (name) {
        case 'tomate':
            return new Ingredient('Tomate', 0.50, 1);
        case 'queso':
            return new Ingredient('Queso', 1.80, 1);
        case 'maiz':
            return new Ingredient('Maíz', 1.20, 1);
        case 'champiñones':
            return new Ingredient('Champiñones', 0.80, 1);
        case 'champiñón':
            return new Ingredient('Champiñones', 0.80, 1);
        case 'aceitunas':
            return new Ingredient('Aceitunas', 0.90, 1);
        case 'aceituna':
            return new Ingredient('Aceitunas', 0.90, 1);
        case 'cebolla':
            return new Ingredient('Cebolla', 1.30, 1);
        case 'cebollas':
            return new Ingredient('Cebolla', 1.30, 1);
        case 'pepperoni':
            return new Ingredient('Pepperonis', 1.80, 1);
        case 'pepperonis':
            return new Ingredient('Pepperonis', 1.80, 1);
        case 'peperonish':
            return new Ingredient('Pepperonis', 1.80, 1);
        case 'pimiento':
            return new Ingredient('Pimiento', 1.50, 1);
        default:
            'No es un ingrediente válido!';
    }

}