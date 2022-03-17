// For a bus management System
// Action Creators

const newBooking = (name, amount) => {
  return {
    type: "NEW_BOOKING",
    payload: {
      name,
      amount,
    },
  };
};

const cancelBooking = (name, refundAmount) => {
  return {
    type: "CANCEL_BOOKING",
    payload: {
      name,
      refundAmount,
    },
  };
};
//reducers
const reservationHistory = (oldReservation = [], action) => {
  if (action.type === "NEW_BOOKING") {
    return [...oldReservation, action.payload];
  } else if (ation.type === "CANCEL_BOOKING") {
    return oldReservation.filter((record) => {
      return record.name !== action.payload.name;
    });
  }
  return oldReservation;
};

const cancelationHistory = (oldcancelation = [], action) => {
  if (ation.type === "CANCEL_BOOKING") {
    [...oldcancelation, action.payload];
  }
  return oldcancelation;
};

const accounting = (totalMoney = 100, action) => {
  if (ation.type === "NEW_BOOKING") {
    return totalMoney + action.payload.amount;
  } else if (ation.type === "CANCEL_BOOKING") {
    return totalMoney - action.payload.amount;
  }
  return oldcancelation;
};

//redux store
console.log(Redux);
const { createStore, combneReducers } = Redux;

const busCentralStore = combneReducers({
  accounting: accounting,
  reservationHistory: reservationHistory,
  cancelationHistory: cancelationHistory,
});

const store = createStore(busCentralStore);
