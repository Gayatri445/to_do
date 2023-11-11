//similar to const [inputList, setInputList] = useState([])
const initialData = {
  inputList: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        inputList: [
          ...state.inputList,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_TODO":
      const newList = state.inputList.filter((item) => item.id !== action.id);

      return {
        ...state,
        inputList: newList,
      };

    case "REMOVE_ALL_TODO":
      return {
        ...state,
        inputList: [],
      };
    default:
      return state;
  }
};

export default todoReducers;
