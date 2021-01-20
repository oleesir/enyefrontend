import React, { useContext, useEffect, useState } from 'react';
import {
	StyledHome,
	StyledContent,
	CenterSearchInput,
	CheckBoxForm,
	CheckBox,
	CheckBoxSpan,
	CheckBoxInput,
} from '../home/style';
import Aux from '../../hoc/Aux';
import ProfileContext from '../../context/profileContext';
import Search from '../../components/search/Search';
import CardList from '../../components/cardList/CardList';
import Pagination from '../../components/pagination/Pagination';
import SearchBtn from '../../components/search-button/SearchButton';

export const Home = () => {
	const profileContext = useContext(ProfileContext);
	const {
		getProfiles,
		filteredProfiles,
		genders,
		paymentMethods,
		setFilters,
		filters,
		filters: { gender, paymentMethod },
		searchTerm,
		setSearchTerm,
	} = profileContext;
	const [currentPage, setCurrentPage] = useState(1);
	const [profilesPerPage] = useState(20);

	console.log(filteredProfiles);

	useEffect(() => {
		getProfiles();
		// eslint-disable-next-line
	}, []);

	// filterCompleted = (filter) => {
	// 	this.setState({
	// 		filterGender: [...profiles.filter((todo) => (filter ? todo.Gender : ''))],
	// 	});
	// };

	const handleFilter = (event) => {
		setFilters({
			...filters,
			[event.target.name]: event.target.checked ? event.target.value : '',
		});
	};

	console.log('filteredProfiles', filteredProfiles);

	const indexOfLastPage = currentPage * profilesPerPage;
	const indexOfFirstPage = indexOfLastPage - profilesPerPage;
	const currentProfiles = filteredProfiles.slice(
		indexOfFirstPage,
		indexOfLastPage,
	);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const handleInputChange = (event) => {
		setSearchTerm(event.target.value);
	};

	return (
		<Aux>
			<StyledHome>
				<StyledContent>
					<CenterSearchInput>
						<Search value={searchTerm} handleChange={handleInputChange} />
					</CenterSearchInput>
					Filters
					<CheckBoxForm>
						Gender
						{genders.map((item) => (
							<CheckBox key={item.Email}>
								<CheckBoxInput
									type='checkbox'
									name='gender'
									value={item}
									checked={item === gender}
									onChange={handleFilter}
								/>
								<CheckBoxSpan>{item}</CheckBoxSpan>
							</CheckBox>
						))}
					</CheckBoxForm>
					<CheckBoxForm>
						Payment Method
						{paymentMethods.map((item) => (
							<CheckBox key={item.Email}>
								<CheckBoxInput
									type='checkbox'
									name='paymentMethod'
									value={item}
									checked={item === paymentMethod}
									onChange={handleFilter}
								/>
								<CheckBoxSpan>{item}</CheckBoxSpan>
							</CheckBox>
						))}
					</CheckBoxForm>
					<CardList profiles={currentProfiles} />
					<Pagination
						profilesPerPage={profilesPerPage}
						totalProfiles={filteredProfiles.length}
						paginate={paginate}
					/>
				</StyledContent>
			</StyledHome>
		</Aux>
	);
};

export default Home;
