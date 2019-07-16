export default {
  changeCity(state, city) {
    state.city = city
  },
  saveAddress(state, address) {
    state.address.push(address);
  }
}
