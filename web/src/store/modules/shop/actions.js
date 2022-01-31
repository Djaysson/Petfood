import types from "../shop/types";

export function setCustomer(customer) {
  return { type: types.SET_CUSTOMER, customer };
}
