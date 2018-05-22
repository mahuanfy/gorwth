export default function(state=[],action){
    switch(action.type){
        case "USER_LOGIN_INFO":
            return {...state,Info:action.content}
    }
}