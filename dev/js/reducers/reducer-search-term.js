export default function (state='', action) {
   
   switch (action.type) {
       case "REMEMBER_SEARCH_INPUT":
        return action.payload;
        break;
   }
   
   
    return state;
}