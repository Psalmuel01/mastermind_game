import { ConnectButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { chain, client, factoryAddress } from "./utils/const";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Game from "./components/Game";
import GamePlay from "./components/GamePlay";
import { useContractContext } from "./store/wallet";
import { useEffect, useState } from "react";

const App = () => {
	const [loaded, setLoaded] = useState(false);

	const { activeAccount, getCodemaker,
		checkActiveGame,
		_getLatestFeedback,
		getCodebreaker,
		getcodebreakerscore, getcodemakerscore } = useContractContext();

	useEffect(() => {
		const loadData = async () => {
			console.log("Blockchain loaded");
			setLoaded(true);
			activeAccount && await checkActiveGame();
			await checkActiveGame();
			await getCodemaker();
			await getcodemakerscore();
			await getcodebreakerscore();
			await getCodebreaker();
			await _getLatestFeedback();
		};
		loadData();
	}, []);

	return (
		<div className="bg-[#0F1116]">
			<Navbar />
			<Routes>
				<Route path="/" exact element={<Hero />} />
				<Route path="/Game" exact element={<Game />} />
				<Route path="/GamePlay" exact element={<GamePlay />} />
			</Routes>
		</div>
	);
}

export default App;