import React, { useContext, useEffect, useState } from 'react';
import {
	StyledHome,
	StyledContent,
	CenterSearchInput,
	CheckBoxForm,
	CheckBox,
	CheckBoxSpan,
	CheckBoxInput,
	StyledFooter,
} from '../home/style';
import Aux from '../../hoc/Aux';
import ProfileContext from '../../context/profileContext';
import Search from '../../components/search/Search';
import CardList from '../../components/cardList/CardList';
import Spinner from '../../components/loader/Loader';
import Pagination from '../../components/pagination/Pagination';

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
		isLoading,
	} = profileContext;
	const [currentPage, setCurrentPage] = useState(1);
	const [profilesPerPage] = useState(20);

	useEffect(() => {
		getProfiles();
		// eslint-disable-next-line
	}, []);

	const handleFilter = (event) => {
		setFilters({
			...filters,
			[event.target.name]: event.target.checked ? event.target.value : '',
		});
	};

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
				{isLoading && <Spinner />}
				{!isLoading && (
					<StyledContent>
						<CenterSearchInput>
							<Search value={searchTerm} handleChange={handleInputChange} />
						</CenterSearchInput>
						<CheckBoxForm>
							<p>Gender</p>
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
							<p>Payment Method</p>
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
					</StyledContent>
				)}

				<StyledFooter>
					<Pagination
						profilesPerPage={profilesPerPage}
						totalProfiles={filteredProfiles.length}
						paginate={paginate}
					/>
				</StyledFooter>
			</StyledHome>
		</Aux>
	);
};

export default Home;
