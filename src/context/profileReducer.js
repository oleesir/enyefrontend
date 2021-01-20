/* eslint-disable import/no-anonymous-default-export */
import { GET_USERS_ERROR, GET_USERS, SET_FILTERED_USERS } from '../types';

export default (state, action) => {
	const { type } = action;

	switch (type) {
		case GET_USERS:
			return {
				...state,
				profiles: action.payload,
				filteredProfiles: action.payload,
				isLoading: false,
				genders: Array.from(
					new Set(
						action.payload.map((profile) => profile.Gender.toLowerCase()),
					),
				),
				paymentMethods: Array.from(
					new Set(
						action.payload.map((profile) =>
							profile.PaymentMethod.toLowerCase(),
						),
					),
				),
			};
		case SET_FILTERED_USERS:
			return {
				...state,
				isLoading: false,
				filteredProfiles: action.payload,
			};
		case GET_USERS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
