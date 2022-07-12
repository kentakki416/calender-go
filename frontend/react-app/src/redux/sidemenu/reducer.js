import { TOGGLE_NAVIGATION_MENU } from "./actions"

const init = { active: false};

const sidemenuReducer = (state = init, action) => {
    const {type} = action;
    switch (type) {
        case TOGGLE_NAVIGATION_MENU:
            return {active: !state.active};
        default:
            return state;
    }
}

export default sidemenuReducer;