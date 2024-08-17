import {UserType} from '../HW8'


//
// export type CheckActionType = ReturnType<typeof checkAC>


type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state];
            return newState.sort((a, b) => {
                if (action.payload === 'up') {
                    return a.name > b.name ? 1 : -1;
                } else if (action.payload === 'down') {
                    return a.name < b.name ? 1 : -1;
                }
                return 0;
            });
        }
        case 'check': {
            return state.filter((u: UserType) => u.age >= action.payload);
        }
        default:
            return state;
    }
};
//
// export const checkAC = (age: number) => {
//     return {
//         type: 'check',
//         payload: age
//     } as const
// }