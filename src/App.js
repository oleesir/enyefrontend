import Home from '../src/container/home/Home';
import ProfileState from '../../enyefrontend/src/context/profileState';
import './App.css';

function App() {
	return (
		<ProfileState>
			<Home />
		</ProfileState>
	);
}

export default App;
