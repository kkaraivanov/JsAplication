import {
    login,
    logout,
    register
} from './userService.js'
import {
    getAll,
    getById,
    deleteById,
    addData,
    editData,
    getSortedById,
    addOffer,
    getCountOffer,
    getIsApply
} from './fakeDataService.js';
import { getUser } from './storageService.js'

export const dataService = {
    register,
    login,
    logout,
    getAll,
    getById,
    deleteById,
    addData,
    editData,
    getSortedById,
    getUser,
    addOffer,
    getCountOffer,
    getIsApply
}