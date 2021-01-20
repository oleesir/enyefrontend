import React, { useReducer, useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import axios from 'axios';
import ProfileContext from '../context/profileContext';
import ProfileReducer from '../context/profileReducer';
import { GET_USERS, GET_USERS_ERROR, SET_FILTERED_USERS } from '../types';

const AuthState = (props) => {
	const initialState = {
		profiles: [],
		filteredProfiles: [],
		genders: [],
		paymentMethods: [],
		isLoading: true,
	};

	const [state, dispatch] = useReducer(ProfileReducer, initialState);
	const { profiles, filteredProfiles } = state;
	const [filters, setFilters] = useState({
		gender: '',
		paymentMethod: '',
	});
	const [searchTerm, setSearchTerm] = useState('');

	const getProfiles = async () => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.get(
				'https://api.enye.tech/v1/challenge/records',
				config,
			);

			dispatch({
				type: GET_USERS,
				payload: res.data.records.profiles,
			});

			return res.data.data;
		} catch (err) {
			dispatch({
				type: GET_USERS_ERROR,
				payload: err,
			});
		}
	};

	useDeepCompareEffect(() => {
		(async () => {
			let reFilteredProfiles = profiles;

			if (profiles.length === 0) {
				await getProfiles();
			}

			if (filters.paymentMethod) {
				reFilteredProfiles = reFilteredProfiles.filter((profile) => {
					return profile.PaymentMethod.toLowerCase() === filters.paymentMethod;
				});
			}

			if (filters.gender) {
				reFilteredProfiles = reFilteredProfiles.filter((profile) => {
					return profile.Gender.toLowerCase() === filters.gender;
				});
			}

			if (searchTerm) {
				const lowerCaseSearchTerm = searchTerm.toLowerCase();
				reFilteredProfiles = reFilteredProfiles.filter((profile) => {
					return (
						profile.FirstName.toLowerCase().includes(lowerCaseSearchTerm) ||
						profile.LastName.toLowerCase().includes(lowerCaseSearchTerm) ||
						profile.UserName.toLowerCase().includes(lowerCaseSearchTerm) ||
						profile.Email.toLowerCase().includes(lowerCaseSearchTerm)
					);
				});
			}

			dispatch({
				type: SET_FILTERED_USERS,
				payload: reFilteredProfiles,
			});
		})();
	}, [filters, profiles, filteredProfiles, searchTerm]);

	return (
		<ProfileContext.Provider
			value={{
				profiles: state.profiles,
				filteredProfiles: state.filteredProfiles,
				isLoading: state.isLoading,
				getProfiles,
				filters,
				setFilters,
				searchTerm,
				setSearchTerm,
				genders: state.genders,
				paymentMethods: state.paymentMethods,
			}}
		>
			{props.children}
		</ProfileContext.Provider>
	);
};

export default AuthState;
