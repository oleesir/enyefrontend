import Home from './container/home/Home';
import ProfileState from './context/profileState';
import './App.css';

function App() {
	return (
		<ProfileState>
			<Home />
		</ProfileState>
	);
}

export default App;
