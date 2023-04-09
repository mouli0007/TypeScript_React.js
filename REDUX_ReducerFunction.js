enum REDUX_ACTION_TYPE {
  DEPOSIT,
  WITHDRAW,
  BANKRUPT,
}

type ReducerAction = {
  type: REDUX_ACTION_TYPE;
  payload?: number;
};

interface DepositAction {
  type: REDUX_ACTION_TYPE.DEPOSIT;
  payload: number;
}

interface WithDrawAction {
  type: REDUX_ACTION_TYPE.WITHDRAW;
  payload: number;
}

interface BankruptActions {
  type: REDUX_ACTION_TYPE.BANKRUPT;
}


export type Action_ = DepositAction | WithDrawAction | BankruptActions;

// TypeScript for initial state
const initialState = 0;

const reducer = (state: number = initialState, action: Action_) => {
  switch (action.type) {
    case REDUX_ACTION_TYPE.DEPOSIT:
      return state + action.payload;

    case REDUX_ACTION_TYPE.WITHDRAW:
      return state - action.payload;

    case REDUX_ACTION_TYPE.BANKRUPT:
      return 0;

    default:
      return state;
  }
};

export default reducer;
